

var color2String = function(rgb){
    var random = function(max){
        return Math.floor(Math.random()* max);
    }
    var x = random(rgb);
    var y = random(rgb);
    var z = random(rgb);
    var colorAr = [];
    colorAr.push(x,y,z);
    var colorString = [];
    console.log(colorAr)

    for(let x in colorAr){
    colorString.push(colorAr[x].toString());
    
    }
    return colorString;
    
}

console.log(color2String(255));

var divRdy = function (div,get,direction) {

    let mouseEle = document.createElement("div");
    mouseEle.setAttribute("id","mouse");
    // getMouse = document.getElementById("mouse");
    let element = document.createElement(div);
    let getEle = document.getElementById(get);
    getEle.appendChild(element);
    element.style.height = "8px";
    element.style.width = "8px";
    element.style.border = "px solid darkgreen";
    element.style.cssFloat = direction;
    element.addEventListener("mouseover", (e) =>{
        let colorString2 = color2String(255);
        element.style.transition = "background 0.2s ease-in-out";
        element.style.background = `rgb(${colorString2[0]},${colorString2[1]},${colorString2[2]})`;
            
        }
    )
    
    return element;

}


for(let x = 0; x<=128; x++){
    divRdy("div","pad");
    for(let y = 0; y<=128; y++){
        divRdy("div","pad","left");
    }
}
var select = document.getElementById("pad");
select.removeChild(select.firstElementChild);

