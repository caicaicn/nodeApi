const express = require("express");
const router = express.Router();

// 登录
// router.get("/yunying/user/login", (req, res) => {
//     let obj = { 
//         "code": 200, 
//         "msg": "成功", 
//         "data": { 
//             "token": "token" 
//         } 
//     }
//     res.json(obj);
// })
let addI = 0;
// 获取用户信息
router.post("/vip-admin/sys/menu/systemMenu", (req, res) => {
    let params = {
        "code": 200,
        "msg": "ok",
        "data": {
            // "permsRoles": ["admin"], 
            "permsRoles": [], 
            "name": "张东海",
            "avatar": "https://tests001.pnlyy.com/user/head/221d2a5057ca8dc4604ea356b547af92",
            systemMenuList: [
                {
                    url: '',
                    name: '消息推送',
                    icon: 'el-icon-user-solid',
                    list: [
                        {
                            url: '/smsManger',
                            name: '短信管理',
                            icon: 'el-icon-chat-dot-square'
                        },
                        {
                            url: '/pushManger',
                            name: 'Push管理',
                            icon: 'el-icon-sell'
                        },
                    ]
                }
            ]
        }
    }
    res.json(params)
})

// 获取菜单栏
router.get("/yunying/user/menu", (req, res) => {
    addI = 0;
    let params = {
        "code": 200,
        "msg": "ok",
        "data": {
            menuList: [
                {
                    path: '',
                    meta: {
                        title: '消息推送',
                        icon: 'el-icon-user-solid'
                    },
                    children: [
                        {
                            path: '/smsManger',
                            meta: {
                                title: '短信管理',
                                icon: 'el-icon-chat-dot-square'
                            }
                        },
                        {
                            path: '/pushManger',
                            meta: {
                                title: 'Push管理',
                                icon: 'el-icon-sell'
                            }
                        },
                    ]
                }
            ]
        }
    }
    res.json(params)
})


// 获取剩余短信
router.get("/sms/overage", (req, res) => {
    let params = {
        "code": 200,
        "msg": "ok",
        "data": {
            "overage": 1010223
        }
    }
    res.json(params)
})

// 获取剩余短信
router.post("/sms/search-total", (req, res) => {
    let params = {
        "code": 200,
        "msg": "ok",
        "data": {
            "total": 100
        }
    }
    res.json(params)
})

// 获取短信任务查询列表
router.post("/sms/search-lists", (req, res) => {
    let list = [];
    let id = 0;
    let obj = {}
    addI ++;
    for (let i = (addI - 1) * 20; i < addI * 20; i++) {
        obj = {
            "id": i,
            "type": 10,
            "type_char": "营销类",
            "task_title": "任务名称",
            "task_content": "任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容",
            "status": 10,
            "status_char": "运营商审核中",
            "send_total": 30000,
            "send_reached": 29109,
            "send_clicked": 1200,
            "send_cliReaScale": "30.21%",
            "created_date": "2019-09-19 12:34:45",
            "created_user_id": "申请人id",
            "created_user_name": "申请人姓名",
            "review_user_name": "审核人" + i,
            "do_btns": {
                "stop_apply": 1,
                "cancel_push": 1,
                "rejection_reason": 1
            }
        }
        list.push(obj)
    }
    let params = {
        "code": 200,
        "msg": "ok",
        "data": {
            lists: list
        }
    }
    setTimeout(() => {
        res.json(params)
    }, 0);
})

// 获取短信任务详情
router.post("/sms/task-info", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": {
            "id": 12312,
            "created_date": "2019-09-19 12:34:45",
            "created_user_id": "申请人id",
            "created_user_name": "申请人姓名",
            "task_title": "任务名称",
            "task_content": "任务内容",
            "send_type": 10,
            "send_date": "2019-09-25 10:30:00",
            "status": 30,
            sms_content: "【VIP陪练】亲爱的家长，您好！祝贺你家的宝宝完成了第一节体验课。宝贝成绩非常棒！url.cn/5wTf9iD ",
            "status_char": "运营商审核中",
            "statistics": {
                "upload_total_num": 30000,
                "upload_tired_num": 1000,
                "black_num": 560,
                "send_scale": "83.5%",
                "send_num": 23000,
                "send_fail_num": 230,
                "send_tired_num": 400,
                "send_click_scale": "23.5%"
            },
            "logs": [
            {
                "do_user_name" : "操作人",
                "do_type_char" : "操作类型描述",
                "do_date" : "2019-09-19 12:34:45",
            },
            {
                "do_user_name" : "操作人",
                "do_type_char" : "操作类型描述",
                "do_date" : "2019-09-19 12:34:45",
            }
        ]
    }
}

    res.json(params)
})

// 终止申请
router.post("/sms/stop-apply", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        data: {
            status_desc: "中止申请",
            status: 20
        }
    }

    res.json(params)
})

// 任务取消发送   
router.post("/sms/cancel-push", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        data: {}
    }

    res.json(params)
})

// 任务驳回原因
router.post("/sms/rejection-reason", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        data: {
            "do_user_name": "驳回申请操作人",
            "do_content": "驳回原因内容",
            "do_date": "2019-09-19 12:34:45",
        }
    }

    res.json(params)
})

// 短信管理导出短信excel
router.post("/sms/export-lists", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        data: {
            fileAddr: "www.baidu.com"
        }
    }

    res.json(params)
})

// 任务详情excel导出
router.post("/sms/info-lists-export", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        data: {
        }
    }

    res.json(params)
})




// 短信模板

// 查询短信模板总数
router.post("/sms/tpl-total", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": {
            "total": 113
        }
    }

    res.json(params)
})
// 获取短信模板列表
router.post("/sms/tpl-lists", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": [
            {
                "tpl_id": 1121,
                "task_title": "任务名称",
                "tpl_content": "短信模板内容",
                "created_date": "2019-09-19 12:34:45"
            },
            {
                "tpl_id": 1323,
                "task_title": "任务名称2",
                "tpl_content": "短信模板内容2",
                "created_date": "2019-09-19 15:34:45"
            }
        ]
    }

    res.json(params)
})


// 新增短信
// 获取表格文件模板接口
router.post("/sms/table-tpl", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": {
            "xlsx": "http://www.qiniu.com/3423432432",
            "xls": "http://www.qiniu.com/76575634345",
            "csv": "http://www.qiniu.com/243534954534",
        }
    }

    res.json(params)
})
// 获取列表页消息类型筛选项
router.post("/sms/list-type-option", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": [
            {
                "type": 0,
                "value": "全部信息"
            },
            {
                "type": 10,
                "value": "营销类"
            },
            {
                "type": 20,
                "value": "通知类"
            },
        ]
    }

    res.json(params)
})
// 获取列表页发送状态选项 
router.post("/sms/list-status-option", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": [
            {
                "type": 0,
                "value": "全部状态"
            },
            {
                "type": 10,
                "value": "运营商审核中"
            },
            {
                "type": 14,
                "value": "运营商已驳回"
            },
            {
                "type": 20,
                "value": "待审核"
            },
            {
                "type": 24,
                "value": "审核不通过"
            },
            {
                "type": 30,
                "value": "待推送"
            },
            {
                "type": 34,
                "value": "推送中止"
            },
            {
                "type": 38,
                "value": "已推送"
            }
        ]
    }

    res.json(params)
})
// 添加短信发送任务接口 
router.post("/sms/task-add", (req, res) => {
    let params = {
        "code": 200,
        "msg": "系统错误",
        "data": {
            "task_id": "8787",
            "num_all": "1000",
            "num_black": "99",
            "num_tired": "1000",
            "check_status": 2
        }
    }

    setTimeout(() => {
        res.json(params)
    }, 3000);
})
// 短信发送任务发送人群类型确认接口
router.post("/sms/task-confirm-type", (req, res) => {
    let params = {
        "code": 200,
        "msg": "系统错误",
        "data": {
            "task_id": "8787"
        }
    }

    res.json(params)
})
// 获取短信表格明细接口
router.post("/sms/table-info", (req, res) => {
    let params = {
        "code": 200,
        "msg": "系统错误",
        "data": {
            "task_id": "8787"
        }
    }

    res.json(params)
})







// push管理相关  

// 首页

// 获取列表页接收端筛选项  
router.post("/push/list-receiving-option", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": [
            {
                "type": 10,
                "value": "家长端"
            },
            {
                "type": 20,
                "value": "学生端"
            }
        ]
    }

    res.json(params)
})

// 获取列表页发送状态选项 
router.post("/push/list-status-option", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": [
            {
                "type": 0,
                "value": "全部状态"
            },
            {
                "type": 10,
                "value": "待审核"
            },
            {
                "type": 14,
                "value": "审核不通过"
            },
            {
                "type": 20,
                "value": "待推送"
            },
            {
                "type": 24,
                "value": "推送中止"
            },
            {
                "type": 28,
                "value": "已推送"
            }
        ]
    }

    res.json(params)
})
// 查询push任务数 
router.post("/push/search-total", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": {
            "total": 142
        }
    }

    res.json(params)
})
// 查询push任务列表
router.post("/push/search-lists", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": {
            "lists": [
                {
                    "id": 1121,
                    "type_char": "家长端、学生端",
                    "task_title": "任务名称",
                    "task_content": "任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述",
                    "status": 10,
                    "status_char": "待审核",
                    "send_total": 30000,
                    "send_reached": 29109,
                    "send_clicked": 1200,
                    "send_cliReaScale": "30.21%",
                    "created_date": "2019-09-19 12:34:45",
                    "created_user_id": "申请人id",
                    "created_user_name": "申请人姓名",
                    "review_user_id": "审核人id",
                    "review_user_name": "审核人姓名",
                    "do_btns": {
                        "stop_apply": 1,
                        "cancel_push": 1,
                        "rejection_reason": 1
                    }
                }
            ]
        }
    }

    res.json(params)
})
// 任务中止申请
router.post("/push/stop-apply", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": {}
    }

    res.json(params)
})
// 任务取消发送
router.post("/push/cancel-push", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": {}
    }

    res.json(params)
})
// 任务驳回原因  
router.post("/push/rejection-reason", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": {
            "do_user_name": "驳回申请操作人",
            "do_content": "驳回原因内容",
            "do_date": "2019-09-19 12:34:45",
        }
    }

    res.json(params)
})
// 导出push任务列表
router.post("/push/export-lists", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": {}
    }

    res.json(params)
})
// 任务详情   
router.post("/push/task-info", (req, res) => {
    console.log('111');
    let params = {
        "code": 200,
        "msg": "成功",
        "data": {
            "id": 12312,
            "created_date": "2019-09-19 12:34:45",
            "created_user_id": "申请人id",
            "created_user_name": "申请人姓名",
            "type_char": "学生端、家长端",
            "task_title": "push任务名称",
            "task_content": "push任务内容",
            "push_title": "push标题",
            "push_content": "push内容",
            "send_type": 10,
            "send_date": "2019-09-25 10:30:00",
            "status": 10,
            "status_char": "运营商审核中",
            "is_to_parent_login": 1,
            "to_parent_login_link_id": 23,
            "to_parent_login_link_name": "首页",
            "to_parent_login_link_url": "to_parent_login_link_url",

            "is_to_parent_visitor": 1,
            "to_parent_login_link_id": 23,
            "to_parent_visitor_link_name": "首页",
            "to_parent_visitor_link_url": "to_parent_login_link_url",

            "is_to_parent_assign": 1,
            "to_parent_login_link_id": 23,
            "to_parent_assign_link_name": "首页",
            "to_parent_assign_link_url": "to_parent_login_link_url",

            "is_to_student_login": 1,
            "to_parent_login_link_id": 23,
            "to_student_login_link_name": "首页",
            "to_student_login_link_url": "to_parent_login_link_url",

            "is_to_student_assign": 1,
            "to_parent_login_link_id": 23,
            "to_student_assign_link_name": "首页",
            "to_student_assign_link_url": "to_parent_login_link_url",
            
            "statistics": {
                "upload_total_num": 30000,
                "upload_tired_num": 1000,
                "black_num": 560,
                "send_scale": "83.5%",
                "send_num": 23000,
                "send_fail_num": 230,
                "send_tired_num": 400,
                "send_click_scale": "23.5%"
            },
            "logs": [
                {
                    "do_user_name": "操作人",
                    "do_type_char": "操作类型描述",
                    "do_date": "2019-09-19 12:34:45",
                },
                {
                    "do_user_name": "操作人",
                    "do_type_char": "操作类型描述",
                    "do_date": "2019-09-19 12:34:45",
                },
                {
                    "do_user_name": "操作人",
                    "do_type_char": "操作类型描述",
                    "do_date": "2019-09-19 12:34:45",
                },
            ]
        }
    }

    res.json(params)
})
// 任务详情名单导出
router.post("/push/info-lists-export", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": {}
    }

    res.json(params)
})



// PUSH任务添加相关接口


// 查询常用链接列表
router.post("/push/link-lists", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": {
            "parent": {
                "login": [
                    {
                        "id": 101,
                        "type": 10,
                        "type_char": "家长端",
                        "role": 30,
                        "role_char": "登录用户",
                        "name": "首页",
                        "pagetype": 10,
                        "pagetype_char": "Native",
                        "linktype": 0,
                        "linktype_char": "首页",
                        "linkurl": 1,
                        "sort_num": 64
                    },
                    {
                        "id": 123,
                        "type": 10,
                        "type_char": "家长端",
                        "role": 30,
                        "role_char": "登录用户",
                        "name": "活动推广",
                        "pagetype": 20,
                        "pagetype_char": "H5",
                        "linktype": 2,
                        "linktype_char": "活动推广",
                        "linkurl": 0,
                        "sort_num": 65
                    },
                ],
                "visitor": [
                    {
                        "id": 101,
                        "type": 10,
                        "type_char": "家长端",
                        "role": 30,
                        "role_char": "登录用户",
                        "name": "首页",
                        "pagetype": 10,
                        "pagetype_char": "Native",
                        "linktype": 0,
                        "linktype_char": "首页",
                        "linkurl": 1,
                        "sort_num": 64
                    },
                    {
                        "id": 123,
                        "type": 10,
                        "type_char": "家长端",
                        "role": 30,
                        "role_char": "登录用户",
                        "name": "活动推广",
                        "pagetype": 20,
                        "pagetype_char": "H5",
                        "linktype": 2,
                        "linktype_char": "活动推广",
                        "linkurl": 0,
                        "sort_num": 65
                    },
                ],
                "assign": [
                    {
                        "id": 101,
                        "type": 10,
                        "type_char": "家长端",
                        "role": 30,
                        "role_char": "登录用户",
                        "name": "首页",
                        "pagetype": 10,
                        "pagetype_char": "Native",
                        "linktype": 0,
                        "linktype_char": "首页",
                        "linkurl": 1,
                        "sort_num": 64
                    },
                    {
                        "id": 123,
                        "type": 10,
                        "type_char": "家长端",
                        "role": 30,
                        "role_char": "登录用户",
                        "name": "活动推广",
                        "pagetype": 20,
                        "pagetype_char": "H5",
                        "linktype": 2,
                        "linktype_char": "活动推广",
                        "linkurl": 0,
                        "sort_num": 65
                    },
                ],
            },
            "student": {
                "all": [
                    {
                        "id": 101,
                        "type": 10,
                        "type_char": "家长端",
                        "role": 30,
                        "role_char": "登录用户",
                        "name": "首页",
                        "pagetype": 10,
                        "pagetype_char": "Native",
                        "linktype": 0,
                        "linktype_char": "首页",
                        "linkurl": 1,
                        "sort_num": 64
                    },
                    {
                        "id": 123,
                        "type": 10,
                        "type_char": "家长端",
                        "role": 30,
                        "role_char": "登录用户",
                        "name": "活动推广",
                        "pagetype": 20,
                        "pagetype_char": "H5",
                        "linktype": 2,
                        "linktype_char": "活动推广",
                        "linkurl": 0,
                        "sort_num": 65
                    },
                ],
                "assign": [
                    {
                        "id": 101,
                        "type": 10,
                        "type_char": "家长端",
                        "role": 30,
                        "role_char": "登录用户",
                        "name": "首页",
                        "pagetype": 10,
                        "pagetype_char": "Native",
                        "linktype": 0,
                        "linktype_char": "首页",
                        "linkurl": 1,
                        "sort_num": 64
                    },
                    {
                        "id": 123,
                        "type": 10,
                        "type_char": "家长端",
                        "role": 30,
                        "role_char": "登录用户",
                        "name": "活动推广",
                        "pagetype": 20,
                        "pagetype_char": "H5",
                        "linktype": 2,
                        "linktype_char": "活动推广",
                        "linkurl": 0,
                        "sort_num": 65
                    },
                ]
            }
        }
    }

    res.json(params)
})
// 获取表格文件模板接口
router.post("/push/table-tpl", (req, res) => {
    let params = {
        "code": 200,
        "msg": "成功",
        "data": {
            "xlsx": "http://www.qiniu.com/3423432432",
            "xls": "http://www.qiniu.com/76575634345",
            "chedan": "http://www.qiniu.com/243534954534",
            "csv": "http://www.qiniu.com/243534954534",
        }
    }

    res.json(params)
})

//  添加表格文件接口
router.post("/push/task-add", (req, res) => {
    let params = {
        "code": 200,
        "msg": "系统错误",
        "data": {
            "task_id": "8787",
            "num_all": "1000",
            "num_black": "99",
            "num_tired": "1000",
            "check_status": 2
        }
    }
    setTimeout(() => {
        res.json(params)
    }, 3000);
    
})
//   获取push表格明细接口   
router.post("/push/table-info", (req, res) => {
    let params = {
        "code": 200,
        "msg": "系统错误",
        "data": {}
    }

    res.json(params)
})
//   任务发送人群类型确认接口   
router.post("/push/task-confirm-type", (req, res) => {
    let params = {
        "code": 200,
        "msg": "系统错误",
        "data": {
            "task_id": "8787"
        }
    }

    res.json(params)
})

//   push试发送接口   
router.post("/push/try-add", (req, res) => {
    let params = {
        "code": 200,
        "msg": "系统错误",
        "data": {
            "task_id": "8787"
        }
    }

    res.json(params)
})


module.exports = router;