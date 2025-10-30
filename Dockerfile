# Usa uma imagem base com Java 21
FROM eclipse-temurin:21-jdk

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários para build
COPY GT/pom.xml .
COPY GT/mvnw .
COPY GT/.mvn .mvn

# Baixa as dependências do Maven (cache)
RUN ./mvnw dependency:go-offline

# Copia o restante do código
COPY GT/src src

# Compila o projeto
RUN ./mvnw clean package -DskipTests

# Expõe a porta padrão do Spring Boot
EXPOSE 8080

# Comando que roda o app
CMD ["java", "-jar", "target/GT-0.0.1-SNAPSHOT.jar"]
