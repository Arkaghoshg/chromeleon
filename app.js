let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    
    let div = document.querySelector("div");
    let chameleon_mask = document.querySelector(".chameleon-mask");
    div.style.backgroundColor = randomColor;
    chameleon_mask.style.backgroundColor = randomColor;
    chameleon_mask.style.transition = "background-color 0.5s ease-in-out";
    console.log("color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}