微信对话开放平台: https://openai.weixin.qq.com


# 开放接口
对应官方文档链接：https://developers.weixin.qq.com/doc/aispeech/INTERFACEDOCUMENT.html

官方文档写得比较含蓄，很多没有实验通过。比如：
1. 给出了`https://www.jsonwebtoken.io/`，但是并不明白从这个网站是怎么计算signedData
2. curl命令也多少有点问题；
这里一步步来操作

关于生成singedData，正确操作方法如下
![Image text](./JSON_Web_Token_JWT.png)


关于使用curl测试，官方给出的操作例子如下
```
curl -x -d {query: signedData} https://openai.weixin.qq.com/openapi/message/{TOKEN}
```

实际操作是这样的：
```
curl -X POST -d "query=signedData" https://openai.weixin.qq.com/openapi/message/{TOKEN}
```

nodejs目录下有完整的例子。
