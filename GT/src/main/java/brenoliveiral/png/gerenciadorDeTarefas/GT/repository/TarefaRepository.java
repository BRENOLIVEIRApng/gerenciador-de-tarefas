package brenoliveiral.png.gerenciadorDeTarefas.GT.repository;

import brenoliveiral.png.gerenciadorDeTarefas.GT.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa,Long> {
}
