import {
  fromJS
} from 'immutable';
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  title:'我今年22岁，我现在慌的一批',
  content: '<p>我，96年老阿姨，今年22岁，一个没房、没车、没存款、没对象、没梦想的"五无"人员。</p><p>小时候读书就处于不上也不下的中等水平。连性格也一直是温温吞吞，不急不慢。既没有率性潇洒也没有唯唯诺诺，仿佛连我的人生也一如这寡淡的白开水般无滋无味。</p><p>19岁在学校签了份工作，和万千刚毕业的学子一样，踏上了迷茫且独孤的旅途。浑浑噩噩、跌跌撞撞到现在，工作三年，从职场小白到职场老白。</p><p>我收获的好像只有脱不完的发和一颗漂泊不定的心。</p><p>22岁我除了焦虑什么都没有，我不安于此，但却从未下定决心改变。</p><p>总是间歇性踌躇满志，持续性混吃等死，再时不时来场自我感动。</p><p>小的时候无比期待长大，长大了就可以主宰自己的人生，决定自己的方向。可偏偏长大了，选择权到了自己手上，却又不知该做什么。</p><p>一心向往大城市的繁华美好，却又贪恋故乡的温暖安定。</p><p>随着年龄的递增，现在更是疲于社交，害怕人群。让我去外面，我宁愿一个人在家。很多聚会不想参与，但又不得不参加，如此循环往复，折磨身心。</p><p>朋友小明和我一起参加工作，他一边接受的命运的安排，一边突破自己，试图挣脱桎梏，对待工作依旧尽心尽力，下班后疯狂汲取知识。</p><p>从来看不到他对工作的不满和抱怨，前两天他辞职了，大家很是震惊，一点风声都没有，很多人可能也没有想到他会辞职，因为他太平静、太从容。</p><p>要走的都是悄不作声的，在你一个不经意间默默离开了。叽叽喳喳，到处宣传的反倒没有下定决心。</p><p>我心生艳羡，却依旧“不改初心”。</p><p>为什么？不敢，没有闯荡的实力，没有拿的出手的特长，没有安身立命的技能。</p><p>因为一旦离开了自己的舒适区便会无所适从，一切都要从零开始，我并不确定自己可以。</p><p>何以解忧，唯有暴富，成为了现在年轻人心中的呐喊。</p><p>王尔德说过：“在我年轻的时候，曾经以为金钱是世界上最重要的东西，现在我老了，才知道的确如此”。</p><p>步入社会就知道金钱的重要性，身边的朋友一个个升职加薪，周游世界，自己还为生计发愁。</p><p>朋友圈不是这个挣了几万就是那个当了领导，果然，我还是被同龄人抛弃了。连00后我也不是对手。</p><p>焦虑比以前更甚，依旧浑浑噩噩，该熬的夜一个也都不落。</p><p>二十岁真是一个尴尬的年龄，大人不像大人，孩子不像孩子。</p><p>将要一个人开始品尝人生的酸甜苦辣，经受生活的风吹雨打。</p><p>小徐是我为数不多的好朋友，她日子不紧不慢的向前走着，下班了去跑步健身，制定计划去旅行，没有迷茫焦虑，也没有踯躅犹豫，她似乎一直知道自己想要什么。</p><p>前天，我俩通话，我向她诉说了我的焦虑，她告诉我，你这么忧虑说明你是闲的，才有时间胡思乱想，当你忙的不可开交，连吃饭时间都没有，倒在床上就呼呼大睡你就没有时间想这些事。</p><p>你的这些焦虑就像是你扯着自己的头发，大声呼叫，我要离开地球。没有实际意义，也不能解决现实问题，只是给你徒增烦恼。</p><p>你想瘦就去减肥，想长肌肉就去健美，想考上清华北大就去好好读书，想她就去追。肥肉不会自己飞走，肌肉也不会自己长出来，知识也不会通过网络传到你的脑里，你喜欢的人更不会无缘无故爱上你。</p><p>人不会因为年龄的叠加，就变得成熟；技能不会因为年龄的叠加就跑到你的身上。</p><p>人生就是上帝赐予我们的礼物，从前无法定义你这个人，因为未来的每一刻你都是全新的自己。</p><p>你要把握当下！有时你必须先试着挑战才能在坠下的过程中羽翼渐丰。你停在原地干什么？你想那么多干什么？</p><p>把时间花在幻想而并非现实，等同于坐以待毙。</p><p>以上。（一些碎碎念）</p>'
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title:action.title,
        content:action.content
      })
    default:
      return state
  }
}