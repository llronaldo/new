from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import AllowAny
from news.models import News, NewsCategory
from news.serializers import NewsListSerializer, NewsCategorySerializer


class NewsPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100


class NewsCategoryListAPIView(generics.ListAPIView):
    """新闻分类列表（公开）"""
    queryset = NewsCategory.objects.all()
    serializer_class = NewsCategorySerializer
    permission_classes = [AllowAny]
    authentication_classes = []


class NewsListAPIView(generics.ListAPIView):
    """新闻列表（公开），支持 ?category=slug & ?top=1"""
    serializer_class = NewsListSerializer
    permission_classes = [AllowAny]
    authentication_classes = []
    pagination_class = NewsPagination

    def get_queryset(self):
        qs = News.objects.filter(status='published').select_related('category')
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category__slug=category)
        if self.request.query_params.get('top') == '1':
            qs = qs.filter(is_top=True)
        return qs
