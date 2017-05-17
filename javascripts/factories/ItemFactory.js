app.factory("ItemFactory", function($q, $http, FIREBASE_CONFIG){
  let getSingleItem = (id) => {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/items/${id}.json`)
      .then((resultz) => {
        resultz.data.id = id;
        resolve(resultz);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  let getItemList = () => {
    let itemz = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/items/.json`)
      .then((fbItems) => {
        let itemCollection = fbItems.data;
          if (itemCollection !== null){
            Object.keys(itemCollection).forEach((key) => {
              itemCollection[key].id=key;
              itemz.push(itemCollection[key]);
            });
          }
        resolve(itemz);
      })
      .catch((fbError) => {
        reject(fbError);
      });
    });
  };

  let postNewItem = (newItem) => {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify(newItem))
      .then((results) => {
        resolve(results);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let deletez = (itemId) => {
    return $q((resolve, reject) => {
    $http.delete(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
    .then((results) => {
      resolve(results);
    })
    .catch((error) => {
      reject(error);
    });
    });
  };

  let editItem = (item) => {
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/items/${item.id}.json`, JSON.stringify({
        assignedTo: item.assignedTo,
        isCompleted: item.isCompleted,
        task: item.task
      })).then((results) => {
        resolve(results);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  return {getItemList:getItemList, postNewItem:postNewItem, deletez:deletez, editItem:editItem, getSingleItem:getSingleItem};

});