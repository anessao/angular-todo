app.controller("ItemNewCtrl", function($rootScope, $scope, $location, ItemFactory) {
    
  $scope.addNewItem = () => {
    $scope.newTask.isCompleted = false;
    $scope.newTask.uid = $rootScope.user.uid;
    ItemFactory.postNewItem($scope.newTask).then(() => {
      $scope.newTask = {};
      $location.url("/items/list");
    }).catch((error) => {
        console.log("add error", error);
    });
  };
});