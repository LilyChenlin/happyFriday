<!--  -->
<template>
  <div class="home_container">
      <itemcontainner father-component="home"></itemcontainner>
  </div>
</template>

<script>
import itemcontainner from '../../components/itemcontainer'
export default {
    //导入组件
  name:'home',
  data () {
    return {
    };
  },
  components:{
      itemcontainner
  }


}

</script>