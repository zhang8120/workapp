angular.module("sevices",[]).factory("indexDate",function($http){
    return $http({url:"js/1.txt"})
})
