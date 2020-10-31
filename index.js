let text1 = document.querySelector(".text");
let text2 = document.querySelector(".text2");
let btn = document.querySelector(".btn");
let input = document.querySelector(".input");

btn.addEventListener("click", function () {
  text2.innerHTML = input.value;
});

{
  let variable1 = 10;
  console.log(variable1);
}
