var parent = document.getElementsByClassName(".parent");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");

div1.addEventListener("click",function(){
    div1.style.width="60%";
    div2.style.width="10%";
    div3.style.width="10%";
    div4.style.width="10%";
    div5.style.width="10%";
    // if(div1.style.width == "60%") div1.append("div1")
    div1.innerHTML=""
    var h3= document.createElement("h3")
    h3.textContent= "div1"
    div1.appendChild(h3)

})
div2.addEventListener("click",function(){
    div2.style.width="60%";
    div1.style.width="10%";
    div3.style.width="10%";
    div4.style.width="10%";
    div5.style.width="10%";
    div1.innerHTML=""
    var h3= document.createElement("h3")
    h3.textContent= "div2"
    div2.appendChild(h3)
})
div3.addEventListener("click",function(){
    div3.style.width="60%";
    div2.style.width="10%";
    div1.style.width="10%";
    div4.style.width="10%";
    div5.style.width="10%";
    div2.innerHTML=""
    var h3= document.createElement("h3")
    h3.textContent= "div3"
    div3.appendChild(h3)
})
div4.addEventListener("click",function(){
    div4.style.width="60%";
    div2.style.width="10%";
    div3.style.width="10%";
    div1.style.width="10%";
    div5.style.width="10%";
    div3.innerHTML=""
    var h3= document.createElement("h3")
    h3.textContent= "div4"
    div4.appendChild(h3)
})
div5.addEventListener("click",function(){
    div5.style.width="60%";
    div2.style.width="10%";
    div3.style.width="10%";
    div4.style.width="10%";
    div1.style.width="10%";
    div4.innerHTML=""
    div5.innerHTML=""
    var h3= document.createElement("h3")
    h3.textContent= "div5"
    div5.appendChild(h3)
})





