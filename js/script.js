let navbar =document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}


document.querySelectorAll(' .about .video-container .controls .control-btn').forEach(btn =>{btn.onclick = () =>{
    let src= btn.getAttribute('data-src');
    document.querySelector('.about .video-container .video').src = src;
}
})

const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e =>{
    textarea.style.height ='${38}px';
    let scHeight = e.target.scrollHeight;
    console.log(scHeight);
    textarea.style.height =`${scHeight}px`;
});
