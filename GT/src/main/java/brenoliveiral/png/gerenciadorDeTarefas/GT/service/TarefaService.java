package brenoliveiral.png.gerenciadorDeTarefas.GT.service;

import brenoliveiral.png.gerenciadorDeTarefas.GT.model.Tarefa;
import brenoliveiral.png.gerenciadorDeTarefas.GT.repository.TarefaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TarefaService {

    private final TarefaRepository repository;

    public TarefaService(TarefaRepository repository) {
        this.repository = repository;
    }
    public List<Tarefa> listarTodas(){
        return repository.findAll();
    }
    public Optional<Tarefa> buscarPorId(Long id){
        return repository.findById(id);
    }
    public Tarefa salvar (Tarefa tarefa){
        return repository.save(tarefa);
    }
    public void deletarPorId(Long id){
        repository.deleteById(id);
    }
}
