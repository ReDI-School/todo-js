window.TodoList = {};

window.TodoList.List = function(todos) {
    this.todos = todos || [];

    var addTodo = function(todo) {
        this.todos.push(todo);
    };

    return {
        todos: this.todos,
        addTodo: addTodo
    };
};

window.TodoList.Todo = function(options) {
    var markAsDone = function() {
        this.done = true;
    };

    return {
        markAsDone: markAsDone,
        text: options.text,
        done: !!options.done
    };
};


window.todoList = new TodoList.List();
console.log(todoList);

window.todoList.addTodo(new window.TodoList.Todo({text: 'hello'}));
console.log(todoList);
