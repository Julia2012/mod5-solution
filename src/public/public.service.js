(function () {
'use strict';

angular.module('public')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];

function MenuDataService($http, ApiBasePath) {
  var service = this;

  
  service.saveUserInfo = function (menuItem) {
    console.log (menuItem);
    return $http.get(ApiBasePath + "/menu_items/" + menuItem + ".json")
    .then(function (result){
        return result.data;
    });
  };
  
  
}

})();