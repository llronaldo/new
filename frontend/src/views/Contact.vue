<template>
  <div class="page-contact">
    <section class="page-banner">
      <div class="banner-inner">
        <p class="banner-eyebrow">Contact Us</p>
        <h1>联系我们</h1>
        <p class="banner-sub">欢迎预约展厅参观，感受实物质感</p>
      </div>
    </section>

    <!-- 联系信息 + 表单 -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- 左侧信息 -->
          <div class="contact-info">
            <div class="info-block">
              <h3>总部展厅</h3>
              <div class="info-row">
                <div class="info-item">
                  <p class="info-label">地址</p>
                  <p>佛山市顺德区乐从镇<br/>家居大道 288 号<br/>臻品家居总部展厅 · 5F</p>
                </div>
                <div class="info-item">
                  <p class="info-label">营业时间</p>
                  <p>每日 9:00 – 18:00<br/>节假日正常开放</p>
                </div>
              </div>
              <div class="info-row">
                <div class="info-item">
                  <p class="info-label">联系电话</p>
                  <p>400-168-8888</p>
                </div>
                <div class="info-item">
                  <p class="info-label">电子邮箱</p>
                  <p>info@zhenpin.com</p>
                </div>
              </div>
            </div>

            <div class="info-block">
              <h3>生产基地</h3>
              <div class="info-row">
                <div class="info-item">
                  <p class="info-label">工厂地址</p>
                  <p>佛山市南海区九江镇<br/>工业大道 66 号<br/>臻品家居生产基地 · 2 万㎡</p>
                </div>
                <div class="info-item">
                  <p class="info-label">参观预约</p>
                  <p>工厂参观需提前 2 天预约<br/>由专人陪同讲解生产全流程</p>
                </div>
              </div>
            </div>

            <div class="info-block">
              <h3>商务合作</h3>
              <p class="info-text">设计师 / 酒店集团 / 地产项目 / 海外采购等商务合作：</p>
              <p class="info-email">business@zhenpin.com</p>
              <p class="info-text">招聘相关：hr@zhenpin.com</p>
            </div>
          </div>

          <!-- 右侧表单 -->
          <div class="contact-form-wrapper">
            <h3>在线询价 / 预约</h3>
            <p class="form-sub">填写信息后，专属顾问将在 24 小时内与您联系</p>
            <form @submit.prevent="handleSubmit">
              <div class="fm-row">
                <div class="fm-group" :class="{ 'has-error': errors.contact_name }">
                  <label class="fm-label">联系人 *</label>
                  <input v-model="form.contact_name" placeholder="您的姓名" class="fm-input"/>
                  <p v-if="errors.contact_name" class="fm-error">{{ errors.contact_name }}</p>
                </div>
                <div class="fm-group" :class="{ 'has-error': errors.contact_phone }">
                  <label class="fm-label">联系电话 *</label>
                  <input v-model="form.contact_phone" placeholder="手机号码" class="fm-input"/>
                  <p v-if="errors.contact_phone" class="fm-error">{{ errors.contact_phone }}</p>
                </div>
              </div>

              <div class="fm-row">
                <div class="fm-group" :class="{ 'has-error': errors.company }">
                  <label class="fm-label">公司 / 品牌</label>
                  <input v-model="form.company" placeholder="您的公司或品牌名称" class="fm-input"/>
                  <p v-if="errors.company" class="fm-error">{{ errors.company }}</p>
                </div>
                <div class="fm-group">
                  <label class="fm-label">项目类型</label>
                  <select v-model="form.project_type" class="fm-input">
                    <option value="">请选择</option>
                    <option>酒店工程</option><option>别墅私宅</option><option>商业空间</option><option>办公家具</option><option>地产精装</option><option>其他</option>
                  </select>
                </div>
              </div>

              <div class="fm-row fm-row-3">
                <div class="fm-group">
                  <label class="fm-label">预计数量</label>
                  <select v-model="form.quantity" class="fm-input">
                    <option value="">请选择</option>
                    <option>10 件以内</option><option>10–50 件</option><option>50–200 件</option><option>200–500 件</option><option>500 件以上</option>
                  </select>
                </div>
                <div class="fm-group" :class="{ 'has-error': errors.city }">
                  <label class="fm-label">交付城市</label>
                  <input v-model="form.city" placeholder="送货地址城市" class="fm-input"/>
                  <p v-if="errors.city" class="fm-error">{{ errors.city }}</p>
                </div>
                <div class="fm-group">
                  <label class="fm-label">预算区间</label>
                  <select v-model="form.budget" class="fm-input">
                    <option value="">请选择</option>
                    <option>5 万以下</option><option>5–20 万</option><option>20–50 万</option><option>50–100 万</option><option>100–500 万</option><option>500 万以上</option>
                  </select>
                </div>
              </div>

              <div class="fm-group fm-full-group">
                <label class="fm-label">需求说明</label>
                <textarea v-model="form.message" placeholder="请描述您的需求：空间类型、风格偏好、特殊要求等，越详细越好" rows="5" class="fm-input fm-textarea"></textarea>
              </div>

              <button type="submit" class="fm-submit" :disabled="submitting">{{ submitting ? '提交中...' : '提交询价' }}</button>
              <p v-if="submitStatus === 'success'" class="submit-msg success">&#10003; 提交成功！专属顾问将在 24 小时内与您联系。</p>
              <p v-if="submitStatus === 'error'" class="submit-msg error">{{ errorMessage || '提交失败，请稍后重试或直接致电 400-168-8888。' }}</p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 地图示意 -->
    <section class="map-section">
      <div class="map-placeholder">
        <div class="map-content">
          <span class="map-pin">&#9678;</span>
          <p class="map-addr">佛山市顺德区乐从镇家居大道 288 号 · 臻品家居总部</p>
          <p class="map-sub">广佛线 · 世纪莲站 B 出口，打车约 15 分钟<br/>广州南站驾车约 40 分钟 · 白云机场驾车约 70 分钟</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { submitContact } from '../api/index.js'

const form = reactive({
  contact_name: '',
  contact_phone: '',
  company: '',
  project_type: '',
  quantity: '',
  city: '',
  budget: '',
  message: '',
})

const errors = reactive({})
const submitting = ref(false)
const submitStatus = ref('')   // 'success' | 'error'
const errorMessage = ref('')

/** 校验规则 */
function validate() {
  // 清空之前的错误
  Object.keys(errors).forEach((k) => delete errors[k])

  // 1) 联系人 — 必填, 2-20 个字符
  if (!form.contact_name.trim()) {
    errors.contact_name = '请输入联系人姓名'
  } else if (form.contact_name.trim().length < 2 || form.contact_name.trim().length > 20) {
    errors.contact_name = '联系人姓名应为 2-20 个字符'
  }

  // 2) 联系电话 — 必填, 手机号格式
  const phone = form.contact_phone.trim()
  if (!phone) {
    errors.contact_phone = '请输入联系电话'
  } else if (!/^1[3-9]\d{9}$/.test(phone) && !/^\d{3,4}-\d{7,8}$/.test(phone)) {
    errors.contact_phone = '请输入正确的手机号或座机号'
  }

  // 3) 公司 — 选填, 最长 50 字符
  if (form.company.length > 50) {
    errors.company = '公司名称不能超过 50 个字符'
  }

  // 4) 城市 — 选填, 最长 30 字符
  if (form.city.length > 30) {
    errors.city = '城市名称不能超过 30 个字符'
  }

  return Object.keys(errors).length === 0
}

/** 从错误对象中提取可读消息 */
function getErrorMessage(err) {
  // 后端校验错误（DRF serializer.errors）
  if (err.response?.data?.errors) {
    const msgs = []
    for (const [field, fieldErrors] of Object.entries(err.response.data.errors)) {
      msgs.push(field + ': ' + (Array.isArray(fieldErrors) ? fieldErrors.join('；') : fieldErrors))
    }
    return msgs.join(' | ')
  }
  // 后端 message
  if (err.response?.data?.message) {
    return err.response.data.message
  }
  // 网络断开
  if (err.message === 'Network Error' || err.code === 'ERR_NETWORK') {
    return '网络连接失败，请检查网络后重试'
  }
  // 超时
  if (err.code === 'ECONNABORTED' || err.code === 'ERR_CANCELED') {
    return '请求超时，请稍后重试'
  }
  // HTTP 状态码错误
  if (err.response?.status) {
    return '服务器错误（' + err.response.status + '），请稍后重试'
  }
  return err.message || '未知错误，请稍后重试'
}

function handleSubmit() {
  if (!validate()) return

  submitting.value = true
  submitStatus.value = ''
  errorMessage.value = ''

  // 后端字段名与 form 一致，直接传入
  const payload = { ...form }

  console.log('POST /api/contact/ payload:', JSON.stringify(payload))

  submitContact(payload)
    .then((res) => {
      console.log('API response:', res)
      if (res.code === 200) {
        submitStatus.value = 'success'
        Object.assign(form, {
          contact_name: '', contact_phone: '', company: '', project_type: '',
          quantity: '', city: '', budget: '', message: '',
        })
        Object.keys(errors).forEach((k) => delete errors[k])
      } else {
        submitStatus.value = 'error'
        errorMessage.value = res.message || '服务器拒绝了提交'
      }
    })
    .catch((err) => {
      console.error('提交失败:', err)
      console.error('错误详情:', err.response?.data || err.message)
      submitStatus.value = 'error'
      errorMessage.value = getErrorMessage(err)
    })
    .finally(() => {
      submitting.value = false
    })
}
</script>

<style scoped>
.page-banner { padding: 200px 0 100px; background: linear-gradient(135deg, #1a1a1a, #2c2416); text-align: center; }
.banner-eyebrow { font-size: 12px; letter-spacing: 8px; color: var(--color-gold); margin-bottom: 16px; }
.banner-inner h1 { font-family: var(--font-serif); font-size: 52px; font-weight: 300; color: #fff; letter-spacing: 12px; margin-bottom: 12px; }
.banner-sub { font-size: 15px; color: rgba(255,255,255,0.45); letter-spacing: 3px; }

.section { padding: 100px 0; }

/* Contact Grid */
.contact-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 80px; }

/* 信息 */
.info-block { margin-bottom: 48px; }
.info-block h3 { font-family: var(--font-serif); font-size: 22px; font-weight: 400; letter-spacing: 4px; color: var(--color-dark); margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border); }
.info-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 20px; }
.info-item {}
.info-label { font-size: 11px; letter-spacing: 3px; color: var(--color-gold); margin-bottom: 8px; text-transform: uppercase; }
.info-item p { font-size: 14px; color: var(--color-gray); line-height: 1.9; }
.info-text { font-size: 14px; color: var(--color-gray); line-height: 1.9; margin-bottom: 6px; }
.info-email { font-size: 18px; color: var(--color-dark); font-family: var(--font-serif); letter-spacing: 1px; margin-bottom: 16px; }

/* 表单 */
.contact-form-wrapper { background: #fff; padding: 52px; border: 1px solid var(--color-border); }
.contact-form-wrapper h3 { font-family: var(--font-serif); font-size: 24px; font-weight: 400; letter-spacing: 4px; color: var(--color-dark); margin-bottom: 8px; }
.form-sub { font-size: 13px; color: var(--color-light-gray); margin-bottom: 36px; letter-spacing: 1px; }

.fm-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 0; }
.fm-row-3 { grid-template-columns: 1fr 1fr 1fr; }
.fm-group { margin-bottom: 24px; }
.fm-full-group { margin-bottom: 24px; }
.fm-label { display: block; font-size: 12px; letter-spacing: 2px; color: var(--color-dark); margin-bottom: 10px; }
.fm-input { width: 100%; padding: 12px 0; border: none; border-bottom: 1px solid var(--color-border); font-size: 14px; font-family: inherit; outline: none; transition: border-color 0.3s; background: transparent; color: var(--color-dark); }
.fm-input::placeholder { color: #bbb; }
.fm-input:focus { border-color: var(--color-gold); }
.has-error .fm-input { border-color: #c0392b; }
.fm-error { color: #c0392b; font-size: 12px; margin-top: 6px; letter-spacing: 1px; }
select.fm-input { color: var(--color-gray); cursor: pointer; }
.fm-textarea { resize: vertical; }
.fm-submit { width: 100%; padding: 18px; background: var(--color-dark); color: #aaa; border: none; font-size: 15px; letter-spacing: 4px; cursor: pointer; transition: all 0.3s; font-family: inherit; margin-top: 8px; }
.fm-submit:hover { background: var(--color-gold); color: #fff; }
.fm-submit:disabled { opacity: 0.5; cursor: not-allowed; }
/* 提交消息 */
.submit-msg { margin-top: 16px; padding: 12px; font-size: 13px; letter-spacing: 1px; text-align: center; }
.submit-msg.success { color: #2d6a4f; background: #d8f3dc; border: 1px solid #b7e4c7; }
.submit-msg.error { color: #9b2226; background: #ffddd6; border: 1px solid #ffb3a7; }

/* 地图 */
.map-placeholder { background: linear-gradient(135deg, #2a2a2a, #3a352d); padding: 140px 0; text-align: center; }
.map-pin { display: block; font-size: 52px; color: var(--color-gold); margin-bottom: 28px; }
.map-addr { color: #aaa; font-size: 20px; letter-spacing: 4px; margin-bottom: 12px; font-family: var(--font-serif); }
.map-sub { font-size: 14px; color: #595959; letter-spacing: 1px; line-height: 1.8; }

@media (max-width: 768px) {
  .page-banner { padding: 140px 0 60px; }
  .banner-inner h1 { font-size: 32px; letter-spacing: 4px; }
  .contact-grid { grid-template-columns: 1fr; gap: 48px; }
  .fm-row, .fm-row-3 { grid-template-columns: 1fr; gap: 0; }
  .info-row { grid-template-columns: 1fr; }
  .contact-form-wrapper { padding: 32px 24px; }
  .map-addr { font-size: 16px; letter-spacing: 2px; }
}
</style>
