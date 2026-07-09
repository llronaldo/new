<template>
  <div class="page-about">
    <!-- Banner -->
    <section class="page-banner">
      <div class="banner-inner">
        <p class="banner-eyebrow">About Us</p>
        <h1>关于我们</h1>
        <p class="banner-sub">源头工厂 · 匠心制造 · 始于 2010</p>
      </div>
    </section>

    <!-- 公司简介 -->
    <section class="section">
      <div class="container">
        <p v-if="loading" class="loading-text">加载中…</p>
        <template v-else-if="company">
          <div class="intro-grid">
            <div class="intro-text">
              <p class="section-eyebrow">Company Profile</p>
              <h2 class="section-title">{{ company.name }}</h2>
              <div class="divider"></div>
              <p class="intro-body">{{ company.intro }}</p>
            </div>
            <div class="intro-values">
              <div class="value-card" v-if="company.vision">
                <h4>企业愿景</h4>
                <p>{{ company.vision }}</p>
              </div>
              <div class="value-card" v-if="company.mission">
                <h4>企业使命</h4>
                <p>{{ company.mission }}</p>
              </div>
              <div class="value-card" v-if="company.values">
                <h4>核心价值观</h4>
                <p>{{ company.values }}</p>
              </div>
            </div>
          </div>
        </template>
        <div v-else class="empty-text">暂无公司信息</div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="section timeline-section" v-if="history.length">
      <div class="container">
        <p class="section-eyebrow center">History</p>
        <h2 class="section-title center">发展历程</h2>
        <div class="divider center-d"></div>
        <div class="timeline">
          <div class="tl-item" v-for="(h, i) in history" :key="h.id" :class="{ right: i % 2 === 1 }">
            <div class="tl-content">
              <span class="tl-year">{{ h.year }}</span>
              <h4>{{ h.title }}</h4>
              <p>{{ h.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 资质荣誉 -->
    <section class="section honors-section" v-if="honors.length">
      <div class="container">
        <p class="section-eyebrow center">Honors &amp; Awards</p>
        <h2 class="section-title center">资质荣誉</h2>
        <div class="divider center-d"></div>
        <div class="honors-grid">
          <div class="honor-card" v-for="h in honors" :key="h.id">
            <div class="honor-img">
              <img :src="h.image" :alt="h.title" />
            </div>
            <div class="honor-info">
              <h4>{{ h.title }}</h4>
              <p v-if="h.description">{{ h.description }}</p>
              <span class="honor-date">{{ h.award_date }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心团队 -->
    <section class="section team-section" v-if="team.length">
      <div class="container">
        <p class="section-eyebrow center">Core Team</p>
        <h2 class="section-title center">核心团队</h2>
        <div class="divider center-d"></div>
        <div class="team-grid">
          <div class="team-card" v-for="t in team" :key="t.id">
            <div class="team-avatar">
              <img :src="t.avatar" :alt="t.name" />
            </div>
            <h4>{{ t.name }}</h4>
            <span class="team-pos">{{ t.position }}</span>
            <p v-if="t.intro">{{ t.intro }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAbout } from '../api/index.js'

const company = ref(null)
const history = ref([])
const honors = ref([])
const team = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await getAbout()
    if (res.code === 200 && res.data) {
      company.value = res.data
      history.value = (res.data.history || []).sort((a, b) => a.sort_order - b.sort_order)
      honors.value = (res.data.honors || []).sort((a, b) => a.sort_order - b.sort_order)
      team.value = (res.data.team || []).sort((a, b) => a.sort_order - b.sort_order)
    }
  } catch (e) {
    console.error('加载企业概况失败:', e)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.page-banner { padding: 200px 0 100px; background: linear-gradient(135deg, #1a1a1a, #2c2416); text-align: center; }
.banner-eyebrow { font-size: 12px; letter-spacing: 8px; color: var(--color-gold); margin-bottom: 16px; }
.banner-inner h1 { font-family: var(--font-serif); font-size: 52px; font-weight: 300; color: #fff; letter-spacing: 12px; margin-bottom: 12px; }
.banner-sub { font-size: 15px; color: rgba(255,255,255,0.45); letter-spacing: 3px; }

.section { padding: 100px 0; }
.section-eyebrow { font-size: 12px; letter-spacing: 6px; color: var(--color-gold); margin-bottom: 16px; }
.section-eyebrow.center { text-align: center; }
.section-title { font-family: var(--font-serif); font-size: 38px; font-weight: 300; letter-spacing: 6px; color: var(--color-dark); margin-bottom: 16px; }
.section-title.center { text-align: center; }
.divider { width: 40px; height: 1px; background: var(--color-gold); margin-bottom: 32px; }
.center-d { margin-left: auto; margin-right: auto; }
.loading-text, .empty-text { text-align: center; color: var(--color-light-gray); padding: 60px 0; letter-spacing: 2px; font-size: 14px; }

/* 公司简介 */
.intro-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 80px; align-items: start; }
.intro-body { font-size: 15px; color: var(--color-gray); line-height: 2.1; }
.intro-values { display: flex; flex-direction: column; gap: 20px; }
.value-card { background: #fafaf8; padding: 32px 28px; border-left: 2px solid var(--color-gold); }
.value-card h4 { font-size: 14px; letter-spacing: 3px; color: var(--color-gold); margin-bottom: 10px; }
.value-card p { font-size: 14px; color: var(--color-gray); line-height: 1.8; }

/* 发展历程 */
.timeline-section { background: #fafaf8; }
.timeline { position: relative; max-width: 860px; margin: 0 auto; }
.timeline::before { content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 1px; background: var(--color-border); transform: translateX(-50%); }
.tl-item { display: flex; justify-content: flex-start; margin-bottom: 48px; position: relative; }
.tl-item.right { justify-content: flex-end; }
.tl-content { width: 42%; background: #fff; padding: 32px; border: 1px solid var(--color-border); position: relative; }
.tl-item.right .tl-content { text-align: left; }
.tl-item::before { content: ''; position: absolute; left: 50%; top: 36px; width: 10px; height: 10px; background: var(--color-gold); border-radius: 50%; transform: translate(-50%, -50%); z-index: 1; }
.tl-year { display: block; font-family: var(--font-serif); font-size: 24px; color: var(--color-gold); margin-bottom: 6px; }
.tl-content h4 { font-size: 16px; letter-spacing: 2px; color: var(--color-dark); margin-bottom: 8px; }
.tl-content p { font-size: 13px; color: var(--color-gray); line-height: 1.7; }

/* 资质荣誉 */
.honors-section { background: #fff; }
.honors-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.honor-card { border: 1px solid var(--color-border); transition: box-shadow 0.3s; }
.honor-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
.honor-img { height: 220px; overflow: hidden; display: flex; align-items: center; justify-content: center; background: #f5f5f5; }
.honor-img img { width: 100%; height: 100%; object-fit: cover; }
.honor-info { padding: 24px 20px; }
.honor-info h4 { font-size: 16px; letter-spacing: 2px; color: var(--color-dark); margin-bottom: 8px; }
.honor-info p { font-size: 13px; color: var(--color-gray); line-height: 1.7; margin-bottom: 10px; }
.honor-date { font-size: 12px; color: var(--color-light-gray); letter-spacing: 1px; }

/* 核心团队 */
.team-section { background: #fff; }
.team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
.team-card { text-align: center; padding: 40px 20px; border: 1px solid var(--color-border); transition: border-color 0.3s; }
.team-card:hover { border-color: var(--color-gold); }
.team-avatar { width: 120px; height: 120px; margin: 0 auto 20px; border-radius: 50%; overflow: hidden; background: #f0f0f0; }
.team-avatar img { width: 100%; height: 100%; object-fit: cover; }
.team-card h4 { font-size: 16px; letter-spacing: 2px; color: var(--color-dark); margin-bottom: 4px; }
.team-pos { font-size: 12px; letter-spacing: 2px; color: var(--color-gold); display: block; margin-bottom: 12px; }
.team-card p { font-size: 13px; color: var(--color-gray); line-height: 1.7; }

@media (max-width: 768px) {
  .page-banner { padding: 140px 0 60px; }
  .banner-inner h1 { font-size: 32px; letter-spacing: 4px; }
  .intro-grid { grid-template-columns: 1fr; gap: 40px; }
  .timeline::before { left: 20px; }
  .tl-item, .tl-item.right { justify-content: flex-start; }
  .tl-content { width: calc(100% - 52px); margin-left: 52px; }
  .tl-item::before { left: 20px; }
  .tl-item.right .tl-content { margin-left: 52px; margin-right: 0; }
  .honors-grid { grid-template-columns: repeat(2, 1fr); }
  .team-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
