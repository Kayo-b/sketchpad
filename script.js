// var div = document.createElement("div");
// div.style.height = "16px";
// div.style.width = "16px";
// div.style.background = "green";
// div.style.border = "1px solid orange";

// var board = function(div){

    
    for(let x = 0; x<=15;x++){
        let div = document.createElement("div");
        document.getElementById("pad").appendChild(div);
        div.style.height = "16px";
        div.style.width = "16px";
        div.style.background = "green";
        div.style.border = "1px solid orange";
        

        
        
        
        for(let y = 0; y<=15; y++){
            div = document.createElement("div");
            document.getElementById("pad").appendChild(div);
            div.style.height = "16px";
            div.style.width = "16px";
            div.style.background = "green";
            div.style.border = "1px solid orange";
            div.style.cssFloat = "left";
            
            
        }
        
        

    }
    var select = document.getElementById("pad");
    select.removeChild(select.firstElementChild);
    





// for(let x = 0; x<=15;x++){
//     let q = "#";
//     let g = '';
//     for(let y = 0; y<=15; y++){
       
//         g = g + q;
        
        
//     }
//     console.log(g)
    
// }





