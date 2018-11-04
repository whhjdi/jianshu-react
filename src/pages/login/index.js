import React, { PureComponent } from "react";
import {LoginWrapper,LoginBox,Input,Button } from "./style";
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
import {Redirect} from 'react-router-dom'
class Login extends PureComponent {
  render() {
    const {loginValue,login} = this.props
    if(!loginValue){
      return (
        <LoginWrapper>
          <LoginBox>
          <Input placeholder='手机号或邮箱' 
          ref={(input)=>{this.account=input}}></Input>
          <Input placeholder='密码' type='password'
          ref={(input)=>{this.password=input}}></Input>
          <Button onClick={()=>login(this.account,this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to='/'></Redirect>
    }
  }
  componentDidMount(){
    
  }
}
const mapState = (state)=>{
  return {
    loginValue:state.getIn(['login','login'])
  }
}
const mapDispatch=(dispatch)=>({
  login(account,password){
    dispatch(actionCreators.login(account.value,password.value))
  }
})
export default connect(mapState,mapDispatch)(Login)