<!-- 此处标记页面 -->
<template>
    <div class=''>
        <Search></Search>
        <List></List>
    </div>
</template>
<script>
import List from './list.vue';
import Search from './search.vue';

export default {
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { Search, List }
}
</script>
<style lang="css" scoped>
    
</style>