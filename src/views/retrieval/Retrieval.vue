<template>
    <section>
        <LongSearch  v-on:childSearch="childSearch"/>
        <el-row style="margin-top: 20px" v-show="isShowResultBox">
            <el-col :span="24">
                <div class="result-box">
                    <el-row class="result-title">
                        <el-col :span="24" >
                            检索结果合计：<span id="search-result">5122</span>条
                        </el-col>
                    </el-row>
                    <!--结果展示-->
                    <el-row  class="result-title">
                        <el-col :span="24">
                            <div class="result-item"></div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<script>

    import ElForm from "../../../node_modules/element-ui/packages/form/src/form.vue";
    import LongSearch from '@/components/LongSearch'
    import ElCol from "element-ui/packages/col/src/col";

    export default {
        components: {
            ElCol,
            ElForm, LongSearch
        },
        data() {
            return {
                getChildData: {
                    isShowResultBox: false
                }
            }
        },
        method: {
            childSearch: function (sendObj) {
                getChildData = sendObj;
                alert(this.getChildData.isShowResultBox);
            }
        }
    }
</script>

<style scoped lang="scss">
    .result-box {
        padding: 14px 20px;
        background: #FFFFFF;
        .result-title {
            font-size: 20px;
            color: #333333;
            margin-bottom: 38px;
        }
        .result-item {
            height: 50px;
            padding: 10px 20px;
            border: 1px solid #BBBBBB;

        }
    }
</style>