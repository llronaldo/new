<template>
  <div class="page-products">
    <!-- Banner -->
    <section class="page-banner">
      <div class="banner-inner">
        <p class="banner-eyebrow">Our Collection</p>
        <h1>产品系列</h1>
        <p class="banner-sub">从经典到当代，二十载匠心沉淀每一件作品</p>
      </div>
    </section>

    <!-- Tabs + Grid -->
    <section class="section">
      <div class="container">
        <div class="tabs">
          <button v-for="cat in categories" :key="cat.value" :class="{ active: activeCat === cat.value }" @click="activeCat = cat.value">{{ cat.label }}</button>
        </div>
        <p class="result-count">共 {{ filteredProducts.length }} 款产品</p>
        <div class="product-grid">
          <div class="product-card" v-for="p in filteredProducts" :key="p.id">
            <div class="product-img" :class="p.cls"></div>
            <div class="product-body">
              <div class="product-header">
                <span class="product-tag">{{ p.cat }}</span>
                <span class="product-model">{{ p.model }}</span>
              </div>
              <h3>{{ p.name }}</h3>
              <div class="product-materials">
                <span v-for="m in p.materials" :key="m">{{ m }}</span>
              </div>
              <p class="product-desc">{{ p.desc }}</p>
              <div class="product-specs">
                <div class="spec-row"><span class="spec-label">尺寸</span><span class="spec-val">{{ p.size }}</span></div>
                <div class="spec-row" v-if="p.color"><span class="spec-label">可选色</span><span class="spec-val">{{ p.color }}</span></div>
                <div class="spec-row" v-if="p.moq"><span class="spec-label">起订量</span><span class="spec-val">{{ p.moq }}</span></div>
                <div class="spec-row" v-if="p.lead"><span class="spec-label">交期</span><span class="spec-val">{{ p.lead }}</span></div>
              </div>
              <router-link to="/contact" class="product-inquiry">咨询报价 &rarr;</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 展厅引导 -->
    <section class="showroom-guide">
      <div class="container">
        <div class="guide-grid">
          <div class="guide-text">
            <p class="section-eyebrow">Showroom</p>
            <h2>欢迎预约<br/>展厅体验</h2>
            <div class="divider"></div>
            <p>5,000 ㎡ 实景展厅陈列全系列产品。我们相信，真正的质感需要亲眼所见、亲手触摸。</p>
            <p>专业顾问一对一讲解，根据您的项目需求提供针对性选型建议与搭配方案。</p>
            <router-link to="/contact" class="text-link">预约展厅参观 &rarr;</router-link>
          </div>
          <div class="guide-visual"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCat = ref('all')
const categories = [
  { label: '全系列', value: 'all' },
  { label: '沙发', value: '沙发' },
  { label: '茶几/角几', value: '茶几' },
  { label: '餐桌椅', value: '餐桌' },
  { label: '床', value: '床' },
  { label: '柜类', value: '柜类' },
]

const products = [
  { id: 1, cat: '沙发', name: 'Palermo 转角沙发', model: 'ZP-SF-001', cls: 'p-sf1', materials: ['进口头层牛皮', '高密度海绵', '不锈钢脚'], desc: 'L 型模块化设计，可自由组合适应不同空间。座垫采用三层密度海绵结构，坐感软硬适中，适合大平层与别墅客厅。', size: 'W320 × D180 × H75 cm', color: '12 色可选', moq: '1 套', lead: '25–35 天' },
  { id: 2, cat: '沙发', name: 'Verona 直排三人位', model: 'ZP-SF-002', cls: 'p-sf2', materials: ['意大利磨砂皮', '羽绒填充', '碳素钢框架'], desc: '极窄扶手设计最大化座面宽度。座垫填充白鹅绒与高弹海绵，深坐深提供沉浸式包裹感，适合舒适导向的现代客厅。', size: 'W260 × D100 × H72 cm', color: '8 色可选', moq: '1 套', lead: '25–35 天' },
  { id: 3, cat: '沙发', name: 'Capri 休闲单椅', model: 'ZP-SF-003', cls: 'p-sf3', materials: ['羊毛混纺面料', '白橡木框架', '黄铜脚帽'], desc: '经典丹麦设计语言，高背弧线贴合人体脊柱曲线。扶手宽度可放置一本书与一杯茶，是阅读角的理想之选。', size: 'W78 × D82 × H98 cm', color: '6 色可选', moq: '2 件', lead: '20–25 天' },
  { id: 4, cat: '沙发', name: 'Bologna 模块组合沙发', model: 'ZP-SF-004', cls: 'p-sf4', materials: ['科技布', '实木框架', '铝合金连接件'], desc: '由 6 个独立模块组成，支持一字、L 型、U 型等多种组合形态，适应派对、观影等不同场景。科技布面料防水防污。', size: '单模块 W100 × D100 cm', color: '4 色可选', moq: '4 模块', lead: '25–35 天' },
  { id: 5, cat: '茶几', name: 'Como 组合茶几', model: 'ZP-CT-001', cls: 'p-ct1', materials: ['天然大理石台面', '拉丝不锈钢', '钢化玻璃'], desc: '高低错落双台面设计，大理石纹理独一无二。高几可单独作为角几使用，低几下方可收纳杂志与遥控器。', size: '大 Ø100×H38 · 小 Ø70×H48 cm', color: '3 种台面色', moq: '1 套', lead: '20–30 天' },
  { id: 6, cat: '茶几', name: 'Siena 角几', model: 'ZP-CT-002', cls: 'p-ct2', materials: ['黑胡桃木', '黄铜拉手', '真皮包边'], desc: '圆润倒角处理，抽屉设计兼顾美观与收纳功能。顶部可放置台灯与书籍，抽屉收纳遥控器等小物。', size: 'W55 × D45 × H60 cm', color: '2 种木色', moq: '2 件', lead: '15–20 天' },
  { id: 7, cat: '餐桌', name: 'Montalcino 长餐桌', model: 'ZP-DT-001', cls: 'p-dt1', materials: ['北美白橡木', '岩板台面', '铝合金底座'], desc: '2.4 米桌面满足 8–10 人用餐。内置伸缩机构，可快速扩展至 3.2 米。岩板台面耐热耐刮，日常维护简便。', size: 'W240/320 × D100 × H76 cm', color: '3 种台面色', moq: '1 件', lead: '25–35 天' },
  { id: 8, cat: '餐桌', name: 'Orvieto 圆餐桌', model: 'ZP-DT-002', cls: 'p-dt2', materials: ['胡桃木贴皮', '实木转盘', '金属中柱'], desc: '1.5 米直径圆桌，中式围桌文化的现代演绎。内置转盘转动顺滑静音，适合家庭聚餐与商务宴请。', size: 'Ø150 × H76 cm', color: '2 种木色', moq: '1 件', lead: '25–35 天' },
  { id: 9, cat: '餐桌', name: 'Lucca 餐椅', model: 'ZP-DC-001', cls: 'p-dc1', materials: ['进口牛皮', '白蜡木框架', '高弹海绵'], desc: '弧面靠背贴合腰线，座垫前缘瀑布型设计减轻大腿压力。久坐不累，兼顾端庄外观与舒适体验。', size: 'W52 × D56 × H82 cm', color: '8 色可选', moq: '4 件', lead: '20–30 天' },
  { id: 10, cat: '床', name: 'Bellagio 主卧床', model: 'ZP-BD-001', cls: 'p-bd1', materials: ['头层牛皮软包', '实木排骨架', '榉木床脚'], desc: '高靠背设计搭配意大利进口牛皮软包，床头内置阅读灯与 USB 充电口。床箱气压升降，提供大容量储物空间。', size: 'W200 × D220 × H125 cm', color: '6 色可选', moq: '1 件', lead: '25–35 天' },
  { id: 11, cat: '床', name: 'Tivoli 次卧床', model: 'ZP-BD-002', cls: 'p-bd2', materials: ['棉麻面料', '松木框架', '金属支撑腿'], desc: '轻盈现代设计，底部离地 15cm 方便扫地机器人通过。靠背可拆卸更换面料，适应不同风格变化。', size: 'W160 × D210 × H105 cm', color: '5 色可选', moq: '1 件', lead: '20–30 天' },
  { id: 12, cat: '床', name: 'Firenze 儿童床', model: 'ZP-BD-003', cls: 'p-bd3', materials: ['环保水性漆', '榉木实木', '圆角安全设计'], desc: '全榉木实木打造，采用德国 OSMO 植物木蜡油涂装，零甲醛释放。围栏高度可调，从幼儿陪伴到独立睡眠一步到位。', size: 'W100 × D200 × H90 cm', color: '原木色 / 白色', moq: '1 件', lead: '15–25 天' },
  { id: 13, cat: '柜类', name: 'Amalfi 电视柜', model: 'ZP-CB-001', cls: 'p-cb1', materials: ['黑胡桃木贴皮', '天然大理石', '缓冲铰链'], desc: '2.2 米超长柜体采用悬浮式安装设计，隐藏走线槽解决线缆杂乱问题。柜门为反弹式开启，无拉手极简外观。', size: 'W220 × D45 × H50 cm', color: '2 种木色', moq: '1 件', lead: '25–35 天' },
  { id: 14, cat: '柜类', name: 'Portofino 玄关柜', model: 'ZP-CB-002', cls: 'p-cb2', materials: ['橄榄木贴皮', '黄铜五金', '皮革内饰'], desc: '入户第一眼的仪式感。三门设计容量充足，内置可调节隔板，抽屉内衬皮革防滑。黄铜拉手为失蜡法铸造。', size: 'W120 × D40 × H100 cm', color: '1 种木色', moq: '1 件', lead: '25–35 天' },
  { id: 15, cat: '柜类', name: 'Ravenna 书柜', model: 'ZP-CB-003', cls: 'p-cb3', materials: ['白橡木贴皮', '钢化玻璃层板', 'LED 灯带'], desc: '开放式与封闭式结合的模块化书柜。内置暖光 LED 灯带，玻璃层板通透轻盈。单模块可独立使用，也可多组并排。', size: 'W90 × D35 × H220 cm', color: '2 种木色', moq: '1 件', lead: '25–35 天' },
  { id: 16, cat: '茶几', name: 'Vicenza 边几组合', model: 'ZP-CT-003', cls: 'p-ct3', materials: ['不锈钢底座', '岩板台面', '磁吸连接'], desc: '三件套可自由排列，底座之间通过磁吸连接固定。轻巧的设计方便随时移动至沙发或床边使用。', size: '各 Ø40 × H50 cm × 3 件', color: '2 种', moq: '1 套', lead: '20–25 天' },
]

const filteredProducts = computed(() =>
  activeCat.value === 'all' ? products : products.filter(p => p.cat === activeCat.value)
)
</script>

<style scoped>
/* Banner */
.page-banner { padding: 200px 0 100px; background: linear-gradient(135deg, #1a1a1a, #2c2416); text-align: center; }
.banner-eyebrow { font-size: 12px; letter-spacing: 8px; color: var(--color-gold); margin-bottom: 16px; }
.banner-inner h1 { font-family: var(--font-serif); font-size: 52px; font-weight: 300; color: #fff; letter-spacing: 12px; margin-bottom: 12px; }
.banner-sub { font-size: 15px; color: rgba(255,255,255,0.45); letter-spacing: 3px; }

/* Section */
.section { padding: 80px 0; }
.section-eyebrow { font-size: 12px; letter-spacing: 6px; color: var(--color-gold); margin-bottom: 16px; }
.divider { width: 40px; height: 1px; background: var(--color-gold); margin-bottom: 32px; }

/* Tabs */
.tabs { display: flex; justify-content: center; gap: 4px; margin-bottom: 48px; flex-wrap: wrap; }
.tabs button { padding: 14px 36px; border: none; background: none; font-size: 14px; letter-spacing: 3px; color: var(--color-gray); cursor: pointer; transition: all 0.3s; font-family: inherit; }
.tabs button:hover { color: var(--color-dark); }
.tabs button.active { color: var(--color-gold); border-bottom: 1px solid var(--color-gold); }
.result-count { text-align: center; font-size: 13px; color: var(--color-light-gray); margin-bottom: 44px; letter-spacing: 2px; }

/* Grid */
.product-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
.product-card { background: #fff; border: 1px solid var(--color-border); transition: border-color 0.3s; }
.product-card:hover { border-color: #ccc; }
.product-img { height: 360px; }
.p-sf1 { background: linear-gradient(135deg, #3a3028, #504436); }
.p-sf2 { background: linear-gradient(135deg, #2c3035, #424850); }
.p-sf3 { background: linear-gradient(135deg, #4a3f35, #5c4e40); }
.p-sf4 { background: linear-gradient(135deg, #353840, #4a4d55); }
.p-ct1 { background: linear-gradient(135deg, #2a2a2a, #3d3d3d); }
.p-ct2 { background: linear-gradient(135deg, #3b3028, #4d4036); }
.p-ct3 { background: linear-gradient(135deg, #2c3038, #404550); }
.p-dt1 { background: linear-gradient(135deg, #353025, #4a4035); }
.p-dt2 { background: linear-gradient(135deg, #2d2820, #3d352d); }
.p-dc1 { background: linear-gradient(135deg, #3a3530, #504840); }
.p-bd1 { background: linear-gradient(135deg, #2e2a28, #423d38); }
.p-bd2 { background: linear-gradient(135deg, #332e2a, #484038); }
.p-bd3 { background: linear-gradient(135deg, #302c26, #423a32); }
.p-cb1 { background: linear-gradient(135deg, #2a2520, #3d3630); }
.p-cb2 { background: linear-gradient(135deg, #302a24, #403830); }
.p-cb3 { background: linear-gradient(135deg, #353028, #484036); }

.product-body { padding: 32px 28px; }
.product-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.product-tag { font-size: 11px; letter-spacing: 4px; color: var(--color-gold); }
.product-model { font-size: 12px; color: var(--color-light-gray); letter-spacing: 1px; }
.product-body h3 { font-family: var(--font-serif); font-size: 22px; font-weight: 400; color: var(--color-dark); margin-bottom: 14px; letter-spacing: 2px; }
.product-materials { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
.product-materials span { padding: 5px 12px; background: #f5f5f5; font-size: 11px; color: var(--color-gray); letter-spacing: 1px; }
.product-desc { font-size: 14px; color: var(--color-gray); line-height: 1.8; margin-bottom: 22px; }
.product-specs { border-top: 1px solid var(--color-border); padding-top: 18px; margin-bottom: 22px; }
.spec-row { display: flex; justify-content: space-between; padding: 6px 0; }
.spec-label { font-size: 12px; color: var(--color-light-gray); letter-spacing: 1px; }
.spec-val { font-size: 13px; color: var(--color-dark); }
.product-inquiry { font-size: 13px; color: var(--color-gold); text-decoration: none; letter-spacing: 2px; transition: opacity 0.3s; border-bottom: 1px solid transparent; padding-bottom: 2px; }
.product-inquiry:hover { border-color: var(--color-gold); }

/* Showroom */
.showroom-guide { padding: 0 0 100px; }
.guide-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.guide-text h2 { font-family: var(--font-serif); font-size: 36px; font-weight: 300; letter-spacing: 6px; color: var(--color-dark); margin-bottom: 20px; line-height: 1.3; }
.guide-text p { font-size: 15px; color: var(--color-gray); line-height: 1.9; margin-bottom: 16px; }
.text-link { color: var(--color-gold); text-decoration: none; font-size: 14px; letter-spacing: 3px; border-bottom: 1px solid var(--color-gold); padding-bottom: 4px; transition: opacity 0.3s; }
.text-link:hover { opacity: 0.7; }
.guide-visual { min-height: 400px; background: linear-gradient(135deg, #2c2822, #4a4035); position: relative; }
.guide-visual::after { content: '🏛'; position: absolute; bottom: 20px; right: 20px; font-size: 48px; opacity: 0.2; }

@media (max-width: 768px) {
  .page-banner { padding: 140px 0 60px; }
  .banner-inner h1 { font-size: 32px; letter-spacing: 4px; }
  .product-grid { grid-template-columns: 1fr; }
  .guide-grid { grid-template-columns: 1fr; }
  .guide-visual { min-height: 240px; }
}
</style>
