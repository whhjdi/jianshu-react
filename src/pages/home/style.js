import styled from 'styled-components'

export const HomeWrapper = styled.div `
  width:960px;
  margin:0 auto;
  overflow:hidden;
  padding-top:30px;
  `
export const HomeLeft = styled.div `
  width:625px;
  margin-left:15px;
  float:left;
  .banner-img{
    width:625px;
    height:270px;
  }
`
export const HomeRight = styled.div `
  width:200px;
  float:right;
`
export const TopicWrapper = styled.div `
  padding: 20px 0 10px 0;
  overflow:hidden;
  margin-left:-18px;
`
export const TopicItem = styled.div `
  margin-left:18px;
  float:left;
  height:32px;
  line-height:32px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  background:#f7f7f7;
  padding-right:10px;
  margin-bottom:18px;
  .topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
  }
`