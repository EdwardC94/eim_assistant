(function (){
    angular.module('EIMDirectives', [])
    .directive('neededField', function() {
        return {
            scope : {
                'fieldName' : '=',
                'fieldIcon' : '=',
                'fieldType' : '',
            }
        }
    })
})();
/*
<div ng-show="isNeeded('pN')" class="input-group">
                        <span class="input-group-addon glyphicon glyphicon-book"></span>
                        <input type="text" class="form-control" data-ng-model="data.pol.pN" placeholder="Policy">
                    </div>
*/
