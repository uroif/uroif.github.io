var pos = 0, correct = 0;
var test, status, question, choice, choices, chA, chB, chC, chD;
var questions = [
  ["1 + 1 bằng mấy", "2", "3", "4", "5", "A"],
  ["2 * 2 bằng mấy", "2", "4", "6", "8", "B"],
  ["3 / 3 bằng mấy", "1", "2", "3", "4", "A"],
  ["4 + 4 bằng mấy", "8", "88", "2", "44", "A"],
  ["6 + 9 bằng mấy", "69", "96", "15", "51", "C"]
  ];

function get(x) { // Get the id for short codes 
  return document.getElementById(x);
}

function makeQuestion() {
  test = get("test");
  if(pos >= questions.length) {
    if(correct == questions.length) {
      window.location.assign('congrat.html');
    } else {
      get("status").innerHTML = "RẤT TIẾC...";
      test.innerHTML = "<h2>Bạn đã trả lời đúng " + correct + " trên " + questions.length + " câu hỏi.</h2><br>Bạn có muốn chơi lại?<br><br>" + "<button onclick='reload()'> Chơi lại </button>";
    };

    pos = 0; // Reset the result
    correct = 0; // Reset the result

    return false;
  };

  get("status").innerHTML = "Câu "+ (pos + 1);
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  chD = questions[pos][4];

  test.innerHTML = "<br><h3>" + question + "</h3><br>";
  test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br>";  
  test.innerHTML += "<input type='radio' name='choices' value='D'> " + chD + "<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'> Đồng ý </button>";
};

function checkAnswer() {
  choices = document.getElementsByName("choices");
  for(i = 0; i < choices.length; i++) {
    if(choices[i].checked) {
      choice = choices[i].value;
    };
  };

  if(choice == questions[pos][5]) {
    correct++;
  };

  pos++;
  makeQuestion();
};

function reload() {
  location.reload();
}

window.addEventListener("load", makeQuestion);