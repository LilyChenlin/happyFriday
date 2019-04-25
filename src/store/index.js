import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    level: '第一周',
    itemNum: 1, // 第几题
    itemDetail:[
        {
            "topic_name": "题目一",
            "topic_answer": [
                {
                    "answer_name": "答案aaaa",
                    "topic_answer_id": 1,
                },
                {
                    "answer_name": "答案bbbb",
                    "topic_answer_id": 2,
                },
                {
                    "answer_name": "答案cccc",
                    "topic_answer_id": 3,
                },
                {
                    "answer_name": "答案dddd",
                    "topic_answer_id": 4,
                }
            ]
        },
        {
            "topic_name": "题目二",
            "topic_answer": [
                {
                    "answer_name": "答案A",
                    "topic_answer_id": 1,
                },
                {
                    "answer_name": "答案B",
                    "topic_answer_id": 2,
                },
                {
                    "answer_name": "答案C",
                    "topic_answer_id": 3,
                },
                {
                    "answer_name": "答案D",
                    "topic_answer_id": 4,
                }
            ]
        },
        {
            "topic_name": "题目三",
            "topic_answer": [
                {
                    "answer_name": "测试aaaa",
                    "topic_answer_id": 1,
                },
                {
                    "answer_name": "测试bbbb",
                    "topic_answer_id": 1,
                },
                {
                    "answer_name": "测试cccc",
                    "topic_answer_id": 1,
                },
                {
                    "answer_name": "测试dddd",
                    "topic_answer_id": 1,
                }
            ]
        },
        {
            "topic_name": "题目一",
            "topic_answer": [
                {
                    "answer_name": "aaaa",
                    "topic_answer_id": 1,
                },
                {
                    "answer_name": "bbbb",
                    "topic_answer_id": 1,
                },
                {
                    "answer_name": "cccc",
                    "topic_answer_id": 1,
                },
                {
                    "answer_name": "dddd",
                    "topic_answer_id": 1,
                }
            ]
        }
    ],
    answerid:[]
}

export default new Vuex.Store({
    state
})