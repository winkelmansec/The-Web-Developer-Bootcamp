
var todos = ["Buy New Turtle"];
var input = prompt("what would you do?");

var devin = ["human" , "accountant"];

while(input !== "quit"){
	//handle input
	if(input === "list") {
	console.log(todos);
} else if(input === "new") {
	//ask for new todo
	var newTodo = prompt("Enter new todo")
	//add to todos array
	todos.push(newTodo); 
}

//askagain for new input
input = prompt("what would you like to do?");

}
console.log("OK, YOU QUIT THE APP");

t