import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";
import {actionCreators as logoutCreators } from '../../pages/login/store'
class Header extends Component {
  getListArea() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props;
    const jsList = list.toJS();
    const pageList = [];
    if (jsList.length !== 0) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i
                className="iconfont spin"
                ref={icon => {
                  this.spinIcon = icon;
                }}
              >
                &#xe606;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    }
  }
  render() {
    const { focused, handleFocused, handleBlur, list,login,logout } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active"> 首页 </NavItem>
          <NavItem className="left"> 下载APP </NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          {login?<NavItem className="right" onClick={logout}>退出</NavItem>:<Link to="/login">
            <NavItem className="right"> 登录 </NavItem>
          </Link>}
          
          <SearchWrapper>
            <CSSTransition in={focused} timeout={300} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleFocused(list)}
                onBlur={handleBlur}
              />
            </CSSTransition>
            <i className={focused ? "focused iconfont" : "iconfont"}>
              &#xe6e4;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="writting">
              <i className="iconfont">&#xe600;</i>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPage: state.getIn(["header", "totalPage"]),
    login:state.getIn(["login", "login"])
    // focused:state.get('header').get('focused')
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout(){
      dispatch(logoutCreators.logout())
    },
    handleFocused(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        console.log(originAngle);
        originAngle = parseInt(originAngle, 10) + 360;
        spinIcon.style.transform = `rotate(${originAngle}deg)`;
        console.log(spinIcon.style.transform);
      } else {
        originAngle = 360;
        spinIcon.style.transform = `rotate(${originAngle}deg)`;
      }
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
