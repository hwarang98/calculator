// + 버튼 누르면 목록 추가
// 삭제버튼 누르면 삭제

const todoInput = document.getElementById('todoInput'); // 입력
const addButton = document.getElementById('addButton'); //추가버튼
const todoList = document.getElementById('todoList'); //목록






addButton.addEventListener('click', () => {
    
    var add = document.createElement('li');
    var remove = document.createElement('i');
    add.innerHTML = todoInput.value+'<i class="fas fa-trash-alt"></i>';
    todoList.appendChild(add);
    
    
    add.addEventListener('click',()=>{
        todoList.removeChild(add);
    })
})






