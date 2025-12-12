let btn= document.querySelectorAll(".box");
let resetbtn =document.querySelector(".reset");
let winer_mas=document.querySelector(".winner_mas");
let container_div=document.querySelector(".div_cont");
let new_btn=document.querySelector(".new_game");
let turn0=true;
const wining=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let cross=[];
let zero=[];
let count=0;

btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.classList.add("cross");
            box.innerText="X";
            turn0=false;
            cross.push(box.innerText);
            count++;

        }
        else{
            box.classList.add("zero")
            box.innerText="O"
            turn0=true;
            cross.push(box.innerText);
            count++;
        }
        box.disabled=true
        draw_game()
        checkwin(); 
    })
    
       
})
let draw_game=()=>{
    if(count>=9){
        winer_mas.innerText="Game is Draw."
        container_div.classList.remove("hide");
        disbale_btn()
        
    }
    
}
let disbale_btn=()=>{
    for(let box of btn){
        box.disabled=true;
        count=0
    }
}
const showwinner=(winner)=>{
    winer_mas.innerText=` congratulation , winner is ${winner} `
    container_div.classList.remove("hide")
    disbale_btn()
    }

let checkwin=() => {
    for(let pattern of wining){
        let psition1=btn[pattern[0]].innerText;
        let psition2=btn[pattern[1]].innerText;
        let psition3=btn[pattern[2]].innerText;

        if(psition1!="" && psition2 !="" && psition3!=""){
            if(psition1===psition2 && psition2===psition3){
                showwinner(psition1);

            }
        }

    }
}
// console.log(cross)
restart_game=()=>{
    for(let box of btn){
        box.disabled=false;
        box.classList.remove("cross");
        box.classList.remove("zero")
        box.innerText=""
    }
    turn0=true;
    container_div.classList.add("hide")
    
}

resetbtn.addEventListener("click",()=>{
    restart_game()
    
})
new_btn.addEventListener("click",()=>{
    restart_game()
})


