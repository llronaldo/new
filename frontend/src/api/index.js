import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE || 'https://new-production-ba27.up.railway.app/api'

const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

// 请求拦截器
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
)

// 响应拦截器
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  },
)

// ===== 联系表单 API =====
/**
 * 提交联系表单
 * @param {Object} data - 表单数据
 * @param {string} data.contact_name - 联系人
 * @param {string} data.contact_phone - 联系电话
 * @param {string} data.company - 公司/品牌
 * @param {string} data.project_type - 项目类型
 * @param {string} data.quantity - 预计数量
 * @param {string} data.city - 交付城市
 * @param {string} data.budget - 预算区间
 * @param {string} data.message - 需求说明
 */
export function submitContact(data) {
  return api.post('/contact/', data)
}

export default api
