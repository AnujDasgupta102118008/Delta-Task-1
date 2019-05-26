
let count=0;
function namePrint() {
	console.log("Function called");
	let name=document.getElementById("Name").value;
	let age=document.getElementById("Age").value
	let gender=document.getElementById("Gender").value;
	document.getElementById("userdetails").innerHTML="Heyy "+name;	
	localStorage.setItem("name",JSON.stringify(name));
}

function calPrint() { 
	
	 cal=parseInt(document.getElementById("calorie").value);
document.getElementById("rcal").innerHTML="Set Calories : "+cal;
	localStorage.setItem("cal",JSON.stringify(cal));
	}

let kcal =0; let ctr=0;
var id;
var icr=localStorage.getItem("ctr");
var incr=JSON.parse(icr)+1;
ctr+=incr
function add() {	
	id="food"+ctr;
var list=document.getElementById("foodlist");
var entry = document.createElement('li');
let food=document.getElementById("food").value;
let cal=document.getElementById("cal").value;
let carbs=document.getElementById("carbs").value;
let fats=document.getElementById("fats").value;
let pro=document.getElementById("pro").value;
let s=food+"          "+cal+"          "+carbs+"          "+fats+"          "+pro;
localStorage.setItem(id,s);
kcal+=((parseInt(cal))+(parseInt(carbs)*4)+(9*parseInt(fats))+(4*parseInt(pro)));
var delbutton = document.createElement("button");
delbutton.innerHTML =
  '<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik05IDNoNnYtMS43NWMwLS4wNjYtLjAyNi0uMTMtLjA3My0uMTc3LS4wNDctLjA0Ny0uMTExLS4wNzMtLjE3Ny0uMDczaC01LjVjLS4wNjYgMC0uMTMuMDI2LS4xNzcuMDczLS4wNDcuMDQ3LS4wNzMuMTExLS4wNzMuMTc3djEuNzV6bTExIDFoLTE2djE4YzAgLjU1Mi40NDggMSAxIDFoMTRjLjU1MiAwIDEtLjQ0OCAxLTF2LTE4em0tMTAgMy41YzAtLjI3Ni0uMjI0LS41LS41LS41cy0uNS4yMjQtLjUuNXYxMmMwIC4yNzYuMjI0LjUuNS41cy41LS4yMjQuNS0uNXYtMTJ6bTUgMGMwLS4yNzYtLjIyNC0uNS0uNS0uNXMtLjUuMjI0LS41LjV2MTJjMCAuMjc2LjIyNC41LjUuNXMuNS0uMjI0LjUtLjV2LTEyem04LTQuNXYxaC0ydjE4YzAgMS4xMDUtLjg5NSAyLTIgMmgtMTRjLTEuMTA1IDAtMi0uODk1LTItMnYtMThoLTJ2LTFoN3YtMmMwLS41NTIuNDQ4LTEgMS0xaDZjLjU1MiAwIDEgLjQ0OCAxIDF2Mmg3eiIvPjwvc3ZnPg==">';
delbutton.className = "delbutton";
delbutton.onclick = function() {
  console.log("delbutton pressed");
  this.parentElement.parentElement.removeChild(delbutton.parentElement);
  kcal-=((parseInt(cal))+(parseInt(carbs)*4)+(9*parseInt(fats))+(4*parseInt(pro)));
  document.getElementById("total").innerHTML=kcal;
  localStorage.removeItem(id);
  localStorage.setItem("kc",JSON.stringify(kcal));
};
localStorage.setItem("kc",JSON.stringify(kcal));
entry.appendChild(document.createTextNode(s));
entry.appendChild(delbutton);
list.appendChild(entry);
document.getElementById("total").innerHTML=kcal;
localStorage.setItem("ctr",JSON.stringify(ctr));
ctr++;
}
window.onload=init;
function init () {
	if(confirm("Do you want to start a new session ?"))
		{
		localStorage.clear();
		return ;
		}
	else
		{
	var nr=JSON.parse(localStorage.getItem("name"));
	if(nr)
    document.getElementById("userdetails").innerHTML="Heyy "+nr;	
    var cr=JSON.parse(localStorage.getItem("cal"));
    if(cr)
    document.getElementById("rcal").innerHTML="Set calories : "+cr;
	var list=document.getElementById("foodlist");
	 var calmem=localStorage.getItem("kc");
     kcal=JSON.parse(calmem);
	        for (var i = 0; i <=localStorage.length; i++) {
	            var key = localStorage.key(i);
	            if (key.substring(0, 4) == "food") 
	            { var entry = document.createElement('li');
	                var item = localStorage.getItem(key);
	                entry.appendChild(document.createTextNode(item));
	              document.getElementById("total").innerHTML=kcal;
	                list.appendChild(entry);     
	           }   
	        }
		}    
}
function suggestion()
{
	var h=document.getElementById("height").value;
	var w=document.getElementById("weight").value;
	var a=document.getElementById("age").value;
	var cg= (864-(9.72 * a) + 1.27*(14.2* w + 503*h));
	document.getElementById("sugg").innerHTML+=cg;
	
	
	
	
	
	
	
	}
function final() {
	if(parseInt(kcal)>parseInt(cal))
		{ alert("You exceeded your daily requirements :((");
		document.getElementById("Result").innerHTML="You exceeded your daily requirements :((";
		}
	else if (parseInt(kcal)==parseInt(cal))
	{ alert("Your intake today is exactly equal to your requirements.\n CONGRATS !!!!!");
	document.getElementById("Result").innerHTML="Your intake today is exactly equal to your requirements.\n CONGRATS !!!!!";
	}
	else
		{alert("Your intake is falling short of your requirements :(");
		document.getElementById("Result").innerHTML="Your intake is falling short of your requirements :(";
		}
}
var rc=0;
function conversion(){rc++;
if(rc==1)
	{var rl=document.getElementById("rulelist");
	var rule1=document.createElement('li');
	var rule2=document.createElement('li');
	var rule3=document.createElement('li');
	var s1="1g of carbohydrate is equivalent to 4 calories" ;
		var s2=	"1g of fat is equivalent to 9 calories" ;
		var s3=	"1g of protein is equivalent to 4 calories";
		rule1.appendChild(document.createTextNode(s1));
		rl.appendChild(rule1);
		rule2.appendChild(document.createTextNode(s2));
		rl.appendChild(rule2);
		rule3.appendChild(document.createTextNode(s3));
		rl.appendChild(rule3);
	}
}




