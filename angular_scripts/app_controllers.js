(function (){
    function Policy() {
        this.pN = "";
        this.duplicatePN = "";
        this.doP = "";
        this.doC = "";
        this.depD = "";
        this.retD = "";
        this.amountCov = "";
        this.pH = {"name" : "", "email" : "", "phone" : "", "address" : ""};
        this.payment = {"amount" : "", "brand" : "", "l4d" : ""};
    };
    function Reply(template, closing, empathy_statement) {
        this.template = template;
        this.closing = closing;
        this.empathy_statement = empathy_statement;
    };

    angular.module('EIMCtrls', ['ngRoute']).
    controller("MainCtrl", ['$scope', 'data', function($scope, data) {
        $scope.select = data;
        $scope.data = {"pol" : new Policy(), "message" : new Reply($scope.select.Template[0], $scope.select.Closing[0], "")};
        $scope.copy = function () {
            var referenceNode = document.querySelector("#email-response");
            var range = document.createRange();  
            range.selectNode(referenceNode);
            window.getSelection().removeAllRanges()
            window.getSelection().addRange(range);
            document.execCommand("copy");				
            window.getSelection().removeAllRanges();
        };
        $scope.clear = function() {
            $scope.data = {"pol" : new Policy(), "message" : new Reply($scope.select.Template[0], $scope.select.Closing[0], "")};
        };
        $scope.isNeeded = function(fieldName) {
            var needs  = $scope.data.message.template.needs;
            return needs.findIndex(function(prop) {return prop === fieldName}) > -1;
        };
        /* Small modification on sessions logic*/
        $scope.session = {"valid" : false, "errorMessage" : "", "user" : ""};
        $scope.isValid = function(keyPressed) {
            if(keyPressed === 13) {
                if($scope.session.user.length > 0) {
                    $scope.session.valid = true; 
                }else{
                    $scope.session.errorMessage = "Name field cannot be empty";
                    $scope.session.user = "";
                }
            }
        }
        /*ENDS*/
        /*Logic for sessions BEGINS
        $scope.users = [{ "name" : "Edward A.", "code" : "46632"}, { "name" : "Anuar S.", "code" : "46470" }];
        $scope.session = {"valid" : false, code : "", "errorMessage" : "", "user" : {}};
        $scope.isValid = function(keyPressed) {
            if(keyPressed === 13) {
                var i = $scope.users.findIndex(function (user) {return user.code === $scope.session.code })
                if(i > -1) {
                    $scope.session.valid = true;
                    $scope.session.user = $scope.users[i]; 

                }else{
                    $scope.session.errorMessage = "Invalid code. Please try again."
                    $scope.session.code = "";
                }
            }
        }
        Logic for sessions ENDS*/
        $scope.toTitleCase = function (str) {
            if(str !== '') {
                return str === 'MASTERCARD' ? 'MasterCard' : str.toLowerCase().split(' ').map(function (i) {
                    return i[0].toUpperCase() + i.substring(1);
                }).join(' ');
            }
        }
    }])
})();
