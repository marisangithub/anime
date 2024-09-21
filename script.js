var over=document.querySelector(".overlay")
var pop=document.querySelector(".popup")
var addanime=document.querySelector(".addp-btn")
var aname=document.querySelector(".name")
var aauthor=document.querySelector(".author")
var description=document.querySelector(".ades")
var result=document.querySelector(".result")

function popup(){
    over.style.display="block"
    pop.style.display="block"
}
function down(){
    over.style.display="none"
    pop.style.display="none"
}

function add(){
    var div=document.createElement("div")
    div.setAttribute("class","container")
    div.innerHTML=`<h2>${aname.value}</h2><br>
        <p> ${aauthor.value} </p>
        <p>${description.value} </p>`
    result.append(div)
    over.style.display="none"
    pop.style.display="none"
}