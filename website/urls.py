"""
URL configuration for website project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve as static_serve
from home.views import ContactCreateAPIView
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contact/', ContactCreateAPIView.as_view(), name='api-contact'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    # 直接服务 /assets/ 下的静态文件 (Vue dist)
    urlpatterns += [
        re_path(r'^assets/(?P<path>.*)$', static_serve, {'document_root': settings.BASE_DIR / 'frontend' / 'dist' / 'assets'}),
        re_path(r'^(favicon\.svg|icons\.svg|logo\.svg)$', static_serve, {'document_root': settings.BASE_DIR / 'frontend' / 'dist'}),
    ]

# SPA fallback: 所有非 admin/、非 api/、非 media/、非 assets/ 的请求都返回 index.html
urlpatterns += [
    re_path(r'^(?!admin/|api/|media/|assets/|favicon\.svg|icons\.svg|logo\.svg).*$', TemplateView.as_view(template_name='index.html')),
]
