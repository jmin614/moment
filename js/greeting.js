const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const loginName = greeting.querySelector(".login-name")
//도큐먼트에서 불러오는 것들

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
const TODOES_KEY = "todos";
//css, localstorage 이용하는 키 


function paintGreetings(username){ //greeting을 작동시키는 함수
    greeting.classList.remove(HIDDEN_CLASS);
    loginName.innerText = username + "님, 안녕하세요. 오늘도 좋은 하루 되세요.";
}


//form 시작 이벤트
function onloginSubmit(event){
    // event.preventDefault();
    //preventDefault a태그나 submit 시 새로고침을 막아줌

    const loginName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS); //form 숨김

    paintGreetings(USERNAME_KEY);

    localStorage.setItem(USERNAME_KEY, loginName);
    //로컬스토리지에 username을 저장
};

loginForm.addEventListener("submit", onloginSubmit)


//localstorage 데이터 확인 후 작업
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){ //localstorage 데이터가 없을 때
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onloginSubmit)
}else{
    paintGreetings(savedUsername);

    //localstorage 로그아웃
    const logOut = greeting.querySelector(".logout");
    function logoutBtn(){
        window.localStorage.clear(); //로그아웃 했으면 다 지워야지!
        alert("로그아웃 되었습니다.");
        location.reload(); //로그아웃 후 새로고침
    }
    logOut.addEventListener("click", logoutBtn); //로그아웃 버튼 클릭 시

}

 