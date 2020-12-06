import menuBot from "./menuBot"
import sendBot from "./sendBot"


function botChat(e){
   document.getElementById("txt").setAttribute("disabled","disabled")
   document.getElementById("button").setAttribute("disabled","disabled")
const textArray = ["hello","hellow","hay","hey","hi","whats up","how are you","good morning","good eavning"]
const textMenue = ["i whant to bay food ","i whant to order","i wanna order","what do you have","show me the menu","whats you have in here","whats your menu","i am hungry","give me a menue","i want to order"]
const textFood = ["food","money","hungry","chocolate","menu","chips","pizza","order","bay","yy"];
const noText = ["no","no thank you","no thanks","thank you"];

const menuChoisNumber = [1,2,3,4,"chicken","of batanor","artishok","pizza"]

// const menuChoisNumber ={"1" :"chicken","2" : "of batanor", "3" :"artishok", "4" :"pizza"} 




   let txt = document.getElementById("txt").value;
   let bot;
   let P= document.createElement("p");
   let div = document.getElementById("div");

  

setTimeout((e)=>{
    for(let i = 0; i < textArray.length; i++){
         if( textArray[i] == txt.toLowerCase()){
        
    
         sendBot(textArray[i]+ " i am bot Jerry nice to meet you")
         return 

         }else {

          for(let j = 0; j < textMenue.length; j++){
             
              if(textMenue[j] == txt.toLowerCase() || textFood[j].startsWith(txt) ){
                //  let Pwell = document.createElement("p")
                //  Pwell.innerText = " well i show you the menu ";
                //  div.appendChild(Pwell);

                 sendBot( " well i show you the menu ")
                 setTimeout(()=>{
                 let Pmenu = document.createElement("pre");
                 Pmenu.innerText =
                "1) chicken \
                 2) of batanor\
                 3) artishok \
                 4) pizza"
                 div.appendChild(Pmenu);
                 },500)
                 setTimeout(()=>{
                    // P.innerText = "yes pleas you can choose number or name"
                    // div.appendChild(P);
                    sendBot( " yes pleas you can choose number or name ")
                    },500)
               
                 return
              }
          }   
          
         
          
          for(let k = 0 ; k < menuChoisNumber.length ; k++){
            if(txt.toLowerCase().match(menuChoisNumber[k].value  || txt.toLowerCase().match(menuChoisNumber[k]) )){
                
                // P.innerText = " well you choose to order : " + menuChoisNumber[k] ;

                // div.appendChild(P);

                sendBot( " well you choose to order : " + menuChoisNumber[k])
                setTimeout(()=>{
                    // let Pquastein = document.createElement("p");
                    // Pquastein.innerText="your order is badereh \
                    // somthing else"
                    // div.appendChild(Pquastein);
                    sendBot( "your order is badereh \
                    somthing else")

                },500)
               return menuBot(menuChoisNumber[k]);
              }
          }
          for(let o = 0 ; o < noText.length ; o++){
            if(txt.toLowerCase().match(menuChoisNumber[o] )){
                

                sendBot( " you welcome have a nice day ")
                setTimeout(()=>{
                 
                    sendBot( "i am here if you need somthing")

                },500)
               return 
              }
          }
           

         }   
         }
     
    //  P.innerText = " i'm try to understande but i dont know what you side";
    //  div.appendChild(P);
     sendBot( " i'm try to understande but i dont know what you side")
     let P1 = document.createElement("p");
     P1.innerText = "hay tell me whats you need ?"

     setTimeout(()=>{
      div.appendChild(P1)
      },500) 
   
    },500)

   
setTimeout((e)=>{
document.getElementById("txt").removeAttribute("disabled")
document.getElementById("button").removeAttribute("disabled")
document.getElementById("txt").value= "";
},1000)




   
}


export default botChat