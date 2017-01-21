(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['user','ApiPath'];
function MyinfoController(user, ApiPath) {
  var reg = this;
  reg.basePath = ApiPath;
  reg.user = user;
}


})();
