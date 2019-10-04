(function() {
    'use strict';

    angular
        .module('lunchCheck', [])
        .controller('lunchController', lunchController);

    lunchController.$inject = ['$scope'];
    function lunchController($scope) {
        $scope.message = '';
        $scope.lunchItems = '';
        $scope.placeholder =
            'list comma separated dishes you usually have for lunch';

        $scope.btnCheckClick = function() {
            var lunchArray = $scope.lunchItems
                .split(',')
                .filter(function(lunchItem) {
                    return lunchItem != null && lunchItem.trim() != '';
                })
                .map(i => i.trim());

            if (lunchArray.length == 0) {
                $scope.message = 'Please enter data first';
            } else if (lunchArray.length <= 3) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }

            console.log('lunchItems: ' + $scope.lunchItems);
            console.log(lunchArray);
            //console.log(tArray);

            //TODO:
            //- input ophalen
            //  - trim() moet iets opleveren, anders niet
            //- in een array zetten
            //- (length == 0):
            //  - message: "Please enter data first"
            //- else (length <= 3):
            //  - message: "Enjoy!"
            //- else
            //  - message: "Too much!"
        };
    }
})();
