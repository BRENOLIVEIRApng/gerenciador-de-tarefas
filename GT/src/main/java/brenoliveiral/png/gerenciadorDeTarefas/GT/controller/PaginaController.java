package brenoliveiral.png.gerenciadorDeTarefas.GT.controller;


import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PaginaController {

    @GetMapping("/")
    public String home(Model model, HttpServletRequest request) {
        model.addAttribute("titulo", "Inicio");
        model.addAttribute("cssPagina", "home");
        model.addAttribute("jsPagina", "tarefas");
        model.addAttribute("conteudo", "home");
        model.addAttribute("requestURI", request.getRequestURI());
        return "base";
    }

    @GetMapping("/tarefas")
    public String tarefas(Model model, HttpServletRequest request) {
        model.addAttribute("titulo", "Lista de Tarefas");
        model.addAttribute("cssPagina", "tarefas");
        model.addAttribute("jsPagina", "tarefas");
        model.addAttribute("conteudo", "tarefas");
        model.addAttribute("requestURI", request.getRequestURI());
        return "base";
    }

}
