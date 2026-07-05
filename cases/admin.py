from django.contrib import admin
from django.utils.html import format_html
from .models import CaseCategory, Case


@admin.register(CaseCategory)
class CaseCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'sort_order', 'case_count']
    list_editable = ['sort_order']
    search_fields = ['name']

    def case_count(self, obj):
        return obj.case_set.count()
    case_count.short_description = '案例数量'


@admin.register(Case)
class CaseAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'client', 'industry', 'is_recommended', 'created_at']
    list_filter = ['category', 'industry', 'is_recommended', 'created_at']
    list_editable = ['is_recommended']
    search_fields = ['title', 'client', 'industry', 'summary']
    actions = ['set_recommended']

    fieldsets = (
        ('基本信息', {
            'fields': ['category', 'title', 'client', 'industry', 'cover', 'summary'],
        }),
        ('案例详情', {
            'fields': ['challenge', 'solution', 'result'],
        }),
        ('发布设置', {
            'fields': ['is_recommended', 'sort_order'],
        }),
    )

    @admin.action(description='设为首页推荐')
    def set_recommended(self, request, queryset):
        queryset.update(is_recommended=True)
