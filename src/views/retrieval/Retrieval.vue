<template>
    <section>
        <LongSearch  v-on:childSearch="childSearch"/>
        <el-row style="margin-top: 20px"  >
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
                            <div class="result-item">
                                <p> <span>开发记录</span>  联系方式：（邮件，SKYPE, WAHTSAPP, VK, telegram, 电话，imessenger 其它）</p>
                                <p> 内容： 日常开发 、日常议价、具体case</p>
                                <div class="time-name">
                                    <span>2018/09/29</span>
                                    <span>杨过</span>
                                </div>
                            </div>
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
            position: relative;
            height: 60px;
            padding: 5px 20px;
            border: 1px solid #BBBBBB;
            font-size: 16px;
            p{
                padding: 5px 0;
                margin: 0;
                span{
                    margin-right: 35px ;

                }
            }
            .time-name{
                position: absolute;
                right: 15px;
                top: 40px;
                height: 60px;
                margin-top: -20px;
                text-align: center;
                span{
                    display: block;
                    padding: 2px auto;
                }
            }
        }

    }
</style>