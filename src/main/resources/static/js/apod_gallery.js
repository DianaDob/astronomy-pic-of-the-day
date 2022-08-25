let images = document.getElementById("images");
let endDate = new Date().toISOString().substring(0, 10);
let startDate = new Date().toISOString().substring(0, 8) + "01";
let title = document.getElementById("title");
let months = {
    "01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June",
    "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December"
}


setTitle();
fetchMonthlyData();

function setTitle() {
    title.textContent = months[startDate.substring(5, 7)] + " " + startDate.substring(0, 4);
}

const modal = (dailyData) => {
    return `<!-- The Modal -->
<div id="modal${dailyData['date']}" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <h4>${dailyData['title']}</h4>
    <img src="${dailyData['url']}">
    <p>${dailyData['explanation']}</p>
  </div>

</div>`
}

function makeModalVisible(date) {
    let modal = document.getElementById("modal" + date);
    if(modal.style.display === 'none'){
        modal.style.display = 'block';
    }
    else{
        modal.style.display = 'none';
    }

}

function updatePageWithPictures(data) {
    for (let dailyData of data) {
        if (dailyData['media_type'] === 'image') {
            images.innerHTML += `<figure>
                                    <img src="${dailyData['url']}">
                                    <figcaption>${dailyData['date']}</figcaption>
                                 </figure>` + modal(dailyData);
        } else {
            images.innerHTML += `<figure>
                                    <iframe src="${dailyData['url']}"></iframe>
                                    <figcaption>${dailyData['date']}</figcaption>
                                 </figure>`
        }
    }
    let figures = document.getElementsByTagName('figure');
    let modals = document.getElementsByClassName('modal');
    for (let figure of figures) {
        let date = figure.getElementsByTagName('figcaption')[0].textContent;
        figure.addEventListener('click', () => makeModalVisible(date));
    }
    for (let modal of modals) {
        let closeButton = modal.getElementsByClassName('close')[0];
        let date  = modal.id.substring(5, 15);
        closeButton.addEventListener('click', () => makeModalVisible(date));
    }
}

function fetchMonthlyData() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${startDate}&end_date=${endDate}`)
        .then(response => response.json())
        .then(data => updatePageWithPictures(data));
}

