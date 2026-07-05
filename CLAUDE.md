# 企业官网项目 (Django + Vue 3)

## 项目概述

深圳未来科技有限公司企业官网，采用 Django 6 后端 + Vue 3 前端的分离架构。

- **后端**: Django 6.0 + SimpleUI 后台管理
- **前端**: Vite 5 + Vue 3 + Vue Router 4 + Axios
- **数据库**: SQLite (开发环境)
- **Python**: 3.12.2
- **Node.js**: 21.7.1

## 目录结构

```
django企业官网/
├── manage.py                  # Django 管理命令入口
├── db.sqlite3                 # SQLite 数据库
├── venv/                      # Python 虚拟环境
├── media/                     # 上传文件目录
├── staticfiles/               # 生产环境静态文件
├── website/                   # Django 项目配置
│   ├── settings.py            # 全局配置
│   ├── urls.py                # URL 根路由
│   └── wsgi.py / asgi.py      # WSGI/ASGI 入口
├── home/                      # 首页应用
│   └── models.py
├── about/                     # 企业概况应用
│   ├── models.py              # 公司信息、发展历程、荣誉、团队
│   └── admin.py               # 后台管理配置
├── news/                      # 新闻中心应用
│   ├── models.py              # 新闻分类、新闻资讯
│   └── admin.py
├── products/                  # 产品管理应用
│   ├── models.py              # 产品分类、产品、轮播图
│   └── admin.py
├── cases/                     # 案例管理应用
│   ├── models.py              # 案例分类、成功案例
│   └── admin.py
└── frontend/                  # Vue 3 前端项目
    ├── package.json
    ├── vite.config.js         # Vite 配置（含 API 代理）
    ├── index.html
    └── src/
        ├── main.js            # 应用入口
        ├── App.vue            # 主布局（导航 + 底部）
        ├── router/index.js    # 路由配置
        ├── api/index.js       # Axios 实例
        └── views/             # 页面组件
            ├── Home.vue       # 首页
            ├── About.vue      # 关于我们
            ├── News.vue       # 新闻中心
            ├── Products.vue   # 产品服务
            ├── Cases.vue      # 成功案例
            └── Contact.vue    # 联系我们
```

## 后端模型

| 应用 | 模型 | 说明 |
|------|------|------|
| about | CompanyInfo | 公司基本信息（单例） |
| about | DevelopmentHistory | 发展历程时间线 |
| about | Honor | 资质荣誉 |
| about | TeamMember | 团队成员 |
| news | NewsCategory | 新闻分类 |
| news | News | 新闻资讯（草稿/发布） |
| products | ProductCategory | 产品分类 |
| products | Product | 产品服务 |
| products | ProductImage | 产品轮播图 |
| cases | CaseCategory | 案例分类 |
| cases | Case | 成功案例 |

## 常用命令

### 后端

```bash
# 激活虚拟环境
cd d:/claudeconfig/django企业官网
source venv/Scripts/activate

# 启动开发服务器
python manage.py runserver

# 数据库迁移
python manage.py makemigrations
python manage.py migrate

# 创建超级用户
python manage.py createsuperuser

# 运行检查
python manage.py check
```

### 前端

```bash
cd d:/claudeconfig/django企业官网/frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 开发地址

| 服务 | 地址 |
|------|------|
| Django 后台管理 | http://127.0.0.1:8000/admin |
| Vue 前台页面 | http://localhost:5173 |
| 管理账号 | ll123 / admin123 |

## 关键配置说明

### SimpleUI 后台主题

在 `settings.py` 中配置 `SIMPLEUI_CONFIG`:
```python
SIMPLEUI_CONFIG = {
    'system_keep': True,      # 保留 Django 原生用户/组菜单
    'menu_display': ['企业概况', '新闻中心', '产品管理', '案例管理', '认证和授权'],
    'dynamic': True,
}
```
`simpleui` 必须在 `INSTALLED_APPS` 中排在 `django.contrib.admin` 上面。

### Vite 代理配置

`frontend/vite.config.js` 中将 `/api` 和 `/media` 代理到 Django 后端，解决开发环境跨域问题。

### ImageField 依赖

使用 ImageField 需要安装 Pillow：`pip install Pillow`

## 数据模型设计要点

- **CompanyInfo** 通过 `has_add_permission` 限制只能有一条记录（单例模式）
- 所有模型使用 **Inline 内联编辑** 在父模型管理页中编辑关联数据
- 模型 admin 统一使用 **fieldsets** 分组字段
- 排序字段使用 **list_editable** 可直接在列表中修改
- 使用 **admin action** 提供批量操作（设为发布、设为推荐等）
