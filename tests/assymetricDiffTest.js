function arraysAsymmetricDiff (a1, a2) {
    var result = [];
    for (var i = 0; i < a1.length; i++) {
        if (a2.indexOf(a1[i]) < 0) {
            result.push(a1[i]);
        }
    }
    return result;
}

var existingRoles = ['Everyone'];
var requestRoles = ['Everyone', 'd7c0feb8-e1ac-4fee-a399-7bc0bc2d8914', 'adcfe281-f766-4ca8-b2c5-07fbb259b9a2'];

var toInsert = arraysAsymmetricDiff(requestRoles, existingRoles);
var toDelete = arraysAsymmetricDiff(existingRoles, requestRoles);

console.log("To insert total: " + toInsert.length + "\tElements: " + toInsert.toString());
console.log("To delete total: " + toDelete.length + "\tElements: " + toDelete.toString());
