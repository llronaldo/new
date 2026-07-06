<template>
  <div class="app-layout">
    <header class="header" :class="{ scrolled: isScrolled }">
      <div class="container header-inner">
        <router-link to="/" class="logo" :class="{ dark: isScrolled }">
          <img src="/logo.svg" alt="臻品家居" class="logo-img" />
        </router-link>
        <nav class="nav">
          <router-link to="/" class="nav-link" exact-active-class="active">首页</router-link>
          <router-link to="/products" class="nav-link" active-class="active">产品</router-link>
          <router-link to="/projects" class="nav-link" active-class="active">工程</router-link>
          <router-link to="/custom" class="nav-link" active-class="active">定制</router-link>
          <router-link to="/contact" class="nav-link" active-class="active">联系</router-link>
        </nav>
        <div class="header-spacer"></div>
        <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" :class="{ open: mobileOpen }">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="mobile-nav" :class="{ open: mobileOpen }">
        <router-link to="/" class="mobile-link" @click="mobileOpen = false">首页</router-link>
        <router-link to="/products" class="mobile-link" @click="mobileOpen = false">产品</router-link>
        <router-link to="/projects" class="mobile-link" @click="mobileOpen = false">工程</router-link>
        <router-link to="/custom" class="mobile-link" @click="mobileOpen = false">定制</router-link>
        <router-link to="/contact" class="mobile-link" @click="mobileOpen = false">联系</router-link>
      </nav>
    </header>
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-col brand-col">
          <h3 class="footer-brand"><span class="footer-logo-icon">&#9675;</span> 臻品家居</h3>
          <p class="footer-tagline">源头工厂 · 匠心制造</p>
          <p class="footer-copy">&copy; 2010–2026 臻品家居 版权所有</p>
        </div>
        <div class="footer-col">
          <h4>快速导航</h4>
          <router-link to="/products">产品系列</router-link>
          <router-link to="/projects">工程案例</router-link>
          <router-link to="/custom">定制服务</router-link>
          <router-link to="/contact">联系我们</router-link>
        </div>
        <div class="footer-col">
          <h4>总部展厅</h4>
          <p>佛山市顺德区乐从镇<br/>家居大道 288 号 · 5F</p>
          <p class="footer-sub">每日 9:00 – 18:00</p>
        </div>
        <div class="footer-col">
          <h4>工厂 & 联系</h4>
          <p>佛山市南海区九江镇<br/>工业大道 66 号</p>
          <p>400-168-8888</p>
          <p>info@zhenpin.com</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isScrolled = ref(false)
const mobileOpen = ref(false)
function handleScroll() { isScrolled.value = window.scrollY > 60 }
onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style>
:root {
  --color-dark: #1a1a1a;
  --color-gold: #b8944b;
  --color-bg: #ffffff;
  --color-white: #ffffff;
  --color-gray: #595959;
  --color-light-gray: #8c8c8c;
  --color-border: #e8e8e8;
  --font-serif: 'Times New Roman', 'Noto Serif SC', 'STSong', 'SimSun', 'Songti SC', serif;
  --font-sans: 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif;
}
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: var(--font-sans);
  color: var(--color-dark);
  background: var(--color-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
}
.container { max-width: 1260px; margin: 0 auto; padding: 0 32px; }

/* Header */
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 20px 0; transition: all 0.35s cubic-bezier(0.4,0,0.2,1); background: transparent; }
.header.scrolled { background: rgba(255,255,255,0.98); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid var(--color-border); padding: 14px 0; }
.header-inner { display: flex; align-items: center; justify-content: space-between; }
.logo { display: flex; align-items: center; text-decoration: none; flex: 1; }
.logo-img { height: 52px; filter: brightness(0) invert(1); transition: filter 0.35s; }
.logo.dark .logo-img { filter: none; }
.nav { display: flex; gap: 48px; }
.nav-link { text-decoration: none; color: rgba(255,255,255,0.78); font-size: 15px; letter-spacing: 3px; transition: color 0.3s; position: relative; padding-bottom: 4px; }
.header.scrolled .nav-link { color: var(--color-gray); }
.nav-link:hover { color: var(--color-gold); }
.nav-link.active { color: var(--color-gold); }
.nav-link.active::after { content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 20px; height: 1px; background: var(--color-gold); }
.header-spacer { flex: 1; }
.mobile-toggle { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; z-index: 101; }
.mobile-toggle span { display: block; width: 22px; height: 1px; background: #fff; transition: all 0.3s; }
.header.scrolled .mobile-toggle span { background: var(--color-dark); }
.mobile-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(4px,4px); }
.mobile-toggle.open span:nth-child(2) { opacity: 0; }
.mobile-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(4px,-4px); }
.mobile-nav { display: none; position: fixed; inset: 0; background: rgba(26,26,26,0.98); flex-direction: column; align-items: center; justify-content: center; gap: 32px; z-index: 100; }
.mobile-nav.open { display: flex; }
.mobile-link { color: #ccc; font-size: 22px; letter-spacing: 6px; text-decoration: none; transition: color 0.3s; }
.mobile-link:hover { color: var(--color-gold); }
.main-content { min-height: 100vh; }

/* Footer */
.footer { background: var(--color-dark); color: #8c8c8c; padding: 80px 0 40px; }
.footer-inner { display: grid; grid-template-columns: 1.5fr 1fr 1.2fr 1.2fr; gap: 48px; }
.footer-brand { display: flex; align-items: center; }
.footer-brand-img { height: 40px; opacity: 0.6; }
.footer-logo-icon { display: none; }
.footer-logo-icon { font-size: 24px; color: var(--color-gold); }
.footer-tagline { color: var(--color-gold); font-size: 13px; letter-spacing: 3px; margin-top: 8px; }
.footer-copy { font-size: 12px; color: #595959; margin-top: 24px; }
.footer-col h4 { font-size: 13px; letter-spacing: 3px; color: #aaa; margin-bottom: 20px; font-weight: 400; text-transform: uppercase; }
.footer-col a { display: block; color: #8c8c8c; text-decoration: none; margin-bottom: 12px; font-size: 14px; transition: color 0.3s; }
.footer-col a:hover { color: var(--color-gold); }
.footer-col p { margin-bottom: 10px; font-size: 14px; line-height: 1.8; }
.footer-sub { font-size: 12px; color: #666; }

@media (max-width: 768px) {
  .nav { display: none; }
  .mobile-toggle { display: flex; }
  .header-spacer { display: none; }
  .footer-inner { grid-template-columns: 1fr; gap: 36px; }
  .logo-text { font-size: 18px; letter-spacing: 3px; }
  .container { padding: 0 20px; }
}
</style>
