<template>
    <section>
        <el-table :data="datas"  style="width: 100%;">
            <el-table-column prop="createman" label="创建人"  >
            </el-table-column>
            <el-table-column prop="createtime" label="创建时间" >
            </el-table-column>
            <el-table-column prop="companyname" label="公司名称" >
            </el-table-column>
            <el-table-column prop="contactmen" label="公司联系人"  >
            </el-table-column>
          <el-table-column prop="zw" label="职务"  >
        </el-table-column>

            <el-table-column prop="createman" label="联系方式"  >
            </el-table-column>

          <el-table-column prop="dyl" label="对应类"  >
            </el-table-column>
            <!--  <el-table-column prop="createman" label="推广产品"  >
          </el-table-column>

          <el-table-column prop="createman" label="对应链接"  >
          </el-table-column>

          <el-table-column prop="createman" label="具体要求"  >
          </el-table-column>
          <el-table-column prop="createman" label="预算" >
          </el-table-column>
          <el-table-column prop="createman" label="状态"  >
          </el-table-column>-->


            <el-table-column label="操作" min-width="180">
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
                listLoading:true,
                datas:[{
                    createman:'啊 牛',
                    createtime:'20190929',
                    companyname:'aa',
                    contactmen:'eee',
                    zw:'CEO',
                    dyl:'什么东西'
                }]
            }
        },
        mounted() {

        }
    }

</script>

<style scoped>

</style>
