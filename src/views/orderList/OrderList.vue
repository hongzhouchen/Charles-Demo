<template>
    <section>
        <!--按钮-添加客户-->
        <el-col :span="24">
            <el-button style="width: 100%;margin-bottom: 20px"  @click="handleAdd()"> 添加订单</el-button>
        </el-col>
        <!--表格-->
        <el-table :data="orderList">
            <el-table-column label="订单ID" prop="orderID"></el-table-column>
            <el-table-column label="合同金额" prop="contract_amount"></el-table-column>
            <el-table-column label="实付金额" prop="amount_payment"></el-table-column>
            <el-table-column label="付款形式" prop="fop"></el-table-column>
            <el-table-column label="需求ID" prop="requirement_ID"></el-table-column>
            <el-table-column label="状态" prop="state"></el-table-column>
            <el-table-column min-width="180" label="操作" >
                <template slot-scope="scope" >
                    <el-button size="small" @click="updateOrderById(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="danger" size="small" >修改</el-button>
                    <el-button type="danger" size="small" >对应的订单</el-button>
                </template>
            </el-table-column>


            <!--编辑dialog-->
            <el-dialog :visible.sync="updateOrderLoding">
                <el-table>
                    <el-table-column label="订单ID" ></el-table-column>
                </el-table>
            </el-dialog>
        </el-table>
    </section>
</template>

<style>

</style>

<script>
    export default {
        data() {
            return {
                orderList:[{
                    orderID:1,
                    contract_amount:"2000",
                    amount_payment:'3000',
                    fop:'转账',
                    requirement_ID:'1',
                    state:'结算中'

                }],
                updateOrderLoding:false
            }
        },
        components:{

        },
        methods:{
            updateOrderById:function (index,row) {
                 this.updateOrderLoding=true;
            }
        }
    }
</script>