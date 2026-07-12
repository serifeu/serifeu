const glow = document.querySelector(".cursor-glow");
const texts = [
    "Software Developer",
    "AI Developer",
    "Computer Vision Developer",
    "C++ Developer",
    "Python Developer"
];
let typingTexts = [];
let textIndex = 0;
let charIndex = 0;
let deleting = false;
const typing = document.getElementById("typing");
function typeEffect(){
    if(!typing) return;
    let current = typingTexts[textIndex];
    if(!current) return;
    if(!deleting){
        typing.textContent = current.substring(0,charIndex);
        charIndex++;
        if(charIndex>current.length){
            deleting=true;
            setTimeout(typeEffect,1800);
            return;
        }
    }
    else{
        typing.textContent=current.substring(0,charIndex);
      charIndex--;
        if(charIndex<0){
            deleting=false;
            textIndex++;
            if(textIndex>=typingTexts.length){
                textIndex=0;
            }
            charIndex=0;
        }
    }
    setTimeout(typeEffect,deleting?40:90);
}
const hoverItems = document.querySelectorAll("a,button,.card");
hoverItems.forEach(item=>{
    item.addEventListener("mouseenter",()=>{
        glow.style.width="650px";
        glow.style.height="650px";
    });
    item.addEventListener("mouseleave",()=>{
        glow.style.width="500px";
        glow.style.height="500px";
    });
});
const navbar=document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
    if(window.scrollY>80){
        navbar.classList.add("active-nav");
    }
    else{
        navbar.classList.remove("active-nav");
    }
});
window.addEventListener("load",()=>{
    const loader=document.getElementById("loader");
    setTimeout(()=>{
        loader.classList.add("loader-hide");
    },2600);
});
const modal = document.getElementById("projectModal");
const closeModal = document.querySelector(".close-modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
document.querySelectorAll(".project-btn").forEach(button=>{
    button.addEventListener("click",()=>{
        const project = languageData.projectsData[button.dataset.project];
        modalTitle.textContent = project.title;
        modalImage.src = project.image;
        modalDescription.textContent = project.description;
        modalTech.innerHTML = "";
        project.tech.forEach(item=>{
            modalTech.innerHTML += `<span>${item}</span>`;
        });
        modal.classList.add("active");
    });
});
closeModal.addEventListener("click",()=>{
    modal.classList.remove("active");
});
window.addEventListener("click",(e)=>{
    if(e.target==modal){
        modal.classList.remove("active");
    }
});
window.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){
        modal.classList.remove("active");
    }
});