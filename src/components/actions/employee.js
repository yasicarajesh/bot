import axios from 'axios';

const ADD_TODO = 'ADD_TODO';

export function AC_ADD_EMPLOYEE_PEROSNAL_DATA(data) {
  return (dispatch) => {
     //dispatch(success);
     dispatch({type: ADD_TODO, payload: ""});
     // axios.post('/url', data)
     //  .then((res) =>{
     //      dispatch({type: ADD_TODO, payload: res});
     //  })
     //  .catch((error)=> {
     //      dispatch({type: ADD_TODO, payload: error});
     //  })
  }
}

function success() {
  return 1;
}
