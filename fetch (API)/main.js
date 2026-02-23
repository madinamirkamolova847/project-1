let elAll = document.querySelector(".all")
let elNavList = document.querySelector(".nav-list")
let elIcon = document.querySelector(".icon")
let elMenu = document.querySelector(".fa-list")
let elX = document.querySelector(".fa-x")
let elBtn = document.querySelector(".btn")
let elList = document.querySelector(".list")

elBtn.addEventListener("click", () => {
    elAll.classList.toggle("dark")
})

elIcon.addEventListener("click", () => {
    elNavList.classList.toggle("block")
    elMenu.classList.toggle("none")
    elX.classList.toggle("none")
})



fetch("https://693015c0778bbf9e006fc3bc.mockapi.io/cars")
.then((res) => res.json())
.then((res) => {
    elList.innerHTML= res.map((car) =>
    `
        <div> 
            <h1>${car.title}</h1>
            <img src=${car.img} alt="">
            <p>${car.desc}</p>
            <p class="price">${car.price}</p>
        </div>
    `).join("")
})

// window.location.href="./index1.html"