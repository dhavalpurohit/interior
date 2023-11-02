"use strict";

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const numImg = document.querySelectorAll(".slider-item").length;
let currImg = 1;

let timeoutID;

if (next) {
    next.addEventListener("click", () => {
        console.log("next")
        currImg++;
        clearTimeout(timeoutID);
        updateImage();
    });

    prev.addEventListener("click", () => {
        console.log("prev")
        currImg--;
        clearTimeout(timeoutID);

        updateImage();
    });
}
const imgcontainer = document.querySelector(".image-slider");

function updateImage() {
    if (currImg > numImg) {
        currImg = 1;
    } else if (currImg < 1) {
        currImg = numImg;
    }
    if (imgcontainer)

        imgcontainer.style.transform = `translateX(-${(currImg - 1) * 800}px)`;

    timeoutID = setTimeout(() => {
        currImg++;
        updateImage();
    }, 2000);
}

updateImage();