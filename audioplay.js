let audio1=new Audio("heatwaves.mp4.mp4");
let audio2=new Audio("pasori.mp4");
let audio3=new Audio("aaftab.mp4");
let audio4=new Audio("itsonly.mp4");
let audio5=new Audio("instru.mp4");
let audio6=new Audio("meere.mp4");
let arr=[audio1,audio2,audio3,audio4,audio5,audio6];
let v=0;
let a=document.getElementById("playpause");
if(arr[v].ended==true){
    arr[v].pause();
    v++;
    arr[v].play();
}
function playpause(){
    if(a.textContent=="⏸"){
        a.textContent="▶"
        arr[v].pause();
        let im=document.getElementById("img");
        im.innerHTML=" ";
    }
    else{
        arr[v].play();
        a.textContent="⏸";
        let image=document.getElementById("img");
        image.innerHTML='<img src="https://i.pinimg.com/originals/ae/c1/ee/aec1eeca8a261e3772459f48545b3561.gif" alt="" id="img1">'
    }
}
function next(){
    if(v<arr.length && a.textContent=="▶"){
        arr[v].pause();
        v++;
        if(v==arr.length && a.textContent=="▶"){
            v=0;
            arr[v].play();
            image.innerHTML='<img src="https://i.pinimg.com/originals/ae/c1/ee/aec1eeca8a261e3772459f48545b3561.gif" alt="" id="img1">'
        a.textContent="⏸";
        }
        else if(v<arr.length && a.textContent=="▶"){
            arr[v].play();
        let image=document.getElementById("img");
        image.innerHTML='<img src="https://i.pinimg.com/originals/ae/c1/ee/aec1eeca8a261e3772459f48545b3561.gif" alt="" id="img1">'
        a.textContent="⏸";
        }
    }
    else if(v<arr.length && a.textContent=="⏸"){
        arr[v].pause();
        v++;
        if(v==arr.length && a.textContent=="⏸"){
            v=0;
            arr[v].play();
        }
        else if(v<arr.length && a.textContent=="⏸"){
            arr[v].play();
        }

    }
}
function prev(){
    if(v==0 && a.textContent=="⏸"){
        arr[v].pause();
        v=arr.length-1;
        arr[v].play();
        let image=document.getElementById(img);
        image.textContent='<img src="https://i.pinimg.com/originals/ae/c1/ee/aec1eeca8a261e3772459f48545b3561.gif" alt="" id="img1">';
    }
    else if(v==0 && a.textContent=="▶"){
        arr[v].pause();
        v=arr.length-1;
        arr[v].play();
        let image=document.getElementById(img);
        image.textContent='<img src="https://i.pinimg.com/originals/ae/c1/ee/aec1eeca8a261e3772459f48545b3561.gif" alt="" id="img1">';
        a.textContent="⏸";
    }
    else if(v<arr.length && a.textContent=="▶"){
        a.textContent="⏸";
        let image=document.getElementById(img);
        image.textContent='<img src="https://i.pinimg.com/originals/ae/c1/ee/aec1eeca8a261e3772459f48545b3561.gif" alt="" id="img1">';
        arr[v].pause();
        v--;
        arr[v].play();
    }
    else if(v<arr.length && a.textContent=="⏸"){
        arr[v].pause();
        v--;
        arr[v].play();
        let image=document.getElementById(img);
        image.textContent='<img src="https://i.pinimg.com/originals/ae/c1/ee/aec1eeca8a261e3772459f48545b3561.gif" alt="" id="img1">';

    }
}
