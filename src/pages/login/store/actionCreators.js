import axios from 'axios'
import * as actionTypes from './actionTypes';
export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      console.log(res);
      const result = res.data.data
      if(result){
        dispatch(changeLogin())
      }else{
        alert('登录失败')
      }
    })
  }
}
export const logout=()=>{
  return {
    type:actionTypes.CHANGE_LOGOUT  ,
    value:false
  }
}
const changeLogin=()=>{
  return {
    type:actionTypes.CHANGE_LOGIN,
    value:true
  }
}