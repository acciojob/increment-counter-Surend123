//your JS code here. If required.
let count=0;
let counter = document.getElementById("counter");
let incrementBtn = document.getElementById("incrementBtn");
incrementBtn.addEventListener('click',function(){
	alert(`${count}`);
	count++;
	counter.innerText = count;
});

