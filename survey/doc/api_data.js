define({ "api": [
  {
    "type": "post",
    "url": "/survey",
    "title": "发送用户填写的问卷信息",
    "version": "0.2.0",
    "name": "PostSurvey",
    "group": "API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "answer",
            "description": "<p>回答的问题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer.merNums",
            "description": "<p>1-有多少商户受理visa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer.atmNums",
            "description": "<p>2-有多少ATM...</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer.currencyNums",
            "description": "<p>3-货币种类数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer.cardNums",
            "description": "<p>4-活跃卡数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer.headquarters",
            "description": "<p>5-visa总部</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer.bankNums",
            "description": "<p>6-银行数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>就职的单位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>职务</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>微信头像url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"company\": \"东莞银行\",\n      \"level\": \"经理\",\n      \"name\": \"jackie.zheng\",\n      \"phone\": \"176xxxx4921\",\n      \"avatar\": \"https://xxxx\",\n      \"answer\": {\n\t\t\t\"merNums\": \"30万\",\n\t\t\t\"atmNums\": \"160万\",\n\t\t\t\"currencyNums\": \"55种\",\n\t\t\t\"cardNums\": \"31亿张\",\n\t\t\t\"headquarters\": \"纽约\", \n\t\t\t\"bankNums\": \"35\",\n\t\t },\t\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n仅返回status code",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n仅返回 status code",
          "type": "json"
        }
      ]
    },
    "filename": "./survey-api.js",
    "groupTitle": "API"
  },
  {
    "type": "post",
    "url": "/survey",
    "title": "发送用户填写的问卷信息",
    "version": "0.1.0",
    "name": "PostSurvey",
    "group": "API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "answer",
            "description": "<p>回答的问题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer.merNums",
            "description": "<p>1-有多少商户受理visa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer.atmNums",
            "description": "<p>2-有多少ATM...</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer.currencyNums",
            "description": "<p>3-货币种类数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer.cardNums",
            "description": "<p>4-活跃卡数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer.headquarters",
            "description": "<p>5-visa总部</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answer.bankNums",
            "description": "<p>6-银行数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>就职的单位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "level",
            "description": "<p>职务</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>联系方式</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n仅返回status code",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n仅返回 status code",
          "type": "json"
        }
      ]
    },
    "filename": "./_apidoc.js",
    "groupTitle": "API"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "D__xunlian_apidoc_survey_doc_main_js",
    "groupTitle": "D__xunlian_apidoc_survey_doc_main_js",
    "name": ""
  }
] });
