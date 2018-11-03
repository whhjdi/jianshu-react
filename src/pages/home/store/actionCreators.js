import axios from "axios";
import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      const action = changeHomeData(result)
      dispatch(action);
    });
  }
}
export const getMoreList = (page)=>{
  return (dispatch)=>{
    axios.get('/api/homeList.json?page='+page).then(res=>{
      const result = res.data.data
      console.log(result);
      dispatch(addHomeList(result,page+1))
    })
  }
}
export const changeScroll=(show)=>{
  return {
    type:actionTypes.CHANGE_SCROLL_SHOW,
    show
  }
}
const addHomeList=(list,nextPage)=>{
  return {
    type:actionTypes.ADD_HOME_LIST,
    list: fromJS(list),
    nextPage
  }
}
const changeHomeData=(result)=>{
  return {
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
  }
}
