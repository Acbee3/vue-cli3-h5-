import axios from 'axios'

//请求前
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 请求后
axios.interceptors.response.use((response) => {
  if (response.status !== 200) {
    return false;
  }
  return response
})


/*** 
 * 请求接口
***/
export const getHomeData = (params) => {
  return axios.get('http://localhost:8080/data.json', {params: params})
}