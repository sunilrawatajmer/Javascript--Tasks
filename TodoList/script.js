var dataList = document.querySelector('#dataList');
var num = 0;

var addButton = document.querySelector('#addButton');
addButton.addEventListener('click', () => {
  num += 1;
  var input = document.querySelector('#input').value;
  var row = '<tr id="row"><td>' + num + '</td><td>' + input + '</td><td><button onclick="del(this);" id="deleteButton">Delete</button><button id="updateButton" onclick="update(this)">Update</button></td></tr>';
  dataList.innerHTML += row;
});

//delete the row 
function del(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

//update the value
function update(button) {
  row = button.parentNode.parentNode;
  var cells = row.getElementsByTagName('td');
  var updateValue = prompt("Enter new Value : ", cells[1].innerHTML);
  cells[1].innerHTML = updateValue;
}