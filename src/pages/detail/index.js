import React, { Component } from "react";
import { DetailWrapper,DetailHeader,Content } from "./style";
import {connect} from 'react-redux'
class Detail extends Component {
  render() {
    return <DetailWrapper>
      <DetailHeader>{this.props.title}</DetailHeader>
      <Content >{this.props.content}</Content>
    </DetailWrapper>;
  }
}
const mapState = (state)=>{
  return {
    title: state.getIn(["detail",'title']),
    content:state.getIn(["detail",'content'])
  }
}
export default connect(mapState,null)(Detail)