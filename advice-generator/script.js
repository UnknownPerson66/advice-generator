const advice_text = document.getElementById("adv");
const advice_id = document.getElementById("adv-id");
const dice_btn = document.getElementById("btnadvice");
  

//using async/await
async function getAdvice(){
    const resp = await fetch("https://api.adviceslip.com/advice") ;
    const data = await resp.json();

    advice_id.innerHTML = data.slip.id;
    advice_text.innerHTML = data.slip.advice;

 }
 
dice_btn.addEventListener("click", getAdvice)
 
//using fetch.then
/*
 dice_btn.addEventListener('click', () => {
   fetch("https://api.adviceslip.com/advice").then(function(response) {
        response.json().then(function(data) {
          advice_id.innerHTML = data.slip.id;
          advice_text.innerHTML = data.slip.advice;
        });
      }).catch(function(err) {
        alert('Failed retrieving information', err);
    });
 })
*/
