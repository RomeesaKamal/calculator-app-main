let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let toggleSwitch = document.querySelectorAll(".header");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "RESET") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
  const toggleSwitch = document.getElementById('toggleSwitch');
let currentTheme = 1;

toggleSwitch.addEventListener('click', () => {
  // Cycle through themes 1, 2, and 3
  currentTheme = currentTheme === 3 ? 1 : currentTheme + 1;

  // Update body class for theme
  document.body.className = `theme${currentTheme}`;

  // Update toggle knob position by changing toggleSwitch class
  toggleSwitch.className = `toggle-switch theme-${currentTheme}`;
});

});


  
