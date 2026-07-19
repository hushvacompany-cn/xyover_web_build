import { a as require_react, r as usePathname, s as __toESM, t as require_jsx_runtime } from "../index.js";
import { languages, useI18n } from "./i18n-6dYpwIyI.js";
//#region app/components/SiteHeader.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function SiteHeader() {
	const pathname = usePathname();
	const [open, setOpen] = (0, import_react.useState)(false);
	const { locale, setLocale, copy } = useI18n();
	const navItems = [
		{
			href: "/",
			label: copy.common.home
		},
		{
			href: "/products",
			label: copy.common.products
		},
		{
			href: "/oem",
			label: copy.common.oem
		},
		{
			href: "/contact",
			label: copy.common.contact
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "site-header",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "/",
				className: "brand",
				"aria-label": `XYOVER ${copy.common.home}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "brand-logo",
					src: "/brand/xyover-mark.png",
					alt: ""
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Xyover" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "AWAKEN THE SENSES" })] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "menu-button",
				type: "button",
				"aria-label": open ? copy.common.closeMenu : copy.common.openMenu,
				"aria-expanded": open,
				onClick: () => setOpen((value) => !value),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: open ? "nav-links is-open" : "nav-links",
				"aria-label": copy.common.navigation,
				children: [
					navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: pathname === item.href ? "active" : "",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })
					}, item.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "language-switcher",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: copy.common.language
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "language-icon",
								"aria-hidden": "true",
								children: "🌐"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: locale,
								onChange: (event) => setLocale(event.target.value),
								"aria-label": copy.common.language,
								children: languages.map(([code, name]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: code,
									children: name
								}, code))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/contact#inquiry",
						className: "nav-cta",
						onClick: () => setOpen(false),
						children: [
							copy.common.inquiry,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "↗"
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { SiteHeader as default };
