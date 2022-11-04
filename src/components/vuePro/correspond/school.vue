<!-- 此处标记页面 -->
<template>
    <div class='school'>
        <h3>1、用props 实现父传子</h3>
        <Student :schoolName=schoolName></Student>
        <hr/>
        <h3>2、用props 实现子传父</h3>
        <Teacher :getTeacherName="getTeacherName"></Teacher>
        <hr/>
        <h3>3、采用监听方法 实现子传父</h3>
        <Course ref="course"></Course>
        <hr/>
        <h3>4、通过自定义事件 实现子传父</h3>
        <Employee @demoName="getEmployeeName"></Employee>
        <hr>


        <h3>5.消息订阅与发布(兄弟传参)</h3>
        <Brother1></Brother1>
        <brother2></brother2>
        
    
    </div>
</template>
<script>
import Student from './student';
import Teacher from './teacher';
import Course from './course';
import Employee from './employee.vue';
import Brother1 from './brother1.vue';
import Brother2 from './brother2.vue';
export default {
    data() {
        return {
            schoolName:'xx小学',

        };
    },
    mounted() {
    },
    methods: {
        getTeacherName(teacherName){
            console.log('父组件获取到子组件传递过来的teacherName:',teacherName);    
        },
        getCourseName(courseName){
            console.log('父组件获取子组件course中的courseName',courseName);
        },
        getEmployeeName(employeeName){
            console.log('父组件获取子组件employee中的employeeName',employeeName);
        }
    },
    mounted(){
        this.$refs.course.$on('demo',this.getCourseName)
    },
    components: { Student, Teacher, Course, Employee, Brother1, Brother2 }
    
}
</script>
<style lang="css" scoped>
    
</style>