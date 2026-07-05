from django.db import models


class Contact(models.Model):
    """联系表单"""

    contact_name = models.CharField(max_length=50, verbose_name='联系人')
    contact_phone = models.CharField(max_length=20, verbose_name='联系电话')
    company = models.CharField(max_length=100, verbose_name='公司/品牌', blank=True)
    project_type = models.CharField(max_length=50, verbose_name='项目类型', blank=True)
    quantity = models.CharField(max_length=50, verbose_name='预计数量', blank=True)
    city = models.CharField(max_length=50, verbose_name='交付城市', blank=True)
    budget = models.CharField(max_length=50, verbose_name='预算区间', blank=True)
    message = models.TextField(verbose_name='需求说明', blank=True)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='提交时间')
    is_read = models.BooleanField(default=False, verbose_name='是否已读')

    class Meta:
        db_table = 'lianxi'
        verbose_name = '联系表单'
        verbose_name_plural = verbose_name
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.contact_name} - {self.company or "个人"} - {self.created_at.strftime("%Y-%m-%d %H:%M")}'
