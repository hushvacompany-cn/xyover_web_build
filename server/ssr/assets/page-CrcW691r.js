import { t as require_jsx_runtime } from "../index.js";
import { useI18n } from "./i18n-6dYpwIyI.js";
//#region app/products/page.tsx
var import_jsx_runtime = require_jsx_runtime();
var meta = [
	{
		index: "01",
		images: ["/images/products/xyover-scented-candle.jpg"],
		tone: "sage"
	},
	{
		index: "02",
		images: ["/images/products/xyover-fragrance-balm.jpg"],
		tone: "clay"
	},
	{
		index: "03",
		images: ["/images/products/xyover-car-diffuser.jpg", "/images/products/xyover-car-vent-diffuser.jpg"],
		tone: "forest"
	},
	{
		index: "04",
		images: ["/images/products/xyover-home-diffuser.jpg"],
		tone: "sand"
	},
	{
		index: "05",
		images: ["/images/products/xyover-plaster-decor.jpg"],
		tone: "sage"
	}
];
function ProductsPage() {
	const { copy } = useI18n();
	const t = copy.products;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "page-hero shell",
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "catalog shell",
			"aria-label": t.catalogLabel,
			children: t.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `catalog-item ${meta[index].tone}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `catalog-media${meta[index].images.length > 1 ? " media-pair" : ""}`,
					children: [meta[index].images.map((image, imageIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image,
						alt: imageIndex === 0 ? item.title : `${item.title} — 2`
					}, image)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: meta[index].index })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "catalog-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "catalog-zh",
							children: item.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: item.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.description }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "option-list",
							children: item.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: option }, option))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `/contact?product=${encodeURIComponent(item.title)}#inquiry`,
							className: "text-link",
							children: [
								t.ask,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })
							]
						})
					]
				})]
			}, meta[index].index))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "choice-panel shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow light",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
					" ",
					t.recommend
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
				t.unsureA,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				t.unsureB
			] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.recommendText }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "/contact#inquiry",
				className: "button button-light",
				children: [
					t.submit,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })
				]
			})] })]
		})
	] });
}
//#endregion
export { ProductsPage as default };
