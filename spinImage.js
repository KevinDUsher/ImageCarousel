let count = 0;
const photos = [];
let element = document.createElement("img");
element.src = "./images/buffalo.webp";
photos.push(element);
element = document.createElement("img");
element.src = "./images/bunny.png";
photos.push(element);
element = document.createElement("img");
element.src = "./images/cat.png";
photos.push(element);
element = document.createElement("img");
element.src = "./images/dragon.jfif";
photos.push(element);
element = document.createElement("img");
element.src = "./images/fox.webp";
photos.push(element);
element = document.createElement("img");
element.src = "./images/lion.png";
photos.push(element);
element = document.createElement("img");
element.src = "./images/raccoon.webp";
photos.push(element);
element = document.createElement("img");
element.src = "./images/sheep.webp";
photos.push(element);


document.getElementById("leftImg").appendChild(photos[0]);
document.getElementById("middleImg").appendChild(photos[1]);
document.getElementById("rightImg").appendChild(photos[2]);
count++;

function switchImage(){
    switch(count){
        case -1:
            count = 7
            document.getElementById("leftImg").appendChild(photos[6]);
            document.getElementById("middleImg").appendChild(photos[7]);
            document.getElementById("rightImg").appendChild(photos[0]);
        break;
        case 0:
            document.getElementById("leftImg").appendChild(photos[7]);
            document.getElementById("middleImg").appendChild(photos[0]);
            document.getElementById("rightImg").appendChild(photos[1]);
        break;
        case 1:
            document.getElementById("leftImg").appendChild(photos[0]);
            document.getElementById("middleImg").appendChild(photos[1]);
            document.getElementById("rightImg").appendChild(photos[2]);
        break;
        case 2:
            document.getElementById("leftImg").appendChild(photos[1]);
            document.getElementById("middleImg").appendChild(photos[2]);
            document.getElementById("rightImg").appendChild(photos[3]);
        break;
        case 3:
            document.getElementById("leftImg").appendChild(photos[2]);
            document.getElementById("middleImg").appendChild(photos[3]);
            document.getElementById("rightImg").appendChild(photos[4]);
        break;
        case 4:
            document.getElementById("leftImg").appendChild(photos[3]);
            document.getElementById("middleImg").appendChild(photos[4]);
            document.getElementById("rightImg").appendChild(photos[5]);
        break;
        case 5:
            document.getElementById("leftImg").appendChild(photos[4]);
            document.getElementById("middleImg").appendChild(photos[5]);
            document.getElementById("rightImg").appendChild(photos[6]);
        break;
        case 6:
            document.getElementById("leftImg").appendChild(photos[5]);
            document.getElementById("middleImg").appendChild(photos[6]);
            document.getElementById("rightImg").appendChild(photos[7]);
        break;
        case 7:
            document.getElementById("leftImg").appendChild(photos[6]);
            document.getElementById("middleImg").appendChild(photos[7]);
            document.getElementById("rightImg").appendChild(photos[0]);
        break;
        case 8:
            count = 0;
            document.getElementById("leftImg").appendChild(photos[7]);
            document.getElementById("middleImg").appendChild(photos[0]);
            document.getElementById("rightImg").appendChild(photos[1]);
        break;
    }
}


document.getElementById("leftArrow").addEventListener("click", () => {
    document.getElementById("leftImg").innerHTML = "";
    document.getElementById("middleImg").innerHTML = "";
    document.getElementById("rightImg").innerHTML = "";
    count--;
    switchImage();
});

document.getElementById("rightArrow").addEventListener("click", () => {
    document.getElementById("leftImg").innerHTML = "";
    document.getElementById("middleImg").innerHTML = "";
    document.getElementById("rightImg").innerHTML = "";
    count++;
    switchImage();
});
//img.style.transform = "rotateZ(30deg)";

//photo.style.transformOrigin = "center left";   // pivot from left edge
//photo.style.transform = "rotateY(-45deg)";     // left side closer, right side farther
//photo.style.backfaceVisibility = "hidden"; 

