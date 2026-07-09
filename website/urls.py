"""
URL configuration for website project.
"""
from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve as static_serve
from django.views.generic import TemplateView

# API views
from home.views import ContactCreateAPIView
from products.views import ProductListAPIView, ProductCategoryListAPIView
from cases.views import CaseListAPIView, CaseCategoryListAPIView
from news.views import NewsListAPIView, NewsCategoryListAPIView
from about.views import AboutAPIView

urlpatterns = [
    path('admin/', admin.site.urls),

    # 联系表单
    path('api/contact/', ContactCreateAPIView.as_view(), name='api-contact'),

    # 企业概况
    path('api/about/', AboutAPIView.as_view(), name='api-about'),

    # 产品 API
    path('api/products/', ProductListAPIView.as_view(), name='api-products'),
    path('api/product-categories/', ProductCategoryListAPIView.as_view(), name='api-product-categories'),

    # 案例 API
    path('api/cases/', CaseListAPIView.as_view(), name='api-cases'),
    path('api/case-categories/', CaseCategoryListAPIView.as_view(), name='api-case-categories'),

    # 新闻 API
    path('api/news/', NewsListAPIView.as_view(), name='api-news'),
    path('api/news-categories/', NewsCategoryListAPIView.as_view(), name='api-news-categories'),
]

# SPA fallback: /admin/ 和 /api/ 走 Django，其他全部返回 Vue 的 index.html
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += [
    re_path(r'^assets/(?P<path>.*)$', static_serve, {'document_root': settings.BASE_DIR / 'frontend' / 'dist' / 'assets'}),
    re_path(r'^(favicon\.svg|icons\.svg|logo\.svg)$', static_serve, {'document_root': settings.BASE_DIR / 'frontend' / 'dist'}),
    re_path(r'^(?!admin/|api/|media/|assets/|favicon\.svg|icons\.svg|logo\.svg).*$', TemplateView.as_view(template_name='index.html')),
]
