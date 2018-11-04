import axios from "axios";
import * as actionTypes from './actionTypes'
// import {fromJS} from 'immutable'

export const getDetailList=(id)=>{
  return (dispatch)=>{
    axios.get('/api/detailList.json?id='+id).then(res=>{
      const result = res.data.data
      dispatch(changeDetail(result.title,result.content))
    })
  }
}
const changeDetail = (title,content)=>{
  console.log(content);
  
  return {
    type:actionTypes.CHANGE_DETAIL,
    title,
    content
  }
}