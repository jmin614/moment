const images = [
    "0.jpeg", "1.jpg", "2.jpg", "3.png", "4.jpg"
];


const todaysImgNum = Math.floor(Math.random() * images.length);
const todaysImg = images[todaysImgNum];

const bgImg = document.createElement("style");

bgImg.innerText = `body {background-image: url(img/${todaysImg});}`;

document.head.appendChild(bgImg);
// console.log(bgImg);




// const chosenImages = images[Math.floor(Math.random() * 5)];

// const bgImages = document.createElement("img");
// //createElement 엘리먼트를 추가

// bgImages.src = "img/" + chosenImages ;
// console.log(bgImages);

// document.body.appendChild(bgImages);
//appendChild() 함수 안의 경로에 정의한 값을 가장 뒤에서 기입함
//prependChild() 반대로 앞에서 기입