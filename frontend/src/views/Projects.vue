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
        <p v-if="loading" class="loading-text">加载中…</p>
        <template v-else>
          <p class="result-count">共 {{ filteredProjects.length }} 个案例</p>

          <div class="project-list">
            <div class="project-row" v-for="(p, idx) in filteredProjects" :key="p.id" :class="{ reversed: idx % 2 === 1 }">
              <div class="project-visual" :style="p.cover ? { backgroundImage: 'url(' + p.cover + ')' } : { backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80)' }">
                <div class="pv-tag">{{ p.category?.name }}</div>
              </div>
              <div class="project-detail">
                <span class="project-cat">{{ p.category?.name }}</span>
                <h3>{{ p.title }}</h3>
                <div class="project-meta-row">
                  <div class="meta-item" v-if="p.client"><span class="meta-label">客户</span><span class="meta-val">{{ p.client }}</span></div>
                  <div class="meta-item" v-if="p.industry"><span class="meta-label">行业</span><span class="meta-val">{{ p.industry }}</span></div>
                </div>
                <div class="divider"></div>
                <p class="project-desc">{{ p.summary }}</p>
                <div class="project-detail-sections" v-if="p.challenge || p.solution || p.result">
                  <div class="detail-block" v-if="p.challenge">
                    <h5>客户挑战</h5>
                    <p>{{ p.challenge }}</p>
                  </div>
                  <div class="detail-block" v-if="p.solution">
                    <h5>解决方案</h5>
                    <p>{{ p.solution }}</p>
                  </div>
                  <div class="detail-block" v-if="p.result">
                    <h5>项目成果</h5>
                    <p>{{ p.result }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
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
import { ref, computed, onMounted } from 'vue'
import { getCases, getCaseCategories } from '../api/index.js'

const activeCat = ref('all')
const categories = ref([])
const projects = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const [catRes, caseRes] = await Promise.all([
      getCaseCategories(),
      getCases(),
    ])
    categories.value = [
      { label: '全部', value: 'all' },
      ...(catRes.results || catRes).map(c => ({ label: c.name, value: c.slug })),
    ]
    projects.value = (caseRes.results || caseRes).map(p => ({
      ...p,
    }))
  } catch (e) {
    console.error('加载案例数据失败:', e)
  } finally {
    loading.value = false
  }
})

const filteredProjects = computed(() =>
  activeCat.value === 'all' ? projects.value : projects.value.filter(p => p.category?.slug === activeCat.value)
)
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
.project-visual { min-height: 440px; position: relative; background-size: cover; background-position: center; background-color: #e8e8e8; }
.pv-tag { position: absolute; top: 20px; left: 20px; padding: 8px 20px; background: rgba(0,0,0,0.5); color: #fff; font-size: 11px; letter-spacing: 4px; }
.project-cat { font-size: 12px; letter-spacing: 5px; color: var(--color-gold); }
.project-detail h3 { font-family: var(--font-serif); font-size: 34px; font-weight: 300; color: var(--color-dark); margin: 8px 0 20px; letter-spacing: 4px; }
.project-meta-row { display: flex; gap: 40px; margin-bottom: 24px; }
.meta-label { display: block; font-size: 11px; letter-spacing: 3px; color: var(--color-light-gray); margin-bottom: 4px; }
.meta-val { font-size: 14px; color: var(--color-dark); }
.divider { width: 40px; height: 1px; background: var(--color-gold); margin-bottom: 24px; }
.project-desc { font-size: 15px; color: var(--color-gray); line-height: 2; margin-bottom: 32px; }
.project-detail-sections { margin-top: 24px; display: flex; flex-direction: column; gap: 20px; }
.detail-block h5 { font-size: 13px; letter-spacing: 3px; color: var(--color-gold); margin-bottom: 8px; }
.detail-block p { font-size: 14px; color: var(--color-gray); line-height: 1.8; }
.loading-text { text-align: center; color: var(--color-light-gray); padding: 60px 0; letter-spacing: 2px; }

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
