<template>
    <section class="tab-box">
        <template>
            <el-tabs tab-position="left">
                <el-tab-pane label="个人信息">
                    <el-col :span="16">
                        <p style="font-size: 20px;">基本信息</p>
                        <el-form>
                            <el-form-item>
                                <el-input type="text" placeholder="邮箱"/>
                            </el-form-item>
                            <el-form-item>
                                <el-input type="text" placeholder="昵称"/>
                            </el-form-item>
                            <el-form-item>
                                <el-input type="text" placeholder="性别"/>
                            </el-form-item>
                            <el-form-item>
                                <el-input type="text" placeholder="联系电话"/>
                            </el-form-item>
                            <el-form-item>
                                <el-input type="text" placeholder="QQ"/>
                            </el-form-item>
                            <el-form-item>
                                <el-input type="text" placeholder="修改账户密码"/>
                            </el-form-item>
                            <el-form-item>
                                <el-input type="text" placeholder="确认修改密码"/>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" class="primary" style="width: 100%;">确认修改</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col :span="8" class="head-iocn">
                        <a href="javascript:;"><img
                                src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png
" alt=""></a>
                    </el-col>
                </el-tab-pane>

                <el-tab-pane label="员工管理">
                    <el-col :span="16">
                        <p style="font-size: 20px;">员工列表
                            <el-button round type="text" href="javascript:;" class="fr f14"><i class="el-icon-plus"></i>添加员工
                            </el-button>
                        </p>
                        <el-table :data="ployerList">
                            <el-table-column prop="headicon" label="头像">
                                <template slot-scope="scope">
                                    <img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                                         alt="" style="width: 50px;height: 50px">
                                </template>
                            </el-table-column>
                            <el-table-column prop="name" label="姓名">
                            </el-table-column>
                            <el-table-column prop="bm" label="部门">
                            </el-table-column>
                            <el-table-column prop="csr" label="创始人">
                            </el-table-column>
                            <el-table-column label="操作" width="150">
                                <template scope="scope">
                                    <el-button size="small">修改</el-button>
                                    <el-button type="danger" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>

                </el-tab-pane>
                <el-tab-pane label="部门管理">
                    <el-col :span="16">
                        <p style="font-size: 20px;">部门列表
                            <el-button round type="text" href="javascript:;" class="fr f14"><i class="el-icon-plus"></i>添加部门
                            </el-button>
                        </p>
                        <div class="bm-item">
                            <el-col :span="8" class="one-step">一级部门</el-col>
                            <el-col :span="16" class="other-step">
                                <span>二级部门</span> <span>三级部门</span> <span>四级部门</span> <span>五级部门</span>
                            </el-col>
                            <el-col :span="16" class="other-step">
                                <span>二级部门</span> <span>三级部门</span> <span>四级部门</span> <span>五级部门</span>
                            </el-col>
                            <div class="option">
                                <span>编辑</span><span>删除</span><br>
                                <div class="add-bm">添加下级部门</div>
                            </div>
                        </div>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="标签管理">
                    <el-col :span="16">
                        <p style="font-size: 20px;">标签列表
                            <el-button round type="text" href="javascript:;" class="fr f14"><i class="el-icon-plus"></i>添加标签
                            </el-button>
                        </p>
                        <div class="bq-item">
                            <!--item  内容-->
                            <span>标签名</span>
                            <div class="option">
                                <span>编辑</span><span>删除</span>
                            </div>
                        </div>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="分类管理">
                    <el-col :span="16">
                        <p style="font-size: 20px;">分类列表
                            <el-button round type="text" href="javascript:;" class="fr f14"><i class="el-icon-plus"></i>添加分类
                            </el-button>
                        </p>
                        <div class="bq-item">
                            <!--item  内容-->
                            <span class="mr50">分类名</span><span>分类颜色</span>
                            <div class="option">
                                <span>编辑</span><span>删除</span>
                            </div>
                        </div>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="字段管理">
                    <el-col :span="16">
                        <p style="font-size: 20px;"> <span style="margin-right: 30px">字段管理</span>
                            <el-button round type="text" href="javascript:;" class="fr f14"><i class="el-icon-plus"></i>添加字段</el-button>
                            <span class="toggle-btn">博主</span><span class="toggle-btn isSelect">客户</span>

                        </p>
                        <div class="bq-item">
                            <!--item  内容-->
                            <span class="mr50">字段名</span>
                            <div class="option">
                                <span>编辑</span><span>删除</span>
                            </div>
                        </div>
                    </el-col>
                </el-tab-pane>
            </el-tabs>
        </template>
    </section>
</template>

<style lang="scss">

    .tab-box {
        background: #ffffff;
        padding: 0 20px 0 0;
        p{
            padding: 10px 0;
        }

        .el-tabs__item {
            height: 60px;
            line-height: 60px;
            font-size: 16px;
            width: 200px;
            text-align: center;
            background: #BBBBBB;
        }

        .el-tabs__item:hover {
            background: #ffffff;
        }
        .el-tabs__content {
            padding: 20px 40px;
            background: #ffffff;
            height: 100%;
        }
        .is-active {
            background: #ffffff;
            border-left: 5px #409EFF solid;
        }
        .el-tab-pane {
            height: 100%;
        }

        /*headinfo*/
        .head-iocn {
            border-radius: 150px;
            padding: 50px 0 10px 150px;
            img {
                height: 100px;
                width: 100px;
            }

        }
        .el-tabs--left .el-tabs__header.is-left {
            margin-right: 0px;
            text-align: center;
        }
        .el-tabs--left .el-tabs__item.is-left {
            text-align: center;
        }

        /*nav 的*/
        .el-tabs__nav-wrap {
            background-color: #BBBBBB;
            min-height: 800px;
        }
        .el-tabs__nav-wrap::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: #bbbbbb;
            z-index: 1;
        }

        .el-tabs__active-bar {
            background: none;
        }
        /*左侧nav*/
        .el-tabs__nav {
            margin-top: 36px;
        }

        .toggle-btn {
            border: 1px #409EFF solid;
            padding: 10px 35px ;
            font-size: 14px;
        }
        .isSelect{
            background: #409EFF;
            color: #ffffff;
            font-size: 14px;

        }

        /*标签管理*/
        .bq-item {
            border: 1px solid #cccccc;
            padding-left: 23px;
            margin: 15px 0;
            position: relative;
            height: 50px;
            line-height: 50px;
            .one-step {
                width: 130px;
            }
            .other-step {
                span {
                    display: inline-block;
                    margin: 0 10px;
                }
            }
            .option {
                position: absolute;
                right: 0;
                top: 0;
                span {
                    display: inline-block;
                    margin-left: 5px;
                    font-size: 14px;
                    padding: 0 15px;
                    background: #bbbbbb;
                    color: #ffffff;
                }
            }
        }
        /*部门*/
        .bm-item {
            border: 1px solid #cccccc;
            padding-left: 23px;
            margin: 15px 0;
            position: relative;
            height: 80px;
            .one-step {
                height: 100%;
                line-height: 80px;
                width: 130px;
            }
            .other-step {
                span {
                    display: inline-block;
                    margin: 10px;
                }
            }
            .option {
                height: 80px;
                line-height: 40px;
                position: absolute;
                right: 0;
                background: #bbbbbb;
                top: 0;
                span {
                    display: inline-block;
                    margin-left: 5px;
                    font-size: 14px;
                    padding: 0 15px;
                }
                .add-bm {
                    line-height: 40px;
                    text-align: center;
                }
            }
        }
    }


</style>

<script>
    import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item.vue";
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        components: {
            ElButton,
            ElFormItem
        },
        data() {
            return {
                ployerList: [{
                    headicon: '',
                    name: '张三',
                    bm: '信息部',
                    csr: '创始人老王'
                    /* data:[{

                     }]*/
                }
                ]

            }
        },
        method: {}

    }
</script>