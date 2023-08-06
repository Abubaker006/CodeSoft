var newNumber;
function addNumber(number)
{
  newNumber=document.getElementById("Display");
  newNumber.value+=number;
}
function solve()
{
  var n1=newNumber.value;
  n1=eval(n1);
  newNumber.value=n1;
}
function AC()
{
  newNumber.value=' ';
}
function DE()
{
newNumber.value=newNumber.value.slice(0,-1);
}


//for toggle button and dark and light mode
function checked()
{
  var variable=document.getElementById("h2");
  if(variable.innerHTML=="<h2>Dark Mode</h2>")
  {  document.getElementById("h2").innerHTML="<h2>Light Mode</h2>";
   document.getElementById("C1").style.background="white";
   document.getElementById("Display").style.color="black";
   document.getElementById("LastOne").style.color = "black";
   for (var i = 1; i <= 19; i++) {
    document.getElementById("input" + i).style.color = "black";
    }
   }
  else{
    document.getElementById("h2").innerHTML="<h2>Dark Mode</h2>";
    document.getElementById("C1").style.background="#3f4246";
    document.getElementById("Display").style.color="white";
    document.getElementById("LastOne").style.color = "white";
    for (var i = 1; i <= 19; i++) {
    document.getElementById("input" + i).style.color = "white";
    }
  }
  
}
