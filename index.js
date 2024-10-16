let inputElement = document.getElementById("input");
let inputElementdate = document.getElementById("input-date")
let buttonElement = document.getElementById('button');
let ulElement = document.getElementById("ul");
let selectElement = document.getElementById("Priority");


document.addEventListener("DOMContentLoaded", (event) => {
  selectElement.value = "high";
});




buttonElement.addEventListener('click', function() {
  let inputvalue = inputElement.value;
  let inputdate = inputElementdate.value;

  const selectedDate = new Date(inputdate);
  const currentDate = new Date();
  selectedDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  if(selectedDate < currentDate){
    alert("Please enter valid date.")
  }

  const selectvalue = selectElement.value;
  if(inputvalue ==="" || inputdate === "" ){
    alert("Please enter both a task and a due date.");
  }
  else{

      //li element
      
        let liElement = document.createElement('li');
        liElement.textContent = inputvalue + " - Due: " +inputdate;
        liElement.classList.add("flex-container")
        ulElement.appendChild(liElement);

      if(selectElement.value === "high"){
        liElement.style.backgroundColor = "#F8D7DA";
      }
      else if( selectElement.value === "medium"){
          liElement.style.backgroundColor = "#FFF3CD";
      }  
      else{
        liElement.style.backgroundColor = "#D4EDDA";
      }

        

  
      
      //edit button
        let editButtonElement = document.createElement('button');
        liElement.appendChild(editButtonElement);
        editButtonElement.textContent = "Edit";
        editButtonElement.classList.add("edit-button");
        liElement.appendChild(editButtonElement);

        editButtonElement.addEventListener('click', function() {
          ulElement.removeChild(liElement);
          inputElement.value = inputvalue;
          inputElementdate.value = inputdate;
          selectElement.value = selectvalue;
        });

  //

          //deletebutton
          let deleteButtonElement = document.createElement('button');
          liElement.appendChild(deleteButtonElement);
          deleteButtonElement.textContent = "Delete";
          deleteButtonElement.classList.add("delete-button");
          liElement.appendChild(deleteButtonElement);


          deleteButtonElement.addEventListener('click', function() {
            ulElement.removeChild(liElement);
          });
          inputElement.value = "";
          inputElementdate.value = "";
          selectElement.value = "low";
  }
  
// let marks = [1,2,3,4,5];
// let score = localStorage.getItem("score");
// console.log(score);
// if(score){
//   let scorearray = JSON.parse(score);
//   let lastscore = scorearray[scorearray.length-1];
//   let newscore = lastscore + 1;
//   scorearray.push(newscore);
//   localStorage.setItem("score",JSON.stringify(scorearray));

// }
// else{
//   let score = [0];
//   localStorage.setItem("score",JSON.stringify(score));
// }

// localStorage.setItem("inputvalue",inputvalue);
// localStorage.setItem("inputdate",inputdate);
// localStorage.setItem("selectvalue",selectvalue);
  

// let personalDetails ={name : inputvalue,DOB : inputdate,priority : selectvalue};

// localStorage.setItem("personalDetails",JSON.stringify(personalDetails));

let item = {name : inputvalue, DOB : inputdate, priority : selectvalue};

let personalDetails = localStorage.getItem("personalDetails");

if(personalDetails){
  let convertedtoarray = JSON.parse(personalDetails);
  convertedtoarray.push(item);
  localStorage.setItem("personalDetails",JSON.stringify(convertedtoarray));
}
else{
personalDetails = [item];
localStorage.setItem("personalDetails",JSON.stringify(personalDetails));
}

});

