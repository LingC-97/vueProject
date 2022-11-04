<!-- 首页 -->
<template>
    <div class='home'>
      <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu  v-for="(item,key) of menus" :key="key"
          :router="true">
            <el-submenu :index="item.id+''" >
              <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
              <el-menu-item-group v-for="(ite,key) of item.childMenus" :key="key">
                <el-menu-item :index="ite.id+''" :route="{path:ite.url}">{{ite.name}}</el-menu-item>
              </el-menu-item-group>    
            </el-submenu>  
          </el-menu>
        </el-aside>
  
        <el-container>
          <el-header  style=" font-size: 12px">
            <h2 class="title">前端学习</h2>
            <div class="rightSide">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
            </div>
          </el-header>
      
          <el-main>       
            <router-view ></router-view>
          </el-main>
        </el-container>
      </el-container>    
    </div>
</template>
<script>
import {menuList} from "@/utils/sysData"
export default {
    data() {        
        return {
            menus:[],
            
            
        }
            
        
    },
    mounted(){
        this.menus=menuList;


        
    },
    watch:{
      $route: {
        handler() {

        }
      }
    },

    created(){
        // this.menuList=this.$store.getters.getMenu

    },
    methods:{
      settingMenus(){
        const resMenus=[]
        // this.menus.forEach((item=>{

        // })
      }
        
        
    },
}
</script>
<style lang="css" scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    
  }
  
.el-aside {
  color: #333;
}
.rightSide{
  float: right;
}
.title{
  float: left;
  margin: auto;
  margin-left: 500px;



  
}
    
</style>


