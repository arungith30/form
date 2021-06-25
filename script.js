function addUser(){
    let tableUsers = document.getElementById("tdata");

     let tr = document.createElement("tr");
      tr.appendChild(document.createElement("td"));
      tr.appendChild(document.createElement("td"));
      tr.appendChild(document.createElement("td"));
      tr.appendChild(document.createElement("td"));
      tr.appendChild(document.createElement("td"));
      tr.appendChild(document.createElement("td"));
      tr.appendChild(document.createElement("td"));
      tr.appendChild(document.createElement("td"));
      
    
      var ele = document.getElementsByName('gender');        
      for(i = 0; i < ele.length; i++) {
          if(ele[i].checked){
         var temp = ele[i].value;}
      }

  function foods () {

    let food = document.getElementsByName("food");
    let foodList = [];
    let foodCount = 0;
    let result =[];
    for(let i=0;i<food.length;i++){
        if(food[i].checked){
            foodList.push(food[i].value);
            foodCount++;
        }
    }
    if(foodList.length>=2){
        result = foodList.join(", ");
        return result;
    }else{
        
       alert("Choose atleast 2 options out of 5 in food");
       return foodList;
       
    }
  }

      tr.cells[0].innerHTML = document.getElementById("fname").value;
      tr.cells[1].innerHTML = document.getElementById("lname").value;
      tr.cells[2].innerHTML = document.getElementById("address").value;
      tr.cells[3].innerHTML =document.getElementById("pincode").value;
     
      tr.cells[4].innerHTML =temp;
      tr.cells[5].innerHTML = foods();
      tr.cells[6].innerHTML = document.getElementById("state").value;
      tr.cells[7].innerHTML =document.getElementById("country").value;

      tableUsers.appendChild(tr);
     
      $("#exampleModal").modal('toggle');
      alert('done');
}






