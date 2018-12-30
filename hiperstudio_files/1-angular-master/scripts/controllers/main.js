'use strict';
angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {
	$scope.addTodo = function(){
		var todo = {name: "This is a new todo."};
		$scope.todos.unshift(todo);
	};

	dataService.getTodos(function(response){
			console.log(response.data);
			$scope.todos = response.data;
		});
	$scope.deleteTodo = function(todo, $index){
		dataService.deleteTodo(todo);
		$scope.todos.splice($index, 1);
	};

	$scope.saveTodos = function(){
		var filteredTodos = $scope.todos.filter(function(todo){
			if(todo.edited){
				return todo;
			};
		})
		dataService.saveTodos(filteredTodos);
	};
})
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
	this.saveTodos = function(todo){
		alert(todos.length + " todos have been saved!");
		//other logic
	};
});

