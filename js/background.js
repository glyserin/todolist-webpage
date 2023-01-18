const images = ["0.JPG", "1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG", "6.JPG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage");

document.body.appendChild(bgImage);
