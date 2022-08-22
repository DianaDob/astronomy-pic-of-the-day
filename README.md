# astronomy-pic-of-the-day


This one page web application fetches the current astronomy picture (or video) of the day from NASA's APOD api.
It is a basic recreation of the page https://apod.nasa.gov/apod/astropix.html for educational purposes, 
implemented using [Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/) 
and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
It is possible to pick an earlier date, too, and see the picture from that day.
 
## Prerequisites
 - [Java 17+](https://www.oracle.com/java/technologies/downloads/#java17)
 
 ## Running application using Maven
 - Open a terminal and navigate to 8_ask_nasa folder
 - Run the following Maven command to start the application:
    - ./mvnw clean spring-boot:run


## References
- The original Astronomy Picture of the Day:
<https://apod.nasa.gov/apod/astropix.html>
- Github of the APOD api:
<https://github.com/nasa/apod-api>
