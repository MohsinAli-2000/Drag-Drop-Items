let lists = document.getElementsByClassName("list");
let rightDiv = document.getElementsByClassName("right")[0];
let leftDiv = document.getElementsByClassName("left")[0];

for (list of lists) {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;
  });

  list.addEventListener("click", (e) => {
    let selected = e.target;
  });

  rightDiv.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  rightDiv.addEventListener("click", (e) => {
    // Your click event handling for 'rightDiv'
  });

  rightDiv.addEventListener("drop", (e) => {
    rightDiv.appendChild(selected);
    selected = null;
  });

  leftDiv.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  leftDiv.addEventListener("click", (e) => {
    // Your click event handling for 'leftDiv'
  });

  leftDiv.addEventListener("drop", (e) => {
    leftDiv.appendChild(selected);
    selected = null;
  });
}
