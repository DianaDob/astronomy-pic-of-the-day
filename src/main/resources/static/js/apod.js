let title = document.getElementById("title");
let image = document.getElementById("image");
let description = document.getElementById("description");

fetchData();

function updatePageWithData(data) {
    title.textContent = data.title;
    image.src = data.url;
    description.textContent = data['explanation'];
}

function fetchData(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => response.json())
        .then(data => updatePageWithData(data));
}