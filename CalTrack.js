/**
 * 
 */
function namePrint() {
	console.log("Function called");
	let name=document.getElementById("Name").value;
	let age=document.getElementById("Age").value
	let gender=document.getElementById("Gender").value;
	document.getElementById("userdetails").innerHTML=name+" "+age+" "+gender;
}

