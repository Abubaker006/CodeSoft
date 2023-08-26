const inputArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

document.querySelector("#push").onclick = () => {
  if (document.querySelector("#input-note").value.length === 0) {
    alert("Please First Enter a Note");
  } else {
    const enteredValue = document.querySelector("#input-note").value;
    createItem(enteredValue);
  }
};

//display the list function

function displayItems() {
  for (let i = 0; i < inputArray.length; i++) {
    document.querySelector("#sectionForList").innerHTML += `
          <ul id="unorderListID" class='unordered-List'>
            <li>
              ${inputArray[i]}
              <button class='btn btn-del'><img src='./images/del-icon.png'  class='del-img'></button>
            </li>
          </ul>`;
  }
  activateDeleteListeners();
}
function activateDeleteListeners() {
  let deleteBtn = document.querySelectorAll(".btn-del").forEach((db, index) => {
    db.addEventListener("click", () => {
      deleteItem(index);
    });
  });
}

function deleteItem(index) {
  inputArray.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(inputArray));
  location.reload();
}
//the function responsible for creating the array & local storage

function createItem(value) {
  inputArray.push(value);
  localStorage.setItem("items", JSON.stringify(inputArray));
  location.reload();
}

function displayDate() {
  var date = new Date();
  date = date.toString().split(" ");
  document.querySelector(".heading").innerHTML =
    date[1] + "-" + date[2] + "-" + date[3];
}

window.onload = () => {
  displayDate();
  displayItems();
};
