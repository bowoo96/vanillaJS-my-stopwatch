
// let timerId = setInterval(() => console.log('째깍'), 1000);

// 변수작업
// - Element  
//     - 분 : const minuteEl = document.querySelector("#minute"); 
//     - 초 : 
//     - 밀리초 : 

//     - 스타트 : const startBtn = document.querySelector("#button-start")
//     - 스탑 : 
//     - 리셋 : 
//     - 랩 :

// - LAB 기록을 담을 배열을 선언 : history_push[] ,history_unshift[] 

// 시간 Element

const minuteEl = document.querySelector("#minute");
const secondEl = document.querySelector("#second");
const miliSecondEl = document.querySelector("#mili_second");

const startBtn = document.querySelector("#button-start");
const stopBtn = document.querySelector("#button-stop");
const resetBtn = document.querySelector("#button-reset");
const labBtn = document.querySelector("#button-lab");

// - 00:00.00
// 값 - let minute = 00 , 초 = 00, 밀리초

let minute = 0;
let second = 0;
let miliSecond = 0;

// 기능 : Start
// 1. button Element 찾고 -> 이벤트(click)을 걸고, 내부에서 setInterval 함수 불러온다. 
// setInterval(콜백함수, 주기시간);
// setInterval 함수가 실행되면서 값을 리턴할 때 : 리턴하는 값을 변수에 담으면 된다.



// 버튼 클릭시 동작 함수.
startBtn.addEventListener('click', start);



// 밀리초 +1 씩 증가하는 함수를 10 마다 실행.
// 시간 증가 밀리초 +1 씩하고 text로 출력. 
// 계속 증가하다가 (밀리초 <= 99)
// 조건에 따른 분기
// if 밀리초가 60이 되면, (밀리초를 00 으로, second를 +1)
// if 세컨이 60이되면, (세컨은 00으로, 분은 +1) 
// if 분이 60이 되면, (스탑) // 60:00.00
// padStart
let setTime;

function start() {
    if (setTime === undefined) {
        setTime = setInterval(mililSecondPlus, 10);
        function mililSecondPlus() {
            miliSecond++;
            if (99 < miliSecond) {
                second++;
                if (59 < second) {
                    minute++;
                    if (60 == minute) {
                        miliSecond = 0;
                        second = 0;
                        secondEl.textContent = second;
                        minuteEl.textContent = minute;
                        clearInterval(setTime);
                    }
                    minuteEl.textContent = String(minute).padStart(2, '0');
                    second = 0;
                }
                secondEl.textContent = String(second).padStart(2, '0');
                miliSecond = 0;
            }
            miliSecondEl.textContent = String(miliSecond).padStart(2, '0');
        }
    }
}



// STOP 기능
// setInterval을 멈추면 된다
// -> clearInterval(setTime) 함수를 호출하면 된다.
stopBtn.addEventListener('click', stop);
function stop() {
    clearInterval(setTime);
    setTime = undefined;
}



// Lab 기능

// 1. 동작
// 버튼을 눌렀을 때, (시간 값을 받아온다.) 
// click 이벤트가 발생할 때마다 history.push(); (나중에 출력할 때도 편하게??)


// 구간기록을 담는 태그를 만드는 함수
// (단, ul이 없으면, ul 생성 후 li 생성
// ul이 있으면, li만 생성
// )
// (조건을 확인할 때, 
//     // document.querySelector("ul") true면, html안에 ul태그가 있다는 의미.
//     // document.querySelector("ul") false면, html안에 ul태그가 없다는 의미.
//     if(!document.querySelector("ul")) {
//         ul을 생성해준 후, li 생성주고 작업하면됌
//     }
//     else {
//         li만 생성한 후 작업
//     }
// )



// 2. 출력
// ul -> li : 
// createElement() -> appaendChild -> innerHTML(textContent)을 통해 값을 입력


// [OPTION]
// 한번은 push로 담긴 배열을 불러보고,
// 다른 한번은 unshift로 담긴 배열을 불러보고
// 순서를 확인

labBtn.addEventListener('click', recordShow);

let recordList = [];

const wrapperEl = document.querySelector(".wrapper");

function recordShow() {
    let recordPush = recordList.push(`${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}.${String(miliSecond).padStart(2, '0')}`);
    let ulEl = document.querySelector("ul");

    if (!ulEl) {
        const ul = document.createElement("ul");
        wrapperEl.appendChild(ul);
        ulEl = document.querySelector("ul");
    }

    const li = document.createElement("li");
    let liEl = document.querySelector("li");
    ulEl.appendChild(li);
    //prepend 사용해보기.
    ulEl.lastChild.innerHTML = recordList[recordList.length - 1];
}


// Reset 기능
// lab으로 남은 기록도 삭제
// recordList 배열 안에 내용 삭제
// lab 버튼을 눌러서 생성된 ul, li 삭제
resetBtn.addEventListener('click', reset);
function reset() {
    clearInterval(setTime);
    setTime = undefined;

    miliSecond = '00';
    second = '00';
    minute = '00';

    miliSecondEl.textContent = miliSecond;
    secondEl.textContent = second;
    minuteEl.textContent = minute;

    recordList.splice(0, recordList.length);

    let abc = document.querySelector("ul");
    abc.remove();
}