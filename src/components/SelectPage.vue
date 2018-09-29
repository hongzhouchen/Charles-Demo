<template>
    <section style="background: #ffffff;/*margin-left: -20px*/">

        <el-row class="line">
            <el-col :span="2" class="type"><span>标签筛选:</span></el-col>
            <el-col :span="22" class="content-list">
                <span>时尚生活</span>
                <span>电子游戏</span>
                <span>电子游戏</span>
                <span>电子游戏</span>
                <span>电子游戏</span>
                <span>时尚生活</span>
                <span>电子游戏</span>
                <span>电子游戏</span>
            </el-col>
        </el-row>

        <el-row class="line">
            <el-col :span="2" class="type"><span> 需求赛选：</span></el-col>
            <el-col :span="22" class="content-list">
                <span>时尚生活</span>
                <span>电子游戏</span>
                <span>电子游戏</span>
                <span>电子游戏</span>
                <span>电子游戏</span>
            </el-col>
        </el-row>

        <el-row class="line">
            <el-col :span="2" class="type"><span> 时间赛选：</span></el-col>
            <el-col :span="22" class="content-list">
                <span>时尚生活</span>
                <span>电子游戏</span>
                <span>电子游戏</span>
                <span>电子游戏</span>
                <span>电子游戏</span>
            </el-col>
        </el-row>
    </section>
</template>

<style scoped lang="scss">

    .line {
        height: auto;
        line-height: 40px;
        margin-left: 30px;
        margin-bottom: 1px;
        .type {
            float: left;
            font-weight: 500;
            padding-left: 10px;

            span {
                font-size: 16px;
            }
        }
        .content-list {
            float: left;
            span {
                display: inline-block;
                margin: 0px 10px;
                font-size: 14px;
            }
        }
    }


</style>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>