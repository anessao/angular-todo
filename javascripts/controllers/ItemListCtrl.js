app.controller("ItemListCtrl", function($rootScope, $scope, ItemFactory) {
	console.log($rootScope);
	$scope.items = [];

	let getItems = () => {
	  ItemFactory.getItemList($rootScope.user.uid).then((itemz) => {

	    $scope.items = itemz;
	  }).catch((error) => {
	    console.log("get error", error);
	  });
	};

	getItems();

  $scope.deleteItem = (id) => {
  	ItemFactory.deletez(id).then(() => {
  		console.log("delete working?");
  		getItems();
  	}).catch((error) => {
  		console.log("delete Item error", error);
  	});
  };

  $scope.inputChange = (item) => {
  	ItemFactory.editItem(item).then(() => {
  	}).catch((error) => {
  		console.log("inputChange error", error);
  	});
  };

});