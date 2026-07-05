from django.db import models


class NewsCategory(models.Model):
    """新闻分类"""
    name = models.CharField(max_length=50, verbose_name='分类名称')
    slug = models.SlugField(max_length=50, unique=True, verbose_name='URL标识')
    sort_order = models.IntegerField(default=0, verbose_name='排序')

    class Meta:
        verbose_name = '新闻分类'
        verbose_name_plural = verbose_name
        ordering = ['sort_order']

    def __str__(self):
        return self.name


class News(models.Model):
    """新闻资讯"""
    STATUS_CHOICES = [
        ('draft', '草稿'),
        ('published', '已发布'),
    ]

    category = models.ForeignKey(NewsCategory, on_delete=models.CASCADE, verbose_name='分类')
    title = models.CharField(max_length=200, verbose_name='标题')
    author = models.CharField(max_length=50, verbose_name='作者', default='管理员')
    cover = models.ImageField(upload_to='news/', verbose_name='封面图片', blank=True)
    summary = models.TextField(max_length=500, verbose_name='摘要')
    content = models.TextField(verbose_name='内容')
    is_top = models.BooleanField(default=False, verbose_name='置顶')
    views = models.IntegerField(default=0, verbose_name='浏览量')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='published', verbose_name='状态')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='更新时间')

    class Meta:
        verbose_name = '新闻资讯'
        verbose_name_plural = verbose_name
        ordering = ['-is_top', '-created_at']

    def __str__(self):
        return self.title
