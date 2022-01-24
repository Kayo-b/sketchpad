var padSize = function (size, pixel){
    for(let x = 0; x<=size; x++){
        divRdy("div","pad",'',pixel);
        for(let y = 0; y<=size; y++){
            divRdy("div","pad","left",pixel);
        }
    }
    var select = document.getElementById("pad");
    select.removeChild(select.firstElementChild);
}

var removeEle = function (){
    var select = document.getElementById("pad");
    while(select.firstChild){
        select.removeChild(select.firstChild)
    }
}


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

var divRdy = function (div,get,direction,px) {
    let container = document.getElementById("container")
    let element = document.createElement(div);
    let getEle = document.getElementById(get);
    container.style.display = "flex"
    container.style.margin = "5px"

    
    getEle.appendChild(element);
    container.appendChild(getEle);
    container.style.display = "8px"
    element.style.height = px;
    element.style.width = px;
    element.style.border = "1px solid darkgreen";
    element.style.cssFloat = direction;

    // while(element.addEventListener("mouseup") === false){
        
    // }
    // let drag = false;
    // element.addEventListener("click", (e) =>{
        // let colorString2 = color2String(100);
        // element.style.transition = "background 0.2s ease-in-out";
        // element.style.background = `rgb(${colorString2[0]},${colorString2[1]},${colorString2[2]})`;

        // element.addEventListener("mousedown", (e) => {
    element.addEventListener("mouseover", (e) =>{
        let colorString2 = color2String(255);
        element.style.transition = "background 0.2s ease-in-out";
        element.style.background = `rgb(${colorString2[0]},${colorString2[1]},${colorString2[2]})`;
        if(e.ctrlKey){
            element.style.background = "blue";
            
        }
        });

            // })
    

        
    // })
    
    return element;

}

let padSize16 = document.createElement("button");
padSize16.setAttribute("id","16pixels");
padSize16.setAttribute("type","button");
padSize16.setAttribute("value","button");
var text16 = document.createTextNode("16 x 16");
padSize16.appendChild(text16);
padSize16.style.background = "red";
padSize16.style.margin = "5px";

let padSize32 = document.createElement("button");
padSize32.setAttribute("id","32pixels");
padSize32.setAttribute("type","button");
padSize32.setAttribute("value","button");
padSize32.style.margin = "5px";
var text32 = document.createTextNode("32 x 32");
padSize32.appendChild(text32);
padSize32.style.background = "red";

let padSize64 = document.createElement("button");
padSize64.setAttribute("id","48pixels");
padSize64.setAttribute("type","button");
padSize64.setAttribute("value","button");
padSize64.style.margin = "5px";
var text48 = document.createTextNode("48 x 48");
padSize64.appendChild(text48);
padSize64.style.background = "red";

var input = document.getElementById("input");
input.style.display = "flex";
input.style.justifyContent = "center";
input.style.alignItems = "start";
input.style.flexDirection = "column";
input.appendChild(padSize16);
input.appendChild(padSize32);
input.appendChild(padSize64);

const buttons = document.querySelectorAll("button");
console.log(buttons[0].id)
var sizeSelect = function(btns){
    for(let x in btns)
        buttons[x].addEventListener('click', (e)=>{
            removeEle();
            if(e.target.id === "16pixels"){
                
                padSize(15,"34px");
                

            }
            else if(e.target.id === "32pixels"){
                
            padSize(31,"16px");

            }
            else
                
                padSize(47,"10px");
            
        });

};
sizeSelect(buttons)