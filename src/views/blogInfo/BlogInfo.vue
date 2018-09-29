<template>
    <section>
        <!--赛选-->
        <SelectPage/>

        <section style="background: #FFFFFF; margin:20px auto;padding: 10px">
            <!--工具条-搜索-->
            <el-row>
                <el-col :span="24" style="margin-bottom:10px">
                    <div class="fl" style="font-size: 20px">客户基本信息列表</div>
                    <div class="fr" style="padding-bottom: 0px;">
                        <el-form :inline="true" :model="filters">
                            <el-form-item>
                                <el-input v-model="filters.name" placeholder="搜索博主"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" v-on:click="getUsers">搜索</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
            </el-row>

            <!--按钮-添加客户-->
            <el-col :span="24">
                <el-button style="width: 100%;margin-bottom: 20px"  @click="handleAdd()"> 添加博主 </el-button>
            </el-col>

            <!--列表-->
            <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange"  >
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="companyname" label="公司名称" sortable></el-table-column>
                <el-table-column prop="type" label="所属行业"  sortable></el-table-column>
                <el-table-column prop="telperson" label="联系人" sortable></el-table-column>
                <el-table-column prop="post" label="职务" sortable></el-table-column>
                <el-table-column prop="status" label="状态" sortable></el-table-column>
                <el-table-column prop="phone" label="联系手机" sortable></el-table-column>
                <el-table-column prop="qq" label="QQ" sortable></el-table-column>
                <el-table-column prop="wx" label="微信" sortable></el-table-column>

                <!--操作-->
                <el-table-column label="操作" min-width="180px" >
                    <template scope="scope">
                        <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="danger"  size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
                        <el-button type="info"  size="small" >查看详情</el-button>
                        <el-button type="warning" size="small" >创建需求</el-button>

                    </template>
                </el-table-column>
            </el-table>

            <!--工具条 批量删除-->
            <el-col :span="24" class="toolbar">
                <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
                <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20"
                               :total="total" style="float:right;">
                </el-pagination>
            </el-col>


            <!--编辑界面-->
            <el-dialog  title="编辑博主"  style="text-align: center" v-model="editFormVisible" :close-on-click-modal="false">
                <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                    <el-form-item label="公司名称" prop="companyname">
                        <el-input v-model="addForm.companyname" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所属行业" prop="type">
                        <el-input v-model="addForm.type" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人"  prop="telperson">
                        <el-input v-model="addForm.telperson" auto-complete="off"></el-input>
                    </el-form-item>

                    <el-form-item prop="post" label="职务" >
                        <el-input v-model="addForm.post" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="status" label="状态" >
                        <el-input v-model="addForm.status" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="phone" label="联系手机" >
                        <el-input v-model="addForm.phone" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="qq" label="QQ" >
                        <el-input v-model="addForm.qq" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="wx" label="微信" >
                        <el-input v-model="addForm.wx" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>


                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="editFormVisible = false">取消</el-button>
                    <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                </div>
            </el-dialog>

            <!--新增界面-->
            <el-dialog title="新增博主" v-model="addFormVisible" :close-on-click-modal="false">
                <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">

                    <el-form-item label="公司名称" prop="companyname">
                        <el-input v-model="addForm.companyname" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="所属行业" prop="type">
                        <el-input v-model="addForm.type" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人"  prop="telperson">
                        <el-input v-model="addForm.telperson" auto-complete="off"></el-input>
                    </el-form-item>

                    <el-form-item prop="post" label="职务" >
                        <el-input v-model="addForm.post" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="status" label="状态" >
                        <el-input v-model="addForm.status" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="phone" label="联系手机" >
                        <el-input v-model="addForm.phone" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="qq" label="QQ" >
                        <el-input v-model="addForm.qq" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="wx" label="微信" >
                        <el-input v-model="addForm.wx" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="addFormVisible = false">取消</el-button>
                    <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
                </div>
            </el-dialog>
        </section>


    </section>
</template>
<script>
    import SelectPage from '@/components/SelectPage';
    import ElCol from "element-ui/packages/col/src/col";
    import util from '../../common/js/util'
    import {getUserListPage, removeUser, batchRemoveUser, editUser, addUser} from '../../api/api';


    export default {
        data() {
            return {
                filters: {
                    name: ''
                },
                users: [],
                total: 0,
                page: 1,
                listLoading: false,
                sels: [],//列表选中列
                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                editFormRules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ]
                },
                //编辑界面数据
                editForm: {
                    id: 0,
                    name: '',
                    sex: -1,
                    age: 0,
                    birth: '',
                    addr: ''
                },
                addFormVisible: false,//新增界面是否显示
                addLoading: false,
                addFormRules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ]
                },
                //新增界面数据
                addForm: {
                    name: '',
                    sex: -1,
                    age: 0,
                    birth: '',
                    addr: ''
                }
            }
        },
        components: {
            SelectPage
        },
        methods: {
            //性别显示转换
            formatSex: function (row, column) {
                return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
            },
            handleCurrentChange(val) {
                this.page = val;
                this.getUsers();
            },
            //获取用户列表
            getUsers() {
                let para = {
                    page: this.page,
                    name: this.filters.name
                };
                this.listLoading = true;
                //NProgress.start();
                getUserListPage(para).then((res) => {
                    this.total = res.data.total;
                    this.users = res.data.users;
                    this.listLoading = false;
                    //NProgress.done();
                });
            },
            //删除
            handleDel: function (index, row) {
                this.$confirm('确认删除该记录吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.listLoading = true;
                    //NProgress.start();
                    let para = {id: row.id};
                    removeUser(para).then((res) => {
                        this.listLoading = false;
                        //NProgress.done();
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.getUsers();
                    });
                }).catch(() => {

                });
            },



            //显示编辑界面
            handleEdit: function (index, row) {
                this.editFormVisible = true;
                this.editForm = Object.assign({}, row);
            },
            //显示新增界面
            handleAdd: function () {
                this.addFormVisible = true;
                this.addForm = {
                    name: '',
                    sex: -1,
                    age: 0,
                    birth: '',
                    addr: ''
                };
            },
            //编辑
            editSubmit: function () {
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.editLoading = true;
                            //NProgress.start();
                            let para = Object.assign({}, this.editForm);
                            para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                            editUser(para).then((res) => {
                                this.editLoading = false;
                                //NProgress.done();
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                                this.$refs['editForm'].resetFields();
                                this.editFormVisible = false;
                                this.getUsers();
                            });
                        });
                    }
                });
            },
            //新增
            addSubmit: function () {
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.addLoading = true;
                            //NProgress.start();
                            let para = Object.assign({}, this.addForm);
                            para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                            addUser(para).then((res) => {
                                this.addLoading = false;
                                //NProgress.done();
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                                this.$refs['addForm'].resetFields();
                                this.addFormVisible = false;
                                this.getUsers();
                            });
                        });
                    }
                });
            },
            selsChange: function (sels) {
                this.sels = sels;
            },
            //批量删除
            batchRemove: function () {
                var ids = this.sels.map(item => item.id).toString();
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.listLoading = true;
                    //NProgress.start();
                    let para = {ids: ids};
                    batchRemoveUser(para).then((res) => {
                        this.listLoading = false;
                        //NProgress.done();
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.getUsers();
                    });
                }).catch(() => {

                });
            }
        },

        mounted() {
            this.getUsers();
        }
    }


</script>

<style scoped lang="scss">
    .fl {
        float: left;
    }

    .fr {
        float: right;
    }
</style>