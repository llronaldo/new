# 臻品家居企业官网 (Django + Vue 3)

## 项目概述

臻品家居（ZhenPin Furniture）企业官网，位于佛山顺德，专注高端家具制造。采用 Django 6 后端 + Vue 3 前端的分离架构。

- **后端**: Django 6.0 + SimpleUI 后台管理
- **前端**: Vite 5 + Vue 3 + Vue Router 4 + Axios
- **数据库**: Supabase PostgreSQL（东京连接池）
- **部署**: Render（build.sh 一键构建）
- **域名**: ll54184.eu.cc
- **Python**: 3.12.2

## 目录结构

```
django企业官网/
├── manage.py
├── db.sqlite3                 # 本地开发数据库
├── build.sh                   # Render 部署构建脚本
├── seed_data.py               # 演示数据填充
├── requirements.txt
├── Procfile                   # gunicorn 启动
├── venv/
├── website/                   # Django 项目配置
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── about/                     # 企业概况（API + 模型 + Admin）
│   ├── models.py              # CompanyInfo, DevelopmentHistory, Honor, TeamMember
│   ├── serializers.py         # REST API 序列化器
│   ├── views.py               # AboutAPIView
│   └── admin.py
├── products/                  # 产品管理
│   ├── models.py              # ProductCategory, Product, ProductImage
│   ├── serializers.py
│   ├── views.py
│   └── admin.py
├── cases/                     # 案例管理
│   ├── models.py              # CaseCategory, Case
│   ├── serializers.py
│   ├── views.py
│   └── admin.py
├── news/                      # 新闻中心
│   ├── models.py              # NewsCategory, News
│   ├── serializers.py
│   ├── views.py
│   └── admin.py
├── home/                      # 联系表单
│   ├── models.py              # Contact
│   ├── serializers.py
│   ├── views.py
│   └── admin.py
├── templates/
│   └── index.html             # Vue SPA 入口（npm run build 自动生成）
├── media/                     # 上传文件
└── frontend/                  # Vue 3 前端
    ├── vite.config.js
    ├── package.json
    ├── dist/                  # 构建产物（纳入版本管理）
    └── src/
        ├── main.js
        ├── App.vue            # 主布局（导航 + 动态 Footer）
        ├── router/index.js
        ├── api/index.js       # Axios 封装 + 所有 API 函数
        └── views/
            ├── Home.vue       # 首页
            ├── About.vue      # 关于我们（动态数据）
            ├── Products.vue   # 产品服务（API）
            ├── Projects.vue   # 工程案例（API）
            ├── Custom.vue     # 专属定制（表单对接 API）
            ├── News.vue       # 新闻中心（API）
            └── Contact.vue    # 联系我们（表单对接 API）
```

## REST API 端点

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/about/` | 企业概况（公司信息 + 历程 + 荣誉 + 团队） |
| GET | `/api/products/` | 产品列表，支持 `?category=slug&recommended=1` |
| GET | `/api/product-categories/` | 产品分类 |
| GET | `/api/cases/` | 案例列表，支持 `?category=slug&recommended=1` |
| GET | `/api/case-categories/` | 案例分类 |
| GET | `/api/news/` | 新闻列表，支持 `?category=slug&top=1` |
| GET | `/api/news-categories/` | 新闻分类 |
| POST | `/api/contact/` | 提交联系表单 |

## 数据模型

| 应用 | 模型 | 说明 |
|------|------|------|
| about | CompanyInfo | 公司基本信息（单例模式） |
| about | DevelopmentHistory | 发展历程时间线 |
| about | Honor | 资质荣誉 |
| about | TeamMember | 团队成员 |
| products | ProductCategory | 产品分类 |
| products | Product | 产品服务（在线/草稿/下线） |
| products | ProductImage | 产品轮播图 |
| cases | CaseCategory | 案例分类 |
| cases | Case | 成功案例 |
| news | NewsCategory | 新闻分类 |
| news | News | 新闻资讯（草稿/发布，支持置顶） |
| home | Contact | 联系表单（存储到 lianxi 表） |

## 常用命令

### 后端

```bash
cd d:/claudeconfig/django企业官网
source venv/Scripts/activate
python manage.py runserver
python manage.py makemigrations
python manage.py migrate
python manage.py check
```

### 前端

```bash
cd frontend
npm install
npm run dev        # 开发（Vite 代理 /api → Django）
npm run build      # 构建 + 复制 index.html 到 templates/
npm run preview
```

### 数据库填充

```bash
python seed_data.py
```

## 开发地址

| 服务 | 地址 |
|------|------|
| Django 后台 | http://127.0.0.1:8000/admin |
| Vue 开发 | http://localhost:5173 |
| 管理账号 | ll123 / admin123 |

## 部署说明

项目部署在 **Render** 平台，`build.sh` 为构建脚本：
1. 安装 Python 依赖
2. 安装 Node.js（如未预装）
3. `cd frontend && npm install && npm run build`
4. `python manage.py migrate --noinput`
5. `python seed_data.py`（幂等，数据存在则跳过）
6. `python manage.py collectstatic --noinput`

运行时通过 `Procfile` 启动 gunicorn。

前端也可独立部署到 Cloudflare Pages：
- 构建产物 `frontend/dist/`
- `_redirects` 规则将 `/api/*`、`/admin/*`、`/media/*` 代理到后端

环境变量：
- `DEBUG` — 调试模式（默认 False）
- `ALLOWED_HOST` — 自定义主机名
- `RENDER_EXTERNAL_HOSTNAME` — Render 自动注入
- `SECRET_KEY` — Django 密钥（生产环境应设置）
- `SUPABASE_PASSWORD` — 数据库密码（已通过环境变量配置）

## SimpleUI 后台主题

`simpleui` 必须在 `INSTALLED_APPS` 中排在 `django.contrib.admin` 上面。菜单配置在 `SIMPLEUI_CONFIG.menus` 中。

## 设计要点

- **CompanyInfo** 通过 `has_add_permission` 限制只能有一条记录
- ImageField 依赖 Pillow
- 所有模型使用 Inline 内联 + fieldsets 分组
- Admin 使用 list_editable 支持列表内直接修改排序/状态
- Admin action 提供批量操作（设为发布、设为推荐等）
