document.getElementById("apple").ondblclick = function() {
    myFunction()
},
document.getElementById("carrot").ondblclick = function() {
    myFunc1()
},
document.getElementById("pear").ondblclick = function() {
    myFunc2()
};
var state = !1;
function myFunction() {
    state = !0
}
function myFunc2() {
    1 == state && (document.getElementById("ans").innerHTML = reverseString("5O5J0n3/yl.tib//:sptth"))
}
function reverseString(n) {
    return n.split("").reverse().join("")
}
function myFunc1() {
    1 == state && (document.getElementById("ans").innerHTML = reverseString("9GMSO23/yl.tib//:sptth"))
}
