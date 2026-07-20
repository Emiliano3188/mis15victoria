const slides=document.querySelector(".slides");

const dots=document.querySelectorAll(".dot");

let indice=0;

function mostrar(i){

    indice=i;

    slides.style.transform=`translateX(-${i*100}%)`;

    dots.forEach(d=>d.classList.remove("active"));

    dots[i].classList.add("active");

}

dots.forEach((dot,i)=>{

    dot.addEventListener("click",()=>{

        mostrar(i);

    });

});

let inicio=0;

slides.addEventListener("touchstart",(e)=>{

    inicio=e.touches[0].clientX;

});

slides.addEventListener("touchend",(e)=>{

    let fin=e.changedTouches[0].clientX;

    if(inicio-fin>60){

        indice++;

    }

    if(fin-inicio>60){

        indice--;

    }

    if(indice<0){

        indice=0;

    }

    if(indice>=dots.length){

        indice=dots.length-1;

    }

    mostrar(indice);

});