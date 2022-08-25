# astronomy-pic-of-the-day


This web application fetches the current astronomy picture (or video) of the day from NASA's APOD api.
It is a basic recreation of the page https://apod.nasa.gov/apod/astropix.html, 
implemented using [Spring Boot](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/) 
and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
It is possible to pick an earlier date, too, and see the picture from that day.
Clicking on the Gallery of the Month link at the bottom of the page opens the monthly gallery where all the pictures of the current month are displayed.
If any of the pictures is clicked, a modal opens that displays the title, the picture in a bigger format and the description.
 
## Prerequisites
 - [Java 17+](https://www.oracle.com/java/technologies/downloads/#java17)
 
 ## Running application using Maven
 - Open a terminal and navigate to 8_ask_nasa folder
 - Run the following Maven command to start the application:
    - ./mvnw clean spring-boot:run

## Shutdown
- To stop the application, go to the terminal where it is running and press Ctrl+C.

## References
- The original Astronomy Picture of the Day:
<https://apod.nasa.gov/apod/astropix.html>
- Github of the APOD api:
<https://github.com/nasa/apod-api>
