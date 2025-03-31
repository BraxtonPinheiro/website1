const text = "Welcome To My Home Page!";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.querySelector("h1").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;
