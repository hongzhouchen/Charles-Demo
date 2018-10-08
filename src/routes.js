import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import UserInfo from './views/userInfo/UserInfo.vue'
import BlogInfo from './views/blogInfo/BlogInfo.vue'
import  WorkBench from './views/workbench/WorkBench.vue'
import Retrieval from './views/retrieval/Retrieval.vue'
import Demand from './views/demandList/Demand.vue'
import OrderList from './views/orderList/OrderList.vue'
import PersonInfo from './views/personInfo/PersonInfo.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '首页',
        iconCls: 'el-icon-menu',//图标样式class
        leaf: true,//只有一个节点
        showLeft:true,
        children: [
            { path: '/work', component: WorkBench, name: '工作台' }
        ]
    },

    {
        path: '/',
        component: Home,
        name: '首页',
        iconCls: 'el-icon-message',//图标样式class
        leaf: true,//只有一个节点
        showLeft:true,
        children: [
            { path: '/userInfo', component: UserInfo, name: '客户信息' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '首页',
        iconCls: 'el-icon-message',//图标样式class
        leaf: true,//只有一个节点
        showLeft:true,
        children: [
            { path: '/blogInfo', component: BlogInfo, name: '博主信息' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '首页',
        iconCls: 'el-icon-message',//图标样式class
        leaf: true,//只有一个节点
        showLeft:true,
        children: [
            { path: '/needLIst', component: Demand, name: '需求列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '首页',
        iconCls: 'el-icon-message',//图标样式class
        leaf: true,//只有一个节点
        showLeft:true,
        children: [
            { path: '/orderList', component:OrderList , name: '订单列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '首页',
        iconCls: 'el-icon-message',//图标样式class
        leaf: true,//只有一个节点
        showLeft:true,
        children: [
            { path: '/retrieval', component: Retrieval, name: '小计检索' },
        ]
    },
    {
        path:'/',
        component:Home,
        name:"首页",
        leaf: true,//只有一个节点
        showLeft:false,
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/personInfo', component: PersonInfo, name: '个人信息' },
        ]
    },

    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;