
//Scroll_top
document.querySelector('#to-top').addEventListener('click',()=>{
    
    let TopInterval = setInterval(()=>{
        
        let ArrowTop = document.body.scrollTop > 0 ? document.body : document.documentElement;
        
        if(ArrowTop.scrollTop > 0){
            ArrowTop.scrollTop = ArrowTop.scrollTop - 50 ;
        }
        if(ArrowTop.scrollTop < 1){
            clearInterval(TopInterval);
        }
    }, 10)
}, false);

function showscroll(){
    let TopButton = document.getElementById('to-top');
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop >100){
        TopButton.classList.add('show')
    }else{
        TopButton.classList.remove('show')
    }
}

window.onscroll = () =>{
    showscroll();
} 

window.addEventListener('scroll',function(){
    let navbar=document.querySelector('.navbar');
    if(window.scrollY > 20){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled')
    }
});

let burger=document.querySelector('.burger')
let nav=document.querySelector('.nav')
let navbarItem=document.querySelector('.navbar-items')

burger.addEventListener('click',()=>{
    navbarItem.classList.toggle('h-class')
    nav.classList.toggle('v-class')
});


// scrollRevealAnimation

ScrollReveal().reveal('.heading',{
    duration:1000,
    origin:'bottom',
    distance:'50px',
    interval:200,
    reset:true,
    delay:200
});
// scrollRevealAnimation

ScrollReveal().reveal('.box',{
    duration:1000,
    origin:'bottom',
    distance:'50px',
    interval:200,
    reset:true
});
// scrollRevealAnimation

ScrollReveal().reveal('.heading_1',{
    duration:1000,
    origin:'bottom',
    distance:'50px',
    interval:200,
    reset:true
});
// scrollRevealAnimation

ScrollReveal().reveal('.para',{
    duration:1000,
    origin:'bottom',
    distance:'50px',
    interval:200,
    reset:true,
    delay:200
});
// scrollRevealAnimation

ScrollReveal().reveal('.icons i',{
    duration:1000,
    origin:'bottom',
    distance:'50px',
    interval:200,
    reset:true
});
// scrollRevealAnimation

ScrollReveal().reveal('.left img',{
    duration:1000,
    origin:'bottom',
    distance:'50px',
    interval:200,
    delay:250,
    reset:true
});