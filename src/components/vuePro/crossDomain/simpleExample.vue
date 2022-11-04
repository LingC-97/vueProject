<!-- 此处标记页面 -->
<template>
    <div class='simpleSearch'>
        <el-button @click="getStudentList">获取学生列表信息</el-button>
        <el-button @click="getCarsList">获取汽车列表信息</el-button>

        <el-table
            :data="tableData"
            style="width: 100%"
            align="center">
            <el-table-column
                prop="id"
                label="id"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="age"
                label="年龄"
                width="180">
            </el-table-column>
            <el-table-column
                prop="price"
                label="价格"
                width="180">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import axios from 'axios'
import {getStudent} from '@/api/api.js'
export default {
    data() {
        return {
            tableData:[],
            flag:false,
            
        }
    },
    mounted(){
        
    },
    methods:{
        //  对请求封装了一下 
        getStudentList(){
            getStudent().then(res=>{
                 console.log(res.data);
                 this.tableData = res.data

            }).catch(err=>{
            this.$message.error(err)
            })

        },
        // 对请求未封装,用axios原始直接访问
        getCarsList(){
            axios.get('http://localhost:8080/api2/cars').then(
                response => {
                     this.tableData = response.data

                    console.log('请求成功了',response.data)
                },
                error => {
                    console.log('请求失败了',error.message)
                }
            )
        }
        
    },
}
</script>
<style lang="css" scoped>
    
</style>