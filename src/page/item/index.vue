<!-- item组件 -->
<template>  
  <div>
    <itemcontainer father-component="item"></itemcontainer>
  </div>
  
</template>

<script>
import itemcontainer from '../../components/itemcontainer'
export default {
  data () {
    return {
    };
  },
  components:{
      itemcontainer
  }

}

</script>