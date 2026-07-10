<template>
  <div class="page-news">
    <!-- Banner -->
    <section class="page-banner">
      <div class="banner-inner">
        <p class="banner-eyebrow">News Center</p>
        <h1>新闻中心</h1>
        <p class="banner-sub">公司动态 · 行业资讯 · 产品发布</p>
      </div>
    </section>

    <!-- 新闻列表 -->
    <section class="section">
      <div class="container">
        <!-- 分类 Tab -->
        <div class="tabs">
          <button v-for="cat in categories" :key="cat.value" :class="{ active: activeCat === cat.value }" @click="activeCat = cat.value">{{ cat.label }}</button>
        </div>

        <p v-if="loading" class="loading-text">加载中…</p>

        <template v-else-if="filteredNews.length">
          <p class="result-count">共 {{ filteredNews.length }} 篇</p>
          <div class="news-list">
            <div class="news-card" v-for="item in filteredNews" :key="item.id" :class="{ expanded: expandedId === item.id, 'is-top': item.is_top }" @click="toggleExpand(item.id)">
              <div class="news-cover" :style="item.cover ? { backgroundImage: 'url(' + item.cover + ')' } : { backgroundImage: 'url(https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80)' }">
                <span class="news-tag">{{ item.category?.name }}</span>
                <span v-if="item.is_top" class="top-badge">置顶</span>
              </div>
              <div class="news-body">
                <div class="news-meta">
                  <span class="news-cat">{{ item.category?.name }}</span>
                  <span class="news-date">{{ formatDate(item.created_at) }}</span>
                  <span class="news-views" v-if="item.views">{{ item.views }} 阅读</span>
                </div>
                <h3>{{ item.title }}</h3>
                <p class="news-summary">{{ item.summary }}</p>
                <div class="news-content" v-if="expandedId === item.id">
                  <div class="content-divider"></div>
                  <div class="content-body" v-html="formatContent(item.content)"></div>
                </div>
                <span class="news-toggle">{{ expandedId === item.id ? '收起 ▲' : '阅读全文 ▼' }}</span>
              </div>
            </div>
          </div>
        </template>
        <div v-else class="empty-text">暂无新闻</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getNews, getNewsCategories } from '../api/index.js'

const activeCat = ref('all')
const categories = ref([])
const newsList = ref([])
const expandedId = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const [catRes, newsRes] = await Promise.all([
      getNewsCategories(),
      getNews(),
    ])
    categories.value = [
      { label: '全部', value: 'all' },
      ...(catRes.results || catRes).map(c => ({ label: c.name, value: c.slug })),
    ]
    newsList.value = (newsRes.results || newsRes)
  } catch (e) {
    console.error('加载新闻数据失败:', e)
  } finally {
    loading.value = false
  }
})

const filteredNews = computed(() =>
  activeCat.value === 'all'
    ? newsList.value
    : newsList.value.filter(n => n.category?.slug === activeCat.value)
)

function toggleExpand(id) {
  expandedId.value = expandedId.value === id ? null : id
}

function formatDate(iso) {
  if (!iso) return ''
  return iso.slice(0, 10)
}

function formatContent(text) {
  if (!text) return ''
  return text.split('\n').filter(Boolean).map(p => '<p>' + p + '</p>').join('')
}
</script>

<style scoped>
.page-banner { padding: 200px 0 100px; background: linear-gradient(135deg, #1a1a1a, #2c2416); text-align: center; }
.banner-eyebrow { font-size: 12px; letter-spacing: 8px; color: var(--color-gold); margin-bottom: 16px; }
.banner-inner h1 { font-family: var(--font-serif); font-size: 52px; font-weight: 300; color: #fff; letter-spacing: 12px; margin-bottom: 12px; }
.banner-sub { font-size: 15px; color: rgba(255,255,255,0.45); letter-spacing: 3px; }

.section { padding: 80px 0; }

/* Tabs */
.tabs { display: flex; justify-content: center; gap: 4px; margin-bottom: 48px; flex-wrap: wrap; }
.tabs button { padding: 14px 36px; border: none; background: none; font-size: 14px; letter-spacing: 3px; color: var(--color-gray); cursor: pointer; transition: all 0.3s; font-family: inherit; }
.tabs button:hover { color: var(--color-dark); }
.tabs button.active { color: var(--color-gold); border-bottom: 1px solid var(--color-gold); }
.result-count { text-align: center; font-size: 13px; color: var(--color-light-gray); margin-bottom: 48px; letter-spacing: 2px; }
.loading-text, .empty-text { text-align: center; color: var(--color-light-gray); padding: 60px 0; letter-spacing: 2px; font-size: 14px; }

/* 新闻列表 */
.news-list { display: flex; flex-direction: column; gap: 32px; max-width: 860px; margin: 0 auto; }
.news-card { display: grid; grid-template-columns: 280px 1fr; border: 1px solid var(--color-border); cursor: pointer; transition: border-color 0.3s, box-shadow 0.3s; }
.news-card:hover { border-color: #ccc; }
.news-card.expanded { box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
.news-card.is-top { border-left: 3px solid var(--color-gold); }
.news-cover { background-size: cover; background-position: center; background-color: #e8e8e8; position: relative; min-height: 200px; }
.news-tag { position: absolute; top: 12px; left: 12px; padding: 5px 14px; background: rgba(0,0,0,0.5); color: #fff; font-size: 11px; letter-spacing: 3px; }
.top-badge { position: absolute; top: 12px; right: 12px; padding: 5px 12px; background: var(--color-gold); color: #fff; font-size: 11px; letter-spacing: 2px; }
.news-body { padding: 28px 32px; }
.news-meta { display: flex; gap: 20px; margin-bottom: 10px; }
.news-cat { font-size: 11px; letter-spacing: 3px; color: var(--color-gold); }
.news-date, .news-views { font-size: 12px; color: var(--color-light-gray); letter-spacing: 1px; }
.news-body h3 { font-family: var(--font-serif); font-size: 20px; font-weight: 400; color: var(--color-dark); margin-bottom: 10px; letter-spacing: 2px; line-height: 1.4; }
.news-summary { font-size: 14px; color: var(--color-gray); line-height: 1.8; margin-bottom: 12px; }
.news-toggle { font-size: 12px; color: var(--color-gold); letter-spacing: 2px; transition: opacity 0.3s; }
.news-toggle:hover { opacity: 0.7; }
.content-divider { width: 100%; height: 1px; background: var(--color-border); margin: 16px 0; }
.content-body { font-size: 14px; color: var(--color-gray); line-height: 2; }
.content-body :deep(p) { margin-bottom: 12px; }

@media (max-width: 768px) {
  .page-banner { padding: 140px 0 60px; }
  .banner-inner h1 { font-size: 32px; letter-spacing: 4px; }
  .news-card { grid-template-columns: 1fr; }
  .news-cover { min-height: 180px; }
  .news-body { padding: 20px; }
}
</style>
