import {
  fromJS
} from 'immutable';

const defaultState = fromJS({
  topicList: [{
      id: 1,
      title: '摄影',
      imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 2,
      title: '故事',
      imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 3,
      title: '简书电影',
      imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }
  ],
  articleList: [
    {
      imgUrl: '//upload-images.jianshu.io/upload_images/12631447-2126ca1873252689.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120',
      id: 1,
      title: '当面试官问“你有什么要问我的吗”时，应该说什么？',
      desc: '相信大家面试时或许都经历过这么一个过程：不管是500强公司还是创业公司，是国企还是外企，面试到最后，面试官往往会问：“你还有什么问题吗？” 这时...'
    },
    {
      imgUrl: '//upload-images.jianshu.io/upload_images/12591548-8873b073d2c188a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      id: 2,
      title: '枕上书续',
      desc: '次日的次日，凤九费力的睁开眼，动了一动才瞧见自己正枕在东华的臂弯里。‘醒了?’‘嗯’凤九揽住东华，把狐狸头埋在东华肩上，突然抖了一抖‘滚滚，完了...'
    },
    {
      imgUrl: '//upload-images.jianshu.io/upload_images/12631447-2126ca1873252689.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120',
      id: 3,
      title: '当面试官问“你有什么要问我的吗”时，应该说什么？',
      desc: '相信大家面试时或许都经历过这么一个过程：不管是500强公司还是创业公司，是国企还是外企，面试到最后，面试官往往会问：“你还有什么问题吗？” 这时...'
    },
    {
      imgUrl: '//upload-images.jianshu.io/upload_images/12591548-8873b073d2c188a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      id: 4,
      title: '枕上书续',
      desc: '次日的次日，凤九费力的睁开眼，动了一动才瞧见自己正枕在东华的臂弯里。‘醒了?’‘嗯’凤九揽住东华，把狐狸头埋在东华肩上，突然抖了一抖‘滚滚，完了...'
    },
    {
      imgUrl: '//upload-images.jianshu.io/upload_images/12631447-2126ca1873252689.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120',
      id: 5,
      title: '当面试官问“你有什么要问我的吗”时，应该说什么？',
      desc: '相信大家面试时或许都经历过这么一个过程：不管是500强公司还是创业公司，是国企还是外企，面试到最后，面试官往往会问：“你还有什么问题吗？” 这时...'
    },
    {
      imgUrl: '//upload-images.jianshu.io/upload_images/12591548-8873b073d2c188a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
      id: 6,
      title: '枕上书续',
      desc: '次日的次日，凤九费力的睁开眼，动了一动才瞧见自己正枕在东华的臂弯里。‘醒了?’‘嗯’凤九揽住东华，把狐狸头埋在东华肩上，突然抖了一抖‘滚滚，完了...'
    },
  ]
})
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}