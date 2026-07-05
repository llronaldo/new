from django.contrib import admin
from django.utils.html import format_html
from .models import CompanyInfo, DevelopmentHistory, Honor, TeamMember


class DevelopmentHistoryInline(admin.TabularInline):
    model = DevelopmentHistory
    extra = 0
    fields = ['year', 'title', 'description', 'sort_order']


class HonorInline(admin.TabularInline):
    model = Honor
    extra = 0
    fields = ['title', 'image', 'award_date', 'sort_order']


class TeamMemberInline(admin.TabularInline):
    model = TeamMember
    extra = 0
    fields = ['name', 'position', 'avatar', 'sort_order']


@admin.register(CompanyInfo)
class CompanyInfoAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone', 'email', 'create_time']
    fieldsets = (
        ('基本信息', {
            'fields': ['name', 'slogan', 'phone', 'email', 'address'],
        }),
        ('品牌标识', {
            'fields': ['logo', 'favicon', 'qrcode'],
        }),
        ('企业介绍', {
            'fields': ['intro', 'vision', 'mission', 'values'],
        }),
    )
    inlines = [DevelopmentHistoryInline, HonorInline, TeamMemberInline]

    def has_add_permission(self, request):
        # 只允许存在一条公司信息
        if self.model.objects.count() >= 1:
            return False
        return super().has_add_permission(request)


@admin.register(DevelopmentHistory)
class DevelopmentHistoryAdmin(admin.ModelAdmin):
    list_display = ['year', 'title', 'sort_order']
    list_editable = ['sort_order']
    list_filter = ['year']
    search_fields = ['title', 'description']
    fieldsets = (
        ('历程信息', {
            'fields': ['company', 'year', 'title', 'description', 'sort_order'],
        }),
    )


@admin.register(Honor)
class HonorAdmin(admin.ModelAdmin):
    list_display = ['title', 'image_preview', 'award_date', 'sort_order']
    list_editable = ['sort_order']
    list_filter = ['award_date']
    search_fields = ['title']
    fieldsets = (
        ('荣誉信息', {
            'fields': ['company', 'title', 'image', 'image_preview', 'description', 'award_date', 'sort_order'],
        }),
    )
    readonly_fields = ['image_preview']

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height:100px;border-radius:4px;"/>', obj.image.url)
        return '-'
    image_preview.short_description = '预览'


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ['avatar_preview', 'name', 'position', 'sort_order']
    list_editable = ['sort_order']
    search_fields = ['name', 'position']
    fieldsets = (
        ('成员信息', {
            'fields': ['company', 'avatar', 'avatar_preview', 'name', 'position', 'intro', 'sort_order'],
        }),
    )
    readonly_fields = ['avatar_preview']

    def avatar_preview(self, obj):
        if obj.avatar:
            return format_html('<img src="{}" style="max-height:80px;border-radius:50%;"/>', obj.avatar.url)
        return '-'
    avatar_preview.short_description = '头像预览'
