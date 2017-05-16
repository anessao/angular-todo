app.controller("ItemListCtrl", function($http, $q, $scope, FIREBASE_CONFIG) {
	
	$scope.items = [];
  
  let getItemList = () => {
    let itemz = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)
      .then((fbItems) => {
        let itemCollection = fbItems.data;
          Object.keys(itemCollection).forEach((key) => {
            itemCollection[key].id=key;
            itemz.push(itemCollection[key]);
          });
        resolve(itemz);
      })
      .catch((fbError) => {
        reject(fbError);
      });
    });
  };

  let getItems = () => {
    getItemList().then((itemz) => {
      $scope.items = itemz;
    }).catch((error) => {
      console.log("get error", error);
    });
  };

  getItems();
  
});