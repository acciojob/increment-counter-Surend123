//your JS code here. If required.
let count=0;
function countIncrement(){
	alert(`${count}`);
	count++;
	let counter = document.getElementById("counter");
	counter.textContent = `${count}`;
}
