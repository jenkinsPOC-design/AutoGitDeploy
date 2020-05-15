#
# Build Stage
#
FROM maven:3.6.1-jdk-11-slim AS mvnbuild
COPY src /homr/app/src
COPY pom.xml /homr/app
RUN mvn -f /home/app/pom.xml clean package -DskipTests

#
# Package stage
FROM openjdk:8-jdk-alpine
COPY --from=mvnbuild /home/app/target/merchandisingServiceJarApi-0.0.1-SNAPSHOT.jar /usr/local/lib/merchandisingServiceJarApi-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/usr/local/lib/merchandisingServiceJarApi-0.0.1-SNAPSHOT.jar"]
