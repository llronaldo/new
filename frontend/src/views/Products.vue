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
        <p v-if="loading" class="loading-text">加载中…</p>
        <p v-else class="result-count">共 {{ filteredProducts.length }} 款产品</p>
        <div v-if="loading" class="loading-text">加载中…</div>
        <div class="product-grid" v-else>
          <div class="product-card" v-for="p in filteredProducts" :key="p.id">
            <div class="product-img" :style="p.cover ? { backgroundImage: 'url(' + p.cover + ')' } : {}"></div>
            <div class="product-body">
              <div class="product-header">
                <span class="product-tag">{{ p.category?.name }}</span>
                <span class="product-model">{{ p.model_number }}</span>
              </div>
              <h3>{{ p.name }}</h3>
              <div class="product-materials">
                <span v-for="(m, i) in p.materials" :key="i">{{ m }}</span>
              </div>
              <p class="product-desc">{{ p.summary }}</p>
              <div class="product-specs" v-if="p.specEntries?.length">
                <div class="spec-row" v-for="(s, i) in p.specEntries" :key="i">
                  <span class="spec-label">{{ s.label }}</span>
                  <span class="spec-val">{{ s.value }}</span>
                </div>
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
import { ref, computed, onMounted } from 'vue'
import { getProducts, getProductCategories } from '../api/index.js'

const activeCat = ref('all')
const categories = ref([])
const products = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const [catRes, prodRes] = await Promise.all([
      getProductCategories(),
      getProducts(),
    ])
    categories.value = [
      { label: '全系列', value: 'all' },
      ...(catRes.results || catRes).map(c => ({ label: c.name, value: c.slug })),
    ]
    products.value = (prodRes.results || prodRes).map(p => ({
      ...p,
      // 将 features 解析为数组（每行一个特点）
      materials: (p.features || '').split('\n').filter(Boolean),
      // 将 specs 解析为规格对象 { label, value }[]
      specEntries: (p.specs || '').split('\n').filter(Boolean).map(line => {
        const [label, ...rest] = line.split(/[:：]/)
        return { label: label?.trim(), value: rest.join(':').trim() }
      }).filter(s => s.label && s.value),
    }))
  } catch (e) {
    console.error('加载产品数据失败:', e)
  } finally {
    loading.value = false
  }
})

const filteredProducts = computed(() =>
  activeCat.value === 'all' ? products.value : products.value.filter(p => p.category?.slug === activeCat.value)
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
.product-img { height: 360px; background-size: cover; background-position: center; background-color: #f0f0f0; }
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
.guide-visual { min-height: 400px; background: url('https://images.unsplash.com/photo-1600210492492-0946911123ea?w=1200&q=80') center/cover; position: relative; }

@media (max-width: 768px) {
  .page-banner { padding: 140px 0 60px; }
  .banner-inner h1 { font-size: 32px; letter-spacing: 4px; }
  .product-grid { grid-template-columns: 1fr; }
  .guide-grid { grid-template-columns: 1fr; }
  .guide-visual { min-height: 240px; }
}
</style>
