/*=========================================
    Integrative Biology Lab
    script.js
==========================================*/

// ==============================
// Mobile Navigation
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

        menuBtn.innerHTML = nav.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

    });

}

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        if(menuBtn){
            menuBtn.innerHTML='<i class="fas fa-bars"></i>';
        }

    });

});


// ==============================
// Sticky Header Effect
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.padding="12px 8%";
        header.style.boxShadow="0 10px 25px rgba(0,0,0,.12)";

    }else{

        header.style.padding="18px 8%";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

    }

});


// ==============================
// Dark Mode
// ==============================

const themeBtn = document.querySelector(".theme-toggle");

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

    if(themeBtn){

        themeBtn.innerHTML='<i class="fas fa-sun"></i>';

    }

}

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

            themeBtn.innerHTML='<i class="fas fa-sun"></i>';

        }else{

            localStorage.setItem("theme","light");

            themeBtn.innerHTML='<i class="fas fa-moon"></i>';

        }

    });

}


// ==============================
// Active Navigation
// ==============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;
        const height=section.offsetHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ==============================
// Animated Counter
// ==============================

const counters=document.querySelectorAll(".stat h2");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=parseInt(counter.innerText);

let count=0;

const speed=Math.max(10,target/80);

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>counterObserver.observe(counter));


// ==============================
// Scroll Reveal
// ==============================

const revealItems=document.querySelectorAll(

".card,.project,.member,.publication,.news-card,.about-content,.about-image"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
revealObserver.unobserve(entry.target);

}

});

},{
threshold:.15
});

revealItems.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(50px)";
item.style.transition=".8s ease";

revealObserver.observe(item);

});


// ==============================
// Back To Top Button
// ==============================

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.className="back-top";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// ==============================
// Loading Animation
// ==============================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


// ==============================
// Hero Text Animation
// ==============================

const heroTitle=document.querySelector(".hero h1");

if(heroTitle){

heroTitle.animate([

{

opacity:0,

transform:"translateY(-40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards"

});

}


// ==============================
// Button Hover Ripple
// ==============================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

button.style.setProperty("--x",x+"px");

button.style.setProperty("--y",y+"px");

});

});
