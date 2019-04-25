export default {
  rankName: function(val){
    let obj = {'1':'店员','2':'管理员','3':'超级管理员','4':'运营顾问'}
    if (val) {
      return obj[val] || ''
    }
  }
}
