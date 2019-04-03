<template>
  <div class="type">
    <el-row>
      <el-col :span="5">1</el-col>
      <el-col :span="14">
        <div class="actType">
          <span class="typeName">类型</span>
          <span @click="actSwitch(1,item)" :class="['nameItem',actType1 == item.key ? 'active' : '']" v-for="(item,i) in actType" :key="i">{{item.name}}</span>
        </div>
        <div class="actType">
          <span class="typeName">场景</span>
          <span @click="actSwitch(2,item)" :class="['nameItem',actType2 == item.talId ? 'active' : '']" v-for="(item,i) in actScene" :key="i">{{item.name}}</span>
        </div>
        <div class="actType">
          <span class="typeName">行业</span>
          <span @click="actSwitch(3,item)" :class="['nameItem',actType3 == item.industryTalId ? 'active' : '']" v-for="(item,i) in actIndustry" :key="i">{{item.name}}</span>
        </div>
        <p>{{a}}  {{b}}  {{c}}</p>

        <!-- 遮罩 -->
        <div class="outMask" @click="centerDialogVisible = true">
          <div class="innerImg"></div>
          <img src="https://oss.kdwaimai.com/jkb/1550654229419_675376.png" alt="">
        </div>
        <!-- <p v-if="worldText">世界如此美好，我却如此暴躁，这样不好，这样不好！</p> -->
        <!-- 弹窗 -->
        <el-dialog
          :title="thankDiag[0].title"
          :visible.sync="centerDialogVisible"
          width="30%"
          center
          :show-close="false"
          :close-on-click-modal="false">
          <div class="upImg">
            <img :src="thankDiag[0].imgs" alt="">
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="upThank">Thanks</el-button>
          </span>
        </el-dialog>
      </el-col>
      <el-col :span="5">3</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      a: '',
      b: '',
      c: '',
      actType1: 'all', // 当前选择的活动类型
      actType2: 's1', // 当前选择的活动场景
      actType3: 'c1', // 当前选择的适用行业
      actType: [
        {
          key: 'all',
          name: '全部类型'
        }, {
          key: 'ACT_DIRECT_VOUCHER',
          name: '直接发券'
        }, {
          key: 'ACT_SPECIAL_OFFER',
          name: '特卖'
        }, {
          key: 'TEAMWORK_LUCK_DRAW',
          name: '抽奖型拼团'
        }, {
          key: 'TEAMWORK_ALL_HAVE',
          name: '普通型拼团'
        }, {
          key: 'ACT_SCAVENGING_SURPRISE',
          name: '扫码有惊喜'
        }, {
          key: 'ACT_SCRATCH_CARD',
          name: '刮刮卡'
        }
      ],
      actScene: [
        {
          name: "全部场景",
          talId: 's1'
        },
        {
          name: "场景2",
          talId: 's2'
        },
        {
          name: "场景3",
          talId: 's3'
        },
        {
          name: "场景4",
          talId: 's4'
        }
      ],
      actIndustry: [
        {
          industryTalId: 'c1',
          name: "全部测试"
        },
        {
          industryTalId: 'c2',
          name: "测试品类2"
        },
        {
          industryTalId: 'c3',
          name: "测试品类3"
        },
        {
          industryTalId: 'c4',
          name: "测试品类4"
        }
      ],
      thankDiag: [
        {
          title: 'helloWorld',
          imgs: 'https://oss.kdwaimai.com/jkb/1550732958870_933432.jpeg'
        }
      ]
    }
  },
  methods: {
    actSwitch(index,item) {
      var str = 'actType' + index
      if (index === 1) {
        this[str] = item.key
        this.a = item.name
      }
      if (index === 2) {
        this.b = item.name
        this[str] = item.talId
      } else if (index === 3) {
        this.c = item.name
        this[str] = item.industryTalId
      }
      console.log(this[str])
    },
    getList() {
      dataList.actType = this.actType1,
      dataList.talId = this.actType2,
      dataList.industryTalId = this.actType3
    },
    upThank() {
      this.centerDialogVisible = false
      this.worldText = true
      localStorage.setItem('showDiag', this.centerDialogVisible)
      localStorage.setItem('showDiags', this.worldText)
      this.$router.push({
        path: 'showHi'
      })
    },
  },
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('showDiag')
    next()
  },
  created() {
    this.centerDialogVisible = localStorage.getItem('showDiag')
  },
}
</script>


<style scoped>
  .actType {
    height: 50px;
    border-bottom: 1px solid #000;
    display: flex;
    align-items: center;
  }
  .typeName {
    margin-right: 20px;
  }
  .nameItem {
    padding: 4px 20px 4px 20px;
    /* color: #fff; */
    margin-left: 20px;
  }
  .active {
     background: gray;
     border-radius: 20px;
  }
  .bottom {
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    background: #EBEFF2;
    display: flex;
  }
  .listS {
    width: 200px;
    height: 250px;
    padding: 10px;
    margin: 10px;
    background: #fff;
  }
  .listS img {
    width: 100%;
  }
  .see {
    font-size: 12px;
  }
  .use {
    padding-left: 50px;
  }
  .outMask {
    width: 200px;
    height: 200px;
    margin-top: 100px;
    background: blueviolet;
    position: relative;
  }
  .outMask:hover .innerImg {
    opacity: 0.5;
  }
  .outMask img {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    opacity: 0;
  }
  .outMask:hover img {
    opacity: 1;
  }
  .innerImg {
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
  }
  .upImg img{
    width: 100%;
  }

</style>
