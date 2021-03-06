var app = require('koa')();
var router = require('koa-router')();

//首页广告
const homeAdData = require('./home/ad');
router.get('/api/homead', function * (next) {
  this.body = homeAdData;
});

//列表
const homeListData = require('./home/list');
router.get('/api/homelist/:city/:page', function * (next) {
  const params = this.params;
  const paramsCity = params.city;
  const paramsPage = params.page;

  console.log('当前城市：' + paramsCity);
  console.log('当前页数：' + paramsPage);

  this.body = homeListData;
});

//搜索结果页-搜索结果-4个参数
const searchListData = require('./search/list');
router.get('/api/search/:page/:city/:category/:keyword', function * (next) {
  //参数
  const params = this.params;
  const paramsPage = params.page;
  const paramsCity = params.city;
  const paramsCategory = params.category;
  const paramsKeyword = params.keyword;

  console.log('当前页数：' + paramsPage);
  console.log('当前城市：' + paramsCity);
  console.log('当前类别：' + paramsCategory);
  console.log('关键字：' + paramsKeyword);

  this.body = searchListData;
});

//搜索结果页-搜索结果-3个参数
router.get('/api/search/:page/:city/:category', function * next() {
  //参数
  const params = this.params;
  const paramsPage = params.page;
  const paramsCity = params.city;
  const paramsCategory = params.category;

  console.log('当前页数：' + paramsPage);
  console.log('当前城市：' + paramsCity);
  console.log('当前类别：' + paramsCategory);

  this.body = searchListData;
});

//详情页-商户信息
const detailInfo = require('./detail/info');
router.get('/api/detail/info/:id', function *next(){
    console.log('详情页 - 商户信息');

    const params = this.params;
    const id = params.id;

    console.log('商户id：' + id);

    this.body = detailInfo;
});

//详情页-用户评论
const detailComment = require('./detail/comment');
router.get('/api/detail/comment/:page/:id', function *next(){
    console.log('详情页 - 用户评论');

    const params = this.params;

    const page = params.page;
    const id = params.id;

    console.log('当前页数：' + page);
    console.log('商户id：' + id);

    this.body = detailComment;
});

//开启服务
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);