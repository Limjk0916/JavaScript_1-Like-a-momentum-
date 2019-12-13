/*const title = document.getElementById("title");
title.innerHTML = "Hi From JS!";
title.style.color= "red";
document.title = 'I own you now';*/

/*getElementById대신에 
querySelector에서 
ID로 가져올때는("#title")
CLASS로 가져올때는 (".title")*/

/*const title = document.querySelector("#title");

function handleClick(){
    title.style.color="blue";
}

title.addEventListener("click", handleClick);*/

/*if(10===5 || "nicolas" === "nicolas"){
    console.log("hi");
} else if(10===10 && "nicolas" === "nicolas"){
    console.log("ho");
} else {
    console.log("ho");
}*/

/*function handelOffline(){
    console.log("Bye");
}

function handelOnline(){
    console.log("Welcome back");
}


window.addEventListener("online", handelOffline);
window.addEventListener("online", handelOnline);*/


const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handelClick(){
    title.classList.toggle(CLICKED_CLASS);
    
    /*const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }*/

}

function init(){
    title.addEventListener("mouseenter", handelClick);
}

init();