﻿$axure.loadCurrentPage({
  "url":"创建租户.html",
  "generationDate":new Date(1476669354562.69),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"2d40a80313b24fddbe0a57187fb1fbad",
    "type":"Axure:Page",
    "name":"创建租户",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFF999999},
      "image":null,
      "imageHorizontalAlignment":"center",
      "imageVerticalAlignment":"center",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"Applied Font",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"1a4a847b0979409dae43b503e8137078",
          "label":"",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFF999999,
              "opacity":1},
            "location":{
              "x":190,
              "y":260},
            "size":{
              "width":490,
              "height":52}},
          "adaptiveStyles":{
}},
{
          "id":"ef318659000e495fa5b7f91190a36a58",
          "label":"",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":710,
              "y":266},
            "size":{
              "width":190,
              "height":40}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"Open 邮件激活 in Current Window",
                      "target":{
                        "targetType":"page",
                        "url":"邮件激活.html",
                        "includeVariables":true},
                      "linkType":"current"}]},
{
                  "description":"Case 2",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setPanelState",
                      "description":"Set 已存在提示 to 已存在",
                      "panelsToStates":[{
                          "panelPath":["136830a1e847428d9b1e6ae13b28d8cc"],
                          "stateInfo":{
                            "setStateType":"diagram",
                            "stateNumber":2,
                            "stateValue":{
                              "exprType":"stringLiteral",
                              "value":"1",
                              "stos":[]},
                            "loop":false,
                            "showWhenSet":false,
                            "options":{
                              "compress":false}}}]}]}]}},
          "tabbable":true},
{
          "id":"9edfffdf982b446b90eeda6551e6a642",
          "label":"",
          "type":"referenceDiagramObject",
          "styleType":"referenceDiagramObject",
          "visible":true,
          "style":{
            "location":{
              "x":10,
              "y":0}},
          "adaptiveStyles":{
},
          "masterId":"d4bd2a6cc6e24b23b8d6d38fcc34aed7"},
{
          "id":"136830a1e847428d9b1e6ae13b28d8cc",
          "label":"已存在提示",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":190,
              "y":342},
            "size":{
              "width":701,
              "height":50}},
          "adaptiveStyles":{
},
          "scrollbars":"none",
          "fitToContent":false,
          "propagate":false,
          "diagrams":[{
              "id":"d9453ce889974daeb453866fff8f023b",
              "label":"null",
              "type":"Axure:PanelDiagram",
              "objects":[]},
{
              "id":"df28bf14b2b9419e9e48bec329700ddc",
              "label":"已存在",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"82e7ea946b3946fe80a57c5fa71e68bc",
                  "label":"",
                  "parentDynamicPanel":"136830a1e847428d9b1e6ae13b28d8cc",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "fill":{
                      "fillType":"solid",
                      "color":0xFFFFFF},
                    "location":{
                      "x":10,
                      "y":0},
                    "size":{
                      "width":670,
                      "height":50}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"651e91bc702446f48d94d746375d4831",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"136830a1e847428d9b1e6ae13b28d8cc",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "fill":{
                          "fillType":"solid",
                          "color":0xFFFFFF},
                        "location":{
                          "x":10,
                          "y":0},
                        "size":{
                          "width":670,
                          "height":50}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"images/创建租户/u14.png"}},
{
                  "id":"2d2588b013c342df85bc25bf7e7850d1",
                  "label":"",
                  "parentDynamicPanel":"136830a1e847428d9b1e6ae13b28d8cc",
                  "type":"buttonShape",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFFFFFFF,
                      "opacity":1},
                    "location":{
                      "x":38,
                      "y":14},
                    "size":{
                      "width":160,
                      "height":16}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"bfe40fb6e71241b9bd68a5f50abf9521",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"136830a1e847428d9b1e6ae13b28d8cc",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "foreGroundFill":{
                          "fillType":"solid",
                          "color":0xFFFFFFFF,
                          "opacity":1},
                        "location":{
                          "x":38,
                          "y":14},
                        "size":{
                          "width":160,
                          "height":16}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"resources/images/transparent.gif"}}]},
{
              "id":"28820b6e1a4b4579b77e56278f657178",
              "label":"team存在",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"70669dddcb664bb1850a33d321b25104",
                  "label":"",
                  "parentDynamicPanel":"136830a1e847428d9b1e6ae13b28d8cc",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":10,
                      "y":0},
                    "size":{
                      "width":670,
                      "height":50}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"5357b58dc7d34fe1a2007670b99d66a4",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"136830a1e847428d9b1e6ae13b28d8cc",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "location":{
                          "x":10,
                          "y":0},
                        "size":{
                          "width":670,
                          "height":50}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"images/创建租户/u18.png"}},
{
                  "id":"bf897f8851d440b98cff105c642436fa",
                  "label":"",
                  "parentDynamicPanel":"136830a1e847428d9b1e6ae13b28d8cc",
                  "type":"buttonShape",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":38,
                      "y":14},
                    "size":{
                      "width":160,
                      "height":16}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"94092b6f48fe4609ac2623bf0a7504d9",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"136830a1e847428d9b1e6ae13b28d8cc",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "location":{
                          "x":38,
                          "y":14},
                        "size":{
                          "width":160,
                          "height":16}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"resources/images/transparent.gif"}}]}]}]}},
  "masters":{
    "d4bd2a6cc6e24b23b8d6d38fcc34aed7":{
      "packageId":"d4bd2a6cc6e24b23b8d6d38fcc34aed7",
      "type":"Axure:Master",
      "name":"公共头部-未登录",
      "notes":{
},
      "style":{
        "baseStyle":"627587b6038d43cca051c114ac41ad32",
        "pageAlignment":"near",
        "fill":{
          "fillType":"solid",
          "color":0xFFFFFFFF},
        "image":null,
        "imageHorizontalAlignment":"near",
        "imageVerticalAlignment":"near",
        "imageRepeat":"auto",
        "favicon":null,
        "sketchFactor":"0",
        "colorStyle":"appliedColor",
        "fontName":"Applied Font",
        "borderWidth":"0"},
      "adaptiveStyles":{
},
      "interactionMap":{
},
      "diagram":{
        "objects":[{
            "id":"0485693d3903489ba50d27ec5c2da9b8",
            "label":"",
            "type":"buttonShape",
            "styleType":"buttonShape",
            "visible":true,
            "style":{
              "fill":{
                "fillType":"solid",
                "color":0xFFBCBCBC},
              "location":{
                "x":10,
                "y":10},
              "size":{
                "width":1180,
                "height":50}},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"5c3b2396b92b4313b10cd10aa5f0a153",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "fill":{
                    "fillType":"solid",
                    "color":0xFFBCBCBC},
                  "location":{
                    "x":10,
                    "y":10},
                  "size":{
                    "width":1180,
                    "height":50}},
                "adaptiveStyles":{
}}],
            "images":{
              "normal~":"images/connector__/u3.png"}},
{
            "id":"6514f50dd3fb4774aa20904f345237fc",
            "label":"",
            "type":"buttonShape",
            "styleType":"h2",
            "visible":true,
            "style":{
              "location":{
                "x":34,
                "y":21},
              "size":{
                "width":145,
                "height":28}},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"fe7e681127c444418e4e3ba5d45d8b7e",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "location":{
                    "x":34,
                    "y":21},
                  "size":{
                    "width":145,
                    "height":28}},
                "adaptiveStyles":{
}}],
            "images":{
              "normal~":"resources/images/transparent.gif"}},
{
            "id":"ad14925c042b4db492a9dc53a684564b",
            "label":"",
            "type":"buttonShape",
            "styleType":"paragraph",
            "visible":true,
            "style":{
              "fontSize":"14px",
              "location":{
                "x":337,
                "y":27},
              "size":{
                "width":1,
                "height":16}},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"2ce2d4cce76a46e19ee0025bf6c804cd",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "fontSize":"14px",
                  "location":{
                    "x":337,
                    "y":27},
                  "size":{
                    "width":1,
                    "height":16}},
                "adaptiveStyles":{
}}],
            "images":{
              "normal~":"resources/images/transparent.gif"}},
{
            "id":"1fd4ec783504405199fab72366944f1c",
            "label":"",
            "type":"buttonShape",
            "styleType":"paragraph",
            "visible":true,
            "style":{
              "location":{
                "x":883,
                "y":27},
              "size":{
                "width":53,
                "height":16}},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"abb3a0d0af25457da4d7531349b26a56",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "location":{
                    "x":883,
                    "y":27},
                  "size":{
                    "width":53,
                    "height":16}},
                "adaptiveStyles":{
}}],
            "images":{
              "normal~":"resources/images/transparent.gif"}},
{
            "id":"113be51b57834160b0f9284e99716c61",
            "label":"",
            "type":"buttonShape",
            "styleType":"paragraph",
            "visible":true,
            "style":{
              "location":{
                "x":1092,
                "y":27},
              "size":{
                "width":53,
                "height":16}},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"1bacc409ead9433899b32306bde07311",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "location":{
                    "x":1092,
                    "y":27},
                  "size":{
                    "width":53,
                    "height":16}},
                "adaptiveStyles":{
}}],
            "images":{
              "normal~":"resources/images/transparent.gif"}}]}}},
  "objectPaths":{
    "1a4a847b0979409dae43b503e8137078":{
      "scriptId":"u0"},
    "ef318659000e495fa5b7f91190a36a58":{
      "scriptId":"u1"},
    "9edfffdf982b446b90eeda6551e6a642":{
      "scriptId":"u2",
      "0485693d3903489ba50d27ec5c2da9b8":{
        "scriptId":"u3"},
      "5c3b2396b92b4313b10cd10aa5f0a153":{
        "scriptId":"u4"},
      "6514f50dd3fb4774aa20904f345237fc":{
        "scriptId":"u5"},
      "fe7e681127c444418e4e3ba5d45d8b7e":{
        "scriptId":"u6"},
      "ad14925c042b4db492a9dc53a684564b":{
        "scriptId":"u7"},
      "2ce2d4cce76a46e19ee0025bf6c804cd":{
        "scriptId":"u8"},
      "1fd4ec783504405199fab72366944f1c":{
        "scriptId":"u9"},
      "abb3a0d0af25457da4d7531349b26a56":{
        "scriptId":"u10"},
      "113be51b57834160b0f9284e99716c61":{
        "scriptId":"u11"},
      "1bacc409ead9433899b32306bde07311":{
        "scriptId":"u12"}},
    "136830a1e847428d9b1e6ae13b28d8cc":{
      "scriptId":"u13"},
    "82e7ea946b3946fe80a57c5fa71e68bc":{
      "scriptId":"u14"},
    "651e91bc702446f48d94d746375d4831":{
      "scriptId":"u15"},
    "2d2588b013c342df85bc25bf7e7850d1":{
      "scriptId":"u16"},
    "bfe40fb6e71241b9bd68a5f50abf9521":{
      "scriptId":"u17"},
    "70669dddcb664bb1850a33d321b25104":{
      "scriptId":"u18"},
    "5357b58dc7d34fe1a2007670b99d66a4":{
      "scriptId":"u19"},
    "bf897f8851d440b98cff105c642436fa":{
      "scriptId":"u20"},
    "94092b6f48fe4609ac2623bf0a7504d9":{
      "scriptId":"u21"}}});