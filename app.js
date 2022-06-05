// hak = 5;
// do {

//   hak -=1

//   let x = Math.floor(Math.random() * 10);
//   console.log(x);
//   document.getElementById("check").addEventListener("click", () => {
//     let input = document.querySelector("#num");
//     let num = document.createTextNode(input.value);
//     input.value = "";
//     num==x ? console.log("congrasts"): console.log("unfortunatelly");

//     console.log(num);
//   });
// } while (hak>0);

// let a={w:3};
// let b=3;
// Object.values(a) == b ? console.log("congrasts") : console.log("unfortunatelly");
// console.log(Object.values(a));

//!döngüsüz hali
let hak = 5;

let x = Math.floor(Math.random() * 101);
console.log(x);
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

// console.log(input);
// console.log(typeof +input);
// document.querySelector("#img").src="https://i.pinimg.com/474x/39/80/43/39804364a24bfc2755fa4c8da2753667.jpg";

// let count=5
//         let x = Math.floor(Math.random() * 10);
//         console.log(x);

// do {
//     count -=1;

//       document.querySelector(".but").addEventListener("click", () => {
//         let input = document.querySelector("#num").value;
//         console.log(input);
//          // let num = document.createTextNode(input.value);
//         if (+input == x) {
//         document.querySelector("#img").src =
//             "https://i.pinimg.com/474x/c5/82/01/c582011acd8b6095cccce7d06dd78173.jpg";
//         break

//         } else if (+input < x) {
//         document.querySelector(
//             ".brif"
//           ).innerHTML = `please enter a number between ${input} and 10`;
//         } else if (+input > x) {
//           document.querySelector(
//             ".brif"
//           ).innerHTML = `please enter anumber between ${input} and 0`;
//         }
//         document.querySelector("#num").value = "";
//       });

// } while (count>0);

// let i=0;
//     let x = Math.floor(Math.random() * 10);
//     console.log(x);
// while(i<6){
//         document.querySelector(".but").addEventListener("click", () => {
//           let input = document.querySelector("#num").value;
//           console.log(input);
//            // let num = document.createTextNode(input.value);
//           if (+input == x) {
//           document.querySelector("#img").src =
//               "https://i.pinimg.com/474x/c5/82/01/c582011acd8b6095cccce7d06dd78173.jpg";
//           } else if (+input < x) {
//           document.querySelector(
//               ".brif"
//             ).innerHTML = `please enter a number between ${input} and 10`;
//           } else if (+input > x) {
//             document.querySelector(
//               ".brif"
//             ).innerHTML = `please enter anumber between ${input} and 0`;
//           }
//           document.querySelector("#num").value = "";
//         });

//   i = i + 1;
// }
