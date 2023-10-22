let lists = document.getElementsByClassName("list");
let rightDiv = document.getElementsByClassName("right")[0];
let leftDiv = document.getElementsByClassName("left")[0];

for (list of lists) {
  list.addEventListener("dragstart click", (e) => {
    let selected = e.target;

    rightDiv.addEventListener("dragover click", (e) => {
      e.preventDefault();
    });

    rightDiv.addEventListener("drop click", (e) => {
      rightDiv.appendChild(selected);
      selected = null;
    });

    leftDiv.addEventListener("dragover click", (e) => {
      e.preventDefault();
    });

    leftDiv.addEventListener("drop click", (e) => {
      leftDiv.appendChild(selected);
      selected = null;
    });
  });
}
