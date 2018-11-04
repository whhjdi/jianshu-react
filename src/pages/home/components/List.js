import React, { PureComponent } from "react";
import { ListItem, ListInfo,LoadMore } from "../style";
import { connect } from "react-redux";
import * as actionCreators  from "../store/actionCreators";
import {Link} from  'react-router-dom'
class List extends PureComponent {
  render() {
    const { list,page,getMore } = this.props;
    return (
      <div>
        {
          list.map((item,index)=>{
            return (
            <Link key={index} to={'/detail/'+item.get('id')}>
              <ListItem>
                <img className="list-pic" src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p> 
                </ListInfo>
              </ListItem>
            </Link>
            )
          })
        }
        <LoadMore onClick={()=>getMore(page)}>更多热门专题</LoadMore>
      </div>
    );
  }
}
const mapState = state => ({
  list: state.getIn(["home", "articleList"]),
  page:state.getIn(['home','articlePage'])
});
const mapDispatch=(dispatch)=>({
  getMore(page){
    const action= actionCreators.getMoreList(page)
    dispatch(action)
  }
})
export default connect(
  mapState,
  mapDispatch
)(List);
