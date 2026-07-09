from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import CompanyInfo
from .serializers import CompanyInfoSerializer


class AboutAPIView(generics.GenericAPIView):
    """企业概况 — 公开接口，返回公司信息及关联的历程/荣誉/团队"""
    permission_classes = [AllowAny]
    authentication_classes = []

    def get(self, request):
        company = CompanyInfo.objects.first()
        if not company:
            return Response({'code': 404, 'message': '暂无公司信息'}, status=404)
        serializer = CompanyInfoSerializer(company)
        return Response({'code': 200, 'data': serializer.data})
