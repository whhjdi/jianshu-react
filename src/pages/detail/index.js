import React, { PureComponent } from "react";
import { DetailWrapper,DetailHeader,Content } from "./style";
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
class Detail extends PureComponent {
  
  render() {
    return <DetailWrapper>
      <DetailHeader>{this.props.title}</DetailHeader>
      <Content dangerouslySetInnerHTML={{__html:this.props.content}}></Content>
    </DetailWrapper>;
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id)
  }
}
const mapState = (state)=>{
  console.log(state.getIn(["detail",'title']));
  return {
    title: state.getIn(["detail",'title']),
    content:state.getIn(["detail",'content'])
  }
}
const mapDispatch=(dispatch)=>({
  getDetail(id){
    const action= actionCreators.getDetailList(id)
    dispatch(action)
  }
})
export default connect(mapState,mapDispatch)(Detail)