<template>
  <div>
    <div class="hot">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="thr"></div>

  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {

    }
  },
}
</script>

<style lang="less">
  *{
    margin:0;
    padding:0;
  }
  .hot{
    width: 1000px;
    background:gray;
    .left{
      width: 100px;
      height: 100px;
      background:yellow;
      float:left;
    }
    .right{
      width: 100px;
      height: 100px;
      background: red;
      float:right;
    }
    &:after{
      content: "11";
      height: 0;
      display:block;
      clear: both;
    }
  }
  .thr{
      width:100px;
      height: 120px;
      background:blue;
    }

</style>
