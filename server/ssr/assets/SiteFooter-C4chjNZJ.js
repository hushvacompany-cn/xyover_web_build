import { t as require_jsx_runtime } from "../index.js";
import { useI18n } from "./i18n-6dYpwIyI.js";
//#region app/components/SiteFooter.tsx
var import_jsx_runtime = require_jsx_runtime();
function SiteFooter() {
	const { copy } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "site-footer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "/",
				className: "footer-brand",
				"aria-label": `Xyover ${copy.common.home}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/brand/xyover-mark.png",
					alt: ""
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Xyover" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Awaken the Senses · Heal Your Life" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-links",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/products",
						children: copy.common.products
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/oem",
						children: copy.common.oem
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/contact",
						children: copy.common.contact
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "footer-note",
				children: [
					copy.common.company,
					" · ",
					copy.common.location
				]
			})
		]
	});
}
//#endregion
export { SiteFooter as default };
