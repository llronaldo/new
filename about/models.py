from django.db import models


class CompanyInfo(models.Model):
    """公司基本信息"""
    name = models.CharField(max_length=100, verbose_name='公司名称')
    slogan = models.CharField(max_length=200, verbose_name='企业口号', blank=True)
    logo = models.ImageField(upload_to='company/', verbose_name='公司Logo', blank=True)
    favicon = models.ImageField(upload_to='company/', verbose_name='网站图标', blank=True)
    phone = models.CharField(max_length=20, verbose_name='联系电话')
    email = models.EmailField(verbose_name='企业邮箱')
    address = models.CharField(max_length=200, verbose_name='公司地址')
    intro = models.TextField(verbose_name='公司简介')
    vision = models.TextField(verbose_name='企业愿景', blank=True)
    mission = models.TextField(verbose_name='企业使命', blank=True)
    values = models.TextField(verbose_name='核心价值观', blank=True)
    qrcode = models.ImageField(upload_to='company/', verbose_name='公众号二维码', blank=True)
    create_time = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    update_time = models.DateTimeField(auto_now=True, verbose_name='更新时间')

    class Meta:
        verbose_name = '公司信息'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class DevelopmentHistory(models.Model):
    """发展历程"""
    company = models.ForeignKey(CompanyInfo, on_delete=models.CASCADE, verbose_name='所属公司')
    year = models.CharField(max_length=10, verbose_name='年份')
    title = models.CharField(max_length=100, verbose_name='事件标题')
    description = models.TextField(verbose_name='事件描述')
    sort_order = models.IntegerField(default=0, verbose_name='排序')

    class Meta:
        verbose_name = '发展历程'
        verbose_name_plural = verbose_name
        ordering = ['sort_order', '-year']

    def __str__(self):
        return f'{self.year} - {self.title}'


class Honor(models.Model):
    """资质荣誉"""
    company = models.ForeignKey(CompanyInfo, on_delete=models.CASCADE, verbose_name='所属公司')
    title = models.CharField(max_length=100, verbose_name='荣誉名称')
    image = models.ImageField(upload_to='honors/', verbose_name='荣誉证书图片')
    description = models.TextField(verbose_name='荣誉描述', blank=True)
    award_date = models.DateField(verbose_name='获奖日期')
    sort_order = models.IntegerField(default=0, verbose_name='排序')

    class Meta:
        verbose_name = '资质荣誉'
        verbose_name_plural = verbose_name
        ordering = ['sort_order', '-award_date']

    def __str__(self):
        return self.title


class TeamMember(models.Model):
    """团队成员"""
    company = models.ForeignKey(CompanyInfo, on_delete=models.CASCADE, verbose_name='所属公司')
    name = models.CharField(max_length=50, verbose_name='姓名')
    position = models.CharField(max_length=50, verbose_name='职位')
    avatar = models.ImageField(upload_to='team/', verbose_name='头像')
    intro = models.TextField(verbose_name='个人简介', blank=True)
    sort_order = models.IntegerField(default=0, verbose_name='排序')

    class Meta:
        verbose_name = '团队成员'
        verbose_name_plural = verbose_name
        ordering = ['sort_order']

    def __str__(self):
        return f'{self.name} - {self.position}'
