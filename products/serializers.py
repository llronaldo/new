from rest_framework import serializers
from products.models import ProductCategory, Product, ProductImage


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'sort_order']


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = ['id', 'name', 'slug', 'icon', 'description', 'sort_order']


class ProductListSerializer(serializers.ModelSerializer):
    """产品列表（不含详细描述，减少数据量）"""
    category = ProductCategorySerializer(read_only=True)
    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            'id', 'category', 'name', 'model_number', 'cover',
            'summary', 'features', 'specs', 'is_recommended',
            'status', 'sort_order', 'created_at', 'images',
        ]
