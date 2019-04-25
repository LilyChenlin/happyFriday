const INITIALZE_DATA = 'INITIALZE_DATA'
const REMEMBER_ANSWER = 'REMEMBER_ANSWER'
const ADD_ITEMNUM = 'ADD_ITEMNUM'
export default{
/*
初始化信息
*/
[INITIALZE_DATA] (state){
    state.itemNum = 1,
    state.answerid = []
},

/**
 * 记录答案
 */
[REMEMBER_ANSWER](state,id){
    state.answerid.push(id)
},

// 点击进入下一题
[ADD_ITEMNUM](state,num){
    state.itemNum += num;  
}

}
