function mostFrequentCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    // ex) str ='apples not oranges'
    // 빈 객체를 선언한다.
    let obj = {}
    let word = ''
    let max = obj[str[0]] //a의 속성값(문자열에서 a의 갯수)
    // 각각의 인덱스를 가져온다. 인덱스가 문자열에서 몇번 등장하는지 count한다.
    for(let i = 0; i < str.length; i++){
      if(obj[str[i]] === undefined){
        obj[str[i]] = 0 //{a: 0}
      }
      obj[str[i]]++ //{a: 2}
    } //obj = {a: 2, p: 2, l: 1 ...}
  
    for(let i = 1; i < str.length; i++){
      if(obj[str[i]] > max){
        max = obj[str[i]]
        word = str[i]
      }
      return word
    }
  
    // 가장 큰 count를 max로 한다.
    // max 값이 정해질 때, 해당 index도 저장해놓기.
    // 위에 저장된 index로 str[index]해서 리턴
  }mostFrequentCharacter('apples not oranges')
  