<template>
    <section>
        <el-row class="container">
            <el-col :span="24" class="header">
                <el-col :span="10" class="logo border-s" :class="collapsed?'logo-collapse-width':'logo-width'">
                    <i class="fa fa-address-card" style="margin-right: 15px"></i> {{collapsed ? '' : sysName}}
                </el-col>
                <!--关闭/开启左侧边栏的按钮-->
                <el-col :span="4">
                    <div class="tools" @click.prevent="collapse">
                        <i style="color:#001529;">
                            <svg viewBox="64 64 896 896" data-icon="menu-fold" width="20px" height="20px"
                                 fill="currentColor" aria-hidden="true">
                                <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z"></path>
                            </svg>
                        </i>
                    </div>

                </el-col>
                <!--右侧用户、消息...-->
                <el-col :span="10" class="userinfo">
                    <!--设置-->
                    <i class="el-icon-setting"></i>
                    <!--搜索-->
                    <i class="el-icon-search" @click="clickSearch()"></i>
                    <!--消息-->
                    <i class="el-icon-time" @click="showBotice()"></i>
                    <!--用户-->

                    <el-dropdown>
                        <span class="el-dropdown-link userinfo-inner"> <img :src="this.sysUserAvatar"/>  {{sysUserName}} </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>我的消息</el-dropdown-item>
                            <el-dropdown-item>设置</el-dropdown-item>
                            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>

                    </el-dropdown>
                </el-col>
            </el-col>
            <el-col :span="24" class="main">
                <aside :class="collapsed?'menu-collapsed border-s':'menu-expanded border-s'">
                    <!--导航菜单-->
                    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" id="mymenu" @open="handleopen"
                             @close="handleclose" @select="handleselect" unique-opened router v-show="!collapsed">
                        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                            <el-submenu :index="index+''" v-if="!item.leaf">
                                <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path"
                                              v-if="!child.hidden">{{child.name}}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i
                                    :class="item.iconCls"></i>{{item.children[0].name}}
                            </el-menu-item>
                        </template>
                    </el-menu>

                    <!--导航菜单-折叠后-->
                    <ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
                        <li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
                            <template v-if="!item.leaf">
                                <div class="el-submenu__title" style="padding-left: 20px;"
                                     @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i
                                        :class="item.iconCls"></i></div>
                                <ul class="el-menu submenu" :class="'submenu-hook-'+index"
                                    @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
                                    <li v-for="child in item.children" v-if="!child.hidden" :key="child.path"
                                        class="el-menu-item" style="padding-left: 40px;"
                                        :class="$route.path==child.path?'is-active':''"
                                        @click="$router.push(child.path)">{{child.name}}
                                    </li>
                                </ul>
                            </template>
                            <template v-else>
                        <li class="el-submenu">
                            <div class="el-submenu__title el-menu-item"
                                 style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;"
                                 :class="$route.path==item.children[0].path?'is-active':''"
                                 @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
                        </li>
</template>
</li>
</ul>
</aside>

<!--内容区域-->
<section class="content-container">
    <div class="grid-content bg-purple-light">
        <el-col :span="24" class="breadcrumb-container">
            <el-breadcrumb separator="/" class="breadcrumb-inner" style="margin-bottom: 15px">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                    <strong class="">{{ item.name }}</strong>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </el-col>
    </div>
</section>
</el-col>
</el-row>

<!--通知Dialog-->
<el-dialog title="通知" v-model="noticeVisible" :close-on-click-modal="false">
    <el-table>
        <el-table-column prop="companyname" label="需求名称"></el-table-column>
        <el-table-column prop="companyname" label="开始时间"></el-table-column>
        <el-table-column prop="companyname" label="负责人"></el-table-column>
        <el-table-column prop="companyname" label="分类标签"></el-table-column>
        <el-table-column prop="companyname" label="放置时间"></el-table-column>
    </el-table>

</el-dialog>
</section>


</template>

<script>
    export default {
        data() {
            return {
                sysName: 'wotoko',
                collapsed: false,
                sysUserName: '追风少年',
                sysUserAvatar: '',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                noticeVisible: false
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            /*一级菜单展开调用*/
            handleopen() {

            },
            /*一级菜单关闭调用*/
            handleclose() {

            },
            /*点击菜单的时候，调用*/
            handleselect: function (a, b) {

            },
            //退出登录
            logout: function () {
                var _this = this;
                this.$confirm('确认退出吗?', '提示', {
                    //type: 'warning'
                }).then(() => {
                    sessionStorage.removeItem('user');
                    _this.$router.push('/login');
                }).catch(() => {

                });


            },

            //折叠导航栏
            collapse: function () {
                this.collapsed = !this.collapsed;
                /*解决再次展开时，width 被设置成60px 的 bug*/
                var uiwidth = document.getElementById('mymenu');
                if (uiwidth.offsetWidth === 0) {
                    uiwidth.style.width = "230px"
                }
            },
            showMenu(i, status) {
                this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
            },
            /*显示通知弹窗*/
            showBotice: function () {
                this.noticeVisible = true;
                //获取通知的内容
            },
            /*点击搜索*/
            clickSearch:function () {
                
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

<style scoped lang="scss">
    @import '~scss_vars';

    .container {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
        .header {
            height: 60px;
            line-height: 60px;
            background: $color-primary;
            .userinfo {
                text-align: right;
                padding-right: 35px;
                float: right;
                .userinfo-inner {
                    cursor: pointer;
                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 20px;
                        margin: 10px 0px 10px 10px;
                        float: right;
                    }
                }
                i {
                    padding: 0 12px;
                    display: inline-block;

                }
            }
            .logo {
                height: 60px;
                font-size: 22px;
                padding-left: 20px;
                padding-right: 20px;
                border-color: rgba(238, 241, 146, 0.3);
                border-right-width: 1px;
                border-right-style: solid;
                background: #002140;
                color: #ffffff;
                img {
                    width: 40px;
                    float: left;
                    margin: 10px 10px 10px 18px;
                }
                .txt {
                    color: #fff;
                }
            }
            .logo-width {
                width: 230px;
                background: #002140;
            }
            .logo-collapse-width {
                width: 80px
            }
            .tools {
                //padding: 0px 23px;
                width: 60px;
                height: 60px;
                line-height: 70px;
                cursor: pointer;
                text-align: center;
            }
            .tools:hover {
                background: #f0f2f5;
            }

        }
        .border-s {
            -webkit-box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
            box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
        }
        .main {
            display: flex;
            // background: #324057;
            position: absolute;
            top: 60px;
            bottom: 0px;
            overflow: hidden;
            aside {
                flex: 0 0 230px;
                width: 230px;
                // position: absolute;
                // top: 0px;
                // bottom: 0px;
                .el-menu {
                    height: 100%;
                    background: #001529;
                }

                .collapsed {
                    width: 80px;
                    .item {
                        position: relative;
                    }
                    .submenu {
                        position: absolute;
                        top: 0px;
                        left: 65px;
                        z-index: 99999;
                        height: auto;
                        display: none;
                    }

                }
            }
            .menu-collapsed {
                flex: 0 0 80px;
                width: 80px;
                background: #001529;
            }
            .menu-expanded {
                flex: 0 0 230px;
                width: 230px;
            }
            .content-container {
                flex: 1;
                overflow-y: scroll;
                padding: 20px 0px 20px 20px;
                .breadcrumb-container {
                    .title {
                        width: 200px;
                        float: left;
                        color: #475669;
                    }
                    .breadcrumb-inner {
                        float: left;
                    }
                }
                .content-wrapper {
                    //background-color: #fff;
                    box-sizing: border-box;
                }
            }
        }
    }
</style>