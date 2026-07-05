import { o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, r as renderList, e as createStaticVNode, j as withModifiers, k as withDirectives, v as vModelText, l as vModelSelect, t as toDisplayString, m as reactive, i as ref, g as createCommentVNode, n as normalizeClass } from "./index-DM2wJ4W0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1 = { class: "page-custom" };
const _hoisted_2 = { class: "section" };
const _hoisted_3 = { class: "container" };
const _hoisted_4 = { class: "custom-grid" };
const _hoisted_5 = { class: "custom-icon" };
const _hoisted_6 = { class: "custom-subtitle" };
const _hoisted_7 = { class: "custom-points" };
const _hoisted_8 = { class: "section flow-section" };
const _hoisted_9 = { class: "container" };
const _hoisted_10 = { class: "flow-grid" };
const _hoisted_11 = { class: "flow-badge" };
const _hoisted_12 = {
  key: 0,
  class: "flow-line"
};
const _hoisted_13 = { class: "flow-time" };
const _hoisted_14 = { class: "flow-desc" };
const _hoisted_15 = { class: "section material-section" };
const _hoisted_16 = { class: "container" };
const _hoisted_17 = { class: "material-grid" };
const _hoisted_18 = { class: "material-info" };
const _hoisted_19 = { class: "section cases-section" };
const _hoisted_20 = { class: "container" };
const _hoisted_21 = { class: "cases-grid" };
const _hoisted_22 = { class: "case-tag-badge" };
const _hoisted_23 = { class: "case-info" };
const _hoisted_24 = { class: "case-meta" };
const _hoisted_25 = { class: "case-desc" };
const _hoisted_26 = { class: "cta-form-section" };
const _hoisted_27 = { class: "container" };
const _hoisted_28 = { class: "cta-form-grid" };
const _hoisted_29 = { class: "cta-form-wrapper" };
const _hoisted_30 = { class: "fm-row" };
const _hoisted_31 = {
  type: "submit",
  class: "fm-submit"
};
const _sfc_main = {
  __name: "Custom",
  setup(__props) {
    const customTypes = [
      { icon: "📐", title: "尺寸定制", subtitle: "空间不设限，尺寸不将就", points: ["精确到毫米的量尺服务", "异形、转角等特殊空间专属方案", "已有产品尺寸修改适配", "非标尺寸不加收开模费"] },
      { icon: "🪵", title: "材质定制", subtitle: "从皮料到木材，由你定义", points: ["50+ 进口/国产皮料可选", "80+ 木皮色板可供选样", "布艺面料阻燃等级可选", "石材、金属等多种可选材质"] },
      { icon: "🎨", title: "颜色定制", subtitle: "配色不受既定方案限制", points: ["潘通色卡对色打样确认", "多材质同色匹配方案", "金属件表面处理工艺可选", "做旧、擦色等特殊效果定制"] },
      { icon: "🏠", title: "全案定制", subtitle: "一站式全屋家具解决方案", points: ["空间规划与软装设计", "全品类统一风格配套", "设计+生产+物流+安装", "1 对 1 项目经理全程统筹"] }
    ];
    const flowSteps = [
      { title: "需求沟通", time: "第 1–2 天", desc: "专属顾问上门或线上沟通，了解空间尺寸、风格偏好与功能需求，提供初步选型与预算建议" },
      { title: "方案设计", time: "第 3–7 天", desc: "设计师出具空间规划方案、家具配置清单与 3D 效果图，支持多轮修改直至客户满意" },
      { title: "物料确认", time: "第 8–10 天", desc: "提供皮料样张、木材色板、面料小样等实物样品，客户现场或远程确认所有材质与颜色" },
      { title: "打样验收", time: "第 11–20 天", desc: "关键单品实物打样供客户确认，验证坐感、细节与整体效果，确保与设计方案零误差" },
      { title: "精益生产", time: "第 21–45 天", desc: "工厂按确认样进入批量生产，专人跟单并每周发送进度照片。每件产品经历三道品控检验" },
      { title: "交付安装", time: "第 46–50 天", desc: "专业物流团队送货入户，安装技师现场组装调试，清理所有包装垃圾并配合客户逐件验收" }
    ];
    const materials = [
      { cls: "m-leather", name: "意大利进口牛皮", desc: "精选意大利 Gruppo Mastrotto 头层牛皮，粒面细腻、透气性佳。经 48 小时鞣制与 32 道后处理工序，色牢度达 4 级以上。" },
      { cls: "m-wood", name: "北美黑胡桃木", desc: "FSC 认证可持续森林采购，含水率严格控制在 8%–10%。纹理自然流畅，色泽沉稳大气，随时间推移愈发温润。" },
      { cls: "m-marble", name: "天然大理石", desc: "意大利卡拉拉矿区直采，每块石板的纹理皆为自然造化。表面经纳米防污处理，日常使用不渗色、不泛黄。" },
      { cls: "m-fabric", name: "高端定制面料", desc: "合作 Loro Piana、Dedar 等顶级内饰面料品牌。提供阻燃、防水、防污等功能性选项，满足酒店工程与家庭不同场景。" }
    ];
    const customCases = [
      { tag: "全案定制", name: "广州珠江新城大平层", location: "广东广州", scale: "350 ㎡", year: "2024", desc: "现代轻奢风格全屋定制方案，涵盖客厅、餐厅、主卧、衣帽间、书房、儿童房共 42 件定制家具。主沙发尺寸与面料均由业主定制选择。", cls: "cc-1" },
      { tag: "尺寸定制", name: "北京四合院改造", location: "北京东城", scale: "280 ㎡", year: "2024", desc: "为传统四合院量身定制家具。因老建筑墙体不平直，每件大家具均现场测量后单独出图。定制 3.6 米超长实木茶几完美适配庭院中心位置。", cls: "cc-2" },
      { tag: "材质定制", name: "三亚海棠湾度假别墅", location: "海南三亚", scale: "500 ㎡", year: "2023", desc: "全屋家具采用户外级耐候材料——6063 铝合金框架防锈抗腐，Sunbrella 面料防褪色防霉变。经 1,000 小时盐雾测试仍完好如新。", cls: "cc-3" },
      { tag: "颜色定制", name: "上海安福路画廊空间", location: "上海", scale: "600 ㎡", year: "2024", desc: "画廊家具配色需与每期展览主题呼应。所有沙发、座椅采用可更换面套设计，配合潘通色卡对色。首批定制 6 组颜色方案，后续可单独增购面套。", cls: "cc-4" }
    ];
    const form = reactive({ name: "", phone: "", email: "", type: "", message: "" });
    const submitting = ref(false);
    function handleSubmit() {
      submitting.value = true;
      setTimeout(() => {
        alert("感谢您的定制需求！专属设计顾问将在 24 小时内与您联系。");
        Object.assign(form, { name: "", phone: "", email: "", type: "", message: "" });
        submitting.value = false;
      }, 1200);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[21] || (_cache[21] = createBaseVNode("section", { class: "page-banner" }, [
          createBaseVNode("div", { class: "banner-inner" }, [
            createBaseVNode("p", { class: "banner-eyebrow" }, "Custom Service"),
            createBaseVNode("h1", null, "专属定制"),
            createBaseVNode("p", { class: "banner-sub" }, "从尺寸到材质，从单品到全案——我们按你的想象来造")
          ])
        ], -1)),
        createBaseVNode("section", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _cache[5] || (_cache[5] = createBaseVNode("p", { class: "section-eyebrow center" }, "What We Offer", -1)),
            _cache[6] || (_cache[6] = createBaseVNode("h2", { class: "section-title center" }, "四大定制维度", -1)),
            _cache[7] || (_cache[7] = createBaseVNode("div", { class: "divider center-d" }, null, -1)),
            createBaseVNode("div", _hoisted_4, [
              (openBlock(), createElementBlock(Fragment, null, renderList(customTypes, (c) => {
                return createBaseVNode("div", {
                  class: "custom-card",
                  key: c.title
                }, [
                  createBaseVNode("span", _hoisted_5, toDisplayString(c.icon), 1),
                  createBaseVNode("h3", null, toDisplayString(c.title), 1),
                  createBaseVNode("p", _hoisted_6, toDisplayString(c.subtitle), 1),
                  createBaseVNode("ul", _hoisted_7, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(c.points, (pt) => {
                      return openBlock(), createElementBlock("li", { key: pt }, toDisplayString(pt), 1);
                    }), 128))
                  ])
                ]);
              }), 64))
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            _cache[8] || (_cache[8] = createBaseVNode("p", { class: "section-eyebrow center" }, "How It Works", -1)),
            _cache[9] || (_cache[9] = createBaseVNode("h2", { class: "section-title center" }, "定制服务流程", -1)),
            _cache[10] || (_cache[10] = createBaseVNode("div", { class: "divider center-d" }, null, -1)),
            _cache[11] || (_cache[11] = createBaseVNode("p", { class: "section-sub center" }, "从沟通到交付，专属团队全链路一对一跟进", -1)),
            createBaseVNode("div", _hoisted_10, [
              (openBlock(), createElementBlock(Fragment, null, renderList(flowSteps, (f, i) => {
                return createBaseVNode("div", {
                  class: "flow-item",
                  key: f.title
                }, [
                  createBaseVNode("div", _hoisted_11, toDisplayString(String(i + 1).padStart(2, "0")), 1),
                  i < flowSteps.length - 1 ? (openBlock(), createElementBlock("div", _hoisted_12)) : createCommentVNode("", true),
                  createBaseVNode("h4", null, toDisplayString(f.title), 1),
                  createBaseVNode("p", _hoisted_13, toDisplayString(f.time), 1),
                  createBaseVNode("p", _hoisted_14, toDisplayString(f.desc), 1)
                ]);
              }), 64))
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_15, [
          createBaseVNode("div", _hoisted_16, [
            _cache[12] || (_cache[12] = createBaseVNode("p", { class: "section-eyebrow center" }, "Materials", -1)),
            _cache[13] || (_cache[13] = createBaseVNode("h2", { class: "section-title center" }, "材质与工艺", -1)),
            _cache[14] || (_cache[14] = createBaseVNode("div", { class: "divider center-d" }, null, -1)),
            _cache[15] || (_cache[15] = createBaseVNode("p", { class: "section-sub center" }, "精选全球优质原材料，每一环节严格品控", -1)),
            createBaseVNode("div", _hoisted_17, [
              (openBlock(), createElementBlock(Fragment, null, renderList(materials, (m) => {
                return createBaseVNode("div", {
                  class: "material-card",
                  key: m.name
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(["material-img", m.cls])
                  }, null, 2),
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("h4", null, toDisplayString(m.name), 1),
                    createBaseVNode("p", null, toDisplayString(m.desc), 1)
                  ])
                ]);
              }), 64))
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_19, [
          createBaseVNode("div", _hoisted_20, [
            _cache[16] || (_cache[16] = createBaseVNode("p", { class: "section-eyebrow center" }, "Custom Cases", -1)),
            _cache[17] || (_cache[17] = createBaseVNode("h2", { class: "section-title center" }, "定制案例精选", -1)),
            _cache[18] || (_cache[18] = createBaseVNode("div", { class: "divider center-d" }, null, -1)),
            createBaseVNode("div", _hoisted_21, [
              (openBlock(), createElementBlock(Fragment, null, renderList(customCases, (c) => {
                return createBaseVNode("div", {
                  class: "case-item",
                  key: c.name
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(["case-img", c.cls])
                  }, [
                    createBaseVNode("span", _hoisted_22, toDisplayString(c.tag), 1)
                  ], 2),
                  createBaseVNode("div", _hoisted_23, [
                    createBaseVNode("h3", null, toDisplayString(c.name), 1),
                    createBaseVNode("p", _hoisted_24, toDisplayString(c.location) + " · " + toDisplayString(c.scale) + " · " + toDisplayString(c.year), 1),
                    createBaseVNode("p", _hoisted_25, toDisplayString(c.desc), 1)
                  ])
                ]);
              }), 64))
            ])
          ])
        ]),
        createBaseVNode("section", _hoisted_26, [
          createBaseVNode("div", _hoisted_27, [
            createBaseVNode("div", _hoisted_28, [
              _cache[20] || (_cache[20] = createStaticVNode('<div class="cta-form-text" data-v-b2b5594f><p class="section-eyebrow" data-v-b2b5594f>Start Your Project</p><h2 data-v-b2b5594f>开启专属定制</h2><div class="divider" data-v-b2b5594f></div><p class="cta-body" data-v-b2b5594f>告诉我们您的需求，设计顾问将在 24 小时内与您联系。从概念到落地——全流程一对一专属服务。</p><div class="cta-benefits" data-v-b2b5594f><div class="bf-item" data-v-b2b5594f><span class="bf-num" data-v-b2b5594f>01</span><span data-v-b2b5594f>免费上门量尺</span></div><div class="bf-item" data-v-b2b5594f><span class="bf-num" data-v-b2b5594f>02</span><span data-v-b2b5594f>免费 3D 方案</span></div><div class="bf-item" data-v-b2b5594f><span class="bf-num" data-v-b2b5594f>03</span><span data-v-b2b5594f>免费实物打样</span></div><div class="bf-item" data-v-b2b5594f><span class="bf-num" data-v-b2b5594f>04</span><span data-v-b2b5594f>5 年质保服务</span></div></div></div>', 1)),
              createBaseVNode("div", _hoisted_29, [
                createBaseVNode("form", {
                  onSubmit: withModifiers(handleSubmit, ["prevent"])
                }, [
                  createBaseVNode("div", _hoisted_30, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.name = $event),
                      placeholder: "您的称呼 *",
                      required: "",
                      class: "fm-input"
                    }, null, 512), [
                      [vModelText, form.name]
                    ]),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.phone = $event),
                      placeholder: "联系电话 *",
                      required: "",
                      class: "fm-input"
                    }, null, 512), [
                      [vModelText, form.phone]
                    ])
                  ]),
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.email = $event),
                    placeholder: "电子邮箱",
                    class: "fm-input fm-full"
                  }, null, 512), [
                    [vModelText, form.email]
                  ]),
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.type = $event),
                    class: "fm-input fm-full"
                  }, [..._cache[19] || (_cache[19] = [
                    createBaseVNode("option", { value: "" }, "定制类型", -1),
                    createBaseVNode("option", null, "尺寸定制", -1),
                    createBaseVNode("option", null, "材质定制", -1),
                    createBaseVNode("option", null, "颜色定制", -1),
                    createBaseVNode("option", null, "全案定制", -1)
                  ])], 512), [
                    [vModelSelect, form.type]
                  ]),
                  withDirectives(createBaseVNode("textarea", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.message = $event),
                    placeholder: "请描述您的需求（空间类型、风格偏好、预算范围等）",
                    rows: "5",
                    class: "fm-input fm-full"
                  }, null, 512), [
                    [vModelText, form.message]
                  ]),
                  createBaseVNode("button", _hoisted_31, toDisplayString(submitting.value ? "提交中..." : "提交需求"), 1)
                ], 32)
              ])
            ])
          ])
        ])
      ]);
    };
  }
};
const Custom = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b2b5594f"]]);
export {
  Custom as default
};
