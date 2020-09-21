  document.getElementById("submitguess").onclick = function() {
    document.getElementById("result").style.display = "block";
    result();
  };

  document.getElementById("tryAgain").onclick = function() {
    document.getElementById("result").style.paddingTop = "20px";
      document.getElementById("result").style.display = "none";
      tryAgain();
    };
