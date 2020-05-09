function page2() {
  location.replace("quiz2.html")
}

function page3() {
  location.replace("quiz3.html")
}

function page4() {
  location.replace("quiz4.html")
}

function page5() {
  location.replace("quiz5.html")
}

function gameover() {
	location.replace("gameover.html")
}

function correct() {
  document.querySelector("#correct").style.backgroundColor = "green";
  document.getElementById("correct").disabled = true;
  document.getElementById("b").disabled = true;
  document.getElementById("c").disabled = true;
  document.getElementById("d").disabled = true;

    if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "Your total score as at now is: " + localStorage.clickcount;
	} else {
    document.getElementById("result").innerHTML = "Your browser does not support web storage...";
	} 
}

function myFunction1() {
  document.querySelector("#b").style.backgroundColor = "red";
  document.getElementById("correct").disabled = true;
  document.getElementById("b").disabled = true;
  document.getElementById("c").disabled = true;
  document.getElementById("d").disabled = true;
}

function myFunction2() {
  document.querySelector("#c").style.backgroundColor = "red";
  document.getElementById("correct").disabled = true;
  document.getElementById("c").disabled = true;
  document.getElementById("b").disabled = true;
  document.getElementById("d").disabled = true;
}

function myFunction3() {
  document.querySelector("#d").style.backgroundColor = "red";
  document.getElementById("correct").disabled = true;
  document.getElementById("b").disabled = true;
  document.getElementById("c").disabled = true;
  document.getElementById("d").disabled = true;
}


