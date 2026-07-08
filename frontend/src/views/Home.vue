<template>
  <div class="page-home">
    <!-- ===== Hero ===== -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-eyebrow">ZhenPin Furniture · Since 2010</p>
        <h1 class="hero-title">源头工厂<span class="gold-dot">·</span>匠心制造</h1>
        <p class="hero-sub">二十年深耕高端家具制造，直供星级酒店、别墅府邸与商业空间<br/>去掉中间环节，让品质触手可及</p>
        <div class="hero-actions">
          <router-link to="/products" class="btn-gold">浏览产品系列</router-link>
          <router-link to="/contact" class="btn-line">预约展厅参观</router-link>
        </div>
      </div>
      <div class="hero-scroll"><span></span></div>
    </section>

    <!-- ===== 实力数字 ===== -->
    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item" v-for="s in stats" :key="s.num">
            <span class="stat-num">{{ s.num }}</span>
            <span class="stat-label">{{ s.label }}</span>
            <span class="stat-desc">{{ s.desc }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 品牌简介 ===== -->
    <section class="section intro-section">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-text">
            <p class="section-eyebrow">About Us</p>
            <h2 class="section-title">源自工厂<br/>定义品质</h2>
            <div class="divider"></div>
            <p class="intro-body">臻品家居成立于 2010 年，坐落于中国家具之都——佛山顺德。作为一家集原创设计、精益制造、全球直供于一体的源头工厂，我们拥有 20,000 ㎡现代化厂房与 5,000 ㎡实景展厅，服务超过 2,000 个工程项目，覆盖全国 30 余个省市及东南亚、中东、欧洲等海外市场。</p>
            <p class="intro-body">我们深信：真正的高端家具，不是过度包装与品牌溢价的产物，而是源自好材料、好工艺与好设计的自然呈现。从工厂到空间，从一块木材到一件作品，臻品家居用看得见的质感与细节，为每一位客户创造值得传承的家居体验。</p>
            <div class="intro-highlights">
              <div class="hl-item"><span class="hl-check">&#10003;</span> 意大利 / 德国进口生产设备</div>
              <div class="hl-item"><span class="hl-check">&#10003;</span> FSC 认证可持续木材供应链</div>
              <div class="hl-item"><span class="hl-check">&#10003;</span> 欧盟环保标准涂装工艺</div>
              <div class="hl-item"><span class="hl-check">&#10003;</span> 自有物流车队覆盖全国</div>
            </div>
            <router-link to="/products" class="text-link">探索全部产品系列 &rarr;</router-link>
          </div>
          <div class="intro-images">
            <div class="intro-img img-main"></div>
            <div class="intro-img img-sub"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 产品系列 ===== -->
    <section class="section series-section">
      <div class="container">
        <p class="section-eyebrow center">Product Series</p>
        <h2 class="section-title center">三大产品系列</h2>
        <div class="divider center-d"></div>
        <p class="section-sub center">从意式轻奢到东方美学，满足不同空间的气质表达</p>
        <div class="series-grid">
          <div class="series-card" v-for="s in series" :key="s.name">
            <div class="series-img" :class="s.cls"></div>
            <div class="series-info">
              <span class="series-tag">{{ s.tag }}</span>
              <h3>{{ s.name }}</h3>
              <p>{{ s.desc }}</p>
              <ul class="series-materials">
                <li v-for="m in s.materials" :key="m">{{ m }}</li>
              </ul>
              <p class="series-scene"><strong>适用场景：</strong>{{ s.scene }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 工程案例精选 ===== -->
    <section class="section projects-section">
      <div class="container">
        <p class="section-eyebrow center">Featured Projects</p>
        <h2 class="section-title center">精选工程案例</h2>
        <div class="divider center-d"></div>
        <p class="section-sub center">两千余项目的经验积淀，服务涵盖酒店、别墅、商业空间与办公领域</p>
        <div class="projects-grid">
          <div class="project-card" v-for="p in displayProjects" :key="p.id">
            <div class="project-img" :style="p.cover ? { backgroundImage: 'url(' + p.cover + ')' } : {}"></div>
            <div class="project-info">
              <span class="project-cat">{{ p.category?.name }}</span>
              <h3>{{ p.title }}</h3>
              <p class="project-meta">{{ p.client }} · {{ p.industry }}</p>
              <p class="project-desc">{{ p.summary }}</p>
            </div>
          </div>
        </div>
        <div class="center-link">
          <router-link to="/projects" class="text-link">查看全部工程案例 &rarr;</router-link>
        </div>
      </div>
    </section>

    <!-- ===== 定制流程 + 服务承诺 ===== -->
    <section class="section flow-section">
      <div class="container">
        <p class="section-eyebrow center">Custom Flow</p>
        <h2 class="section-title center">一对一专属定制</h2>
        <div class="divider center-d"></div>
        <p class="section-sub center">从需求沟通到交付落地，全链路专属团队跟进</p>
        <div class="flow-grid">
          <div class="flow-item" v-for="(f, i) in flow" :key="f.title">
            <span class="flow-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="flow-line" v-if="i < flow.length - 1"></div>
            <h4>{{ f.title }}</h4>
            <p class="flow-time">{{ f.time }}</p>
            <p>{{ f.desc }}</p>
          </div>
        </div>
        <!-- 服务承诺 -->
        <div class="service-pledge">
          <div class="pledge-item" v-for="pl in pledges" :key="pl.title">
            <span class="pledge-icon">{{ pl.icon }}</span>
            <h5>{{ pl.title }}</h5>
            <p>{{ pl.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 服务客户 ===== -->
    <section class="section clients-section">
      <div class="container">
        <p class="section-eyebrow center">Trusted By</p>
        <h2 class="section-title center">合作客户</h2>
        <div class="divider center-d"></div>
        <p class="section-sub center">我们荣幸为以下品牌与机构提供服务</p>
        <div class="clients-grid">
          <div class="client-item" v-for="c in clients" :key="c">{{ c }}</div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta">
      <div class="cta-inner">
        <p class="cta-eyebrow">Visit Our Showroom</p>
        <h2>亲临 5,000 ㎡ 实景展厅<span class="gold-dot">·</span>体验实物质感</h2>
        <p>佛山市顺德区乐从镇家居大道 288 号 · 每日 9:00–18:00 开放</p>
        <div class="cta-actions">
          <router-link to="/contact" class="btn-gold">预约参观</router-link>
          <router-link to="/products" class="btn-line">在线浏览产品</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getProducts, getCases } from '../api/index.js'

const recommendedProducts = ref([])
const recommendedCases = ref([])
const dataLoading = ref(true)

onMounted(async () => {
  try {
    const [prodRes, caseRes] = await Promise.all([
      getProducts({ recommended: 1 }),
      getCases({ recommended: 1 }),
    ])
    recommendedProducts.value = (prodRes.results || prodRes).map(p => ({
      ...p,
      materials: (p.features || '').split('\n').filter(Boolean).slice(0, 3),
    }))
    recommendedCases.value = (caseRes.results || caseRes)
  } catch (e) {
    console.error('加载首页数据失败:', e)
  } finally {
    dataLoading.value = false
  }
})
const stats = [
  { num: '20+', label: '年制造经验', desc: '自 2010 年专注高端家具' },
  { num: '20,000㎡', label: '现代化厂房', desc: '佛山南海 · 自有生产基地' },
  { num: '5,000㎡', label: '实景展厅', desc: '乐从总部 · 全系列陈列' },
  { num: '2,000+', label: '工程项目', desc: '酒店 / 别墅 / 商业空间' },
]

// 产品系列保留使用固定数据（产品系列是品牌定位，非动态数据）
const series = [
  { cls: 's-italian', tag: '意式轻奢', name: 'Milano 米兰系列', desc: '汲取意大利现代设计精髓，以简约线条与高级材质的平衡诠释当代奢华。每一件作品都经过 42 道工序精制而成。', materials: ['进口头层牛皮', '天然大理石', '黑胡桃木实木'], scene: '高端住宅、精品酒店、总裁办公室' },
  { cls: 's-chinese', tag: '新中式', name: 'Jiangnan 江南系列', desc: '东方美学的当代演绎——以温润木作为主调，融合铜件、藤编等传统手工艺元素，在克制中见底蕴。', materials: ['缅甸花梨木', '黄铜五金', '天然藤编'], scene: '中式别墅、茶空间、文化会所' },
  { cls: 's-modern', tag: '现代简约', name: 'Nordic 北欧系列', desc: '极简主义与功能主义的融合，干净利落的廓形搭配温暖克制的配色，让家具回归服务于人的本质。', materials: ['北美白橡木', '羊毛混纺面料', '哑光金属'], scene: '现代公寓、联合办公、设计工作室' },
]

// 工程案例精选 — 从 API 获取推荐案例，API 无数据时用推荐的案例
const displayProjects = computed(() => {
  if (recommendedCases.value.length > 0) {
    return recommendedCases.value.slice(0, 4)
  }
  return []
})
const flow = [
  { title: '需求沟通', time: '第 1–2 天', desc: '专属顾问上门或线上沟通，了解空间尺寸、风格偏好与功能需求，提供初步选型建议' },
  { title: '方案设计', time: '第 3–7 天', desc: '设计师出具空间规划方案、家具配置清单与 3D 效果图，支持多轮修改直至满意' },
  { title: '物料确认', time: '第 8–10 天', desc: '提供皮料、木材、布艺等实物色板，客户现场确认所有材质与颜色' },
  { title: '打样验收', time: '第 11–20 天', desc: '关键单品实物打样，确认坐感、细节与整体效果，确保零误差' },
  { title: '精益生产', time: '第 21–45 天', desc: '工厂按确认样生产，专人每周同步进度照片，严格品控三道检验' },
  { title: '交付安装', time: '第 46–50 天', desc: '专业物流送货上门，安装团队现场组装调试，清理现场并验收交付' },
]
const pledges = [
  { icon: '🛡', title: '5 年质保', desc: '所有产品提供 5 年免费质保，终身维护' },
  { icon: '🚚', title: '全国包物流', desc: '自有车队 + 合作物流，送货入户' },
  { icon: '🔄', title: '30 天无理由', desc: '到货 30 天内如不满意，无条件退换' },
  { icon: '📐', title: '免费量尺', desc: '全国 200+ 城市免费上门量尺服务' },
]
const clients = ['悦榕庄酒店集团', '万科地产', '华润置地', '字节跳动', '招商银行', '北京 SKP', '深圳湾壹号', '上海汤臣一品', '成都太古里', '三亚艾迪逊酒店', '绿城中国', '保利发展']
</script>

<style scoped>
/* ===== Hero ===== */
.hero {
  height: 100vh; min-height: 720px;
  position: relative; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2416 40%, #3d3525 100%);
  overflow: hidden;
}
.hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 50%, rgba(184,148,75,0.1) 0%, transparent 70%); }
.hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.35); }
.hero-content { position: relative; z-index: 1; text-align: center; max-width: 780px; padding: 0 20px; }
.hero-eyebrow { font-size: 13px; letter-spacing: 8px; color: var(--color-gold); margin-bottom: 28px; text-transform: uppercase; }
.hero-title { font-family: var(--font-serif); font-size: 68px; font-weight: 300; color: #fff; letter-spacing: 14px; margin-bottom: 28px; line-height: 1.2; }
.gold-dot { color: var(--color-gold); }
.hero-sub { font-size: 17px; color: rgba(255,255,255,0.55); line-height: 1.8; margin-bottom: 48px; letter-spacing: 2px; }
.hero-actions { display: flex; gap: 24px; justify-content: center; }
.btn-gold { display: inline-block; padding: 18px 48px; background: var(--color-gold); color: #fff; font-size: 14px; letter-spacing: 4px; text-decoration: none; transition: all 0.3s; }
.btn-gold:hover { background: #a07e3c; }
.btn-line { display: inline-block; padding: 18px 48px; border: 1px solid rgba(255,255,255,0.25); color: rgba(255,255,255,0.7); font-size: 14px; letter-spacing: 4px; text-decoration: none; transition: all 0.3s; }
.btn-line:hover { border-color: var(--color-gold); color: var(--color-gold); }
.hero-scroll { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); z-index: 1; }
.hero-scroll span { display: block; width: 1px; height: 40px; background: rgba(255,255,255,0.3); animation: scrollLine 2s ease-in-out infinite; }
@keyframes scrollLine { 0%,100% { transform: translateY(0); opacity: 0.2; } 50% { transform: translateY(16px); opacity: 1; } }

/* ===== Section Common ===== */
.section { padding: 120px 0; }
.section-eyebrow { font-size: 12px; letter-spacing: 6px; color: var(--color-gold); text-transform: uppercase; margin-bottom: 16px; }
.section-eyebrow.center { text-align: center; }
.section-title { font-family: var(--font-serif); font-size: 44px; font-weight: 300; color: var(--color-dark); letter-spacing: 6px; line-height: 1.3; margin-bottom: 20px; }
.section-title.center { text-align: center; }
.section-sub { font-size: 15px; color: var(--color-light-gray); letter-spacing: 2px; line-height: 1.8; }
.section-sub.center { text-align: center; margin-bottom: 56px; }
.divider { width: 40px; height: 1px; background: var(--color-gold); margin-bottom: 40px; }
.divider.center-d { margin-left: auto; margin-right: auto; }

/* ===== Stats Bar ===== */
.stats-bar { position: relative; z-index: 2; margin-top: -80px; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); background: #fff; border-top: 3px solid var(--color-gold); box-shadow: 0 2px 20px rgba(0,0,0,0.06); }
.stat-item { text-align: center; padding: 44px 20px; position: relative; }
.stat-item::after { content: ''; position: absolute; right: 0; top: 25%; bottom: 25%; width: 1px; background: var(--color-border); }
.stat-item:last-child::after { display: none; }
.stat-num { display: block; font-family: var(--font-serif); font-size: 44px; font-weight: 300; color: var(--color-dark); letter-spacing: 2px; }
.stat-label { display: block; font-size: 14px; letter-spacing: 3px; color: var(--color-gold); margin: 8px 0; }
.stat-desc { display: block; font-size: 12px; color: var(--color-light-gray); letter-spacing: 1px; }

/* ===== Intro ===== */
.intro-section { background: #fff; }
.intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.intro-body { font-size: 15px; color: var(--color-gray); line-height: 2; margin-bottom: 24px; }
.intro-highlights { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 32px; }
.hl-item { font-size: 13px; color: var(--color-gray); letter-spacing: 1px; }
.hl-check { color: var(--color-gold); }
.text-link { color: var(--color-gold); text-decoration: none; font-size: 14px; letter-spacing: 3px; transition: opacity 0.3s; border-bottom: 1px solid var(--color-gold); padding-bottom: 4px; }
.text-link:hover { opacity: 0.7; }
.intro-images { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.intro-img { height: 420px; background-size: cover; background-position: center; border-radius: 2px; }
.img-main { background-image: url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80'); position: relative; }
.img-sub { background-image: url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80'); margin-top: 40px; position: relative; }

/* ===== Series ===== */
.series-section { background: #fafaf8; }
.series-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
.series-card { background: #fff; transition: box-shadow 0.4s; }
.series-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
.series-img { height: 300px; position: relative; background-size: cover; background-position: center; }
.s-italian { background-image: url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'); }
.s-chinese { background-image: url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80'); }
.s-modern { background-image: url('https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80'); }
.series-info { padding: 36px 32px; }
.series-tag { font-size: 11px; letter-spacing: 4px; color: var(--color-gold); text-transform: uppercase; }
.series-info h3 { font-family: var(--font-serif); font-size: 24px; font-weight: 400; color: var(--color-dark); margin: 10px 0; letter-spacing: 3px; }
.series-info > p { font-size: 14px; color: var(--color-gray); line-height: 1.8; margin-bottom: 20px; }
.series-materials { list-style: none; display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.series-materials li { padding: 6px 14px; background: #f5f3ef; font-size: 12px; color: var(--color-gray); letter-spacing: 1px; }
.series-scene { font-size: 12px; color: var(--color-light-gray); border-top: 1px solid var(--color-border); padding-top: 14px; }

/* ===== Projects ===== */
.projects-section { background: #fff; }
.projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
.project-card { transition: transform 0.4s; }
.project-card:hover { transform: translateY(-4px); }
.project-img { height: 280px; background-size: cover; background-position: center; background-color: #e8e8e8; }
.project-info { padding: 24px 0; }
.project-cat { font-size: 11px; letter-spacing: 4px; color: var(--color-gold); }
.project-info h3 { font-size: 22px; font-weight: 400; font-family: var(--font-serif); color: var(--color-dark); margin: 8px 0 6px; letter-spacing: 2px; }
.project-meta { font-size: 13px; color: var(--color-light-gray); letter-spacing: 1px; margin-bottom: 10px; }
.project-desc { font-size: 14px; color: var(--color-gray); line-height: 1.8; }
.center-link { text-align: center; margin-top: 56px; }

/* ===== Flow ===== */
.flow-section { background: #fff; }
.flow-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0; }
.flow-item { text-align: center; padding: 0 16px; position: relative; }
.flow-num { display: block; font-family: var(--font-serif); font-size: 52px; font-weight: 300; color: var(--color-gold); opacity: 0.5; margin-bottom: 20px; }
.flow-line { position: absolute; top: 26px; left: calc(55% + 28px); width: calc(90% - 56px); height: 1px; background: var(--color-border); z-index: 0; }
.flow-item h4 { font-size: 15px; letter-spacing: 3px; color: var(--color-dark); margin-bottom: 8px; font-weight: 500; }
.flow-time { font-size: 11px; color: var(--color-gold); letter-spacing: 1px; margin-bottom: 8px; }
.flow-item p { font-size: 12px; color: var(--color-light-gray); line-height: 1.7; }

/* ===== Pledge ===== */
.service-pledge { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 80px; padding-top: 60px; border-top: 1px solid var(--color-border); }
.pledge-item { text-align: center; padding: 0 24px; }
.pledge-icon { font-size: 32px; display: block; margin-bottom: 16px; }
.pledge-item h5 { font-size: 14px; letter-spacing: 2px; color: var(--color-dark); margin-bottom: 8px; }
.pledge-item p { font-size: 12px; color: var(--color-light-gray); }

/* ===== Clients ===== */
.clients-section { background: #fafaf8; }
.clients-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 1px; }
.client-item { background: #fff; padding: 32px 16px; text-align: center; font-size: 14px; color: var(--color-gray); letter-spacing: 2px; }

/* ===== CTA ===== */
.cta { background: var(--color-dark); padding: 100px 0; text-align: center; }
.cta-inner { max-width: 700px; margin: 0 auto; padding: 0 20px; }
.cta-eyebrow { font-size: 12px; letter-spacing: 6px; color: var(--color-gold); margin-bottom: 20px; }
.cta-inner h2 { font-family: var(--font-serif); font-size: 40px; font-weight: 300; color: #ccc; letter-spacing: 6px; margin-bottom: 16px; }
.cta-inner > p { color: #595959; margin-bottom: 40px; letter-spacing: 2px; font-size: 14px; }
.cta-actions { display: flex; gap: 20px; justify-content: center; }
.cta .btn-gold { display: inline-block; }

@media (max-width: 768px) {
  .hero-title { font-size: 32px; letter-spacing: 6px; }
  .hero-sub { font-size: 14px; }
  .hero-actions, .cta-actions { flex-direction: column; align-items: center; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); margin-top: 20px; }
  .stat-item::after { display: none; }
  .section { padding: 64px 0; }
  .section-title { font-size: 28px; letter-spacing: 3px; }
  .intro-grid { grid-template-columns: 1fr; gap: 40px; }
  .intro-images { grid-template-columns: 1fr; }
  .img-sub { margin-top: 0; }
  .intro-img { height: 240px; }
  .intro-highlights { grid-template-columns: 1fr; }
  .series-grid { grid-template-columns: 1fr; }
  .projects-grid { grid-template-columns: 1fr; }
  .flow-grid { grid-template-columns: repeat(3, 1fr); gap: 32px; }
  .flow-line { display: none; }
  .service-pledge { grid-template-columns: repeat(2, 1fr); gap: 32px; }
  .clients-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
