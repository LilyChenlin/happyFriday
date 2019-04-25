import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'
Vue.use(Vuex);

const state = {
    level: '第一周',
    itemNum: 1, // 第几题
    //scoreTips 分数提示..
    scoreTipsArr:[
        '你说，是不是把知识都还给小学老师了？',
        '差一点就及格啦，继续加油哦！',
        '不要嘚瑟还有进步的空间！',
        '你也太聪明啦，葡萄之家欢迎你！'
    ],
    itemDetail:[
        {
            "topic_name": "以下哪个属性不可以被继承",
            "topic_answer": [
                {
                    "answer_name": "font-family",
                    "topic_answer_id": 1,
                },
                {
                    "answer_name": "font-weight",
                    "topic_answer_id": 2,
                },
                {
                    "answer_name": "font-size",
                    "topic_answer_id": 3,
                },
                {
                    "answer_name": "vertical-align",
                    "topic_answer_id": 4,
                }
            ]
        },
        {
            "topic_name": "在javascript里，下列选项中不属于数组方法的是",
            "topic_answer": [
                {
                    "answer_name": "sort() ",
                    "topic_answer_id": 1,
                },
                {
                    "answer_name": "length() ",
                    "topic_answer_id": 2,
                },
                {
                    "answer_name": "concat() ",
                    "topic_answer_id": 3,
                },
                {
                    "answer_name": "reverse() ",
                    "topic_answer_id": 4,
                }
            ]
        },
        {
            "topic_name": " 下列哪一个选项可以用来检索被选定的选项的索引号",
            "topic_answer": [
                {
                    "answer_name": "disabled ",
                    "topic_answer_id": 1,
                },
                {
                    "answer_name": "selectedIndex ",
                    "topic_answer_id": 2,
                },
                {
                    "answer_name": "option",
                    "topic_answer_id": 3,
                },
                {
                    "answer_name": "multiple",
                    "topic_answer_id": 4,
                }
            ]
        },
        {
            "topic_name": "下列哪一个选项不属于document对象的方法?",
            "topic_answer": [
                {
                    "answer_name": "focus()",
                    "topic_answer_id": 1,
                },
                {
                    "answer_name": "getElementById() ",
                    "topic_answer_id": 2,
                },
                {
                    "answer_name": "getElementsByName()",
                    "topic_answer_id": 3,
                },
                {
                    "answer_name": "bgColor() ",
                    "topic_answer_id": 4,
                }
            ]
        }],
    answerid:[]
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})