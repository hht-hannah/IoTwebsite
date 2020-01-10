<template>
  <div class='home-container'>
    <Header class="nav-screen"/>
    <div class='tac sidebar-screen'>
      <Sidebar class="full-screen adaptive"/>
      <div class='router-view'>
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Header
  },
}
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
  /*sass加变量*/
  $nav-height: 60px;
  $sidebar-width:185px;
  .home-container{
    height: 100%;
    .nav-screen{
      position: fixed;
      width: 100%;
      height: $nav-height;
      z-index: 99;
    }
    .sidebar-screen{
      height: calc(100% - #{$nav-height});
      .adaptive{
        top:$nav-height;
        position: fixed;
        width: $sidebar-width;
        min-width: 130px;
      }
    }
  }
  .full-screen{
    height:  calc(100% -  #{$nav-height});
  }
  .router-view{
    margin-top: 20px;
    position: absolute;
    top:$nav-height;
    right: 0;
    width: calc(100% - #{$sidebar-width});;
  }
</style>