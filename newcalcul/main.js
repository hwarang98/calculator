var result = document.querySelector('.resultInput'); //result id 가져옴

function addOutput(buttonValue){  //함수 선언 => addOutput 이라는 함수를 쓰면 다음 코드가 실행
    var outputvalue = result.value+buttonValue;  
    result.value = outputvalue;
}

function equal(){    //함수 선언 => equal 이라는 함수를 쓰면 다음 코드가 실행
    result.value=eval(result.value);
}

function init(){    //함수 선언 => init 이라는 함수를 쓰면 다음 코드가 실행
    result.value='';
}