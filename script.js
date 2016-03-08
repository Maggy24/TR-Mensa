
// index.html
function Calculator() {
    return {
    "add" : function (x,y) {return x + y;},
    "sub" : function (x,y) {return x - y;},
    "mul" : function (x,y) {return x * y;}    
    }
}
angular.module("calculatorModule",[])
    .service("calculatorService",function(){
      this.calc = Calculator();
    })
    .controller('calculatorCtrl',["calculatorService",function(calcService){

        this.name = "Ram";
        console.log("scope ",this);
        this.divs = function (x,y) {return x/y;}
        console.log("Addition : ",calcService.calc.add(10,20));
        console.log("Subtraction : ",calcService.calc.sub(10,20));
        console.log("Multiplication : ",calcService.calc.mul(10,20));
}]);
    