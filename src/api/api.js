/**
 * Author:Chalers
 * Ddate:2018/09/29
 * 版权所有，违者必究
 */

import axios from 'axios';

let base = '';
/*login*/
export const requestLogin = params => {
    return axios.post(`${base}/login`, params).then(res => res.data);
};
/*获取用户列表*/
export const getUserList = params => {
    return axios.get(`${base}/user/list`, {params: params});
};
/*分页*/
export const getUserListPage = params => {
    return axios.get(`${base}/user/listpage`, {params: params});
};
/*删除用户*/
export const removeUser = params => {
    return axios.get(`${base}/user/remove`, {params: params});
};
/*批量删除*/
export const batchRemoveUser = params => {
    return axios.get(`${base}/user/batchremove`, {params: params});
};
/*编辑用户*/
export const editUser = params => {
    return axios.get(`${base}/user/edit`, {params: params});
};
/*添加用户*/
export const addUser = params => {
    return axios.get(`${base}/user/add`, {params: params});
};

/*查看详情(小计)*/
//export const  lookInfoById=params=>{return axios.get(`${base}/user/lookInfo`,{params:params})}
export const lookInfoById = params => {
    return {
        "data": [
            {
            id: 1,
            time: "2018-09-27",
            tool: "telphone",
            content: "钓凯子",
            returnMsg: "不好钓啊",
            isAgin: "是",
            nextFollowTime: "2018-09-30"
        }]
        //id、 联系时间、通讯工具、联系内容、客户反馈、是否需要二次跟进、下次跟进时间

    }
}
/*添加小计*/