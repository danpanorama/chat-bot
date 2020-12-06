import botChat from "./botRespon"

window.addEventListener('load', (event) => {
document.getElementById("button").addEventListener("click",(e)=>{
   let P= document.createElement("p");
   P.innerText = "customer-: "+ document.getElementById("txt").value;
   let div = document.getElementById("div");
   P.style.color="green"
   div.appendChild(P);
   
   botChat(document.getElementById("txt").value)


})




  });


