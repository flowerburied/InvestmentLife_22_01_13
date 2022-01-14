import axios from '../../utils/request.js'

let game = {
    // 用户登录
    UserLogin(data) {
        return axios({
            url: '/UserLogin',
            method: 'post',
            data: data
        })
    },
    // 骰子
    Rand(data) {
        return axios({
            url: '/Rand',
            method: 'post',
            data: data
        })
    },
    // 投资
    investment(data) {
        return axios({
            url: '/investment',
            method: 'post',
            data: data
        })
    },
    // 答题
    answer(data) {
        return axios({
            url: '/answer',
            method: 'post',
            data: data
        })
    },
    // 结算
    settlement(data) {
        return axios({
            url: '/settlement',
            method: 'post',
            data: data
        })
    },
}

export default game