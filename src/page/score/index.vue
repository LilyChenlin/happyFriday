<!-- 答完题提交的分数页面 -->
<template>
  <div>
      <div class="your_scores_container">
          <header class="your_scores">{{score}}分!</header>
          <div class="result_tips">{{scoreTips}}</div>
      </div>
      <div class="share_button" @click="showCover"></div>
      <div class="share_code">
          <header class="share_header">关注葡萄之家，获取答案</header>
          <img src="../../images/4-4.png" height="212" width="212" class="code_img">
      </div>
      <div class="share_cover" v-show="showHide" @click="showCover">
          <img src="../../images/5-2.png" class="share_img"/>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data () {
    return {
        showHide:false,
        score:0,
        scoreTips:'',
        rightAnswer:[4,2,2,4]
    };
  },
  computed: mapState(['answerid','scoreTipsArr']),
   created(){
      this.computeScore();
      this.getScoreTips();
  },
  methods:{
      showCover(){
        //   alert("点击成功~");
          this.showHide = !this.showHide;
      },
    //   计算分数
      computeScore(){
          this.answerid.forEach((item,index) => {
            //     console.log(this.score);
            //   console.log("item:" + item + ",right:" +this.rightAnswer[index] )
              if(item == this.rightAnswer[index]){
                  this.score += 25;
              }
            
          });
      },
      //根据分数给提示
      getScoreTips(){
          if(this.score == 0){
              this.scoreTips = this.scoreTipsArr[0];
          }else{
              let index = Math.ceil(this.score/25);
              this.scoreTips = this.scoreTipsArr[index - 1];
          }
          
      }
  }

}

</script>
<style lang="less">
    body{
        background: url(../../images/4-1.jpg);
        padding: 1.2rem;
    }
    .your_scores_container{
        height: 9.1rem;
        width: 9.7rem;
        background: url(../../images/4-2.png) no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
        position:relative;
         .your_scores{
            position:absolute;
            width: 100%;
            // text-indent:3.9rem;//规定首行缩进
            text-align: center;
            top: 4.7rem;
            font-size: 1.4rem;
            font-weight: 900;
            -webkit-text-stroke: 0.05rem #412318;
            font-family: 'Microsoft YaHei';
            color:#a51d31
        }   
        .result_tips{
            position: absolute;
            top: 7rem;
            left: 0.6rem;
            width: 9rem;
            color:#3e2415;
            font-size: 0.65rem;
            text-align:center;
        }
    }
    .share_button{
        width: 6.025rem;
        height: 2.4rem;
        margin: 0.8rem auto 0;
        background: url(../../images/4-3.png) no-repeat 0.4rem 0;
        background-size: 5.825rem 100%;
    }
    .share_code{
        width: 5.3rem;
        margin: 1.5rem auto 0;
        .share_header{
            color: #664718;
            font-size: 0.475rem;
            font-family: 'Microsoft YaHei';
            width: 7rem;
            font-weight: 500;
        }
        .code_img{
            height: 5.3rem;
            width: 5.3rem;
            margin-top: 0.5rem;
        }
    }
    .share_cover{
        position: fixed;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        background: url(../../images/5-1.png) no-repeat;
        background-size: 100% 100%;
        opacity: 0.92;
    }
    .share_img{
        height: 10.975rem;
        width: 11.95rem;
        position: fixed;
        top: 0.5rem;
        left: 50%;
        margin-left: -5.975rem;
    }
   
</style>
