angular.module("ctr",["sevices"])
    .controller("index",["$scope","$http","indexDate",function($scope,$http,indexDate){
            indexDate.then(function(data){
                $scope.data=data;
            })
    }])
    .controller("list",["$scope","$http","$routeParmas",function($scope,$http,$routeParmas){
            $scope.id=$routeParmas.id

    }])
    .controller("show",["$scope","$http","$routeParmas",function($scope,$http,$routeParmas){
    $scope.id=$routeParmas.id}])