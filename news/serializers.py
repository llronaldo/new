from rest_framework import serializers
from news.models import NewsCategory, News


class NewsCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsCategory
        fields = ['id', 'name', 'slug', 'sort_order']


class NewsListSerializer(serializers.ModelSerializer):
    category = NewsCategorySerializer(read_only=True)

    class Meta:
        model = News
        fields = [
            'id', 'category', 'title', 'author', 'cover',
            'summary', 'content', 'is_top', 'views', 'status',
            'created_at', 'updated_at',
        ]
