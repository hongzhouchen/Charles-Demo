<template>
    <section>
        <!--按钮-添加客户-->
        <el-col :span="24">
            <el-button style="width: 100%;margin-bottom: 20px"  @click="handleAdd()"> 添加订单</el-button>
        </el-col>
        <TableList />
    </section>
</template>

<style>

</style>

<script>
    import TableList from '@/components/TableList'
    export default {
        data() {
            return {

            }
        },
        components:{
            TableList
        }
    }
</script>