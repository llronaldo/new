<template>
  <div class="page-custom">
    <section class="page-banner">
      <div class="banner-inner">
        <p class="banner-eyebrow">Custom Service</p>
        <h1>专属定制</h1>
        <p class="banner-sub">从尺寸到材质，从单品到全案——我们按你的想象来造</p>
      </div>
    </section>

    <!-- 定制维度 -->
    <section class="section">
      <div class="container">
        <p class="section-eyebrow center">What We Offer</p>
        <h2 class="section-title center">四大定制维度</h2>
        <div class="divider center-d"></div>
        <div class="custom-grid">
          <div class="custom-card" v-for="c in customTypes" :key="c.title">
            <span class="custom-icon">{{ c.icon }}</span>
            <h3>{{ c.title }}</h3>
            <p class="custom-subtitle">{{ c.subtitle }}</p>
            <ul class="custom-points">
              <li v-for="pt in c.points" :key="pt">{{ pt }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 定制流程 -->
    <section class="section flow-section">
      <div class="container">
        <p class="section-eyebrow center">How It Works</p>
        <h2 class="section-title center">定制服务流程</h2>
        <div class="divider center-d"></div>
        <p class="section-sub center">从沟通到交付，专属团队全链路一对一跟进</p>
        <div class="flow-grid">
          <div class="flow-item" v-for="(f, i) in flowSteps" :key="f.title">
            <div class="flow-badge">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="flow-line" v-if="i < flowSteps.length - 1"></div>
            <h4>{{ f.title }}</h4>
            <p class="flow-time">{{ f.time }}</p>
            <p class="flow-desc">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 材质展示 -->
    <section class="section material-section">
      <div class="container">
        <p class="section-eyebrow center">Materials</p>
        <h2 class="section-title center">材质与工艺</h2>
        <div class="divider center-d"></div>
        <p class="section-sub center">精选全球优质原材料，每一环节严格品控</p>
        <div class="material-grid">
          <div class="material-card" v-for="m in materials" :key="m.name">
            <div class="material-img" :class="m.cls"></div>
            <div class="material-info">
              <h4>{{ m.name }}</h4>
              <p>{{ m.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 定制案例 -->
    <section class="section cases-section">
      <div class="container">
        <p class="section-eyebrow center">Custom Cases</p>
        <h2 class="section-title center">定制案例精选</h2>
        <div class="divider center-d"></div>
        <div class="cases-grid">
          <div class="case-item" v-for="c in customCases" :key="c.name">
            <div class="case-img" :class="c.cls"><span class="case-tag-badge">{{ c.tag }}</span></div>
            <div class="case-info">
              <h3>{{ c.name }}</h3>
              <p class="case-meta">{{ c.location }} · {{ c.scale }} · {{ c.year }}</p>
              <p class="case-desc">{{ c.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 表单CTA -->
    <section class="cta-form-section">
      <div class="container">
        <div class="cta-form-grid">
          <div class="cta-form-text">
            <p class="section-eyebrow">Start Your Project</p>
            <h2>开启专属定制</h2>
            <div class="divider"></div>
            <p class="cta-body">告诉我们您的需求，设计顾问将在 24 小时内与您联系。从概念到落地——全流程一对一专属服务。</p>
            <div class="cta-benefits">
              <div class="bf-item"><span class="bf-num">01</span><span>免费上门量尺</span></div>
              <div class="bf-item"><span class="bf-num">02</span><span>免费 3D 方案</span></div>
              <div class="bf-item"><span class="bf-num">03</span><span>免费实物打样</span></div>
              <div class="bf-item"><span class="bf-num">04</span><span>5 年质保服务</span></div>
            </div>
          </div>
          <div class="cta-form-wrapper">
            <form @submit.prevent="handleSubmit">
              <div class="fm-row"><input v-model="form.name" placeholder="您的称呼 *" required class="fm-input"/><input v-model="form.phone" placeholder="联系电话 *" required class="fm-input"/></div>
              <input v-model="form.email" placeholder="电子邮箱" class="fm-input fm-full"/>
              <select v-model="form.type" class="fm-input fm-full"><option value="">定制类型</option><option>尺寸定制</option><option>材质定制</option><option>颜色定制</option><option>全案定制</option></select>
              <textarea v-model="form.message" placeholder="请描述您的需求（空间类型、风格偏好、预算范围等）" rows="5" class="fm-input fm-full"></textarea>
              <button type="submit" class="fm-submit">{{ submitting ? '提交中...' : '提交需求' }}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const customTypes = [
  { icon: '📐', title: '尺寸定制', subtitle: '空间不设限，尺寸不将就', points: ['精确到毫米的量尺服务', '异形、转角等特殊空间专属方案', '已有产品尺寸修改适配', '非标尺寸不加收开模费'] },
  { icon: '🪵', title: '材质定制', subtitle: '从皮料到木材，由你定义', points: ['50+ 进口/国产皮料可选', '80+ 木皮色板可供选样', '布艺面料阻燃等级可选', '石材、金属等多种可选材质'] },
  { icon: '🎨', title: '颜色定制', subtitle: '配色不受既定方案限制', points: ['潘通色卡对色打样确认', '多材质同色匹配方案', '金属件表面处理工艺可选', '做旧、擦色等特殊效果定制'] },
  { icon: '🏠', title: '全案定制', subtitle: '一站式全屋家具解决方案', points: ['空间规划与软装设计', '全品类统一风格配套', '设计+生产+物流+安装', '1 对 1 项目经理全程统筹'] },
]

const flowSteps = [
  { title: '需求沟通', time: '第 1–2 天', desc: '专属顾问上门或线上沟通，了解空间尺寸、风格偏好与功能需求，提供初步选型与预算建议' },
  { title: '方案设计', time: '第 3–7 天', desc: '设计师出具空间规划方案、家具配置清单与 3D 效果图，支持多轮修改直至客户满意' },
  { title: '物料确认', time: '第 8–10 天', desc: '提供皮料样张、木材色板、面料小样等实物样品，客户现场或远程确认所有材质与颜色' },
  { title: '打样验收', time: '第 11–20 天', desc: '关键单品实物打样供客户确认，验证坐感、细节与整体效果，确保与设计方案零误差' },
  { title: '精益生产', time: '第 21–45 天', desc: '工厂按确认样进入批量生产，专人跟单并每周发送进度照片。每件产品经历三道品控检验' },
  { title: '交付安装', time: '第 46–50 天', desc: '专业物流团队送货入户，安装技师现场组装调试，清理所有包装垃圾并配合客户逐件验收' },
]

const materials = [
  { cls: 'm-leather', name: '意大利进口牛皮', desc: '精选意大利 Gruppo Mastrotto 头层牛皮，粒面细腻、透气性佳。经 48 小时鞣制与 32 道后处理工序，色牢度达 4 级以上。' },
  { cls: 'm-wood', name: '北美黑胡桃木', desc: 'FSC 认证可持续森林采购，含水率严格控制在 8%–10%。纹理自然流畅，色泽沉稳大气，随时间推移愈发温润。' },
  { cls: 'm-marble', name: '天然大理石', desc: '意大利卡拉拉矿区直采，每块石板的纹理皆为自然造化。表面经纳米防污处理，日常使用不渗色、不泛黄。' },
  { cls: 'm-fabric', name: '高端定制面料', desc: '合作 Loro Piana、Dedar 等顶级内饰面料品牌。提供阻燃、防水、防污等功能性选项，满足酒店工程与家庭不同场景。' },
]

const customCases = [
  { tag: '全案定制', name: '广州珠江新城大平层', location: '广东广州', scale: '350 ㎡', year: '2024', desc: '现代轻奢风格全屋定制方案，涵盖客厅、餐厅、主卧、衣帽间、书房、儿童房共 42 件定制家具。主沙发尺寸与面料均由业主定制选择。', cls: 'cc-1' },
  { tag: '尺寸定制', name: '北京四合院改造', location: '北京东城', scale: '280 ㎡', year: '2024', desc: '为传统四合院量身定制家具。因老建筑墙体不平直，每件大家具均现场测量后单独出图。定制 3.6 米超长实木茶几完美适配庭院中心位置。', cls: 'cc-2' },
  { tag: '材质定制', name: '三亚海棠湾度假别墅', location: '海南三亚', scale: '500 ㎡', year: '2023', desc: '全屋家具采用户外级耐候材料——6063 铝合金框架防锈抗腐，Sunbrella 面料防褪色防霉变。经 1,000 小时盐雾测试仍完好如新。', cls: 'cc-3' },
  { tag: '颜色定制', name: '上海安福路画廊空间', location: '上海', scale: '600 ㎡', year: '2024', desc: '画廊家具配色需与每期展览主题呼应。所有沙发、座椅采用可更换面套设计，配合潘通色卡对色。首批定制 6 组颜色方案，后续可单独增购面套。', cls: 'cc-4' },
]

const form = reactive({ name: '', phone: '', email: '', type: '', message: '' })
const submitting = ref(false)
function handleSubmit() {
  submitting.value = true
  setTimeout(() => {
    alert('感谢您的定制需求！专属设计顾问将在 24 小时内与您联系。')
    Object.assign(form, { name: '', phone: '', email: '', type: '', message: '' })
    submitting.value = false
  }, 1200)
}
</script>

<style scoped>
.page-banner { padding: 200px 0 100px; background: linear-gradient(135deg, #1a1a1a, #2c2416); text-align: center; }
.banner-eyebrow { font-size: 12px; letter-spacing: 8px; color: var(--color-gold); margin-bottom: 16px; }
.banner-inner h1 { font-family: var(--font-serif); font-size: 52px; font-weight: 300; color: #fff; letter-spacing: 12px; margin-bottom: 12px; }
.banner-sub { font-size: 15px; color: rgba(255,255,255,0.45); letter-spacing: 3px; }

.section { padding: 100px 0; }
.section-eyebrow { font-size: 12px; letter-spacing: 6px; color: var(--color-gold); margin-bottom: 16px; }
.section-eyebrow.center { text-align: center; }
.section-title { font-family: var(--font-serif); font-size: 38px; font-weight: 300; letter-spacing: 6px; color: var(--color-dark); margin-bottom: 12px; }
.section-title.center { text-align: center; }
.section-sub { font-size: 15px; color: var(--color-light-gray); letter-spacing: 2px; margin-bottom: 56px; }
.section-sub.center { text-align: center; }
.divider { width: 40px; height: 1px; background: var(--color-gold); margin-bottom: 40px; }
.center-d { margin-left: auto; margin-right: auto; }

/* 定制类型 */
.custom-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.custom-card { text-align: center; padding: 44px 24px; border: 1px solid var(--color-border); transition: border-color 0.3s; }
.custom-card:hover { border-color: var(--color-gold); }
.custom-icon { font-size: 44px; display: block; margin-bottom: 20px; }
.custom-card h3 { font-size: 18px; letter-spacing: 3px; color: var(--color-dark); margin-bottom: 6px; font-weight: 500; }
.custom-subtitle { font-size: 13px; color: var(--color-light-gray); margin-bottom: 24px; }
.custom-points { list-style: none; text-align: left; display: inline-block; }
.custom-points li { font-size: 13px; color: var(--color-gray); padding: 6px 0; padding-left: 16px; position: relative; }
.custom-points li::before { content: '·'; position: absolute; left: 0; color: var(--color-gold); font-weight: bold; }

/* 流程 */
.flow-section { background: #fff; }
.flow-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0; }
.flow-item { text-align: center; padding: 0 16px; position: relative; }
.flow-badge { width: 56px; height: 56px; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 18px; color: var(--color-gold); border: 1px solid var(--color-border); }
.flow-line { position: absolute; top: 28px; left: calc(50% + 28px); width: calc(100% - 56px); height: 1px; background: var(--color-border); z-index: 0; }
.flow-item h4 { font-size: 14px; letter-spacing: 3px; color: var(--color-dark); margin-bottom: 8px; font-weight: 500; }
.flow-time { font-size: 11px; color: var(--color-gold); letter-spacing: 1px; margin-bottom: 8px; }
.flow-desc { font-size: 12px; color: var(--color-light-gray); line-height: 1.7; }

/* 材质 */
.material-section { background: #fff; border-top: 1px solid var(--color-border); }
.material-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.material-card { border: 1px solid var(--color-border); transition: border-color 0.3s; }
.material-card:hover { border-color: #ccc; }
.material-img { height: 220px; }
.m-leather { background: url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80') center/cover; position: relative; }
.m-wood { background: url('https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80') center/cover; position: relative; }
.m-marble { background: url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80') center/cover; position: relative; }
.m-fabric { background: url('https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80') center/cover; position: relative; }
.material-info { padding: 24px 20px; }
.material-info h4 { font-size: 16px; letter-spacing: 2px; color: var(--color-dark); margin-bottom: 8px; }
.material-info p { font-size: 13px; color: var(--color-gray); line-height: 1.7; }

/* 案例 */
.cases-section { background: #fff; }
.cases-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
.case-item { transition: transform 0.4s; }
.case-item:hover { transform: translateY(-4px); }
.case-img { height: 260px; position: relative; }
.case-tag-badge { position: absolute; top: 16px; left: 16px; padding: 6px 16px; background: rgba(0,0,0,0.5); color: #fff; font-size: 11px; letter-spacing: 3px; }
.cc-1 { background: url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80') center/cover; }
.cc-2 { background: url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80') center/cover; }
.cc-3 { background: url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80') center/cover; }
.cc-4 { background: url('https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80') center/cover; }
.case-info { padding: 24px 0; }
.case-info h3 { font-family: var(--font-serif); font-size: 22px; font-weight: 400; color: var(--color-dark); margin-bottom: 8px; letter-spacing: 2px; }
.case-meta { font-size: 12px; color: var(--color-light-gray); margin-bottom: 10px; letter-spacing: 1px; }
.case-desc { font-size: 14px; color: var(--color-gray); line-height: 1.8; }

/* CTA */
.cta-form-section { padding: 100px 0; }
.cta-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.cta-form-text h2 { font-family: var(--font-serif); font-size: 38px; font-weight: 300; letter-spacing: 6px; color: var(--color-dark); margin-bottom: 16px; }
.cta-body { font-size: 15px; color: var(--color-gray); line-height: 1.9; margin-bottom: 36px; }
.cta-benefits { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.bf-item { display: flex; align-items: center; gap: 12px; font-size: 14px; color: var(--color-dark); }
.bf-num { font-family: var(--font-serif); font-size: 20px; color: var(--color-gold); }
.cta-form-wrapper { background: #fff; padding: 52px; border: 1px solid var(--color-border); }
.fm-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
.fm-input { width: 100%; padding: 14px 0; border: none; border-bottom: 1px solid var(--color-border); font-size: 14px; font-family: inherit; outline: none; transition: border-color 0.3s; background: transparent; color: var(--color-dark); }
.fm-input::placeholder { color: #bbb; }
.fm-input:focus { border-color: var(--color-gold); }
.fm-full { margin-bottom: 20px; }
select.fm-input { color: var(--color-gray); cursor: pointer; }
textarea.fm-input { resize: vertical; }
.fm-submit { width: 100%; padding: 16px; background: var(--color-dark); color: #aaa; border: none; font-size: 14px; letter-spacing: 4px; cursor: pointer; transition: all 0.3s; font-family: inherit; margin-top: 8px; }
.fm-submit:hover { background: var(--color-gold); color: #fff; }

@media (max-width: 768px) {
  .page-banner { padding: 140px 0 60px; }
  .banner-inner h1 { font-size: 32px; letter-spacing: 4px; }
  .custom-grid { grid-template-columns: 1fr; }
  .flow-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
  .flow-line { display: none; }
  .material-grid { grid-template-columns: repeat(2, 1fr); }
  .cases-grid { grid-template-columns: 1fr; }
  .cta-form-grid { grid-template-columns: 1fr; gap: 40px; }
  .fm-row { grid-template-columns: 1fr; }
}
</style>
