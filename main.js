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


    
        










//     let cards = [...emojis, ...emojis]
    
//     let flippedCards = [];
//     let score = 0;
//     let matchedCards = 0;
    

//     function shuffleCards(){
//         cards.sort(() => Math.random() - 0.5);
//         //console.log(cards)
//     }
//     function createBoard(){
//         game.innerHTML = "";
//         shuffleCards();
//         cards.forEach(emojis => {
//             const card = document.createElement("div");
//             card.classList.add("card");
//             card.dataset.emojis = emojis;
//             card.innerHTML = "?";
//             card.addEventListener("click", flipCards);
//             game.appendChild(card);
//         })
        
//     }
//     function flipCards(){
//         if (flipCards.length < 2 && !this.classList.contains("flipped")){
//             this.classList.add("flipped");
//             this.innerHTML = this.dataset.emojis;
//             flipCards.push(this);
//             if(flipCards.length === 2){
//                 setTimeout(checkIfMatched, 500);
//             }
//         }

//     }
//     function checkIfMatched(){
//         moves ++;
//         moveCounter.textContent = moves;

//         if(flipCards[0].dataset.emojis === flipCards[1].dataset.emojis){
//             matchedCards++;
//             flipCards = [];
//             if(matchedCards === emojis.length){
//                 clearInterval(timeInterveral);
//                 setTimeout(() => alert("You Won!"), 500);
//         }
        

//     }
//     else{
//         flipCards.forEach(card => {
//             card.classList.remove("flipped");
//             card.innerHTML = "?"
//         });
//         flipCards = []
//     }
//   } 
//     function restartGame(){
//         document.querySelectorAll(".card").forEach(card => {
//             card.classList.add("flipped");
//             card.style.pointerEvents = "none";
//         });
//         setTimeout(() => {
//             document.querySelectorAll(".card").forEach(card => {
//                 card.classList.remove("flipped");
//                 card.innerHTML = "?";
//             });
//             setTimeout(() => {
//                 moves = 0;
//                 moveCounter.textContent = moves;
//                 matchedCards = 0;
//             })
//         })
   
//     }
// })



// const gameCards = document.querySelector(".gameCards");
// let cards = [];
// let firstCard, secondCard;
// let lockBoard = false;
// let score = 0;

// document.querySelector("#points").textContent = score;
// document.querySelector(".card").addEventListener("click", flipCard)
// //document.querySelector("img").addEventListener("click", flipCard)

// fetch("./data/cards.json")
//     .then((res) => res.json())
//     .then((data) => {
//         cards = [ ...data, ...data];
//         shuffleCards();
//         //generateCards();
//     //flipCard();
// });
// function shuffleCards() {
//     let currentIndex = cards.length,
//     randomIndex,
//     temporaryValue;

// while(currentIndex !== 0){
//    randomIndex = Math.floor(Math.random() * currentIndex);
//    currentIndex -= 1;
//    temporaryValue = cards[currentIndex];
//    cards[currentIndex] = cards[randomIndex];
//    cards[randomIndex] = temporaryValue;
// }
// }
// //Using for loop to loop over the cards. containing front div and back div.
// // function generateCards(){
// //     for (let card of cards){
// //         const cardElement = document.createElement("div")
// //         cardElement.classList.add("card");
// //         cardElement.setAttribute("data-name", card.name);
// //         cardElement.innerHTML = `
// //         <div class="front">
// //          <img class="front-image" src=${card.image} />
// //          </div>
// //          <div class="back"></div>
// //         `;
// //         gameCards.appendChild(cardElement);
// //         cardElement.addEventListener("click", flipCard)
// //     }
// // }

// function flipCard(){
//     if(lockBoard)return;
//     if(this === firstCard)return;

//     this.classList.add("flipped");

//     if(!firstCard){
//         firstCard = this;
//         return;
//     }

//     secondCard = this;
//     score++;
//     document.querySelector("#points").textContent = score;
//     lockBoard = true;

//     checkIfMatched();
// }

// function checkIfMatched(){
//     let isMatch = firstCard.dataset.name === secondCard.dataset.name;

//     isMatch ? disableCards() : unflipCards();
// }

// function disableCards() {
//     firstCard.removeEventLister("click", flipCard);
//     secondCard.removeEventLister("click", flipCard)

//     resetBoard();
// }

// function unflipCards(){
//     setTimeout(() => {
//         firstCard.classList.remove("flipped");
//         secondCard.classList.remove("flipped");

//         resetBoard();

//     }, 1000);
// }

// function resetBoard(){
//     firstCard = null;
//     secondCard = null;
//     lockBoard = false;
// }