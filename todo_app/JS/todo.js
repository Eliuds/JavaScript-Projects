/* this function gets the task from input*/
function get_todos() {
    /*This creates an array of tasks that are inputed*/
    var todos = new Array;
    /*This pulls the task that was savedin the web browser memory*/
    var todos_str= localStorage.getItem('todo');
    /* If the input is not null then JSON.parse will communicate
    with the web browser to make the task JS object.*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/*This function adds the inputed task to the get_todos function array*/
function add() {
    /*This takes the inputed task and creates a var of it*/
    var task = document.getElementById('task').ariaValueMax;

    var todos =  get_todos();
    /*This adds a new task the end of the array*/
    todos.push(task);
    /*this converts the task input to a JSON string*/
    localStorage.setItem('todo' , JSON.stringify(todos));
    document.getElementById("task").value = "";
    SharedWorker();

    return false;
}

/*this function keeps the tasks permanetly displayed on the screen*/
function show() {
    /*this sets the task that wwas retrieved as a var*/
    var todos = get_todos();

    /*This sets up each task as an unordered list*/
    var html = '<ul>';
    /*This displays a task to the list in the order that it is inputed*/
    for (var i = 0; i<todos.length; i++) {
        /*this also displayes the task as a list and creates the button with the "x"*/
        html += '<li>' + todos[i] + '<button class="remove" id=""' + i + '">x</button></li>';
    };
    html += '</il>';
    /*This displays the task as a list */
    document.getElementById('todos').innerHTML = html;
    /*This tells the browser how to display the todo
    array after an item has been removed*/
    var buttons = documnet.getElementByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
/*This displays the inputed task when the 'ADD Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*this will keep the inputs displayed permanatly on the screen*/
show();

/*This creates the functionality of removing a todo item from the array*/
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*this looks in the show() how to display a removed item on the screen*/
    show();

    return false


}