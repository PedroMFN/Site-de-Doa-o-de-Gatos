const frames = document.querySelectorAll(".animation-frame img");
let currentFrameIndex = 0;

function showNextFrame() {
    frames[currentFrameIndex].style.opacity = "0";
    currentFrameIndex = (currentFrameIndex + 1) % frames.length;
    frames[currentFrameIndex].style.opacity = "1";
}

setInterval(showNextFrame, 1000);

// girar gato
var minhaImagem = document.getElementById("minha-imagem");

minhaImagem.addEventListener("mouseenter", function() {
  this.style.transform = "rotate(360deg)";
});

minhaImagem.addEventListener("mouseleave", function() {
  this.style.transform = "rotate(0deg)";
});

// inverter lado

function invertImage(catup) {
	img.style.transform = "scaleX(-1)";
}
