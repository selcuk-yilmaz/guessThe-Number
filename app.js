let start=0;
let stop=100;
let x = Math.floor(Math.random() * 101);
// console.log(x);
document.querySelector(".but").addEventListener("click", () => {
  let input = parseInt(document.querySelector("#num").value);

  if (input == x) {
    document.querySelector("#img").src =
      "https://i.pinimg.com/474x/c5/82/01/c582011acd8b6095cccce7d06dd78173.jpg";
     document.querySelector(".brif").innerHTML= `🎇Congrats! lucky number is ${input}🎇`; 
      
  } else if (input < x) {
    start = input;
     document.querySelector(
      ".brif"
    ).innerHTML = `Please enter a number between  ${start}  and ${stop} `;
  } else if (input > x) { 
     stop=input;
    document.querySelector(
      ".brif"
    ).innerHTML = `Please enter a number between  ${start} and  ${stop}`;
  }
  document.querySelector("#num").value = "";
});

document.querySelector(".play").addEventListener("click",()=>{
  window.location.reload(false);
})
