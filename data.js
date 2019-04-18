module.exports = {
    'RedPacket/getRedPacketDetail': {
        "recordList": [{
            "img": "@img('40x40','#28B4F0')",
            "name": '测试要10个字测试要'
        },{
            "img": "@img('40x40','#28B4F0')",
            "name": '测试要10个字测试要'
        },{
            "img": "@img('40x40','#28B4F0')",
            "name": '测试'
        }/*,{
            "img": "@img('40x40','#28B4F0')",
            "name|10-30": 1
        }*/],
        "isGet|1": [0,0],
        showType:0,

        "stepsInfo": {
            "currSteps": 200,
            "stepsLog": [
                {
                    "name|10-30": 1,
                    "img": "@img('40x40','#28B4F0')",
                    "stepValue": 20
                }
            ]
        },
        "roleInfo": {
            "partitionName": "微信182区-轻云闭月",
            "roleName": "&raquo;"
        },
        "shareInfo": {
            "shareMsg": "@string",
            "shareImg": "@img('750x120', '#4A7BF7', '分享啊')"
        },
        'myShared|1': [0,1]
    },
    'User/transOpenid': {
        "wxOpenId|20-99": 1
    },
    'User/getUserSign': {
        "sSign": '49F9ABFDAF9A944B3603DD2E39D93A53',
        "timestamp": '1552644444',
        "exTime": '1800',
    },
    'RedPacket/openRedPacket': {
        "lotteryName|20-99": 1,
        "lotteryImage": "@img('200x200','#28B4F0')",
        "lotteryType|1": [1,1],
        shareOpenid:'test',
        getDay:'test',
        redPacketListId:'test',
        token:'test',
    },
    'RedPacket/receivedPrize': {
        pageTotal:6,
        giftList:[{
            "iPackageName": "测试要10个字测试要",
            "iPackageId": "@img('200x200','#28B4F0')",
            "isReal|1": [0,0]
        },{
            "iPackageName": "@String",
            "iPackageId": "@img('200x200','#28B4F0')",
            "isReal|1": [0,0]
        },{
            "iPackageName": "@String",
            "iPackageId": "@img('200x200','#28B4F0')",
            "isReal|1": [0,0]
        },{
            "iPackageName": "@String",
            "iPackageId": "@img('200x200','#28B4F0')",
            "isReal|1": [0,0]
        },{
            "iPackageName": "@String",
            "iPackageId": "@img('200x200','#28B4F0')",
            "isReal|1": [0,0]
        },{
            "iPackageName": "@String",
            "iPackageId": "@img('200x200','#28B4F0')",
            "isReal|1": [0,0]
        },{
            "iPackageName": "@String",
            "iPackageId": "@img('200x200','#28B4F0')",
            "isReal|1": [0,1]
        },{
            "iPackageName": "@String",
            "iPackageId": "@img('200x200','#28B4F0')",
            "isReal|1": [0,1]
        },{
            "iPackageName": "@String",
            "iPackageId": "@img('200x200','#28B4F0')",
            "isReal|1": [0,1]
        },{
            "iPackageName": "@String",
            "iPackageId": "@img('200x200','#28B4F0')",
            "isReal|1": [0,1]
        },{
            "iPackageName": "@String",
            "iPackageId": "@img('200x200','#28B4F0')",
            "isReal|1": [0,1]
        },{
            "iPackageName": "@String",
            "iPackageId": "@img('200x200','#28B4F0')",
            "isReal|1": [0,1]
        },{
            "iPackageName": "@String",
            "iPackageId": "@img('200x200','#28B4F0')",
            "isReal|1": [0,1]
        }]
    },
    'RedPacket/openStepsRedPacket': {
        "lotteryName|20-99": 1,
        "lotteryImage": "@img('200x200','#28B4F0')"
    },
    'User/saveAddress': {},
    'RedPacketConfig/shareinfo': {
        "shareMsg": "@string",
        "shareImg": "@img('750x120', '#4A7BF7', '分享啊')"
    },
    'RedPacket/stepPrize': {
        "iRet": "0",
        "sMsg": "",
        "jData|3": [
          {
            "id": "101",
            "name": "红包11",
            "img": "@img('128x128','#28B4F0','英雄')",
            "shareMsg": "afgadgfg",
            "shareImg": "dafgadfgdfg",
            "status": 0
          }
        ],
        "sSerial": "AMS-ULINK-0115141813-L4QP8R-155589-830109"
      },
    'RedPacketConfig/redPacketItem': {
        "redPacketListId": 1010001,
        "mainImg": "@img('1242x779','#65435D','Banner')",
        "ruleText": "@cparagraph(300)",
        "showPrizes|10": [
            {
                "name": "测试要10个字测试要",
                "img": "@img('128x128','#28B4F0','英雄')"
            }
        ],
        "stepsCfg": [
            {
                "stepValue": 10,
                "name": '测试要10个字测试要',
                "img": "@img('40x40','#28B4F0')"
            },{
                "stepValue": 20,
                "name": '测试要10个字测试要',
                "img": "@img('40x40','#28B4F0')"
            },{
                "stepValue": 50,
                "name": '测试要10个字测试要',
                "img": "@img('40x40','#28B4F0')"
            }
        ]
    },
    'RedPacketConfig/redPacketList':{
    "list|2": [
      {
        "redPacketId": 101,
        "redPacketListId": 1010001,
        "redPacketListName": "1010001活动名称",
        "beginTime": "2019-01-11 23:00:00",
        "endTime": "2018-10-16 23:00:00",
        "resetType": 1,
        "listImg": 123,
        "mainImg": 123,
        "ruleText": "aefqt"
      }
    ],
    "activeInfo": {
      "status": 1,
      "redPacketListId": 1010002
    },
    "tokenInfo": {
      "shareTime": 1234567891,
      "redPacketId": "101",
      "gameOpenid": "39D2EB931753D7B6A6287D0A65BC8012",
      "token": "39D2EB931753D7B6A6287D0A65BC8012"
    }
  },
    //  竞猜
    "Help/info": {
        "shareTime": "1554799032",
        "isGet|1": [0,1],
        "helpFriend|2": [
            {
                "name": "@string",
                "headImg": "@img('40x40','#28B4F0')"
            }
        ],
        "isMyself": true,
        "hasHelp": false,
        todayHelpCount:2
    },
    //  主态领取奖励
    "RedPacket/openMyPrize": '恭喜你获得xxx竞猜币',
    //  客态领取奖励
    "RedPacket/openHelpPrize": '恭喜你获得xxx竞猜币',
    //  助力
    "Help/help": '恭喜你获得xxx竞猜币',

//    金币
    "Camp/list": [
        {
            "id": "180368744",
            "title": "19日更新：姜子牙全面调整，老夫子或成T0克狄仁杰虞姬伽罗",
            "time": "03/20"
        },
        {
            "id": "180368744",
            "title": "20日更新：姜子牙全面调整，老夫子或成T0克狄仁杰虞姬伽罗",
            "time": "03/20"
        },
        {
            "id": "180368744",
            "title": "19日更新：姜子牙全面调整，老夫子或成T0克狄仁杰虞姬伽罗",
            "time": "03/20"
        }
    ],

    "/demo/getTree":[
        {
            pId:null,
            id:1,
            name:'根节点',
            child:[{
                pId:1,
                id:11,
                name:'节点1',
                child:[{
                    active: true,
                    pId:11,
                    id:111,
                    name:'节点11',
                    child:[{
                        pId:111,
                        id:1111,
                        name:'节点11'
                    },{
                        id:1112,
                        pId:111,
                        name:'节点12'
                    }]
                },{
                    id:112,
                    pId:11,
                    name:'节点12',
                    child:[{
                        pId:112,
                        id:1121,
                        name:'节点11'
                    },{
                        id:1122,
                        pId:112,
                        name:'节点12'
                    }]
                }]
            },{
                id:12,
                pId:1,
                name:'节点2'
            }]
        }
    ],
    "/demo/getList":{
        'data|20': [
            {
                "name": "@string",
                "headImg": "@img('40x40','#28B4F0')"
            }
        ]
    }




}