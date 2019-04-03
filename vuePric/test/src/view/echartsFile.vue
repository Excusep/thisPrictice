<template>
  <div>
    <h2>vue中插入Echarts示例</h2>
    <div id="chart_example">

    </div>
  </div>
</template>

<script>
  const echarts_essos = require('@/assets/json/essos.project.json')
  const echarts = require('echarts')
  echarts.registerTheme(echarts_essos.themeName, echarts_essos.theme)
  // import echarts from 'echarts'
  export default {
    data() {
      return {
        myOption: {}
      }
    },
    mounted() {
      this.chartsFile()
    },
    methods: {
      chartsFile() {
        let this_ = this;
        let myChart = echarts.init(document.getElementById('chart_example'));
        let option = {
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient : 'vertical',
              x : 'left',
              data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          toolbox: {
              show : true,
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {
                      show: true,
                      type: ['pie', 'funnel'],
                      option: {
                          funnel: {
                              x: '25%',
                              width: '50%',
                              funnelAlign: 'center',
                              max: 1548
                          }
                      }
                  },
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          series : [
              {
                  name:'访问来源',
                  type:'pie',
                  radius : ['50%', '70%'],
                  itemStyle : {
                      normal : {
                          label : {
                              show : false
                          },
                          labelLine : {
                              show : false
                          }
                      },
                      emphasis : {
                          label : {
                              show : true,
                              position : 'center',
                              textStyle : {
                                  fontSize : '30',
                                  fontWeight : 'bold'
                              }
                          }
                      }
                  },
                  data:[
                      {value:1000, name:'直接访问'},
                      {value:310, name:'邮件营销'},
                      {value:234, name:'联盟广告'},
                      {value:135, name:'视频广告'},
                      {value:500, name:'搜索引擎'}
                  ]
              }
          ]
        };
        this.myOption = option
        myChart.setOption(this.myOption);

        console.log(this.myOption.legend)
        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize',function() {myChart.resize()});
      }
    },
    watch: {},
    created() {
      console.log(echarts_essos,'2222222222')
    }
  }
</script>

<style scoped>
  h2{
    text-align: center;
    padding: 30px;
    font-size: 18px;
  }
  #chart_example{
    width: 50%;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
  }
</style>
