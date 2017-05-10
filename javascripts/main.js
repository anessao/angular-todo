var app = angular.module("redneckToDoApp", []); //"name of your app", [parameter allows for plug-ins];

//$scope connects your javascript to your DOM
app.controller("NavCtrl", ($scope) => {
	$scope.cat = "Meow";
	$scope.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Items"}];
});

app.controller("ItemCtrl", ($scope) => {
	$scope.dog = "Woof";
	$scope.showListView = true;

	$scope.newItem = () => {
		$scope.showListView = false;
	};
	$scope.allItems = () => {
		$scope.showListView = true;
	};

});