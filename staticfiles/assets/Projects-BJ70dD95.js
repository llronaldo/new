import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, r as renderList, t as toDisplayString, d as createVNode, w as withCtx, b as createTextVNode, h as computed, f as resolveComponent, n as normalizeClass, i as ref } from "./index-DM2wJ4W0.js";
const _hoisted_1 = { class: "page-projects" };
const _hoisted_2 = { class: "section" };
const _hoisted_3 = { class: "container" };
const _hoisted_4 = { class: "tabs" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "result-count" };
const _hoisted_7 = { class: "project-list" };
const _hoisted_8 = { class: "pv-tag" };
const _hoisted_9 = { class: "project-detail" };
const _hoisted_10 = { class: "project-cat" };
const _hoisted_11 = { class: "project-meta-row" };
const _hoisted_12 = { class: "meta-item" };
const _hoisted_13 = { class: "meta-val" };
const _hoisted_14 = { class: "meta-item" };
const _hoisted_15 = { class: "meta-val" };
const _hoisted_16 = { class: "meta-item" };
const _hoisted_17 = { class: "meta-val" };
const _hoisted_18 = { class: "project-desc" };
const _hoisted_19 = { class: "project-products" };
const _hoisted_20 = { class: "cta-sm" };
const _hoisted_21 = { class: "cta-sm-inner" };
const _sfc_main = {
  __name: "Projects",
  setup(__props) {
    const activeCat = ref("all");
    const categories = [
      { label: "全部", value: "all" },
      { label: "酒店工程", value: "酒店" },
      { label: "别墅私宅", value: "别墅" },
      { label: "商业空间", value: "商业" },
      { label: "办公家具", value: "办公" }
    ];
    const projects = [
      { cat: "酒店", name: "杭州西溪悦榕庄", location: "浙江杭州", scale: "120 间客房 + 公区", year: "2024", cls: "pj-h1", productSeries: ["Milano 米兰系列", "Jiangnan 江南系列"], desc: "全案定制客房家具、公区沙发组及餐厅桌椅。以意式轻奢融合东方禅意，营造静谧隐逸的度假氛围。所有木材采用 FSC 认证实木，皮革通过欧盟 REACH 环保标准。床头柜内置无线充电模块，衣柜内嵌感应灯带，在传统美学中融入当代科技。" },
      { cat: "酒店", name: "三亚艾迪逊酒店", location: "海南三亚", scale: "260 间客房 + 泳池区", year: "2023", cls: "pj-h2", productSeries: ["Milano 米兰系列"], desc: "全案供应客房、大堂吧、泳池休闲区家具。户外家具全部采用 6063-T5 耐候铝合金框架与 Sunbrella 户外面料，经 1,000 小时盐雾测试不褪色、不生锈。藤编装饰件为海南本地匠人手工编织，与当代设计形成有趣对话。" },
      { cat: "酒店", name: "成都博舍酒店", location: "四川成都", scale: "80 间客房", year: "2024", cls: "pj-h3", productSeries: ["Jiangnan 江南系列"], desc: "为太古里地标酒店定制中西合璧风格家具。床背板以蜀锦元素为灵感定制刺绣图案，迷你吧柜体为整块楠木 CNC 雕刻。每间客房家具均为独立编号，确保一房一案的独特性。" },
      { cat: "别墅", name: "深圳湾壹号私人府邸", location: "广东深圳", scale: "800 ㎡", year: "2024", cls: "pj-v1", productSeries: ["Milano 米兰系列", "Nordic 北欧系列"], desc: "全屋定制家具方案，涵盖客厅、餐厅、主卧、书房、影音室及衣帽间共 48 件家具。主沙发采用意大利 Gruppo Mastrotto 粒面牛皮，茶几台面为意大利卡拉拉天然大理石，每一块石纹皆由业主亲自挑选。全屋木作统一为北美黑胡桃木，纹理连续对花。" },
      { cat: "别墅", name: "上海汤臣一品复式府邸", location: "上海", scale: "650 ㎡", year: "2023", cls: "pj-v2", productSeries: ["Jiangnan 江南系列"], desc: "新中式风格全屋定制。入口玄关屏风为缅甸花梨木榫卯结构，餐厅 2 米直径圆桌由整块木材旋切而成，12 把餐椅软包为苏绣非遗传承人手工刺绣。铜件全部采用失蜡法铸造工艺，表面做旧处理呈现岁月质感。" },
      { cat: "别墅", name: "广州二沙岛别墅", location: "广东广州", scale: "520 ㎡", year: "2025", cls: "pj-v3", productSeries: ["Milano 米兰系列"], desc: "意式极简风格五层别墅全屋定制。客厅挑高 6 米，定制 5 米高书架为钢结构龙骨+实木贴皮。餐厅定制 3.5 米加长岩板餐桌，搭配 14 把餐椅。主卧衣帽间为全开放式模块化系统，灯光色温可根据昼夜自动调节。" },
      { cat: "商业", name: "成都太古里高端会所", location: "四川成都", scale: "1,200 ㎡", year: "2024", cls: "pj-c1", productSeries: ["Milano 米兰系列", "Nordic 北欧系列"], desc: "包含接待大厅、私宴厅、普洱茶室与雪茄吧的全案家具方案。接待区定制弧形沙发环绕中庭水景，私宴厅 12 米长餐桌为独家开模岩板，内置保温与电磁感应系统。茶室全部采用缅甸花梨木定制，雪茄吧为深色皮质风格。" },
      { cat: "商业", name: "北京 SKP 贵宾 Lounge", location: "北京", scale: "400 ㎡", year: "2024", cls: "pj-c2", productSeries: ["Milano 米兰系列"], desc: "高端商场 VIP 休息区全案家具定制。模块化沙发可灵活组合应对新品发布、VIP 接待等不同场景。面料选用意大利 Loro Piana 内饰系列，触感极致细腻。所有家具内置隐藏式充电接口，兼顾美学与功能。" },
      { cat: "办公", name: "字节跳动深圳总部", location: "广东深圳", scale: "3 层办公区", year: "2023", cls: "pj-o1", productSeries: ["Nordic 北欧系列"], desc: "开放式办公区、会议室、休闲区与电话间全案家具。自主研发升降桌系统通过 BIFMA 认证，配置记忆高度与久坐提醒功能。休闲区模块化沙发支持快速重组，满足团队扩张与重组需求。" },
      { cat: "办公", name: "招商银行总行大厦", location: "广东深圳", scale: "12 层办公区", year: "2022", cls: "pj-o2", productSeries: ["Jiangnan 江南系列", "Nordic 北欧系列"], desc: "高管办公区采用新中式实木班台与书柜组合，班台内置线缆管理系统与指纹锁抽屉。员工区使用北欧简约系列升降桌加人体工学椅。全部产品通过 GREENGUARD Gold 室内空气质量认证。" },
      { cat: "商业", name: "上海新天地设计酒店", location: "上海", scale: "65 间客房", year: "2024", cls: "pj-h4", productSeries: ["Milano 米兰系列", "Nordic 北欧系列"], desc: "设计师精品酒店全案家具。每层楼一个主题色，客房家具配色对应变化。床架为悬浮式设计，底部 LED 灯带营造漂浮感。公区采用水泥灰北欧系列搭配绿植，营造城市绿洲氛围。" },
      { cat: "办公", name: "华为松山湖研发中心", location: "广东东莞", scale: "5 栋办公楼", year: "2024", cls: "pj-o3", productSeries: ["Nordic 北欧系列"], desc: "欧洲小镇风格园区办公家具全案。根据不同建筑风格（巴黎、维罗纳、格拉纳达等）定制不同配色方案的北欧系列家具，在统一中寻求变化。所有升降桌通过人体工学认证。" }
    ];
    const filteredProjects = computed(() => activeCat.value === "all" ? projects : projects.filter((p) => p.cat === activeCat.value));
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[7] || (_cache[7] = createBaseVNode("section", { class: "page-banner" }, [
          createBaseVNode("div", { class: "banner-inner" }, [
            createBaseVNode("p", { class: "banner-eyebrow" }, "Engineering Projects"),
            createBaseVNode("h1", null, "工程案例"),
            createBaseVNode("p", { class: "banner-sub" }, "两千余项目沉淀，覆盖星级酒店、别墅府邸与商业空间")
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
            createBaseVNode("p", _hoisted_6, "共 " + toDisplayString(filteredProjects.value.length) + " 个案例", 1),
            createBaseVNode("div", _hoisted_7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(filteredProjects.value, (p, idx) => {
                return openBlock(), createElementBlock("div", {
                  class: normalizeClass(["project-row", { reversed: idx % 2 === 1 }]),
                  key: p.name
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(["project-visual", p.cls])
                  }, [
                    createBaseVNode("div", _hoisted_8, toDisplayString(p.cat), 1)
                  ], 2),
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("span", _hoisted_10, toDisplayString(p.cat), 1),
                    createBaseVNode("h3", null, toDisplayString(p.name), 1),
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("div", _hoisted_12, [
                        _cache[0] || (_cache[0] = createBaseVNode("span", { class: "meta-label" }, "地点", -1)),
                        createBaseVNode("span", _hoisted_13, toDisplayString(p.location), 1)
                      ]),
                      createBaseVNode("div", _hoisted_14, [
                        _cache[1] || (_cache[1] = createBaseVNode("span", { class: "meta-label" }, "规模", -1)),
                        createBaseVNode("span", _hoisted_15, toDisplayString(p.scale), 1)
                      ]),
                      createBaseVNode("div", _hoisted_16, [
                        _cache[2] || (_cache[2] = createBaseVNode("span", { class: "meta-label" }, "年份", -1)),
                        createBaseVNode("span", _hoisted_17, toDisplayString(p.year), 1)
                      ])
                    ]),
                    _cache[4] || (_cache[4] = createBaseVNode("div", { class: "divider" }, null, -1)),
                    createBaseVNode("p", _hoisted_18, toDisplayString(p.desc), 1),
                    createBaseVNode("div", _hoisted_19, [
                      _cache[3] || (_cache[3] = createBaseVNode("span", { class: "pp-label" }, "使用产品：", -1)),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(p.productSeries, (ps) => {
                        return openBlock(), createElementBlock("span", {
                          key: ps,
                          class: "pp-tag"
                        }, toDisplayString(ps), 1);
                      }), 128))
                    ])
                  ])
                ], 2);
              }), 128))
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_20, [
          createBaseVNode("div", _hoisted_21, [
            _cache[6] || (_cache[6] = createBaseVNode("p", null, "需要为您的项目定制家具方案？", -1)),
            createVNode(_component_router_link, {
              to: "/custom",
              class: "btn-gold"
            }, {
              default: withCtx(() => [..._cache[5] || (_cache[5] = [
                createTextVNode("了解定制服务", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ]);
    };
  }
};
const Projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-277af552"]]);
export {
  Projects as default
};
