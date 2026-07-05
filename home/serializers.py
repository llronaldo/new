from rest_framework import serializers
from home.models import Contact


class ContactSerializer(serializers.ModelSerializer):
    """联系表单序列化器"""

    class Meta:
        model = Contact
        fields = [
            'id',
            'contact_name',
            'contact_phone',
            'company',
            'project_type',
            'quantity',
            'city',
            'budget',
            'message',
            'created_at',
            'is_read',
        ]
        read_only_fields = ['id', 'created_at', 'is_read']
