
let x = Math.floor(Math.random() * 101);
// console.log(x);
document.querySelector(".but").addEventListener("click", () => {
  let input = parseInt(document.querySelector("#num").value);

  if (input == x) {
    document.querySelector("#img").src =
      "https://i.pinimg.com/474x/c5/82/01/c582011acd8b6095cccce7d06dd78173.jpg";
      
  } else if (input < x) {
    document.querySelector(
      ".brif"
    ).innerHTML = `please enter anumber between ${input} and 100`;
  } else if (input > x) {
    document.querySelector(
      ".brif"
    ).innerHTML = `please enter a number between  0 and  ${input}  `;
  }
  document.querySelector("#num").value = "";
});

document.querySelector(".play").addEventListener("click",()=>{
  window.location.reload(false);
})
