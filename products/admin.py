from django.contrib import admin
from django.utils.html import format_html
from .models import ProductCategory, Product, ProductImage


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 0
    fields = ['image', 'sort_order']


@admin.register(ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'icon', 'sort_order', 'product_count']
    list_editable = ['sort_order']
    search_fields = ['name']

    def product_count(self, obj):
        return obj.product_set.count()
    product_count.short_description = '产品数量'


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'model_number', 'is_recommended', 'status', 'sort_order', 'created_at']
    list_filter = ['category', 'status', 'is_recommended', 'created_at']
    list_editable = ['is_recommended', 'status', 'sort_order']
    search_fields = ['name', 'model_number', 'summary', 'description']
    inlines = [ProductImageInline]
    actions = ['set_online', 'set_recommended']

    fieldsets = (
        ('基本信息', {
            'fields': ['category', 'name', 'model_number', 'cover', 'summary'],
        }),
        ('详细内容', {
            'fields': ['description', 'features', 'specs'],
        }),
        ('发布设置', {
            'fields': ['status', 'is_recommended', 'sort_order'],
        }),
    )

    @admin.action(description='设为已上线')
    def set_online(self, request, queryset):
        queryset.update(status='online')

    @admin.action(description='设为首页推荐')
    def set_recommended(self, request, queryset):
        queryset.update(is_recommended=True)


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ['product', 'image_preview', 'sort_order']
    list_editable = ['sort_order']
    list_filter = ['product__category']

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height:80px;border-radius:4px;"/>', obj.image.url)
        return '-'
    image_preview.short_description = '预览'
