const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input"); 
//input 값 가져오기

const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);

//todo 배열
let toDos = [];

function savwToDos(){ //로컬스토리지에 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //string으로 저장
    //JSON.parse //js가 이해할 수 있는 array
}


//지우기
function deleteToDo(event){
    const li = event.target.parentElement;
    //target 클릭 된 element   
    //parentElement 클릭 된 element의 부모
    li.remove(); //삭제
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    //클릭한 todo와 다른 id는 남겨두고 싶다는 뜻
    //parseInt : 숫자로 바꿈
    savwToDos();
    // console.log(li.id);


}

//todo 추가
function paintToDo(newTodo){
    const li = document.createElement("li"); //리스트를 만듬
    li.id = newTodo.id; //li의 id를 오브젝트의 id명으로 바꿈
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newTodo.text; //span에 입력한거넣고 오브젝트의 text를 가져옴
    button.innerText = " x ";
    button.addEventListener("click", deleteToDo); //클릭 시 삭제

    li.appendChild(span); //li안에 span넣음
    li.appendChild(button);
    todoList.appendChild(li);
}

//todo 입력 후 로컬스토리지에 저장
function handleToFoSubmit(event){
    event.preventDefault(); //새로고침x

    const newTodo = todoInput.value; //input값 복사
    todoInput.value = "";

    const newTodoObj = {
        text : newTodo,
        id : Date.now(), //id에 현재시각을 넣음
    };
    toDos.push(newTodoObj); //엔터키누른 후 todOs에 push
    // console.log(newTodoObj);
    // console.log(todoInput.value, newTodo);
    paintToDo(newTodoObj);
    savwToDos();
}

//섭밋 시 위 펑션 실행
todoForm.addEventListener("submit", handleToFoSubmit);


// function sayHello(item){
//     console.log("gdgd", item);
//     paintToDo(item);
// }
//저장된 todo 노출 (새로 function하는 방법)


// console.log(savedToDos);

if(savedToDos !== null){ //null이 아니면
    const parsedToDos = JSON.parse(savedToDos); //js가 이해할 수 있는 array
    toDos = parsedToDos; //toDos를 빈값이 아니게 설정
    // console.log(parsedToDos);

    // parsedToDos.forEach(sayHello); 
    //forEach : array의 각 item에 대해 function 실행
    parsedToDos.forEach(paintToDo); 
    //function없이 item만 호출 하는 방법
}

