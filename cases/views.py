from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import AllowAny
from cases.models import Case, CaseCategory
from cases.serializers import CaseListSerializer, CaseCategorySerializer


class CasePagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100


class CaseCategoryListAPIView(generics.ListAPIView):
    """案例分类列表（公开）"""
    queryset = CaseCategory.objects.all()
    serializer_class = CaseCategorySerializer
    permission_classes = [AllowAny]
    authentication_classes = []


class CaseListAPIView(generics.ListAPIView):
    """案例列表（公开），支持 ?category=slug & ?recommended=1"""
    serializer_class = CaseListSerializer
    permission_classes = [AllowAny]
    authentication_classes = []
    pagination_class = CasePagination

    def get_queryset(self):
        qs = Case.objects.select_related('category')
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category__slug=category)
        if self.request.query_params.get('recommended') == '1':
            qs = qs.filter(is_recommended=True)
        return qs
