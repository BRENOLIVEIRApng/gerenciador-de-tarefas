// Funções utilitárias globais
class GerenciadorTarefasUI {
    constructor() {
        this.apiUrl = '/api/tarefas';
        this.iniciarEventListeners();
    }

    iniciarEventListeners() {
        // Listeners globais podem ser adicionados aqui
    }

    // Função para mostrar notificações
    mostrarNotificacao(mensagem, tipo = 'info') {
        const tipos = {
            success: { classe: 'alert-success', icone: 'fa-check-circle' },
            error: { classe: 'alert-danger', icone: 'fa-exclamation-circle' },
            warning: { classe: 'alert-warning', icone: 'fa-exclamation-triangle' },
            info: { classe: 'alert-info', icone: 'fa-info-circle' }
        };

        const tipoConfig = tipos[tipo] || tipos.info;

        const notificacao = document.createElement('div');
        notificacao.className = `alert ${tipoConfig.classe} alert-dismissible fade show position-fixed`;
        notificacao.style.cssText = 'top: 20px; right: 20px; z-index: 1050; min-width: 300px;';
        notificacao.innerHTML = `
            <i class="fas ${tipoConfig.icone} me-2"></i>
            ${mensagem}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        document.body.appendChild(notificacao);

        // Remove automaticamente após 5 segundos
        setTimeout(() => {
            if (notificacao.parentNode) {
                notificacao.remove();
            }
        }, 5000);
    }

    // Função para formatar datas
    formatarData(dataString) {
        const data = new Date(dataString);
        return data.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

// Inicializa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    window.gerenciadorUI = new GerenciadorTarefasUI();
});

// Funções de utilidade para requisições HTTP
const ApiClient = {
    async get(url) {
        const response = await fetch(url);
        return response.json();
    },

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return response;
    },

    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return response;
    },

    async delete(url) {
        const response = await fetch(url, { method: 'DELETE' });
        return response;
    }
};