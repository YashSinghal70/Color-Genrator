
let color1;
let color2;
let combinecolor;
function ColorChnage(){
     color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
     color2 ="#" + Math.floor(Math.random() * 16777215).toString(16);
     combinecolor=`linear-gradient(to right,${color1} ,${color2})`
document.body.style.background=combinecolor;
document.querySelector(".inner-container").style.background=combinecolor;

let code=document.querySelector(".color-code")
code.innerHTML=combinecolor;



}

function CopyCode() {
    navigator.clipboard.writeText(combinecolor)
     
let msg=  document.querySelector(".msg");
// we want the message disppears afetr 1 ms 
      setTimeout(()=>{ 
          msg.classList.toggle("msg-show")
        },100)
       
}
window.onload = ColorChnage;