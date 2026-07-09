import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE || 'https://new-n8gt.onrender.com/api'

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
 */
export function submitContact(data) {
  return api.post('/contact/', data)
}

// ===== 产品 API =====
/** 获取产品分类列表 */
export function getProductCategories() {
  return api.get('/product-categories/')
}
/** 获取产品列表，支持 ?category=slug & ?recommended=1 */
export function getProducts(params = {}) {
  return api.get('/products/', { params })
}

// ===== 案例 API =====
/** 获取案例分类列表 */
export function getCaseCategories() {
  return api.get('/case-categories/')
}
/** 获取案例列表，支持 ?category=slug & ?recommended=1 */
export function getCases(params = {}) {
  return api.get('/cases/', { params })
}

// ===== 新闻 API =====
/** 获取新闻分类列表 */
export function getNewsCategories() {
  return api.get('/news-categories/')
}
/** 获取新闻列表，支持 ?category=slug & ?top=1 */
export function getNews(params = {}) {
  return api.get('/news/', { params })
}

// ===== 企业概况 API =====
/** 获取企业概况（公司信息 + 发展历程 + 荣誉 + 团队） */
export function getAbout() {
  return api.get('/about/')
}

export default api
