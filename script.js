//modal stuff
const modal = document.getElementById("modal");
function closeModal() {
  modal.style.display = "none";
}
//level up
let level = 0;
function odd() {
  level++;
  if (level == 1) {
    document.getElementById("mainbox").classList.add("mb1");
    document.getElementById("p1").innerHTML = "8";
    document.getElementById("p2").innerHTML = "3";
    document.getElementById("p3").innerHTML = "12";
    document.getElementById("p4").innerHTML = "15";
    document.getElementById("p5").innerHTML = "18";
    document.getElementById("p6").innerHTML = "42";
  } else if (level == 2) {
    document.getElementById("mainbox").classList.add("mb2");
    document.getElementById("p1").innerHTML = "15";
    document.getElementById("p2").innerHTML = "56";
    document.getElementById("p3").innerHTML = "63";
    document.getElementById("p4").innerHTML = "35";
    document.getElementById("p5").innerHTML = "28";
    document.getElementById("p6").innerHTML = "147";
  } else if (level == 3) {
    document.getElementById("mainbox").classList.add("mb3");
    document.getElementById("p1").innerHTML = "111";
    document.getElementById("p2").innerHTML = "55";
    document.getElementById("p3").innerHTML = "110";
    document.getElementById("p4").innerHTML = "132";
    document.getElementById("p5").innerHTML = "154";
    document.getElementById("p6").innerHTML = "385";
  } else if (level == 4) {
    document.getElementById("mainbox").classList.add("mb4");
    document.getElementById("p1").innerHTML = "11";
    document.getElementById("p2").innerHTML = "55-45";
    document.getElementById("p3").innerHTML = "110-110";
    document.getElementById("p4").innerHTML = "2*5";
    document.getElementById("p5").innerHTML = "2.5*4";
    document.getElementById("p6").innerHTML = "5+5";
  } else if (level == 5) {
    document.getElementById("mainbox").classList.add("mb5");
    document.getElementById("p1").innerHTML = "2.7";
    document.getElementById("p2").innerHTML = "14";
    document.getElementById("p3").innerHTML = "70";
    document.getElementById("p4").innerHTML = "50.4";
    document.getElementById("p5").innerHTML = "25.2";
    document.getElementById("p6").innerHTML = "176.4";
  } else if (level == 6) {
    document.getElementById("mainbox").classList.add("mb6");
    document.getElementById("p1").innerHTML = "10.4";
    document.getElementById("p2").innerHTML = "176.8";
    document.getElementById("p3").innerHTML = "20.4";
    document.getElementById("p4").innerHTML = "23.8";
    document.getElementById("p5").innerHTML = "61.2";
    document.getElementById("p6").innerHTML = "136";
  } else if (level == 7) {
    document.getElementById("mainbox").classList.add("mb7");
    document.getElementById("p1").innerHTML = "9 ";
    document.getElementById("p2").innerHTML = "2";
    document.getElementById("p3").innerHTML = "73";
    document.getElementById("p4").innerHTML = "3";
    document.getElementById("p5").innerHTML = "61";
    document.getElementById("p6").innerHTML = "5";
  } else if (level == 8) {
    document.getElementById("mainbox").classList.add("mb8");
    document.getElementById("p1").innerHTML = "145";
    document.getElementById("p2").innerHTML = "16";
    document.getElementById("p3").innerHTML = "64";
    document.getElementById("p4").innerHTML = "225";
    document.getElementById("p5").innerHTML = "196";
    document.getElementById("p6").innerHTML = "81";
  } else if (level == 9) {
    document.getElementById("mainbox").classList.add("mb9");
    document.getElementById("p1").innerHTML = "3.142";
    document.getElementById("p2").innerHTML = "3.143";
    document.getElementById("p3").innerHTML = "3.151";
    document.getElementById("p4").innerHTML = "2.142";
    document.getElementById("p5").innerHTML = "3.241";
    document.getElementById("p6").innerHTML = "3.147";
  } else {
    document.getElementById("modal1").style.display = "block";
  }
  document.getElementById("level").innerHTML = level;
}
//lives
let lives = 3;
function even() {
  lives--;
  document.getElementById("lives").innerHTML = lives;

  /*if (lives == 0) {
    document.getElementById("modal2").style.display = "block";
  } else if (lives == 2) {
    document.getElementById("lives").style.color = "yellow";
  } else if (lives == 1) {
    document.getElementById("lives").style.color = "red";
  }
}*/

  if (lives == 2) {
    document.getElementById("lives").style.color = "yellow";
  } else if (lives == 1) {
    document.getElementById("lives").style.color = "red";
  } else if (lives == 0) {
    document.getElementById("modal2").style.display = "block";
  }
}
