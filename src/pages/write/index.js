import React, { PureComponent } from "react";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Write extends PureComponent {
  render() {
    const {loginValue} = this.props
    if(loginValue){
      return (
        <div>hello</div>
      )
    }else{
      return <Redirect to='/login'></Redirect>
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
export default connect(mapState,null)(Write)