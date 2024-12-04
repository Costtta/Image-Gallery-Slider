const imageList = document.querySelector(".slider-wrapper .image-list");
const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
const link = document.querySelectorAll(".link");
const prvBtn = document.getElementById("prvBtn");
const nxtBtn = document.getElementById("nxtBtn");
let currentValue = 1;

const initSlider = () =>{
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prvBtn" ? -1 : 1;
            const scrollAmount = imageList.clientWidth *  direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}

window.addEventListener("load", initSlider)

function activeLink(){
    for(l of link){
        l.classList.remove("active")
    }
    event.target.classList.add("active")
    currentValue = event.target.value;
}

link.forEach((btn) =>{
    btn.addEventListener("click", activeLink)
})


function back(){
    if(currentValue > 1){
        for(l of link){
            l.classList.remove("active");
        }
        currentValue--;
        link[currentValue-1].classList.add("active")
    }
}

prvBtn.addEventListener("click", back)

function next(){
    if(currentValue < 3){
        for(l of link){
            l.classList.remove("active");
        }
        currentValue++;
        link[currentValue-1].classList.add("active")
    }
}

nxtBtn.addEventListener("click", next)
