import { a as require_react, o as __commonJSMin, s as __toESM, t as require_jsx_runtime } from "../index.js";
//#region node_modules/.pnpm/i18next@26.3.6_typescript@5.9.3/node_modules/i18next/dist/esm/i18next.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var isString$1 = (obj) => typeof obj === "string";
var defer = () => {
	let res;
	let rej;
	const promise = new Promise((resolve, reject) => {
		res = resolve;
		rej = reject;
	});
	promise.resolve = res;
	promise.reject = rej;
	return promise;
};
var makeString = (object) => {
	if (object == null) return "";
	return String(object);
};
var copy = (a, s, t) => {
	a.forEach((m) => {
		if (s[m]) t[m] = s[m];
	});
};
var lastOfPathSeparatorRegExp = /###/g;
var cleanKey = (key) => key && key.includes("###") ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
var canNotTraverseDeeper = (object) => !object || isString$1(object);
var getLastOfPath = (object, path, Empty) => {
	const stack = !isString$1(path) ? path : path.split(".");
	let stackIndex = 0;
	while (stackIndex < stack.length - 1) {
		if (canNotTraverseDeeper(object)) return {};
		const key = cleanKey(stack[stackIndex]);
		if (!object[key] && Empty) object[key] = new Empty();
		if (Object.prototype.hasOwnProperty.call(object, key)) object = object[key];
		else object = {};
		++stackIndex;
	}
	if (canNotTraverseDeeper(object)) return {};
	return {
		obj: object,
		k: cleanKey(stack[stackIndex])
	};
};
var setPath = (object, path, newValue) => {
	const { obj, k } = getLastOfPath(object, path, Object);
	if (obj !== void 0 || path.length === 1) {
		obj[k] = newValue;
		return;
	}
	let e = path[path.length - 1];
	let p = path.slice(0, path.length - 1);
	let last = getLastOfPath(object, p, Object);
	while (last.obj === void 0 && p.length) {
		e = `${p[p.length - 1]}.${e}`;
		p = p.slice(0, p.length - 1);
		last = getLastOfPath(object, p, Object);
		if (last?.obj && typeof last.obj[`${last.k}.${e}`] !== "undefined") last.obj = void 0;
	}
	last.obj[`${last.k}.${e}`] = newValue;
};
var pushPath = (object, path, newValue, concat) => {
	const { obj, k } = getLastOfPath(object, path, Object);
	obj[k] = obj[k] || [];
	obj[k].push(newValue);
};
var getPath = (object, path) => {
	const { obj, k } = getLastOfPath(object, path);
	if (!obj) return void 0;
	if (!Object.prototype.hasOwnProperty.call(obj, k)) return void 0;
	return obj[k];
};
var getPathWithDefaults = (data, defaultData, key) => {
	const value = getPath(data, key);
	if (value !== void 0) return value;
	return getPath(defaultData, key);
};
var deepExtend = (target, source, overwrite) => {
	for (const prop in source) if (prop !== "__proto__" && prop !== "constructor") if (Object.prototype.hasOwnProperty.call(target, prop)) if (isString$1(target[prop]) || target[prop] instanceof String || isString$1(source[prop]) || source[prop] instanceof String) {
		if (overwrite) target[prop] = source[prop];
	} else deepExtend(target[prop], source[prop], overwrite);
	else target[prop] = source[prop];
	return target;
};
var regexEscape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _entityMap = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;",
	"/": "&#x2F;"
};
var escape = (data) => {
	if (isString$1(data)) return data.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
	return data;
};
var RegExpCache = class {
	constructor(capacity) {
		this.capacity = capacity;
		this.regExpMap = /* @__PURE__ */ new Map();
		this.regExpQueue = [];
	}
	getRegExp(pattern) {
		const regExpFromCache = this.regExpMap.get(pattern);
		if (regExpFromCache !== void 0) return regExpFromCache;
		const regExpNew = new RegExp(pattern);
		if (this.regExpQueue.length === this.capacity) this.regExpMap.delete(this.regExpQueue.shift());
		this.regExpMap.set(pattern, regExpNew);
		this.regExpQueue.push(pattern);
		return regExpNew;
	}
};
var chars = [
	" ",
	",",
	"?",
	"!",
	";"
];
var looksLikeObjectPathRegExpCache = new RegExpCache(20);
var looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
	nsSeparator = nsSeparator || "";
	keySeparator = keySeparator || "";
	const possibleChars = chars.filter((c) => !nsSeparator.includes(c) && !keySeparator.includes(c));
	if (possibleChars.length === 0) return true;
	const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c) => c === "?" ? "\\?" : c).join("|")})`);
	let matched = !r.test(key);
	if (!matched) {
		const ki = key.indexOf(keySeparator);
		if (ki > 0 && !r.test(key.substring(0, ki))) matched = true;
	}
	return matched;
};
var deepFind = (obj, path, keySeparator = ".") => {
	if (!obj) return void 0;
	if (obj[path]) {
		if (!Object.prototype.hasOwnProperty.call(obj, path)) return void 0;
		return obj[path];
	}
	const tokens = path.split(keySeparator);
	let current = obj;
	for (let i = 0; i < tokens.length;) {
		if (!current || typeof current !== "object") return;
		let next;
		let nextPath = "";
		for (let j = i; j < tokens.length; ++j) {
			if (j !== i) nextPath += keySeparator;
			nextPath += tokens[j];
			next = current[nextPath];
			if (next !== void 0) {
				if ([
					"string",
					"number",
					"boolean"
				].includes(typeof next) && j < tokens.length - 1) continue;
				i += j - i + 1;
				break;
			}
		}
		current = next;
	}
	return current;
};
var getCleanedCode = (code) => code?.replace(/_/g, "-");
var consoleLogger = {
	type: "logger",
	log(args) {
		this.output("log", args);
	},
	warn(args) {
		this.output("warn", args);
	},
	error(args) {
		this.output("error", args);
	},
	output(type, args) {
		console?.[type]?.apply?.(console, args);
	}
};
var baseLogger = new class Logger {
	constructor(concreteLogger, options = {}) {
		this.init(concreteLogger, options);
	}
	init(concreteLogger, options = {}) {
		this.prefix = options.prefix || "i18next:";
		this.logger = concreteLogger || consoleLogger;
		this.options = options;
		this.debug = options.debug;
	}
	log(...args) {
		return this.forward(args, "log", "", true);
	}
	warn(...args) {
		return this.forward(args, "warn", "", true);
	}
	error(...args) {
		return this.forward(args, "error", "");
	}
	deprecate(...args) {
		return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
	}
	forward(args, lvl, prefix, debugOnly) {
		if (debugOnly && !this.debug) return null;
		args = args.map((a) => isString$1(a) ? a.replace(/[\r\n\x00-\x1F\x7F]/g, " ") : a);
		if (isString$1(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
		return this.logger[lvl](args);
	}
	create(moduleName) {
		return new Logger(this.logger, {
			prefix: `${this.prefix}:${moduleName}:`,
			...this.options
		});
	}
	clone(options) {
		options = options || this.options;
		options.prefix = options.prefix || this.prefix;
		return new Logger(this.logger, options);
	}
}();
var EventEmitter = class {
	constructor() {
		this.observers = {};
	}
	on(events, listener) {
		events.split(" ").forEach((event) => {
			if (!this.observers[event]) this.observers[event] = /* @__PURE__ */ new Map();
			const numListeners = this.observers[event].get(listener) || 0;
			this.observers[event].set(listener, numListeners + 1);
		});
		return this;
	}
	off(event, listener) {
		if (!this.observers[event]) return;
		if (!listener) {
			delete this.observers[event];
			return;
		}
		this.observers[event].delete(listener);
	}
	once(event, listener) {
		const wrapper = (...args) => {
			listener(...args);
			this.off(event, wrapper);
		};
		this.on(event, wrapper);
		return this;
	}
	emit(event, ...args) {
		if (this.observers[event]) Array.from(this.observers[event].entries()).forEach(([observer, numTimesAdded]) => {
			for (let i = 0; i < numTimesAdded; i++) observer(...args);
		});
		if (this.observers["*"]) Array.from(this.observers["*"].entries()).forEach(([observer, numTimesAdded]) => {
			for (let i = 0; i < numTimesAdded; i++) observer(event, ...args);
		});
	}
};
var ResourceStore = class extends EventEmitter {
	constructor(data, options = {
		ns: ["translation"],
		defaultNS: "translation"
	}) {
		super();
		this.data = data || {};
		this.options = options;
		if (this.options.keySeparator === void 0) this.options.keySeparator = ".";
		if (this.options.ignoreJSONStructure === void 0) this.options.ignoreJSONStructure = true;
	}
	addNamespaces(ns) {
		if (!this.options.ns.includes(ns)) this.options.ns.push(ns);
	}
	removeNamespaces(ns) {
		const index = this.options.ns.indexOf(ns);
		if (index > -1) this.options.ns.splice(index, 1);
	}
	getResource(lng, ns, key, options = {}) {
		const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
		const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
		let path;
		if (lng.includes(".")) path = lng.split(".");
		else {
			path = [lng, ns];
			if (key) if (Array.isArray(key)) path.push(...key);
			else if (isString$1(key) && keySeparator) path.push(...key.split(keySeparator));
			else path.push(key);
		}
		const result = getPath(this.data, path);
		if (!result && !ns && !key && lng.includes(".")) {
			lng = path[0];
			ns = path[1];
			key = path.slice(2).join(".");
		}
		if (result || !ignoreJSONStructure || !isString$1(key)) return result;
		return deepFind(this.data?.[lng]?.[ns], key, keySeparator);
	}
	addResource(lng, ns, key, value, options = { silent: false }) {
		const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
		let path = [lng, ns];
		if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
		if (lng.includes(".")) {
			path = lng.split(".");
			value = ns;
			ns = path[1];
		}
		this.addNamespaces(ns);
		setPath(this.data, path, value);
		if (!options.silent) this.emit("added", lng, ns, key, value);
	}
	addResources(lng, ns, resources, options = { silent: false }) {
		for (const m in resources) if (isString$1(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], { silent: true });
		if (!options.silent) this.emit("added", lng, ns, resources);
	}
	addResourceBundle(lng, ns, resources, deep, overwrite, options = {
		silent: false,
		skipCopy: false
	}) {
		let path = [lng, ns];
		if (lng.includes(".")) {
			path = lng.split(".");
			deep = resources;
			resources = ns;
			ns = path[1];
		}
		this.addNamespaces(ns);
		let pack = getPath(this.data, path) || {};
		if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
		if (deep) deepExtend(pack, resources, overwrite);
		else pack = {
			...pack,
			...resources
		};
		setPath(this.data, path, pack);
		if (!options.silent) this.emit("added", lng, ns, resources);
	}
	removeResourceBundle(lng, ns) {
		if (this.hasResourceBundle(lng, ns)) delete this.data[lng][ns];
		this.removeNamespaces(ns);
		this.emit("removed", lng, ns);
	}
	hasResourceBundle(lng, ns) {
		return this.getResource(lng, ns) !== void 0;
	}
	getResourceBundle(lng, ns) {
		if (!ns) ns = this.options.defaultNS;
		return this.getResource(lng, ns);
	}
	getDataByLanguage(lng) {
		return this.data[lng];
	}
	hasLanguageSomeTranslations(lng) {
		const data = this.getDataByLanguage(lng);
		return !!(data && Object.keys(data) || []).find((v) => data[v] && Object.keys(data[v]).length > 0);
	}
	toJSON() {
		return this.data;
	}
};
var postProcessor = {
	processors: {},
	addPostProcessor(module) {
		this.processors[module.name] = module;
	},
	handle(processors, value, key, options, translator) {
		processors.forEach((processor) => {
			value = this.processors[processor]?.process(value, key, options, translator) ?? value;
		});
		return value;
	}
};
var PATH_KEY = Symbol("i18next/PATH_KEY");
function createProxy() {
	const state = [];
	const handler = Object.create(null);
	let proxy;
	handler.get = (target, key) => {
		proxy?.revoke?.();
		if (key === PATH_KEY) return state;
		state.push(key);
		proxy = Proxy.revocable(target, handler);
		return proxy.proxy;
	};
	return Proxy.revocable(Object.create(null), handler).proxy;
}
function keysFromSelector(selector, opts) {
	const { [PATH_KEY]: path } = selector(createProxy());
	const keySeparator = opts?.keySeparator ?? ".";
	const nsSeparator = opts?.nsSeparator ?? ":";
	const strict = opts?.enableSelector === "strict";
	if (path.length > 1 && nsSeparator) {
		const ns = opts?.ns;
		const nsList = strict ? Array.isArray(ns) ? ns : ns ? [ns] : null : Array.isArray(ns) ? ns : null;
		if (nsList) {
			if ((strict ? nsList : nsList.length > 1 ? nsList.slice(1) : []).includes(path[0])) return `${path[0]}${nsSeparator}${path.slice(1).join(keySeparator)}`;
		}
	}
	return path.join(keySeparator);
}
var shouldHandleAsObject = (res) => !isString$1(res) && typeof res !== "boolean" && typeof res !== "number";
var Translator = class Translator extends EventEmitter {
	constructor(services, options = {}) {
		super();
		copy([
			"resourceStore",
			"languageUtils",
			"pluralResolver",
			"interpolator",
			"backendConnector",
			"i18nFormat",
			"utils"
		], services, this);
		this.options = options;
		if (this.options.keySeparator === void 0) this.options.keySeparator = ".";
		this.logger = baseLogger.create("translator");
		this.checkedLoadedFor = {};
	}
	changeLanguage(lng) {
		if (lng) this.language = lng;
	}
	exists(key, o = { interpolation: {} }) {
		const opt = { ...o };
		if (key == null) return false;
		const resolved = this.resolve(key, opt);
		if (resolved?.res === void 0) return false;
		const isObject = shouldHandleAsObject(resolved.res);
		if (opt.returnObjects === false && isObject) return false;
		return true;
	}
	extractFromKey(key, opt) {
		let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
		if (nsSeparator === void 0) nsSeparator = ":";
		const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
		let namespaces = opt.ns || this.options.defaultNS || [];
		const wouldCheckForNsInKey = nsSeparator && key.includes(nsSeparator);
		const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !opt.keySeparator && !this.options.userDefinedNsSeparator && !opt.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
		if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
			const m = key.match(this.interpolator.nestingRegexp);
			if (m && m.length > 0) return {
				key,
				namespaces: isString$1(namespaces) ? [namespaces] : namespaces
			};
			const parts = key.split(nsSeparator);
			if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.includes(parts[0])) namespaces = parts.shift();
			key = parts.join(keySeparator);
		}
		return {
			key,
			namespaces: isString$1(namespaces) ? [namespaces] : namespaces
		};
	}
	translate(keys, o, lastKey) {
		let opt = typeof o === "object" ? { ...o } : o;
		if (typeof opt !== "object" && this.options.overloadTranslationOptionHandler) opt = this.options.overloadTranslationOptionHandler(arguments);
		if (typeof opt === "object") opt = { ...opt };
		if (!opt) opt = {};
		if (keys == null) return "";
		if (typeof keys === "function") keys = keysFromSelector(keys, {
			...this.options,
			...opt
		});
		if (!Array.isArray(keys)) keys = [String(keys)];
		keys = keys.map((k) => typeof k === "function" ? keysFromSelector(k, {
			...this.options,
			...opt
		}) : String(k));
		const returnDetails = opt.returnDetails !== void 0 ? opt.returnDetails : this.options.returnDetails;
		const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
		const { key, namespaces } = this.extractFromKey(keys[keys.length - 1], opt);
		const namespace = namespaces[namespaces.length - 1];
		let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
		if (nsSeparator === void 0) nsSeparator = ":";
		const lng = opt.lng || this.language;
		const appendNamespaceToCIMode = opt.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
		if (lng?.toLowerCase() === "cimode") {
			if (appendNamespaceToCIMode) {
				if (returnDetails) return {
					res: `${namespace}${nsSeparator}${key}`,
					usedKey: key,
					exactUsedKey: key,
					usedLng: lng,
					usedNS: namespace,
					usedParams: this.getUsedParamsDetails(opt)
				};
				return `${namespace}${nsSeparator}${key}`;
			}
			if (returnDetails) return {
				res: key,
				usedKey: key,
				exactUsedKey: key,
				usedLng: lng,
				usedNS: namespace,
				usedParams: this.getUsedParamsDetails(opt)
			};
			return key;
		}
		const resolved = this.resolve(keys, opt);
		let res = resolved?.res;
		const resUsedKey = resolved?.usedKey || key;
		const resExactUsedKey = resolved?.exactUsedKey || key;
		const noObject = [
			"[object Number]",
			"[object Function]",
			"[object RegExp]"
		];
		const joinArrays = opt.joinArrays !== void 0 ? opt.joinArrays : this.options.joinArrays;
		const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
		const needsPluralHandling = opt.count !== void 0 && !isString$1(opt.count);
		const hasDefaultValue = Translator.hasDefaultValue(opt);
		const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, opt) : "";
		const defaultValueSuffixOrdinalFallback = opt.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, { ordinal: false }) : "";
		const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
		const defaultValue = needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] || opt[`defaultValue${defaultValueSuffix}`] || opt[`defaultValue${defaultValueSuffixOrdinalFallback}`] || opt.defaultValue;
		let resForObjHndl = res;
		if (handleAsObjectInI18nFormat && !res && hasDefaultValue) resForObjHndl = defaultValue;
		const handleAsObject = shouldHandleAsObject(resForObjHndl);
		const resType = Object.prototype.toString.apply(resForObjHndl);
		if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && !noObject.includes(resType) && !(isString$1(joinArrays) && Array.isArray(resForObjHndl))) {
			if (!opt.returnObjects && !this.options.returnObjects) {
				if (!this.options.returnedObjectHandler) this.logger.warn("accessing an object - but returnObjects options is not enabled!");
				const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
					...opt,
					ns: namespaces
				}) : `key '${key} (${this.language})' returned an object instead of string.`;
				if (returnDetails) {
					resolved.res = r;
					resolved.usedParams = this.getUsedParamsDetails(opt);
					return resolved;
				}
				return r;
			}
			if (keySeparator) {
				const resTypeIsArray = Array.isArray(resForObjHndl);
				const copy = resTypeIsArray ? [] : {};
				const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
				for (const m in resForObjHndl) if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
					const deepKey = `${newKeyToUse}${keySeparator}${m}`;
					if (hasDefaultValue && !res) copy[m] = this.translate(deepKey, {
						...opt,
						defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m] : void 0,
						joinArrays: false,
						ns: namespaces
					});
					else copy[m] = this.translate(deepKey, {
						...opt,
						joinArrays: false,
						ns: namespaces
					});
					if (copy[m] === deepKey) copy[m] = resForObjHndl[m];
				}
				res = copy;
			}
		} else if (handleAsObjectInI18nFormat && isString$1(joinArrays) && Array.isArray(res)) {
			res = res.join(joinArrays);
			if (res) res = this.extendTranslation(res, keys, opt, lastKey);
		} else {
			let usedDefault = false;
			let usedKey = false;
			if (!this.isValidLookup(res) && hasDefaultValue) {
				usedDefault = true;
				res = defaultValue;
			}
			if (!this.isValidLookup(res)) {
				usedKey = true;
				res = key;
			}
			const resForMissing = (opt.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && usedKey ? void 0 : res;
			const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
			if (usedKey || usedDefault || updateMissing) {
				this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, needsPluralHandling && !updateMissing ? `${key}${this.pluralResolver.getSuffix(lng, opt.count, opt)}` : key, updateMissing ? defaultValue : res);
				if (keySeparator) {
					const fk = this.resolve(key, {
						...opt,
						keySeparator: false
					});
					if (fk && fk.res) this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
				}
				let lngs = [];
				const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, opt.lng || this.language);
				if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) for (let i = 0; i < fallbackLngs.length; i++) lngs.push(fallbackLngs[i]);
				else if (this.options.saveMissingTo === "all") lngs = this.languageUtils.toResolveHierarchy(opt.lng || this.language);
				else lngs.push(opt.lng || this.language);
				const send = (l, k, specificDefaultValue) => {
					const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
					if (this.options.missingKeyHandler) this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, opt);
					else if (this.backendConnector?.saveMissing) this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, opt);
					this.emit("missingKey", l, namespace, k, res);
				};
				if (this.options.saveMissing) if (this.options.saveMissingPlurals && needsPluralHandling) lngs.forEach((language) => {
					const suffixes = this.pluralResolver.getSuffixes(language, opt);
					if (needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] && !suffixes.includes(`${this.options.pluralSeparator}zero`)) suffixes.push(`${this.options.pluralSeparator}zero`);
					suffixes.forEach((suffix) => {
						send([language], key + suffix, opt[`defaultValue${suffix}`] || defaultValue);
					});
				});
				else send(lngs, key, defaultValue);
			}
			res = this.extendTranslation(res, keys, opt, resolved, lastKey);
			if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = `${namespace}${nsSeparator}${key}`;
			if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}${nsSeparator}${key}` : key, usedDefault ? res : void 0, opt);
		}
		if (returnDetails) {
			resolved.res = res;
			resolved.usedParams = this.getUsedParamsDetails(opt);
			return resolved;
		}
		return res;
	}
	extendTranslation(res, key, opt, resolved, lastKey) {
		if (this.i18nFormat?.parse) res = this.i18nFormat.parse(res, {
			...this.options.interpolation.defaultVariables,
			...opt
		}, opt.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, { resolved });
		else if (!opt.skipInterpolation) {
			if (opt.interpolation) this.interpolator.init({
				...opt,
				interpolation: {
					...this.options.interpolation,
					...opt.interpolation
				}
			});
			const skipOnVariables = isString$1(res) && (opt?.interpolation?.skipOnVariables !== void 0 ? opt.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
			let nestBef;
			if (skipOnVariables) {
				const nb = res.match(this.interpolator.nestingRegexp);
				nestBef = nb && nb.length;
			}
			let data = opt.replace && !isString$1(opt.replace) ? opt.replace : opt;
			if (this.options.interpolation.defaultVariables) data = {
				...this.options.interpolation.defaultVariables,
				...data
			};
			res = this.interpolator.interpolate(res, data, opt.lng || this.language || resolved.usedLng, opt);
			if (skipOnVariables) {
				const na = res.match(this.interpolator.nestingRegexp);
				const nestAft = na && na.length;
				if (nestBef < nestAft) opt.nest = false;
			}
			if (!opt.lng && resolved && resolved.res) opt.lng = this.language || resolved.usedLng;
			if (opt.nest !== false) res = this.interpolator.nest(res, (...args) => {
				if (lastKey?.[0] === args[0] && !opt.context) {
					this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
					return null;
				}
				return this.translate(...args, key);
			}, opt);
			if (opt.interpolation) this.interpolator.reset();
		}
		const postProcess = opt.postProcess || this.options.postProcess;
		const postProcessorNames = isString$1(postProcess) ? [postProcess] : postProcess;
		if (res != null && postProcessorNames?.length && opt.applyPostProcessor !== false) res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
			i18nResolved: {
				...resolved,
				usedParams: this.getUsedParamsDetails(opt)
			},
			...opt
		} : opt, this);
		return res;
	}
	resolve(keys, opt = {}) {
		let found;
		let usedKey;
		let exactUsedKey;
		let usedLng;
		let usedNS;
		if (isString$1(keys)) keys = [keys];
		if (Array.isArray(keys)) keys = keys.map((k) => typeof k === "function" ? keysFromSelector(k, {
			...this.options,
			...opt
		}) : k);
		keys.forEach((k) => {
			if (this.isValidLookup(found)) return;
			const extracted = this.extractFromKey(k, opt);
			const key = extracted.key;
			usedKey = key;
			let namespaces = extracted.namespaces;
			if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
			const needsPluralHandling = opt.count !== void 0 && !isString$1(opt.count);
			const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
			const needsContextHandling = opt.context !== void 0 && (isString$1(opt.context) || typeof opt.context === "number") && opt.context !== "";
			const codes = opt.lngs ? opt.lngs : this.languageUtils.toResolveHierarchy(opt.lng || this.language, opt.fallbackLng);
			namespaces.forEach((ns) => {
				if (this.isValidLookup(found)) return;
				usedNS = ns;
				if (!this.checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
					this.checkedLoadedFor[`${codes[0]}-${ns}`] = true;
					this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
				}
				codes.forEach((code) => {
					if (this.isValidLookup(found)) return;
					usedLng = code;
					const finalKeys = [key];
					if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, opt);
					else {
						let pluralSuffix;
						if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, opt.count, opt);
						const zeroSuffix = `${this.options.pluralSeparator}zero`;
						const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
						if (needsPluralHandling) {
							if (opt.ordinal && pluralSuffix.startsWith(ordinalPrefix)) finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
							finalKeys.push(key + pluralSuffix);
							if (needsZeroSuffixLookup) finalKeys.push(key + zeroSuffix);
						}
						if (needsContextHandling) {
							const contextKey = `${key}${this.options.contextSeparator || "_"}${opt.context}`;
							finalKeys.push(contextKey);
							if (needsPluralHandling) {
								if (opt.ordinal && pluralSuffix.startsWith(ordinalPrefix)) finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
								finalKeys.push(contextKey + pluralSuffix);
								if (needsZeroSuffixLookup) finalKeys.push(contextKey + zeroSuffix);
							}
						}
					}
					let possibleKey;
					while (possibleKey = finalKeys.pop()) if (!this.isValidLookup(found)) {
						exactUsedKey = possibleKey;
						found = this.getResource(code, ns, possibleKey, opt);
					}
				});
			});
		});
		return {
			res: found,
			usedKey,
			exactUsedKey,
			usedLng,
			usedNS
		};
	}
	isValidLookup(res) {
		return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
	}
	getResource(code, ns, key, options = {}) {
		if (this.i18nFormat?.getResource) return this.i18nFormat.getResource(code, ns, key, options);
		return this.resourceStore.getResource(code, ns, key, options);
	}
	getUsedParamsDetails(options = {}) {
		const optionsKeys = [
			"defaultValue",
			"ordinal",
			"context",
			"replace",
			"lng",
			"lngs",
			"fallbackLng",
			"ns",
			"keySeparator",
			"nsSeparator",
			"returnObjects",
			"returnDetails",
			"joinArrays",
			"postProcess",
			"interpolation"
		];
		const useOptionsReplaceForData = options.replace && !isString$1(options.replace);
		let data = useOptionsReplaceForData ? options.replace : options;
		if (useOptionsReplaceForData && typeof options.count !== "undefined") data = {
			...data,
			count: options.count
		};
		if (this.options.interpolation.defaultVariables) data = {
			...this.options.interpolation.defaultVariables,
			...data
		};
		if (!useOptionsReplaceForData) {
			data = { ...data };
			for (const key of optionsKeys) delete data[key];
		}
		return data;
	}
	static hasDefaultValue(options) {
		const prefix = "defaultValue";
		for (const option in options) if (Object.prototype.hasOwnProperty.call(options, option) && option.startsWith(prefix) && void 0 !== options[option]) return true;
		return false;
	}
};
var LanguageUtil = class {
	constructor(options) {
		this.options = options;
		this.supportedLngs = this.options.supportedLngs || false;
		this.logger = baseLogger.create("languageUtils");
	}
	getScriptPartFromCode(code) {
		code = getCleanedCode(code);
		if (!code || !code.includes("-")) return null;
		const p = code.split("-");
		if (p.length === 2) return null;
		p.pop();
		if (p[p.length - 1].toLowerCase() === "x") return null;
		return this.formatLanguageCode(p.join("-"));
	}
	getLanguagePartFromCode(code) {
		code = getCleanedCode(code);
		if (!code || !code.includes("-")) return code;
		const p = code.split("-");
		return this.formatLanguageCode(p[0]);
	}
	formatLanguageCode(code) {
		if (isString$1(code) && code.includes("-")) {
			let formattedCode;
			try {
				formattedCode = Intl.getCanonicalLocales(code)[0];
			} catch (e) {}
			if (formattedCode && this.options.lowerCaseLng) formattedCode = formattedCode.toLowerCase();
			if (formattedCode) return formattedCode;
			if (this.options.lowerCaseLng) return code.toLowerCase();
			return code;
		}
		return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
	}
	isSupportedCode(code) {
		if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) code = this.getLanguagePartFromCode(code);
		return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.includes(code);
	}
	getBestMatchFromCodes(codes) {
		if (!codes) return null;
		let found;
		codes.forEach((code) => {
			if (found) return;
			const cleanedLng = this.formatLanguageCode(code);
			if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
		});
		if (!found && this.options.supportedLngs) codes.forEach((code) => {
			if (found) return;
			const lngScOnly = this.getScriptPartFromCode(code);
			if (this.isSupportedCode(lngScOnly)) return found = lngScOnly;
			const lngOnly = this.getLanguagePartFromCode(code);
			if (this.isSupportedCode(lngOnly)) return found = lngOnly;
			found = this.options.supportedLngs.find((supportedLng) => {
				if (supportedLng === lngOnly) return true;
				if (!supportedLng.includes("-") && !lngOnly.includes("-")) return false;
				if (supportedLng.includes("-") && !lngOnly.includes("-") && supportedLng.slice(0, supportedLng.indexOf("-")) === lngOnly) return true;
				if (supportedLng.startsWith(lngOnly) && lngOnly.length > 1) return true;
				return false;
			});
		});
		if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
		return found;
	}
	getFallbackCodes(fallbacks, code) {
		if (!fallbacks) return [];
		if (typeof fallbacks === "function") fallbacks = fallbacks(code);
		if (isString$1(fallbacks)) fallbacks = [fallbacks];
		if (Array.isArray(fallbacks)) return fallbacks;
		if (!code) return fallbacks.default || [];
		let found = fallbacks[code];
		if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
		if (!found) found = fallbacks[this.formatLanguageCode(code)];
		if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
		if (!found) found = fallbacks.default;
		return found || [];
	}
	toResolveHierarchy(code, fallbackCode) {
		const fallbackCodes = this.getFallbackCodes((fallbackCode === false ? [] : fallbackCode) || this.options.fallbackLng || [], code);
		const codes = [];
		const addCode = (c) => {
			if (!c) return;
			if (this.isSupportedCode(c)) codes.push(c);
			else this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
		};
		if (isString$1(code) && (code.includes("-") || code.includes("_"))) {
			if (this.options.load !== "languageOnly") addCode(this.formatLanguageCode(code));
			if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") addCode(this.getScriptPartFromCode(code));
			if (this.options.load !== "currentOnly") addCode(this.getLanguagePartFromCode(code));
		} else if (isString$1(code)) addCode(this.formatLanguageCode(code));
		fallbackCodes.forEach((fc) => {
			if (!codes.includes(fc)) addCode(this.formatLanguageCode(fc));
		});
		return codes;
	}
};
var suffixesOrder = {
	zero: 0,
	one: 1,
	two: 2,
	few: 3,
	many: 4,
	other: 5
};
var dummyRule = {
	select: (count) => count === 1 ? "one" : "other",
	resolvedOptions: () => ({ pluralCategories: ["one", "other"] })
};
var PluralResolver = class {
	constructor(languageUtils, options = {}) {
		this.languageUtils = languageUtils;
		this.options = options;
		this.logger = baseLogger.create("pluralResolver");
		this.pluralRulesCache = {};
	}
	clearCache() {
		this.pluralRulesCache = {};
	}
	getRule(code, options = {}) {
		const cleanedCode = getCleanedCode(code === "dev" ? "en" : code);
		const type = options.ordinal ? "ordinal" : "cardinal";
		const cacheKey = JSON.stringify({
			cleanedCode,
			type
		});
		if (cacheKey in this.pluralRulesCache) return this.pluralRulesCache[cacheKey];
		let rule;
		try {
			rule = new Intl.PluralRules(cleanedCode, { type });
		} catch (err) {
			if (typeof Intl === "undefined") {
				this.logger.error("No Intl support, please use an Intl polyfill!");
				return dummyRule;
			}
			if (!code.match(/-|_/)) return dummyRule;
			const lngPart = this.languageUtils.getLanguagePartFromCode(code);
			rule = this.getRule(lngPart, options);
		}
		this.pluralRulesCache[cacheKey] = rule;
		return rule;
	}
	needsPlural(code, options = {}) {
		let rule = this.getRule(code, options);
		if (!rule) rule = this.getRule("dev", options);
		return rule?.resolvedOptions().pluralCategories.length > 1;
	}
	getPluralFormsOfKey(code, key, options = {}) {
		return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
	}
	getSuffixes(code, options = {}) {
		let rule = this.getRule(code, options);
		if (!rule) rule = this.getRule("dev", options);
		if (!rule) return [];
		return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
	}
	getSuffix(code, count, options = {}) {
		const rule = this.getRule(code, options);
		if (rule) return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
		this.logger.warn(`no plural rule found for: ${code}`);
		return this.getSuffix("dev", count, options);
	}
};
var deepFindWithDefaults = (data, defaultData, key, keySeparator = ".", ignoreJSONStructure = true) => {
	let path = getPathWithDefaults(data, defaultData, key);
	if (!path && ignoreJSONStructure && isString$1(key)) {
		path = deepFind(data, key, keySeparator);
		if (path === void 0) path = deepFind(defaultData, key, keySeparator);
	}
	return path;
};
var regexSafe = (val) => val.replace(/\$/g, "$$$$");
var Interpolator = class {
	constructor(options = {}) {
		this.logger = baseLogger.create("interpolator");
		this.options = options;
		this.format = options?.interpolation?.format || ((value) => value);
		this.init(options);
	}
	init(options = {}) {
		if (!options.interpolation) options.interpolation = { escapeValue: true };
		const { escape: escape$1, escapeValue, useRawValueToEscape, prefix, prefixEscaped, suffix, suffixEscaped, formatSeparator, unescapeSuffix, unescapePrefix, nestingPrefix, nestingPrefixEscaped, nestingSuffix, nestingSuffixEscaped, nestingOptionsSeparator, maxReplaces, alwaysFormat } = options.interpolation;
		this.escape = escape$1 !== void 0 ? escape$1 : escape;
		this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
		this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
		this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || "{{";
		this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || "}}";
		this.formatSeparator = formatSeparator || ",";
		this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix ? regexEscape(unescapePrefix) : "-";
		this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix ? regexEscape(unescapeSuffix) : "";
		this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
		this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
		this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
		this.maxReplaces = maxReplaces || 1e3;
		this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
		this.resetRegExp();
	}
	reset() {
		if (this.options) this.init(this.options);
	}
	resetRegExp() {
		const getOrResetRegExp = (existingRegExp, pattern) => {
			if (existingRegExp?.source === pattern) {
				existingRegExp.lastIndex = 0;
				return existingRegExp;
			}
			return new RegExp(pattern, "g");
		};
		this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
		this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
		this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
	}
	interpolate(str, data, lng, options) {
		let match;
		let value;
		let replaces;
		const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
		const handleFormat = (key) => {
			if (!key.includes(this.formatSeparator)) {
				const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
				return this.alwaysFormat ? this.format(path, void 0, lng, {
					...options,
					...data,
					interpolationkey: key
				}) : path;
			}
			const p = key.split(this.formatSeparator);
			const k = p.shift().trim();
			const f = p.join(this.formatSeparator).trim();
			return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
				...options,
				...data,
				interpolationkey: k
			});
		};
		this.resetRegExp();
		if (!this.escapeValue && typeof str === "string" && /\$t\([^)]*\{[^}]*\{\{/.test(str)) this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");
		const missingInterpolationHandler = options?.missingInterpolationHandler || this.options.missingInterpolationHandler;
		const skipOnVariables = options?.interpolation?.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
		[{
			regex: this.regexpUnescape,
			safeValue: (val) => val
		}, {
			regex: this.regexp,
			safeValue: (val) => this.escapeValue ? this.escape(val) : val
		}].forEach((todo) => {
			replaces = 0;
			while (match = todo.regex.exec(str)) {
				const matchedVar = match[1].trim();
				value = handleFormat(matchedVar);
				if (value === void 0) if (typeof missingInterpolationHandler === "function") {
					const temp = missingInterpolationHandler(str, match, options);
					value = isString$1(temp) ? temp : "";
				} else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) value = "";
				else if (skipOnVariables) {
					value = match[0];
					continue;
				} else {
					this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
					value = "";
				}
				else if (!isString$1(value) && !this.useRawValueToEscape) value = makeString(value);
				const safeValue = todo.safeValue(value);
				str = str.replace(match[0], regexSafe(safeValue));
				if (skipOnVariables) {
					todo.regex.lastIndex += safeValue.length;
					todo.regex.lastIndex -= match[0].length;
				} else todo.regex.lastIndex = 0;
				replaces++;
				if (replaces >= this.maxReplaces) break;
			}
		});
		return str;
	}
	nest(str, fc, options = {}) {
		let match;
		let value;
		let clonedOptions;
		const handleHasOptions = (key, inheritedOptions) => {
			const sep = this.nestingOptionsSeparator;
			if (!key.includes(sep)) return key;
			const c = key.split(new RegExp(`${regexEscape(sep)}[ ]*{`));
			let optionsString = `{${c[1]}`;
			key = c[0];
			optionsString = this.interpolate(optionsString, clonedOptions);
			const matchedSingleQuotes = optionsString.match(/'/g);
			const matchedDoubleQuotes = optionsString.match(/"/g);
			if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || (matchedDoubleQuotes?.length ?? 0) % 2 !== 0) optionsString = optionsString.replace(/'/g, "\"");
			try {
				clonedOptions = JSON.parse(optionsString);
				if (inheritedOptions) clonedOptions = {
					...inheritedOptions,
					...clonedOptions
				};
			} catch (e) {
				this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
				return `${key}${sep}${optionsString}`;
			}
			if (clonedOptions.defaultValue && clonedOptions.defaultValue.includes(this.prefix)) delete clonedOptions.defaultValue;
			return key;
		};
		while (match = this.nestingRegexp.exec(str)) {
			let formatters = [];
			clonedOptions = { ...options };
			clonedOptions = clonedOptions.replace && !isString$1(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
			clonedOptions.applyPostProcessor = false;
			delete clonedOptions.defaultValue;
			const keyEndIndex = /{.*}/s.test(match[1]) ? match[1].lastIndexOf("}") + 1 : match[1].indexOf(this.formatSeparator);
			if (keyEndIndex !== -1) {
				formatters = match[1].slice(keyEndIndex).split(this.formatSeparator).map((elem) => elem.trim()).filter(Boolean);
				match[1] = match[1].slice(0, keyEndIndex);
			}
			value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
			if (value && match[0] === str && !isString$1(value)) return value;
			if (!isString$1(value)) value = makeString(value);
			if (!value) {
				this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
				value = "";
			}
			if (formatters.length) value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
				...options,
				interpolationkey: match[1].trim()
			}), value.trim());
			str = str.replace(match[0], value);
			this.regexp.lastIndex = 0;
		}
		return str;
	}
};
var parseFormatStr = (formatStr) => {
	let formatName = formatStr.toLowerCase().trim();
	const formatOptions = {};
	if (formatStr.includes("(")) {
		const p = formatStr.split("(");
		formatName = p[0].toLowerCase().trim();
		const optStr = p[1].slice(0, -1);
		if (formatName === "currency" && !optStr.includes(":")) {
			if (!formatOptions.currency) formatOptions.currency = optStr.trim();
		} else if (formatName === "relativetime" && !optStr.includes(":")) {
			if (!formatOptions.range) formatOptions.range = optStr.trim();
		} else optStr.split(";").forEach((opt) => {
			if (opt) {
				const [key, ...rest] = opt.split(":");
				const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
				const trimmedKey = key.trim();
				if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
				if (val === "false") formatOptions[trimmedKey] = false;
				if (val === "true") formatOptions[trimmedKey] = true;
				if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
			}
		});
	}
	return {
		formatName,
		formatOptions
	};
};
var createCachedFormatter = (fn) => {
	const cache = {};
	return (v, l, o) => {
		let optForCache = o;
		if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) optForCache = {
			...optForCache,
			[o.interpolationkey]: void 0
		};
		const key = l + JSON.stringify(optForCache);
		let frm = cache[key];
		if (!frm) {
			frm = fn(getCleanedCode(l), o);
			cache[key] = frm;
		}
		return frm(v);
	};
};
var createNonCachedFormatter = (fn) => (v, l, o) => fn(getCleanedCode(l), o)(v);
var Formatter = class {
	constructor(options = {}) {
		this.logger = baseLogger.create("formatter");
		this.options = options;
		this.init(options);
	}
	init(services, options = { interpolation: {} }) {
		this.formatSeparator = options.interpolation.formatSeparator || ",";
		const cf = options.cacheInBuiltFormats ? createCachedFormatter : createNonCachedFormatter;
		this.formats = {
			number: cf((lng, opt) => {
				const formatter = new Intl.NumberFormat(lng, { ...opt });
				return (val) => formatter.format(val);
			}),
			currency: cf((lng, opt) => {
				const formatter = new Intl.NumberFormat(lng, {
					...opt,
					style: "currency"
				});
				return (val) => formatter.format(val);
			}),
			datetime: cf((lng, opt) => {
				const formatter = new Intl.DateTimeFormat(lng, { ...opt });
				return (val) => formatter.format(val);
			}),
			relativetime: cf((lng, opt) => {
				const formatter = new Intl.RelativeTimeFormat(lng, { ...opt });
				return (val) => formatter.format(val, opt.range || "day");
			}),
			list: cf((lng, opt) => {
				const formatter = new Intl.ListFormat(lng, { ...opt });
				return (val) => formatter.format(val);
			})
		};
	}
	add(name, fc) {
		this.formats[name.toLowerCase().trim()] = fc;
	}
	addCached(name, fc) {
		this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
	}
	format(value, format, lng, options = {}) {
		if (!format) return value;
		if (value == null) return value;
		const rawFormats = format.split(this.formatSeparator);
		const formats = [];
		for (let i = 0; i < rawFormats.length; i++) {
			let f = rawFormats[i];
			while (f.indexOf("(") > -1 && !f.includes(")") && i + 1 < rawFormats.length) f = `${f}${this.formatSeparator}${rawFormats[++i]}`;
			formats.push(f);
		}
		return formats.reduce((mem, f) => {
			const { formatName, formatOptions } = parseFormatStr(f);
			if (this.formats[formatName]) {
				let formatted = mem;
				try {
					const valOptions = options?.formatParams?.[options.interpolationkey] || {};
					const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
					formatted = this.formats[formatName](mem, l, {
						...formatOptions,
						...options,
						...valOptions
					});
				} catch (error) {
					this.logger.warn(error);
				}
				return formatted;
			} else this.logger.warn(`there was no format function for ${formatName}`);
			return mem;
		}, value);
	}
};
var removePending = (q, name) => {
	if (q.pending[name] !== void 0) {
		delete q.pending[name];
		q.pendingCount--;
	}
};
var Connector = class extends EventEmitter {
	constructor(backend, store, services, options = {}) {
		super();
		this.backend = backend;
		this.store = store;
		this.services = services;
		this.languageUtils = services.languageUtils;
		this.options = options;
		this.logger = baseLogger.create("backendConnector");
		this.waitingReads = [];
		this.maxParallelReads = options.maxParallelReads || 10;
		this.readingCalls = 0;
		this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
		this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
		this.state = {};
		this.queue = [];
		this.backend?.init?.(services, options.backend, options);
	}
	queueLoad(languages, namespaces, options, callback) {
		const toLoad = {};
		const pending = {};
		const toLoadLanguages = {};
		const toLoadNamespaces = {};
		languages.forEach((lng) => {
			let hasAllNamespaces = true;
			namespaces.forEach((ns) => {
				const name = `${lng}|${ns}`;
				if (!options.reload && this.store.hasResourceBundle(lng, ns)) this.state[name] = 2;
				else if (this.state[name] < 0);
				else if (this.state[name] === 1) {
					if (pending[name] === void 0) pending[name] = true;
				} else {
					this.state[name] = 1;
					hasAllNamespaces = false;
					if (pending[name] === void 0) pending[name] = true;
					if (toLoad[name] === void 0) toLoad[name] = true;
					if (toLoadNamespaces[ns] === void 0) toLoadNamespaces[ns] = true;
				}
			});
			if (!hasAllNamespaces) toLoadLanguages[lng] = true;
		});
		if (Object.keys(toLoad).length || Object.keys(pending).length) this.queue.push({
			pending,
			pendingCount: Object.keys(pending).length,
			loaded: {},
			errors: [],
			callback
		});
		return {
			toLoad: Object.keys(toLoad),
			pending: Object.keys(pending),
			toLoadLanguages: Object.keys(toLoadLanguages),
			toLoadNamespaces: Object.keys(toLoadNamespaces)
		};
	}
	loaded(name, err, data) {
		const s = name.split("|");
		const lng = s[0];
		const ns = s[1];
		if (err) this.emit("failedLoading", lng, ns, err);
		if (!err && data) this.store.addResourceBundle(lng, ns, data, void 0, void 0, { skipCopy: true });
		this.state[name] = err ? -1 : 2;
		if (err && data) this.state[name] = 0;
		const loaded = {};
		this.queue.forEach((q) => {
			pushPath(q.loaded, [lng], ns);
			removePending(q, name);
			if (err) q.errors.push(err);
			if (q.pendingCount === 0 && !q.done) {
				Object.keys(q.loaded).forEach((l) => {
					if (!loaded[l]) loaded[l] = {};
					const loadedKeys = q.loaded[l];
					if (loadedKeys.length) loadedKeys.forEach((n) => {
						if (loaded[l][n] === void 0) loaded[l][n] = true;
					});
				});
				q.done = true;
				if (q.errors.length) q.callback(q.errors);
				else q.callback();
			}
		});
		this.emit("loaded", loaded);
		this.queue = this.queue.filter((q) => !q.done);
	}
	read(lng, ns, fcName, tried = 0, wait = this.retryTimeout, callback) {
		if (!lng.length) return callback(null, {});
		if (this.readingCalls >= this.maxParallelReads) {
			this.waitingReads.push({
				lng,
				ns,
				fcName,
				tried,
				wait,
				callback
			});
			return;
		}
		this.readingCalls++;
		const resolver = (err, data) => {
			this.readingCalls--;
			if (this.waitingReads.length > 0) {
				const next = this.waitingReads.shift();
				this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
			}
			if (err && data && tried < this.maxRetries) {
				setTimeout(() => {
					this.read(lng, ns, fcName, tried + 1, wait * 2, callback);
				}, wait);
				return;
			}
			callback(err, data);
		};
		const fc = this.backend[fcName].bind(this.backend);
		if (fc.length === 2) {
			try {
				const r = fc(lng, ns);
				if (r && typeof r.then === "function") r.then((data) => resolver(null, data)).catch(resolver);
				else resolver(null, r);
			} catch (err) {
				resolver(err);
			}
			return;
		}
		return fc(lng, ns, resolver);
	}
	prepareLoading(languages, namespaces, options = {}, callback) {
		if (!this.backend) {
			this.logger.warn("No backend was added via i18next.use. Will not load resources.");
			return callback && callback();
		}
		if (isString$1(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
		if (isString$1(namespaces)) namespaces = [namespaces];
		const toLoad = this.queueLoad(languages, namespaces, options, callback);
		if (!toLoad.toLoad.length) {
			if (!toLoad.pending.length) callback();
			return null;
		}
		toLoad.toLoad.forEach((name) => {
			this.loadOne(name);
		});
	}
	load(languages, namespaces, callback) {
		this.prepareLoading(languages, namespaces, {}, callback);
	}
	reload(languages, namespaces, callback) {
		this.prepareLoading(languages, namespaces, { reload: true }, callback);
	}
	loadOne(name, prefix = "") {
		const s = name.split("|");
		const lng = s[0];
		const ns = s[1];
		this.read(lng, ns, "read", void 0, void 0, (err, data) => {
			if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
			if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
			this.loaded(name, err, data);
		});
	}
	saveMissing(languages, namespace, key, fallbackValue, isUpdate, options = {}, clb = () => {}) {
		if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
			this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
			return;
		}
		if (key === void 0 || key === null || key === "") return;
		if (this.backend?.create) {
			const opts = {
				...options,
				isUpdate
			};
			const fc = this.backend.create.bind(this.backend);
			if (fc.length < 6) try {
				let r;
				if (fc.length === 5) r = fc(languages, namespace, key, fallbackValue, opts);
				else r = fc(languages, namespace, key, fallbackValue);
				if (r && typeof r.then === "function") r.then((data) => clb(null, data)).catch(clb);
				else clb(null, r);
			} catch (err) {
				clb(err);
			}
			else fc(languages, namespace, key, fallbackValue, clb, opts);
		}
		if (!languages || !languages[0]) return;
		this.store.addResource(languages[0], namespace, key, fallbackValue);
	}
};
var get = () => ({
	debug: false,
	initAsync: true,
	ns: ["translation"],
	defaultNS: ["translation"],
	fallbackLng: ["dev"],
	fallbackNS: false,
	supportedLngs: false,
	nonExplicitSupportedLngs: false,
	load: "all",
	preload: false,
	keySeparator: ".",
	nsSeparator: ":",
	pluralSeparator: "_",
	contextSeparator: "_",
	enableSelector: false,
	partialBundledLanguages: false,
	saveMissing: false,
	updateMissing: false,
	saveMissingTo: "fallback",
	saveMissingPlurals: true,
	missingKeyHandler: false,
	missingInterpolationHandler: false,
	postProcess: false,
	postProcessPassResolved: false,
	returnNull: false,
	returnEmptyString: true,
	returnObjects: false,
	joinArrays: false,
	returnedObjectHandler: false,
	parseMissingKeyHandler: false,
	appendNamespaceToMissingKey: false,
	appendNamespaceToCIMode: false,
	overloadTranslationOptionHandler: (args) => {
		let ret = {};
		if (typeof args[1] === "object") ret = args[1];
		if (isString$1(args[1])) ret.defaultValue = args[1];
		if (isString$1(args[2])) ret.tDescription = args[2];
		if (typeof args[2] === "object" || typeof args[3] === "object") {
			const options = args[3] || args[2];
			Object.keys(options).forEach((key) => {
				ret[key] = options[key];
			});
		}
		return ret;
	},
	interpolation: {
		escapeValue: true,
		prefix: "{{",
		suffix: "}}",
		formatSeparator: ",",
		unescapePrefix: "-",
		nestingPrefix: "$t(",
		nestingSuffix: ")",
		nestingOptionsSeparator: ",",
		maxReplaces: 1e3,
		skipOnVariables: true
	},
	cacheInBuiltFormats: true
});
var transformOptions = (options) => {
	if (isString$1(options.ns)) options.ns = [options.ns];
	if (isString$1(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
	if (isString$1(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
	if (options.supportedLngs && !options.supportedLngs.includes("cimode")) options.supportedLngs = options.supportedLngs.concat(["cimode"]);
	return options;
};
var noop = () => {};
var bindMemberFunctions = (inst) => {
	Object.getOwnPropertyNames(Object.getPrototypeOf(inst)).forEach((mem) => {
		if (typeof inst[mem] === "function") inst[mem] = inst[mem].bind(inst);
	});
};
var instance = class I18n extends EventEmitter {
	constructor(options = {}, callback) {
		super();
		this.options = transformOptions(options);
		this.services = {};
		this.logger = baseLogger;
		this.modules = { external: [] };
		bindMemberFunctions(this);
		if (callback && !this.isInitialized && !options.isClone) {
			if (!this.options.initAsync) {
				this.init(options, callback);
				return this;
			}
			setTimeout(() => {
				this.init(options, callback);
			}, 0);
		}
	}
	init(options = {}, callback) {
		this.isInitializing = true;
		if (typeof options === "function") {
			callback = options;
			options = {};
		}
		if (options.defaultNS == null && options.ns) {
			if (isString$1(options.ns)) options.defaultNS = options.ns;
			else if (!options.ns.includes("translation")) options.defaultNS = options.ns[0];
		}
		const defOpts = get();
		this.options = {
			...defOpts,
			...this.options,
			...transformOptions(options)
		};
		this.options.interpolation = {
			...defOpts.interpolation,
			...this.options.interpolation
		};
		if (options.keySeparator !== void 0) this.options.userDefinedKeySeparator = options.keySeparator;
		if (options.nsSeparator !== void 0) this.options.userDefinedNsSeparator = options.nsSeparator;
		if (typeof this.options.overloadTranslationOptionHandler !== "function") this.options.overloadTranslationOptionHandler = defOpts.overloadTranslationOptionHandler;
		const createClassOnDemand = (ClassOrObject) => {
			if (!ClassOrObject) return null;
			if (typeof ClassOrObject === "function") return new ClassOrObject();
			return ClassOrObject;
		};
		if (!this.options.isClone) {
			if (this.modules.logger) baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
			else baseLogger.init(null, this.options);
			let formatter;
			if (this.modules.formatter) formatter = this.modules.formatter;
			else formatter = Formatter;
			const lu = new LanguageUtil(this.options);
			this.store = new ResourceStore(this.options.resources, this.options);
			const s = this.services;
			s.logger = baseLogger;
			s.resourceStore = this.store;
			s.languageUtils = lu;
			s.pluralResolver = new PluralResolver(lu, { prepend: this.options.pluralSeparator });
			if (formatter) {
				s.formatter = createClassOnDemand(formatter);
				if (s.formatter.init) s.formatter.init(s, this.options);
				this.options.interpolation.format = s.formatter.format.bind(s.formatter);
			}
			s.interpolator = new Interpolator(this.options);
			s.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) };
			s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
			s.backendConnector.on("*", (event, ...args) => {
				this.emit(event, ...args);
			});
			if (this.modules.languageDetector) {
				s.languageDetector = createClassOnDemand(this.modules.languageDetector);
				if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
			}
			if (this.modules.i18nFormat) {
				s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
				if (s.i18nFormat.init) s.i18nFormat.init(this);
			}
			this.translator = new Translator(this.services, this.options);
			this.translator.on("*", (event, ...args) => {
				this.emit(event, ...args);
			});
			this.modules.external.forEach((m) => {
				if (m.init) m.init(this);
			});
		}
		this.format = this.options.interpolation.format;
		if (!callback) callback = noop;
		if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
			const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
			if (codes.length > 0 && codes[0] !== "dev") this.options.lng = codes[0];
		}
		if (!this.services.languageDetector && !this.options.lng) this.logger.warn("init: no languageDetector is used and no lng is defined");
		[
			"getResource",
			"hasResourceBundle",
			"getResourceBundle",
			"getDataByLanguage"
		].forEach((fcName) => {
			this[fcName] = (...args) => this.store[fcName](...args);
		});
		[
			"addResource",
			"addResources",
			"addResourceBundle",
			"removeResourceBundle"
		].forEach((fcName) => {
			this[fcName] = (...args) => {
				this.store[fcName](...args);
				return this;
			};
		});
		const deferred = defer();
		const load = () => {
			const finish = (err, t) => {
				this.isInitializing = false;
				if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn("init: i18next is already initialized. You should call init just once!");
				this.isInitialized = true;
				if (!this.options.isClone) this.logger.log("initialized", this.options);
				this.emit("initialized", this.options);
				deferred.resolve(t);
				callback(err, t);
			};
			if ((this.languages || this.isLanguageChangingTo) && !this.isInitialized) return finish(null, this.t.bind(this));
			this.changeLanguage(this.options.lng, finish);
		};
		if (this.options.resources || !this.options.initAsync) load();
		else setTimeout(load, 0);
		return deferred;
	}
	loadResources(language, callback = noop) {
		let usedCallback = callback;
		const usedLng = isString$1(language) ? language : this.language;
		if (typeof language === "function") usedCallback = language;
		if (!this.options.resources || this.options.partialBundledLanguages) {
			if (usedLng?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
			const toLoad = [];
			const append = (lng) => {
				if (!lng) return;
				if (lng === "cimode") return;
				this.services.languageUtils.toResolveHierarchy(lng).forEach((l) => {
					if (l === "cimode") return;
					if (!toLoad.includes(l)) toLoad.push(l);
				});
			};
			if (!usedLng) this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => append(l));
			else append(usedLng);
			this.options.preload?.forEach?.((l) => append(l));
			this.services.backendConnector.load(toLoad, this.options.ns, (e) => {
				if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
				usedCallback(e);
			});
		} else usedCallback(null);
	}
	reloadResources(lngs, ns, callback) {
		const deferred = defer();
		if (typeof lngs === "function") {
			callback = lngs;
			lngs = void 0;
		}
		if (typeof ns === "function") {
			callback = ns;
			ns = void 0;
		}
		if (!lngs) lngs = this.languages;
		if (!ns) ns = this.options.ns;
		if (!callback) callback = noop;
		this.services.backendConnector.reload(lngs, ns, (err) => {
			deferred.resolve();
			callback(err);
		});
		return deferred;
	}
	use(module) {
		if (!module) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
		if (!module.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
		if (module.type === "backend") this.modules.backend = module;
		if (module.type === "logger" || module.log && module.warn && module.error) this.modules.logger = module;
		if (module.type === "languageDetector") this.modules.languageDetector = module;
		if (module.type === "i18nFormat") this.modules.i18nFormat = module;
		if (module.type === "postProcessor") postProcessor.addPostProcessor(module);
		if (module.type === "formatter") this.modules.formatter = module;
		if (module.type === "3rdParty") this.modules.external.push(module);
		return this;
	}
	setResolvedLanguage(l) {
		if (!l || !this.languages) return;
		if (["cimode", "dev"].includes(l)) return;
		for (let li = 0; li < this.languages.length; li++) {
			const lngInLngs = this.languages[li];
			if (["cimode", "dev"].includes(lngInLngs)) continue;
			if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
				this.resolvedLanguage = lngInLngs;
				break;
			}
		}
		if (!this.resolvedLanguage && !this.languages.includes(l) && this.store.hasLanguageSomeTranslations(l)) {
			this.resolvedLanguage = l;
			this.languages.unshift(l);
		}
	}
	changeLanguage(lng, callback) {
		this.isLanguageChangingTo = lng;
		const deferred = defer();
		this.emit("languageChanging", lng);
		const setLngProps = (l) => {
			this.language = l;
			this.languages = this.services.languageUtils.toResolveHierarchy(l);
			this.resolvedLanguage = void 0;
			this.setResolvedLanguage(l);
		};
		const done = (err, l) => {
			if (l) {
				if (this.isLanguageChangingTo === lng) {
					setLngProps(l);
					this.translator.changeLanguage(l);
					this.isLanguageChangingTo = void 0;
					this.emit("languageChanged", l);
					this.logger.log("languageChanged", l);
				}
			} else this.isLanguageChangingTo = void 0;
			deferred.resolve((...args) => this.t(...args));
			if (callback) callback(err, (...args) => this.t(...args));
		};
		const setLng = (lngs) => {
			if (!lng && !lngs && this.services.languageDetector) lngs = [];
			const fl = isString$1(lngs) ? lngs : lngs && lngs[0];
			const l = this.store.hasLanguageSomeTranslations(fl) ? fl : this.services.languageUtils.getBestMatchFromCodes(isString$1(lngs) ? [lngs] : lngs);
			if (l) {
				if (!this.language) setLngProps(l);
				if (!this.translator.language) this.translator.changeLanguage(l);
				this.services.languageDetector?.cacheUserLanguage?.(l);
			}
			this.loadResources(l, (err) => {
				done(err, l);
			});
		};
		if (!lng && this.services.languageDetector && !this.services.languageDetector.async) setLng(this.services.languageDetector.detect());
		else if (!lng && this.services.languageDetector && this.services.languageDetector.async) if (this.services.languageDetector.detect.length === 0) this.services.languageDetector.detect().then(setLng);
		else this.services.languageDetector.detect(setLng);
		else setLng(lng);
		return deferred;
	}
	getFixedT(lng, ns, keyPrefix, fixedOpts) {
		const scopeNs = fixedOpts?.scopeNs;
		const fixedT = (key, opts, ...rest) => {
			let o;
			if (typeof opts !== "object") o = this.options.overloadTranslationOptionHandler([key, opts].concat(rest));
			else o = { ...opts };
			o.lng = o.lng || fixedT.lng;
			o.lngs = o.lngs || fixedT.lngs;
			const explicitCallNs = o.ns !== void 0 && o.ns !== null;
			o.ns = o.ns || fixedT.ns;
			if (o.keyPrefix !== "") o.keyPrefix = o.keyPrefix || keyPrefix || fixedT.keyPrefix;
			const selectorOpts = {
				...this.options,
				...o
			};
			if (Array.isArray(scopeNs) && !explicitCallNs) selectorOpts.ns = scopeNs;
			if (typeof o.keyPrefix === "function") o.keyPrefix = keysFromSelector(o.keyPrefix, selectorOpts);
			const keySeparator = this.options.keySeparator || ".";
			let resultKey;
			if (o.keyPrefix && Array.isArray(key)) resultKey = key.map((k) => {
				if (typeof k === "function") k = keysFromSelector(k, selectorOpts);
				return `${o.keyPrefix}${keySeparator}${k}`;
			});
			else {
				if (typeof key === "function") key = keysFromSelector(key, selectorOpts);
				resultKey = o.keyPrefix ? `${o.keyPrefix}${keySeparator}${key}` : key;
			}
			return this.t(resultKey, o);
		};
		if (isString$1(lng)) fixedT.lng = lng;
		else fixedT.lngs = lng;
		fixedT.ns = ns;
		fixedT.keyPrefix = keyPrefix;
		return fixedT;
	}
	t(...args) {
		return this.translator?.translate(...args);
	}
	exists(...args) {
		return this.translator?.exists(...args);
	}
	setDefaultNamespace(ns) {
		this.options.defaultNS = ns;
	}
	hasLoadedNamespace(ns, options = {}) {
		if (!this.isInitialized) {
			this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
			return false;
		}
		if (!this.languages || !this.languages.length) {
			this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
			return false;
		}
		const lng = options.lng || this.resolvedLanguage || this.languages[0];
		const fallbackLng = this.options ? this.options.fallbackLng : false;
		const lastLng = this.languages[this.languages.length - 1];
		if (lng.toLowerCase() === "cimode") return true;
		const loadNotPending = (l, n) => {
			const loadState = this.services.backendConnector.state[`${l}|${n}`];
			return loadState === -1 || loadState === 0 || loadState === 2;
		};
		if (options.precheck) {
			const preResult = options.precheck(this, loadNotPending);
			if (preResult !== void 0) return preResult;
		}
		if (this.hasResourceBundle(lng, ns)) return true;
		if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
		if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
		return false;
	}
	loadNamespaces(ns, callback) {
		const deferred = defer();
		if (!this.options.ns) {
			if (callback) callback();
			return Promise.resolve();
		}
		if (isString$1(ns)) ns = [ns];
		ns.forEach((n) => {
			if (!this.options.ns.includes(n)) this.options.ns.push(n);
		});
		this.loadResources((err) => {
			deferred.resolve();
			if (callback) callback(err);
		});
		return deferred;
	}
	loadLanguages(lngs, callback) {
		const deferred = defer();
		if (isString$1(lngs)) lngs = [lngs];
		const preloaded = this.options.preload || [];
		const newLngs = lngs.filter((lng) => !preloaded.includes(lng) && this.services.languageUtils.isSupportedCode(lng));
		if (!newLngs.length) {
			if (callback) callback();
			return Promise.resolve();
		}
		this.options.preload = preloaded.concat(newLngs);
		this.loadResources((err) => {
			deferred.resolve();
			if (callback) callback(err);
		});
		return deferred;
	}
	dir(lng) {
		if (!lng) lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
		if (!lng) return "rtl";
		try {
			const l = new Intl.Locale(lng);
			if (l && l.getTextInfo) {
				const ti = l.getTextInfo();
				if (ti && ti.direction) return ti.direction;
			}
		} catch (e) {}
		const rtlLngs = [
			"ar",
			"shu",
			"sqr",
			"ssh",
			"xaa",
			"yhd",
			"yud",
			"aao",
			"abh",
			"abv",
			"acm",
			"acq",
			"acw",
			"acx",
			"acy",
			"adf",
			"ads",
			"aeb",
			"aec",
			"afb",
			"ajp",
			"apc",
			"apd",
			"arb",
			"arq",
			"ars",
			"ary",
			"arz",
			"auz",
			"avl",
			"ayh",
			"ayl",
			"ayn",
			"ayp",
			"bbz",
			"pga",
			"he",
			"iw",
			"ps",
			"pbt",
			"pbu",
			"pst",
			"prp",
			"prd",
			"ug",
			"ur",
			"ydd",
			"yds",
			"yih",
			"ji",
			"yi",
			"hbo",
			"men",
			"xmn",
			"fa",
			"jpr",
			"peo",
			"pes",
			"prs",
			"dv",
			"sam",
			"ckb"
		];
		const languageUtils = this.services?.languageUtils || new LanguageUtil(get());
		if (lng.toLowerCase().indexOf("-latn") > 1) return "ltr";
		return rtlLngs.includes(languageUtils.getLanguagePartFromCode(lng)) || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
	}
	static createInstance(options = {}, callback) {
		const instance = new I18n(options, callback);
		instance.createInstance = I18n.createInstance;
		return instance;
	}
	cloneInstance(options = {}, callback = noop) {
		const forkResourceStore = options.forkResourceStore;
		if (forkResourceStore) delete options.forkResourceStore;
		const mergedOptions = {
			...this.options,
			...options,
			isClone: true
		};
		const clone = new I18n(mergedOptions);
		if (options.debug !== void 0 || options.prefix !== void 0) clone.logger = clone.logger.clone(options);
		[
			"store",
			"services",
			"language"
		].forEach((m) => {
			clone[m] = this[m];
		});
		clone.services = { ...this.services };
		clone.services.utils = { hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone) };
		if (forkResourceStore) {
			clone.store = new ResourceStore(Object.keys(this.store.data).reduce((prev, l) => {
				prev[l] = { ...this.store.data[l] };
				prev[l] = Object.keys(prev[l]).reduce((acc, n) => {
					acc[n] = { ...prev[l][n] };
					return acc;
				}, prev[l]);
				return prev;
			}, {}), mergedOptions);
			clone.services.resourceStore = clone.store;
		}
		if (options.interpolation) {
			const mergedInterpolation = {
				...get().interpolation,
				...this.options.interpolation,
				...options.interpolation
			};
			const mergedForInterpolator = {
				...mergedOptions,
				interpolation: mergedInterpolation
			};
			clone.services.interpolator = new Interpolator(mergedForInterpolator);
		}
		clone.translator = new Translator(clone.services, mergedOptions);
		clone.translator.on("*", (event, ...args) => {
			clone.emit(event, ...args);
		});
		clone.init(mergedOptions, callback);
		clone.translator.options = mergedOptions;
		clone.translator.backendConnector.services.utils = { hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone) };
		return clone;
	}
	toJSON() {
		return {
			options: this.options,
			store: this.store,
			language: this.language,
			languages: this.languages,
			resolvedLanguage: this.resolvedLanguage
		};
	}
}.createInstance();
var createInstance = instance.createInstance;
instance.dir;
instance.init;
instance.loadResources;
instance.reloadResources;
instance.use;
instance.changeLanguage;
instance.getFixedT;
instance.t;
instance.exists;
instance.setDefaultNamespace;
instance.hasLoadedNamespace;
instance.loadNamespaces;
instance.loadLanguages;
//#endregion
//#region node_modules/.pnpm/react-i18next@17.0.10_i18next@26.3.6_typescript@5.9.3__react-dom@19.2.6_react@19.2.6__react@19.2.6_typescript@5.9.3/node_modules/react-i18next/dist/es/utils.js
var warn = (i18n, code, msg, rest) => {
	const args = [msg, {
		code,
		...rest || {}
	}];
	if (i18n?.services?.logger?.forward) return i18n.services.logger.forward(args, "warn", "react-i18next::", true);
	if (isString(args[0])) args[0] = `react-i18next:: ${args[0]}`;
	if (i18n?.services?.logger?.warn) i18n.services.logger.warn(...args);
	else if (console?.warn) console.warn(...args);
};
var alreadyWarned = {};
var warnOnce = (i18n, code, msg, rest) => {
	if (isString(msg) && alreadyWarned[msg]) return;
	if (isString(msg)) alreadyWarned[msg] = /* @__PURE__ */ new Date();
	warn(i18n, code, msg, rest);
};
var loadedClb = (i18n, cb) => () => {
	if (i18n.isInitialized) cb();
	else {
		const initialized = () => {
			setTimeout(() => {
				i18n.off("initialized", initialized);
			}, 0);
			cb();
		};
		i18n.on("initialized", initialized);
	}
};
var loadNamespaces = (i18n, ns, cb) => {
	i18n.loadNamespaces(ns, loadedClb(i18n, cb));
};
var loadLanguages = (i18n, lng, ns, cb) => {
	if (isString(ns)) ns = [ns];
	if (i18n.options.preload && i18n.options.preload.indexOf(lng) > -1) return loadNamespaces(i18n, ns, cb);
	ns.forEach((n) => {
		if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
	});
	i18n.loadLanguages(lng, loadedClb(i18n, cb));
};
var hasLoadedNamespace = (ns, i18n, options = {}) => {
	if (!i18n.languages || !i18n.languages.length) {
		warnOnce(i18n, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: i18n.languages });
		return true;
	}
	return i18n.hasLoadedNamespace(ns, {
		lng: options.lng,
		precheck: (i18nInstance, loadNotPending) => {
			if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
		}
	});
};
var isString = (obj) => typeof obj === "string";
var isObject = (obj) => typeof obj === "object" && obj !== null;
//#endregion
//#region node_modules/.pnpm/react-i18next@17.0.10_i18next@26.3.6_typescript@5.9.3__react-dom@19.2.6_react@19.2.6__react@19.2.6_typescript@5.9.3/node_modules/react-i18next/dist/es/unescape.js
var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
var htmlEntities = {
	"&amp;": "&",
	"&#38;": "&",
	"&lt;": "<",
	"&#60;": "<",
	"&gt;": ">",
	"&#62;": ">",
	"&apos;": "'",
	"&#39;": "'",
	"&quot;": "\"",
	"&#34;": "\"",
	"&nbsp;": " ",
	"&#160;": " ",
	"&copy;": "©",
	"&#169;": "©",
	"&reg;": "®",
	"&#174;": "®",
	"&hellip;": "…",
	"&#8230;": "…",
	"&#x2F;": "/",
	"&#47;": "/"
};
var unescapeHtmlEntity = (m) => htmlEntities[m];
var unescape = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);
//#endregion
//#region node_modules/.pnpm/react-i18next@17.0.10_i18next@26.3.6_typescript@5.9.3__react-dom@19.2.6_react@19.2.6__react@19.2.6_typescript@5.9.3/node_modules/react-i18next/dist/es/defaults.js
var defaultOptions = {
	bindI18n: "languageChanged",
	bindI18nStore: "",
	transEmptyNodeValue: "",
	transSupportBasicHtmlNodes: true,
	transWrapTextNodes: "",
	transKeepBasicHtmlNodesFor: [
		"br",
		"strong",
		"i",
		"p"
	],
	useSuspense: true,
	unescape,
	transDefaultProps: void 0
};
var setDefaults = (options = {}) => {
	defaultOptions = {
		...defaultOptions,
		...options
	};
};
var getDefaults = () => defaultOptions;
//#endregion
//#region node_modules/.pnpm/react-i18next@17.0.10_i18next@26.3.6_typescript@5.9.3__react-dom@19.2.6_react@19.2.6__react@19.2.6_typescript@5.9.3/node_modules/react-i18next/dist/es/i18nInstance.js
var i18nInstance;
var setI18n = (instance) => {
	i18nInstance = instance;
};
var getI18n = () => i18nInstance;
//#endregion
//#region node_modules/.pnpm/react-i18next@17.0.10_i18next@26.3.6_typescript@5.9.3__react-dom@19.2.6_react@19.2.6__react@19.2.6_typescript@5.9.3/node_modules/react-i18next/dist/es/initReactI18next.js
var initReactI18next = {
	type: "3rdParty",
	init(instance) {
		setDefaults(instance.options.react);
		setI18n(instance);
	}
};
//#endregion
//#region node_modules/.pnpm/react-i18next@17.0.10_i18next@26.3.6_typescript@5.9.3__react-dom@19.2.6_react@19.2.6__react@19.2.6_typescript@5.9.3/node_modules/react-i18next/dist/es/context.js
var I18nContext = (0, import_react.createContext)();
var ReportNamespaces = class {
	constructor() {
		this.usedNamespaces = {};
	}
	addUsedNamespaces(namespaces) {
		namespaces.forEach((ns) => {
			if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
		});
	}
	getUsedNamespaces() {
		return Object.keys(this.usedNamespaces);
	}
};
//#endregion
//#region node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.6/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
		var value = getSnapshot(), _useState = useState({ inst: {
			value,
			getSnapshot
		} }), inst = _useState[0].inst, forceUpdate = _useState[1];
		useLayoutEffect(function() {
			inst.value = value;
			inst.getSnapshot = getSnapshot;
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
		}, [
			subscribe,
			value,
			getSnapshot
		]);
		useEffect(function() {
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			return subscribe(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			});
		}, [subscribe]);
		useDebugValue(value);
		return value;
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
		return getSnapshot();
	}
	var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
	exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
}));
//#endregion
//#region node_modules/.pnpm/react-i18next@17.0.10_i18next@26.3.6_typescript@5.9.3__react-dom@19.2.6_react@19.2.6__react@19.2.6_typescript@5.9.3/node_modules/react-i18next/dist/es/useTranslation.js
var import_shim = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_shim_production();
})))();
var notReadyT = (k, optsOrDefaultValue) => {
	if (isString(optsOrDefaultValue)) return optsOrDefaultValue;
	if (isObject(optsOrDefaultValue) && isString(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
	if (typeof k === "function") return "";
	if (Array.isArray(k)) {
		const last = k[k.length - 1];
		return typeof last === "function" ? "" : last;
	}
	return k;
};
var notReadySnapshot = {
	t: notReadyT,
	ready: false
};
var dummySubscribe = () => () => {};
var useTranslation = (ns, props = {}) => {
	const { i18n: i18nFromProps } = props;
	const { i18n: i18nFromContext, defaultNS: defaultNSFromContext } = (0, import_react.useContext)(I18nContext) || {};
	const i18n = i18nFromProps || i18nFromContext || getI18n();
	if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
	if (!i18n) warnOnce(i18n, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next or by passing it via props or context. In monorepo setups, make sure there is only one instance of react-i18next.");
	const i18nOptions = (0, import_react.useMemo)(() => ({
		...getDefaults(),
		...i18n?.options?.react,
		...props
	}), [i18n, props]);
	const { useSuspense, keyPrefix } = i18nOptions;
	const nsOrContext = ns || defaultNSFromContext || i18n?.options?.defaultNS;
	const unstableNamespaces = isString(nsOrContext) ? [nsOrContext] : nsOrContext || ["translation"];
	const namespaces = (0, import_react.useMemo)(() => unstableNamespaces, unstableNamespaces);
	i18n?.reportNamespaces?.addUsedNamespaces?.(namespaces);
	const revisionRef = (0, import_react.useRef)(0);
	const subscribe = (0, import_react.useCallback)((callback) => {
		if (!i18n) return dummySubscribe;
		const { bindI18n, bindI18nStore } = i18nOptions;
		const wrappedCallback = () => {
			revisionRef.current += 1;
			callback();
		};
		if (bindI18n) i18n.on(bindI18n, wrappedCallback);
		if (bindI18nStore) i18n.store.on(bindI18nStore, wrappedCallback);
		return () => {
			if (bindI18n) bindI18n.split(" ").forEach((e) => i18n.off(e, wrappedCallback));
			if (bindI18nStore) bindI18nStore.split(" ").forEach((e) => i18n.store.off(e, wrappedCallback));
		};
	}, [i18n, i18nOptions]);
	const snapshotRef = (0, import_react.useRef)();
	const getSnapshot = (0, import_react.useCallback)(() => {
		if (!i18n) return notReadySnapshot;
		const calculatedReady = !!(i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n) => hasLoadedNamespace(n, i18n, i18nOptions));
		const currentLng = props.lng || i18n.language;
		const currentRevision = revisionRef.current;
		const lastSnapshot = snapshotRef.current;
		if (lastSnapshot && lastSnapshot.ready === calculatedReady && lastSnapshot.lng === currentLng && lastSnapshot.keyPrefix === keyPrefix && lastSnapshot.revision === currentRevision) return lastSnapshot;
		const newSnapshot = {
			t: i18n.getFixedT(currentLng, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix, { scopeNs: namespaces }),
			ready: calculatedReady,
			lng: currentLng,
			keyPrefix,
			revision: currentRevision
		};
		snapshotRef.current = newSnapshot;
		return newSnapshot;
	}, [
		i18n,
		namespaces,
		keyPrefix,
		i18nOptions,
		props.lng
	]);
	const [loadCount, setLoadCount] = (0, import_react.useState)(0);
	const { t, ready } = (0, import_shim.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
	(0, import_react.useEffect)(() => {
		if (i18n && !ready && !useSuspense) {
			const onLoaded = () => setLoadCount((c) => c + 1);
			if (props.lng) loadLanguages(i18n, props.lng, namespaces, onLoaded);
			else loadNamespaces(i18n, namespaces, onLoaded);
		}
	}, [
		i18n,
		props.lng,
		namespaces,
		ready,
		useSuspense,
		loadCount
	]);
	const finalI18n = i18n || {};
	const wrapperRef = (0, import_react.useRef)(null);
	const wrapperLangRef = (0, import_react.useRef)();
	const createI18nWrapper = (original) => {
		const descriptors = Object.getOwnPropertyDescriptors(original);
		if (descriptors.__original) delete descriptors.__original;
		const wrapper = Object.create(Object.getPrototypeOf(original), descriptors);
		if (!Object.prototype.hasOwnProperty.call(wrapper, "__original")) try {
			Object.defineProperty(wrapper, "__original", {
				value: original,
				writable: false,
				enumerable: false,
				configurable: false
			});
		} catch (_) {}
		return wrapper;
	};
	const ret = (0, import_react.useMemo)(() => {
		const original = finalI18n;
		const lang = original?.language;
		let i18nWrapper = original;
		if (original) if (wrapperRef.current && wrapperRef.current.__original === original) if (wrapperLangRef.current !== lang) {
			i18nWrapper = createI18nWrapper(original);
			wrapperRef.current = i18nWrapper;
			wrapperLangRef.current = lang;
		} else i18nWrapper = wrapperRef.current;
		else {
			i18nWrapper = createI18nWrapper(original);
			wrapperRef.current = i18nWrapper;
			wrapperLangRef.current = lang;
		}
		const effectiveT = !ready && !useSuspense ? (...args) => {
			warnOnce(i18n, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t.");
			return t(...args);
		} : t;
		const arr = [
			effectiveT,
			i18nWrapper,
			ready
		];
		arr.t = effectiveT;
		arr.i18n = i18nWrapper;
		arr.ready = ready;
		return arr;
	}, [
		t,
		finalI18n,
		ready,
		finalI18n.resolvedLanguage,
		finalI18n.language,
		finalI18n.languages
	]);
	if (i18n && useSuspense && !ready) {
		let inDevelopment = false;
		try {
			inDevelopment = false;
		} catch (e) {}
		if (inDevelopment) warnOnce(i18n, "SUSPENDED_WHILE_LOADING", "useTranslation: suspended while translations are loading (useSuspense is true by default). Add a <Suspense> boundary above this component, or set react.useSuspense: false in the i18next init options. https://react.i18next.com/latest/usetranslation-hook");
		throw new Promise((resolve) => {
			const onLoaded = () => resolve();
			if (props.lng) loadLanguages(i18n, props.lng, namespaces, onLoaded);
			else loadNamespaces(i18n, namespaces, onLoaded);
		});
	}
	return ret;
};
//#endregion
//#region node_modules/.pnpm/react-i18next@17.0.10_i18next@26.3.6_typescript@5.9.3__react-dom@19.2.6_react@19.2.6__react@19.2.6_typescript@5.9.3/node_modules/react-i18next/dist/es/I18nextProvider.js
function I18nextProvider({ i18n, defaultNS, children }) {
	const value = (0, import_react.useMemo)(() => ({
		i18n,
		defaultNS
	}), [i18n, defaultNS]);
	return (0, import_react.createElement)(I18nContext.Provider, { value }, children);
}
//#endregion
//#region app/i18n.tsx
var import_jsx_runtime = require_jsx_runtime();
var languages = [
	[
		"en",
		"English",
		"EN"
	],
	[
		"zh-CN",
		"简体中文",
		"简"
	],
	[
		"zh-TW",
		"繁體中文",
		"繁"
	],
	[
		"ja",
		"日本語",
		"日"
	],
	[
		"ko",
		"한국어",
		"한"
	],
	[
		"es",
		"Español",
		"ES"
	],
	[
		"fr",
		"Français",
		"FR"
	],
	[
		"de",
		"Deutsch",
		"DE"
	],
	[
		"pt",
		"Português",
		"PT"
	],
	[
		"ar",
		"العربية",
		"ع"
	]
];
var en = {
	common: {
		home: "Home",
		products: "Products",
		oem: "OEM / ODM",
		contact: "Contact",
		inquiry: "Start an inquiry",
		openMenu: "Open navigation",
		closeMenu: "Close navigation",
		navigation: "Main navigation",
		language: "Language",
		tagline: "Turning fragrance into a tangible part of everyday life.",
		company: "Zhaoqing Xyover Technology Co., Ltd.",
		location: "Guangdong, China"
	},
	home: {
		eyebrow: "Fragrance manufacturer · Guangdong",
		heroA: "Fragrance,",
		heroB: "made tangible.",
		intro: "From product concept to volume delivery, we create scented candles, fragrance balms, car diffusers, home diffusers and plaster decor for brands worldwide.",
		explore: "Explore products",
		learnOem: "Discover OEM / ODM",
		proof1: "Core product families",
		proof2: "Formula · form · packaging",
		proof3: "For global buyers",
		visualLabel: "XYOVER fragrance collection",
		candleAlt: "Sculptural scented candle",
		stoneAlt: "Aroma stone",
		marquee1: "NATURAL MATERIALS",
		marquee2: "CUSTOM FRAGRANCE",
		marquee3: "FLEXIBLE PACKAGING",
		marquee4: "FACTORY DIRECT",
		collections: "Our collections",
		collectionTitleA: "Five ways to",
		collectionTitleB: "carry a scent.",
		collectionIntro: "Made for home, car, wardrobe and gifting—one coherent fragrance language across a complete range.",
		oemEyebrow: "OEM / ODM service",
		oemTitleA: "Your idea.",
		oemTitleB: "Our craft.",
		oemIntro: "From fragrance, colour and form to labels and gift boxes, we sample and manufacture around your brand.",
		oemButton: "View custom process",
		contactEyebrow: "Start a project",
		contactTitle: "Have a scent in mind?",
		contactText: "Tell us your product type, estimated quantity and target market. We will help shape the next step.",
		contactAria: "Contact XYOVER to start a project",
		products: [
			{
				title: "Scented Candles",
				label: "Home ambience",
				description: "Sculptural forms, layered fragrance and gift-ready moments.",
				options: []
			},
			{
				title: "Fragrance Balm",
				label: "Flameless scent",
				description: "Portable fragrance in a clean solid format.",
				options: []
			},
			{
				title: "Car Diffusers",
				label: "On the road",
				description: "Hanging and vent-mounted fragrance formats for the road.",
				options: []
			},
			{
				title: "Home Diffusers",
				label: "Interior fragrance",
				description: "Steady reed diffusion with a refined decorative presence.",
				options: []
			},
			{
				title: "Plaster Decor",
				label: "Decorative scent",
				description: "Porous fragrance pieces for wardrobes, rooms and gifting.",
				options: []
			}
		],
		process: [
			"Brand & product direction",
			"Sampling & refinement",
			"Production & quality control",
			"Packaging & delivery"
		]
	},
	products: {
		eyebrow: "Product collections",
		titleA: "Objects that",
		titleB: "hold a feeling.",
		intro: "Five product families for home, car, wardrobe and gifting. Colours, fragrances, forms and packaging can all be tailored.",
		ask: "Ask about this range",
		recommend: "Need a recommendation?",
		unsureA: "Unsure where",
		unsureB: "to begin?",
		recommendText: "Share your target market, retail price, use case and estimated volume. We will recommend a suitable format and packaging direction.",
		submit: "Share product requirements",
		catalogLabel: "Product categories",
		items: [
			{
				title: "Scented Candles",
				label: "Home ambience",
				description: "Fragrance, sculptural form and atmosphere for home, seasonal and gifting collections.",
				options: [
					"Soy wax blends",
					"Sculptural forms",
					"Custom fragrance",
					"Gift packaging"
				]
			},
			{
				title: "Fragrance Balm",
				label: "Flameless scent",
				description: "Portable and effortless solid fragrance for wardrobes, rooms, cars and gift sets.",
				options: [
					"Solid fragrance",
					"Metal or ceramic",
					"Portable size",
					"Private label"
				]
			},
			{
				title: "Car Diffusers",
				label: "On the road",
				description: "Hanging and vent-mounted fragrance formats designed for an expressive in-car experience.",
				options: [
					"Vent clip",
					"Hanging format",
					"Refill concept",
					"Custom housing"
				]
			},
			{
				title: "Home Diffusers",
				label: "Interior fragrance",
				description: "Reed diffusers that bring steady fragrance and a refined decorative presence to interiors.",
				options: [
					"Reed diffuser",
					"Custom vessels",
					"Diffusion strength",
					"Private label"
				]
			},
			{
				title: "Plaster Decor",
				label: "Decorative scent",
				description: "Porous plaster carries fragrance while custom forms add a decorative, branded touch.",
				options: [
					"Custom mould",
					"Colour matching",
					"Fragrance loading",
					"Gift sets"
				]
			}
		]
	},
	oem: {
		eyebrow: "Made for your brand",
		titleA: "From an idea",
		titleB: "to your product.",
		intro: "Start quickly with private label or develop an exclusive fragrance, form and package with us. Every stage is clear and confirmable.",
		layers: "Customise every layer",
		builtA: "Built around",
		builtB: "your brand.",
		layersText: "Define the details that matter most to buyers first, then refine each layer to reduce wasted samples and revisions.",
		stages: "Four clear stages",
		pathA: "A practical path",
		pathB: "to production.",
		prepare: "Prepare your brief",
		essentials: "Send us the essentials.",
		briefIntro: "Even if your brief is not complete, start with these details:",
		start: "Start a custom inquiry",
		capabilities: [
			{
				title: "Fragrance",
				label: "Scent development",
				text: "Choose notes, strength and diffusion to create a coherent fragrance language."
			},
			{
				title: "Form",
				label: "Product design",
				text: "Start from existing forms or develop custom colours, sizes and moulds."
			},
			{
				title: "Identity",
				label: "Brand expression",
				text: "Custom labels, print and finishes make the product recognisably yours."
			},
			{
				title: "Packaging",
				label: "Packaging solution",
				text: "From transit packs to gift sets, balancing experience, cost and safety."
			}
		],
		steps: [
			{
				title: "Brief",
				label: "Discovery",
				text: "Product, market, budget, quantity and timing."
			},
			{
				title: "Sample",
				label: "Confirmation",
				text: "Confirm scent, material, colour, form, label and package."
			},
			{
				title: "Produce",
				label: "Manufacturing",
				text: "Produce to the approved sample with in-process quality checks."
			},
			{
				title: "Deliver",
				label: "Packing",
				text: "Final inspection, packing and shipment preparation."
			}
		],
		briefItems: [
			"Product category and use case",
			"Target market, quantity and delivery date",
			"Logo, references or visual direction",
			"Desired fragrance, colour, form and packaging"
		]
	},
	contact: {
		eyebrow: "Tell us what you are building",
		titleA: "Let’s make",
		titleB: "something memorable.",
		intro: "Whether you have a complete plan or an early idea, share the product direction and we will begin with a practical next step.",
		contact: "Contact",
		companyLabel: "COMPANY",
		locationLabel: "LOCATION",
		detailLabel: "EMAIL / WHATSAPP",
		detailPlaceholder: "Add your business contact details",
		note: "Prototype note · Contact details and a form destination can be connected in the next version.",
		kicker: "PROJECT INQUIRY",
		formTitle: "Share the essentials.",
		name: "Your name *",
		namePlaceholder: "Name",
		email: "Business email *",
		company: "Company",
		companyPlaceholder: "Company name",
		interested: "Interested in *",
		choose: "Please choose",
		quantity: "Estimated quantity",
		quantityPlaceholder: "e.g. 1,000 pcs",
		market: "Target market",
		marketPlaceholder: "Country or region",
		details: "Project details *",
		detailsPlaceholder: "Tell us about product style, fragrance, packaging and timeline...",
		formNote: "Connect this form to your email or CRM in the next phase.",
		submit: "Create inquiry",
		successTitle: "Your inquiry has been recorded in this prototype.",
		successText: "Before launch, this form can connect to your business email, WhatsApp or CRM.",
		productOptions: [
			"Scented Candles",
			"Car Diffusers",
			"Fragrance Balm",
			"Aroma Stones",
			"Multiple categories"
		]
	}
};
function translated(common, home, products, oem, contact) {
	return {
		common: {
			...en.common,
			...common
		},
		home: {
			...en.home,
			...home,
			products: home.products ?? en.home.products,
			process: home.process ?? en.home.process
		},
		products: {
			...en.products,
			...products,
			items: products.items ?? en.products.items
		},
		oem: {
			...en.oem,
			...oem,
			capabilities: oem.capabilities ?? en.oem.capabilities,
			steps: oem.steps ?? en.oem.steps,
			briefItems: oem.briefItems ?? en.oem.briefItems
		},
		contact: {
			...en.contact,
			...contact,
			productOptions: contact.productOptions ?? en.contact.productOptions
		}
	};
}
var zhCN = translated({
	home: "首页",
	products: "产品",
	contact: "联系",
	inquiry: "开始询盘",
	openMenu: "打开导航",
	closeMenu: "关闭导航",
	navigation: "主导航",
	language: "语言",
	tagline: "把香气做成可触碰的日常。",
	location: "中国广东"
}, {
	eyebrow: "香薰制造商 · 广东",
	heroA: "让香气，",
	heroB: "成为可触碰的日常。",
	intro: "从产品创意到批量交付，我们为全球品牌打造香薰蜡烛、香膏、车载香薰、家用香薰与香薰石膏。",
	explore: "探索产品",
	learnOem: "了解 OEM / ODM",
	proof1: "核心产品系列",
	proof2: "配方 · 外观 · 包装",
	proof3: "面向全球采购商",
	visualLabel: "XYOVER 香薰产品系列",
	candleAlt: "造型香薰蜡烛",
	stoneAlt: "香薰石膏",
	collections: "产品系列",
	collectionTitleA: "五种方式，",
	collectionTitleB: "承载一种香气。",
	collectionIntro: "覆盖居家、车载、衣柜与礼赠场景，以统一的产品语言建立完整香氛系列。",
	oemEyebrow: "OEM / ODM 定制服务",
	oemTitleA: "你的想法，",
	oemTitleB: "我们的工艺。",
	oemIntro: "从香型、颜色、造型到标签与礼盒，按你的品牌定位完成打样与量产。",
	oemButton: "查看定制流程",
	contactEyebrow: "开始一个项目",
	contactTitle: "心里已有一种香气？",
	contactText: "告诉我们产品类型、预计数量和目标市场，我们会帮你梳理下一步。",
	contactAria: "联系 XYOVER 开始项目",
	products: [
		{
			title: "香薰蜡烛",
			label: "居家氛围",
			description: "造型、层次香气与适合礼赠的氛围感。",
			options: []
		},
		{
			title: "香膏",
			label: "无火扩香",
			description: "洁净固态、便携好用的香气形式。",
			options: []
		},
		{
			title: "车载香薰",
			label: "旅途香气",
			description: "悬挂式与出风口式两种车内扩香形式。",
			options: []
		},
		{
			title: "家用香薰",
			label: "空间扩香",
			description: "稳定扩香，并以瓶器点缀居家空间。",
			options: []
		},
		{
			title: "香薰石膏",
			label: "装饰扩香",
			description: "适合衣柜、房间与礼赠的多孔装饰香氛。",
			options: []
		}
	],
	process: [
		"品牌与产品方向",
		"打样与细节优化",
		"生产与质量控制",
		"包装与交付"
	]
}, {
	eyebrow: "产品系列",
	titleA: "承载感受的",
	titleB: "香氛器物。",
	intro: "五类产品覆盖居家、车载、衣柜与礼赠场景，颜色、香型、造型与包装均可定制。",
	ask: "询问此系列",
	recommend: "需要产品建议？",
	unsureA: "不确定该",
	unsureB: "从哪里开始？",
	recommendText: "告诉我们目标市场、零售价区间、使用场景和预计采购量，我们会建议合适的产品形式与包装方向。",
	submit: "提交产品需求",
	catalogLabel: "产品分类",
	items: [
		{
			title: "香薰蜡烛",
			label: "居家氛围",
			description: "将香气、造型与氛围结合，适合家居、节日与礼赠系列。",
			options: [
				"大豆蜡配方",
				"造型蜡烛",
				"定制香型",
				"礼盒包装"
			]
		},
		{
			title: "香膏",
			label: "无火扩香",
			description: "无火、便携、使用简单，适合衣柜、房间、车内和礼盒。",
			options: [
				"固体香氛",
				"金属或陶瓷",
				"便携尺寸",
				"品牌贴牌"
			]
		},
		{
			title: "车载香薰",
			label: "旅途香气",
			description: "兼顾扩香表现与车内视觉，支持出风口夹和悬挂两种形式。",
			options: [
				"出风口夹",
				"悬挂形式",
				"替换装",
				"定制外壳"
			]
		},
		{
			title: "家用香薰",
			label: "空间扩香",
			description: "以藤条稳定扩香，瓶器与香型共同营造精致的居家氛围。",
			options: [
				"藤条扩香",
				"瓶器定制",
				"香型与浓度",
				"品牌贴牌"
			]
		},
		{
			title: "香薰石膏",
			label: "装饰扩香",
			description: "多孔石膏承载香气，专属造型增强装饰感和品牌辨识度。",
			options: [
				"定制模具",
				"颜色匹配",
				"香气加载",
				"礼赠套装"
			]
		}
	]
}, {
	eyebrow: "为你的品牌而生",
	titleA: "从一个想法",
	titleB: "到你的产品。",
	intro: "你可以从现有产品快速贴牌，也可以共同开发专属香型、造型与包装。每个节点都清晰可确认。",
	layers: "定制每一个层次",
	builtA: "围绕你的",
	builtB: "品牌打造。",
	layersText: "先明确最影响购买决策的部分，再逐步推进细节，减少无效打样和反复修改。",
	stages: "四个清晰阶段",
	pathA: "一条务实的",
	pathB: "量产路径。",
	prepare: "准备需求简报",
	essentials: "告诉我们关键需求。",
	briefIntro: "即使资料还不完整，也可以先从以下信息开始：",
	start: "开始定制询盘",
	capabilities: [
		{
			title: "香型",
			label: "香型开发",
			text: "选择香调、浓度与扩香体验，建立系列化气味语言。"
		},
		{
			title: "造型",
			label: "产品设计",
			text: "从现有款式快速启动，或开发颜色、尺寸与专属模具。"
		},
		{
			title: "品牌",
			label: "品牌呈现",
			text: "定制标签、印刷与表面工艺，让产品更容易被记住。"
		},
		{
			title: "包装",
			label: "包装方案",
			text: "从运输包装到礼赠套装，兼顾体验、成本与安全。"
		}
	],
	steps: [
		{
			title: "沟通",
			label: "需求简报",
			text: "产品类别、市场、预算、数量与时间计划。"
		},
		{
			title: "打样",
			label: "样品确认",
			text: "确认香型、材质、颜色、造型、标签与包装。"
		},
		{
			title: "生产",
			label: "批量制造",
			text: "按确认样品和质量要求生产并进行过程检查。"
		},
		{
			title: "交付",
			label: "包装出货",
			text: "完成成品检查、装箱与出货准备。"
		}
	],
	briefItems: [
		"产品类别与应用场景",
		"目标市场、预计数量与期望交期",
		"品牌 Logo、参考图片或风格方向",
		"希望定制的香型、颜色、造型与包装"
	]
}, {
	eyebrow: "告诉我们你想打造什么",
	titleA: "一起创造",
	titleB: "令人难忘的产品。",
	intro: "无论你已经有完整方案，还是只有初步想法，都可以先发来产品方向。我们会从可行的下一步开始。",
	contact: "联系我们",
	companyLabel: "公司",
	locationLabel: "所在地",
	detailPlaceholder: "请添加真实商务联系方式",
	note: "原型说明 · 联系方式与表单收件地址可在下一版接入。",
	kicker: "项目询盘",
	formTitle: "分享关键需求。",
	name: "姓名 *",
	namePlaceholder: "姓名",
	email: "商务邮箱 *",
	company: "公司",
	companyPlaceholder: "公司名称",
	interested: "感兴趣的产品 *",
	choose: "请选择",
	quantity: "预计数量",
	quantityPlaceholder: "例如 1,000 件",
	market: "目标市场",
	marketPlaceholder: "国家或地区",
	details: "项目需求 *",
	detailsPlaceholder: "请介绍产品风格、香型、包装和时间计划……",
	formNote: "下一阶段可将表单接入你的邮箱或 CRM。",
	submit: "生成询盘记录",
	successTitle: "询盘内容已在原型中完成记录。",
	successText: "正式上线前，可将表单连接到商务邮箱、WhatsApp 或 CRM。",
	productOptions: [
		"香薰蜡烛",
		"车载香薰",
		"香膏",
		"香薰石膏",
		"多个品类"
	]
});
var copies = {
	en,
	"zh-CN": zhCN,
	"zh-TW": translated({
		home: "首頁",
		products: "產品",
		contact: "聯絡",
		inquiry: "開始詢價",
		openMenu: "開啟導覽",
		closeMenu: "關閉導覽",
		navigation: "主導覽",
		language: "語言",
		tagline: "讓香氣成為可觸碰的日常。",
		location: "中國廣東"
	}, {
		...zhCN.home,
		heroA: "讓香氣，",
		heroB: "成為可觸碰的日常。",
		intro: "從產品創意到批量交付，我們為全球品牌打造香氛蠟燭、香膏、車用香氛、家用香氛與香氛石。",
		explore: "探索產品",
		learnOem: "了解 OEM / ODM",
		proof1: "核心產品系列",
		proof2: "配方 · 外觀 · 包裝",
		proof3: "服務全球採購商",
		collections: "產品系列",
		collectionTitleA: "五種方式，",
		collectionTitleB: "承載一種香氣。",
		collectionIntro: "涵蓋居家、車用、衣櫃與送禮情境，以一致的產品語言建立完整香氛系列。",
		oemTitleA: "你的想法，",
		oemTitleB: "我們的工藝。",
		oemIntro: "從香型、顏色、造型到標籤與禮盒，依照你的品牌定位完成打樣與量產。",
		oemButton: "查看客製流程",
		contactTitle: "心中已有一種香氣？",
		contactText: "告訴我們產品類型、預估數量和目標市場，我們會協助規劃下一步。"
	}, {
		...zhCN.products,
		eyebrow: "產品系列",
		intro: "五類產品涵蓋居家、車用、衣櫃與送禮情境，顏色、香型、造型與包裝均可客製。",
		ask: "詢問此系列",
		submit: "提交產品需求"
	}, {
		...zhCN.oem,
		intro: "你可以從現有產品快速貼牌，也可以共同開發專屬香型、造型與包裝。每個節點都清楚可確認。",
		start: "開始客製詢價"
	}, {
		...zhCN.contact,
		eyebrow: "告訴我們你想打造什麼",
		titleA: "一起創造",
		titleB: "令人難忘的產品。",
		contact: "聯絡我們",
		formTitle: "分享關鍵需求。",
		choose: "請選擇",
		submit: "建立詢價記錄"
	}),
	ja: translated({
		home: "ホーム",
		products: "製品",
		contact: "お問い合わせ",
		inquiry: "相談を始める",
		openMenu: "メニューを開く",
		closeMenu: "メニューを閉じる",
		navigation: "メインナビゲーション",
		language: "言語",
		tagline: "香りを、触れられる日常へ。",
		location: "中国・広東省"
	}, {
		eyebrow: "フレグランスメーカー · 広東",
		heroA: "香りを、",
		heroB: "かたちに。",
		intro: "企画から量産・納品まで、キャンドル、カーディフューザー、練り香水、ホームディフューザー、アロマストーンを世界のブランドへ。",
		explore: "製品を見る",
		learnOem: "OEM / ODM について",
		proof1: "主要製品カテゴリー",
		proof2: "処方 · 形状 · 包装",
		proof3: "グローバルB2B",
		collections: "コレクション",
		collectionTitleA: "香りを運ぶ、",
		collectionTitleB: "5つのかたち。",
		collectionIntro: "住空間、車内、クローゼット、ギフトまで、一貫した香りの世界観を構築します。",
		oemTitleA: "あなたの発想を、",
		oemTitleB: "私たちの技術で。",
		oemIntro: "香り、色、形、ラベル、ギフトボックスまで、ブランドに合わせて試作・量産します。",
		oemButton: "カスタム工程を見る",
		contactTitle: "思い描く香りがありますか？",
		contactText: "製品タイプ、数量、対象市場をお知らせください。次の一歩をご提案します。"
	}, {
		eyebrow: "製品コレクション",
		titleA: "感覚を宿す",
		titleB: "香りのオブジェ。",
		intro: "住空間、車内、クローゼット、ギフト向けの5カテゴリー。色・香り・形・包装をカスタマイズできます。",
		ask: "この製品を相談",
		recommend: "選び方に迷ったら",
		unsureA: "どこから",
		unsureB: "始めますか？",
		recommendText: "市場、価格帯、用途、数量を共有いただければ、製品形式と包装をご提案します。",
		submit: "製品要件を送る",
		catalogLabel: "製品カテゴリー"
	}, {
		eyebrow: "ブランドのために",
		titleA: "アイデアから",
		titleB: "製品へ。",
		intro: "既製品へのプライベートラベルから、香り・形・包装の共同開発まで。工程を明確に進めます。",
		layers: "すべてをカスタマイズ",
		builtA: "ブランドを中心に",
		builtB: "設計します。",
		layersText: "購買判断に効く要素から定め、無駄な試作と修正を減らします。",
		stages: "4つの明確な工程",
		pathA: "量産までの",
		pathB: "実践的な道筋。",
		prepare: "要件を準備",
		essentials: "大切な情報をお送りください。",
		briefIntro: "資料が未完成でも、まずはこちらから：",
		start: "カスタム相談を始める"
	}, {
		eyebrow: "つくりたいものを教えてください",
		titleA: "記憶に残る",
		titleB: "製品を一緒に。",
		intro: "完成した企画でも、最初のアイデアでも。実現可能な次の一歩から始めます。",
		contact: "お問い合わせ",
		companyLabel: "会社",
		locationLabel: "所在地",
		detailPlaceholder: "ビジネス連絡先を追加",
		note: "試作版 · 連絡先とフォーム送信先は次版で接続できます。",
		kicker: "プロジェクト相談",
		formTitle: "要点を共有してください。",
		name: "お名前 *",
		email: "ビジネスメール *",
		company: "会社名",
		interested: "ご希望の製品 *",
		choose: "選択してください",
		quantity: "予定数量",
		market: "対象市場",
		details: "プロジェクト詳細 *",
		formNote: "次の段階でメールまたはCRMへ接続できます。",
		submit: "相談内容を記録",
		successTitle: "相談内容を記録しました。",
		successText: "公開前にメール、WhatsApp、CRMへ接続できます。"
	}),
	ko: translated({
		home: "홈",
		products: "제품",
		contact: "문의",
		inquiry: "문의 시작",
		openMenu: "메뉴 열기",
		closeMenu: "메뉴 닫기",
		navigation: "주요 메뉴",
		language: "언어",
		tagline: "향기를 만질 수 있는 일상으로.",
		location: "중국 광둥"
	}, {
		eyebrow: "프래그런스 제조사 · 광둥",
		heroA: "향기를,",
		heroB: "형태로 만듭니다.",
		intro: "제품 기획부터 대량 납품까지, 캔들·차량용 디퓨저·고체 향수·홈 디퓨저·아로마 스톤을 전 세계 브랜드에 제공합니다.",
		explore: "제품 보기",
		learnOem: "OEM / ODM 알아보기",
		proof1: "핵심 제품군",
		proof2: "포뮬러 · 형태 · 패키지",
		proof3: "글로벌 바이어 대상",
		collections: "컬렉션",
		collectionTitleA: "향기를 담는",
		collectionTitleB: "다섯 가지 방식.",
		collectionIntro: "홈, 차량, 옷장, 선물까지 일관된 향기 언어로 완성합니다.",
		oemTitleA: "당신의 아이디어.",
		oemTitleB: "우리의 기술.",
		oemIntro: "향, 색, 형태부터 라벨과 선물 상자까지 브랜드에 맞춰 샘플링하고 생산합니다.",
		oemButton: "맞춤 제작 과정",
		contactTitle: "마음에 둔 향이 있나요?",
		contactText: "제품, 수량, 목표 시장을 알려주시면 다음 단계를 함께 정리합니다."
	}, {
		eyebrow: "제품 컬렉션",
		titleA: "감정을 담는",
		titleB: "향기 오브제.",
		intro: "홈, 차량, 옷장, 선물용 5개 제품군. 색상, 향, 형태, 패키지를 맞춤 제작할 수 있습니다.",
		ask: "이 제품 문의",
		recommend: "추천이 필요하신가요?",
		unsureA: "어디서부터",
		unsureB: "시작할까요?",
		recommendText: "시장, 가격대, 용도, 수량을 알려주시면 적합한 제품과 패키지를 제안합니다.",
		submit: "제품 요구사항 보내기",
		catalogLabel: "제품 카테고리"
	}, {
		eyebrow: "브랜드를 위한 제작",
		titleA: "아이디어에서",
		titleB: "제품까지.",
		intro: "빠른 PB부터 독점 향, 형태, 패키지 공동 개발까지 명확한 단계로 진행합니다.",
		layers: "모든 요소 맞춤화",
		builtA: "브랜드 중심의",
		builtB: "제품 설계.",
		layersText: "구매 결정에 중요한 요소부터 정해 불필요한 샘플과 수정을 줄입니다.",
		stages: "명확한 네 단계",
		pathA: "생산까지의",
		pathB: "실용적인 과정.",
		prepare: "브리프 준비",
		essentials: "핵심 정보를 보내주세요.",
		briefIntro: "자료가 완성되지 않아도 다음부터 시작할 수 있습니다:",
		start: "맞춤 문의 시작"
	}, {
		eyebrow: "만들고 싶은 제품을 알려주세요",
		titleA: "기억에 남는",
		titleB: "제품을 함께.",
		intro: "완성된 기획도, 초기 아이디어도 괜찮습니다. 실행 가능한 다음 단계부터 시작합니다.",
		contact: "문의",
		companyLabel: "회사",
		locationLabel: "위치",
		detailPlaceholder: "비즈니스 연락처 추가",
		note: "프로토타입 · 연락처와 폼 수신처는 다음 버전에서 연결할 수 있습니다.",
		kicker: "프로젝트 문의",
		formTitle: "핵심 내용을 공유해주세요.",
		name: "이름 *",
		email: "비즈니스 이메일 *",
		company: "회사",
		interested: "관심 제품 *",
		choose: "선택하세요",
		quantity: "예상 수량",
		market: "목표 시장",
		details: "프로젝트 내용 *",
		formNote: "다음 단계에서 이메일 또는 CRM에 연결할 수 있습니다.",
		submit: "문의 기록",
		successTitle: "문의가 기록되었습니다.",
		successText: "출시 전 이메일, WhatsApp 또는 CRM에 연결할 수 있습니다."
	}),
	es: translated({
		home: "Inicio",
		products: "Productos",
		contact: "Contacto",
		inquiry: "Iniciar consulta",
		openMenu: "Abrir navegación",
		closeMenu: "Cerrar navegación",
		navigation: "Navegación principal",
		language: "Idioma",
		tagline: "Convertimos la fragancia en parte tangible de la vida diaria.",
		location: "Guangdong, China"
	}, {
		eyebrow: "Fabricante de fragancias · Guangdong",
		heroA: "Fragancia,",
		heroB: "hecha tangible.",
		intro: "Del concepto a la entrega a escala: velas, difusores para coche y hogar, bálsamos aromáticos y piezas de yeso perfumadas para marcas de todo el mundo.",
		explore: "Explorar productos",
		learnOem: "Descubrir OEM / ODM",
		proof1: "Familias principales",
		proof2: "Fórmula · forma · envase",
		proof3: "Para compradores globales",
		collections: "Colecciones",
		collectionTitleA: "Cinco formas de",
		collectionTitleB: "llevar un aroma.",
		collectionIntro: "Hogar, coche, armario y regalo, con un lenguaje aromático coherente.",
		oemTitleA: "Tu idea.",
		oemTitleB: "Nuestro oficio.",
		oemIntro: "Aroma, color, forma, etiqueta y caja: muestreamos y producimos para tu marca.",
		oemButton: "Ver proceso a medida",
		contactTitle: "¿Tienes un aroma en mente?",
		contactText: "Cuéntanos el producto, la cantidad y el mercado. Te ayudamos con el siguiente paso."
	}, {
		eyebrow: "Colecciones de producto",
		titleA: "Objetos que",
		titleB: "guardan emoción.",
		intro: "Cinco familias para hogar, coche, armario y regalo. Personaliza color, aroma, forma y envase.",
		ask: "Consultar esta gama",
		recommend: "¿Necesitas recomendación?",
		unsureA: "¿No sabes",
		unsureB: "por dónde empezar?",
		recommendText: "Comparte mercado, precio, uso y volumen; recomendaremos formato y envase.",
		submit: "Enviar requisitos",
		catalogLabel: "Categorías de producto"
	}, {
		eyebrow: "Hecho para tu marca",
		titleA: "De una idea",
		titleB: "a tu producto.",
		intro: "Empieza con marca privada o desarrolla con nosotros aroma, forma y envase exclusivos.",
		layers: "Personaliza cada capa",
		builtA: "Diseñado para",
		builtB: "tu marca.",
		layersText: "Definimos primero lo que más influye en la compra para reducir muestras y revisiones.",
		stages: "Cuatro etapas claras",
		pathA: "Un camino práctico",
		pathB: "a producción.",
		prepare: "Prepara tu briefing",
		essentials: "Envíanos lo esencial.",
		briefIntro: "Aunque no esté completo, puedes empezar por:",
		start: "Iniciar consulta a medida"
	}, {
		eyebrow: "Cuéntanos qué estás creando",
		titleA: "Hagamos algo",
		titleB: "memorable.",
		intro: "Con un plan completo o una idea inicial, comparte la dirección y empezaremos por un paso práctico.",
		contact: "Contacto",
		companyLabel: "EMPRESA",
		locationLabel: "UBICACIÓN",
		detailPlaceholder: "Añade tus datos de contacto",
		note: "Prototipo · Los contactos y el destino del formulario se conectarán en la siguiente versión.",
		kicker: "CONSULTA DE PROYECTO",
		formTitle: "Comparte lo esencial.",
		name: "Nombre *",
		email: "Email profesional *",
		company: "Empresa",
		interested: "Producto de interés *",
		choose: "Selecciona",
		quantity: "Cantidad estimada",
		market: "Mercado objetivo",
		details: "Detalles del proyecto *",
		formNote: "Conecta el formulario a tu email o CRM en la siguiente fase.",
		submit: "Crear consulta",
		successTitle: "Tu consulta ha quedado registrada.",
		successText: "Antes del lanzamiento puede conectarse a email, WhatsApp o CRM."
	}),
	fr: translated({
		home: "Accueil",
		products: "Produits",
		contact: "Contact",
		inquiry: "Démarrer une demande",
		openMenu: "Ouvrir la navigation",
		closeMenu: "Fermer la navigation",
		navigation: "Navigation principale",
		language: "Langue",
		tagline: "Rendre le parfum tangible au quotidien.",
		location: "Guangdong, Chine"
	}, {
		eyebrow: "Fabricant de parfums · Guangdong",
		heroA: "Le parfum,",
		heroB: "rendu tangible.",
		intro: "Du concept à la livraison en série : bougies, diffuseurs auto et maison, baumes parfumés et décors en plâtre pour les marques du monde entier.",
		explore: "Découvrir les produits",
		learnOem: "Découvrir OEM / ODM",
		proof1: "Familles de produits",
		proof2: "Formule · forme · emballage",
		proof3: "Pour acheteurs mondiaux",
		collections: "Nos collections",
		collectionTitleA: "Cinq façons de",
		collectionTitleB: "porter un parfum.",
		collectionIntro: "Maison, voiture, dressing et cadeau, dans un langage olfactif cohérent.",
		oemTitleA: "Votre idée.",
		oemTitleB: "Notre savoir-faire.",
		oemIntro: "Parfum, couleur, forme, étiquette et coffret : échantillonnage et production sur mesure.",
		oemButton: "Voir le processus",
		contactTitle: "Un parfum en tête ?",
		contactText: "Indiquez le produit, la quantité et le marché. Nous structurerons la suite."
	}, {
		eyebrow: "Collections de produits",
		titleA: "Des objets qui",
		titleB: "gardent une émotion.",
		intro: "Cinq familles pour maison, voiture, dressing et cadeau. Couleur, parfum, forme et emballage sur mesure.",
		ask: "Demander cette gamme",
		recommend: "Besoin d’un conseil ?",
		unsureA: "Par où",
		unsureB: "commencer ?",
		recommendText: "Partagez marché, prix, usage et volume ; nous conseillerons format et emballage.",
		submit: "Envoyer les besoins",
		catalogLabel: "Catégories de produits"
	}, {
		eyebrow: "Créé pour votre marque",
		titleA: "De l’idée",
		titleB: "à votre produit.",
		intro: "Marque blanche rapide ou développement exclusif du parfum, de la forme et de l’emballage.",
		layers: "Personnalisez chaque détail",
		builtA: "Pensé autour de",
		builtB: "votre marque.",
		layersText: "Nous définissons d’abord les choix décisifs pour limiter les échantillons et corrections.",
		stages: "Quatre étapes claires",
		pathA: "Un parcours concret",
		pathB: "vers la production.",
		prepare: "Préparez votre brief",
		essentials: "Envoyez-nous l’essentiel.",
		briefIntro: "Même incomplet, commencez avec :",
		start: "Démarrer une demande"
	}, {
		eyebrow: "Parlez-nous de votre projet",
		titleA: "Créons quelque chose",
		titleB: "de mémorable.",
		intro: "Plan complet ou première idée : partagez votre direction, nous commencerons par une étape concrète.",
		contact: "Contact",
		companyLabel: "ENTREPRISE",
		locationLabel: "LIEU",
		detailPlaceholder: "Ajoutez vos coordonnées professionnelles",
		note: "Prototype · Coordonnées et destination du formulaire à connecter dans la prochaine version.",
		kicker: "DEMANDE DE PROJET",
		formTitle: "Partagez l’essentiel.",
		name: "Votre nom *",
		email: "E-mail professionnel *",
		company: "Entreprise",
		interested: "Produit souhaité *",
		choose: "Choisir",
		quantity: "Quantité estimée",
		market: "Marché cible",
		details: "Détails du projet *",
		formNote: "Connectez ce formulaire à votre e-mail ou CRM à l’étape suivante.",
		submit: "Créer la demande",
		successTitle: "Votre demande a été enregistrée.",
		successText: "Avant lancement, connectez-la à votre e-mail, WhatsApp ou CRM."
	}),
	de: translated({
		home: "Start",
		products: "Produkte",
		contact: "Kontakt",
		inquiry: "Anfrage starten",
		openMenu: "Navigation öffnen",
		closeMenu: "Navigation schließen",
		navigation: "Hauptnavigation",
		language: "Sprache",
		tagline: "Duft als greifbarer Teil des Alltags.",
		location: "Guangdong, China"
	}, {
		eyebrow: "Duftmanufaktur · Guangdong",
		heroA: "Duft,",
		heroB: "greifbar gemacht.",
		intro: "Von der Idee bis zur Serienlieferung: Duftkerzen, Auto- und Raumdüfte, Duftbalsam und Duftgips für Marken weltweit.",
		explore: "Produkte entdecken",
		learnOem: "OEM / ODM entdecken",
		proof1: "Kernsortimente",
		proof2: "Rezeptur · Form · Verpackung",
		proof3: "Für globale Einkäufer",
		collections: "Kollektionen",
		collectionTitleA: "Fünf Arten,",
		collectionTitleB: "Duft zu tragen.",
		collectionIntro: "Für Zuhause, Auto, Schrank und Geschenk – als stimmige Duftwelt.",
		oemTitleA: "Ihre Idee.",
		oemTitleB: "Unser Handwerk.",
		oemIntro: "Duft, Farbe, Form, Etikett und Geschenkbox – bemustert und gefertigt für Ihre Marke.",
		oemButton: "Prozess ansehen",
		contactTitle: "Einen Duft im Sinn?",
		contactText: "Nennen Sie Produkt, Menge und Zielmarkt. Wir strukturieren den nächsten Schritt."
	}, {
		eyebrow: "Produktkollektionen",
		titleA: "Objekte, die",
		titleB: "Gefühle bewahren.",
		intro: "Fünf Produktfamilien für Zuhause, Auto, Schrank und Geschenk. Farbe, Duft, Form und Verpackung sind anpassbar.",
		ask: "Sortiment anfragen",
		recommend: "Beratung gewünscht?",
		unsureA: "Wo sollen Sie",
		unsureB: "beginnen?",
		recommendText: "Teilen Sie Markt, Preis, Nutzung und Volumen – wir empfehlen Format und Verpackung.",
		submit: "Anforderungen senden",
		catalogLabel: "Produktkategorien"
	}, {
		eyebrow: "Für Ihre Marke",
		titleA: "Von der Idee",
		titleB: "zum Produkt.",
		intro: "Schnelles Private Label oder gemeinsame Entwicklung von Duft, Form und Verpackung.",
		layers: "Jede Ebene anpassen",
		builtA: "Rund um Ihre",
		builtB: "Marke gebaut.",
		layersText: "Zuerst definieren wir kaufentscheidende Details und reduzieren so unnötige Muster und Korrekturen.",
		stages: "Vier klare Phasen",
		pathA: "Ein praktischer Weg",
		pathB: "zur Produktion.",
		prepare: "Briefing vorbereiten",
		essentials: "Senden Sie das Wesentliche.",
		briefIntro: "Auch unvollständig können Sie beginnen mit:",
		start: "Individuelle Anfrage starten"
	}, {
		eyebrow: "Erzählen Sie von Ihrem Projekt",
		titleA: "Schaffen wir etwas",
		titleB: "Unvergessliches.",
		intro: "Ob fertiger Plan oder erste Idee: Teilen Sie die Richtung, wir beginnen mit dem machbaren nächsten Schritt.",
		contact: "Kontakt",
		companyLabel: "UNTERNEHMEN",
		locationLabel: "STANDORT",
		detailPlaceholder: "Geschäftskontakt ergänzen",
		note: "Prototyp · Kontakte und Formularziel können in der nächsten Version verbunden werden.",
		kicker: "PROJEKTANFRAGE",
		formTitle: "Teilen Sie das Wesentliche.",
		name: "Ihr Name *",
		email: "Geschäftliche E-Mail *",
		company: "Unternehmen",
		interested: "Produktinteresse *",
		choose: "Bitte wählen",
		quantity: "Geschätzte Menge",
		market: "Zielmarkt",
		details: "Projektdetails *",
		formNote: "Verbinden Sie das Formular später mit E-Mail oder CRM.",
		submit: "Anfrage erstellen",
		successTitle: "Ihre Anfrage wurde erfasst.",
		successText: "Vor dem Start kann sie mit E-Mail, WhatsApp oder CRM verbunden werden."
	}),
	pt: translated({
		home: "Início",
		products: "Produtos",
		contact: "Contato",
		inquiry: "Iniciar consulta",
		openMenu: "Abrir navegação",
		closeMenu: "Fechar navegação",
		navigation: "Navegação principal",
		language: "Idioma",
		tagline: "Transformando fragrância em parte tangível do cotidiano.",
		location: "Guangdong, China"
	}, {
		eyebrow: "Fabricante de fragrâncias · Guangdong",
		heroA: "Fragrância,",
		heroB: "feita tangível.",
		intro: "Do conceito à entrega em escala: velas, difusores para carro e casa, bálsamos e peças de gesso aromáticas para marcas globais.",
		explore: "Explorar produtos",
		learnOem: "Conhecer OEM / ODM",
		proof1: "Linhas principais",
		proof2: "Fórmula · forma · embalagem",
		proof3: "Para compradores globais",
		collections: "Coleções",
		collectionTitleA: "Cinco formas de",
		collectionTitleB: "levar um aroma.",
		collectionIntro: "Casa, carro, armário e presentes em uma linguagem olfativa coerente.",
		oemTitleA: "Sua ideia.",
		oemTitleB: "Nosso ofício.",
		oemIntro: "Fragrância, cor, forma, rótulo e caixa: amostragem e produção para sua marca.",
		oemButton: "Ver processo",
		contactTitle: "Tem um aroma em mente?",
		contactText: "Conte produto, volume e mercado; ajudamos com o próximo passo."
	}, {
		eyebrow: "Coleções de produtos",
		titleA: "Objetos que",
		titleB: "guardam emoções.",
		intro: "Cinco famílias para casa, carro, armário e presente. Personalize cor, fragrância, forma e embalagem.",
		ask: "Consultar esta linha",
		recommend: "Precisa de recomendação?",
		unsureA: "Por onde",
		unsureB: "começar?",
		recommendText: "Compartilhe mercado, preço, uso e volume; recomendaremos formato e embalagem.",
		submit: "Enviar requisitos",
		catalogLabel: "Categorias de produtos"
	}, {
		eyebrow: "Feito para sua marca",
		titleA: "De uma ideia",
		titleB: "ao seu produto.",
		intro: "Comece com marca própria ou desenvolva fragrância, forma e embalagem exclusivas conosco.",
		layers: "Personalize cada camada",
		builtA: "Criado em torno",
		builtB: "da sua marca.",
		layersText: "Definimos primeiro os pontos que mais influenciam a compra para reduzir amostras e revisões.",
		stages: "Quatro etapas claras",
		pathA: "Um caminho prático",
		pathB: "para produção.",
		prepare: "Prepare o briefing",
		essentials: "Envie o essencial.",
		briefIntro: "Mesmo incompleto, comece por:",
		start: "Iniciar consulta personalizada"
	}, {
		eyebrow: "Conte o que está criando",
		titleA: "Vamos fazer algo",
		titleB: "memorável.",
		intro: "Com um plano completo ou uma ideia inicial, compartilhe a direção e começaremos pelo próximo passo viável.",
		contact: "Contato",
		companyLabel: "EMPRESA",
		locationLabel: "LOCAL",
		detailPlaceholder: "Adicione seus contatos comerciais",
		note: "Protótipo · Contatos e destino do formulário serão conectados na próxima versão.",
		kicker: "CONSULTA DE PROJETO",
		formTitle: "Compartilhe o essencial.",
		name: "Seu nome *",
		email: "E-mail comercial *",
		company: "Empresa",
		interested: "Produto de interesse *",
		choose: "Selecione",
		quantity: "Quantidade estimada",
		market: "Mercado-alvo",
		details: "Detalhes do projeto *",
		formNote: "Conecte o formulário ao e-mail ou CRM na próxima fase.",
		submit: "Criar consulta",
		successTitle: "Sua consulta foi registrada.",
		successText: "Antes do lançamento, conecte ao e-mail, WhatsApp ou CRM."
	}),
	ar: translated({
		home: "الرئيسية",
		products: "المنتجات",
		contact: "تواصل",
		inquiry: "ابدأ استفساراً",
		openMenu: "فتح القائمة",
		closeMenu: "إغلاق القائمة",
		navigation: "التنقل الرئيسي",
		language: "اللغة",
		tagline: "نجعل العطر جزءاً ملموساً من الحياة اليومية.",
		location: "غوانغدونغ، الصين"
	}, {
		eyebrow: "مصنّع عطور · غوانغدونغ",
		heroA: "العطر،",
		heroB: "في صورة ملموسة.",
		intro: "من الفكرة حتى التسليم بالكميات: شموع ومعطرات للسيارة والمنزل وبلسم عطري وديكور جبسي معطّر للعلامات حول العالم.",
		explore: "استكشف المنتجات",
		learnOem: "اكتشف OEM / ODM",
		proof1: "فئات المنتجات الأساسية",
		proof2: "تركيبة · شكل · تغليف",
		proof3: "للمشترين حول العالم",
		collections: "مجموعاتنا",
		collectionTitleA: "خمس طرق",
		collectionTitleB: "لحمل العطر.",
		collectionIntro: "للمنزل والسيارة والخزانة والهدايا ضمن لغة عطرية متكاملة.",
		oemTitleA: "فكرتك.",
		oemTitleB: "حرفتنا.",
		oemIntro: "من الرائحة واللون والشكل إلى الملصق وعلبة الهدية، نصنع وفق علامتك.",
		oemButton: "عرض مسار التخصيص",
		contactTitle: "هل لديك عطر في ذهنك؟",
		contactText: "أخبرنا بالمنتج والكمية والسوق وسنساعدك في الخطوة التالية."
	}, {
		eyebrow: "مجموعات المنتجات",
		titleA: "قطع تحتفظ",
		titleB: "بالإحساس.",
		intro: "خمس فئات للمنزل والسيارة والخزانة والهدايا. يمكن تخصيص اللون والرائحة والشكل والتغليف.",
		ask: "استفسر عن هذه الفئة",
		recommend: "تحتاج إلى توصية؟",
		unsureA: "لا تعرف",
		unsureB: "من أين تبدأ؟",
		recommendText: "شارك السوق والسعر والاستخدام والكمية وسنقترح الشكل والتغليف المناسبين.",
		submit: "إرسال متطلبات المنتج",
		catalogLabel: "فئات المنتجات"
	}, {
		eyebrow: "مصنوع لعلامتك",
		titleA: "من فكرة",
		titleB: "إلى منتجك.",
		intro: "ابدأ بعلامة خاصة أو طوّر معنا رائحة وشكلاً وتغليفاً حصرياً عبر مراحل واضحة.",
		layers: "خصّص كل تفصيل",
		builtA: "مصمم حول",
		builtB: "علامتك.",
		layersText: "نحدد أولاً ما يؤثر في قرار الشراء لتقليل العينات والتعديلات.",
		stages: "أربع مراحل واضحة",
		pathA: "مسار عملي",
		pathB: "نحو الإنتاج.",
		prepare: "جهّز موجزك",
		essentials: "أرسل لنا الأساسيات.",
		briefIntro: "حتى إن لم تكتمل التفاصيل، ابدأ بـ:",
		start: "ابدأ طلب تخصيص"
	}, {
		eyebrow: "أخبرنا ماذا تصنع",
		titleA: "لنصنع شيئاً",
		titleB: "لا يُنسى.",
		intro: "سواء لديك خطة كاملة أو فكرة أولية، شارك الاتجاه وسنبدأ بخطوة عملية.",
		contact: "تواصل",
		companyLabel: "الشركة",
		locationLabel: "الموقع",
		detailPlaceholder: "أضف بيانات التواصل التجارية",
		note: "نموذج أولي · يمكن ربط بيانات التواصل ووجهة النموذج في الإصدار التالي.",
		kicker: "استفسار مشروع",
		formTitle: "شارك الأساسيات.",
		name: "الاسم *",
		email: "البريد التجاري *",
		company: "الشركة",
		interested: "المنتج المطلوب *",
		choose: "اختر",
		quantity: "الكمية المتوقعة",
		market: "السوق المستهدف",
		details: "تفاصيل المشروع *",
		formNote: "اربط النموذج ببريدك أو CRM في المرحلة التالية.",
		submit: "إنشاء الاستفسار",
		successTitle: "تم تسجيل استفسارك.",
		successText: "قبل الإطلاق يمكن ربطه بالبريد أو WhatsApp أو CRM."
	})
};
var supportedLngs = languages.map(([code]) => code);
var resources = Object.fromEntries(Object.entries(copies).map(([locale, translation]) => [locale, { translation }]));
var i18n = createInstance();
i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	fallbackLng: "en",
	supportedLngs,
	load: "currentOnly",
	returnObjects: true,
	interpolation: { escapeValue: false },
	react: { useSuspense: false },
	initImmediate: false
});
function I18nProvider({ children }) {
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem("xyover-language");
		if (stored && supportedLngs.includes(stored)) i18n.changeLanguage(stored);
		const syncDocument = (language) => {
			const locale = supportedLngs.includes(language) ? language : "en";
			document.documentElement.lang = locale;
			document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
		};
		syncDocument(i18n.resolvedLanguage ?? "en");
		i18n.on("languageChanged", syncDocument);
		return () => {
			i18n.off("languageChanged", syncDocument);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nextProvider, {
		i18n,
		children
	});
}
function useI18n() {
	const { i18n: instance } = useTranslation();
	const resolved = instance.resolvedLanguage ?? instance.language;
	const locale = supportedLngs.includes(resolved) ? resolved : "en";
	return {
		locale,
		copy: instance.getResourceBundle(locale, "translation"),
		setLocale: (next) => {
			window.localStorage.setItem("xyover-language", next);
			instance.changeLanguage(next);
		}
	};
}
//#endregion
export { I18nProvider, languages, useI18n };
