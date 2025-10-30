class GerenciadorTarefas {
    constructor() {
        this.apiUrl = '/api/tarefas';
        this.tarefas = [];
        this.filtroAtual = 'todas';
        this.iniciar();
    }

    async iniciar() {
        this.configurarEventListeners();
        await this.carregarTarefas();
        this.atualizarEstatisticas();
        this.atualizarContadorFiltrado();
    }

    configurarEventListeners() {
        // Formulário de nova tarefa
        document.getElementById('form-tarefa').addEventListener('submit', (e) => {
            e.preventDefault();
            this.adicionarTarefa();
        });

        // Filtros modernos
        document.querySelectorAll('.filtro-moderno').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filtro = e.currentTarget.dataset.filtro;
                this.aplicarFiltro(filtro);
            });
        });
    }

    async carregarTarefas() {
        try {
            this.tarefas = await ApiClient.get(this.apiUrl);
            this.renderizarTarefas();
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
            gerenciadorUI.mostrarNotificacao('Erro ao carregar tarefas', 'error');
        }
    }

    renderizarTarefas() {
        const lista = document.getElementById('lista-tarefas');

        if (this.tarefas.length === 0) {
            lista.innerHTML = `
                <div class="text-center py-5 text-muted">
                    <i class="fas fa-tasks fa-3x mb-3 opacity-50"></i>
                    <p>Nenhuma tarefa encontrada. Adicione sua primeira tarefa!</p>
                </div>
            `;
            return;
        }

        const tarefasFiltradas = this.filtrarTarefas(this.tarefas);

        if (tarefasFiltradas.length === 0) {
            lista.innerHTML = `
                <div class="text-center py-5 text-muted">
                    <i class="fas fa-filter fa-3x mb-3 opacity-50"></i>
                    <p>Nenhuma tarefa encontrada para o filtro selecionado.</p>
                </div>
            `;
            return;
        }

        lista.innerHTML = tarefasFiltradas.map(tarefa => this.criarCardTarefa(tarefa)).join('');
    }

    filtrarTarefas(tarefas) {
        switch (this.filtroAtual) {
            case 'pendentes':
                return tarefas.filter(t => !t.concluida);
            case 'concluidas':
                return tarefas.filter(t => t.concluida);
            default:
                return tarefas;
        }
    }

    criarCardTarefa(tarefa) {
        const prioridadeClasses = {
            'BAIXA': 'badge-baixa',
            'MEDIA': 'badge-media',
            'ALTA': 'badge-alta'
        };

        const dataFormatada = new Date(tarefa.dataCriacao).toLocaleDateString('pt-BR');

        return `
            <div class="card card-tarefa mb-3 fade-in ${tarefa.concluida ? 'concluida' : ''}
                 ${tarefa.prioridade === 'ALTA' ? 'prioridade-alta' :
                   tarefa.prioridade === 'MEDIA' ? 'prioridade-media' : ''}">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start">
                        <div class="flex-grow-1">
                            <h5 class="card-title d-flex align-items-center">
                                ${tarefa.titulo}
                                <span class="badge ${prioridadeClasses[tarefa.prioridade]} ms-2">
                                    ${tarefa.prioridade}
                                </span>
                                ${tarefa.concluida ?
                                    '<span class="badge bg-success ms-2"><i class="fas fa-check me-1"></i>Concluída</span>' : ''}
                            </h5>
                            ${tarefa.descricao ? `<p class="card-text text-muted">${tarefa.descricao}</p>` : ''}
                            <small class="text-muted">Criado em: ${dataFormatada}</small>
                        </div>
                        <div class="btn-group ms-3">
                            <button class="btn btn-sm ${tarefa.concluida ? 'btn-warning' : 'btn-success'}"
                                    onclick="gerenciadorTarefas.toggleConcluida(${tarefa.id}, ${tarefa.concluida})">
                                <i class="fas ${tarefa.concluida ? 'fa-undo' : 'fa-check'} me-1"></i>
                                ${tarefa.concluida ? 'Reabrir' : 'Concluir'}
                            </button>
                            <button class="btn btn-sm btn-danger"
                                    onclick="gerenciadorTarefas.excluirTarefa(${tarefa.id})">
                                <i class="fas fa-trash me-1"></i>
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    aplicarFiltro(filtro) {
        this.filtroAtual = filtro;

        // Atualiza botões de filtro
        document.querySelectorAll('.filtro-moderno').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filtro === filtro);
        });

        this.renderizarTarefas();
        this.atualizarContadorFiltrado();
    }

    async adicionarTarefa() {
        const titulo = document.getElementById('titulo').value.trim();
        const descricao = document.getElementById('descricao').value.trim();
        const prioridade = document.getElementById('prioridade').value;

        if (!titulo) {
            gerenciadorUI.mostrarNotificacao('O título é obrigatório', 'warning');
            return;
        }

        const novaTarefa = {
            titulo,
            descricao,
            prioridade,
            concluida: false
        };

        try {
            const resposta = await ApiClient.post(this.apiUrl, novaTarefa);

            if (resposta.ok) {
                document.getElementById('form-tarefa').reset();
                gerenciadorUI.mostrarNotificacao('Tarefa adicionada com sucesso!', 'success');
                await this.carregarTarefas();
                this.atualizarEstatisticas();
                this.atualizarContadorFiltrado();
            } else {
                throw new Error('Erro na resposta do servidor');
            }
        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error);
            gerenciadorUI.mostrarNotificacao('Erro ao adicionar tarefa', 'error');
        }
    }

    async toggleConcluida(id, estaConcluida) {
        try {
            // Busca a tarefa atual
            const tarefa = await ApiClient.get(`${this.apiUrl}/${id}`);
            tarefa.concluida = !estaConcluida;

            const resposta = await ApiClient.put(`${this.apiUrl}/${id}`, tarefa);

            if (resposta.ok) {
                const mensagem = tarefa.concluida ? 'Tarefa concluída!' : 'Tarefa reaberta!';
                gerenciadorUI.mostrarNotificacao(mensagem, 'info');
                await this.carregarTarefas();
                this.atualizarEstatisticas();
                this.atualizarContadorFiltrado();
            }
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
            gerenciadorUI.mostrarNotificacao('Erro ao atualizar tarefa', 'error');
        }
    }

    async excluirTarefa(id) {
        if (!confirm('Tem certeza que deseja excluir esta tarefa?')) return;

        try {
            const resposta = await ApiClient.delete(`${this.apiUrl}/${id}`);

            if (resposta.ok) {
                gerenciadorUI.mostrarNotificacao('Tarefa excluída com sucesso!', 'warning');
                await this.carregarTarefas();
                this.atualizarEstatisticas();
                this.atualizarContadorFiltrado();
            }
        } catch (error) {
            console.error('Erro ao excluir tarefa:', error);
            gerenciadorUI.mostrarNotificacao('Erro ao excluir tarefa', 'error');
        }
    }

    atualizarEstatisticas() {
        const total = this.tarefas.length;
        const concluidas = this.tarefas.filter(t => t.concluida).length;
        const pendentes = total - concluidas;

        // Atualiza estatísticas principais
        document.getElementById('total-tarefas').textContent = total;
        document.getElementById('concluidas-tarefas').textContent = concluidas;
        document.getElementById('pendentes-tarefas').textContent = pendentes;

        // Atualiza badges dos filtros com animação
        this.atualizarBadgeFiltro('badge-todas', total);
        this.atualizarBadgeFiltro('badge-pendentes', pendentes);
        this.atualizarBadgeFiltro('badge-concluidas', concluidas);
    }

    atualizarBadgeFiltro(badgeId, valor) {
        const badge = document.getElementById(badgeId);
        if (badge) {
            badge.textContent = valor;
            badge.classList.add('updated');
            setTimeout(() => badge.classList.remove('updated'), 500);
        }
    }

    atualizarContadorFiltrado() {
        const contador = document.getElementById('contador-filtrado');
        const tarefasFiltradas = this.filtrarTarefas(this.tarefas);
        const total = tarefasFiltradas.length;

        const mensagens = {
            'todas': `Mostrando ${total} tarefa${total !== 1 ? 's' : ''}`,
            'pendentes': `${total} tarefa${total !== 1 ? 's' : ''} pendente${total !== 1 ? 's' : ''}`,
            'concluidas': `${total} tarefa${total !== 1 ? 's' : ''} concluída${total !== 1 ? 's' : ''}`
        };

        contador.textContent = mensagens[this.filtroAtual] || 'Nenhuma tarefa';
    }
}

// Inicializa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    window.gerenciadorTarefas = new GerenciadorTarefas();
});