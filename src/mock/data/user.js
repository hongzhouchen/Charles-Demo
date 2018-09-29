/**
 * Author:Charles
 * Date:2018/0929
 * 
 */

import Mock from 'mockjs';

const LoginUsers = [
    {
        id: 1,
        username: 'admin',
        password: '123456',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        name: '追风少年'
    }
];

const Users = [];


/*模拟生成用户数据....*/
for (let i = 0; i < 2; i++) {
    Users.push(Mock.mock({
        id: Mock.Random.guid(),
        companyname: Mock.Random.cname(),
        type: Mock.Random.cname(),
        telperson:Mock.Random.cname(),
        post: Mock.Random.cname(),
        status: Mock.Random.cname(),
        phone:Mock.Random.cname(),
        qq:Mock.Random.cname(),
        wx:Mock.Random.cname()
    }));
}

export {LoginUsers, Users};
