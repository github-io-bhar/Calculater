function add() { 
var result = Number(document.getElementById("firstno").value) + Number(document.getElementById("secondno").value); window.alert(result);
document.getElementById("firstno").value = null;
document.getElementById("secondno").value = null;
}
function subtract() { 
var result = Number(document.getElementById("firstno").value) - Number(document.getElementById("secondno").value); window.alert(result); 
document.getElementById("firstno").value = null;
document.getElementById("secondno").value = null;
}
