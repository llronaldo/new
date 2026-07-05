from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = [
        'contact_name', 'contact_phone', 'company', 'project_type',
        'quantity', 'city', 'budget', 'is_read', 'created_at',
    ]
    list_filter = ['project_type', 'quantity', 'budget', 'is_read', 'created_at']
    list_editable = ['is_read']
    search_fields = ['contact_name', 'contact_phone', 'company', 'city', 'message']
    date_hierarchy = 'created_at'
    readonly_fields = ['created_at']
    actions = ['mark_read']

    fieldsets = (
        ('基本信息', {
            'fields': ['contact_name', 'contact_phone', 'company'],
        }),
        ('项目信息', {
            'fields': ['project_type', 'quantity', 'city', 'budget'],
        }),
        ('需求', {
            'fields': ['message'],
        }),
        ('状态', {
            'fields': ['is_read', 'created_at'],
        }),
    )

    @admin.action(description='标记为已读')
    def mark_read(self, request, queryset):
        queryset.update(is_read=True)
