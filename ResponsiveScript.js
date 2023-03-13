const galleryItem = document.getElementsByClassName("gallery_item");
const lightBox = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightClose = document.createElement("div");
lightClose.innerHTML = "&times;";
const lightBoxPre = document.createElement("div") ;
lightBoxPre.innerHTML =  "&#60;";
const lightBoxNext = document.createElement("div");
lightBoxNext.innerHTML = "&#62;";
lightBox.classList.add('lightbox');
lightBoxContent.classList.add('lightbox-content');
lightClose.classList.add('close');
lightBoxPre.classList.add('pre');
lightBoxNext.classList.add('next');
lightBox.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightClose);
lightBoxContent.appendChild(lightBoxPre);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBox)
let index = 1;
function showLightBox(n){
    if(n>galleryItem.length){
        index = 1;
    } else if(n < 1){
        index = galleryItem.length;
    }

let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src",imageLocation);
}

function currentImage(){
    lightBox.style.display="block";
    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for(let i=0;i<galleryItem.length;i++){
    galleryItem[i].addEventListener("click",currentImage)
}

function sliderImage(n){
    showLightBox(index+=n)
}
function preImage(){
    sliderImage(-1);
}
function nextImage(){
    sliderImage(1);
}

lightBoxPre.addEventListener("click",preImage);
lightBoxNext.addEventListener("click",nextImage);
 
function closeBox(e){
    if(this === e.target){
        lightBox.style.display = "none";
    }
} 
 
lightClose.addEventListener("click",closeBox);