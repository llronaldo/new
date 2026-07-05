from django.db import models


class ProductCategory(models.Model):
    """产品分类"""
    name = models.CharField(max_length=50, verbose_name='分类名称')
    slug = models.SlugField(max_length=50, unique=True, verbose_name='URL标识')
    icon = models.CharField(max_length=50, verbose_name='图标类名', blank=True, help_text='Font Awesome 图标类名，如 fa-microchip')
    description = models.TextField(verbose_name='分类描述', blank=True)
    sort_order = models.IntegerField(default=0, verbose_name='排序')

    class Meta:
        verbose_name = '产品分类'
        verbose_name_plural = verbose_name
        ordering = ['sort_order']

    def __str__(self):
        return self.name


class Product(models.Model):
    """产品服务"""
    STATUS_CHOICES = [
        ('draft', '草稿'),
        ('online', '已上线'),
        ('offline', '已下线'),
    ]

    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE, verbose_name='所属分类')
    name = models.CharField(max_length=100, verbose_name='产品名称')
    model_number = models.CharField(max_length=50, verbose_name='产品型号', blank=True)
    cover = models.ImageField(upload_to='products/', verbose_name='产品主图')
    summary = models.TextField(max_length=300, verbose_name='产品简介')
    description = models.TextField(verbose_name='详细介绍')
    features = models.TextField(verbose_name='产品特点', blank=True, help_text='每行一个特点')
    specs = models.TextField(verbose_name='规格参数', blank=True, help_text='每行一个参数，格式：参数名:参数值')
    is_recommended = models.BooleanField(default=False, verbose_name='首页推荐')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='online', verbose_name='状态')
    sort_order = models.IntegerField(default=0, verbose_name='排序')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')

    class Meta:
        verbose_name = '产品服务'
        verbose_name_plural = verbose_name
        ordering = ['sort_order', '-created_at']

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    """产品轮播图"""
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images', verbose_name='所属产品')
    image = models.ImageField(upload_to='products/gallery/', verbose_name='图片')
    sort_order = models.IntegerField(default=0, verbose_name='排序')

    class Meta:
        verbose_name = '产品轮播图'
        verbose_name_plural = verbose_name
        ordering = ['sort_order']

    def __str__(self):
        return f'{self.product.name} - 图{self.sort_order}'
