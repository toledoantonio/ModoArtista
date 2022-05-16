const search = document.querySelector(".search-box input"),
    images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", e => {
    if (e.key == "Enter") {
        let searcValue = search.value,
            value = searcValue.toLowerCase();
        images.forEach(image => {
            if (value === image.dataset.name) { //matching value with getting attribute of images
                return image.style.display = "block";
            }
            image.style.display = "none";
        });
    }
});

search.addEventListener("keyup", () => {
    if (search.value != "") return;

    images.forEach(image => {
        image.style.display = "block";
    })
})

const questions = document.querySelectorAll('.question-answer');

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})