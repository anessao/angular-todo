app.controller("ItemListCtrl", function($scope, ItemFactory) {
	
	$scope.items = [];

	let getItems = () => {
	  ItemFactory.getItemList().then((itemz) => {
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

});