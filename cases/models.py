from django.db import models


class CaseCategory(models.Model):
    """案例分类"""
    name = models.CharField(max_length=50, verbose_name='分类名称')
    slug = models.SlugField(max_length=50, unique=True, verbose_name='URL标识')
    sort_order = models.IntegerField(default=0, verbose_name='排序')

    class Meta:
        verbose_name = '案例分类'
        verbose_name_plural = verbose_name
        ordering = ['sort_order']

    def __str__(self):
        return self.name


class Case(models.Model):
    """成功案例"""
    category = models.ForeignKey(CaseCategory, on_delete=models.CASCADE, verbose_name='所属分类')
    title = models.CharField(max_length=200, verbose_name='案例标题')
    client = models.CharField(max_length=100, verbose_name='客户名称')
    industry = models.CharField(max_length=50, verbose_name='所属行业')
    cover = models.ImageField(upload_to='cases/', verbose_name='案例封面')
    summary = models.TextField(max_length=300, verbose_name='案例简述')
    challenge = models.TextField(verbose_name='客户挑战', blank=True)
    solution = models.TextField(verbose_name='解决方案', blank=True)
    result = models.TextField(verbose_name='项目成果', blank=True)
    is_recommended = models.BooleanField(default=False, verbose_name='首页推荐')
    sort_order = models.IntegerField(default=0, verbose_name='排序')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')

    class Meta:
        verbose_name = '成功案例'
        verbose_name_plural = verbose_name
        ordering = ['sort_order', '-created_at']

    def __str__(self):
        return self.title
