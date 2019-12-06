const express = require('express');
const router = express.Router();



router.post("/site/login", (req, res) => {
    let params = { "code": 200, "msg": "ok", "data": { "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtaWFva2VfY2FtcGFpZ25zX2FkbWluIiwianRpIjoiNWQ4ZDc2ZmY1M2Y4YzgzNDM0MyIsImlhdCI6MTU2OTU1MjEyNywibmJmIjoxNTY5NTUyMTI3LCJleHAiOjE1Njk2Mzg1MjcsIlVzZXJJZCI6MTM0NX0.GrjJxcp6xUrasqevIdimmuBLpDOSmp9aXh69LwFDrrU" } }
    res.json(params)
})

router.get("/site/user", (req, res) => {
    let params = { "code": 200, "msg": "ok", "data": { "roles": ["admin"], "name": "张西海", "avatar": "https://tests001.pnlyy.com/user/head/221d2a5057ca8dc4604ea356b547af92" } }
    res.json(params)
})

router.get("/wechat/get-menu", (req, res) => {
    let params = { 
        "code": 200, 
        "msg": "ok", 
        "data": [
            { 
                "name": "🔥限时免费", 
                "sub_button": [
                    { 
                        "type": "view", 
                        "name": "🔥限时免费体验", 
                        "url": "https://vippl-dev.peilian.com/userreg?utm_source=tab", 
                        "sub_button": [] 
                    }, { 
                        "type": "view", 
                        "name": "练琴小测试 - new", 
                        "url": "https://vippl-dev.peilian.com/operate/MusicTest/index?utm_source=activation_message&utm_campaign=new-regst-unappoint-regst24h-default", 
                        "sub_button": [] 
                    }, { 
                        "type": "view", 
                        "name": "🎄a.ha许愿树", 
                        "url": "https://vippl-dev.peilian.com/aha-animate", 
                        "sub_button": [] 
                    }, { 
                        "type": "view", 
                        "name": "🔥集字活动4期", 
                        "url": "https://vippl-dev.peilian.com/operate/jizi_sj/homepage?utm_campaign=&utm_source=&utm_term=invitation", 
                        "sub_button": [] 
                    }, { 
                        "type": "view", 
                        "name": "🔥免费领开学礼包", 
                        "url": "https://vippl.peilian.com/operate/pt/homepage?utm_source=pintuan4_vippl&utm_term=tab", 
                        "sub_button": [] 
                    }
                ] 
            }, { 
                "name": "福利中心", 
                "sub_button": [
                    { 
                        "type": "view", 
                        "name": "✨推荐有奖", 
                        "url": "https://vippl-dev.peilian.com/playbills", 
                        "sub_button": [] 
                    }, { 
                        "type": "miniprogram", 
                        "name": "我的推荐奖励", 
                        "url": "https://vippl-dev.peilian.com/getAward", 
                        "sub_button": [], 
                        "appid": "wx72c40f1b2b03e842", 
                        "pagepath": "pages/my/myReward/index" 
                    }, { 
                        "type": "view", 
                        "name": "卡券兑换", 
                        "url": "https://vippl-dev.peilian.com/operate/card-ticket", 
                        "sub_button": [] 
                    }, { 
                        "type": "view", 
                        "name": "亲属券", 
                        "url": "https://vippl-dev.peilian.com/operate/relative_coupon?utm_source=wechat_tab", 
                        "sub_button": [] 
                    }, { 
                        "type": "view", 
                        "name": "超级陪练课", 
                        "url": "https://vippl-dev.peilian.com/hippo/super/super-teacher", 
                        "sub_button": [] 
                    }
                ] 
            }, { 
                "name": "个人中心", 
                "sub_button": [
                    { 
                        "type": "miniprogram", 
                        "name": "约课&传乐谱", 
                        "url": "https://vippl-dev.peilian.com/wechat", 
                        "sub_button": [], 
                        "appid": "wx72c40f1b2b03e842",
                        "pagepath": "pages/index/index" 
                    }, { 
                        "type": "click", 
                        "name": "联系我们", 
                        "key": "PERSONAL_SALES", 
                        "sub_button": [] 
                    }, { 
                        "type": "view", 
                        "name": "我的订单", 
                        "url": "https://yii.peilian.com/product/order", 
                        "sub_button": [] 
                    }, { 
                        "type": "view", 
                        "name": "天才小琴童2.0", 
                        "url": "https://vippl-dev.peilian.com/vippof/poster?utm_source=gzh_tab", 
                        "sub_button": [] 
                    }
                ] 
            }
        ] 
    }
    res.json(params)
})




module.exports = router;