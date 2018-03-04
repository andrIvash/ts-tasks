var Utility;
(function (Utility) {
    function MaxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.MaxBooksAllowed = MaxBooksAllowed;
    function privateFunc() {
        console.log('This is private');
    }
    Utility.privateFunc = privateFunc;
})(Utility || (Utility = {}));
(function (Utility) {
    var Fees;
    (function (Fees) {
        function CalculateLateFee(daysLate) {
            return daysLate * .25;
        }
        Fees.CalculateLateFee = CalculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
})(Utility || (Utility = {}));
var util = Utility.Fees;
/// <reference path="utility-functions.ts" />
var maxBook = Utility.MaxBooksAllowed(16);
var fees = util.CalculateLateFee(20);
Utility.privateFunc();
console.log("Maximum Books: " + maxBook + ", fees: " + fees);
