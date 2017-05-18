app.controller("ItemNewCtrl", function($scope, $location, ItemFactory) {
    
  $scope.addNewItem = () => {
    $scope.newTask.isCompleted = false;
    ItemFactory.postNewItem($scope.newTask).then(() => {
      $scope.newTask = {};
      $location.url("/items/list");
    }).catch((error) => {
        console.log("add error", error);
    });
  };
});