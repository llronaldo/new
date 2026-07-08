from rest_framework import serializers
from cases.models import CaseCategory, Case


class CaseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CaseCategory
        fields = ['id', 'name', 'slug', 'sort_order']


class CaseListSerializer(serializers.ModelSerializer):
    category = CaseCategorySerializer(read_only=True)

    class Meta:
        model = Case
        fields = [
            'id', 'category', 'title', 'client', 'industry', 'cover',
            'summary', 'challenge', 'solution', 'result',
            'is_recommended', 'sort_order', 'created_at',
        ]
