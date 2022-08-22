let images = document.getElementById("images");
let endDate = new Date().toISOString().substring(0, 10);
let startDate = new Date().toISOString().substring(0, 8) + "01";

console.log(startDate);
console.log(endDate);

fetchMonthlyData();

function updatePageWithPictures(data) {
    //let pictures = {};
    for(let dailyData of data){
        if(dailyData['media_type'] === 'image'){
            images.innerHTML += `<img src="${dailyData['url']}" width="640" height="360">`;
        }
        else{
            images.innerHTML += `<iframe src="${dailyData['url']}" width="640" height="360"></iframe>`
        }
    }
}

function fetchMonthlyData(){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${startDate}&end_date=${endDate}`)
        .then(response => response.json())
        .then(data => updatePageWithPictures(data));
}

