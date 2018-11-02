import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div `
  height:58px;
  border-bottom:1px solid #f0f0f0;
  position:relative;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position:absolute;
  top:0;
  left:0;
  display:block;
  height:56px;
  width:100px;
  background:url(${logoPic});
  background-size:contain;
`;
export const Nav = styled.div `
  box-sizing:border-box;
  width:960px;
  padding-right:70px;
  margin:0 auto;
  height:100%;
`;
export const NavItem = styled.div `
  line-height:58px;
  padding: 0 20px;
  font-size:16px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active:{
    color:#ea6f5a;
  }
`;
export const SearchWrapper = styled.div `
  position:relative;
  float:left;
  &>.iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    line-height:30px;
    width:30px;
    height:30px;
    border-radius:15px;
    text-align:center;
    color:#666;
    &.focused{
      background:#333;
      color:#fff;
      opacity:0.5;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing:border-box;
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  margin-top:9px;
  outline:none;
  color:#777;
  &.slide-enter{
    transition: all 300ms ease-in;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit{
    transition: all 300ms ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
  &.focused{
    width:240px;
  }
  &::placeholder{
    color:#999;
  }
`;
export const SearchInfo = styled.div `
  position:absolute;
  box-sizing:border-box;
  left:0;
  top:58px;
  width:250px;
  padding: 20px 20px 10px;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background:#fff;
`;
export const SearchInfoTitle = styled.div `
  margin-bottom:15px;
  font-size:14px;
  line-height:20px;
  color:#969696;
  .spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    transition: all 200ms ease-in;
    transform-origin:center center;
  }
`;
export const SearchInfoSwitch = styled.span`
  font-size:13px;
  float:right;
  cursor:pointer;
`;
export const SearchInfoList= styled.div`
  overflow:hidden;
`;
export const SearchInfoItem= styled.a`
  font-size:12px;
  padding:0 5px;
  line-height:20px;
  border:1px solid #ddd;
  color:#787878;
  border-radius:3px;
  display:block;
  float:left;
  margin-right:10px;
  margin-bottom:10px;
`;
export const Addition = styled.div `
  position:absolute;
  right:0;
  top:0;
  height:56px;
`;
export const Button = styled.button `
  float:right;
  line-height:38px;
  border-radius:19px;
  margin-top:9px;
  margin-right:20px;
  border:1px solid #ec6149;
  padding:0 20px;
  font-size:14px;
  outline:none;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background-color:#ec6149;
  }
`;