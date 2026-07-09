from rest_framework import serializers
from .models import CompanyInfo, DevelopmentHistory, Honor, TeamMember


class DevelopmentHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DevelopmentHistory
        fields = ['id', 'year', 'title', 'description', 'sort_order']


class HonorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Honor
        fields = ['id', 'title', 'image', 'description', 'award_date', 'sort_order']


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'position', 'avatar', 'intro', 'sort_order']


class CompanyInfoSerializer(serializers.ModelSerializer):
    history = DevelopmentHistorySerializer(source='developmenthistory_set', many=True, read_only=True)
    honors = HonorSerializer(source='honor_set', many=True, read_only=True)
    team = TeamMemberSerializer(source='teammember_set', many=True, read_only=True)

    class Meta:
        model = CompanyInfo
        fields = [
            'id', 'name', 'slogan', 'logo', 'favicon', 'phone', 'email',
            'address', 'intro', 'vision', 'mission', 'values', 'qrcode',
            'history', 'honors', 'team',
        ]
