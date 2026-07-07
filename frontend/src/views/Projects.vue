<template>
  <div class="page-projects">
    <section class="page-banner">
      <div class="banner-inner">
        <p class="banner-eyebrow">Engineering Projects</p>
        <h1>工程案例</h1>
        <p class="banner-sub">两千余项目沉淀，覆盖星级酒店、别墅府邸与商业空间</p>
      </div>
    </section>

    <!-- Tabs -->
    <section class="section">
      <div class="container">
        <div class="tabs">
          <button v-for="cat in categories" :key="cat.value" :class="{ active: activeCat === cat.value }" @click="activeCat = cat.value">{{ cat.label }}</button>
        </div>
        <p class="result-count">共 {{ filteredProjects.length }} 个案例</p>

        <div class="project-list">
          <div class="project-row" v-for="(p, idx) in filteredProjects" :key="p.name" :class="{ reversed: idx % 2 === 1 }">
            <div class="project-visual" :class="p.cls">
              <div class="pv-tag">{{ p.cat }}</div>
            </div>
            <div class="project-detail">
              <span class="project-cat">{{ p.cat }}</span>
              <h3>{{ p.name }}</h3>
              <div class="project-meta-row">
                <div class="meta-item"><span class="meta-label">地点</span><span class="meta-val">{{ p.location }}</span></div>
                <div class="meta-item"><span class="meta-label">规模</span><span class="meta-val">{{ p.scale }}</span></div>
                <div class="meta-item"><span class="meta-label">年份</span><span class="meta-val">{{ p.year }}</span></div>
              </div>
              <div class="divider"></div>
              <p class="project-desc">{{ p.desc }}</p>
              <div class="project-products">
                <span class="pp-label">使用产品：</span>
                <span v-for="ps in p.productSeries" :key="ps" class="pp-tag">{{ ps }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-sm">
      <div class="cta-sm-inner">
        <p>需要为您的项目定制家具方案？</p>
        <router-link to="/custom" class="btn-gold">了解定制服务</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const activeCat = ref('all')
const categories = [
  { label: '全部', value: 'all' }, { label: '酒店工程', value: '酒店' }, { label: '别墅私宅', value: '别墅' }, { label: '商业空间', value: '商业' }, { label: '办公家具', value: '办公' },
]
const projects = [
  { cat: '酒店', name: '杭州西溪悦榕庄', location: '浙江杭州', scale: '120 间客房 + 公区', year: '2024', cls: 'pj-h1', productSeries: ['Milano 米兰系列', 'Jiangnan 江南系列'], desc: '全案定制客房家具、公区沙发组及餐厅桌椅。以意式轻奢融合东方禅意，营造静谧隐逸的度假氛围。所有木材采用 FSC 认证实木，皮革通过欧盟 REACH 环保标准。床头柜内置无线充电模块，衣柜内嵌感应灯带，在传统美学中融入当代科技。' },
  { cat: '酒店', name: '三亚艾迪逊酒店', location: '海南三亚', scale: '260 间客房 + 泳池区', year: '2023', cls: 'pj-h2', productSeries: ['Milano 米兰系列'], desc: '全案供应客房、大堂吧、泳池休闲区家具。户外家具全部采用 6063-T5 耐候铝合金框架与 Sunbrella 户外面料，经 1,000 小时盐雾测试不褪色、不生锈。藤编装饰件为海南本地匠人手工编织，与当代设计形成有趣对话。' },
  { cat: '酒店', name: '成都博舍酒店', location: '四川成都', scale: '80 间客房', year: '2024', cls: 'pj-h3', productSeries: ['Jiangnan 江南系列'], desc: '为太古里地标酒店定制中西合璧风格家具。床背板以蜀锦元素为灵感定制刺绣图案，迷你吧柜体为整块楠木 CNC 雕刻。每间客房家具均为独立编号，确保一房一案的独特性。' },
  { cat: '别墅', name: '深圳湾壹号私人府邸', location: '广东深圳', scale: '800 ㎡', year: '2024', cls: 'pj-v1', productSeries: ['Milano 米兰系列', 'Nordic 北欧系列'], desc: '全屋定制家具方案，涵盖客厅、餐厅、主卧、书房、影音室及衣帽间共 48 件家具。主沙发采用意大利 Gruppo Mastrotto 粒面牛皮，茶几台面为意大利卡拉拉天然大理石，每一块石纹皆由业主亲自挑选。全屋木作统一为北美黑胡桃木，纹理连续对花。' },
  { cat: '别墅', name: '上海汤臣一品复式府邸', location: '上海', scale: '650 ㎡', year: '2023', cls: 'pj-v2', productSeries: ['Jiangnan 江南系列'], desc: '新中式风格全屋定制。入口玄关屏风为缅甸花梨木榫卯结构，餐厅 2 米直径圆桌由整块木材旋切而成，12 把餐椅软包为苏绣非遗传承人手工刺绣。铜件全部采用失蜡法铸造工艺，表面做旧处理呈现岁月质感。' },
  { cat: '别墅', name: '广州二沙岛别墅', location: '广东广州', scale: '520 ㎡', year: '2025', cls: 'pj-v3', productSeries: ['Milano 米兰系列'], desc: '意式极简风格五层别墅全屋定制。客厅挑高 6 米，定制 5 米高书架为钢结构龙骨+实木贴皮。餐厅定制 3.5 米加长岩板餐桌，搭配 14 把餐椅。主卧衣帽间为全开放式模块化系统，灯光色温可根据昼夜自动调节。' },
  { cat: '商业', name: '成都太古里高端会所', location: '四川成都', scale: '1,200 ㎡', year: '2024', cls: 'pj-c1', productSeries: ['Milano 米兰系列', 'Nordic 北欧系列'], desc: '包含接待大厅、私宴厅、普洱茶室与雪茄吧的全案家具方案。接待区定制弧形沙发环绕中庭水景，私宴厅 12 米长餐桌为独家开模岩板，内置保温与电磁感应系统。茶室全部采用缅甸花梨木定制，雪茄吧为深色皮质风格。' },
  { cat: '商业', name: '北京 SKP 贵宾 Lounge', location: '北京', scale: '400 ㎡', year: '2024', cls: 'pj-c2', productSeries: ['Milano 米兰系列'], desc: '高端商场 VIP 休息区全案家具定制。模块化沙发可灵活组合应对新品发布、VIP 接待等不同场景。面料选用意大利 Loro Piana 内饰系列，触感极致细腻。所有家具内置隐藏式充电接口，兼顾美学与功能。' },
  { cat: '办公', name: '字节跳动深圳总部', location: '广东深圳', scale: '3 层办公区', year: '2023', cls: 'pj-o1', productSeries: ['Nordic 北欧系列'], desc: '开放式办公区、会议室、休闲区与电话间全案家具。自主研发升降桌系统通过 BIFMA 认证，配置记忆高度与久坐提醒功能。休闲区模块化沙发支持快速重组，满足团队扩张与重组需求。' },
  { cat: '办公', name: '招商银行总行大厦', location: '广东深圳', scale: '12 层办公区', year: '2022', cls: 'pj-o2', productSeries: ['Jiangnan 江南系列', 'Nordic 北欧系列'], desc: '高管办公区采用新中式实木班台与书柜组合，班台内置线缆管理系统与指纹锁抽屉。员工区使用北欧简约系列升降桌加人体工学椅。全部产品通过 GREENGUARD Gold 室内空气质量认证。' },
  { cat: '商业', name: '上海新天地设计酒店', location: '上海', scale: '65 间客房', year: '2024', cls: 'pj-h4', productSeries: ['Milano 米兰系列', 'Nordic 北欧系列'], desc: '设计师精品酒店全案家具。每层楼一个主题色，客房家具配色对应变化。床架为悬浮式设计，底部 LED 灯带营造漂浮感。公区采用水泥灰北欧系列搭配绿植，营造城市绿洲氛围。' },
  { cat: '办公', name: '华为松山湖研发中心', location: '广东东莞', scale: '5 栋办公楼', year: '2024', cls: 'pj-o3', productSeries: ['Nordic 北欧系列'], desc: '欧洲小镇风格园区办公家具全案。根据不同建筑风格（巴黎、维罗纳、格拉纳达等）定制不同配色方案的北欧系列家具，在统一中寻求变化。所有升降桌通过人体工学认证。' },
]
const filteredProjects = computed(() => activeCat.value === 'all' ? projects : projects.filter(p => p.cat === activeCat.value))
</script>

<style scoped>
.page-banner { padding: 200px 0 100px; background: linear-gradient(135deg, #1a1a1a, #2c2416); text-align: center; }
.banner-eyebrow { font-size: 12px; letter-spacing: 8px; color: var(--color-gold); margin-bottom: 16px; }
.banner-inner h1 { font-family: var(--font-serif); font-size: 52px; font-weight: 300; color: #fff; letter-spacing: 12px; margin-bottom: 12px; }
.banner-sub { font-size: 15px; color: rgba(255,255,255,0.45); letter-spacing: 3px; }
.section { padding: 80px 0; }
.tabs { display: flex; justify-content: center; gap: 4px; margin-bottom: 48px; flex-wrap: wrap; }
.tabs button { padding: 14px 36px; border: none; background: none; font-size: 14px; letter-spacing: 3px; color: var(--color-gray); cursor: pointer; transition: all 0.3s; font-family: inherit; }
.tabs button:hover { color: var(--color-dark); }
.tabs button.active { color: var(--color-gold); border-bottom: 1px solid var(--color-gold); }
.result-count { text-align: center; font-size: 13px; color: var(--color-light-gray); margin-bottom: 56px; letter-spacing: 2px; }

.project-list { display: flex; flex-direction: column; gap: 100px; }
.project-row { display: grid; grid-template-columns: 1.2fr 1fr; gap: 72px; align-items: center; }
.project-row.reversed { direction: rtl; }
.project-row.reversed .project-detail { direction: ltr; }
.project-visual { min-height: 440px; position: relative; }
.pv-tag { position: absolute; top: 20px; left: 20px; padding: 8px 20px; background: rgba(0,0,0,0.5); color: #fff; font-size: 11px; letter-spacing: 4px; }
.pj-h1 { background-image: url('https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'); background-size: cover; background-position: center; }
.pj-h2 { background-image: url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80'); background-size: cover; background-position: center; }
.pj-h3 { background-image: url('https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80'); background-size: cover; background-position: center; }
.pj-h4 { background-image: url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'); background-size: cover; background-position: center; }
.pj-v1 { background-image: url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'); background-size: cover; background-position: center; }
.pj-v2 { background-image: url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80'); background-size: cover; background-position: center; }
.pj-v3 { background-image: url('https://images.unsplash.com/photo-1600210492492-0946911123ea?w=800&q=80'); background-size: cover; background-position: center; }
.pj-c1 { background-image: url('https://images.unsplash.com/photo-1604328699207-20bf1514b7b0?w=800&q=80'); background-size: cover; background-position: center; }
.pj-c2 { background-image: url('https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80'); background-size: cover; background-position: center; }
.pj-o1 { background-image: url('https://images.unsplash.com/photo-1604328699207-20bf1514b7b0?w=800&q=80'); background-size: cover; background-position: center; }
.pj-o2 { background-image: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80'); background-size: cover; background-position: center; }
.pj-o3 { background-image: url('https://images.unsplash.com/photo-1497366753791-e7b12d47c751?w=800&q=80'); background-size: cover; background-position: center; }

.project-cat { font-size: 12px; letter-spacing: 5px; color: var(--color-gold); }
.project-detail h3 { font-family: var(--font-serif); font-size: 34px; font-weight: 300; color: var(--color-dark); margin: 8px 0 20px; letter-spacing: 4px; }
.project-meta-row { display: flex; gap: 40px; margin-bottom: 24px; }
.meta-item {}
.meta-label { display: block; font-size: 11px; letter-spacing: 3px; color: var(--color-light-gray); margin-bottom: 4px; }
.meta-val { font-size: 14px; color: var(--color-dark); }
.divider { width: 40px; height: 1px; background: var(--color-gold); margin-bottom: 24px; }
.project-desc { font-size: 15px; color: var(--color-gray); line-height: 2; margin-bottom: 32px; }
.project-products { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.pp-label { font-size: 12px; color: var(--color-light-gray); }
.pp-tag { padding: 6px 18px; border: 1px solid var(--color-border); font-size: 12px; color: var(--color-gray); letter-spacing: 2px; }

.cta-sm { background: var(--color-dark); padding: 60px 0; margin-top: 0; }
.cta-sm .container { display: flex; justify-content: space-between; align-items: center; }
.cta-sm-inner { max-width: 1260px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 32px; }
.cta-sm-inner p { color: #aaa; font-size: 16px; letter-spacing: 3px; }
.btn-gold { display: inline-block; padding: 18px 48px; background: var(--color-gold); color: #fff; font-size: 14px; letter-spacing: 4px; text-decoration: none; transition: all 0.3s; }
.btn-gold:hover { background: #a07e3c; }

@media (max-width: 768px) {
  .page-banner { padding: 140px 0 60px; }
  .banner-inner h1 { font-size: 32px; letter-spacing: 4px; }
  .project-row, .project-row.reversed { grid-template-columns: 1fr; gap: 32px; direction: ltr; }
  .project-row.reversed .project-detail { direction: ltr; }
  .project-visual { min-height: 260px; }
  .project-detail h3 { font-size: 24px; }
  .project-list { gap: 56px; }
  .project-meta-row { gap: 24px; }
  .cta-sm-inner { flex-direction: column; gap: 20px; text-align: center; }
}
</style>
