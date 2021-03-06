import axios from "axios";
import qs from 'qs'

// 创建实例first
const service = axios.create({
    baseURL: 'http://47.100.50.44:8080',
    timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});


// 添加请求拦截器
service.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    config.data = qs.stringify(config.data)
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response.data;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
})

export default service;