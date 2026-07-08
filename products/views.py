from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import AllowAny
from products.models import Product, ProductCategory
from products.serializers import (
    ProductListSerializer,
    ProductCategorySerializer,
)


class ProductPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100


class ProductCategoryListAPIView(generics.ListAPIView):
    """产品分类列表（公开）"""
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer
    permission_classes = [AllowAny]
    authentication_classes = []


class ProductListAPIView(generics.ListAPIView):
    """产品列表（公开），支持 ?category=slug & ?recommended=1"""
    serializer_class = ProductListSerializer
    permission_classes = [AllowAny]
    authentication_classes = []
    pagination_class = ProductPagination

    def get_queryset(self):
        qs = Product.objects.filter(status='online').select_related('category').prefetch_related('images')
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category__slug=category)
        if self.request.query_params.get('recommended') == '1':
            qs = qs.filter(is_recommended=True)
        return qs
