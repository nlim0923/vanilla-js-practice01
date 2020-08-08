var ul = document.getElementById("list"),
  removeAll = document.getElementById("removeAll"),
  add = document.getElementById("add");

add.onclick = () => {
  addLi(ul);
};

function addLi(targetUl) {
  //.getElementById().value id 객체의 값 가져오기
  var inputText = document.getElementById("text").value,
    //<li>엘리먼트 생성
    li = document.createElement("li"),
    //.createTextNode() inputText + " " 텍스트 추가
    textNode = document.createTextNode(inputText + " "),
    //<button>엘리먼트 생성
    removeButton = document.createElement("button");
  //input text값을 초기화 시켜준다.
  document.getElementById("text").value = "";

  //아무것도 입력하지 않았을 떄의 예외처리
  if (inputText.split(" ").join("").length === 0) {
    alert("no input");
    return false;
  }

  removeButton.className = "removeMe";
  removeButton.innerHTML = "다했당!";
  //removeButton.setAttribute("onclick", "removeMe(this);");
  removeButton.onclick = function () {
    removeMe(this);
  };

  //li의 자식에 textNode,removeButton추가
  li.appendChild(textNode);
  li.appendChild(removeButton);

  targetUl.appendChild(li);
}

//부모노드로가서 자식을 제거하는 형태로 하세요..
function removeMe(item) {
  var parent = item.parentElement;
  parent.parentElement.removeChild(parent);
}

//.innerHTML = ""은 모든 내용을 지울 수가 있당.
removeAll.onclick = function () {
  ul.innerHTML = "";
};
