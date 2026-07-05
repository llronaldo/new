"""
URL configuration for website project.
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

# SPA fallback: /admin/ 和 /api/ 走 Django，其他全部返回 Vue 的 index.html
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += [
    re_path(r'^assets/(?P<path>.*)$', static_serve, {'document_root': settings.BASE_DIR / 'frontend' / 'dist' / 'assets'}),
    re_path(r'^(favicon\.svg|icons\.svg|logo\.svg)$', static_serve, {'document_root': settings.BASE_DIR / 'frontend' / 'dist'}),
    re_path(r'^(?!admin/|api/|media/|assets/|favicon\.svg|icons\.svg|logo\.svg).*$', TemplateView.as_view(template_name='index.html')),
]
