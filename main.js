//Goal: Make a 10 card memory game - users must be able to select two cards and check if they are a match. If they are a match, they stay flipped. If not, they flip back over. Game is done when all cards are matched and flipped over.


// document.addEventListener("DOMContentLoaded", () => {   //https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

    // const game = document.querySelector(".gameCards");
    // const restart = document.querySelector("#button");
    
       const emojis = ["🏀","⚾️","🎾","🏉","⚽️","🏀","⚾️","🎾","🏉","⚽️"];
    var shufEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);
    for ( var i=0; i<emojis.length; i++){
        
       let box = document.createElement("div")
       box.className = "item";
       box.innerHTML = shufEmojis[i]

       box.onclick= function onclick(){
        this.classList.add("cardOpen")
        setTimeout(function(){
            if(document.querySelectorAll(".cardOpen").length > 1){
                if(document.querySelectorAll(".cardOpen")[0].innerHTML ==
            document.querySelectorAll(".cardOpen")[1].innerHTML){
                document.querySelectorAll(".cardOpen")[0].classList.add("cardMatched")
                document.querySelectorAll(".cardOpen")[1].classList.add("cardMatched")
                document.querySelectorAll(".cardOpen")[1].classList.remove("cardOpen")
                document.querySelectorAll(".cardOpen")[0].classList.remove("cardOpen")

                if(document.querySelectorAll(".cardMatched").length == emojis.length){
                    document.getElementById("display").textContent = `YOU WON!!!!`
        
                }
            }else{
                document.querySelectorAll(".cardOpen")[1].classList.remove("cardOpen")
                document.querySelectorAll(".cardOpen")[0].classList.remove("cardOpen")

            }
            }
        },500)
       }
        
       document.querySelector(".gameCards").appendChild(box);
    }


    
        




