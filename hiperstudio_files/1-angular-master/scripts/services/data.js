'use strict';
angular.module('todoListApp')
.service('dataService', function($http){
	//store services methods

	//attach a method to service named dataService
	this.helloConsole = function(){
		console.log('This is the helloConsole service!');
	};

	this.getTodos = function(callback, todo){
			$http.get('mock/todos.json')
		.then(callback)
	};
	this.deleteTodo = function(todo){
		alert("The " + todo.name + " todo has been deleted!");
		//other logic
	};
	this.saveTodos = function(todos){
		alert(todos.length + " todo(s) have been saved!");
		//other logic
	};
});