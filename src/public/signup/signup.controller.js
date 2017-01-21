(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var reg = this;
  reg.errorMenuNumber = false;
  reg.saveSuccess = false;

  reg.submit = function () {
    
    var promise = MenuService.checkFavoriteMenu(reg.user.short_name);
    promise.then(function (response) {
        reg.saveSuccess = MenuService.saveUser(reg.user);
        reg.errorMenuNumber = false;
    })
    .catch(function (error) {
      reg.errorMenuNumber = true;
    })
    
  };
}


})();
