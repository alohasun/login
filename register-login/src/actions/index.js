function testRegister(data){
	return new Promise((resolve,reject)=>{
		if(data.passWord === data.cPassWord){
			setTimeout(function(){
				resolve(data);
			},3000);		
		}else{
			setTimeout(function(){
				reject(data);
			},3000);
			
		}
	});
}

export function setMsg(msg) {
	return {
		type: 'setMsg',
		payload: msg
	}
}

export function setIsPending(value){
	return{
		type:'setIsPending',
		payload:value
	}
}

export function inputData(data){
	return (dispatch)=>{
		dispatch(setIsPending(true));
		testRegister(data)
		.then(res=>{
			dispatch(setIsPending(false));
			dispatch(setMsg('succsse!'));
		}).catch(err=>{
			dispatch(setIsPending(false));
			dispatch(setMsg('fail to testRegister!'));
		});
	}
}


