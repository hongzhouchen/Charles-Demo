<template>
    <section>
        <div id="box">
            <input type="search" id="search" placeholder="输入搜索名称"/><a href="javascript:;" class="btn" @click="childSearch()"><i
                class="el-icon-search"></i></a>
            <!-- <p v-show="myData.length==0">暂无数据...</p>-->
        </div>
    </section>
</template>

<style scoped lang="scss">
    #box {
        width: 450px;
        height: 36px;

        font-size: 14px;
        text-align: left;
        position: relative;
        font-family: Microsoft Yahei;
        border-radius: 0 4px 4px 0;
        #search {
            width: 400px;
            outline: none;
            height: 36px;
            font-size: 15px;
            padding-left: 10px;
            color: #97a8be;
        }
        a {
            width: 50px;
            height: 36px;
            overflow: hidden;
            text-align: center;
            line-height: 36px;
            text-decoration: none;
            .el-icon-search:before {
                font-size: 20px;
            }
        }

        i {
            margin-left: -3px;
            margin-top: -3px;
        }
        .btn {
            position: absolute;
            top: 0;
            right: 0;
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            outline: none;
            margin: 0;
            transition: .1s;
            font-weight: 500;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            padding: 12px 20px;
            font-size: 14px;
            border-radius: 0 4px 4px 0;
            color: #fff;
            background-color: #0067dd;
            border-color: #0067dd;
        }
    }

</style>

<script>
    export default {
        data() {
            return {
                sendObj:{
                    isClik: false
                }
            }
        },

        method: {
            childSearch: function () {
                this.sendObj.isClik=true;
                this.$emit('childSearch', this.sendObj)
            }
        }

    }
</script>