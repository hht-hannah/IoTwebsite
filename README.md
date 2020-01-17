
## 项目技术栈

* 前台：vue & vue-router & vuex & vue-cli(webpack) & element-ui
* 后台： nodejs (express) + mongodb
* 前后台交互： axios
* 单点登录： jsonwebtoken
* 图表： echart: https://echarts.apache.org/zh/tutorial.html
* 组件： element: https://element.eleme.cn/#/zh-CN/component/quickstart
* 有梯子的话推荐这个vue教学视频: https://www.youtube.com/watch?v=4deVCNJq3qc&t=8183s


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080（前台启动）
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# start server（后台启动）
node server.js

# start mongodb（启动数据库，确保安装mongodb）
mongod

```

## 结构

/server和/server.js 接mongodb，负责login和register的部分

/src/api/api.js 所有的和后端交互的接口都在这里调用;

/src/App.vue 有最大的一层router-view

/src/assets 放些图片、logo等

/src/axios.js 是登陆用的api(这里有个bug，登陆的时候目前是在本地开mongodb，用了axios.defaults.baseURL之后所有都会调那个url，所以登陆之前要先把这行注释掉，还不知道怎么改，反正到时候登陆的代码肯定还是要再改的。)

/src/common 用于改颜色，但也没调好。

/src/components Sidebar: 左侧边栏， Header: 上侧边栏， 404 简单的找不到页面， Register 注册页面，

/src/components/Login.vue 用了一个现成的界面，login文件夹里是原本的代码，这个页面调用了文件夹中的css;

/src/main.js import一些要用的东西；

/src/router/router.js 页面的构架 meta部分是为了验证的需要;

/src/store 放的是一些很多页面都要用到的变量，目前把hostname, accesskey, accesskeyname放在了里面。因为iotdevice和iotedge都要用到。

/src/views 所有的页面，分了AKS

/src/views/Home.vue  只放了header和sidedbar的部分因为除了login和register以外，每一个页面都需要header和sidebar；当中的router-view是较小的一层；

/src/views AKS,IoTHub,PackageInstall,ResourceGroup,PersonalInformation.vue都是页面的组件；
