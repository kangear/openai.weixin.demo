// 微信对话开放平台：开放接口
// 开放接口文档: https://developers.weixin.qq.com/doc/aispeech/INTERFACEDOCUMENT.html
// 使用方法：
// npm i njwt request --save
// node test.js

const nJwt = require('njwt');
const request = require('request')

// 将「微信对话开放平台」得到的信息填入
const APPID = 'xxx'
const TOKEN = 'xxx'
const EncodingAESKey = 'xxx'

var claims = {
 "username": "username",
 "msg": "你好"
}

var jwt = nJwt.create(claims, EncodingAESKey,"HS256");
var token = jwt.compact();

request.post('https://openai.weixin.qq.com/openapi/message/' + TOKEN, {
  json: {
    query: token
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(`statusCode: ${res.statusCode}`)
  console.log(body)
})

// 回复内容
/*
statusCode: 200
{ ans_node_id: 6666,
  ans_node_name: '小微闲聊',
  answer: '你好呀！',
  answer_open: 1,
  answer_type: 'text',
  article: '',
  bid_stat: 
   { curr_time: '20190917-13:30:11',
     err_msg: '',
     latest_time: '20190917-13:30:11',
     latest_valid: true,
     up_ret: 0 },
  confidence: 1,
  create_time: '1568699093572',
  dialog_status: 'COMPLETE',
  from_user_name: 'username',
  intent_confirm_status: '',
  list_options: false,
  msg: 
   [ { ans_node_id: 6666,
       ans_node_name: '小微闲聊',
       article: '',
       confidence: 1,
       content: '你好呀！',
       debug_info: '',
       list_options: false,
       msg_type: 'text',
       resp_title: '小薇兄你好',
       status: 'FAQ' } ],
  ret: 0,
  skill_id: '',
  skill_type: '',
  slot_info: [],
  slots_info: [],
  status: 'FAQ',
  title: '小薇兄你好',
  to_user_name: 'PEADwXxHbTzURD0Sj394WKldH03Bv8' }
*/

// 注：如果出现一直回复"你好，请问有什么可以帮您的"，可能是没有配置技能或者没有发布

