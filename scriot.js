let search = document.getElementById("search");
let list = document.querySelector(".list");

window.addEventListener('load', loadTodos);

let httpRequest = new XMLHttpRequest();

function loadTodos() {
    httpRequest.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    httpRequest.send();
    httpRequest.onload = function () {
        if(httpRequest.readyState==4 && httpRequest.status==200){
           let todos = httpRequest.responseText;
            todos = JSON.parse(todos);
            display(todos);
        }
        
    };
}

function display(todoArray){
   todoArray.forEach(element => {
       list.innerHTML += "<li>"+element.title+"</li>"; 
   });

}

search.addEventListener("keyup",filterList);
function filterList(){
    var searchText = (search.value).trim();
    var todosList = document.querySelectorAll("li");
    
        for (e of todosList){
                if(e.innerText.startsWith(searchText)){
                    e.style.display="block";
                }
                else{
                    e.style.display="none";
                }
            }

}