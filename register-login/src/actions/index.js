function testRegister(data){
	return new Promise((resolve,reject)=>{
		if(data.passWord === data.cPassWord){
			setTimeout(function(){
				resolve(data);
				console.log("success");
			},3000);		
		}else{
			setTimeout(function(){
				reject(data);
				console.log("password is not confirm");
			},3000);
			
		}
	});
}

export function inputData(data){
	const request = testRegister(data);
	
	return {
		type: 'input data',
		payload: request
	}
}


