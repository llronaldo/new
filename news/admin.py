from django.contrib import admin
from django.utils.html import format_html
from .models import NewsCategory, News


@admin.register(NewsCategory)
class NewsCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'sort_order', 'news_count']
    list_editable = ['sort_order']
    search_fields = ['name']

    def news_count(self, obj):
        return obj.news_set.count()
    news_count.short_description = '新闻数量'


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'author', 'is_top', 'views', 'status', 'created_at']
    list_filter = ['category', 'status', 'is_top', 'created_at']
    list_editable = ['is_top', 'status']
    search_fields = ['title', 'summary', 'content']
    date_hierarchy = 'created_at'
    actions = ['make_published', 'make_top']

    fieldsets = (
        ('基本信息', {
            'fields': ['category', 'title', 'author', 'cover', 'summary'],
        }),
        ('内容', {
            'fields': ['content'],
        }),
        ('发布设置', {
            'fields': ['status', 'is_top'],
        }),
    )

    @admin.action(description='设为已发布')
    def make_published(self, request, queryset):
        queryset.update(status='published')

    @admin.action(description='设为置顶')
    def make_top(self, request, queryset):
        queryset.update(is_top=True)
