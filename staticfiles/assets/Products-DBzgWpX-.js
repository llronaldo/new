import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, r as renderList, t as toDisplayString, b as createTextVNode, d as createVNode, w as withCtx, h as computed, f as resolveComponent, n as normalizeClass, g as createCommentVNode, i as ref } from "./index-DM2wJ4W0.js";
const _hoisted_1 = { class: "page-products" };
const _hoisted_2 = { class: "section" };
const _hoisted_3 = { class: "container" };
const _hoisted_4 = { class: "tabs" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "result-count" };
const _hoisted_7 = { class: "product-grid" };
const _hoisted_8 = { class: "product-body" };
const _hoisted_9 = { class: "product-header" };
const _hoisted_10 = { class: "product-tag" };
const _hoisted_11 = { class: "product-model" };
const _hoisted_12 = { class: "product-materials" };
const _hoisted_13 = { class: "product-desc" };
const _hoisted_14 = { class: "product-specs" };
const _hoisted_15 = { class: "spec-row" };
const _hoisted_16 = { class: "spec-val" };
const _hoisted_17 = {
  key: 0,
  class: "spec-row"
};
const _hoisted_18 = { class: "spec-val" };
const _hoisted_19 = {
  key: 1,
  class: "spec-row"
};
const _hoisted_20 = { class: "spec-val" };
const _hoisted_21 = {
  key: 2,
  class: "spec-row"
};
const _hoisted_22 = { class: "spec-val" };
const _hoisted_23 = { class: "showroom-guide" };
const _hoisted_24 = { class: "container" };
const _hoisted_25 = { class: "guide-grid" };
const _hoisted_26 = { class: "guide-text" };
const _sfc_main = {
  __name: "Products",
  setup(__props) {
    const activeCat = ref("all");
    const categories = [
      { label: "全系列", value: "all" },
      { label: "沙发", value: "沙发" },
      { label: "茶几/角几", value: "茶几" },
      { label: "餐桌椅", value: "餐桌" },
      { label: "床", value: "床" },
      { label: "柜类", value: "柜类" }
    ];
    const products = [
      { id: 1, cat: "沙发", name: "Palermo 转角沙发", model: "ZP-SF-001", cls: "p-sf1", materials: ["进口头层牛皮", "高密度海绵", "不锈钢脚"], desc: "L 型模块化设计，可自由组合适应不同空间。座垫采用三层密度海绵结构，坐感软硬适中，适合大平层与别墅客厅。", size: "W320 × D180 × H75 cm", color: "12 色可选", moq: "1 套", lead: "25–35 天" },
      { id: 2, cat: "沙发", name: "Verona 直排三人位", model: "ZP-SF-002", cls: "p-sf2", materials: ["意大利磨砂皮", "羽绒填充", "碳素钢框架"], desc: "极窄扶手设计最大化座面宽度。座垫填充白鹅绒与高弹海绵，深坐深提供沉浸式包裹感，适合舒适导向的现代客厅。", size: "W260 × D100 × H72 cm", color: "8 色可选", moq: "1 套", lead: "25–35 天" },
      { id: 3, cat: "沙发", name: "Capri 休闲单椅", model: "ZP-SF-003", cls: "p-sf3", materials: ["羊毛混纺面料", "白橡木框架", "黄铜脚帽"], desc: "经典丹麦设计语言，高背弧线贴合人体脊柱曲线。扶手宽度可放置一本书与一杯茶，是阅读角的理想之选。", size: "W78 × D82 × H98 cm", color: "6 色可选", moq: "2 件", lead: "20–25 天" },
      { id: 4, cat: "沙发", name: "Bologna 模块组合沙发", model: "ZP-SF-004", cls: "p-sf4", materials: ["科技布", "实木框架", "铝合金连接件"], desc: "由 6 个独立模块组成，支持一字、L 型、U 型等多种组合形态，适应派对、观影等不同场景。科技布面料防水防污。", size: "单模块 W100 × D100 cm", color: "4 色可选", moq: "4 模块", lead: "25–35 天" },
      { id: 5, cat: "茶几", name: "Como 组合茶几", model: "ZP-CT-001", cls: "p-ct1", materials: ["天然大理石台面", "拉丝不锈钢", "钢化玻璃"], desc: "高低错落双台面设计，大理石纹理独一无二。高几可单独作为角几使用，低几下方可收纳杂志与遥控器。", size: "大 Ø100×H38 · 小 Ø70×H48 cm", color: "3 种台面色", moq: "1 套", lead: "20–30 天" },
      { id: 6, cat: "茶几", name: "Siena 角几", model: "ZP-CT-002", cls: "p-ct2", materials: ["黑胡桃木", "黄铜拉手", "真皮包边"], desc: "圆润倒角处理，抽屉设计兼顾美观与收纳功能。顶部可放置台灯与书籍，抽屉收纳遥控器等小物。", size: "W55 × D45 × H60 cm", color: "2 种木色", moq: "2 件", lead: "15–20 天" },
      { id: 7, cat: "餐桌", name: "Montalcino 长餐桌", model: "ZP-DT-001", cls: "p-dt1", materials: ["北美白橡木", "岩板台面", "铝合金底座"], desc: "2.4 米桌面满足 8–10 人用餐。内置伸缩机构，可快速扩展至 3.2 米。岩板台面耐热耐刮，日常维护简便。", size: "W240/320 × D100 × H76 cm", color: "3 种台面色", moq: "1 件", lead: "25–35 天" },
      { id: 8, cat: "餐桌", name: "Orvieto 圆餐桌", model: "ZP-DT-002", cls: "p-dt2", materials: ["胡桃木贴皮", "实木转盘", "金属中柱"], desc: "1.5 米直径圆桌，中式围桌文化的现代演绎。内置转盘转动顺滑静音，适合家庭聚餐与商务宴请。", size: "Ø150 × H76 cm", color: "2 种木色", moq: "1 件", lead: "25–35 天" },
      { id: 9, cat: "餐桌", name: "Lucca 餐椅", model: "ZP-DC-001", cls: "p-dc1", materials: ["进口牛皮", "白蜡木框架", "高弹海绵"], desc: "弧面靠背贴合腰线，座垫前缘瀑布型设计减轻大腿压力。久坐不累，兼顾端庄外观与舒适体验。", size: "W52 × D56 × H82 cm", color: "8 色可选", moq: "4 件", lead: "20–30 天" },
      { id: 10, cat: "床", name: "Bellagio 主卧床", model: "ZP-BD-001", cls: "p-bd1", materials: ["头层牛皮软包", "实木排骨架", "榉木床脚"], desc: "高靠背设计搭配意大利进口牛皮软包，床头内置阅读灯与 USB 充电口。床箱气压升降，提供大容量储物空间。", size: "W200 × D220 × H125 cm", color: "6 色可选", moq: "1 件", lead: "25–35 天" },
      { id: 11, cat: "床", name: "Tivoli 次卧床", model: "ZP-BD-002", cls: "p-bd2", materials: ["棉麻面料", "松木框架", "金属支撑腿"], desc: "轻盈现代设计，底部离地 15cm 方便扫地机器人通过。靠背可拆卸更换面料，适应不同风格变化。", size: "W160 × D210 × H105 cm", color: "5 色可选", moq: "1 件", lead: "20–30 天" },
      { id: 12, cat: "床", name: "Firenze 儿童床", model: "ZP-BD-003", cls: "p-bd3", materials: ["环保水性漆", "榉木实木", "圆角安全设计"], desc: "全榉木实木打造，采用德国 OSMO 植物木蜡油涂装，零甲醛释放。围栏高度可调，从幼儿陪伴到独立睡眠一步到位。", size: "W100 × D200 × H90 cm", color: "原木色 / 白色", moq: "1 件", lead: "15–25 天" },
      { id: 13, cat: "柜类", name: "Amalfi 电视柜", model: "ZP-CB-001", cls: "p-cb1", materials: ["黑胡桃木贴皮", "天然大理石", "缓冲铰链"], desc: "2.2 米超长柜体采用悬浮式安装设计，隐藏走线槽解决线缆杂乱问题。柜门为反弹式开启，无拉手极简外观。", size: "W220 × D45 × H50 cm", color: "2 种木色", moq: "1 件", lead: "25–35 天" },
      { id: 14, cat: "柜类", name: "Portofino 玄关柜", model: "ZP-CB-002", cls: "p-cb2", materials: ["橄榄木贴皮", "黄铜五金", "皮革内饰"], desc: "入户第一眼的仪式感。三门设计容量充足，内置可调节隔板，抽屉内衬皮革防滑。黄铜拉手为失蜡法铸造。", size: "W120 × D40 × H100 cm", color: "1 种木色", moq: "1 件", lead: "25–35 天" },
      { id: 15, cat: "柜类", name: "Ravenna 书柜", model: "ZP-CB-003", cls: "p-cb3", materials: ["白橡木贴皮", "钢化玻璃层板", "LED 灯带"], desc: "开放式与封闭式结合的模块化书柜。内置暖光 LED 灯带，玻璃层板通透轻盈。单模块可独立使用，也可多组并排。", size: "W90 × D35 × H220 cm", color: "2 种木色", moq: "1 件", lead: "25–35 天" },
      { id: 16, cat: "茶几", name: "Vicenza 边几组合", model: "ZP-CT-003", cls: "p-ct3", materials: ["不锈钢底座", "岩板台面", "磁吸连接"], desc: "三件套可自由排列，底座之间通过磁吸连接固定。轻巧的设计方便随时移动至沙发或床边使用。", size: "各 Ø40 × H50 cm × 3 件", color: "2 种", moq: "1 套", lead: "20–25 天" }
    ];
    const filteredProducts = computed(
      () => activeCat.value === "all" ? products : products.filter((p) => p.cat === activeCat.value)
    );
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[12] || (_cache[12] = createBaseVNode("section", { class: "page-banner" }, [
          createBaseVNode("div", { class: "banner-inner" }, [
            createBaseVNode("p", { class: "banner-eyebrow" }, "Our Collection"),
            createBaseVNode("h1", null, "产品系列"),
            createBaseVNode("p", { class: "banner-sub" }, "从经典到当代，二十载匠心沉淀每一件作品")
          ])
        ], -1)),
        createBaseVNode("section", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              (openBlock(), createElementBlock(Fragment, null, renderList(categories, (cat) => {
                return createBaseVNode("button", {
                  key: cat.value,
                  class: normalizeClass({ active: activeCat.value === cat.value }),
                  onClick: ($event) => activeCat.value = cat.value
                }, toDisplayString(cat.label), 11, _hoisted_5);
              }), 64))
            ]),
            createBaseVNode("p", _hoisted_6, "共 " + toDisplayString(filteredProducts.value.length) + " 款产品", 1),
            createBaseVNode("div", _hoisted_7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(filteredProducts.value, (p) => {
                return openBlock(), createElementBlock("div", {
                  class: "product-card",
                  key: p.id
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(["product-img", p.cls])
                  }, null, 2),
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("span", _hoisted_10, toDisplayString(p.cat), 1),
                      createBaseVNode("span", _hoisted_11, toDisplayString(p.model), 1)
                    ]),
                    createBaseVNode("h3", null, toDisplayString(p.name), 1),
                    createBaseVNode("div", _hoisted_12, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(p.materials, (m) => {
                        return openBlock(), createElementBlock("span", { key: m }, toDisplayString(m), 1);
                      }), 128))
                    ]),
                    createBaseVNode("p", _hoisted_13, toDisplayString(p.desc), 1),
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("div", _hoisted_15, [
                        _cache[0] || (_cache[0] = createBaseVNode("span", { class: "spec-label" }, "尺寸", -1)),
                        createBaseVNode("span", _hoisted_16, toDisplayString(p.size), 1)
                      ]),
                      p.color ? (openBlock(), createElementBlock("div", _hoisted_17, [
                        _cache[1] || (_cache[1] = createBaseVNode("span", { class: "spec-label" }, "可选色", -1)),
                        createBaseVNode("span", _hoisted_18, toDisplayString(p.color), 1)
                      ])) : createCommentVNode("", true),
                      p.moq ? (openBlock(), createElementBlock("div", _hoisted_19, [
                        _cache[2] || (_cache[2] = createBaseVNode("span", { class: "spec-label" }, "起订量", -1)),
                        createBaseVNode("span", _hoisted_20, toDisplayString(p.moq), 1)
                      ])) : createCommentVNode("", true),
                      p.lead ? (openBlock(), createElementBlock("div", _hoisted_21, [
                        _cache[3] || (_cache[3] = createBaseVNode("span", { class: "spec-label" }, "交期", -1)),
                        createBaseVNode("span", _hoisted_22, toDisplayString(p.lead), 1)
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode(_component_router_link, {
                      to: "/contact",
                      class: "product-inquiry"
                    }, {
                      default: withCtx(() => [..._cache[4] || (_cache[4] = [
                        createTextVNode("咨询报价 →", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]);
              }), 128))
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_23, [
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                _cache[6] || (_cache[6] = createBaseVNode("p", { class: "section-eyebrow" }, "Showroom", -1)),
                _cache[7] || (_cache[7] = createBaseVNode("h2", null, [
                  createTextVNode("欢迎预约"),
                  createBaseVNode("br"),
                  createTextVNode("展厅体验")
                ], -1)),
                _cache[8] || (_cache[8] = createBaseVNode("div", { class: "divider" }, null, -1)),
                _cache[9] || (_cache[9] = createBaseVNode("p", null, "5,000 ㎡ 实景展厅陈列全系列产品。我们相信，真正的质感需要亲眼所见、亲手触摸。", -1)),
                _cache[10] || (_cache[10] = createBaseVNode("p", null, "专业顾问一对一讲解，根据您的项目需求提供针对性选型建议与搭配方案。", -1)),
                createVNode(_component_router_link, {
                  to: "/contact",
                  class: "text-link"
                }, {
                  default: withCtx(() => [..._cache[5] || (_cache[5] = [
                    createTextVNode("预约展厅参观 →", -1)
                  ])]),
                  _: 1
                })
              ]),
              _cache[11] || (_cache[11] = createBaseVNode("div", { class: "guide-visual" }, null, -1))
            ])
          ])
        ])
      ]);
    };
  }
};
const Products = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2b205413"]]);
export {
  Products as default
};
