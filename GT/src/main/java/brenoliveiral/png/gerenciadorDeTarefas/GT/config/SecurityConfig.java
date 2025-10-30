package brenoliveiral.png.gerenciadorDeTarefas.GT.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // desativa proteção CSRF (para testes)
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // permite tudo
                )
                .formLogin(form -> form.disable()); // desativa tela de login

        return http.build();
    }
}
