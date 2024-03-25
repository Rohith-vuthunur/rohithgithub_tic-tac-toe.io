let boxes=document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true;
let msg = document.querySelector("#msg");
const win=[[0,1,2],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText="X";
            box.style.color="#000";
            box.style.fontSize="3rem";        
            turnO=false;
        }
        else{
            box.innerText="O";
            turnO=true;
            box.style.color="#000";
            box.style.fontSize="3rem";        }
            box.disabled=true;
            checkWinner();
    });
    
});
reset.addEventListener('click',()=>{
    window.location.reload();
})
const checkWinner = () =>{
    var c=0;
    isTie=true
    for(pattern of win){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        c=c+1;
        if(pos1!="" && pos2 !="" && pos3!="" ){
            if(pos1===pos2 && pos2===pos3){
                msg.style.display="flex";
                msg.innerHTML=`Congratulations Winner is ${pos1}`; 
                return ; 
            }
            else{
               for(let box of boxes){
                if (box.innerText===""){
                    isTie = false;
                }
               }
               if(isTie){
                msg.style.display="flex";
                msg.innerHTML=`Tie Game`; 
               }
            }
        }
    }


            //  Check for Tie (all boxes filled but no winner)
//   let isTie = true;
//   for (let i = 0; i < boxes.length; i++) {
//     if (boxes[i].innerText === "") {
//       isTie = false;
//       break;
//     }
//   }

//   if (isTie) {
//     msg.style.display = "flex";
//     msg.innerHTML = `It's a Tie!`;
//   }

//         }
        
//     }
}