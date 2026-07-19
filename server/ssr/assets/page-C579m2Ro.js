import { t as require_jsx_runtime } from "../index.js";
import { useI18n } from "./i18n-6dYpwIyI.js";
//#region app/page.tsx
var import_jsx_runtime = require_jsx_runtime();
var productMeta = [
	{
		number: "01",
		image: "/images/products/xyover-scented-candle.jpg",
		accent: "sage"
	},
	{
		number: "02",
		image: "/images/products/xyover-fragrance-balm.jpg",
		accent: "clay"
	},
	{
		number: "03",
		image: "/images/products/xyover-car-diffuser.jpg",
		accent: "forest"
	},
	{
		number: "04",
		image: "/images/products/xyover-home-diffuser.jpg",
		accent: "sand"
	},
	{
		number: "05",
		image: "/images/products/xyover-plaster-decor.jpg",
		accent: "sage"
	}
];
function Home() {
	const { copy } = useI18n();
	const t = copy.home;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-copy",
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
						t.heroA,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t.heroB })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-intro",
						children: t.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/products",
							className: "button button-dark",
							children: [
								t.explore,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/oem",
							className: "text-link",
							children: [
								t.learnOem,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-proof",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "05" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.proof1 })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "OEM" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.proof2 })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "B2B" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.proof3 })] })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-visual",
				"aria-label": t.visualLabel,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-orbit orbit-one" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-orbit orbit-two" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-image hero-image-main",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/products/xyover-scented-candle.jpg",
							alt: t.candleAlt
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-image hero-image-small",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/products/xyover-plaster-decor.jpg",
							alt: t.stoneAlt
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hero-caption",
						children: [
							"SCENT",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"OBJECTS",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"FOR LIFE"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hero-stamp",
						children: "XYOVER · 2026"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "marquee",
			"aria-label": t.collections,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: [
				t.marquee1,
				t.marquee2,
				t.marquee3,
				t.marquee4,
				t.marquee1,
				t.marquee2
			].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: " ✦ " })] }, `${item}-${index}`)) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section shell",
			id: "collections",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						" ",
						t.collections
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					t.collectionTitleA,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t.collectionTitleB })
				] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.collectionIntro })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "product-grid",
				children: t.products.map((item, index) => {
					const meta = productMeta[index];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/products",
						className: `product-card ${meta.accent}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "product-media",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: meta.image,
									alt: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: meta.number })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "product-info",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.label }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "↗"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "product-description",
								children: item.description
							})
						]
					}, meta.number);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "oem-teaser shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "oem-art",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "oem-label",
						children: "MAKE IT YOURS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "oem-disc disc-one",
						children: "S"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "oem-disc disc-two",
						children: "X"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "oem-disc disc-three",
						children: "01"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "oem-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow light",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							" ",
							t.oemEyebrow
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						t.oemTitleA,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t.oemTitleB })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.oemIntro }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: t.process.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", index + 1] }),
						" ",
						item
					] }, item)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/oem",
						className: "button button-light",
						children: [
							t.oemButton,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "contact-band shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						" ",
						t.contactEyebrow
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t.contactTitle }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/contact#inquiry",
					className: "circle-link",
					"aria-label": t.contactAria,
					children: "↗"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.contactText })
			]
		})
	] });
}
//#endregion
export { Home as default };
