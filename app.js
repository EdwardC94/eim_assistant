(function () {
    var app = angular.module('EIM_Assistant', []);

    app.controller("MainCtrl", ["$scope", function($scope) {        
        function Policy(pN, doP, depD, retD, pH, payment, cancellation, inquiry) {
            this.pN = "";
            this.doP = "";
            this.depD = "";
            this.retD = "";
            this.pH = {"name" : "", "email" : "", "phone" : "", "address" : ""};
            this.payment = {"amount" : "", "brand" : "", "l4d" : ""};
        };
        $scope.nameOfSender = "";
        $scope.empathy_statement = "";
        $scope.select = {
            'Template' : [
                { 'templateID' : 1, 'name' : 'Travel Gral. Info', 'needs' : ["pn", "name", "email"], "url" : "travel-gral-info.html" },
                { 'templateID' : 2, 'name' : 'ETP Gral. Info', 'needs' : ["pn", "name"], "url" : "etp-gral-info.html" },
                { 'templateID' : 3, 'name' : 'ERP Gral. Info', 'needs' : ["pn", "name"], "url" : "erp-gral-info.html" },
                { 'templateID' : 4, 'name' : 'CDW Benefits', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "cdw-benefits.html" },
                { 'templateID' : 5, 'name' : 'Not Covered', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "not-covered.html" },
                { 'templateID' : 6, 'name' : 'Unintended Purchase ETP', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "unintended-purchase-etp.html" },
                { 'templateID' : 7, 'name' : 'Unintended Purchase ERP', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "unintended-purchase-erp.html" },
                { 'templateID' : 8, 'name' : 'Unintended Purchase Travel', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "unintended-purchase-travel.html" },
                { 'templateID' : 9, 'name' : 'Ten-Day SG ETP/ERP', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "ten-day-sg-etp-and-erp.html" },                ,
                { 'templateID' : 10, 'name' : 'Ten-Day SG Travel', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "ten-day-sg-etp-travel.html" },                ,
                { 'templateID' : 11, 'name' : 'Duplicate', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "duplicate.html" },                ,
                { 'templateID' : 12, 'name' : 'CDW Cancelation', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "cdw-cancelation.html" },                ,
                { 'templateID' : 13, 'name' : 'No Action Specified', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "no-action-specified.html" },                ,
                { 'templateID' : 14, 'name' : 'Pre-existing', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "pre-existing.html" },                ,
                { 'templateID' : 15, 'name' : 'Already Canceled', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "already-canceled.html" },                ,
                { 'templateID' : 16, 'name' : 'Confirm Cancelation', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "confirm-cancelation.html" },                ,
                { 'templateID' : 17, 'name' : 'Customer Not Aware Of Duplicate', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "customer-not-aware-of-duplicate.html" },                ,
                { 'templateID' : 18, 'name' : 'Refund Timeframe', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "refund-timeframe.html" },                ,
                { 'templateID' : 19, 'name' : '770 Event', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "seven-seventy-rule-event.html" },                ,
                { 'templateID' : 20, 'name' : '770 Travel', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "seven-seventy-rule-travel.html" },                ,
                { 'templateID' : 21, 'name' : 'Unable To Locate Policy', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "unable-to-locate-policy.html" },                ,
                { 'templateID' : 22, 'name' : 'More Beneficial to Call', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "more-beneficial-to-call.html" },                ,
                { 'templateID' : 23, 'name' : 'Quote', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "quote.html" },                ,
                { 'templateID' : 24, 'name' : 'Change Request', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "change-request.html" },                ,
                { 'templateID' : 25, 'name' : 'Confirm Change of Dates', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "confirm-cod.html" },                ,
                { 'templateID' : 26, 'name' : 'No Change Needed', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "no-change-needed.html" },                ,
                { 'templateID' : 27, 'name' : 'Change Request TAS', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "change-request-tas.html" },                ,
                { 'templateID' : 28, 'name' : 'Add Driver', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "add-driver.html" },                ,
                { 'templateID' : 29, 'name' : 'Agent Services', 'needs' : ["pn", "doP","depD", "retD", "name", "email", "phone", "address", "amount", "brand", "l4d"], "url" : "agent-services.html" }
                ],
            'Closing' : [
                { 'closingID' : 1, 'name' : 'ETP/ERP Customer Service', 'phone' : '(866) 456-3102', 'e-mail' : 'eventservice@allianzassistance.com'},
                { 'closingID' : 2, 'name' : 'ETP/ERP Claims', 'phone' : '(888) 799-2832', 'e-mail' : 'eventclaims@allianzassistance.com'},
                { 'closingID' : 3, 'name' : 'Claims', 'phone' : '(800) 729-6021', 'e-mail' : 'claimsinquiry@allianzassistance.com'},
                { 'closingID' : 4, 'name' : 'Air Lingus', 'phone' : '(888) 817-2168', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 5, 'name' : 'Alaska Air', 'phone' : '(800) 496-6593', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 6, 'name' : 'Gral. Customer Service', 'phone' : '(800) 729-6021', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 7, 'name' : 'American Airlines', 'phone' : '(800) 628-5404', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 8, 'name' : 'Amtrak', 'phone' : '(800) 390-3915', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 9, 'name' : 'Cheap Tickets', 'phone' : '(800) 269-9726', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 10, 'name' : 'Delta', 'phone' : '(800) 419-8016', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 11, 'name' : 'HotWire', 'phone' : '(800) 771-1281', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 12, 'name' : 'Jet Blue', 'phone' : '(800) 284-8300', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 13, 'name' : 'Orbitz', 'phone' : '(877) 593-4989', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 14, 'name' : 'United', 'phone' : '(866) 456-3104', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 15, 'name' : 'US Air', 'phone' : '(800) 496-6904', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 16, 'name' : 'Kayak', 'phone' : '(866) 642-2501', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 17, 'name' : 'Hawaiian Airlines', 'phone' : '(866) 681-6003', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 18, 'name' : 'Car Trawler', 'phone' : '(800) 284-8300', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 19, 'name' : 'Silver Airways', 'phone' : '(866) 680-9832', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 20, 'name' : 'PriceLine', 'phone' : '(888) 769-6105', 'e-mail' : 'customerservice@allianzassistance.com'},
                { 'closingID' : 21, 'name' : 'B2C', 'phone' : '(866) 884-3556', 'e-mail' : 'customerservice@allianzassistance.com'}
            ]
        }
        $scope.template = $scope.select.Template[0];
        $scope.data = [{'pol' : new Policy()}];
        $scope.copy = function () {
    		var urlField = document.querySelector('#email-response');
    		var range = document.createRange();  
    		range.selectNode(urlField);
    		window.getSelection().addRange(range);
    		document.execCommand('copy');				
    		window.getSelection().removeAllRanges();
        };
        $scope.clear = function() {
            $scope.data.pop();
            $scope.data.push({'pol' : new Policy()})
        };
    }])
    app.directive("inputField", function(){
        return {
            info : '='
        }
    })
})();