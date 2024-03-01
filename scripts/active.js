const currentDateLabel = document.getElementById("dateLabel");
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
const currentDate = new Date().toLocaleDateString('en-US', options);
currentDateLabel.innerHTML = currentDate;
