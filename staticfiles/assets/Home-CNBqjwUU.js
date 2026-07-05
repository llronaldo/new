import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, w as withCtx, F as Fragment, r as renderList, e as createStaticVNode, f as resolveComponent, t as toDisplayString, n as normalizeClass, g as createCommentVNode } from "./index-DM2wJ4W0.js";
const _hoisted_1 = { class: "page-home" };
const _hoisted_2 = { class: "hero" };
const _hoisted_3 = { class: "hero-content" };
const _hoisted_4 = { class: "hero-actions" };
const _hoisted_5 = { class: "stats-bar" };
const _hoisted_6 = { class: "container" };
const _hoisted_7 = { class: "stats-grid" };
const _hoisted_8 = { class: "stat-num" };
const _hoisted_9 = { class: "stat-label" };
const _hoisted_10 = { class: "stat-desc" };
const _hoisted_11 = { class: "section intro-section" };
const _hoisted_12 = { class: "container" };
const _hoisted_13 = { class: "intro-grid" };
const _hoisted_14 = { class: "intro-text" };
const _hoisted_15 = { class: "section series-section" };
const _hoisted_16 = { class: "container" };
const _hoisted_17 = { class: "series-grid" };
const _hoisted_18 = { class: "series-info" };
const _hoisted_19 = { class: "series-tag" };
const _hoisted_20 = { class: "series-materials" };
const _hoisted_21 = { class: "series-scene" };
const _hoisted_22 = { class: "section projects-section" };
const _hoisted_23 = { class: "container" };
const _hoisted_24 = { class: "projects-grid" };
const _hoisted_25 = { class: "project-info" };
const _hoisted_26 = { class: "project-cat" };
const _hoisted_27 = { class: "project-meta" };
const _hoisted_28 = { class: "project-desc" };
const _hoisted_29 = { class: "center-link" };
const _hoisted_30 = { class: "section flow-section" };
const _hoisted_31 = { class: "container" };
const _hoisted_32 = { class: "flow-grid" };
const _hoisted_33 = { class: "flow-num" };
const _hoisted_34 = {
  key: 0,
  class: "flow-line"
};
const _hoisted_35 = { class: "flow-time" };
const _hoisted_36 = { class: "service-pledge" };
const _hoisted_37 = { class: "pledge-icon" };
const _hoisted_38 = { class: "section clients-section" };
const _hoisted_39 = { class: "container" };
const _hoisted_40 = { class: "clients-grid" };
const _hoisted_41 = { class: "cta" };
const _hoisted_42 = { class: "cta-inner" };
const _hoisted_43 = { class: "cta-actions" };
const _sfc_main = {
  __name: "Home",
  setup(__props) {
    const stats = [
      { num: "20+", label: "年制造经验", desc: "自 2010 年专注高端家具" },
      { num: "20,000㎡", label: "现代化厂房", desc: "佛山南海 · 自有生产基地" },
      { num: "5,000㎡", label: "实景展厅", desc: "乐从总部 · 全系列陈列" },
      { num: "2,000+", label: "工程项目", desc: "酒店 / 别墅 / 商业空间" }
    ];
    const series = [
      { cls: "s-italian", tag: "意式轻奢", name: "Milano 米兰系列", desc: "汲取意大利现代设计精髓，以简约线条与高级材质的平衡诠释当代奢华。每一件作品都经过 42 道工序精制而成。", materials: ["进口头层牛皮", "天然大理石", "黑胡桃木实木"], scene: "高端住宅、精品酒店、总裁办公室" },
      { cls: "s-chinese", tag: "新中式", name: "Jiangnan 江南系列", desc: "东方美学的当代演绎——以温润木作为主调，融合铜件、藤编等传统手工艺元素，在克制中见底蕴。", materials: ["缅甸花梨木", "黄铜五金", "天然藤编"], scene: "中式别墅、茶空间、文化会所" },
      { cls: "s-modern", tag: "现代简约", name: "Nordic 北欧系列", desc: "极简主义与功能主义的融合，干净利落的廓形搭配温暖克制的配色，让家具回归服务于人的本质。", materials: ["北美白橡木", "羊毛混纺面料", "哑光金属"], scene: "现代公寓、联合办公、设计工作室" }
    ];
    const featuredProjects = [
      { cls: "p-hotel", cat: "酒店工程", name: "杭州西溪悦榕庄", location: "浙江杭州", scale: "120 间客房", year: "2024", desc: "全案定制客房家具、公区沙发组及餐厅桌椅，以意式轻奢融合东方禅意，营造静谧隐逸的度假氛围。" },
      { cls: "p-villa", cat: "别墅私宅", name: "深圳湾壹号私人府邸", location: "广东深圳", scale: "800 ㎡", year: "2024", desc: "全屋定制家具方案，主沙发采用意大利进口粒面牛皮，茶几台面选用卡拉拉天然大理石。" },
      { cls: "p-commercial", cat: "商业空间", name: "成都太古里高端会所", location: "四川成都", scale: "1,200 ㎡", year: "2024", desc: "接待大厅、私宴厅与茶室全案家具，定制 12 米长餐桌为独家开模岩板。" },
      { cls: "p-office", cat: "办公家具", name: "字节跳动深圳总部", location: "广东深圳", scale: "3 层办公区", year: "2023", desc: "开放式办公区与休闲区全案家具，升降桌系统与人体工学椅为自主研发。" }
    ];
    const flow = [
      { title: "需求沟通", time: "第 1–2 天", desc: "专属顾问上门或线上沟通，了解空间尺寸、风格偏好与功能需求，提供初步选型建议" },
      { title: "方案设计", time: "第 3–7 天", desc: "设计师出具空间规划方案、家具配置清单与 3D 效果图，支持多轮修改直至满意" },
      { title: "物料确认", time: "第 8–10 天", desc: "提供皮料、木材、布艺等实物色板，客户现场确认所有材质与颜色" },
      { title: "打样验收", time: "第 11–20 天", desc: "关键单品实物打样，确认坐感、细节与整体效果，确保零误差" },
      { title: "精益生产", time: "第 21–45 天", desc: "工厂按确认样生产，专人每周同步进度照片，严格品控三道检验" },
      { title: "交付安装", time: "第 46–50 天", desc: "专业物流送货上门，安装团队现场组装调试，清理现场并验收交付" }
    ];
    const pledges = [
      { icon: "🛡", title: "5 年质保", desc: "所有产品提供 5 年免费质保，终身维护" },
      { icon: "🚚", title: "全国包物流", desc: "自有车队 + 合作物流，送货入户" },
      { icon: "🔄", title: "30 天无理由", desc: "到货 30 天内如不满意，无条件退换" },
      { icon: "📐", title: "免费量尺", desc: "全国 200+ 城市免费上门量尺服务" }
    ];
    const clients = ["悦榕庄酒店集团", "万科地产", "华润置地", "字节跳动", "招商银行", "北京 SKP", "深圳湾壹号", "上海汤臣一品", "成都太古里", "三亚艾迪逊酒店", "绿城中国", "保利发展"];
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("section", _hoisted_2, [
          _cache[5] || (_cache[5] = createBaseVNode("div", { class: "hero-overlay" }, null, -1)),
          createBaseVNode("div", _hoisted_3, [
            _cache[2] || (_cache[2] = createBaseVNode("p", { class: "hero-eyebrow" }, "ZhenPin Furniture · Since 2010", -1)),
            _cache[3] || (_cache[3] = createBaseVNode("h1", { class: "hero-title" }, [
              createTextVNode("源头工厂"),
              createBaseVNode("span", { class: "gold-dot" }, "·"),
              createTextVNode("匠心制造")
            ], -1)),
            _cache[4] || (_cache[4] = createBaseVNode("p", { class: "hero-sub" }, [
              createTextVNode("二十年深耕高端家具制造，直供星级酒店、别墅府邸与商业空间"),
              createBaseVNode("br"),
              createTextVNode("去掉中间环节，让品质触手可及")
            ], -1)),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_router_link, {
                to: "/products",
                class: "btn-gold"
              }, {
                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                  createTextVNode("浏览产品系列", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_router_link, {
                to: "/contact",
                class: "btn-line"
              }, {
                default: withCtx(() => [..._cache[1] || (_cache[1] = [
                  createTextVNode("预约展厅参观", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          _cache[6] || (_cache[6] = createBaseVNode("div", { class: "hero-scroll" }, [
            createBaseVNode("span")
          ], -1))
        ]),
        createBaseVNode("section", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              (openBlock(), createElementBlock(Fragment, null, renderList(stats, (s) => {
                return createBaseVNode("div", {
                  class: "stat-item",
                  key: s.num
                }, [
                  createBaseVNode("span", _hoisted_8, toDisplayString(s.num), 1),
                  createBaseVNode("span", _hoisted_9, toDisplayString(s.label), 1),
                  createBaseVNode("span", _hoisted_10, toDisplayString(s.desc), 1)
                ]);
              }), 64))
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_11, [
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                _cache[8] || (_cache[8] = createStaticVNode('<p class="section-eyebrow" data-v-793f0c60>About Us</p><h2 class="section-title" data-v-793f0c60>源自工厂<br data-v-793f0c60>定义品质</h2><div class="divider" data-v-793f0c60></div><p class="intro-body" data-v-793f0c60>臻品家居成立于 2010 年，坐落于中国家具之都——佛山顺德。作为一家集原创设计、精益制造、全球直供于一体的源头工厂，我们拥有 20,000 ㎡现代化厂房与 5,000 ㎡实景展厅，服务超过 2,000 个工程项目，覆盖全国 30 余个省市及东南亚、中东、欧洲等海外市场。</p><p class="intro-body" data-v-793f0c60>我们深信：真正的高端家具，不是过度包装与品牌溢价的产物，而是源自好材料、好工艺与好设计的自然呈现。从工厂到空间，从一块木材到一件作品，臻品家居用看得见的质感与细节，为每一位客户创造值得传承的家居体验。</p><div class="intro-highlights" data-v-793f0c60><div class="hl-item" data-v-793f0c60><span class="hl-check" data-v-793f0c60>✓</span> 意大利 / 德国进口生产设备</div><div class="hl-item" data-v-793f0c60><span class="hl-check" data-v-793f0c60>✓</span> FSC 认证可持续木材供应链</div><div class="hl-item" data-v-793f0c60><span class="hl-check" data-v-793f0c60>✓</span> 欧盟环保标准涂装工艺</div><div class="hl-item" data-v-793f0c60><span class="hl-check" data-v-793f0c60>✓</span> 自有物流车队覆盖全国</div></div>', 6)),
                createVNode(_component_router_link, {
                  to: "/products",
                  class: "text-link"
                }, {
                  default: withCtx(() => [..._cache[7] || (_cache[7] = [
                    createTextVNode("探索全部产品系列 →", -1)
                  ])]),
                  _: 1
                })
              ]),
              _cache[9] || (_cache[9] = createBaseVNode("div", { class: "intro-images" }, [
                createBaseVNode("div", { class: "intro-img img-main" }),
                createBaseVNode("div", { class: "intro-img img-sub" })
              ], -1))
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_15, [
          createBaseVNode("div", _hoisted_16, [
            _cache[11] || (_cache[11] = createBaseVNode("p", { class: "section-eyebrow center" }, "Product Series", -1)),
            _cache[12] || (_cache[12] = createBaseVNode("h2", { class: "section-title center" }, "三大产品系列", -1)),
            _cache[13] || (_cache[13] = createBaseVNode("div", { class: "divider center-d" }, null, -1)),
            _cache[14] || (_cache[14] = createBaseVNode("p", { class: "section-sub center" }, "从意式轻奢到东方美学，满足不同空间的气质表达", -1)),
            createBaseVNode("div", _hoisted_17, [
              (openBlock(), createElementBlock(Fragment, null, renderList(series, (s) => {
                return createBaseVNode("div", {
                  class: "series-card",
                  key: s.name
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(["series-img", s.cls])
                  }, null, 2),
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("span", _hoisted_19, toDisplayString(s.tag), 1),
                    createBaseVNode("h3", null, toDisplayString(s.name), 1),
                    createBaseVNode("p", null, toDisplayString(s.desc), 1),
                    createBaseVNode("ul", _hoisted_20, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(s.materials, (m) => {
                        return openBlock(), createElementBlock("li", { key: m }, toDisplayString(m), 1);
                      }), 128))
                    ]),
                    createBaseVNode("p", _hoisted_21, [
                      _cache[10] || (_cache[10] = createBaseVNode("strong", null, "适用场景：", -1)),
                      createTextVNode(toDisplayString(s.scene), 1)
                    ])
                  ])
                ]);
              }), 64))
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_22, [
          createBaseVNode("div", _hoisted_23, [
            _cache[16] || (_cache[16] = createBaseVNode("p", { class: "section-eyebrow center" }, "Featured Projects", -1)),
            _cache[17] || (_cache[17] = createBaseVNode("h2", { class: "section-title center" }, "精选工程案例", -1)),
            _cache[18] || (_cache[18] = createBaseVNode("div", { class: "divider center-d" }, null, -1)),
            _cache[19] || (_cache[19] = createBaseVNode("p", { class: "section-sub center" }, "两千余项目的经验积淀，服务涵盖酒店、别墅、商业空间与办公领域", -1)),
            createBaseVNode("div", _hoisted_24, [
              (openBlock(), createElementBlock(Fragment, null, renderList(featuredProjects, (p) => {
                return createBaseVNode("div", {
                  class: "project-card",
                  key: p.name
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(["project-img", p.cls])
                  }, null, 2),
                  createBaseVNode("div", _hoisted_25, [
                    createBaseVNode("span", _hoisted_26, toDisplayString(p.cat), 1),
                    createBaseVNode("h3", null, toDisplayString(p.name), 1),
                    createBaseVNode("p", _hoisted_27, toDisplayString(p.location) + " · " + toDisplayString(p.scale) + " · " + toDisplayString(p.year), 1),
                    createBaseVNode("p", _hoisted_28, toDisplayString(p.desc), 1)
                  ])
                ]);
              }), 64))
            ]),
            createBaseVNode("div", _hoisted_29, [
              createVNode(_component_router_link, {
                to: "/projects",
                class: "text-link"
              }, {
                default: withCtx(() => [..._cache[15] || (_cache[15] = [
                  createTextVNode("查看全部工程案例 →", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_30, [
          createBaseVNode("div", _hoisted_31, [
            _cache[20] || (_cache[20] = createBaseVNode("p", { class: "section-eyebrow center" }, "Custom Flow", -1)),
            _cache[21] || (_cache[21] = createBaseVNode("h2", { class: "section-title center" }, "一对一专属定制", -1)),
            _cache[22] || (_cache[22] = createBaseVNode("div", { class: "divider center-d" }, null, -1)),
            _cache[23] || (_cache[23] = createBaseVNode("p", { class: "section-sub center" }, "从需求沟通到交付落地，全链路专属团队跟进", -1)),
            createBaseVNode("div", _hoisted_32, [
              (openBlock(), createElementBlock(Fragment, null, renderList(flow, (f, i) => {
                return createBaseVNode("div", {
                  class: "flow-item",
                  key: f.title
                }, [
                  createBaseVNode("span", _hoisted_33, toDisplayString(String(i + 1).padStart(2, "0")), 1),
                  i < flow.length - 1 ? (openBlock(), createElementBlock("div", _hoisted_34)) : createCommentVNode("", true),
                  createBaseVNode("h4", null, toDisplayString(f.title), 1),
                  createBaseVNode("p", _hoisted_35, toDisplayString(f.time), 1),
                  createBaseVNode("p", null, toDisplayString(f.desc), 1)
                ]);
              }), 64))
            ]),
            createBaseVNode("div", _hoisted_36, [
              (openBlock(), createElementBlock(Fragment, null, renderList(pledges, (pl) => {
                return createBaseVNode("div", {
                  class: "pledge-item",
                  key: pl.title
                }, [
                  createBaseVNode("span", _hoisted_37, toDisplayString(pl.icon), 1),
                  createBaseVNode("h5", null, toDisplayString(pl.title), 1),
                  createBaseVNode("p", null, toDisplayString(pl.desc), 1)
                ]);
              }), 64))
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_38, [
          createBaseVNode("div", _hoisted_39, [
            _cache[24] || (_cache[24] = createBaseVNode("p", { class: "section-eyebrow center" }, "Trusted By", -1)),
            _cache[25] || (_cache[25] = createBaseVNode("h2", { class: "section-title center" }, "合作客户", -1)),
            _cache[26] || (_cache[26] = createBaseVNode("div", { class: "divider center-d" }, null, -1)),
            _cache[27] || (_cache[27] = createBaseVNode("p", { class: "section-sub center" }, "我们荣幸为以下品牌与机构提供服务", -1)),
            createBaseVNode("div", _hoisted_40, [
              (openBlock(), createElementBlock(Fragment, null, renderList(clients, (c) => {
                return createBaseVNode("div", {
                  class: "client-item",
                  key: c
                }, toDisplayString(c), 1);
              }), 64))
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_41, [
          createBaseVNode("div", _hoisted_42, [
            _cache[30] || (_cache[30] = createBaseVNode("p", { class: "cta-eyebrow" }, "Visit Our Showroom", -1)),
            _cache[31] || (_cache[31] = createBaseVNode("h2", null, [
              createTextVNode("亲临 5,000 ㎡ 实景展厅"),
              createBaseVNode("span", { class: "gold-dot" }, "·"),
              createTextVNode("体验实物质感")
            ], -1)),
            _cache[32] || (_cache[32] = createBaseVNode("p", null, "佛山市顺德区乐从镇家居大道 288 号 · 每日 9:00–18:00 开放", -1)),
            createBaseVNode("div", _hoisted_43, [
              createVNode(_component_router_link, {
                to: "/contact",
                class: "btn-gold"
              }, {
                default: withCtx(() => [..._cache[28] || (_cache[28] = [
                  createTextVNode("预约参观", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_router_link, {
                to: "/products",
                class: "btn-line"
              }, {
                default: withCtx(() => [..._cache[29] || (_cache[29] = [
                  createTextVNode("在线浏览产品", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-793f0c60"]]);
export {
  Home as default
};
