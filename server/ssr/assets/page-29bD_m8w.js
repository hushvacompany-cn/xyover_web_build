import { t as require_jsx_runtime } from "../index.js";
import { useI18n } from "./i18n-6dYpwIyI.js";
//#region app/oem/page.tsx
var import_jsx_runtime = require_jsx_runtime();
function OemPage() {
	const { copy } = useI18n();
	const t = copy.oem;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "page-hero shell oem-page-hero",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						" ",
						t.eyebrow
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
					t.titleA,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t.titleB })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.intro })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "capability-section shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-heading compact",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						" ",
						t.layers
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					t.builtA,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t.builtB })
				] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.layersText })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "capability-grid",
				children: t.capabilities.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", index + 1] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.label }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text })
				] }, item.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "process-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "process-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow light",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							" ",
							t.stages
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						t.pathA,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						t.pathB
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "process-list",
					children: t.steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", index + 1] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.title })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.text })
					] }, step.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "brief-section shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "brief-art",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "XY" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"SCENT",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"MADE",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"YOURS"
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "brief-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							" ",
							t.prepare
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.essentials }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.briefIntro }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: t.briefItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/contact#inquiry",
						className: "button button-dark",
						children: [
							t.start,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })
						]
					})
				]
			})]
		})
	] });
}
//#endregion
export { OemPage as default };
