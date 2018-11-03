import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight,BackTop } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import * as actionCreators from './store/actionCreators'
import { connect } from "react-redux";

class Home extends PureComponent {
  handleScrollTop(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img
              className="banner-img"
              src="https://upload.jianshu.io/admin_banners/web_images/4546/dd55f322074ccec0be40c927e0705ef137f848b2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt=""
            />
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
          {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:''}
        </HomeWrapper>
      </div>
    );
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollShow)
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents()
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollShow)
  }
}
const mapState=(state)=>({
  showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = dispatch => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeScrollShow(){
    if(document.documentElement.scrollTop>400){
      dispatch(actionCreators.changeScroll(true))
    }else{
      dispatch(actionCreators.changeScroll(false))
    }
  }
});
export default connect(
  mapState,
  mapDispatch
)(Home);
