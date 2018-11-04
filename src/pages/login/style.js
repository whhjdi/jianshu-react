import styled from 'styled-components'

export const LoginWrapper = styled.div `
  background: #F1F1F1;
  position:absolute;
  top:56px;
  bottom:0;
  left:0;
  right:0;
  overflow:hidden;
`
export const LoginBox = styled.div `
  background:#FFFFFF;
  width:400px;
  height:496px;
  margin: 80px auto;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  box-sizing:border-box;
  padding:50px;
`
export const Input = styled.input `
  box-sizing:border-box;
  display:block;
  line-height:50px;
  height:50px;
  width:300px;
  margin: 20px auto;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  background:#F8F8F8;
  color:#777;
  &:first-child{
    margin-bottom:-1px;
  }
  &:nth-child(2){
    margin-top:0px;
  }
`
export const Button = styled.div `
  box-sizing:border-box;
  margin:0 auto;
  margin-top: 20px;
  width: 300px;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
  outline: none;
  text-align:center;
`