(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  
  service.userMenu = [];
  

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  
  service.checkFavoriteMenu = function (short_name) {
    return $http.get(ApiPath + "/menu_items/" + short_name + ".json")
    .then(function (result){
        return result.status;
    });
  };

  service.saveUser = function (user) {
    service.userInfo = user;
    return true;
    
  };

  service.getMyInfo = function () {
    if (angular.isUndefined(service.userInfo)){
        return null;
    }
    if (service.userInfo != []) {
        return $http.get(ApiPath + "/menu_items/" + service.userInfo.short_name + ".json")
        .then(function (response) {
          service.userInfo.userMenu = response.data;
          return service.userInfo;
        })
    }

    };

}

})();
