
export default function(state=null, action){
	switch(action.type){
	 	case 'setMsg':
		return action.payload
	}
	return state;
}