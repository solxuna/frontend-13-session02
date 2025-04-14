function add() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").textContent = "숫자를 입력하세요.";
      return;
    }

    const sum = num1 + num2;
    document.getElementById("result").textContent = "결과: " + sum;
  }
  
  document.getElementById("num1").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      add();
    }
  });
  document.getElementById("num2").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      add();
    }
  });