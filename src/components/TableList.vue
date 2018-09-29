<template>
    <section>



        <el-table>
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120" >
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="100">
            </el-table-column>
            <el-table-column prop="age" label="年龄" width="100" >
            </el-table-column>
            <el-table-column prop="birth" label="生日" width="120" >
            </el-table-column>
            <el-table-column prop="addr" label="地址" min-width="180" >
            </el-table-column>
            <el-table-column label="操作" width="150">
                <template scope="scope">
                    <el-button size="small">编辑</el-button>
                    <el-button type="danger" size="small" >删除</el-button>
                    <el-button type="danger" size="small" >查看详情</el-button>
                </template>
            </el-table-column>
        </el-table>




    </section>
</template>

<script>

    export default {
        data() {
            return {
                listLoading:true
            }
        },
        mounted() {

        }
    }

</script>

<style scoped>

</style>
