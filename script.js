
let color;
function ColorChnage(){
    // R 0-255 count 0 also mean 256
    // G 0-255 count 0 also mean 256
    // B 0-255 count 0 also mean 256
    // RGB 256 * 256 * 256 =16777215 (It gives maximum number 7 dight number )
    // toString(16) use to convert in hexadecimal code taht is valid for color code
     color = "#" + Math.floor(Math.random() * 16777215).toString(16);
document.body.style.backgroundColor=color;
document.querySelector(".inner-container").style.backgroundColor=color

let code=document.querySelector(".color-code")
code.innerHTML=color



}

function CopyCode() {
    // It Copy Text in Clipboard
    navigator.clipboard.writeText(color)
     
    // It Show Pop Up Message For Color Code
let msg=  document.querySelector(".msg");
// we want the message disppears afetr 1 ms 
      setTimeout(()=>{ 
          msg.classList.toggle("msg-show")
        },100)
       
}
window.onload = ColorChnage;