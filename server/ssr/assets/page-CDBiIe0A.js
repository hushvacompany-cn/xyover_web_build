import { a as require_react, s as __toESM, t as require_jsx_runtime } from "../index.js";
import { useI18n } from "./i18n-6dYpwIyI.js";
//#region app/contact/InquiryForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function InquiryForm() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const { copy } = useI18n();
	const t = copy.contact;
	function handleSubmit(event) {
		event.preventDefault();
		setSubmitted(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "inquiry-form",
		onSubmit: handleSubmit,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "form-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "name",
					required: true,
					placeholder: t.namePlaceholder
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.email }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "email",
					type: "email",
					required: true,
					placeholder: "name@company.com"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "form-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.company }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "company",
					placeholder: t.companyPlaceholder
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.interested }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					name: "product",
					required: true,
					defaultValue: "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						disabled: true,
						children: t.choose
					}), t.productOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: option }, option))]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "form-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.quantity }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "quantity",
					placeholder: t.quantityPlaceholder
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.market }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "market",
					placeholder: t.marketPlaceholder
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.details }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				name: "details",
				required: true,
				rows: 6,
				placeholder: t.detailsPlaceholder
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "form-submit",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.formNote }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					className: "button button-dark",
					children: [
						t.submit,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })
					]
				})]
			}),
			submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "form-success",
				role: "status",
				"aria-live": "polite",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t.successTitle }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.successText })]
			})
		]
	});
}
//#endregion
//#region app/contact/page.tsx
function ContactPage() {
	const { copy } = useI18n();
	const t = copy.contact;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "page-hero shell contact-hero",
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
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "contact-layout shell",
		id: "inquiry",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "contact-aside",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow light",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						" ",
						t.contact
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					"XYOVER",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Scent Studio"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contact-detail",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.companyLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy.common.company })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contact-detail",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.locationLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy.common.location })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contact-detail placeholder-detail",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.detailLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.detailPlaceholder })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "contact-note",
					children: t.note
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "form-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "form-kicker",
					children: t.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.formTitle }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, {})
			]
		})]
	})] });
}
//#endregion
export { ContactPage as default };
