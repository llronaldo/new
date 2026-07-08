"""
Seed script — populate DB with initial products, cases, and news data.
Run with: python seed_data.py
"""
import os, django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'website.settings')
django.setup()

from products.models import ProductCategory, Product
from cases.models import CaseCategory, Case
from news.models import NewsCategory, News

# === Product Categories ===
cat_sofa, _ = ProductCategory.objects.get_or_create(name='沙发', slug='sofa', icon='fa-couch', description='客厅沙发系列', sort_order=1)
cat_table, _ = ProductCategory.objects.get_or_create(name='茶几/角几', slug='table', icon='fa-table', description='茶几角几系列', sort_order=2)
cat_dining, _ = ProductCategory.objects.get_or_create(name='餐桌椅', slug='dining', icon='fa-chair', description='餐桌椅系列', sort_order=3)
cat_bed, _ = ProductCategory.objects.get_or_create(name='床', slug='bed', icon='fa-bed', description='卧室床具系列', sort_order=4)
cat_cabinet, _ = ProductCategory.objects.get_or_create(name='柜类', slug='cabinet', icon='fa-cabinet', description='储物柜系列', sort_order=5)

# === Products ===
if Product.objects.count() == 0:
    Product.objects.bulk_create([
        Product(category=cat_sofa, name='Palermo 转角沙发', model_number='ZP-SF-001',
                summary='L型模块化设计，可自由组合适应不同空间',
                description='座垫采用三层密度海绵结构，坐感软硬适中',
                features='进口头层牛皮\n高密度海绵\n不锈钢脚',
                specs='尺寸:W320×D180×H75 cm\n可选色:12色可选\n起订量:1套\n交期:25-35天',
                is_recommended=True, sort_order=1),
        Product(category=cat_sofa, name='Verona 直排三人位', model_number='ZP-SF-002',
                summary='极窄扶手设计最大化座面宽度',
                description='座垫填充白鹅绒与高弹海绵，深坐深提供沉浸式包裹感',
                features='意大利磨砂皮\n羽绒填充\n碳素钢框架',
                specs='尺寸:W260×D100×H72 cm\n可选色:8色可选\n起订量:1套\n交期:25-35天',
                sort_order=2),
        Product(category=cat_table, name='Como 组合茶几', model_number='ZP-CT-001',
                summary='高低错落双台面设计，大理石纹理独一无二',
                description='高几可单独作为角几使用，低几下方可收纳',
                features='天然大理石台面\n拉丝不锈钢\n钢化玻璃',
                specs='尺寸:大圆100×H38·小圆70×H48 cm\n可选色:3种台面色\n起订量:1套\n交期:20-30天',
                is_recommended=True, sort_order=1),
        Product(category=cat_table, name='Siena 角几', model_number='ZP-CT-002',
                summary='圆润倒角处理，抽屉设计兼顾美观与收纳',
                description='顶部可放置台灯与书籍，抽屉收纳遥控器等小物',
                features='黑胡桃木\n黄铜拉手\n真皮包边',
                specs='尺寸:W55×D45×H60 cm\n可选色:2种木色\n起订量:2件\n交期:15-20天',
                sort_order=2),
        Product(category=cat_dining, name='Montalcino 长餐桌', model_number='ZP-DT-001',
                summary='2.4米桌面满足8-10人用餐',
                description='内置伸缩机构可扩展至3.2米，岩板台面耐热耐刮',
                features='北美白橡木\n岩板台面\n铝合金底座',
                specs='尺寸:W240/320×D100×H76 cm\n可选色:3种台面色\n起订量:1件\n交期:25-35天',
                is_recommended=True, sort_order=1),
        Product(category=cat_dining, name='Lucca 餐椅', model_number='ZP-DC-001',
                summary='弧面靠背贴合腰线，久坐不累',
                description='座垫前缘瀑布型设计减轻大腿压力',
                features='进口牛皮\n白蜡木框架\n高弹海绵',
                specs='尺寸:W52×D56×H82 cm\n可选色:8色可选\n起订量:4件\n交期:20-30天',
                sort_order=2),
        Product(category=cat_bed, name='Bellagio 主卧床', model_number='ZP-BD-001',
                summary='高靠背设计搭配意大利进口牛皮软包',
                description='床头内置阅读灯与USB充电口，床箱气压升降储物',
                features='头层牛皮软包\n实木排骨架\n榉木床脚',
                specs='尺寸:W200×D220×H125 cm\n可选色:6色可选\n起订量:1件\n交期:25-35天',
                is_recommended=True, sort_order=1),
        Product(category=cat_cabinet, name='Amalfi 电视柜', model_number='ZP-CB-001',
                summary='2.2米超长柜体悬浮式安装设计',
                description='隐藏走线槽解决线缆杂乱，柜门反弹式开启',
                features='黑胡桃木贴皮\n天然大理石\n缓冲铰链',
                specs='尺寸:W220×D45×H50 cm\n可选色:2种木色\n起订量:1件\n交期:25-35天',
                sort_order=1),
    ])
    print(f'Created 8 products')

# === Case Categories ===
case_hotel, _ = CaseCategory.objects.get_or_create(name='酒店工程', slug='hotel', sort_order=1)
case_villa, _ = CaseCategory.objects.get_or_create(name='别墅私宅', slug='villa', sort_order=2)
case_commercial, _ = CaseCategory.objects.get_or_create(name='商业空间', slug='commercial', sort_order=3)
case_office, _ = CaseCategory.objects.get_or_create(name='办公家具', slug='office', sort_order=4)

# === Cases ===
if Case.objects.count() == 0:
    Case.objects.bulk_create([
        Case(category=case_hotel, title='杭州西溪悦榕庄', client='悦榕庄酒店集团', industry='酒店',
             summary='全案定制120间客房家具、公区沙发组及餐厅桌椅，以意式轻奢融合东方禅意',
             challenge='酒店要求家具在呈现奢华感的同时须符合环保标准，床头柜需集成无线充电',
             solution='选用FSC认证实木与欧盟REACH标准皮革，自主研发内嵌式无线充电模块',
             result='项目按时交付，客户满意度98%，成为悦榕庄集团华东区推荐供应商',
             is_recommended=True, sort_order=1),
        Case(category=case_hotel, title='三亚艾迪逊酒店', client='万豪国际集团', industry='酒店',
             summary='全案供应260间客房、大堂吧、泳池休闲区家具',
             challenge='户外家具需承受高温高湿高盐雾环境，同时保持高端质感',
             solution='6063-T5耐候铝合金+Sunbrella户外面料，通过1000小时盐雾测试',
             result='开业两年来家具状态完好，获酒店管理方书面感谢函',
             is_recommended=True, sort_order=2),
        Case(category=case_villa, title='深圳湾壹号私人府邸', client='私人业主', industry='住宅',
             summary='800平方米全屋定制，共48件家具涵盖6个功能空间',
             challenge='业主对材质要求极高，所有木作需统一为北美黑胡桃木，纹理需连续对花',
             solution='意大利Gruppo Mastrotto粒面牛皮+卡拉拉大理石，每块石纹由业主挑选',
             result='超出客户期望，后续介绍多位朋友成为客户',
             is_recommended=True, sort_order=3),
        Case(category=case_commercial, title='成都太古里高端会所', client='太古地产', industry='商业',
             summary='1200平方米全案家具，含接待大厅、私宴厅、茶室与雪茄吧',
             challenge='12米长餐桌需独家开模岩板，缅甸花梨木需从云南口岸直采，工期紧张',
             solution='成立专项团队，岩板开模45天完成，花梨木从口岸直采节省15天',
             result='如期交付，开业后成为成都高端社交新地标',
             is_recommended=True, sort_order=4),
        Case(category=case_office, title='字节跳动深圳总部', client='字节跳动', industry='科技',
             summary='3层办公区全案家具，含升降桌系统与人体工学椅',
             challenge='办公模块需支持灵活重组，升降桌需通过BIFMA认证',
             solution='自主研发升降桌系统，配置记忆高度与久坐提醒功能',
             result='员工满意度95分，后续追加广州分部订单',
             sort_order=5),
        Case(category=case_office, title='招商银行总行大厦', client='招商银行', industry='金融',
             summary='12层办公区家具配置，高管新中式实木+员工北欧简约风格',
             challenge='3个月内完成12层楼，全部产品需通过GREENGUARD Gold认证',
             solution='分两批并行生产，高管区与员工区不同生产线同步推进',
             result='提前10天完成交付安装，空气质量检测全部达标',
             sort_order=6),
    ])
    print(f'Created 6 cases')

# === News Categories ===
news_company, _ = NewsCategory.objects.get_or_create(name='公司动态', slug='company', sort_order=1)
news_industry, _ = NewsCategory.objects.get_or_create(name='行业资讯', slug='industry', sort_order=2)
news_product, _ = NewsCategory.objects.get_or_create(name='产品发布', slug='product', sort_order=3)

# === News ===
if News.objects.count() == 0:
    News.objects.bulk_create([
        News(category=news_company, title='臻品家居深圳湾旗舰展厅盛大启幕',
             summary='5000平方米实景展厅正式对外开放，涵盖全系列9大风格空间',
             content='2026年6月18日，臻品家居深圳湾旗舰展厅正式开幕。新展厅位于深圳市南山区，面积达5000平方米，展示全系列9大风格空间，包括意式轻奢、新中式、现代简约等。展厅采用沉浸式体验设计，让客户在真实空间中感受每一件家具的质感与细节。',
             is_top=True, status='published'),
        News(category=news_product, title='2026米兰系列新品发布：Palermo转角沙发',
             summary='汲取意大利现代设计精髓，42道工序精制而成',
             content='臻品家居正式发布2026款Milano米兰系列新品Palermo转角沙发。这款沙发汲取意大利现代设计精髓，以简约线条与高级材质的平衡诠释当代奢华。每一件Palermo沙发都经过42道工序精制而成，采用进口头层牛皮，座垫为三层密度海绵结构。',
             is_top=True, status='published'),
        News(category=news_industry, title='2026年家具行业趋势：可持续材料成为主流',
             summary='FSC认证木材需求同比增长45%，环保涂装工艺加速普及',
             content='根据最新行业报告，2026年家具行业呈现三大趋势：可持续材料需求快速增长、智能家具渗透率提升、定制化服务成为标配。其中FSC认证木材需求同比增长45%，水性漆与植物木蜡油等环保涂装工艺正在加速普及。',
             status='published'),
        News(category=news_company, title='臻品家居荣获2025年度中国高端家具十大品牌',
             summary='由中国家具协会评选，表彰在设计创新与品质管控方面的卓越表现',
             content='2026年1月，臻品家居被中国家具协会评选为"2025年度中国高端家具十大品牌"。该奖项旨在表彰在设计创新、品质管控、客户服务等方面表现突出的企业。臻品家居凭借自主研发的多项专利技术和对品质的极致追求，从数千家企业中脱颖而出。',
             status='published'),
    ])
    print(f'Created 4 news items')

print('All seeding done!')
