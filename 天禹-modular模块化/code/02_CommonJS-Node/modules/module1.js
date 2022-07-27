//模块一，暴露出去一个对象
module.exports = {
  data:'atguigu',
  foo () {
    console.log(`module1-----foo被调用了${this.data}`)
  },
  bar () {
    console.log(`module1-----bar被调用了${this.data}`)
  }
}

/*exports.demo = function () {
  console.log('demo')
}*/

/*
* 有一个默认存在的关系式：module.exports = exports = {}
* 两种暴露方法同时使用的时候，以module.exports
* */


