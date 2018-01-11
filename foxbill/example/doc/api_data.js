define({ "api": [
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
    "filename": "./doc/doc/main.js",
    "group": "D__xunlian_apidoc_foxbill_example_doc_doc_main_js",
    "groupTitle": "D__xunlian_apidoc_foxbill_example_doc_doc_main_js",
    "name": ""
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
    "group": "D__xunlian_apidoc_foxbill_example_doc_main_js",
    "groupTitle": "D__xunlian_apidoc_foxbill_example_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "获取用户信息",
    "name": "GetUser",
    "group": "User",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wxId",
            "description": "<p>用户微信ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>用户的姓.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>用户的名.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "应答成功:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\",\n   \"state\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户<code>id</code>未发现.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "应答错误:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "获取用户信息",
    "name": "GetUser",
    "group": "User",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wxId",
            "description": "<p>用户微信ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>用户的姓.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>用户的名.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "应答成功:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>用户<code>id</code>未发现.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "应答错误:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_apidoc.js",
    "groupTitle": "User"
  }
] });
