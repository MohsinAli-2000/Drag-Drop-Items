let lists = document.getElementsByClassName("list");
let rightDiv = document.getElementsByClassName("right")[0];
let leftDiv = document.getElementsByClassName("left")[0];

for (list of lists) {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;

    rightDiv.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    rightDiv.addEventListener("drop", (e) => {
      rightDiv.appendChild(selected);
      selected = null;
    });

    leftDiv.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    leftDiv.addEventListener("drop", (e) => {
      leftDiv.appendChild(selected);
      selected = null;
    });
  });
}
