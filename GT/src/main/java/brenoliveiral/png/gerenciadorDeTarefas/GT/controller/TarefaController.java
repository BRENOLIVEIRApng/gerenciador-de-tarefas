package brenoliveiral.png.gerenciadorDeTarefas.GT.controller;

import brenoliveiral.png.gerenciadorDeTarefas.GT.model.Tarefa;
import brenoliveiral.png.gerenciadorDeTarefas.GT.service.TarefaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tarefas")
@CrossOrigin(origins = "*")
public class TarefaController {
    private final TarefaService service;

    public TarefaController(TarefaService service) {
        this.service = service;
    }

    @GetMapping
    public List<Tarefa> listarTodas() {
        return service.listarTodas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tarefa> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Tarefa criar(@RequestBody Tarefa tarefa) {
        return service.salvar(tarefa);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tarefa> atualizar(@PathVariable Long id, @RequestBody Tarefa tarefa) {
        return service.buscarPorId(id)
                .map(tarefaExistente -> {
                    tarefaExistente.setTitulo(tarefa.getTitulo());
                    tarefaExistente.setDescricao(tarefa.getDescricao());
                    tarefaExistente.setPrioridade(tarefa.getPrioridade());
                    tarefaExistente.setConcluida(tarefa.isConcluida());
                    return ResponseEntity.ok(service.salvar(tarefaExistente));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (service.buscarPorId(id).isPresent()) {
            service.deletarPorId(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
