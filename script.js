//your JS code here. If required.
let button = document.getElementById('btn');
let display = document.getElementById('output');
button.addEventListener('click',function() {
	let input = parseInt(document.getElementById('ip').value.trim());

	function promise1(){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{		
				resolve(input);
			},2000)
		});
	}
	promise1()
	.then(data =>{
		display.textContent = `Result: ${data}`;
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				let num1 = data*2; 
				display.textContent = `Result: ${num1}`;
				resolve(num1);
			},2000);
		});
	})
	.then(data =>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				let num2 = data-3;
				display.textContent = `Result: ${num2}`;
				resolve(num2);
			},1000);
		});
	})
	.then(data =>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				let num3 = data/2;
				display.textContent = `Result: ${num3}`;
				resolve(num3);
			},1000);
		});
	})
	.then(data =>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				let num4 = data+10;
				display.textContent =`Final Result: ${num4}`;
				resolve(num4);
			},1000);
		})
		}).catch(()=>{
			console.log("done");
});
});