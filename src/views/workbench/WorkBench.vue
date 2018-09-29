<template>
    <section>
        <!--1 line-->
        <el-row style="margin-bottom: 20px">
            <el-col :span="24" class="info-box" style="padding-bottom: 0px;">
                <el-col :span="12" class="userinfo-inner">
                    <div class="img-head">
                        <img :src="this.sysUserAvatar"/>
                    </div>
                    <div class="name-info">
                        <span style="font-size: 14px">{{sysUserName}} </span> <br> <span style="font-size: 12px">销售达人 | wotokol-销售部-销售</span>
                    </div>
                </el-col>
                <el-col :span="6" class="right-info">
                    <el-col :span="8" class="need-box">
                        <span>未处理的需求</span>
                        <span class="big-number">52</span>
                    </el-col>
                    <el-col :span="8" class="need-box">
                        <span>未处理的需求</span>
                        <span class="big-number">52</span>
                    </el-col>
                    <el-col :span="1" class="need-box line">|</el-col>
                    <el-col :span="7" class="need-box">
                        <span>未处理的需求</span>
                        <span class="big-number">52</span>
                    </el-col>
                </el-col>

            </el-col>
        </el-row>
        <!--2 line-->
        <el-row style="margin-bottom: 20px">
            <el-col :span="14" style="padding-right: 10px;">
                <!--待解决的需求列表-->
                <el-col :span="24" class="needList">
                    <el-row style="margin-bottom: 20px">
                        <div class="title-left">待解决的需求列表</div>
                        <div class="title-right">全部需求列表</div>
                    </el-row>
                    <!--列表-->
                    <el-row>
                        <el-col :span="8" style="padding: 15px;">
                            <div class="list-box">
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <span>状态</span>
                            </div>
                        </el-col>
                        <el-col :span="8" style="padding: 15px;">
                            <div class="list-box">
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <span>状态</span>
                            </div>
                        </el-col>
                        <el-col :span="8" style="padding: 15px;">
                            <div class="list-box">
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <span>状态</span>
                            </div>
                        </el-col>
                        <el-col :span="8" style="padding: 15px;">
                            <div class="list-box">
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <span>状态</span>
                            </div>
                        </el-col>
                        <el-col :span="8" style="padding: 15px;">
                            <div class="list-box">
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <span>状态</span>
                            </div>
                        </el-col>
                        <el-col :span="8" style="padding: 15px;">
                            <div class="list-box">
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <p>需求名称</p>
                                <span>状态</span>
                            </div>
                        </el-col>
                    </el-row>

                </el-col>
                <!--待解决的叮当列表-->
                <el-col :span="24" class="orderList">
                    <el-row style="margin-bottom: 20px">
                        <div class="title-left">待解决的需求列表</div>
                        <div class="title-right">全部需求列表</div>
                    </el-row>
                    <!--列表-->
                    <el-row>
                        <el-col :span="24">
                            <template>
                                <!--stripe true 表示带斑马纹的表格-->
                                <el-table :data="tableData" stripe style="width: 100%">
                                    <el-table-column
                                            prop="order_id"
                                            label="订单ID"
                                            width="180">
                                    </el-table-column>

                                    <el-table-column
                                            prop="start_time"
                                            label="开始时间"
                                            width="180">
                                    </el-table-column>

                                    <el-table-column
                                            prop="person"
                                            label="负责人">
                                    </el-table-column>
                                    <el-table-column
                                            prop="contract_amount"
                                            label="合同金额">
                                    </el-table-column>
                                    <el-table-column
                                            prop="status"
                                            label="状态">
                                    </el-table-column>
                                </el-table>
                            </template>
                        </el-col>
                    </el-row>
                </el-col>
            </el-col>
            <!--基本数据统计-->
            <el-col :span="10" style="padding-left: 10px;">
                <el-col :span="24" class="basic-Date-total">
                    <el-row style="margin-bottom: 20px">
                        <div class="title-left">基本数据统计</div>
                    </el-row>
                    <!--内容-->
                    <el-row>
                        <el-col :span="12" style="padding: 15px">
                            <div class="basic-box">
                                <span class="cbig-number">312</span>
                                <p>近一周联系客户</p>
                            </div>
                        </el-col>
                        <el-col :span="12" style="padding: 15px">
                            <div class="basic-box">
                                <span class="cbig-number">123</span>
                                <p>待联系客户</p>
                            </div>
                        </el-col>
                        <el-col :span="12" style="padding: 15px">
                            <div class="basic-box">
                                <span class="cbig-number">43</span>
                                <p>今日联系客户</p>
                            </div>
                        </el-col>
                        <el-col :span="12" style="padding: 15px">
                            <div class="basic-box">
                                <span class="cbig-number">58</span>
                                <p>昨日联系客户</p>
                            </div>
                        </el-col>
                        <el-col :span="24" style="padding: 15px">
                            <div class="line"></div>
                        </el-col>
                        <!--横线-->
                        <el-col :span="12" style="padding: 15px">
                            <div class="basic-box">
                                <span class="cbig-number">7583</span>
                                <p>总计联系客户</p>
                            </div>
                        </el-col>
                        <el-col :span="12" style="padding: 15px">
                            <div class="basic-box"><span class="cbig-number">1861</span>
                                <p>总完成订单</p>
                            </div>
                        </el-col>
                        <el-col :span="12" style="padding: 15px">
                            <div class="basic-box"><span class="cbig-number">101</span>
                                <p>本月完成订单</p>
                            </div>
                        </el-col>
                        <el-col :span="12" style="padding: 15px">
                            <div class="basic-box"><span class="cbig-number">97</span>
                                <p>上月完成客户</p></div>
                        </el-col>

                    </el-row>
                </el-col>
            </el-col>
        </el-row>
    </section>
</template>

<style scoped lang="scss">
    .info-box {
        background: #FFFFFF;
        height: 80px;
        color: #333333;
    }

    .userinfo-inner {
        cursor: pointer;
        height: 60px;
        /*line-height: 60px;*/
        .img-head {
            float: left;
            img {
                width: 60px;
                height: 60px;
                border-radius: 60px;
                margin: 10px 10px 10px 10px;
            }
        }
        .name-info {
            padding: 18px 0;
            line-height: 20px;
            float: left;
        }
    }

    .right-info {
        float: right;
        .need-box {
            padding: 10px 5px;
            text-align: center;
            span {
                display: block;
            }
            .big-number {
                font-size: 40px;
                color: #666666;
            }
        }
        .line {
            height: 60px;
            //background: #f2f2f2;
            color: #f2f2f2;
            font-size: 50px;
            line-height: 60px;
        }
    }

    .title-left {
        float: left;
        font-size: 16px;
    }

    .title-right {
        float: right;
        font-size: 16px;
    }

    .needList {
        padding: 24px;
        background: #FFFFFF;
        margin-bottom: 10px;

        .list-box {
            height: 140px;
            border: 1px solid #CCC;
            position: relative;
            padding: 0 10px;
            span {
                position: absolute;
                right: 10px;
                top: 10px;
                font-size: 16px;
            }
        }
    }

    .orderList {
        padding: 24px;
        background: #FFFFFF;

    }

    /*基本数据统计*/
    .basic-Date-total {
        padding: 24px;
        background: #FFFFFF;
        text-align: center;
        .basic-box {
            height: 90px;
            padding: 15px;
            span {
                font-size: 48px;
                color: #5C6373;
            }
            p {
                font-size: 20px;
                color: #101010;
            }
        }

        .line {
            height: 6px;
            line-height: 20px;
            background-color: rgba(225, 225, 225, 1);
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0);
        }
    }

    /*清楚浮动-简易版*/
    .clearfix:after {
        content: "";
        display: block;
        clear: both;
    }
</style>

<script>
    import ElRow from "element-ui/packages/row/src/row";
    import ElCol from "element-ui/packages/col/src/col";

    var data = [
        {
            order_id: "1",
            start_time: "2018-09-28",
            person: "张三",
            contract_amount: "20,000.00",
            status: "完结"
        }];
    export default {
        components: {
            ElCol,
            ElRow
        },
        data() {
            return {
                sysUserName: "",
                sysUserAvatar: "",
                /*表格的数据*/
                tableData: data
            }
        },
        mounted() {
            var user = sessionStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
                this.sysUserName = user.name || '';
                this.sysUserAvatar = user.avatar || '';
            }

        }
    }
</script>