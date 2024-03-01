const currentDateLabel = document.getElementById("dateLabel");
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
const currentDate = new Date().toLocaleDateString('en-US', options);
currentDateLabel.innerHTML = currentDate;

const todoItems = document.querySelectorAll(".todoItem");

todoItems.forEach(function(todoItem) {
    todoItem.addEventListener("click", function() {
        this.classList.toggle("fa-circle-o");
        this.classList.toggle("fa-check-circle");

        if (this.classList.contains("fa-check-circle")) {
            
            this.parentElement.classList.add("fadeOut");
            //remove the "li" after animation ends
            this.parentElement.addEventListener("animationend", function() {
                this.remove();
            });
        }
    });
});
