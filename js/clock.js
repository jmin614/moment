const colck = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    //number를 string로 바꾸고 string의 길이를 2로 설정 후 앞에 0을 추가함

    colck.innerText = hours +":"+ minutes +":"+ seconds;
}
getClock(); //일단 시간 출력
setInterval(getClock, 1000);
//함수를 1초마다 실행 (setTimeout은 몇초 뒤에 실행)

