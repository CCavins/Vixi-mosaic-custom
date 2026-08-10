var qd = Object.defineProperty;
var Xd = (e, n, t) => n in e ? qd(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var lr = (e, n, t) => Xd(e, typeof n != "symbol" ? n + "" : n, t);
import { createI18n as Zd, useI18n as ds } from "vue-i18n";
import { useI18n as U0 } from "vue-i18n";
import { watch as ae, onScopeDispose as lt, effectScope as qn, Fragment as ue, reactive as Ct, watchEffect as je, toRef as E, capitalize as na, isVNode as Qd, Comment as Jd, shallowRef as ee, camelize as Ji, unref as be, warn as wl, getCurrentInstance as ev, ref as j, computed as w, provide as Re, inject as Ie, defineComponent as qe, h as cn, toRaw as Ke, toRefs as aa, createVNode as k, mergeProps as H, createElementVNode as S, normalizeClass as z, toValue as Wt, getCurrentScope as tv, onBeforeUnmount as St, readonly as Cl, useId as xt, onDeactivated as vs, onActivated as nv, onMounted as ft, nextTick as Pe, normalizeStyle as le, TransitionGroup as eo, Transition as on, isRef as ol, onBeforeMount as Oa, withDirectives as We, vShow as Lt, onUpdated as av, Text as lv, resolveDynamicComponent as fs, toDisplayString as tt, markRaw as si, Teleport as iv, cloneVNode as ov, createTextVNode as mt, normalizeProps as Ea, guardReactiveProps as La, onUnmounted as ms, onBeforeUpdate as rv, withModifiers as Xt, vModelText as sv, resolveComponent as uv, render as gs, openBlock as re, createBlock as Ve, withCtx as Se, createElementBlock as _e, createCommentVNode as $e, useTemplateRef as ui, renderSlot as Ze, renderList as xn, createSlots as ir, mergeModels as cv, useModel as dv } from "vue";
import { defineStore as hs, storeToRefs as ys } from "pinia";
import vv from "vuedraggable";
function bt(e, n) {
  let t;
  function a() {
    t = qn(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), a();
    }) : n());
  }
  ae(e, (l) => {
    l && !t ? a() : l || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), lt(() => {
    t == null || t.stop();
  });
}
const Oe = typeof window < "u", to = Oe && "IntersectionObserver" in window, fv = Oe && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), or = Oe && "EyeDropper" in window, mv = Oe && "matchMedia" in window && typeof window.matchMedia == "function";
function rr(e, n, t) {
  gv(e, n), n.set(e, t);
}
function gv(e, n) {
  if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function sr(e, n, t) {
  return e.set(bs(e, n), t), t;
}
function qt(e, n) {
  return e.get(bs(e, n));
}
function bs(e, n, t) {
  if (typeof e == "function" ? e === n : e.has(n)) return arguments.length < 3 ? n : t;
  throw new TypeError("Private element is not present on this object");
}
function ks(e, n, t) {
  const a = n.length - 1;
  if (a < 0) return e === void 0 ? t : e;
  for (let l = 0; l < a; l++) {
    if (e == null)
      return t;
    e = e[n[l]];
  }
  return e == null || e[n[a]] === void 0 ? t : e[n[a]];
}
function ct(e, n) {
  if (e === n) return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length !== Object.keys(n).length ? !1 : t.every((a) => ct(e[a], n[a]));
}
function Vn(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), ks(e, n.split("."), t));
}
function Qe(e, n, t) {
  if (n === !0) return e === void 0 ? t : e;
  if (n == null || typeof n == "boolean") return t;
  if (e !== Object(e)) {
    if (typeof n != "function") return t;
    const l = n(e, t);
    return typeof l > "u" ? t : l;
  }
  if (typeof n == "string") return Vn(e, n, t);
  if (Array.isArray(n)) return ks(e, n, t);
  if (typeof n != "function") return t;
  const a = n(e, t);
  return typeof a > "u" ? t : a;
}
function _t(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (t, a) => n + a);
}
function oe(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "")
    return;
  const t = Number(e);
  return isNaN(t) ? String(e) : isFinite(t) ? `${t}${n}` : void 0;
}
function ba(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ur(e) {
  let n;
  return e !== null && typeof e == "object" && ((n = Object.getPrototypeOf(e)) === Object.prototype || n === null);
}
function no(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const ci = Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function Ss(e) {
  return Object.keys(e);
}
function yn(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function Jt(e, n) {
  const t = {};
  for (const a of n)
    Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
  return t;
}
function di(e, n, t) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    n.some((o) => o instanceof RegExp ? o.test(i) : o === i) ? a[i] = e[i] : l[i] = e[i];
  return [a, l];
}
function Fe(e, n) {
  const t = {
    ...e
  };
  return n.forEach((a) => delete t[a]), t;
}
const ws = /^on[^a-z]/, ao = (e) => ws.test(e), hv = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], yv = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function bv(e) {
  return e.isComposing && yv.includes(e.key);
}
function dn(e) {
  const [n, t] = di(e, [ws]), a = Fe(n, hv), [l, i] = di(t, ["class", "style", "id", /^data-/]);
  return Object.assign(l, n), Object.assign(i, a), [l, i];
}
function Ue(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Cs(e, n) {
  let t = 0;
  const a = function() {
    for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
      i[o] = arguments[o];
    clearTimeout(t), t = setTimeout(() => e(...i), be(n));
  };
  return a.clear = () => {
    clearTimeout(t);
  }, a.immediate = e, a;
}
function Me(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function cr(e) {
  const n = e.toString().trim();
  return n.includes(".") ? n.length - n.indexOf(".") - 1 : 0;
}
function dr(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + t.repeat(Math.max(0, n - e.length));
}
function vr(e, n) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length)) + e;
}
function kv(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let a = 0;
  for (; a < e.length; )
    t.push(e.substr(a, n)), a += n;
  return t;
}
function fr(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < n)
    return `${e} B`;
  const t = n === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= n && a < t.length - 1; )
    e /= n, ++a;
  return `${e.toFixed(1)} ${t[a]}B`;
}
function ht() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in n) {
    const i = e[l], o = n[l];
    if (ur(i) && ur(o)) {
      a[l] = ht(i, o, t);
      continue;
    }
    if (t && Array.isArray(i) && Array.isArray(o)) {
      a[l] = t(i, o);
      continue;
    }
    a[l] = o;
  }
  return a;
}
function xs(e) {
  return e.map((n) => n.type === ue ? xs(n.children) : n).flat();
}
function Sn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Sn.cache.has(e)) return Sn.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Sn.cache.set(e, n), n;
}
Sn.cache = /* @__PURE__ */ new Map();
function Yn(e, n) {
  if (!n || typeof n != "object") return [];
  if (Array.isArray(n))
    return n.map((t) => Yn(e, t)).flat(1);
  if (n.suspense)
    return Yn(e, n.ssContent);
  if (Array.isArray(n.children))
    return n.children.map((t) => Yn(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return Yn(e, n.component.subTree).flat(1);
  }
  return [];
}
var zn = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap();
class Vs {
  constructor(n) {
    rr(this, zn, []), rr(this, gn, 0), this.size = n;
  }
  get isFull() {
    return qt(zn, this).length === this.size;
  }
  push(n) {
    qt(zn, this)[qt(gn, this)] = n, sr(gn, this, (qt(gn, this) + 1) % this.size);
  }
  values() {
    return qt(zn, this).slice(qt(gn, this)).concat(qt(zn, this).slice(0, qt(gn, this)));
  }
  clear() {
    qt(zn, this).length = 0, sr(gn, this, 0);
  }
}
function Sv(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function lo(e) {
  const n = Ct({});
  je(() => {
    const a = e();
    for (const l in a)
      n[l] = a[l];
  }, {
    flush: "sync"
  });
  const t = {};
  for (const a in n)
    t[a] = E(() => n[a]);
  return t;
}
function rl(e, n) {
  return e.includes(n);
}
function ps(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const dt = () => [Function, Array];
function mr(e, n) {
  return n = "on" + na(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function xl(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...t);
  else typeof e == "function" && e(...t);
}
function ka(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function Ps(e, n, t) {
  let a, l = e.indexOf(document.activeElement);
  const i = n === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !((t == null ? void 0 : t(a)) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function wn(e, n) {
  var a, l, i, o;
  const t = ka(e);
  if (n == null)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = t[0]) == null || a.focus());
  else if (n === "first")
    (l = t[0]) == null || l.focus();
  else if (n === "last")
    (i = t.at(-1)) == null || i.focus();
  else if (typeof n == "number")
    (o = t[n]) == null || o.focus();
  else {
    const r = Ps(t, n);
    r ? r.focus() : wn(e, n === "next" ? "first" : "last");
  }
}
function Qa(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function _s() {
}
function Xn(e, n) {
  if (!(Oe && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${n})`))) return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function Vl(e) {
  return e.some((n) => Qd(n) ? n.type === Jd ? !1 : n.type !== ue || Vl(n.children) : !0) ? e : null;
}
function Kl(e, n, t) {
  return (e == null ? void 0 : e(n)) ?? (t == null ? void 0 : t(n));
}
function wv(e, n) {
  if (!Oe || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function Cv(e, n) {
  const t = e.clientX, a = e.clientY, l = n.getBoundingClientRect(), i = l.left, o = l.top, r = l.right, s = l.bottom;
  return t >= i && t <= r && a >= o && a <= s;
}
function sl() {
  const e = ee(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => no(e.value)
  }), n;
}
function Zn(e) {
  const n = e.key.length === 1, t = !e.ctrlKey && !e.metaKey && !e.altKey;
  return n && t;
}
function vi(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
function fi(e) {
  return "\\^$*+?.()|{}[]".includes(e) ? `\\${e}` : e;
}
function xv(e, n, t) {
  const a = new RegExp(`[\\d\\-${fi(t)}]`), l = e.split("").filter((o) => a.test(o)).filter((o, r, s) => r === 0 && /[-]/.test(o) || // sign allowed at the start
  o === t && r === s.indexOf(o) || // decimal separator allowed only once
  /\d/.test(o)).join("");
  if (n === 0)
    return l.split(t)[0];
  const i = new RegExp(`${fi(t)}\\d`);
  if (n !== null && i.test(l)) {
    const o = l.split(t);
    return [o[0], o[1].substring(0, n)].join(t);
  }
  return l;
}
function Vv(e) {
  const n = {};
  for (const t in e)
    n[Ji(t)] = e[t];
  return n;
}
function pv(e) {
  const n = ["checked", "disabled"];
  return Object.fromEntries(Object.entries(e).filter((t) => {
    let [a, l] = t;
    return n.includes(a) ? !!l : l !== void 0;
  }));
}
const Is = ["top", "bottom"], Pv = ["start", "end", "left", "right"];
function mi(e, n) {
  let [t, a] = e.split(" ");
  return a || (a = rl(Is, t) ? "start" : rl(Pv, t) ? "top" : "center"), {
    side: gi(t, n),
    align: gi(a, n)
  };
}
function gi(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function ql(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function Xl(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function gr(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function hr(e) {
  return rl(Is, e.side) ? "y" : "x";
}
class zt {
  constructor(n) {
    let {
      x: t,
      y: a,
      width: l,
      height: i
    } = n;
    this.x = t, this.y = a, this.width = l, this.height = i;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function yr(e, n) {
  return {
    x: {
      before: Math.max(0, n.left - e.left),
      after: Math.max(0, e.right - n.right)
    },
    y: {
      before: Math.max(0, n.top - e.top),
      after: Math.max(0, e.bottom - n.bottom)
    }
  };
}
function As(e) {
  return Array.isArray(e) ? new zt({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function _v(e) {
  if (e === document.documentElement)
    return visualViewport ? new zt({
      x: visualViewport.scale > 1 ? 0 : visualViewport.offsetLeft,
      y: visualViewport.scale > 1 ? 0 : visualViewport.offsetTop,
      width: visualViewport.width * visualViewport.scale,
      height: visualViewport.height * visualViewport.scale
    }) : new zt({
      x: 0,
      y: 0,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  {
    const n = e.getBoundingClientRect();
    return new zt({
      x: n.x,
      y: n.y,
      width: e.clientWidth,
      height: e.clientHeight
    });
  }
}
function io(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), a = t.transform;
  if (a) {
    let l, i, o, r, s;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), i = Number(l[0]), o = Number(l[5]), r = Number(l[12]), s = Number(l[13]);
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), i = Number(l[0]), o = Number(l[3]), r = Number(l[4]), s = Number(l[5]);
    else
      return new zt(n);
    const c = t.transformOrigin, u = n.x - r - (1 - i) * parseFloat(c), d = n.y - s - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), v = i ? n.width / i : e.offsetWidth + 1, f = o ? n.height / o : e.offsetHeight + 1;
    return new zt({
      x: u,
      y: d,
      width: v,
      height: f
    });
  } else
    return new zt(n);
}
function bn(e, n, t) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let a;
  try {
    a = e.animate(n, t);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof a.finished > "u" && (a.finished = new Promise((l) => {
    a.onfinish = () => {
      l(a);
    };
  })), a;
}
const al = /* @__PURE__ */ new WeakMap();
function Iv(e, n) {
  Object.keys(n).forEach((t) => {
    if (ao(t)) {
      const a = ps(t), l = al.get(e);
      if (n[t] == null)
        l == null || l.forEach((i) => {
          const [o, r] = i;
          o === a && (e.removeEventListener(a, r), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === n[t])) {
        e.addEventListener(a, n[t]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, n[t]]), al.has(e) || al.set(e, i);
      }
    } else
      n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t]);
  });
}
function Av(e, n) {
  Object.keys(n).forEach((t) => {
    if (ao(t)) {
      const a = ps(t), l = al.get(e);
      l == null || l.forEach((i) => {
        const [o, r] = i;
        o === a && (e.removeEventListener(a, r), l.delete(i));
      });
    } else
      e.removeAttribute(t);
  });
}
const Wn = 2.4, br = 0.2126729, kr = 0.7151522, Sr = 0.072175, Tv = 0.55, Dv = 0.58, Bv = 0.57, Ov = 0.62, Ja = 0.03, wr = 1.45, Ev = 5e-4, Lv = 1.25, $v = 1.25, Mv = 0.078, Cr = 12.82051282051282, el = 0.06, Fv = 1e-3;
function xr(e, n) {
  const t = (e.r / 255) ** Wn, a = (e.g / 255) ** Wn, l = (e.b / 255) ** Wn, i = (n.r / 255) ** Wn, o = (n.g / 255) ** Wn, r = (n.b / 255) ** Wn;
  let s = t * br + a * kr + l * Sr, c = i * br + o * kr + r * Sr;
  if (s <= Ja && (s += (Ja - s) ** wr), c <= Ja && (c += (Ja - c) ** wr), Math.abs(c - s) < Ev) return 0;
  let u;
  if (c > s) {
    const d = (c ** Tv - s ** Dv) * Lv;
    u = d < Fv ? 0 : d < Mv ? d - d * Cr * el : d - el;
  } else {
    const d = (c ** Ov - s ** Bv) * $v;
    u = d > -1e-3 ? 0 : d > -0.078 ? d - d * Cr * el : d + el;
  }
  return u * 100;
}
function Tt(e) {
  wl(`Vuetify: ${e}`);
}
function Qn(e) {
  wl(`Vuetify error: ${e}`);
}
function Ts(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, wl(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
const ul = 0.20689655172413793, Rv = (e) => e > ul ** 3 ? Math.cbrt(e) : e / (3 * ul ** 2) + 4 / 29, Nv = (e) => e > ul ? e ** 3 : 3 * ul ** 2 * (e - 4 / 29);
function Ds(e) {
  const n = Rv, t = n(e[1]);
  return [116 * t - 16, 500 * (n(e[0] / 0.95047) - t), 200 * (t - n(e[2] / 1.08883))];
}
function Bs(e) {
  const n = Nv, t = (e[0] + 16) / 116;
  return [n(t + e[1] / 500) * 0.95047, n(t), n(t - e[2] / 200) * 1.08883];
}
const Hv = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], zv = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Wv = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Uv = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Os(e) {
  const n = Array(3), t = zv, a = Hv;
  for (let l = 0; l < 3; ++l)
    n[l] = Math.round(Me(t(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return {
    r: n[0],
    g: n[1],
    b: n[2]
  };
}
function oo(e) {
  let {
    r: n,
    g: t,
    b: a
  } = e;
  const l = [0, 0, 0], i = Uv, o = Wv;
  n = i(n / 255), t = i(t / 255), a = i(a / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = o[r][0] * n + o[r][1] * t + o[r][2] * a;
  return l;
}
function hi(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function jv(e) {
  return hi(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Vr = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Gv = {
  rgb: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  rgba: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  hsl: (e, n, t, a) => pr({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsla: (e, n, t, a) => pr({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsv: (e, n, t, a) => Ut({
    h: e,
    s: n,
    v: t,
    a
  }),
  hsva: (e, n, t, a) => Ut({
    h: e,
    s: n,
    v: t,
    a
  })
};
function It(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Tt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Vr.test(e)) {
    const {
      groups: n
    } = e.match(Vr), {
      fn: t,
      values: a
    } = n, l = a.split(/,\s*|\s*\/\s*|\s+/).map((i, o) => i.endsWith("%") || // unitless slv are %
    o > 0 && o < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(i) / 100 : parseFloat(i));
    return Gv[t](...l);
  } else if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((a) => a + a).join("") : [6, 8].includes(n.length) || Tt(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && Tt(`'${e}' is not a valid hex(a) color`), Ms(n);
  } else if (typeof e == "object") {
    if (yn(e, ["r", "g", "b"]))
      return e;
    if (yn(e, ["h", "s", "l"]))
      return Ut(ro(e));
    if (yn(e, ["h", "s", "v"]))
      return Ut(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Ut(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, i = (r) => {
    const s = (r + n / 60) % 6;
    return a - a * t * Math.max(Math.min(s, 4 - s, 1), 0);
  }, o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: l
  };
}
function pr(e) {
  return Ut(ro(e));
}
function $a(e) {
  if (!e) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const n = e.r / 255, t = e.g / 255, a = e.b / 255, l = Math.max(n, t, a), i = Math.min(n, t, a);
  let o = 0;
  l !== i && (l === n ? o = 60 * (0 + (t - a) / (l - i)) : l === t ? o = 60 * (2 + (a - n) / (l - i)) : l === a && (o = 60 * (4 + (n - t) / (l - i)))), o < 0 && (o = o + 360);
  const r = l === 0 ? 0 : (l - i) / l, s = [o, r, l];
  return {
    h: s[0],
    s: s[1],
    v: s[2],
    a: e.a
  };
}
function yi(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, i = a - a * t / 2, o = i === 1 || i === 0 ? 0 : (a - i) / Math.min(i, 1 - i);
  return {
    h: n,
    s: o,
    l: i,
    a: l
  };
}
function ro(e) {
  const {
    h: n,
    s: t,
    l: a,
    a: l
  } = e, i = a + t * Math.min(a, 1 - a), o = i === 0 ? 0 : 2 - 2 * a / i;
  return {
    h: n,
    s: o,
    v: i,
    a: l
  };
}
function Es(e) {
  let {
    r: n,
    g: t,
    b: a,
    a: l
  } = e;
  return l === void 0 ? `rgb(${n}, ${t}, ${a})` : `rgba(${n}, ${t}, ${a}, ${l})`;
}
function Ls(e) {
  return Es(Ut(e));
}
function tl(e) {
  const n = Math.round(e).toString(16);
  return ("00".substr(0, 2 - n.length) + n).toUpperCase();
}
function $s(e) {
  let {
    r: n,
    g: t,
    b: a,
    a: l
  } = e;
  return `#${[tl(n), tl(t), tl(a), l !== void 0 ? tl(Math.round(l * 255)) : ""].join("")}`;
}
function Ms(e) {
  e = Kv(e);
  let [n, t, a, l] = kv(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: n,
    g: t,
    b: a,
    a: l
  };
}
function Yv(e) {
  const n = Ms(e);
  return $a(n);
}
function Fs(e) {
  return $s(Ut(e));
}
function Kv(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((n) => n + n).join("")), e.length !== 6 && (e = dr(dr(e, 6), 8, "F")), e;
}
function qv(e, n) {
  const t = Ds(oo(e));
  return t[0] = t[0] + n * 10, Os(Bs(t));
}
function Xv(e, n) {
  const t = Ds(oo(e));
  return t[0] = t[0] - n * 10, Os(Bs(t));
}
function bi(e) {
  const n = It(e);
  return oo(n)[1];
}
function Zv(e, n) {
  const t = bi(e), a = bi(n), l = Math.max(t, a), i = Math.min(t, a);
  return (l + 0.05) / (i + 0.05);
}
function Rs(e) {
  const n = Math.abs(xr(It(0), It(e)));
  return Math.abs(xr(It(16777215), It(e))) > Math.min(n, 50) ? "#fff" : "#000";
}
function F(e, n) {
  return (t) => Object.keys(e).reduce((a, l) => {
    const o = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return t && l in t ? a[l] = {
      ...o,
      default: t[l]
    } : a[l] = o, n && !a[l].source && (a[l].source = n), a;
  }, {});
}
const se = F({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function Xe(e, n) {
  const t = ev();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function Yt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = Xe(e).type;
  return Sn((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
function Qv(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Xe("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const Jn = Symbol.for("vuetify:defaults");
function Jv(e) {
  return j(e);
}
function so() {
  const e = Ie(Jn);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Ge(e, n) {
  const t = so(), a = j(e), l = w(() => {
    if (be(n == null ? void 0 : n.disabled)) return t.value;
    const o = be(n == null ? void 0 : n.scoped), r = be(n == null ? void 0 : n.reset), s = be(n == null ? void 0 : n.root);
    if (a.value == null && !(o || r || s)) return t.value;
    let c = ht(a.value, {
      prev: t.value
    });
    if (o) return c;
    if (r || s) {
      const u = Number(r || 1 / 0);
      for (let d = 0; d <= u && !(!c || !("prev" in c)); d++)
        c = c.prev;
      return c && typeof s == "string" && s in c && (c = ht(ht(c, {
        prev: c
      }), c[s])), c;
    }
    return c.prev ? ht(c.prev, c) : c;
  });
  return Re(Jn, l), l;
}
function ef(e, n) {
  return e.props && (typeof e.props[n] < "u" || typeof e.props[Sn(n)] < "u");
}
function tf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : so();
  const a = Xe("useDefaults");
  if (n = n ?? a.type.name ?? a.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const l = w(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? n];
  }), i = new Proxy(e, {
    get(s, c) {
      var f, g, b, m;
      const u = Reflect.get(s, c);
      if (c === "class" || c === "style")
        return [(f = l.value) == null ? void 0 : f[c], u].filter((y) => y != null);
      if (ef(a.vnode, c)) return u;
      const d = (g = l.value) == null ? void 0 : g[c];
      if (d !== void 0) return d;
      const v = (m = (b = t.value) == null ? void 0 : b.global) == null ? void 0 : m[c];
      return v !== void 0 ? v : u;
    }
  }), o = ee();
  je(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((c) => {
        let [u] = c;
        return u.startsWith(u[0].toUpperCase());
      });
      o.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      o.value = void 0;
  });
  function r() {
    const s = Qv(Jn, a);
    Re(Jn, w(() => o.value ? ht((s == null ? void 0 : s.value) ?? {}, o.value) : s == null ? void 0 : s.value));
  }
  return {
    props: i,
    provideSubDefaults: r
  };
}
function Bt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Tt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = F(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(a) {
      return Jt(a, n);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = so();
      if (!i.value) return e._setup(a, l);
      const {
        props: o,
        provideSubDefaults: r
      } = tf(a, a._as ?? e.name, i), s = e._setup(o, l);
      return r(), s;
    };
  }
  return e;
}
function W() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (n) => (e ? Bt : qe)(n);
}
function nf(e, n) {
  return n.props = e, n;
}
function en(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return W()({
    name: t ?? na(Ji(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: n
      },
      ...se()
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => {
        var o;
        return cn(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function Ns(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({
    composed: !0
  }) !== document ? null : n;
}
const Sa = "cubic-bezier(0.4, 0, 0.2, 1)", af = "cubic-bezier(0.0, 0, 0.2, 1)", lf = "cubic-bezier(0.4, 0, 1, 1)";
function Pr(e, n, t) {
  return Object.keys(e).filter((a) => ao(a) && a.endsWith(n)).reduce((a, l) => (a[l.slice(0, -n.length)] = (i) => e[l](i, t(i)), a), {});
}
function uo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? of(e) : co(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function cl(e, n) {
  const t = [];
  if (n && e && !n.contains(e)) return t;
  for (; e && (co(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function co(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function of(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function rf(e) {
  let {
    depth: n,
    isLast: t,
    isLastGroup: a,
    leafLinks: l,
    separateRoots: i,
    parentIndentLines: o,
    variant: r
  } = e;
  if (!o || !n)
    return {
      leaf: void 0,
      node: void 0,
      children: o
    };
  if (r === "simple")
    return {
      leaf: [...o, "line"],
      node: [...o, "line"],
      children: [...o, "line"]
    };
  const s = t && (!a || i || n > 1);
  return {
    leaf: [...o, s ? "last-leaf" : "leaf", ...l ? ["leaf-link"] : []],
    node: [...o, s ? "last-leaf" : "leaf"],
    children: [...o, s ? "none" : "line"]
  };
}
function sf(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function G(e) {
  const n = Xe("useRender");
  n.render = e;
}
function de(e, n, t) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d;
  const i = Xe("useProxiedModel"), o = j(e[n] !== void 0 ? e[n] : t), r = Sn(n), c = r !== n ? w(() => {
    var d, v, f, g;
    return e[n], !!(((d = i.vnode.props) != null && d.hasOwnProperty(n) || (v = i.vnode.props) != null && v.hasOwnProperty(r)) && ((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${n}`) || (g = i.vnode.props) != null && g.hasOwnProperty(`onUpdate:${r}`)));
  }) : w(() => {
    var d, v;
    return e[n], !!((d = i.vnode.props) != null && d.hasOwnProperty(n) && ((v = i.vnode.props) != null && v.hasOwnProperty(`onUpdate:${n}`)));
  });
  bt(() => !c.value, () => {
    ae(() => e[n], (d) => {
      o.value = d;
    });
  });
  const u = w({
    get() {
      const d = e[n];
      return a(c.value ? d : o.value);
    },
    set(d) {
      const v = l(d), f = Ke(c.value ? e[n] : o.value);
      f === v || a(f) === d || (o.value = v, i == null || i.emit(`update:${n}`, v));
    }
  });
  return Object.defineProperty(u, "externalValue", {
    get: () => c.value ? e[n] : o.value
  }), u;
}
const uf = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dismiss: "Dismiss",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  fileUpload: {
    title: "Drag and drop files here",
    divider: "or",
    browse: "Browse Files"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  },
  rules: {
    required: "This field is required",
    email: "Please enter a valid email",
    number: "This field can only contain numbers",
    integer: "This field can only contain integer values",
    capital: "This field can only contain uppercase letters",
    maxLength: "You must enter a maximum of {0} characters",
    minLength: "You must enter a minimum of {0} characters",
    strictLength: "The length of the entered field is invalid",
    exclude: "The {0} character is not allowed",
    notEmpty: "Please choose at least one value",
    pattern: "Invalid format"
  },
  hotkey: {
    then: "then",
    ctrl: "Ctrl",
    command: "Command",
    space: "Space",
    shift: "Shift",
    alt: "Alt",
    enter: "Enter",
    escape: "Escape",
    upArrow: "Up Arrow",
    downArrow: "Down Arrow",
    leftArrow: "Left Arrow",
    rightArrow: "Right Arrow",
    backspace: "Backspace",
    option: "Option",
    plus: "plus",
    shortcut: "Keyboard shortcut: {0}"
  }
}, _r = "$vuetify.", Ir = (e, n) => e.replace(/\{(\d+)\}/g, (t, a) => String(n[Number(a)])), Hs = (e, n, t) => function(a) {
  for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), o = 1; o < l; o++)
    i[o - 1] = arguments[o];
  if (!a.startsWith(_r))
    return Ir(a, i);
  const r = a.replace(_r, ""), s = e.value && t.value[e.value], c = n.value && t.value[n.value];
  let u = Vn(s, r, null);
  return u || (Tt(`Translation key "${a}" not found in "${e.value}", trying fallback locale`), u = Vn(c, r, null)), u || (Qn(`Translation key "${a}" not found in fallback`), u = a), typeof u != "string" && (Qn(`Translation key "${a}" has a non-string value`), u = a), Ir(u, i);
};
function vo(e, n) {
  return (t, a) => new Intl.NumberFormat([e.value, n.value], a).format(t);
}
function zs(e, n) {
  return vo(e, n)(0.1).includes(",") ? "," : ".";
}
function Zl(e, n, t) {
  const a = de(e, n, e[n] ?? t.value);
  return a.value = e[n] ?? t.value, ae(t, (l) => {
    e[n] == null && (a.value = t.value);
  }), a;
}
function Ws(e) {
  return (n) => {
    const t = Zl(n, "locale", e.current), a = Zl(n, "fallback", e.fallback), l = Zl(n, "messages", e.messages);
    return {
      name: "vuetify",
      current: t,
      fallback: a,
      messages: l,
      decimalSeparator: E(() => zs(t, a)),
      t: Hs(t, a, l),
      n: vo(t, a),
      provide: Ws({
        current: t,
        fallback: a,
        messages: l
      })
    };
  };
}
function cf(e) {
  const n = ee((e == null ? void 0 : e.locale) ?? "en"), t = ee((e == null ? void 0 : e.fallback) ?? "en"), a = j({
    en: uf,
    ...e == null ? void 0 : e.messages
  });
  return {
    name: "vuetify",
    current: n,
    fallback: t,
    messages: a,
    decimalSeparator: E(() => (e == null ? void 0 : e.decimalSeparator) ?? zs(n, t)),
    t: Hs(n, t, a),
    n: vo(n, t),
    provide: Ws({
      current: n,
      fallback: t,
      messages: a
    })
  };
}
const ea = Symbol.for("vuetify:locale");
function df(e) {
  return e.name != null;
}
function vf(e) {
  const n = e != null && e.adapter && df(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : cf(e), t = gf(n, e);
  return {
    ...n,
    ...t
  };
}
function Ne() {
  const e = Ie(ea);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function ff(e) {
  const n = Ie(ea);
  if (!n) throw new Error("[Vuetify] Could not find injected locale instance");
  const t = n.provide(e), a = hf(t, n.rtl, e), l = {
    ...t,
    ...a
  };
  return Re(ea, l), l;
}
function mf() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function gf(e, n) {
  const t = j((n == null ? void 0 : n.rtl) ?? mf()), a = w(() => t.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: t,
    rtlClasses: E(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function hf(e, n, t) {
  const a = w(() => t.rtl ?? n.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: E(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function nt() {
  const e = Ie(ea);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
function Ma(e) {
  const n = e.slice(-2).toUpperCase();
  switch (!0) {
    case e === "GB-alt-variant":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    case e === "001":
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(n):
      return {
        firstDay: 0,
        firstWeekSize: 1
      };
    case `AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(n):
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(n):
      return {
        firstDay: 1,
        firstWeekSize: 4
      };
    case "AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY".includes(n):
      return {
        firstDay: 6,
        firstWeekSize: 1
      };
    case n === "MV":
      return {
        firstDay: 5,
        firstWeekSize: 1
      };
    case n === "PT":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    default:
      return null;
  }
}
function yf(e, n, t) {
  var u;
  const a = [];
  let l = [];
  const i = Us(e), o = js(e), r = t ?? ((u = Ma(n)) == null ? void 0 : u.firstDay) ?? 0, s = (i.getDay() - r + 7) % 7, c = (o.getDay() - r + 7) % 7;
  for (let d = 0; d < s; d++) {
    const v = new Date(i);
    v.setDate(v.getDate() - (s - d)), l.push(v);
  }
  for (let d = 1; d <= o.getDate(); d++) {
    const v = new Date(e.getFullYear(), e.getMonth(), d);
    l.push(v), l.length === 7 && (a.push(l), l = []);
  }
  for (let d = 1; d < 7 - c; d++) {
    const v = new Date(o);
    v.setDate(v.getDate() + d), l.push(v);
  }
  return l.length > 0 && a.push(l), a;
}
function ki(e, n, t) {
  var i;
  const a = t ?? ((i = Ma(n)) == null ? void 0 : i.firstDay) ?? 0, l = new Date(e);
  for (; l.getDay() !== a; )
    l.setDate(l.getDate() - 1);
  return l;
}
function bf(e, n) {
  var l;
  const t = new Date(e), a = ((((l = Ma(n)) == null ? void 0 : l.firstDay) ?? 0) + 6) % 7;
  for (; t.getDay() !== a; )
    t.setDate(t.getDate() + 1);
  return t;
}
function Us(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function js(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function kf(e) {
  const n = e.split("-").map(Number);
  return new Date(n[0], n[1] - 1, n[2]);
}
const Sf = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function Gs(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let n;
    if (Sf.test(e))
      return kf(e);
    if (n = Date.parse(e), !isNaN(n)) return new Date(n);
  }
  return null;
}
const Ar = new Date(2e3, 0, 2);
function wf(e, n, t) {
  var l;
  const a = n ?? ((l = Ma(e)) == null ? void 0 : l.firstDay) ?? 0;
  return _t(7).map((i) => {
    const o = new Date(Ar);
    return o.setDate(Ar.getDate() + a + i), new Intl.DateTimeFormat(e, {
      weekday: t ?? "narrow"
    }).format(o);
  });
}
function Cf(e, n, t, a) {
  const l = Gs(e) ?? /* @__PURE__ */ new Date(), i = a == null ? void 0 : a[n];
  if (typeof i == "function")
    return i(l, n, t);
  let o = {};
  switch (n) {
    case "fullDate":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      o = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const r = l.getDate(), s = new Intl.DateTimeFormat(t, {
        month: "long"
      }).format(l);
      return `${r} ${s}`;
    case "normalDateWithWeekday":
      o = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      o = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      o = {
        year: "numeric"
      };
      break;
    case "month":
      o = {
        month: "long"
      };
      break;
    case "monthShort":
      o = {
        month: "short"
      };
      break;
    case "monthAndYear":
      o = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      o = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      o = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      o = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(t).format(l.getDate());
    case "hours12h":
      o = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      o = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      o = {
        minute: "numeric"
      };
      break;
    case "seconds":
      o = {
        second: "numeric"
      };
      break;
    case "fullTime":
      o = {
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullTime12h":
      o = {
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      o = {
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullDateTime12h":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric"
      }, new Intl.DateTimeFormat(t, o).format(l).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      }, new Intl.DateTimeFormat(t, o).format(l).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      }, new Intl.DateTimeFormat(t, o).format(l).replace(/, /g, " ");
    default:
      o = i ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(t, o).format(l);
}
function xf(e, n) {
  const t = e.toJsDate(n), a = t.getFullYear(), l = vr(String(t.getMonth() + 1), 2, "0"), i = vr(String(t.getDate()), 2, "0");
  return `${a}-${l}-${i}`;
}
function Vf(e) {
  const [n, t, a] = e.split("-").map(Number);
  return new Date(n, t - 1, a);
}
function pf(e, n) {
  const t = new Date(e);
  return t.setMinutes(t.getMinutes() + n), t;
}
function Pf(e, n) {
  const t = new Date(e);
  return t.setHours(t.getHours() + n), t;
}
function ll(e, n) {
  const t = new Date(e);
  return t.setDate(t.getDate() + n), t;
}
function _f(e, n) {
  const t = new Date(e);
  return t.setDate(t.getDate() + n * 7), t;
}
function If(e, n) {
  const t = new Date(e);
  return t.setDate(1), t.setMonth(t.getMonth() + n), t;
}
function Si(e) {
  return e.getFullYear();
}
function Af(e) {
  return e.getMonth();
}
function Tf(e, n, t, a) {
  const l = Ma(n), i = t ?? (l == null ? void 0 : l.firstDay) ?? 0, o = a ?? (l == null ? void 0 : l.firstWeekSize) ?? 1;
  function r(f) {
    const g = new Date(f, 0, 1);
    return 7 - wi(g, ki(g, n, i), "days");
  }
  let s = Si(e);
  const c = ll(ki(e, n, i), 6);
  s < Si(c) && r(s + 1) >= o && s++;
  const u = new Date(s, 0, 1), d = r(s), v = d >= o ? ll(u, d - 7) : ll(u, d);
  return 1 + wi(Ys(e), vl(v), "weeks");
}
function Df(e) {
  return e.getDate();
}
function Bf(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function Of(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function Ef(e) {
  return e.getHours();
}
function Lf(e) {
  return e.getMinutes();
}
function $f(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function Mf(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function Ff(e, n) {
  return dl(e, n[0]) && Hf(e, n[1]);
}
function Rf(e) {
  const n = new Date(e);
  return n instanceof Date && !isNaN(n.getTime());
}
function dl(e, n) {
  return e.getTime() > n.getTime();
}
function Nf(e, n) {
  return dl(vl(e), vl(n));
}
function Hf(e, n) {
  return e.getTime() < n.getTime();
}
function Tr(e, n) {
  return e.getTime() === n.getTime();
}
function zf(e, n) {
  return e.getDate() === n.getDate() && e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear();
}
function Wf(e, n) {
  return e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear();
}
function Uf(e, n) {
  return e.getFullYear() === n.getFullYear();
}
function wi(e, n, t) {
  const a = new Date(e), l = new Date(n);
  switch (t) {
    case "years":
      return a.getFullYear() - l.getFullYear();
    case "quarters":
      return Math.floor((a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12) / 4);
    case "months":
      return a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12;
    case "weeks":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((a.getTime() - l.getTime()) / 1e3);
    default:
      return a.getTime() - l.getTime();
  }
}
function jf(e, n) {
  const t = new Date(e);
  return t.setHours(n), t;
}
function Gf(e, n) {
  const t = new Date(e);
  return t.setMinutes(n), t;
}
function Yf(e, n) {
  const t = new Date(e);
  return t.setMonth(n), t;
}
function Kf(e, n) {
  const t = new Date(e);
  return t.setDate(n), t;
}
function qf(e, n) {
  const t = new Date(e);
  return t.setFullYear(n), t;
}
function vl(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Ys(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class Xf {
  constructor(n) {
    this.locale = n.locale, this.formats = n.formats;
  }
  date(n) {
    return Gs(n);
  }
  toJsDate(n) {
    return n;
  }
  toISO(n) {
    return xf(this, n);
  }
  parseISO(n) {
    return Vf(n);
  }
  addMinutes(n, t) {
    return pf(n, t);
  }
  addHours(n, t) {
    return Pf(n, t);
  }
  addDays(n, t) {
    return ll(n, t);
  }
  addWeeks(n, t) {
    return _f(n, t);
  }
  addMonths(n, t) {
    return If(n, t);
  }
  getWeekArray(n, t) {
    const a = t !== void 0 ? Number(t) : void 0;
    return yf(n, this.locale, a);
  }
  startOfWeek(n, t) {
    const a = t !== void 0 ? Number(t) : void 0;
    return ki(n, this.locale, a);
  }
  endOfWeek(n) {
    return bf(n, this.locale);
  }
  startOfMonth(n) {
    return Us(n);
  }
  endOfMonth(n) {
    return js(n);
  }
  format(n, t) {
    return Cf(n, t, this.locale, this.formats);
  }
  isEqual(n, t) {
    return Tr(n, t);
  }
  isValid(n) {
    return Rf(n);
  }
  isWithinRange(n, t) {
    return Ff(n, t);
  }
  isAfter(n, t) {
    return dl(n, t);
  }
  isAfterDay(n, t) {
    return Nf(n, t);
  }
  isBefore(n, t) {
    return !dl(n, t) && !Tr(n, t);
  }
  isSameDay(n, t) {
    return zf(n, t);
  }
  isSameMonth(n, t) {
    return Wf(n, t);
  }
  isSameYear(n, t) {
    return Uf(n, t);
  }
  setMinutes(n, t) {
    return Gf(n, t);
  }
  setHours(n, t) {
    return jf(n, t);
  }
  setMonth(n, t) {
    return Yf(n, t);
  }
  setDate(n, t) {
    return Kf(n, t);
  }
  setYear(n, t) {
    return qf(n, t);
  }
  getDiff(n, t, a) {
    return wi(n, t, a);
  }
  getWeekdays(n, t) {
    const a = n !== void 0 ? Number(n) : void 0;
    return wf(this.locale, a, t);
  }
  getYear(n) {
    return Si(n);
  }
  getMonth(n) {
    return Af(n);
  }
  getWeek(n, t, a) {
    const l = t !== void 0 ? Number(t) : void 0;
    return Tf(n, this.locale, l, a);
  }
  getDate(n) {
    return Df(n);
  }
  getNextMonth(n) {
    return Bf(n);
  }
  getPreviousMonth(n) {
    return Of(n);
  }
  getHours(n) {
    return Ef(n);
  }
  getMinutes(n) {
    return Lf(n);
  }
  startOfDay(n) {
    return vl(n);
  }
  endOfDay(n) {
    return Ys(n);
  }
  startOfYear(n) {
    return $f(n);
  }
  endOfYear(n) {
    return Mf(n);
  }
}
const Ks = Symbol.for("vuetify:date-options"), Dr = Symbol.for("vuetify:date-adapter");
function Zf(e, n) {
  const t = ht({
    adapter: Xf,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: t,
    instance: qs(t, n)
  };
}
function Qf(e, n, t) {
  const a = e.getDiff(e.endOfDay(t ?? n), e.startOfDay(n), "days"), l = [n];
  for (let i = 1; i < a; i++) {
    const o = e.addDays(n, i);
    l.push(o);
  }
  return t && l.push(e.endOfDay(t)), l;
}
function qs(e, n) {
  const t = Ct(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[n.current.value] ?? n.current.value,
    formats: e.formats
  }) : e.adapter);
  return ae(n.current, (a) => {
    t.locale = e.locale[a] ?? a ?? t.locale;
  }), t;
}
function Fa() {
  const e = Ie(Ks);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const n = Ne();
  return qs(e, n);
}
const pl = ["sm", "md", "lg", "xl", "xxl"], Ci = Symbol.for("vuetify:display"), Br = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, Jf = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Br;
  return ht(Br, e);
};
function Or(e) {
  return Oe && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Er(e) {
  return Oe && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Lr(e) {
  const n = Oe && !e ? window.navigator.userAgent : "ssr";
  function t(g) {
    return !!n.match(g);
  }
  const a = t(/android/i), l = t(/iphone|ipad|ipod/i), i = t(/cordova/i), o = t(/electron/i), r = t(/chrome/i), s = t(/edge/i), c = t(/firefox/i), u = t(/opera/i), d = t(/win/i), v = t(/mac/i), f = t(/linux/i);
  return {
    android: a,
    ios: l,
    cordova: i,
    electron: o,
    chrome: r,
    edge: s,
    firefox: c,
    opera: u,
    win: d,
    mac: v,
    linux: f,
    touch: fv,
    ssr: n === "ssr"
  };
}
function em(e, n) {
  const {
    thresholds: t,
    mobileBreakpoint: a
  } = Jf(e), l = ee(Er(n)), i = ee(Lr(n)), o = Ct({}), r = ee(Or(n));
  function s() {
    l.value = Er(), r.value = Or();
  }
  function c() {
    s(), i.value = Lr();
  }
  return je(() => {
    const u = r.value < t.sm, d = r.value < t.md && !u, v = r.value < t.lg && !(d || u), f = r.value < t.xl && !(v || d || u), g = r.value < t.xxl && !(f || v || d || u), b = r.value >= t.xxl, m = u ? "xs" : d ? "sm" : v ? "md" : f ? "lg" : g ? "xl" : "xxl", y = typeof a == "number" ? a : t[a], h = r.value < y;
    o.xs = u, o.sm = d, o.md = v, o.lg = f, o.xl = g, o.xxl = b, o.smAndUp = !u, o.mdAndUp = !(u || d), o.lgAndUp = !(u || d || v), o.xlAndUp = !(u || d || v || f), o.smAndDown = !(v || f || g || b), o.mdAndDown = !(f || g || b), o.lgAndDown = !(g || b), o.xlAndDown = !b, o.name = m, o.height = l.value, o.width = r.value, o.mobile = h, o.mobileBreakpoint = a, o.platform = i.value, o.thresholds = t;
  }), Oe && (window.addEventListener("resize", s, {
    passive: !0
  }), lt(() => {
    window.removeEventListener("resize", s);
  }, !0)), {
    ...aa(o),
    update: c,
    ssr: !!n
  };
}
const Bn = F({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function $t() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yt();
  const t = Ie(Ci);
  if (!t) throw new Error("Could not find Vuetify display injection");
  const a = w(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? t.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? t.width.value < t.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? t.mobile.value : !1), l = E(() => n ? {
    [`${n}--mobile`]: a.value
  } : {});
  return {
    ...t,
    displayClasses: l,
    mobile: a
  };
}
const Xs = Symbol.for("vuetify:goto");
function Zs() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => --e ** 3 + 1,
      easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - --e ** 4,
      easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + --e ** 5,
      easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
    }
  };
}
function tm(e) {
  return fo(e) ?? (document.scrollingElement || document.body);
}
function fo(e) {
  return typeof e == "string" ? document.querySelector(e) : no(e);
}
function Ql(e, n, t) {
  if (typeof e == "number") return n && t ? -e : e;
  let a = fo(e), l = 0;
  for (; a; )
    l += n ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function nm(e, n) {
  return {
    rtl: n.isRtl,
    options: ht(Zs(), e)
  };
}
async function $r(e, n, t, a) {
  const l = t ? "scrollLeft" : "scrollTop", i = ht((a == null ? void 0 : a.options) ?? Zs(), n), o = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : fo(e)) ?? 0, s = i.container === "parent" && r instanceof HTMLElement ? r.parentElement : tm(i.container), c = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!c) throw new TypeError(`Easing function "${i.easing}" not found.`);
  let u;
  if (typeof r == "number")
    u = Ql(r, t, o);
  else if (u = Ql(r, t, o) - Ql(s, t, o), i.layout) {
    const g = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    g && (u -= parseInt(g, 10));
  }
  u += i.offset, u = lm(s, u, !!o, !!t);
  const d = s[l] ?? 0;
  if (u === d) return Promise.resolve(u);
  const v = performance.now();
  return new Promise((f) => requestAnimationFrame(function g(b) {
    const y = (b - v) / i.duration, h = Math.floor(d + (u - d) * c(Me(y, 0, 1)));
    if (s[l] = h, y >= 1 && Math.abs(h - s[l]) < 10)
      return f(u);
    if (y > 2)
      return Tt("Scroll target is not reachable"), f(s[l]);
    requestAnimationFrame(g);
  }));
}
function am() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = Ie(Xs), {
    isRtl: t
  } = nt();
  if (!n) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = {
    ...n,
    // can be set via VLocaleProvider
    rtl: E(() => n.rtl.value || t.value)
  };
  async function l(i, o) {
    return $r(i, ht(e, o), !1, a);
  }
  return l.horizontal = async (i, o) => $r(i, ht(e, o), !0, a), l;
}
function lm(e, n, t, a) {
  const {
    scrollWidth: l,
    scrollHeight: i
  } = e, [o, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, c;
  return a ? t ? (s = -(l - o), c = 0) : (s = 0, c = l - o) : (s = 0, c = i + -r), Me(n, s, c);
}
const im = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  eyeDropper: "mdi-eyedropper",
  upload: "mdi-cloud-upload",
  color: "mdi-palette",
  command: "mdi-apple-keyboard-command",
  ctrl: "mdi-apple-keyboard-control",
  space: "mdi-keyboard-space",
  shift: "mdi-apple-keyboard-shift",
  alt: "mdi-apple-keyboard-option",
  enter: "mdi-keyboard-return",
  arrowup: "mdi-arrow-up",
  arrowdown: "mdi-arrow-down",
  arrowleft: "mdi-arrow-left",
  arrowright: "mdi-arrow-right",
  backspace: "mdi-backspace"
}, om = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => cn(go, {
    ...e,
    class: "mdi"
  })
}, fe = [String, Function, Object, Array], xi = Symbol.for("vuetify:icons"), Pl = F({
  icon: {
    type: fe
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: !0
  }
}, "icon"), Vi = W()({
  name: "VComponentIcon",
  props: Pl(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return () => {
      const a = e.icon;
      return k(e.tag, null, {
        default: () => {
          var l;
          return [e.icon ? k(a, null, null) : (l = t.default) == null ? void 0 : l.call(t)];
        }
      });
    };
  }
}), mo = Bt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Pl(),
  setup(e, n) {
    let {
      attrs: t
    } = n;
    return () => k(e.tag, H(t, {
      style: null
    }), {
      default: () => [S("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? S("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : S("path", {
        d: a
      }, null)) : S("path", {
        d: e.icon
      }, null)])]
    });
  }
}), rm = Bt({
  name: "VLigatureIcon",
  props: Pl(),
  setup(e) {
    return () => k(e.tag, null, {
      default: () => [e.icon]
    });
  }
}), go = Bt({
  name: "VClassIcon",
  props: Pl(),
  setup(e) {
    return () => k(e.tag, {
      class: z(e.icon)
    }, null);
  }
});
function sm() {
  return {
    svg: {
      component: mo
    },
    class: {
      component: go
    }
  };
}
function um(e) {
  const n = sm(), t = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return t === "mdi" && !n.mdi && (n.mdi = om), ht({
    defaultSet: t,
    sets: n,
    aliases: {
      ...im,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, e);
}
const cm = (e) => {
  const n = Ie(xi);
  if (!n) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: w(() => {
      var s;
      const a = Wt(e);
      if (!a) return {
        component: Vi
      };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (s = n.aliases) == null ? void 0 : s[l.slice(1)])), l || Tt(`Could not find aliased icon "${a}"`), Array.isArray(l))
        return {
          component: mo,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: Vi,
          icon: l
        };
      const i = Object.keys(n.sets).find((c) => typeof l == "string" && l.startsWith(`${c}:`)), o = i ? l.slice(i.length + 1) : l;
      return {
        component: n.sets[i ?? n.defaultSet].component,
        icon: o
      };
    })
  };
}, wa = Symbol.for("vuetify:theme"), Ae = F({
  theme: String
}, "theme");
function Mr() {
  return {
    defaultTheme: "light",
    prefix: "v-",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#EEEEEE",
          "theme-on-kbd": "#000000",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#c8c8c8",
          "on-surface-variant": "#000000",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#424242",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    },
    stylesheetId: "vuetify-theme-stylesheet",
    scoped: !1,
    unimportant: !1,
    utilities: !0
  };
}
function dm() {
  var a, l;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Mr();
  const n = Mr();
  if (!e) return {
    ...n,
    isDisabled: !0
  };
  const t = {};
  for (const [i, o] of Object.entries(e.themes ?? {})) {
    const r = o.dark || i === "dark" ? (a = n.themes) == null ? void 0 : a.dark : (l = n.themes) == null ? void 0 : l.light;
    t[i] = ht(r, o);
  }
  return ht(n, {
    ...e,
    themes: t
  });
}
function hn(e, n, t, a) {
  e.push(`${gm(n, a)} {
`, ...t.map((l) => `  ${l};
`), `}
`);
}
function Fr(e, n) {
  const t = e.dark ? 2 : 1, a = e.dark ? 1 : 2, l = [];
  for (const [i, o] of Object.entries(e.colors)) {
    const r = It(o);
    l.push(`--${n}theme-${i}: ${r.r},${r.g},${r.b}`), i.startsWith("on-") || l.push(`--${n}theme-${i}-overlay-multiplier: ${bi(o) > 0.18 ? t : a}`);
  }
  for (const [i, o] of Object.entries(e.variables)) {
    const r = typeof o == "string" && o.startsWith("#") ? It(o) : void 0, s = r ? `${r.r}, ${r.g}, ${r.b}` : void 0;
    l.push(`--${n}${i}: ${s ?? o}`);
  }
  return l;
}
function vm(e, n, t) {
  const a = {};
  if (t)
    for (const l of ["lighten", "darken"]) {
      const i = l === "lighten" ? qv : Xv;
      for (const o of _t(t[l], 1))
        a[`${e}-${l}-${o}`] = $s(i(It(n), o));
    }
  return a;
}
function fm(e, n) {
  if (!n) return {};
  let t = {};
  for (const a of n.colors) {
    const l = e[a];
    l && (t = {
      ...t,
      ...vm(a, l, n)
    });
  }
  return t;
}
function mm(e) {
  const n = {};
  for (const t of Object.keys(e)) {
    if (t.startsWith("on-") || e[`on-${t}`]) continue;
    const a = `on-${t}`, l = It(e[t]);
    n[a] = Rs(l);
  }
  return n;
}
function gm(e, n) {
  if (!n) return e;
  const t = `:where(${n})`;
  return e === ":root" ? t : `${t} ${e}`;
}
function hm(e, n, t) {
  const a = ym(e, n);
  a && (a.innerHTML = t);
}
function ym(e, n) {
  if (!Oe) return null;
  let t = document.getElementById(e);
  return t || (t = document.createElement("style"), t.id = e, t.type = "text/css", n && t.setAttribute("nonce", n), document.head.appendChild(t)), t;
}
function bm(e) {
  const n = dm(e), t = ee(n.defaultTheme), a = j(n.themes), l = ee("light"), i = w({
    get() {
      return t.value === "system" ? l.value : t.value;
    },
    set(m) {
      t.value = m;
    }
  }), o = w(() => {
    const m = {};
    for (const [y, h] of Object.entries(a.value)) {
      const C = {
        ...h.colors,
        ...fm(h.colors, n.variations)
      };
      m[y] = {
        ...h,
        colors: {
          ...C,
          ...mm(C)
        }
      };
    }
    return m;
  }), r = E(() => o.value[i.value]), s = w(() => {
    var C;
    const m = [], y = n.unimportant ? "" : " !important", h = n.scoped ? n.prefix : "";
    (C = r.value) != null && C.dark && hn(m, ":root", ["color-scheme: dark"], n.scope), hn(m, ":root", Fr(r.value, n.prefix), n.scope);
    for (const [p, _] of Object.entries(o.value))
      hn(m, `.${n.prefix}theme--${p}`, [`color-scheme: ${_.dark ? "dark" : "normal"}`, ...Fr(_, n.prefix)], n.scope);
    if (n.utilities) {
      const p = [], _ = [], P = new Set(Object.values(o.value).flatMap((I) => Object.keys(I.colors)));
      for (const I of P)
        I.startsWith("on-") ? hn(_, `.${I}`, [`color: rgb(var(--${n.prefix}theme-${I}))${y}`], n.scope) : (hn(p, `.${h}bg-${I}`, [`--${n.prefix}theme-overlay-multiplier: var(--${n.prefix}theme-${I}-overlay-multiplier)`, `background-color: rgb(var(--${n.prefix}theme-${I}))${y}`, `color: rgb(var(--${n.prefix}theme-on-${I}))${y}`], n.scope), hn(_, `.${h}text-${I}`, [`color: rgb(var(--${n.prefix}theme-${I}))${y}`], n.scope), hn(_, `.${h}border-${I}`, [`--${n.prefix}border-color: var(--${n.prefix}theme-${I})`], n.scope));
      m.push(...p, ..._);
    }
    return m.map((p, _) => _ === 0 ? p : `    ${p}`).join("");
  }), c = E(() => n.isDisabled ? void 0 : `${n.prefix}theme--${i.value}`), u = E(() => Object.keys(o.value));
  if (mv) {
    let y = function() {
      l.value = m.matches ? "dark" : "light";
    };
    const m = window.matchMedia("(prefers-color-scheme: dark)");
    y(), m.addEventListener("change", y, {
      passive: !0
    }), tv() && lt(() => {
      m.removeEventListener("change", y);
    });
  }
  function d(m) {
    if (n.isDisabled) return;
    const y = m._context.provides.usehead;
    if (y) {
      let h = function() {
        return {
          style: [{
            textContent: s.value,
            id: n.stylesheetId,
            nonce: n.cspNonce || !1
          }]
        };
      };
      if (y.push) {
        const C = y.push(h);
        Oe && ae(s, () => {
          C.patch(h);
        });
      } else
        Oe ? (y.addHeadObjs(E(h)), je(() => y.updateDOM())) : y.addHeadObjs(h());
    } else {
      let h = function() {
        hm(n.stylesheetId, n.cspNonce, s.value);
      };
      Oe ? ae(s, h, {
        immediate: !0
      }) : h();
    }
  }
  function v(m) {
    if (!u.value.includes(m)) {
      Tt(`Theme "${m}" not found on the Vuetify theme instance`);
      return;
    }
    i.value = m;
  }
  function f() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u.value;
    const y = m.indexOf(i.value), h = y === -1 ? 0 : (y + 1) % m.length;
    v(m[h]);
  }
  function g() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    f(m);
  }
  const b = new Proxy(i, {
    get(m, y) {
      return Reflect.get(m, y);
    },
    set(m, y, h) {
      return y === "value" && Ts(`theme.global.name.value = ${h}`, `theme.change('${h}')`), Reflect.set(m, y, h);
    }
  });
  return {
    install: d,
    change: v,
    cycle: f,
    toggle: g,
    isDisabled: n.isDisabled,
    name: i,
    themes: a,
    current: r,
    computedThemes: o,
    prefix: n.prefix,
    themeClasses: c,
    styles: s,
    global: {
      name: b,
      current: r
    }
  };
}
function Ee(e) {
  Xe("provideTheme");
  const n = Ie(wa, null);
  if (!n) throw new Error("Could not find Vuetify theme injection");
  const t = E(() => e.theme ?? n.name.value), a = E(() => n.themes.value[t.value]), l = E(() => n.isDisabled ? void 0 : `${n.prefix}theme--${t.value}`), i = {
    ...n,
    name: t,
    current: a,
    themeClasses: l
  };
  return Re(wa, i), i;
}
function ho() {
  Xe("useTheme");
  const e = Ie(wa, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function Rt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = sl(), a = j();
  if (Oe) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l), i.length && (n === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    St(() => {
      l.disconnect();
    }), ae(() => t.el, (i, o) => {
      o && (l.unobserve(o), a.value = void 0), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: t,
    contentRect: Cl(a)
  };
}
const Ca = Symbol.for("vuetify:layout"), Qs = Symbol.for("vuetify:layout-item"), Rr = 1e3, Js = F({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), On = F({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function eu() {
  const e = Ie(Ca);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function En(e) {
  const n = Ie(Ca);
  if (!n) throw new Error("[Vuetify] Could not find injected layout");
  const t = e.id ?? `layout-item-${xt()}`, a = Xe("useLayoutItem");
  Re(Qs, {
    id: t
  });
  const l = ee(!1);
  vs(() => l.value = !0), nv(() => l.value = !1);
  const {
    layoutItemStyles: i,
    layoutItemScrimStyles: o
  } = n.register(a, {
    ...e,
    active: w(() => l.value ? !1 : e.active.value),
    id: t
  });
  return St(() => n.unregister(t)), {
    layoutItemStyles: i,
    layoutRect: n.layoutRect,
    layoutItemScrimStyles: o
  };
}
const km = (e, n, t, a) => {
  let l = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const i = [{
    id: "",
    layer: {
      ...l
    }
  }];
  for (const o of e) {
    const r = n.get(o), s = t.get(o), c = a.get(o);
    if (!r || !s || !c) continue;
    const u = {
      ...l,
      [r.value]: parseInt(l[r.value], 10) + (c.value ? parseInt(s.value, 10) : 0)
    };
    i.push({
      id: o,
      layer: u
    }), l = u;
  }
  return i;
};
function tu(e) {
  const n = Ie(Ca, null), t = w(() => n ? n.rootZIndex.value - 100 : Rr), a = j([]), l = Ct(/* @__PURE__ */ new Map()), i = Ct(/* @__PURE__ */ new Map()), o = Ct(/* @__PURE__ */ new Map()), r = Ct(/* @__PURE__ */ new Map()), s = Ct(/* @__PURE__ */ new Map()), {
    resizeRef: c,
    contentRect: u
  } = Rt(), d = w(() => {
    const P = /* @__PURE__ */ new Map(), I = e.overlaps ?? [];
    for (const V of I.filter((T) => T.includes(":"))) {
      const [T, A] = V.split(":");
      if (!a.value.includes(T) || !a.value.includes(A)) continue;
      const D = l.get(T), x = l.get(A), B = i.get(T), M = i.get(A);
      !D || !x || !B || !M || (P.set(A, {
        position: D.value,
        amount: parseInt(B.value, 10)
      }), P.set(T, {
        position: x.value,
        amount: -parseInt(M.value, 10)
      }));
    }
    return P;
  }), v = w(() => {
    const P = [...new Set([...o.values()].map((V) => V.value))].sort((V, T) => V - T), I = [];
    for (const V of P) {
      const T = a.value.filter((A) => {
        var D;
        return ((D = o.get(A)) == null ? void 0 : D.value) === V;
      });
      I.push(...T);
    }
    return km(I, l, i, r);
  }), f = w(() => !Array.from(s.values()).some((P) => P.value)), g = w(() => v.value[v.value.length - 1].layer), b = E(() => ({
    "--v-layout-left": oe(g.value.left),
    "--v-layout-right": oe(g.value.right),
    "--v-layout-top": oe(g.value.top),
    "--v-layout-bottom": oe(g.value.bottom),
    ...f.value ? void 0 : {
      transition: "none"
    }
  })), m = w(() => v.value.slice(1).map((P, I) => {
    let {
      id: V
    } = P;
    const {
      layer: T
    } = v.value[I], A = i.get(V), D = l.get(V);
    return {
      id: V,
      ...T,
      size: Number(A.value),
      position: D.value
    };
  })), y = (P) => m.value.find((I) => I.id === P), h = Xe("createLayout"), C = ee(!1);
  ft(() => {
    C.value = !0;
  }), Re(Ca, {
    register: (P, I) => {
      let {
        id: V,
        order: T,
        position: A,
        layoutSize: D,
        elementSize: x,
        active: B,
        disableTransitions: M,
        absolute: L
      } = I;
      o.set(V, T), l.set(V, A), i.set(V, D), r.set(V, B), M && s.set(V, M);
      const Y = Yn(Qs, h == null ? void 0 : h.vnode).indexOf(P);
      Y > -1 ? a.value.splice(Y, 0, V) : a.value.push(V);
      const te = w(() => m.value.findIndex((R) => R.id === V)), q = w(() => t.value + v.value.length * 2 - te.value * 2), $ = w(() => {
        const R = A.value === "left" || A.value === "right", U = A.value === "right", ce = A.value === "bottom", ne = x.value ?? D.value, Q = ne === 0 ? "%" : "px", X = {
          [A.value]: 0,
          zIndex: q.value,
          transform: `translate${R ? "X" : "Y"}(${(B.value ? 0 : -(ne === 0 ? 100 : ne)) * (U || ce ? -1 : 1)}${Q})`,
          position: L.value || t.value !== Rr ? "absolute" : "fixed",
          ...f.value ? void 0 : {
            transition: "none"
          }
        };
        if (!C.value) return X;
        const ve = m.value[te.value];
        ve || Tt(`[Vuetify] Could not find layout item "${V}"`);
        const ge = d.value.get(V);
        return ge && (ve[ge.position] += ge.amount), {
          ...X,
          height: R ? `calc(100% - ${ve.top}px - ${ve.bottom}px)` : x.value ? `${x.value}px` : void 0,
          left: U ? void 0 : `${ve.left}px`,
          right: U ? `${ve.right}px` : void 0,
          top: A.value !== "bottom" ? `${ve.top}px` : void 0,
          bottom: A.value !== "top" ? `${ve.bottom}px` : void 0,
          width: R ? x.value ? `${x.value}px` : void 0 : `calc(100% - ${ve.left}px - ${ve.right}px)`
        };
      }), O = w(() => ({
        zIndex: q.value - 1
      }));
      return {
        layoutItemStyles: $,
        layoutItemScrimStyles: O,
        zIndex: q
      };
    },
    unregister: (P) => {
      o.delete(P), l.delete(P), i.delete(P), r.delete(P), s.delete(P), a.value = a.value.filter((I) => I !== P);
    },
    mainRect: g,
    mainStyles: b,
    getLayoutItem: y,
    items: m,
    layoutRect: u,
    rootZIndex: t
  });
  const p = E(() => ["v-layout", {
    "v-layout--full-height": e.fullHeight
  }]), _ = E(() => ({
    zIndex: n ? t.value : void 0,
    position: n ? "relative" : void 0,
    overflow: n ? "hidden" : void 0
  }));
  return {
    layoutClasses: p,
    layoutStyles: _,
    getLayoutItem: y,
    items: m,
    layoutRect: u,
    layoutRef: c
  };
}
function nu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: n,
    ...t
  } = e, a = ht(n, t), {
    aliases: l = {},
    components: i = {},
    directives: o = {}
  } = a, r = qn();
  return r.run(() => {
    const s = Jv(a.defaults), c = em(a.display, a.ssr), u = bm(a.theme), d = um(a.icons), v = vf(a.locale), f = Zf(a.date, v), g = nm(a.goTo, v);
    function b(y) {
      for (const C in o)
        y.directive(C, o[C]);
      for (const C in i)
        y.component(C, i[C]);
      for (const C in l)
        y.component(C, Bt({
          ...l[C],
          name: C,
          aliasName: l[C].name
        }));
      const h = qn();
      if (h.run(() => {
        u.install(y);
      }), y.onUnmount(() => h.stop()), y.provide(Jn, s), y.provide(Ci, c), y.provide(wa, u), y.provide(xi, d), y.provide(ea, v), y.provide(Ks, f.options), y.provide(Dr, f.instance), y.provide(Xs, g), Oe && a.ssr)
        if (y.$nuxt)
          y.$nuxt.hook("app:suspense:resolve", () => {
            c.update();
          });
        else {
          const {
            mount: C
          } = y;
          y.mount = function() {
            const p = C(...arguments);
            return Pe(() => c.update()), y.mount = C, p;
          };
        }
      y.mixin({
        computed: {
          $vuetify() {
            return Ct({
              defaults: Un.call(this, Jn),
              display: Un.call(this, Ci),
              theme: Un.call(this, wa),
              icons: Un.call(this, xi),
              locale: Un.call(this, ea),
              date: Un.call(this, Dr)
            });
          }
        }
      });
    }
    function m() {
      r.stop();
    }
    return {
      install: b,
      unmount: m,
      defaults: s,
      display: c,
      theme: u,
      icons: d,
      locale: v,
      date: f,
      goTo: g
    };
  });
}
const Sm = "3.9.2";
nu.version = Sm;
function Un(e) {
  var a, l;
  const n = this.$, t = ((a = n.parent) == null ? void 0 : a.provides) ?? ((l = n.vnode.appContext) == null ? void 0 : l.provides);
  if (t && e in t)
    return t[e];
}
const wm = F({
  ...se(),
  ...Js({
    fullHeight: !0
  }),
  ...Ae()
}, "VApp"), Cm = W()({
  name: "VApp",
  props: wm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ee(e), {
      layoutClasses: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = tu(e), {
      rtlClasses: s
    } = nt();
    return G(() => {
      var c;
      return S("div", {
        ref: r,
        class: z(["v-application", a.themeClasses.value, l.value, s.value, e.class]),
        style: le([e.style])
      }, [S("div", {
        class: "v-application__wrap"
      }, [(c = t.default) == null ? void 0 : c.call(t)])]);
    }), {
      getLayoutItem: i,
      items: o,
      theme: a
    };
  }
}), ke = F({
  tag: {
    type: [String, Object, Function],
    default: "div"
  }
}, "tag"), au = F({
  text: String,
  ...se(),
  ...ke()
}, "VToolbarTitle"), yo = W()({
  name: "VToolbarTitle",
  props: au(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => {
      const a = !!(t.default || t.text || e.text);
      return k(e.tag, {
        class: z(["v-toolbar-title", e.class]),
        style: le(e.style)
      }, {
        default: () => {
          var l;
          return [a && S("div", {
            class: "v-toolbar-title__placeholder"
          }, [t.text ? t.text() : e.text, (l = t.default) == null ? void 0 : l.call(t)])];
        }
      });
    }), {};
  }
}), xm = F({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function Ot(e, n, t) {
  return W()({
    name: e,
    props: xm({
      mode: t,
      origin: n
    }),
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = {
        onBeforeEnter(r) {
          a.origin && (r.style.transformOrigin = a.origin);
        },
        onLeave(r) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: s,
              offsetLeft: c,
              offsetWidth: u,
              offsetHeight: d
            } = r;
            r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }, r.style.position = "absolute", r.style.top = `${s}px`, r.style.left = `${c}px`, r.style.width = `${u}px`, r.style.height = `${d}px`;
          }
          a.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (a.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
            const {
              position: s,
              top: c,
              left: u,
              width: d,
              height: v
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = s || "", r.style.top = c || "", r.style.left = u || "", r.style.width = d || "", r.style.height = v || "";
          }
        }
      };
      return () => {
        const r = a.group ? eo : on;
        return cn(r, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : o
        }, i.default);
      };
    }
  });
}
function lu(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return W()({
    name: e,
    props: {
      mode: {
        type: String,
        default: t
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = a.group ? eo : on;
      return () => cn(o, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : n
      }, i.default);
    }
  });
}
function iu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = Ji(`offset-${t}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [t]: o.style[t]
      };
    },
    onEnter(o) {
      const r = o._initialStyle;
      if (!r) return;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const s = `${o[a]}px`;
      o.style[t] = "0", o.offsetHeight, o.style.transition = r.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[t] = s;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [t]: o.style[t]
      }, o.style.overflow = "hidden", o.style[t] = `${o[a]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[t] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(o) {
    e && o._parent && o._parent.classList.remove(e), i(o);
  }
  function i(o) {
    if (!o._initialStyle) return;
    const r = o._initialStyle[t];
    o.style.overflow = o._initialStyle.overflow, r != null && (o.style[t] = r), delete o._initialStyle;
  }
}
const Vm = F({
  target: [Object, Array]
}, "v-dialog-transition"), Jl = /* @__PURE__ */ new WeakMap(), _l = W()({
  name: "VDialogTransition",
  props: Vm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, i) {
        var f;
        await new Promise((g) => requestAnimationFrame(g)), await new Promise((g) => requestAnimationFrame(g)), l.style.visibility = "";
        const o = Hr(e.target, l), {
          x: r,
          y: s,
          sx: c,
          sy: u,
          speed: d
        } = o;
        Jl.set(l, o);
        const v = bn(l, [{
          transform: `translate(${r}px, ${s}px) scale(${c}, ${u})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: af
        });
        (f = Nr(l)) == null || f.forEach((g) => {
          bn(g, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: Sa
          });
        }), v.finished.then(() => i());
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, i) {
        var f;
        await new Promise((g) => requestAnimationFrame(g));
        let o;
        !Jl.has(l) || Array.isArray(e.target) || e.target.offsetParent || e.target.getClientRects().length ? o = Hr(e.target, l) : o = Jl.get(l);
        const {
          x: r,
          y: s,
          sx: c,
          sy: u,
          speed: d
        } = o;
        bn(l, [{}, {
          transform: `translate(${r}px, ${s}px) scale(${c}, ${u})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: lf
        }).finished.then(() => i()), (f = Nr(l)) == null || f.forEach((g) => {
          bn(g, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: Sa
          });
        });
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? k(on, H({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), t) : k(on, {
      name: "dialog-transition"
    }, t);
  }
});
function Nr(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function Hr(e, n) {
  const t = As(e), a = io(n), [l, i] = getComputedStyle(n).transformOrigin.split(" ").map((y) => parseFloat(y)), [o, r] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = t.left + t.width / 2;
  o === "left" || r === "left" ? s -= t.width / 2 : (o === "right" || r === "right") && (s += t.width / 2);
  let c = t.top + t.height / 2;
  o === "top" || r === "top" ? c -= t.height / 2 : (o === "bottom" || r === "bottom") && (c += t.height / 2);
  const u = t.width / a.width, d = t.height / a.height, v = Math.max(1, u, d), f = u / v || 0, g = d / v || 0, b = a.width * a.height / (window.innerWidth * window.innerHeight), m = b > 0.12 ? Math.min(1.5, (b - 0.12) * 10 + 1) : 1;
  return {
    x: s - (l + a.left),
    y: c - (i + a.top),
    sx: f,
    sy: g,
    speed: m
  };
}
const pm = Ot("fab-transition", "center center", "out-in"), Pm = Ot("dialog-bottom-transition"), _m = Ot("dialog-top-transition"), xa = Ot("fade-transition"), bo = Ot("scale-transition"), Im = Ot("scroll-x-transition"), Am = Ot("scroll-x-reverse-transition"), Tm = Ot("scroll-y-transition"), Dm = Ot("scroll-y-reverse-transition"), Bm = Ot("slide-x-transition"), Om = Ot("slide-x-reverse-transition"), Il = Ot("slide-y-transition"), Em = Ot("slide-y-reverse-transition"), la = lu("expand-transition", iu()), ko = lu("expand-x-transition", iu("", !0)), Lm = F({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), we = W(!1)({
  name: "VDefaultsProvider",
  props: Lm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      defaults: a,
      disabled: l,
      reset: i,
      root: o,
      scoped: r
    } = aa(e);
    return Ge(a, {
      reset: i,
      root: o,
      scoped: r,
      disabled: l
    }), () => {
      var s;
      return (s = t.default) == null ? void 0 : s.call(t);
    };
  }
}), Je = F({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function et(e) {
  return {
    dimensionStyles: w(() => {
      const t = {}, a = oe(e.height), l = oe(e.maxHeight), i = oe(e.maxWidth), o = oe(e.minHeight), r = oe(e.minWidth), s = oe(e.width);
      return a != null && (t.height = a), l != null && (t.maxHeight = l), i != null && (t.maxWidth = i), o != null && (t.minHeight = o), r != null && (t.minWidth = r), s != null && (t.width = s), t;
    })
  };
}
function $m(e) {
  return {
    aspectStyles: w(() => {
      const n = Number(e.aspectRatio);
      return n ? {
        paddingBottom: String(1 / n * 100) + "%"
      } : void 0;
    })
  };
}
const ou = F({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...se(),
  ...Je()
}, "VResponsive"), pi = W()({
  name: "VResponsive",
  props: ou(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: a
    } = $m(e), {
      dimensionStyles: l
    } = et(e);
    return G(() => {
      var i;
      return S("div", {
        class: z(["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class]),
        style: le([l.value, e.style])
      }, [S("div", {
        class: "v-responsive__sizer",
        style: le(a.value)
      }, null), (i = t.additional) == null ? void 0 : i.call(t), t.default && S("div", {
        class: z(["v-responsive__content", e.contentClass])
      }, [t.default()])]);
    }), {};
  }
});
function So(e) {
  return lo(() => {
    const n = Wt(e), t = [], a = {};
    if (n.background)
      if (hi(n.background)) {
        if (a.backgroundColor = n.background, !n.text && jv(n.background)) {
          const l = It(n.background);
          if (l.a == null || l.a === 1) {
            const i = Rs(l);
            a.color = i, a.caretColor = i;
          }
        }
      } else
        t.push(`bg-${n.background}`);
    return n.text && (hi(n.text) ? (a.color = n.text, a.caretColor = n.text) : t.push(`text-${n.text}`)), {
      colorClasses: t,
      colorStyles: a
    };
  });
}
function vt(e) {
  const {
    colorClasses: n,
    colorStyles: t
  } = So(() => ({
    text: Wt(e)
  }));
  return {
    textColorClasses: n,
    textColorStyles: t
  };
}
function Le(e) {
  const {
    colorClasses: n,
    colorStyles: t
  } = So(() => ({
    background: Wt(e)
  }));
  return {
    backgroundColorClasses: n,
    backgroundColorStyles: t
  };
}
const He = F({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Ye(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yt();
  return {
    roundedClasses: w(() => {
      const a = ol(e) ? e.value : e.rounded, l = ol(e) ? e.value : e.tile, i = [];
      if (a === !0 || a === "")
        i.push(`${n}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" "))
          i.push(`rounded-${o}`);
      else (l || a === !1) && i.push("rounded-0");
      return i;
    })
  };
}
const Ht = F({
  transition: {
    type: null,
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), yt = (e, n) => {
  let {
    slots: t
  } = n;
  const {
    transition: a,
    disabled: l,
    group: i,
    ...o
  } = e, {
    component: r = i ? eo : on,
    ...s
  } = ba(a) ? a : {};
  let c;
  return ba(a) ? c = H(s, pv({
    disabled: l,
    group: i
  }), o) : c = H({
    name: l || !a ? "" : a
  }, o), cn(r, c, t);
};
function Mm(e, n) {
  if (!to) return;
  const t = n.modifiers || {}, a = n.value, {
    handler: l,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, o = new IntersectionObserver(function() {
    var d;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const c = (d = e._observe) == null ? void 0 : d[n.instance.$.uid];
    if (!c) return;
    const u = r.some((v) => v.isIntersecting);
    l && (!t.quiet || c.init) && (!t.once || u || c.init) && l(u, r, s), u && t.once ? ru(e, n) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function ru(e, n) {
  var a;
  const t = (a = e._observe) == null ? void 0 : a[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const Zt = {
  mounted: Mm,
  unmounted: ru
}, su = F({
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...ou(),
  ...se(),
  ...He(),
  ...Ht()
}, "VImg"), Qt = W()({
  name: "VImg",
  directives: {
    vIntersect: Zt
  },
  props: su(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Le(() => e.color), {
      roundedClasses: o
    } = Ye(e), r = Xe("VImg"), s = ee(""), c = j(), u = ee(e.eager ? "loading" : "idle"), d = ee(), v = ee(), f = w(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), g = w(() => f.value.aspect || d.value / v.value || 0);
    ae(() => e.src, () => {
      b(u.value !== "idle");
    }), ae(g, (x, B) => {
      !x && B && c.value && p(c.value);
    }), Oa(() => b());
    function b(x) {
      if (!(e.eager && x) && !(to && !x && !e.eager)) {
        if (u.value = "loading", f.value.lazySrc) {
          const B = new Image();
          B.src = f.value.lazySrc, p(B, null);
        }
        f.value.src && Pe(() => {
          var B;
          t("loadstart", ((B = c.value) == null ? void 0 : B.currentSrc) || f.value.src), setTimeout(() => {
            var M;
            if (!r.isUnmounted)
              if ((M = c.value) != null && M.complete) {
                if (c.value.naturalWidth || y(), u.value === "error") return;
                g.value || p(c.value, null), u.value === "loading" && m();
              } else
                g.value || p(c.value), h();
          });
        });
      }
    }
    function m() {
      var x;
      r.isUnmounted || (h(), p(c.value), u.value = "loaded", t("load", ((x = c.value) == null ? void 0 : x.currentSrc) || f.value.src));
    }
    function y() {
      var x;
      r.isUnmounted || (u.value = "error", t("error", ((x = c.value) == null ? void 0 : x.currentSrc) || f.value.src));
    }
    function h() {
      const x = c.value;
      x && (s.value = x.currentSrc || x.src);
    }
    let C = -1;
    St(() => {
      clearTimeout(C);
    });
    function p(x) {
      let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const M = () => {
        if (clearTimeout(C), r.isUnmounted) return;
        const {
          naturalHeight: L,
          naturalWidth: N
        } = x;
        L || N ? (d.value = N, v.value = L) : !x.complete && u.value === "loading" && B != null ? C = window.setTimeout(M, B) : (x.currentSrc.endsWith(".svg") || x.currentSrc.startsWith("data:image/svg+xml")) && (d.value = 1, v.value = 1);
      };
      M();
    }
    const _ = E(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), P = () => {
      var M;
      if (!f.value.src || u.value === "idle") return null;
      const x = S("img", {
        class: z(["v-img__img", _.value]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: f.value.src,
        srcset: f.value.srcset,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: m,
        onError: y
      }, null), B = (M = a.sources) == null ? void 0 : M.call(a);
      return k(yt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [We(B ? S("picture", {
          class: "v-img__picture"
        }, [B, x]) : x, [[Lt, u.value === "loaded"]])]
      });
    }, I = () => k(yt, {
      transition: e.transition
    }, {
      default: () => [f.value.lazySrc && u.value !== "loaded" && S("img", {
        class: z(["v-img__img", "v-img__img--preload", _.value]),
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: f.value.lazySrc,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), V = () => a.placeholder ? k(yt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(u.value === "loading" || u.value === "error" && !a.error) && S("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, T = () => a.error ? k(yt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [u.value === "error" && S("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, A = () => e.gradient ? S("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, D = ee(!1);
    {
      const x = ae(g, (B) => {
        B && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            D.value = !0;
          });
        }), x());
      });
    }
    return G(() => {
      const x = pi.filterProps(e);
      return We(k(pi, H({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !D.value
        }, l.value, o.value, e.class],
        style: [{
          width: oe(e.width === "auto" ? d.value : e.width)
        }, i.value, e.style]
      }, x, {
        aspectRatio: g.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => S(ue, null, [k(P, null, null), k(I, null, null), k(A, null, null), k(V, null, null), k(T, null, null)]),
        default: a.default
      }), [[Zt, {
        handler: b,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: s,
      image: c,
      state: u,
      naturalWidth: d,
      naturalHeight: v
    };
  }
}), Vt = F({
  border: [Boolean, Number, String]
}, "border");
function pt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yt();
  return {
    borderClasses: w(() => {
      const a = e.border;
      return a === !0 || a === "" ? `${n}--border` : typeof a == "string" || a === 0 ? String(a).split(" ").map((l) => `border-${l}`) : [];
    })
  };
}
const at = F({
  elevation: {
    type: [Number, String],
    validator(e) {
      const n = parseInt(e);
      return !isNaN(n) && n >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      n <= 24;
    }
  }
}, "elevation");
function st(e) {
  return {
    elevationClasses: E(() => {
      const t = ol(e) ? e.value : e.elevation;
      return t == null ? [] : [`elevation-${t}`];
    })
  };
}
const Fm = [null, "prominent", "default", "comfortable", "compact"], uu = F({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => Fm.includes(e)
  },
  extended: {
    type: Boolean,
    default: null
  },
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...Vt(),
  ...se(),
  ...at(),
  ...He(),
  ...ke({
    tag: "header"
  }),
  ...Ae()
}, "VToolbar"), Pi = W()({
  name: "VToolbar",
  props: uu(),
  setup(e, n) {
    var f;
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Le(() => e.color), {
      borderClasses: i
    } = pt(e), {
      elevationClasses: o
    } = st(e), {
      roundedClasses: r
    } = Ye(e), {
      themeClasses: s
    } = Ee(e), {
      rtlClasses: c
    } = nt(), u = ee(e.extended === null ? !!((f = t.extension) != null && f.call(t)) : e.extended), d = w(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = w(() => u.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return Ge({
      VBtn: {
        variant: "text"
      }
    }), G(() => {
      var y;
      const g = !!(e.title || t.title), b = !!(t.image || e.image), m = (y = t.extension) == null ? void 0 : y.call(t);
      return u.value = e.extended === null ? !!m : e.extended, k(e.tag, {
        class: z(["v-toolbar", {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, a.value, i.value, o.value, r.value, s.value, c.value, e.class]),
        style: le([l.value, e.style])
      }, {
        default: () => [b && S("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [t.image ? k(we, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, t.image) : k(Qt, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), k(we, {
          defaults: {
            VTabs: {
              height: oe(d.value)
            }
          }
        }, {
          default: () => {
            var h, C, p;
            return [S("div", {
              class: "v-toolbar__content",
              style: {
                height: oe(d.value)
              }
            }, [t.prepend && S("div", {
              class: "v-toolbar__prepend"
            }, [(h = t.prepend) == null ? void 0 : h.call(t)]), g && k(yo, {
              key: "title",
              text: e.title
            }, {
              text: t.title
            }), (C = t.default) == null ? void 0 : C.call(t), t.append && S("div", {
              class: "v-toolbar__append"
            }, [(p = t.append) == null ? void 0 : p.call(t)])])];
          }
        }), k(we, {
          defaults: {
            VTabs: {
              height: oe(v.value)
            }
          }
        }, {
          default: () => [k(la, null, {
            default: () => [u.value && S("div", {
              class: "v-toolbar__extension",
              style: {
                height: oe(v.value)
              }
            }, [m])]
          })]
        })]
      });
    }), {
      contentHeight: d,
      extensionHeight: v
    };
  }
}), Rm = F({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function Nm(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: t
  } = n;
  let a = 0, l = 0;
  const i = j(null), o = ee(0), r = ee(0), s = ee(0), c = ee(!1), u = ee(!1), d = w(() => Number(e.scrollThreshold)), v = w(() => Me((d.value - o.value) / d.value || 0)), f = () => {
    const g = i.value;
    if (!g || t && !t.value) return;
    a = o.value, o.value = "window" in g ? g.pageYOffset : g.scrollTop;
    const b = g instanceof Window ? document.documentElement.scrollHeight : g.scrollHeight;
    if (l !== b) {
      l = b;
      return;
    }
    u.value = o.value < a, s.value = Math.abs(o.value - d.value);
  };
  return ae(u, () => {
    r.value = r.value || o.value;
  }), ae(c, () => {
    r.value = 0;
  }), ft(() => {
    ae(() => e.scrollTarget, (g) => {
      var m;
      const b = g ? document.querySelector(g) : window;
      if (!b) {
        Tt(`Unable to locate element with identifier ${g}`);
        return;
      }
      b !== i.value && ((m = i.value) == null || m.removeEventListener("scroll", f), i.value = b, i.value.addEventListener("scroll", f, {
        passive: !0
      }));
    }, {
      immediate: !0
    });
  }), St(() => {
    var g;
    (g = i.value) == null || g.removeEventListener("scroll", f);
  }), t && ae(t, f, {
    immediate: !0
  }), {
    scrollThreshold: d,
    currentScroll: o,
    currentThreshold: s,
    isScrollActive: c,
    scrollRatio: v,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp: u,
    savedScroll: r
  };
}
function Ln() {
  const e = ee(!1);
  return ft(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: E(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: Cl(e)
  };
}
const Hm = F({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  location: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ...uu(),
  ...On(),
  ...Rm(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), zm = W()({
  name: "VAppBar",
  props: Hm(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = j(), l = de(e, "modelValue"), i = w(() => {
      var C;
      const h = new Set(((C = e.scrollBehavior) == null ? void 0 : C.split(" ")) ?? []);
      return {
        hide: h.has("hide"),
        fullyHide: h.has("fully-hide"),
        inverted: h.has("inverted"),
        collapse: h.has("collapse"),
        elevate: h.has("elevate"),
        fadeImage: h.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    }), o = w(() => {
      const h = i.value;
      return h.hide || h.fullyHide || h.inverted || h.collapse || h.elevate || h.fadeImage || // behavior.shrink ||
      !l.value;
    }), {
      currentScroll: r,
      scrollThreshold: s,
      isScrollingUp: c,
      scrollRatio: u
    } = Nm(e, {
      canScroll: o
    }), d = E(() => i.value.hide || i.value.fullyHide), v = w(() => e.collapse || i.value.collapse && (i.value.inverted ? u.value > 0 : u.value === 0)), f = w(() => e.flat || i.value.fullyHide && !l.value || i.value.elevate && (i.value.inverted ? r.value > 0 : r.value === 0)), g = w(() => i.value.fadeImage ? i.value.inverted ? 1 - u.value : u.value : void 0), b = w(() => {
      var p, _;
      if (i.value.hide && i.value.inverted) return 0;
      const h = ((p = a.value) == null ? void 0 : p.contentHeight) ?? 0, C = ((_ = a.value) == null ? void 0 : _.extensionHeight) ?? 0;
      return d.value ? r.value < s.value || i.value.fullyHide ? h + C : h : h + C;
    });
    bt(() => !!e.scrollBehavior, () => {
      je(() => {
        d.value ? i.value.inverted ? l.value = r.value > s.value : l.value = c.value || r.value < s.value : l.value = !0;
      });
    });
    const {
      ssrBootStyles: m
    } = Ln(), {
      layoutItemStyles: y
    } = En({
      id: e.name,
      order: w(() => parseInt(e.order, 10)),
      position: E(() => e.location),
      layoutSize: b,
      elementSize: ee(void 0),
      active: l,
      absolute: E(() => e.absolute)
    });
    return G(() => {
      const h = Pi.filterProps(e);
      return k(Pi, H({
        ref: a,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [{
          ...y.value,
          "--v-toolbar-image-opacity": g.value,
          height: void 0,
          ...m.value
        }, e.style]
      }, h, {
        collapse: v.value,
        flat: f.value
      }), t);
    }), {};
  }
}), Wm = [null, "default", "comfortable", "compact"], it = F({
  density: {
    type: String,
    default: "default",
    validator: (e) => Wm.includes(e)
  }
}, "density");
function wt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yt();
  return {
    densityClasses: E(() => `${n}--density-${e.density}`)
  };
}
const Um = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function vn(e, n) {
  return S(ue, null, [e && S("span", {
    key: "overlay",
    class: z(`${n}__overlay`)
  }, null), S("span", {
    key: "underlay",
    class: z(`${n}__underlay`)
  }, null)]);
}
const Mt = F({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => Um.includes(e)
  }
}, "variant");
function $n(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yt();
  const t = E(() => {
    const {
      variant: i
    } = Wt(e);
    return `${n}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = So(() => {
    const {
      variant: i,
      color: o
    } = Wt(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: o
    };
  });
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: t
  };
}
const cu = F({
  baseColor: String,
  divided: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...Vt(),
  ...se(),
  ...it(),
  ...at(),
  ...He(),
  ...ke(),
  ...Ae(),
  ...Mt()
}, "VBtnGroup"), _i = W()({
  name: "VBtnGroup",
  props: cu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ee(e), {
      densityClasses: l
    } = wt(e), {
      borderClasses: i
    } = pt(e), {
      elevationClasses: o
    } = st(e), {
      roundedClasses: r
    } = Ye(e);
    Ge({
      VBtn: {
        height: E(() => e.direction === "horizontal" ? "auto" : null),
        baseColor: E(() => e.baseColor),
        color: E(() => e.color),
        density: E(() => e.density),
        flat: !0,
        variant: E(() => e.variant)
      }
    }), G(() => k(e.tag, {
      class: z(["v-btn-group", `v-btn-group--${e.direction}`, {
        "v-btn-group--divided": e.divided
      }, a.value, i.value, l.value, o.value, r.value, e.class]),
      style: le(e.style)
    }, t));
  }
}), Mn = F({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), Fn = F({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Rn(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = Xe("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = xt();
  Re(Symbol.for(`${n.description}:id`), l);
  const i = Ie(n, null);
  if (!i) {
    if (!t) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const o = E(() => e.value), r = w(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: l,
    value: o,
    disabled: r
  }, a), St(() => {
    i.unregister(l);
  });
  const s = w(() => i.isSelected(l)), c = w(() => i.items.value[0].id === l), u = w(() => i.items.value[i.items.value.length - 1].id === l), d = w(() => s.value && [i.selectedClass.value, e.selectedClass]);
  return ae(s, (v) => {
    a.emit("group:selected", {
      value: v
    });
  }, {
    flush: "sync"
  }), {
    id: l,
    isSelected: s,
    isFirst: c,
    isLast: u,
    toggle: () => i.select(l, !s.value),
    select: (v) => i.select(l, v),
    selectedClass: d,
    value: o,
    disabled: r,
    group: i
  };
}
function fn(e, n) {
  let t = !1;
  const a = Ct([]), l = de(e, "modelValue", [], (v) => v == null ? [] : du(a, Ue(v)), (v) => {
    const f = Gm(a, v);
    return e.multiple ? f : f[0];
  }), i = Xe("useGroup");
  function o(v, f) {
    const g = v, b = Symbol.for(`${n.description}:id`), y = Yn(b, i == null ? void 0 : i.vnode).indexOf(f);
    be(g.value) == null && (g.value = y, g.useIndexAsValue = !0), y > -1 ? a.splice(y, 0, g) : a.push(g);
  }
  function r(v) {
    if (t) return;
    s();
    const f = a.findIndex((g) => g.id === v);
    a.splice(f, 1);
  }
  function s() {
    const v = a.find((f) => !f.disabled);
    v && e.mandatory === "force" && !l.value.length && (l.value = [v.id]);
  }
  ft(() => {
    s();
  }), St(() => {
    t = !0;
  }), av(() => {
    for (let v = 0; v < a.length; v++)
      a[v].useIndexAsValue && (a[v].value = v);
  });
  function c(v, f) {
    const g = a.find((b) => b.id === v);
    if (!(f && (g != null && g.disabled)))
      if (e.multiple) {
        const b = l.value.slice(), m = b.findIndex((h) => h === v), y = ~m;
        if (f = f ?? !y, y && e.mandatory && b.length <= 1 || !y && e.max != null && b.length + 1 > e.max) return;
        m < 0 && f ? b.push(v) : m >= 0 && !f && b.splice(m, 1), l.value = b;
      } else {
        const b = l.value.includes(v);
        if (e.mandatory && b || !b && !f) return;
        l.value = f ?? !b ? [v] : [];
      }
  }
  function u(v) {
    if (e.multiple && Tt('This method is not supported when using "multiple" prop'), l.value.length) {
      const f = l.value[0], g = a.findIndex((y) => y.id === f);
      let b = (g + v) % a.length, m = a[b];
      for (; m.disabled && b !== g; )
        b = (b + v) % a.length, m = a[b];
      if (m.disabled) return;
      l.value = [a[b].id];
    } else {
      const f = a.find((g) => !g.disabled);
      f && (l.value = [f.id]);
    }
  }
  const d = {
    register: o,
    unregister: r,
    selected: l,
    select: c,
    disabled: E(() => e.disabled),
    prev: () => u(a.length - 1),
    next: () => u(1),
    isSelected: (v) => l.value.includes(v),
    selectedClass: E(() => e.selectedClass),
    items: E(() => a),
    getItemIndex: (v) => jm(a, v)
  };
  return Re(n, d), d;
}
function jm(e, n) {
  const t = du(e, [n]);
  return t.length ? e.findIndex((a) => a.id === t[0]) : -1;
}
function du(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.find((o) => ct(a, o.value)), i = e[a];
    (l == null ? void 0 : l.value) != null ? t.push(l.id) : i != null && i.useIndexAsValue && t.push(i.id);
  }), t;
}
function Gm(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      t.push(i.value != null ? i.value : l);
    }
  }), t;
}
const wo = Symbol.for("vuetify:v-btn-toggle"), Ym = F({
  ...cu(),
  ...Mn()
}, "VBtnToggle"), Km = W()({
  name: "VBtnToggle",
  props: Ym(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      next: l,
      prev: i,
      select: o,
      selected: r
    } = fn(e, wo);
    return G(() => {
      const s = _i.filterProps(e);
      return k(_i, H({
        class: ["v-btn-toggle", e.class]
      }, s, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = t.default) == null ? void 0 : c.call(t, {
            isSelected: a,
            next: l,
            prev: i,
            select: o,
            selected: r
          })];
        }
      });
    }), {
      next: l,
      prev: i,
      select: o
    };
  }
}), qm = ["x-small", "small", "default", "large", "x-large"], Kt = F({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function ia(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yt();
  return lo(() => {
    const t = e.size;
    let a, l;
    return rl(qm, t) ? a = `${n}--size-${t}` : t && (l = {
      width: oe(t),
      height: oe(t)
    }), {
      sizeClasses: a,
      sizeStyles: l
    };
  });
}
const Xm = F({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: fe,
  opacity: [String, Number],
  ...se(),
  ...Kt(),
  ...ke({
    tag: "i"
  }),
  ...Ae()
}, "VIcon"), Be = W()({
  name: "VIcon",
  props: Xm(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = ee(), {
      themeClasses: i
    } = ho(), {
      iconData: o
    } = cm(() => l.value || e.icon), {
      sizeClasses: r
    } = ia(e), {
      textColorClasses: s,
      textColorStyles: c
    } = vt(() => e.color);
    return G(() => {
      var v, f;
      const u = (v = a.default) == null ? void 0 : v.call(a);
      u && (l.value = (f = xs(u).filter((g) => g.type === lv && g.children && typeof g.children == "string")[0]) == null ? void 0 : f.children);
      const d = !!(t.onClick || t.onClickOnce);
      return k(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: z(["v-icon", "notranslate", i.value, r.value, s.value, {
          "v-icon--clickable": d,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class]),
        style: le([{
          "--v-icon-opacity": e.opacity
        }, r.value ? void 0 : {
          fontSize: oe(e.size),
          height: oe(e.size),
          width: oe(e.size)
        }, c.value, e.style]),
        role: d ? "button" : void 0,
        "aria-hidden": !d,
        tabindex: d ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [u]
      });
    }), {};
  }
});
function Ra(e, n) {
  const t = j(), a = ee(!1);
  if (to) {
    const l = new IntersectionObserver((i) => {
      a.value = !!i.find((o) => o.isIntersecting);
    }, n);
    lt(() => {
      l.disconnect();
    }), ae(t, (i, o) => {
      o && (l.unobserve(o), a.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: t,
    isIntersecting: a
  };
}
const Zm = F({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...se(),
  ...Kt(),
  ...ke({
    tag: "div"
  }),
  ...Ae()
}, "VProgressCircular"), rn = W()({
  name: "VProgressCircular",
  props: Zm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = 20, l = 2 * Math.PI * a, i = j(), {
      themeClasses: o
    } = Ee(e), {
      sizeClasses: r,
      sizeStyles: s
    } = ia(e), {
      textColorClasses: c,
      textColorStyles: u
    } = vt(() => e.color), {
      textColorClasses: d,
      textColorStyles: v
    } = vt(() => e.bgColor), {
      intersectionRef: f,
      isIntersecting: g
    } = Ra(), {
      resizeRef: b,
      contentRect: m
    } = Rt(), y = E(() => Me(parseFloat(e.modelValue), 0, 100)), h = E(() => Number(e.width)), C = E(() => s.value ? Number(e.size) : m.value ? m.value.width : Math.max(h.value, 32)), p = E(() => a / (1 - h.value / C.value) * 2), _ = E(() => h.value / C.value * p.value), P = E(() => oe((100 - y.value) / 100 * l));
    return je(() => {
      f.value = i.value, b.value = i.value;
    }), G(() => k(e.tag, {
      ref: i,
      class: z(["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": g.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, r.value, c.value, e.class]),
      style: le([s.value, u.value, e.style]),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : y.value
    }, {
      default: () => [S("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${p.value} ${p.value}`
      }, [S("circle", {
        class: z(["v-progress-circular__underlay", d.value]),
        style: le(v.value),
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": _.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), S("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": _.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": P.value
      }, null)]), t.default && S("div", {
        class: "v-progress-circular__content"
      }, [t.default({
        value: y.value
      })])]
    })), {};
  }
}), zr = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, tn = F({
  location: String
}, "location");
function Nn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = nt();
  return {
    locationStyles: w(() => {
      if (!e.location) return {};
      const {
        side: i,
        align: o
      } = mi(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function r(c) {
        return t ? t(c) : 0;
      }
      const s = {};
      return i !== "center" && (n ? s[zr[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0), o !== "center" ? n ? s[zr[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), s;
    })
  };
}
const Qm = F({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...se(),
  ...tn({
    location: "top"
  }),
  ...He(),
  ...ke(),
  ...Ae()
}, "VProgressLinear"), Al = W()({
  name: "VProgressLinear",
  props: Qm(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    var D;
    let {
      slots: t
    } = n;
    const a = de(e, "modelValue"), {
      isRtl: l,
      rtlClasses: i
    } = nt(), {
      themeClasses: o
    } = Ee(e), {
      locationStyles: r
    } = Nn(e), {
      textColorClasses: s,
      textColorStyles: c
    } = vt(() => e.color), {
      backgroundColorClasses: u,
      backgroundColorStyles: d
    } = Le(() => e.bgColor || e.color), {
      backgroundColorClasses: v,
      backgroundColorStyles: f
    } = Le(() => e.bufferColor || e.bgColor || e.color), {
      backgroundColorClasses: g,
      backgroundColorStyles: b
    } = Le(() => e.color), {
      roundedClasses: m
    } = Ye(e), {
      intersectionRef: y,
      isIntersecting: h
    } = Ra(), C = w(() => parseFloat(e.max)), p = w(() => parseFloat(e.height)), _ = w(() => Me(parseFloat(e.bufferValue) / C.value * 100, 0, 100)), P = w(() => Me(parseFloat(a.value) / C.value * 100, 0, 100)), I = w(() => l.value !== e.reverse), V = w(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), T = Oe && ((D = window.matchMedia) == null ? void 0 : D.call(window, "(forced-colors: active)").matches);
    function A(x) {
      if (!y.value) return;
      const {
        left: B,
        right: M,
        width: L
      } = y.value.getBoundingClientRect(), N = I.value ? L - x.clientX + (M - L) : x.clientX - B;
      a.value = Math.round(N / L * C.value);
    }
    return G(() => k(e.tag, {
      ref: y,
      class: z(["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && h.value,
        "v-progress-linear--reverse": I.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, m.value, o.value, i.value, e.class]),
      style: le([{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? oe(p.value) : 0,
        "--v-progress-linear-height": oe(p.value),
        ...e.absolute ? r.value : {}
      }, e.style]),
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(a.value), C.value),
      onClick: e.clickable && A
    }, {
      default: () => [e.stream && S("div", {
        key: "stream",
        class: z(["v-progress-linear__stream", s.value]),
        style: {
          ...c.value,
          [I.value ? "left" : "right"]: oe(-p.value),
          borderTop: `${oe(p.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${oe(p.value / 4)})`,
          width: oe(100 - _.value, "%"),
          "--v-progress-linear-stream-to": oe(p.value * (I.value ? 1 : -1))
        }
      }, null), S("div", {
        class: z(["v-progress-linear__background", T ? void 0 : u.value]),
        style: le([d.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }])
      }, null), S("div", {
        class: z(["v-progress-linear__buffer", T ? void 0 : v.value]),
        style: le([f.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: oe(_.value, "%")
        }])
      }, null), k(on, {
        name: V.value
      }, {
        default: () => [e.indeterminate ? S("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((x) => S("div", {
          key: x,
          class: z(["v-progress-linear__indeterminate", x, T ? void 0 : g.value]),
          style: le(b.value)
        }, null))]) : S("div", {
          class: z(["v-progress-linear__determinate", T ? void 0 : g.value]),
          style: le([b.value, {
            width: oe(P.value, "%")
          }])
        }, null)]
      }), t.default && S("div", {
        class: "v-progress-linear__content"
      }, [t.default({
        value: P.value,
        buffer: _.value
      })])]
    })), {};
  }
}), Tl = F({
  loading: [Boolean, String]
}, "loader");
function Na(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yt();
  return {
    loaderClasses: E(() => ({
      [`${n}--loading`]: e.loading
    }))
  };
}
function Ha(e, n) {
  var a;
  let {
    slots: t
  } = n;
  return S("div", {
    class: z(`${e.name}__loader`)
  }, [((a = t.default) == null ? void 0 : a.call(t, {
    color: e.color,
    isActive: e.active
  })) || k(Al, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const Jm = ["static", "relative", "fixed", "absolute", "sticky"], oa = F({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Jm.includes(e)
    )
  }
}, "position");
function ra(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yt();
  return {
    positionClasses: E(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
function eg() {
  const e = Xe("useRoute");
  return w(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function vu() {
  var e, n;
  return (n = (e = Xe("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function za(e, n) {
  var u, d;
  const t = fs("RouterLink"), a = E(() => !!(e.href || e.to)), l = w(() => (a == null ? void 0 : a.value) || mr(n, "click") || mr(e, "click"));
  if (typeof t == "string" || !("useLink" in t)) {
    const v = E(() => e.href);
    return {
      isLink: a,
      isClickable: l,
      href: v,
      linkProps: Ct({
        href: v
      })
    };
  }
  const i = t.useLink({
    to: E(() => e.to || ""),
    replace: E(() => e.replace)
  }), o = w(() => e.to ? i : void 0), r = eg(), s = w(() => {
    var v, f, g;
    return o.value ? e.exact ? r.value ? ((g = o.value.isExactActive) == null ? void 0 : g.value) && ct(o.value.route.value.query, r.value.query) : ((f = o.value.isExactActive) == null ? void 0 : f.value) ?? !1 : ((v = o.value.isActive) == null ? void 0 : v.value) ?? !1 : !1;
  }), c = w(() => {
    var v;
    return e.to ? (v = o.value) == null ? void 0 : v.route.value.href : e.href;
  });
  return {
    isLink: a,
    isClickable: l,
    isActive: s,
    route: (u = o.value) == null ? void 0 : u.route,
    navigate: (d = o.value) == null ? void 0 : d.navigate,
    href: c,
    linkProps: Ct({
      href: c,
      "aria-current": E(() => s.value ? "page" : void 0)
    })
  };
}
const Wa = F({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let ei = !1;
function tg(e, n) {
  let t = !1, a, l;
  Oe && (e != null && e.beforeEach) && (Pe(() => {
    window.addEventListener("popstate", i), a = e.beforeEach((o, r, s) => {
      ei ? t ? n(s) : s() : setTimeout(() => t ? n(s) : s()), ei = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      ei = !1;
    });
  }), lt(() => {
    window.removeEventListener("popstate", i), a == null || a(), l == null || l();
  }));
  function i(o) {
    var r;
    (r = o.state) != null && r.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
function ng(e, n) {
  ae(() => {
    var t;
    return (t = e.isActive) == null ? void 0 : t.value;
  }, (t) => {
    e.isLink.value && t != null && n && Pe(() => {
      n(t);
    });
  }, {
    immediate: !0
  });
}
const Ii = Symbol("rippleStop"), ag = 80;
function Wr(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function Ai(e) {
  return e.constructor.name === "TouchEvent";
}
function fu(e) {
  return e.constructor.name === "KeyboardEvent";
}
const lg = function(e, n) {
  var d;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!fu(e)) {
    const v = n.getBoundingClientRect(), f = Ai(e) ? e.touches[e.touches.length - 1] : e;
    a = f.clientX - v.left, l = f.clientY - v.top;
  }
  let i = 0, o = 0.3;
  (d = n._ripple) != null && d.circle ? (o = 0.15, i = n.clientWidth / 2, i = t.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(n.clientWidth ** 2 + n.clientHeight ** 2) / 2;
  const r = `${(n.clientWidth - i * 2) / 2}px`, s = `${(n.clientHeight - i * 2) / 2}px`, c = t.center ? r : `${a - i}px`, u = t.center ? s : `${l - i}px`;
  return {
    radius: i,
    scale: o,
    x: c,
    y: u,
    centerX: r,
    centerY: s
  };
}, fl = {
  /* eslint-disable max-statements */
  show(e, n) {
    var f;
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((f = n == null ? void 0 : n._ripple) != null && f.enabled))
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", t.class && (a.className += ` ${t.class}`);
    const {
      radius: i,
      scale: o,
      x: r,
      y: s,
      centerX: c,
      centerY: u
    } = lg(e, n, t), d = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = d, l.style.height = d, n.appendChild(a);
    const v = window.getComputedStyle(n);
    v && v.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Wr(l, `translate(${r}, ${s}) scale3d(${o},${o},${o})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Wr(l, `translate(${c}, ${u}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled)) return;
    const n = e.getElementsByClassName("v-ripple__animation");
    if (n.length === 0) return;
    const t = n[n.length - 1];
    if (t.dataset.isHiding) return;
    t.dataset.isHiding = "true";
    const a = performance.now() - Number(t.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = t.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(t.parentNode);
      }, 300);
    }, l);
  }
};
function mu(e) {
  return typeof e > "u" || !!e;
}
function Va(e) {
  const n = {}, t = e.currentTarget;
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[Ii])) {
    if (e[Ii] = !0, Ai(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch) return;
    if (n.center = t._ripple.centered || fu(e), t._ripple.class && (n.class = t._ripple.class), Ai(e)) {
      if (t._ripple.showTimerCommit) return;
      t._ripple.showTimerCommit = () => {
        fl.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = t == null ? void 0 : t._ripple) != null && a.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, ag);
    } else
      fl.show(e, t, n);
  }
}
function Ur(e) {
  e[Ii] = !0;
}
function Pt(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit) {
      n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, n._ripple.showTimer = window.setTimeout(() => {
        Pt(e);
      });
      return;
    }
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), fl.hide(n);
  }
}
function gu(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let pa = !1;
function jr(e, n) {
  !pa && n.includes(e.key) && (pa = !0, Va(e));
}
function hu(e) {
  pa = !1, Pt(e);
}
function yu(e) {
  pa && (pa = !1, Pt(e));
}
function bu(e, n, t) {
  const {
    value: a,
    modifiers: l
  } = n, i = mu(a);
  i || fl.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle;
  const o = ba(a) ? a : {};
  o.class && (e._ripple.class = o.class);
  const r = o.keys ?? ["Enter", "Space"];
  if (e._ripple.keyDownHandler = (s) => jr(s, r), i && !t) {
    if (l.stop) {
      e.addEventListener("touchstart", Ur, {
        passive: !0
      }), e.addEventListener("mousedown", Ur);
      return;
    }
    e.addEventListener("touchstart", Va, {
      passive: !0
    }), e.addEventListener("touchend", Pt, {
      passive: !0
    }), e.addEventListener("touchmove", gu, {
      passive: !0
    }), e.addEventListener("touchcancel", Pt), e.addEventListener("mousedown", Va), e.addEventListener("mouseup", Pt), e.addEventListener("mouseleave", Pt), e.addEventListener("keydown", (s) => jr(s, r)), e.addEventListener("keyup", hu), e.addEventListener("blur", yu), e.addEventListener("dragstart", Pt, {
      passive: !0
    });
  } else !i && t && ku(e);
}
function ku(e) {
  var n;
  e.removeEventListener("mousedown", Va), e.removeEventListener("touchstart", Va), e.removeEventListener("touchend", Pt), e.removeEventListener("touchmove", gu), e.removeEventListener("touchcancel", Pt), e.removeEventListener("mouseup", Pt), e.removeEventListener("mouseleave", Pt), (n = e._ripple) != null && n.keyDownHandler && e.removeEventListener("keydown", e._ripple.keyDownHandler), e.removeEventListener("keyup", hu), e.removeEventListener("dragstart", Pt), e.removeEventListener("blur", yu);
}
function ig(e, n) {
  bu(e, n, !1);
}
function og(e) {
  ku(e), delete e._ripple;
}
function rg(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = mu(n.oldValue);
  bu(e, n, t);
}
const kt = {
  mounted: ig,
  unmounted: og,
  updated: rg
}, Dl = F({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: wo
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: fe,
  appendIcon: fe,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...Vt(),
  ...se(),
  ...it(),
  ...Je(),
  ...at(),
  ...Fn(),
  ...Tl(),
  ...tn(),
  ...oa(),
  ...He(),
  ...Wa(),
  ...Kt(),
  ...ke({
    tag: "button"
  }),
  ...Ae(),
  ...Mt({
    variant: "elevated"
  })
}, "VBtn"), xe = W()({
  name: "VBtn",
  props: Dl(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Ee(e), {
      borderClasses: i
    } = pt(e), {
      densityClasses: o
    } = wt(e), {
      dimensionStyles: r
    } = et(e), {
      elevationClasses: s
    } = st(e), {
      loaderClasses: c
    } = Na(e), {
      locationStyles: u
    } = Nn(e), {
      positionClasses: d
    } = ra(e), {
      roundedClasses: v
    } = Ye(e), {
      sizeClasses: f,
      sizeStyles: g
    } = ia(e), b = Rn(e, e.symbol, !1), m = za(e, t), y = w(() => {
      var D;
      return e.active !== void 0 ? e.active : m.isLink.value ? (D = m.isActive) == null ? void 0 : D.value : b == null ? void 0 : b.isSelected.value;
    }), h = E(() => y.value ? e.activeColor ?? e.color : e.color), C = w(() => {
      var x, B;
      return {
        color: (b == null ? void 0 : b.isSelected.value) && (!m.isLink.value || ((x = m.isActive) == null ? void 0 : x.value)) || !b || ((B = m.isActive) == null ? void 0 : B.value) ? h.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: p,
      colorStyles: _,
      variantClasses: P
    } = $n(C), I = w(() => (b == null ? void 0 : b.disabled.value) || e.disabled), V = E(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), T = w(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function A(D) {
      var x;
      I.value || m.isLink.value && (D.metaKey || D.ctrlKey || D.shiftKey || D.button !== 0 || t.target === "_blank") || ((x = m.navigate) == null || x.call(m, D), b == null || b.toggle());
    }
    return ng(m, b == null ? void 0 : b.select), G(() => {
      const D = m.isLink.value ? "a" : e.tag, x = !!(e.prependIcon || a.prepend), B = !!(e.appendIcon || a.append), M = !!(e.icon && e.icon !== !0);
      return We(k(D, H({
        type: D === "a" ? void 0 : "button",
        class: ["v-btn", b == null ? void 0 : b.selectedClass.value, {
          "v-btn--active": y.value,
          "v-btn--block": e.block,
          "v-btn--disabled": I.value,
          "v-btn--elevated": V.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, i.value, p.value, o.value, s.value, c.value, d.value, v.value, f.value, P.value, e.class],
        style: [_.value, r.value, u.value, g.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: I.value || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: A,
        value: T.value
      }, m.linkProps), {
        default: () => {
          var L;
          return [vn(!0, "v-btn"), !e.icon && x && S("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? k(we, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : k(Be, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), S("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && M ? k(Be, {
            key: "content-icon",
            icon: e.icon
          }, null) : k(we, {
            key: "content-defaults",
            disabled: !M,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var N;
              return [((N = a.default) == null ? void 0 : N.call(a)) ?? tt(e.text)];
            }
          })]), !e.icon && B && S("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? k(we, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : k(Be, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && S("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((L = a.loader) == null ? void 0 : L.call(a)) ?? k(rn, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[kt, !I.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: b
    };
  }
}), sg = F({
  ...Dl({
    icon: "$menu",
    variant: "text"
  })
}, "VAppBarNavIcon"), ug = W()({
  name: "VAppBarNavIcon",
  props: sg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => k(xe, H(e, {
      class: ["v-app-bar-nav-icon"]
    }), t)), {};
  }
}), cg = W()({
  name: "VAppBarTitle",
  props: au(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => k(yo, H(e, {
      class: "v-app-bar-title"
    }), t)), {};
  }
}), Su = en("v-alert-title"), dg = F({
  iconSize: [Number, String],
  iconSizes: {
    type: Array,
    default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]]
  }
}, "iconSize");
function vg(e, n) {
  return {
    iconSize: w(() => {
      const a = new Map(e.iconSizes), l = e.iconSize ?? n() ?? "default";
      return a.has(l) ? a.get(l) : l;
    })
  };
}
const fg = ["success", "info", "warning", "error"], mg = F({
  border: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: fe,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (e) => fg.includes(e)
  },
  ...se(),
  ...it(),
  ...Je(),
  ...at(),
  ...dg(),
  ...tn(),
  ...oa(),
  ...He(),
  ...ke(),
  ...Ae(),
  ...Mt({
    variant: "flat"
  })
}, "VAlert"), wu = W()({
  name: "VAlert",
  props: mg(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = de(e, "modelValue"), i = E(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), {
      iconSize: o
    } = vg(e, () => e.prominent ? 44 : 28), {
      themeClasses: r
    } = Ee(e), {
      colorClasses: s,
      colorStyles: c,
      variantClasses: u
    } = $n(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      densityClasses: d
    } = wt(e), {
      dimensionStyles: v
    } = et(e), {
      elevationClasses: f
    } = st(e), {
      locationStyles: g
    } = Nn(e), {
      positionClasses: b
    } = ra(e), {
      roundedClasses: m
    } = Ye(e), {
      textColorClasses: y,
      textColorStyles: h
    } = vt(() => e.borderColor), {
      t: C
    } = Ne(), p = E(() => ({
      "aria-label": C(e.closeLabel),
      onClick(_) {
        l.value = !1, t("click:close", _);
      }
    }));
    return () => {
      const _ = !!(a.prepend || i.value), P = !!(a.title || e.title), I = !!(a.close || e.closable), V = {
        density: e.density,
        icon: i.value,
        size: o.value
      };
      return l.value && k(e.tag, {
        class: z(["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, r.value, s.value, d.value, f.value, b.value, m.value, u.value, e.class]),
        style: le([c.value, v.value, g.value, e.style]),
        role: "alert"
      }, {
        default: () => {
          var T, A;
          return [vn(!1, "v-alert"), e.border && S("div", {
            key: "border",
            class: z(["v-alert__border", y.value]),
            style: le(h.value)
          }, null), _ && S("div", {
            key: "prepend",
            class: "v-alert__prepend"
          }, [a.prepend ? k(we, {
            key: "prepend-defaults",
            disabled: !i.value,
            defaults: {
              VIcon: {
                ...V
              }
            }
          }, a.prepend) : k(Be, H({
            key: "prepend-icon"
          }, V), null)]), S("div", {
            class: "v-alert__content"
          }, [P && k(Su, {
            key: "title"
          }, {
            default: () => {
              var D;
              return [((D = a.title) == null ? void 0 : D.call(a)) ?? e.title];
            }
          }), ((T = a.text) == null ? void 0 : T.call(a)) ?? e.text, (A = a.default) == null ? void 0 : A.call(a)]), a.append && S("div", {
            key: "append",
            class: "v-alert__append"
          }, [a.append()]), I && S("div", {
            key: "close",
            class: "v-alert__close"
          }, [a.close ? k(we, {
            key: "close-defaults",
            defaults: {
              VBtn: {
                icon: e.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var D;
              return [(D = a.close) == null ? void 0 : D.call(a, {
                props: p.value
              })];
            }
          }) : k(xe, H({
            key: "close-btn",
            icon: e.closeIcon,
            size: "x-small",
            variant: "text"
          }, p.value), null)])];
        }
      });
    };
  }
}), gg = F({
  start: Boolean,
  end: Boolean,
  icon: fe,
  image: String,
  text: String,
  ...Vt(),
  ...se(),
  ...it(),
  ...He(),
  ...Kt(),
  ...ke(),
  ...Ae(),
  ...Mt({
    variant: "flat"
  })
}, "VAvatar"), Et = W()({
  name: "VAvatar",
  props: gg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ee(e), {
      borderClasses: l
    } = pt(e), {
      colorClasses: i,
      colorStyles: o,
      variantClasses: r
    } = $n(e), {
      densityClasses: s
    } = wt(e), {
      roundedClasses: c
    } = Ye(e), {
      sizeClasses: u,
      sizeStyles: d
    } = ia(e);
    return G(() => k(e.tag, {
      class: z(["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, i.value, s.value, c.value, u.value, r.value, e.class]),
      style: le([o.value, d.value, e.style])
    }, {
      default: () => [t.default ? k(we, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            src: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [t.default()]
      }) : e.image ? k(Qt, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? k(Be, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, vn(!1, "v-avatar")]
    })), {};
  }
}), hg = F({
  text: String,
  onClick: dt(),
  ...se(),
  ...Ae()
}, "VLabel"), sa = W()({
  name: "VLabel",
  props: hg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => {
      var a;
      return S("label", {
        class: z(["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class]),
        style: le(e.style),
        onClick: e.onClick
      }, [e.text, (a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), Cu = Symbol.for("vuetify:selection-control-group"), Co = F({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: fe,
  trueIcon: fe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: ct
  },
  ...se(),
  ...it(),
  ...Ae()
}, "SelectionControlGroup"), yg = F({
  ...Co({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup"), xu = W()({
  name: "VSelectionControlGroup",
  props: yg(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = de(e, "modelValue"), l = xt(), i = E(() => e.id || `v-selection-control-group-${l}`), o = E(() => e.name || i.value), r = /* @__PURE__ */ new Set();
    return Re(Cu, {
      modelValue: a,
      forceUpdate: () => {
        r.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        r.add(s), lt(() => {
          r.delete(s);
        });
      }
    }), Ge({
      [e.defaultsTarget]: {
        color: E(() => e.color),
        disabled: E(() => e.disabled),
        density: E(() => e.density),
        error: E(() => e.error),
        inline: E(() => e.inline),
        modelValue: a,
        multiple: E(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: o,
        falseIcon: E(() => e.falseIcon),
        trueIcon: E(() => e.trueIcon),
        readonly: E(() => e.readonly),
        ripple: E(() => e.ripple),
        type: E(() => e.type),
        valueComparator: E(() => e.valueComparator)
      }
    }), G(() => {
      var s;
      return S("div", {
        class: z(["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class]),
        style: le(e.style),
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(s = t.default) == null ? void 0 : s.call(t)]);
    }), {};
  }
}), Bl = F({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...se(),
  ...Co()
}, "VSelectionControl");
function bg(e) {
  const n = Ie(Cu, void 0), {
    densityClasses: t
  } = wt(e), a = de(e, "modelValue"), l = w(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = w(() => e.falseValue !== void 0 ? e.falseValue : !1), o = w(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = w({
    get() {
      const f = n ? n.modelValue.value : a.value;
      return o.value ? Ue(f).some((g) => e.valueComparator(g, l.value)) : e.valueComparator(f, l.value);
    },
    set(f) {
      if (e.readonly) return;
      const g = f ? l.value : i.value;
      let b = g;
      o.value && (b = f ? [...Ue(a.value), g] : Ue(a.value).filter((m) => !e.valueComparator(m, l.value))), n ? n.modelValue.value = b : a.value = b;
    }
  }), {
    textColorClasses: s,
    textColorStyles: c
  } = vt(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  }), {
    backgroundColorClasses: u,
    backgroundColorStyles: d
  } = Le(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor), v = w(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: n,
    densityClasses: t,
    trueValue: l,
    falseValue: i,
    model: r,
    textColorClasses: s,
    textColorStyles: c,
    backgroundColorClasses: u,
    backgroundColorStyles: d,
    icon: v
  };
}
const sn = W()({
  name: "VSelectionControl",
  directives: {
    vRipple: kt
  },
  inheritAttrs: !1,
  props: Bl(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      group: l,
      densityClasses: i,
      icon: o,
      model: r,
      textColorClasses: s,
      textColorStyles: c,
      backgroundColorClasses: u,
      backgroundColorStyles: d,
      trueValue: v
    } = bg(e), f = xt(), g = ee(!1), b = ee(!1), m = j(), y = E(() => e.id || `input-${f}`), h = E(() => !e.disabled && !e.readonly);
    l == null || l.onForceUpdate(() => {
      m.value && (m.value.checked = r.value);
    });
    function C(I) {
      h.value && (g.value = !0, Xn(I.target, ":focus-visible") !== !1 && (b.value = !0));
    }
    function p() {
      g.value = !1, b.value = !1;
    }
    function _(I) {
      I.stopPropagation();
    }
    function P(I) {
      if (!h.value) {
        m.value && (m.value.checked = r.value);
        return;
      }
      e.readonly && l && Pe(() => l.forceUpdate()), r.value = I.target.checked;
    }
    return G(() => {
      var D, x;
      const I = a.label ? a.label({
        label: e.label,
        props: {
          for: y.value
        }
      }) : e.label, [V, T] = dn(t), A = S("input", H({
        ref: m,
        checked: r.value,
        disabled: !!e.disabled,
        id: y.value,
        onBlur: p,
        onFocus: C,
        onInput: P,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: v.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, T), null);
      return S("div", H({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": g.value,
          "v-selection-control--focus-visible": b.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, V, {
        style: e.style
      }), [S("div", {
        class: z(["v-selection-control__wrapper", s.value]),
        style: le(c.value)
      }, [(D = a.default) == null ? void 0 : D.call(a, {
        backgroundColorClasses: u,
        backgroundColorStyles: d
      }), We(S("div", {
        class: z(["v-selection-control__input"])
      }, [((x = a.input) == null ? void 0 : x.call(a, {
        model: r,
        textColorClasses: s,
        textColorStyles: c,
        backgroundColorClasses: u,
        backgroundColorStyles: d,
        inputNode: A,
        icon: o.value,
        props: {
          onFocus: C,
          onBlur: p,
          id: y.value
        }
      })) ?? S(ue, null, [o.value && k(Be, {
        key: "icon",
        icon: o.value
      }, null), A])]), [[kt, !e.disabled && !e.readonly && e.ripple, null, {
        center: !0,
        circle: !0
      }]])]), I && k(sa, {
        for: y.value,
        onClick: _
      }, {
        default: () => [I]
      })]);
    }), {
      isFocused: g,
      input: m
    };
  }
}), Vu = F({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: fe,
    default: "$checkboxIndeterminate"
  },
  ...Bl({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), jt = W()({
  name: "VCheckboxBtn",
  props: Vu(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = de(e, "indeterminate"), l = de(e, "modelValue");
    function i(s) {
      a.value && (a.value = !1);
    }
    const o = E(() => a.value ? e.indeterminateIcon : e.falseIcon), r = E(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return G(() => {
      const s = Fe(sn.filterProps(e), ["modelValue"]);
      return k(sn, H(s, {
        modelValue: l.value,
        "onUpdate:modelValue": [(c) => l.value = c, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: o.value,
        trueIcon: r.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), t);
    }), {};
  }
});
function pu(e) {
  const {
    t: n
  } = Ne();
  function t(a) {
    let {
      name: l,
      color: i,
      ...o
    } = a;
    const r = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], s = e[`onClick:${l}`];
    function c(d) {
      d.key !== "Enter" && d.key !== " " || (d.preventDefault(), d.stopPropagation(), xl(s, new PointerEvent("click", d)));
    }
    const u = s && r ? n(`$vuetify.input.${r}`, e.label ?? "") : void 0;
    return k(Be, H({
      icon: e[`${l}Icon`],
      "aria-label": u,
      onClick: s,
      onKeydown: c,
      color: i
    }, o), null);
  }
  return {
    InputIcon: t
  };
}
const kg = F({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...se(),
  ...Ht({
    transition: {
      component: Il,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Pu = W()({
  name: "VMessages",
  props: kg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = w(() => Ue(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = vt(() => e.color);
    return G(() => k(yt, {
      transition: e.transition,
      tag: "div",
      class: z(["v-messages", l.value, e.class]),
      style: le([i.value, e.style])
    }, {
      default: () => [e.active && a.value.map((o, r) => S("div", {
        class: "v-messages__message",
        key: `${r}-${a.value}`
      }, [t.message ? t.message({
        message: o
      }) : o]))]
    })), {};
  }
}), Ua = F({
  focused: Boolean,
  "onUpdate:focused": dt()
}, "focus");
function nn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yt();
  const t = de(e, "focused"), a = E(() => ({
    [`${n}--focused`]: t.value
  }));
  function l() {
    t.value = !0;
  }
  function i() {
    t.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: t,
    focus: l,
    blur: i
  };
}
const _u = Symbol.for("vuetify:form"), Sg = F({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function wg(e) {
  const n = de(e, "modelValue"), t = E(() => e.disabled), a = E(() => e.readonly), l = ee(!1), i = j([]), o = j([]);
  async function r() {
    const u = [];
    let d = !0;
    o.value = [], l.value = !0;
    for (const v of i.value) {
      const f = await v.validate();
      if (f.length > 0 && (d = !1, u.push({
        id: v.id,
        errorMessages: f
      })), !d && e.fastFail) break;
    }
    return o.value = u, l.value = !1, {
      valid: d,
      errors: o.value
    };
  }
  function s() {
    i.value.forEach((u) => u.reset());
  }
  function c() {
    i.value.forEach((u) => u.resetValidation());
  }
  return ae(i, () => {
    let u = 0, d = 0;
    const v = [];
    for (const f of i.value)
      f.isValid === !1 ? (d++, v.push({
        id: f.id,
        errorMessages: f.errorMessages
      })) : f.isValid === !0 && u++;
    o.value = v, n.value = d > 0 ? !1 : u === i.value.length ? !0 : null;
  }, {
    deep: !0,
    flush: "post"
  }), Re(_u, {
    register: (u) => {
      let {
        id: d,
        vm: v,
        validate: f,
        reset: g,
        resetValidation: b
      } = u;
      i.value.some((m) => m.id === d) && Tt(`Duplicate input name "${d}"`), i.value.push({
        id: d,
        validate: f,
        reset: g,
        resetValidation: b,
        vm: si(v),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (u) => {
      i.value = i.value.filter((d) => d.id !== u);
    },
    update: (u, d, v) => {
      const f = i.value.find((g) => g.id === u);
      f && (f.isValid = d, f.errorMessages = v);
    },
    isDisabled: t,
    isReadonly: a,
    isValidating: l,
    isValid: n,
    items: i,
    validateOn: E(() => e.validateOn)
  }), {
    errors: o,
    isDisabled: t,
    isReadonly: a,
    isValidating: l,
    isValid: n,
    items: i,
    validate: r,
    reset: s,
    resetValidation: c
  };
}
function ja(e) {
  const n = Ie(_u, null);
  return {
    ...n,
    isReadonly: w(() => !!((e == null ? void 0 : e.readonly) ?? (n == null ? void 0 : n.isReadonly.value))),
    isDisabled: w(() => !!((e == null ? void 0 : e.disabled) ?? (n == null ? void 0 : n.isDisabled.value)))
  };
}
const Cg = Symbol.for("vuetify:rules");
function xg(e) {
  const n = Ie(Cg, null);
  return n ? n(e) : E(e);
}
const Iu = F({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...Ua()
}, "validation");
function Au(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yt(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xt();
  const a = de(e, "modelValue"), l = w(() => e.validationValue === void 0 ? a.value : e.validationValue), i = ja(e), o = xg(() => e.rules), r = j([]), s = ee(!0), c = w(() => !!(Ue(a.value === "" ? null : a.value).length || Ue(l.value === "" ? null : l.value).length)), u = w(() => {
    var p;
    return (p = e.errorMessages) != null && p.length ? Ue(e.errorMessages).concat(r.value).slice(0, Math.max(0, Number(e.maxErrors))) : r.value;
  }), d = w(() => {
    var P;
    let p = (e.validateOn ?? ((P = i.validateOn) == null ? void 0 : P.value)) || "input";
    p === "lazy" && (p = "input lazy"), p === "eager" && (p = "input eager");
    const _ = new Set((p == null ? void 0 : p.split(" ")) ?? []);
    return {
      input: _.has("input"),
      blur: _.has("blur") || _.has("input") || _.has("invalid-input"),
      invalidInput: _.has("invalid-input"),
      lazy: _.has("lazy"),
      eager: _.has("eager")
    };
  }), v = w(() => {
    var p;
    return e.error || (p = e.errorMessages) != null && p.length ? !1 : e.rules.length ? s.value ? r.value.length || d.value.lazy ? null : !0 : !r.value.length : !0;
  }), f = ee(!1), g = w(() => ({
    [`${n}--error`]: v.value === !1,
    [`${n}--dirty`]: c.value,
    [`${n}--disabled`]: i.isDisabled.value,
    [`${n}--readonly`]: i.isReadonly.value
  })), b = Xe("validation"), m = w(() => e.name ?? be(t));
  Oa(() => {
    var p;
    (p = i.register) == null || p.call(i, {
      id: m.value,
      vm: b,
      validate: C,
      reset: y,
      resetValidation: h
    });
  }), St(() => {
    var p;
    (p = i.unregister) == null || p.call(i, m.value);
  }), ft(async () => {
    var p;
    d.value.lazy || await C(!d.value.eager), (p = i.update) == null || p.call(i, m.value, v.value, u.value);
  }), bt(() => d.value.input || d.value.invalidInput && v.value === !1, () => {
    ae(l, () => {
      if (l.value != null)
        C();
      else if (e.focused) {
        const p = ae(() => e.focused, (_) => {
          _ || C(), p();
        });
      }
    });
  }), bt(() => d.value.blur, () => {
    ae(() => e.focused, (p) => {
      p || C();
    });
  }), ae([v, u], () => {
    var p;
    (p = i.update) == null || p.call(i, m.value, v.value, u.value);
  });
  async function y() {
    a.value = null, await Pe(), await h();
  }
  async function h() {
    s.value = !0, d.value.lazy ? r.value = [] : await C(!d.value.eager);
  }
  async function C() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const _ = [];
    f.value = !0;
    for (const P of o.value) {
      if (_.length >= Number(e.maxErrors ?? 1))
        break;
      const V = await (typeof P == "function" ? P : () => P)(l.value);
      if (V !== !0) {
        if (V !== !1 && typeof V != "string") {
          console.warn(`${V} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        _.push(V || "");
      }
    }
    return r.value = _, f.value = !1, s.value = p, r.value;
  }
  return {
    errorMessages: u,
    isDirty: c,
    isDisabled: i.isDisabled,
    isReadonly: i.isReadonly,
    isPristine: s,
    isValid: v,
    isValidating: f,
    reset: y,
    resetValidation: h,
    validate: C,
    validationClasses: g
  };
}
const an = F({
  id: String,
  appendIcon: fe,
  baseColor: String,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  color: String,
  glow: Boolean,
  iconColor: [Boolean, String],
  prependIcon: fe,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": dt(),
  "onClick:append": dt(),
  ...se(),
  ...it(),
  ...Jt(Je(), ["maxWidth", "minWidth", "width"]),
  ...Ae(),
  ...Iu()
}, "VInput"), gt = W()({
  name: "VInput",
  props: {
    ...an()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const {
      densityClasses: i
    } = wt(e), {
      dimensionStyles: o
    } = et(e), {
      themeClasses: r
    } = Ee(e), {
      rtlClasses: s
    } = nt(), {
      InputIcon: c
    } = pu(e), u = xt(), d = w(() => e.id || `input-${u}`), {
      errorMessages: v,
      isDirty: f,
      isDisabled: g,
      isReadonly: b,
      isPristine: m,
      isValid: y,
      isValidating: h,
      reset: C,
      resetValidation: p,
      validate: _,
      validationClasses: P
    } = Au(e, "v-input", d), I = w(() => {
      var M;
      return (M = e.errorMessages) != null && M.length || !m.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    }), V = E(() => I.value.length > 0), T = E(() => !e.hideDetails || e.hideDetails === "auto" && (V.value || !!a.details)), A = w(() => T.value ? `${d.value}-messages` : void 0), D = w(() => ({
      id: d,
      messagesId: A,
      isDirty: f,
      isDisabled: g,
      isReadonly: b,
      isPristine: m,
      isValid: y,
      isValidating: h,
      hasDetails: T,
      reset: C,
      resetValidation: p,
      validate: _
    })), x = E(() => e.error || e.disabled ? void 0 : e.focused ? e.color : e.baseColor), B = E(() => {
      if (e.iconColor)
        return e.iconColor === !0 ? x.value : e.iconColor;
    });
    return G(() => {
      var N, Y, te, q;
      const M = !!(a.prepend || e.prependIcon), L = !!(a.append || e.appendIcon);
      return S("div", {
        class: z(["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--focused": e.focused,
          "v-input--glow": e.glow,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, r.value, s.value, P.value, e.class]),
        style: le([o.value, e.style])
      }, [M && S("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(N = a.prepend) == null ? void 0 : N.call(a, D.value), e.prependIcon && k(c, {
        key: "prepend-icon",
        name: "prepend",
        color: B.value
      }, null)]), a.default && S("div", {
        class: "v-input__control"
      }, [(Y = a.default) == null ? void 0 : Y.call(a, D.value)]), L && S("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && k(c, {
        key: "append-icon",
        name: "append",
        color: B.value
      }, null), (te = a.append) == null ? void 0 : te.call(a, D.value)]), T.value && S("div", {
        id: A.value,
        class: "v-input__details",
        role: "alert",
        "aria-live": "polite"
      }, [k(Pu, {
        active: V.value,
        messages: I.value
      }, {
        message: a.message
      }), (q = a.details) == null ? void 0 : q.call(a, D.value)])]);
    }), {
      reset: C,
      resetValidation: p,
      validate: _,
      isValid: y,
      errorMessages: v
    };
  }
}), ti = Symbol("Forwarded refs");
function ni(e, n) {
  let t = e;
  for (; t; ) {
    const a = Reflect.getOwnPropertyDescriptor(t, n);
    if (a) return a;
    t = Object.getPrototypeOf(t);
  }
}
function ut(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  return e[ti] = t, new Proxy(e, {
    get(l, i) {
      if (Reflect.has(l, i))
        return Reflect.get(l, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of t)
          if (o.value && Reflect.has(o.value, i)) {
            const r = Reflect.get(o.value, i);
            return typeof r == "function" ? r.bind(o.value) : r;
          }
      }
    },
    has(l, i) {
      if (Reflect.has(l, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const o of t)
        if (o.value && Reflect.has(o.value, i))
          return !0;
      return !1;
    },
    set(l, i, o) {
      if (Reflect.has(l, i))
        return Reflect.set(l, i, o);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const r of t)
        if (r.value && Reflect.has(r.value, i))
          return Reflect.set(r.value, i, o);
      return !1;
    },
    getOwnPropertyDescriptor(l, i) {
      var r;
      const o = Reflect.getOwnPropertyDescriptor(l, i);
      if (o) return o;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const s of t) {
          if (!s.value) continue;
          const c = ni(s.value, i) ?? ("_" in s.value ? ni((r = s.value._) == null ? void 0 : r.setupState, i) : void 0);
          if (c) return c;
        }
        for (const s of t) {
          const c = s.value && s.value[ti];
          if (!c) continue;
          const u = c.slice();
          for (; u.length; ) {
            const d = u.shift(), v = ni(d.value, i);
            if (v) return v;
            const f = d.value && d.value[ti];
            f && u.push(...f);
          }
        }
      }
    }
  });
}
const Vg = F({
  ...an(),
  ...Fe(Vu(), ["inline"])
}, "VCheckbox"), pg = W()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: Vg(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = de(e, "modelValue"), {
      isFocused: i,
      focus: o,
      blur: r
    } = nn(e), s = j(), c = xt();
    return G(() => {
      const [u, d] = dn(t), v = gt.filterProps(e), f = jt.filterProps(e);
      return k(gt, H({
        ref: s,
        class: ["v-checkbox", e.class]
      }, u, v, {
        modelValue: l.value,
        "onUpdate:modelValue": (g) => l.value = g,
        id: e.id || `checkbox-${c}`,
        focused: i.value,
        style: e.style
      }), {
        ...a,
        default: (g) => {
          let {
            id: b,
            messagesId: m,
            isDisabled: y,
            isReadonly: h,
            isValid: C
          } = g;
          return k(jt, H(f, {
            id: b.value,
            "aria-describedby": m.value,
            disabled: y.value,
            readonly: h.value
          }, d, {
            error: C.value === !1,
            modelValue: l.value,
            "onUpdate:modelValue": (p) => l.value = p,
            onFocus: o,
            onBlur: r
          }), a);
        }
      });
    }), ut({}, s);
  }
});
function Pg(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isRtl: a,
    isHorizontal: l
  } = e;
  const i = Pa(l, t), o = Tu(l, a, t), r = Pa(l, n), s = Du(l, n), c = r * 0.4;
  return o > s ? s - c : o + i < s + r ? s - i + r + c : o;
}
function _g(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isHorizontal: a
  } = e;
  const l = Pa(a, t), i = Du(a, n), o = Pa(a, n);
  return i - l / 2 + o / 2;
}
function Gr(e, n) {
  const t = e ? "scrollWidth" : "scrollHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Ig(e, n) {
  const t = e ? "clientWidth" : "clientHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Tu(e, n, t) {
  if (!t)
    return 0;
  const {
    scrollLeft: a,
    offsetWidth: l,
    scrollWidth: i
  } = t;
  return e ? n ? i - l + a : a : t.scrollTop;
}
function Pa(e, n) {
  const t = e ? "offsetWidth" : "offsetHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Du(e, n) {
  const t = e ? "offsetLeft" : "offsetTop";
  return (n == null ? void 0 : n[t]) || 0;
}
const Bu = Symbol.for("vuetify:v-slide-group"), xo = F({
  centerActive: Boolean,
  contentClass: null,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: Bu
  },
  nextIcon: {
    type: fe,
    default: "$next"
  },
  prevIcon: {
    type: fe,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...se(),
  ...Bn({
    mobile: null
  }),
  ...ke(),
  ...Mn({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), _a = W()({
  name: "VSlideGroup",
  props: xo(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isRtl: a
    } = nt(), {
      displayClasses: l,
      mobile: i
    } = $t(e), o = fn(e, e.symbol), r = ee(!1), s = ee(0), c = ee(0), u = ee(0), d = w(() => e.direction === "horizontal"), {
      resizeRef: v,
      contentRect: f
    } = Rt(), {
      resizeRef: g,
      contentRect: b
    } = Rt(), m = am(), y = w(() => ({
      container: v.el,
      duration: 200,
      easing: "easeOutQuart"
    })), h = w(() => o.selected.value.length ? o.items.value.findIndex((O) => O.id === o.selected.value[0]) : -1), C = w(() => o.selected.value.length ? o.items.value.findIndex((O) => O.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (Oe) {
      let O = -1;
      ae(() => [o.selected.value, f.value, b.value, d.value], () => {
        cancelAnimationFrame(O), O = requestAnimationFrame(() => {
          if (f.value && b.value) {
            const R = d.value ? "width" : "height";
            c.value = f.value[R], u.value = b.value[R], r.value = c.value + 1 < u.value;
          }
          if (h.value >= 0 && g.el) {
            const R = g.el.children[C.value];
            _(R, e.centerActive);
          }
        });
      });
    }
    const p = ee(!1);
    function _(O, R) {
      let U = 0;
      R ? U = _g({
        containerElement: v.el,
        isHorizontal: d.value,
        selectedElement: O
      }) : U = Pg({
        containerElement: v.el,
        isHorizontal: d.value,
        isRtl: a.value,
        selectedElement: O
      }), P(U);
    }
    function P(O) {
      if (!Oe || !v.el) return;
      const R = Pa(d.value, v.el), U = Tu(d.value, a.value, v.el);
      if (!(Gr(d.value, v.el) <= R || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(O - U) < 16)) {
        if (d.value && a.value && v.el) {
          const {
            scrollWidth: ne,
            offsetWidth: Q
          } = v.el;
          O = ne - Q - O;
        }
        d.value ? m.horizontal(O, y.value) : m(O, y.value);
      }
    }
    function I(O) {
      const {
        scrollTop: R,
        scrollLeft: U
      } = O.target;
      s.value = d.value ? U : R;
    }
    function V(O) {
      if (p.value = !0, !(!r.value || !g.el)) {
        for (const R of O.composedPath())
          for (const U of g.el.children)
            if (U === R) {
              _(U);
              return;
            }
      }
    }
    function T(O) {
      p.value = !1;
    }
    let A = !1;
    function D(O) {
      var R;
      !A && !p.value && !(O.relatedTarget && ((R = g.el) != null && R.contains(O.relatedTarget))) && L(), A = !1;
    }
    function x() {
      A = !0;
    }
    function B(O) {
      if (!g.el) return;
      function R(U) {
        O.preventDefault(), L(U);
      }
      d.value ? O.key === "ArrowRight" ? R(a.value ? "prev" : "next") : O.key === "ArrowLeft" && R(a.value ? "next" : "prev") : O.key === "ArrowDown" ? R("next") : O.key === "ArrowUp" && R("prev"), O.key === "Home" ? R("first") : O.key === "End" && R("last");
    }
    function M(O, R) {
      if (!O) return;
      let U = O;
      do
        U = U == null ? void 0 : U[R === "next" ? "nextElementSibling" : "previousElementSibling"];
      while (U != null && U.hasAttribute("disabled"));
      return U;
    }
    function L(O) {
      if (!g.el) return;
      let R;
      if (!O)
        R = ka(g.el)[0];
      else if (O === "next") {
        if (R = M(g.el.querySelector(":focus"), O), !R) return L("first");
      } else if (O === "prev") {
        if (R = M(g.el.querySelector(":focus"), O), !R) return L("last");
      } else O === "first" ? (R = g.el.firstElementChild, R != null && R.hasAttribute("disabled") && (R = M(R, "next"))) : O === "last" && (R = g.el.lastElementChild, R != null && R.hasAttribute("disabled") && (R = M(R, "prev")));
      R && R.focus({
        preventScroll: !0
      });
    }
    function N(O) {
      const R = d.value && a.value ? -1 : 1, U = (O === "prev" ? -R : R) * c.value;
      let ce = s.value + U;
      if (d.value && a.value && v.el) {
        const {
          scrollWidth: ne,
          offsetWidth: Q
        } = v.el;
        ce += ne - Q;
      }
      P(ce);
    }
    const Y = w(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), te = w(() => {
      switch (e.showArrows) {
        // Always show arrows on desktop & mobile
        case "always":
          return !0;
        // Always show arrows on desktop
        case "desktop":
          return !i.value;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior
        case !0:
          return r.value || Math.abs(s.value) > 0;
        // Always show on mobile
        case "mobile":
          return i.value || r.value || Math.abs(s.value) > 0;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop
        default:
          return !i.value && (r.value || Math.abs(s.value) > 0);
      }
    }), q = w(() => Math.abs(s.value) > 1), $ = w(() => {
      if (!v.value) return !1;
      const O = Gr(d.value, v.el), R = Ig(d.value, v.el);
      return O - R - Math.abs(s.value) > 1;
    });
    return G(() => k(e.tag, {
      class: z(["v-slide-group", {
        "v-slide-group--vertical": !d.value,
        "v-slide-group--has-affixes": te.value,
        "v-slide-group--is-overflowing": r.value
      }, l.value, e.class]),
      style: le(e.style),
      tabindex: p.value || o.selected.value.length ? -1 : 0,
      onFocus: D
    }, {
      default: () => {
        var O, R, U;
        return [te.value && S("div", {
          key: "prev",
          class: z(["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !q.value
          }]),
          onMousedown: x,
          onClick: () => q.value && N("prev")
        }, [((O = t.prev) == null ? void 0 : O.call(t, Y.value)) ?? k(xa, null, {
          default: () => [k(Be, {
            icon: a.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), S("div", {
          key: "container",
          ref: v,
          class: z(["v-slide-group__container", e.contentClass]),
          onScroll: I
        }, [S("div", {
          ref: g,
          class: "v-slide-group__content",
          onFocusin: V,
          onFocusout: T,
          onKeydown: B
        }, [(R = t.default) == null ? void 0 : R.call(t, Y.value)])]), te.value && S("div", {
          key: "next",
          class: z(["v-slide-group__next", {
            "v-slide-group__next--disabled": !$.value
          }]),
          onMousedown: x,
          onClick: () => $.value && N("next")
        }, [((U = t.next) == null ? void 0 : U.call(t, Y.value)) ?? k(xa, null, {
          default: () => [k(Be, {
            icon: a.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: o.selected,
      scrollTo: N,
      scrollOffset: s,
      focus: L,
      hasPrev: q,
      hasNext: $
    };
  }
}), Ou = Symbol.for("vuetify:v-chip-group"), Ag = F({
  baseColor: String,
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: ct
  },
  ...xo(),
  ...se(),
  ...Mn({
    selectedClass: "v-chip--selected"
  }),
  ...ke(),
  ...Ae(),
  ...Mt({
    variant: "tonal"
  })
}, "VChipGroup"), Tg = W()({
  name: "VChipGroup",
  props: Ag(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ee(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: s
    } = fn(e, Ou);
    return Ge({
      VChip: {
        baseColor: E(() => e.baseColor),
        color: E(() => e.color),
        disabled: E(() => e.disabled),
        filter: E(() => e.filter),
        variant: E(() => e.variant)
      }
    }), G(() => {
      const c = _a.filterProps(e);
      return k(_a, H(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, a.value, e.class],
        style: e.style
      }), {
        default: () => {
          var u;
          return [(u = t.default) == null ? void 0 : u.call(t, {
            isSelected: l,
            select: i,
            next: o,
            prev: r,
            selected: s.value
          })];
        }
      });
    }), {};
  }
}), Dg = F({
  activeClass: String,
  appendAvatar: String,
  appendIcon: fe,
  baseColor: String,
  closable: Boolean,
  closeIcon: {
    type: fe,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: fe,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: fe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: dt(),
  onClickOnce: dt(),
  ...Vt(),
  ...se(),
  ...it(),
  ...at(),
  ...Fn(),
  ...He(),
  ...Wa(),
  ...Kt(),
  ...ke({
    tag: "span"
  }),
  ...Ae(),
  ...Mt({
    variant: "tonal"
  })
}, "VChip"), ua = W()({
  name: "VChip",
  directives: {
    vRipple: kt
  },
  props: Dg(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: i
    } = Ne(), {
      borderClasses: o
    } = pt(e), {
      densityClasses: r
    } = wt(e), {
      elevationClasses: s
    } = st(e), {
      roundedClasses: c
    } = Ye(e), {
      sizeClasses: u
    } = ia(e), {
      themeClasses: d
    } = Ee(e), v = de(e, "modelValue"), f = Rn(e, Ou, !1), g = za(e, t), b = E(() => e.link !== !1 && g.isLink.value), m = w(() => !e.disabled && e.link !== !1 && (!!f || e.link || g.isClickable.value)), y = E(() => ({
      "aria-label": i(e.closeLabel),
      disabled: e.disabled,
      onClick(I) {
        I.preventDefault(), I.stopPropagation(), v.value = !1, a("click:close", I);
      }
    })), {
      colorClasses: h,
      colorStyles: C,
      variantClasses: p
    } = $n(() => ({
      color: !f || f.isSelected.value ? e.color ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    function _(I) {
      var V;
      a("click", I), m.value && ((V = g.navigate) == null || V.call(g, I), f == null || f.toggle());
    }
    function P(I) {
      (I.key === "Enter" || I.key === " ") && (I.preventDefault(), _(I));
    }
    return () => {
      var M;
      const I = g.isLink.value ? "a" : e.tag, V = !!(e.appendIcon || e.appendAvatar), T = !!(V || l.append), A = !!(l.close || e.closable), D = !!(l.filter || e.filter) && f, x = !!(e.prependIcon || e.prependAvatar), B = !!(x || l.prepend);
      return v.value && We(k(I, H({
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": m.value,
          "v-chip--filter": D,
          "v-chip--pill": e.pill,
          [`${e.activeClass}`]: e.activeClass && ((M = g.isActive) == null ? void 0 : M.value)
        }, d.value, o.value, h.value, r.value, s.value, c.value, u.value, p.value, f == null ? void 0 : f.selectedClass.value, e.class],
        style: [C.value, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        tabindex: m.value ? 0 : void 0,
        onClick: _,
        onKeydown: m.value && !b.value && P
      }, g.linkProps), {
        default: () => {
          var L;
          return [vn(m.value, "v-chip"), D && k(ko, {
            key: "filter"
          }, {
            default: () => [We(S("div", {
              class: "v-chip__filter"
            }, [l.filter ? k(we, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, l.filter) : k(Be, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[Lt, f.isSelected.value]])]
          }), B && S("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? k(we, {
            key: "prepend-defaults",
            disabled: !x,
            defaults: {
              VAvatar: {
                image: e.prependAvatar,
                start: !0
              },
              VIcon: {
                icon: e.prependIcon,
                start: !0
              }
            }
          }, l.prepend) : S(ue, null, [e.prependIcon && k(Be, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && k(Et, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), S("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((L = l.default) == null ? void 0 : L.call(l, {
            isSelected: f == null ? void 0 : f.isSelected.value,
            selectedClass: f == null ? void 0 : f.selectedClass.value,
            select: f == null ? void 0 : f.select,
            toggle: f == null ? void 0 : f.toggle,
            value: f == null ? void 0 : f.value.value,
            disabled: e.disabled
          })) ?? tt(e.text)]), T && S("div", {
            key: "append",
            class: "v-chip__append"
          }, [l.append ? k(we, {
            key: "append-defaults",
            disabled: !V,
            defaults: {
              VAvatar: {
                end: !0,
                image: e.appendAvatar
              },
              VIcon: {
                end: !0,
                icon: e.appendIcon
              }
            }
          }, l.append) : S(ue, null, [e.appendIcon && k(Be, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && k(Et, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), A && S("button", H({
            key: "close",
            class: "v-chip__close",
            type: "button",
            "data-testid": "close-chip"
          }, y.value), [l.close ? k(we, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, l.close) : k(Be, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[kt, m.value && e.ripple, null]]);
    };
  }
}), Bg = F({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...se(),
  ...Ae()
}, "VDivider"), At = W()({
  name: "VDivider",
  props: Bg(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Ee(e), {
      textColorClasses: i,
      textColorStyles: o
    } = vt(() => e.color), r = w(() => {
      const s = {};
      return e.length && (s[e.vertical ? "height" : "width"] = oe(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = oe(e.thickness)), s;
    });
    return G(() => {
      const s = S("hr", {
        class: z([{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, l.value, i.value, e.class]),
        style: le([r.value, o.value, {
          "--v-border-opacity": e.opacity
        }, e.style]),
        "aria-orientation": !t.role || t.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${t.role || "separator"}`
      }, null);
      return a.default ? S("div", {
        class: z(["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }])
      }, [s, S("div", {
        class: "v-divider__content"
      }, [a.default()]), s]) : s;
    }), {};
  }
}), Ti = Symbol.for("vuetify:list");
function Eu() {
  let {
    filterable: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    filterable: !1
  };
  const n = Ie(Ti, {
    filterable: !1,
    hasPrepend: ee(!1),
    updateHasPrepend: () => null
  }), t = {
    filterable: n.filterable || e,
    hasPrepend: ee(!1),
    updateHasPrepend: (a) => {
      a && (t.hasPrepend.value = a);
    }
  };
  return Re(Ti, t), n;
}
function Lu() {
  return Ie(Ti, null);
}
const Vo = (e) => {
  const n = {
    activate: (t) => {
      let {
        id: a,
        value: l,
        activated: i
      } = t;
      return a = Ke(a), e && !l && i.size === 1 && i.has(a) || (l ? i.add(a) : i.delete(a)), i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Set();
      if (t != null)
        for (const o of Ue(t))
          i = n.activate({
            id: o,
            value: !0,
            activated: new Set(i),
            children: a,
            parents: l
          });
      return i;
    },
    out: (t) => Array.from(t)
  };
  return n;
}, $u = (e) => {
  const n = Vo(e);
  return {
    activate: (a) => {
      let {
        activated: l,
        id: i,
        ...o
      } = a;
      i = Ke(i);
      const r = l.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return n.activate({
        ...o,
        id: i,
        activated: r
      });
    },
    in: (a, l, i) => {
      let o = /* @__PURE__ */ new Set();
      if (a != null) {
        const r = Ue(a);
        r.length && (o = n.in(r.slice(0, 1), l, i));
      }
      return o;
    },
    out: (a, l, i) => n.out(a, l, i)
  };
}, Og = (e) => {
  const n = Vo(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = a;
      return l = Ke(l), o.has(l) ? i : n.activate({
        id: l,
        activated: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, Eg = (e) => {
  const n = $u(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = a;
      return l = Ke(l), o.has(l) ? i : n.activate({
        id: l,
        activated: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, Lg = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      const i = /* @__PURE__ */ new Set();
      i.add(n);
      let o = l.get(n);
      for (; o != null; )
        i.add(o), o = l.get(o);
      return i;
    } else
      return a.delete(n), a;
  },
  select: () => null
}, Mu = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      let i = l.get(n);
      for (a.add(n); i != null && i !== n; )
        a.add(i), i = l.get(i);
      return a;
    } else
      a.delete(n);
    return a;
  },
  select: () => null
}, $g = {
  open: Mu.open,
  select: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (!t) return a;
    const i = [];
    let o = l.get(n);
    for (; o != null; )
      i.push(o), o = l.get(o);
    return new Set(i);
  }
}, po = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: i
      } = t;
      if (a = Ke(a), e && !l) {
        const o = Array.from(i.entries()).reduce((r, s) => {
          let [c, u] = s;
          return u === "on" && r.push(c), r;
        }, []);
        if (o.length === 1 && o[0] === a) return i;
      }
      return i.set(a, l ? "on" : "off"), i;
    },
    in: (t, a, l, i) => {
      const o = /* @__PURE__ */ new Map();
      for (const r of t || [])
        n.select({
          id: r,
          value: !0,
          selected: o,
          children: a,
          parents: l,
          disabled: i
        });
      return o;
    },
    out: (t) => {
      const a = [];
      for (const [l, i] of t.entries())
        i === "on" && a.push(l);
      return a;
    }
  };
  return n;
}, Fu = (e) => {
  const n = po(e);
  return {
    select: (a) => {
      let {
        selected: l,
        id: i,
        ...o
      } = a;
      i = Ke(i);
      const r = l.has(i) ? /* @__PURE__ */ new Map([[i, l.get(i)]]) : /* @__PURE__ */ new Map();
      return n.select({
        ...o,
        id: i,
        selected: r
      });
    },
    in: (a, l, i, o) => a != null && a.length ? n.in(a.slice(0, 1), l, i, o) : /* @__PURE__ */ new Map(),
    out: (a, l, i) => n.out(a, l, i)
  };
}, Mg = (e) => {
  const n = po(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = a;
      return l = Ke(l), o.has(l) ? i : n.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, Fg = (e) => {
  const n = Fu(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = a;
      return l = Ke(l), o.has(l) ? i : n.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, Ru = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: i,
        children: o,
        parents: r,
        disabled: s
      } = t;
      a = Ke(a);
      const c = new Map(i), u = [a];
      for (; u.length; ) {
        const v = u.shift();
        s.has(v) || i.set(Ke(v), l ? "on" : "off"), o.has(v) && u.push(...o.get(v));
      }
      let d = Ke(r.get(a));
      for (; d; ) {
        let v = !0, f = !0;
        for (const g of o.get(d)) {
          const b = Ke(g);
          if (!s.has(b) && (i.get(b) !== "on" && (v = !1), i.has(b) && i.get(b) !== "off" && (f = !1), !v && !f))
            break;
        }
        i.set(d, v ? "on" : f ? "off" : "indeterminate"), d = Ke(r.get(d));
      }
      return e && !l && Array.from(i.entries()).reduce((f, g) => {
        let [b, m] = g;
        return m === "on" && f.push(b), f;
      }, []).length === 0 ? c : i;
    },
    in: (t, a, l, i) => {
      let o = /* @__PURE__ */ new Map();
      for (const r of t || [])
        o = n.select({
          id: r,
          value: !0,
          selected: o,
          children: a,
          parents: l,
          disabled: i
        });
      return o;
    },
    out: (t, a) => {
      const l = [];
      for (const [i, o] of t.entries())
        o === "on" && !a.has(i) && l.push(i);
      return l;
    }
  };
  return n;
}, Rg = (e) => {
  const n = Ru(e);
  return {
    select: n.select,
    in: n.in,
    out: (a, l, i) => {
      const o = [];
      for (const [r, s] of a.entries())
        if (s === "on") {
          if (i.has(r)) {
            const c = i.get(r);
            if (a.get(c) === "on") continue;
          }
          o.push(r);
        }
      return o;
    }
  };
}, Ia = Symbol.for("vuetify:nested"), Nu = {
  id: ee(),
  root: {
    register: () => null,
    unregister: () => null,
    children: j(/* @__PURE__ */ new Map()),
    parents: j(/* @__PURE__ */ new Map()),
    disabled: j(/* @__PURE__ */ new Set()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: j(!1),
    selectable: j(!1),
    opened: j(/* @__PURE__ */ new Set()),
    activated: j(/* @__PURE__ */ new Set()),
    selected: j(/* @__PURE__ */ new Map()),
    selectedValues: j([]),
    getPath: () => []
  }
}, Ng = F({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), Hg = (e) => {
  let n = !1;
  const t = ee(/* @__PURE__ */ new Map()), a = ee(/* @__PURE__ */ new Map()), l = ee(/* @__PURE__ */ new Set()), i = de(e, "opened", e.opened, (b) => new Set(Array.isArray(b) ? b.map((m) => Ke(m)) : b), (b) => [...b.values()]), o = w(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return Og(e.mandatory);
      case "single-leaf":
        return Eg(e.mandatory);
      case "independent":
        return Vo(e.mandatory);
      case "single-independent":
      default:
        return $u(e.mandatory);
    }
  }), r = w(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return Fg(e.mandatory);
      case "leaf":
        return Mg(e.mandatory);
      case "independent":
        return po(e.mandatory);
      case "single-independent":
        return Fu(e.mandatory);
      case "trunk":
        return Rg(e.mandatory);
      case "classic":
      default:
        return Ru(e.mandatory);
    }
  }), s = w(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return $g;
      case "single":
        return Lg;
      case "multiple":
      default:
        return Mu;
    }
  }), c = de(e, "activated", e.activated, (b) => o.value.in(b, t.value, a.value), (b) => o.value.out(b, t.value, a.value)), u = de(e, "selected", e.selected, (b) => r.value.in(b, t.value, a.value, l.value), (b) => r.value.out(b, t.value, a.value));
  St(() => {
    n = !0;
  });
  function d(b) {
    const m = [];
    let y = Ke(b);
    for (; y != null; )
      m.unshift(y), y = a.value.get(y);
    return m;
  }
  const v = Xe("nested"), f = /* @__PURE__ */ new Set(), g = {
    id: ee(),
    root: {
      opened: i,
      activatable: E(() => e.activatable),
      selectable: E(() => e.selectable),
      activated: c,
      selected: u,
      selectedValues: w(() => {
        const b = [];
        for (const [m, y] of u.value.entries())
          y === "on" && b.push(m);
        return b;
      }),
      register: (b, m, y, h) => {
        if (f.has(b)) {
          const C = d(b).map(String).join(" -> "), p = d(m).concat(b).map(String).join(" -> ");
          Qn(`Multiple nodes with the same ID
	${C}
	${p}`);
          return;
        } else
          f.add(b);
        m && b !== m && a.value.set(b, m), y && l.value.add(b), h && t.value.set(b, []), m != null && t.value.set(m, [...t.value.get(m) || [], b]);
      },
      unregister: (b) => {
        if (n) return;
        f.delete(b), t.value.delete(b), l.value.delete(b);
        const m = a.value.get(b);
        if (m) {
          const y = t.value.get(m) ?? [];
          t.value.set(m, y.filter((h) => h !== b));
        }
        a.value.delete(b);
      },
      open: (b, m, y) => {
        v.emit("click:open", {
          id: b,
          value: m,
          path: d(b),
          event: y
        });
        const h = s.value.open({
          id: b,
          value: m,
          opened: new Set(i.value),
          children: t.value,
          parents: a.value,
          event: y
        });
        h && (i.value = h);
      },
      openOnSelect: (b, m, y) => {
        const h = s.value.select({
          id: b,
          value: m,
          selected: new Map(u.value),
          opened: new Set(i.value),
          children: t.value,
          parents: a.value,
          event: y
        });
        h && (i.value = h);
      },
      select: (b, m, y) => {
        v.emit("click:select", {
          id: b,
          value: m,
          path: d(b),
          event: y
        });
        const h = r.value.select({
          id: b,
          value: m,
          selected: new Map(u.value),
          children: t.value,
          parents: a.value,
          disabled: l.value,
          event: y
        });
        h && (u.value = h), g.root.openOnSelect(b, m, y);
      },
      activate: (b, m, y) => {
        if (!e.activatable)
          return g.root.select(b, !0, y);
        v.emit("click:activate", {
          id: b,
          value: m,
          path: d(b),
          event: y
        });
        const h = o.value.activate({
          id: b,
          value: m,
          activated: new Set(c.value),
          children: t.value,
          parents: a.value,
          event: y
        });
        if (h.size !== c.value.size)
          c.value = h;
        else {
          for (const C of h)
            if (!c.value.has(C)) {
              c.value = h;
              return;
            }
          for (const C of c.value)
            if (!h.has(C)) {
              c.value = h;
              return;
            }
        }
      },
      children: t,
      parents: a,
      disabled: l,
      getPath: d
    }
  };
  return Re(Ia, g), g.root;
}, Hu = (e, n, t) => {
  const a = Ie(Ia, Nu), l = Symbol("nested item"), i = w(() => Ke(Wt(e)) ?? l), o = {
    ...a,
    id: i,
    open: (r, s) => a.root.open(i.value, r, s),
    openOnSelect: (r, s) => a.root.openOnSelect(i.value, r, s),
    isOpen: w(() => a.root.opened.value.has(i.value)),
    parent: w(() => a.root.parents.value.get(i.value)),
    activate: (r, s) => a.root.activate(i.value, r, s),
    isActivated: w(() => a.root.activated.value.has(i.value)),
    select: (r, s) => a.root.select(i.value, r, s),
    isSelected: w(() => a.root.selected.value.get(i.value) === "on"),
    isIndeterminate: w(() => a.root.selected.value.get(i.value) === "indeterminate"),
    isLeaf: w(() => !a.root.children.value.get(i.value)),
    isGroupActivator: a.isGroupActivator
  };
  return Oa(() => {
    a.isGroupActivator || a.root.register(i.value, a.id.value, Wt(n), t);
  }), St(() => {
    a.isGroupActivator || a.root.unregister(i.value);
  }), t && Re(Ia, o), o;
}, zg = () => {
  const e = Ie(Ia, Nu);
  Re(Ia, {
    ...e,
    isGroupActivator: !0
  });
}, Wg = Bt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return zg(), () => {
      var a;
      return (a = t.default) == null ? void 0 : a.call(t);
    };
  }
}), zu = F({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: fe,
    default: "$collapse"
  },
  disabled: Boolean,
  expandIcon: {
    type: fe,
    default: "$expand"
  },
  rawId: [String, Number],
  prependIcon: fe,
  appendIcon: fe,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...se(),
  ...ke()
}, "VListGroup"), Aa = W()({
  name: "VListGroup",
  props: zu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isOpen: a,
      open: l,
      id: i
    } = Hu(() => e.value, () => e.disabled, !0), o = w(() => `v-list-group--id-${String(e.rawId ?? i.value)}`), r = Lu(), {
      isBooted: s
    } = Ln();
    function c(f) {
      var g;
      ["INPUT", "TEXTAREA"].includes((g = f.target) == null ? void 0 : g.tagName) || l(!a.value, f);
    }
    const u = w(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: o.value
    })), d = w(() => a.value ? e.collapseIcon : e.expandIcon), v = w(() => ({
      VListItem: {
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && d.value,
        appendIcon: e.appendIcon || !e.subgroup && d.value,
        title: e.title,
        value: e.value
      }
    }));
    return G(() => k(e.tag, {
      class: z(["v-list-group", {
        "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class]),
      style: le(e.style)
    }, {
      default: () => [t.activator && k(we, {
        defaults: v.value
      }, {
        default: () => [k(Wg, null, {
          default: () => [t.activator({
            props: u.value,
            isOpen: a.value
          })]
        })]
      }), k(yt, {
        transition: {
          component: la
        },
        disabled: !s.value
      }, {
        default: () => {
          var f;
          return [We(S("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(f = t.default) == null ? void 0 : f.call(t)]), [[Lt, a.value]])];
        }
      })]
    })), {
      isOpen: a
    };
  }
}), Ug = F({
  opacity: [Number, String],
  ...se(),
  ...ke()
}, "VListItemSubtitle"), Wu = W()({
  name: "VListItemSubtitle",
  props: Ug(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => k(e.tag, {
      class: z(["v-list-item-subtitle", e.class]),
      style: le([{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style])
    }, t)), {};
  }
}), Uu = en("v-list-item-title"), ju = F({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: fe,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: fe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  value: null,
  onClick: dt(),
  onClickOnce: dt(),
  ...Vt(),
  ...se(),
  ...it(),
  ...Je(),
  ...at(),
  ...He(),
  ...Wa(),
  ...ke(),
  ...Ae(),
  ...Mt({
    variant: "text"
  })
}, "VListItem"), Dt = W()({
  name: "VListItem",
  directives: {
    vRipple: kt
  },
  props: ju(),
  emits: {
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const i = za(e, t), o = w(() => e.value === void 0 ? i.href.value : e.value), {
      activate: r,
      isActivated: s,
      select: c,
      isOpen: u,
      isSelected: d,
      isIndeterminate: v,
      isGroupActivator: f,
      root: g,
      parent: b,
      openOnSelect: m,
      id: y
    } = Hu(o, () => e.disabled, !1), h = Lu(), C = w(() => {
      var ne;
      return e.active !== !1 && (e.active || ((ne = i.isActive) == null ? void 0 : ne.value) || (g.activatable.value ? s.value : d.value));
    }), p = E(() => e.link !== !1 && i.isLink.value), _ = w(() => !!h && (g.selectable.value || g.activatable.value || e.value != null)), P = w(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || _.value)), I = E(() => e.rounded || e.nav), V = E(() => e.color ?? e.activeColor), T = E(() => ({
      color: C.value ? V.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    ae(() => {
      var ne;
      return (ne = i.isActive) == null ? void 0 : ne.value;
    }, (ne) => {
      ne && A();
    }), Oa(() => {
      var ne;
      (ne = i.isActive) != null && ne.value && A();
    });
    function A() {
      b.value != null && g.open(b.value, !0), m(!0);
    }
    const {
      themeClasses: D
    } = Ee(e), {
      borderClasses: x
    } = pt(e), {
      colorClasses: B,
      colorStyles: M,
      variantClasses: L
    } = $n(T), {
      densityClasses: N
    } = wt(e), {
      dimensionStyles: Y
    } = et(e), {
      elevationClasses: te
    } = st(e), {
      roundedClasses: q
    } = Ye(I), $ = E(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), O = E(() => e.ripple !== void 0 && e.ripple && (h != null && h.filterable) ? {
      keys: ["Enter"]
    } : e.ripple), R = w(() => ({
      isActive: C.value,
      select: c,
      isOpen: u.value,
      isSelected: d.value,
      isIndeterminate: v.value
    }));
    function U(ne) {
      var Q, X;
      l("click", ne), !["INPUT", "TEXTAREA"].includes((Q = ne.target) == null ? void 0 : Q.tagName) && P.value && ((X = i.navigate) == null || X.call(i, ne), !f && (g.activatable.value ? r(!s.value, ne) : (g.selectable.value || e.value != null) && c(!d.value, ne)));
    }
    function ce(ne) {
      const Q = ne.target;
      ["INPUT", "TEXTAREA"].includes(Q.tagName) || (ne.key === "Enter" || ne.key === " " && !(h != null && h.filterable)) && (ne.preventDefault(), ne.stopPropagation(), ne.target.dispatchEvent(new MouseEvent("click", ne)));
    }
    return G(() => {
      const ne = p.value ? "a" : e.tag, Q = a.title || e.title != null, X = a.subtitle || e.subtitle != null, ve = !!(e.appendAvatar || e.appendIcon), ge = !!(ve || a.append), J = !!(e.prependAvatar || e.prependIcon), ie = !!(J || a.prepend);
      return h == null || h.updateHasPrepend(ie), e.activeColor && Ts("active-color", ["color", "base-color"]), We(k(ne, H({
        class: ["v-list-item", {
          "v-list-item--active": C.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": P.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !ie && (h == null ? void 0 : h.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && C.value
        }, D.value, x.value, B.value, N.value, te.value, $.value, q.value, L.value, e.class],
        style: [M.value, Y.value, e.style],
        tabindex: P.value ? h ? -2 : 0 : void 0,
        "aria-selected": _.value ? g.activatable.value ? s.value : g.selectable.value ? d.value : C.value : void 0,
        onClick: U,
        onKeydown: P.value && !p.value && ce
      }, i.linkProps), {
        default: () => {
          var K;
          return [vn(P.value || C.value, "v-list-item"), ie && S("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [a.prepend ? k(we, {
            key: "prepend-defaults",
            disabled: !J,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var Z;
              return [(Z = a.prepend) == null ? void 0 : Z.call(a, R.value)];
            }
          }) : S(ue, null, [e.prependAvatar && k(Et, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && k(Be, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), S("div", {
            class: "v-list-item__spacer"
          }, null)]), S("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [Q && k(Uu, {
            key: "title"
          }, {
            default: () => {
              var Z;
              return [((Z = a.title) == null ? void 0 : Z.call(a, {
                title: e.title
              })) ?? tt(e.title)];
            }
          }), X && k(Wu, {
            key: "subtitle"
          }, {
            default: () => {
              var Z;
              return [((Z = a.subtitle) == null ? void 0 : Z.call(a, {
                subtitle: e.subtitle
              })) ?? tt(e.subtitle)];
            }
          }), (K = a.default) == null ? void 0 : K.call(a, R.value)]), ge && S("div", {
            key: "append",
            class: "v-list-item__append"
          }, [a.append ? k(we, {
            key: "append-defaults",
            disabled: !ve,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var Z;
              return [(Z = a.append) == null ? void 0 : Z.call(a, R.value)];
            }
          }) : S(ue, null, [e.appendIcon && k(Be, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && k(Et, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), S("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[kt, P.value && O.value]]);
    }), {
      activate: r,
      isActivated: s,
      isGroupActivator: f,
      isSelected: d,
      list: h,
      select: c,
      root: g,
      id: y,
      link: i
    };
  }
}), jg = F({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...se(),
  ...ke()
}, "VListSubheader"), ca = W()({
  name: "VListSubheader",
  props: jg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = vt(() => e.color);
    return G(() => {
      const i = !!(t.default || e.title);
      return k(e.tag, {
        class: z(["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class]),
        style: le([{
          textColorStyles: l
        }, e.style])
      }, {
        default: () => {
          var o;
          return [i && S("div", {
            class: "v-list-subheader__text"
          }, [((o = t.default) == null ? void 0 : o.call(t)) ?? e.title])];
        }
      });
    }), {};
  }
}), Gg = F({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), Gu = W()({
  name: "VListChildren",
  props: Gg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Eu(), () => {
      var a, l;
      return ((a = t.default) == null ? void 0 : a.call(t)) ?? ((l = e.items) == null ? void 0 : l.map((i) => {
        var v, f;
        let {
          children: o,
          props: r,
          type: s,
          raw: c
        } = i;
        if (s === "divider")
          return ((v = t.divider) == null ? void 0 : v.call(t, {
            props: r
          })) ?? k(At, r, null);
        if (s === "subheader")
          return ((f = t.subheader) == null ? void 0 : f.call(t, {
            props: r
          })) ?? k(ca, r, null);
        const u = {
          subtitle: t.subtitle ? (g) => {
            var b;
            return (b = t.subtitle) == null ? void 0 : b.call(t, {
              ...g,
              item: c
            });
          } : void 0,
          prepend: t.prepend ? (g) => {
            var b;
            return (b = t.prepend) == null ? void 0 : b.call(t, {
              ...g,
              item: c
            });
          } : void 0,
          append: t.append ? (g) => {
            var b;
            return (b = t.append) == null ? void 0 : b.call(t, {
              ...g,
              item: c
            });
          } : void 0,
          title: t.title ? (g) => {
            var b;
            return (b = t.title) == null ? void 0 : b.call(t, {
              ...g,
              item: c
            });
          } : void 0
        }, d = Aa.filterProps(r);
        return o ? k(Aa, H(d, {
          value: e.returnObject ? c : r == null ? void 0 : r.value,
          rawId: r == null ? void 0 : r.value
        }), {
          activator: (g) => {
            let {
              props: b
            } = g;
            const m = {
              ...r,
              ...b,
              value: e.returnObject ? c : r.value
            };
            return t.header ? t.header({
              props: m
            }) : k(Dt, m, u);
          },
          default: () => k(Gu, {
            items: o,
            returnObject: e.returnObject
          }, t)
        }) : t.item ? t.item({
          props: r
        }) : k(Dt, H(r, {
          value: e.returnObject ? c : r.value
        }), u);
      }));
    };
  }
}), Yu = F({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  itemType: {
    type: [Boolean, String, Array, Function],
    default: "type"
  },
  returnObject: Boolean,
  valueComparator: Function
}, "list-items"), Yg = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function Ft(e, n) {
  const t = Qe(n, e.itemTitle, n), a = Qe(n, e.itemValue, t), l = Qe(n, e.itemChildren), i = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children" in n ? Fe(n, ["children"]) : n : void 0 : Qe(n, e.itemProps);
  let o = Qe(n, e.itemType, "item");
  Yg.has(o) || (o = "item");
  const r = {
    title: t,
    value: a,
    ...i
  };
  return {
    type: o,
    title: String(r.title ?? ""),
    value: r.value,
    props: r,
    children: o === "item" && Array.isArray(l) ? Ku(e, l) : void 0,
    raw: n
  };
}
Ft.neededProps = ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
function Ku(e, n) {
  const t = Jt(e, Ft.neededProps), a = [];
  for (const l of n)
    a.push(Ft(t, l));
  return a;
}
function Po(e) {
  const n = w(() => Ku(e, e.items)), t = w(() => n.value.some((r) => r.value === null)), a = ee(/* @__PURE__ */ new Map()), l = ee([]);
  je(() => {
    const r = n.value, s = /* @__PURE__ */ new Map(), c = [];
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      if (vi(d.value) || d.value === null) {
        let v = s.get(d.value);
        v || (v = [], s.set(d.value, v)), v.push(d);
      } else
        c.push(d);
    }
    a.value = s, l.value = c;
  });
  function i(r) {
    const s = a.value, c = n.value, u = l.value, d = t.value, v = e.returnObject, f = !!e.valueComparator, g = e.valueComparator || ct, b = Jt(e, Ft.neededProps), m = [];
    e: for (const y of r) {
      if (!d && y === null) continue;
      if (v && typeof y == "string") {
        m.push(Ft(b, y));
        continue;
      }
      const h = s.get(y);
      if (f || !h) {
        for (const C of f ? c : u)
          if (g(y, C.value)) {
            m.push(C);
            continue e;
          }
        m.push(Ft(b, y));
        continue;
      }
      m.push(...h);
    }
    return m;
  }
  function o(r) {
    return e.returnObject ? r.map((s) => {
      let {
        raw: c
      } = s;
      return c;
    }) : r.map((s) => {
      let {
        value: c
      } = s;
      return c;
    });
  }
  return {
    items: n,
    transformIn: i,
    transformOut: o
  };
}
const Kg = /* @__PURE__ */ new Set(["item", "divider", "subheader"]);
function qg(e, n) {
  const t = vi(n) ? n : Qe(n, e.itemTitle), a = vi(n) ? n : Qe(n, e.itemValue, void 0), l = Qe(n, e.itemChildren), i = e.itemProps === !0 ? Fe(n, ["children"]) : Qe(n, e.itemProps);
  let o = Qe(n, e.itemType, "item");
  Kg.has(o) || (o = "item");
  const r = {
    title: t,
    value: a,
    ...i
  };
  return {
    type: o,
    title: r.title,
    value: r.value,
    props: r,
    children: o === "item" && l ? qu(e, l) : void 0,
    raw: n
  };
}
function qu(e, n) {
  const t = [];
  for (const a of n)
    t.push(qg(e, a));
  return t;
}
function Xu(e) {
  return {
    items: w(() => qu(e, e.items))
  };
}
const Zu = F({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  filterable: Boolean,
  expandIcon: fe,
  collapseIcon: fe,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": dt(),
  "onClick:select": dt(),
  "onUpdate:opened": dt(),
  ...Ng({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...Vt(),
  ...se(),
  ...it(),
  ...Je(),
  ...at(),
  ...Yu(),
  ...He(),
  ...ke(),
  ...Ae(),
  ...Mt({
    variant: "text"
  })
}, "VList"), pn = W()({
  name: "VList",
  props: Zu(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a
    } = Xu(e), {
      themeClasses: l
    } = Ee(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Le(() => e.bgColor), {
      borderClasses: r
    } = pt(e), {
      densityClasses: s
    } = wt(e), {
      dimensionStyles: c
    } = et(e), {
      elevationClasses: u
    } = st(e), {
      roundedClasses: d
    } = Ye(e), {
      children: v,
      open: f,
      parents: g,
      select: b,
      getPath: m
    } = Hg(e), y = E(() => e.lines ? `v-list--${e.lines}-line` : void 0), h = E(() => e.activeColor), C = E(() => e.baseColor), p = E(() => e.color);
    Eu({
      filterable: e.filterable
    }), Ge({
      VListGroup: {
        activeColor: h,
        baseColor: C,
        color: p,
        expandIcon: E(() => e.expandIcon),
        collapseIcon: E(() => e.collapseIcon)
      },
      VListItem: {
        activeClass: E(() => e.activeClass),
        activeColor: h,
        baseColor: C,
        color: p,
        density: E(() => e.density),
        disabled: E(() => e.disabled),
        lines: E(() => e.lines),
        nav: E(() => e.nav),
        slim: E(() => e.slim),
        variant: E(() => e.variant)
      }
    });
    const _ = ee(!1), P = j();
    function I(B) {
      _.value = !0;
    }
    function V(B) {
      _.value = !1;
    }
    function T(B) {
      var M;
      !_.value && !(B.relatedTarget && ((M = P.value) != null && M.contains(B.relatedTarget))) && x();
    }
    function A(B) {
      const M = B.target;
      if (!(!P.value || M.tagName === "INPUT" && ["Home", "End"].includes(B.key) || M.tagName === "TEXTAREA")) {
        if (B.key === "ArrowDown")
          x("next");
        else if (B.key === "ArrowUp")
          x("prev");
        else if (B.key === "Home")
          x("first");
        else if (B.key === "End")
          x("last");
        else
          return;
        B.preventDefault();
      }
    }
    function D(B) {
      _.value = !0;
    }
    function x(B) {
      if (P.value)
        return wn(P.value, B);
    }
    return G(() => k(e.tag, {
      ref: P,
      class: z(["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, l.value, i.value, r.value, s.value, u.value, y.value, d.value, e.class]),
      style: le([o.value, c.value, e.style]),
      tabindex: e.disabled ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: I,
      onFocusout: V,
      onFocus: T,
      onKeydown: A,
      onMousedown: D
    }, {
      default: () => [k(Gu, {
        items: a.value,
        returnObject: e.returnObject
      }, t)]
    })), {
      open: f,
      select: b,
      focus: x,
      children: v,
      parents: g,
      getPath: m
    };
  }
}), Xg = en("v-list-img"), Zg = F({
  start: Boolean,
  end: Boolean,
  ...se(),
  ...ke()
}, "VListItemAction"), Qu = W()({
  name: "VListItemAction",
  props: Zg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => k(e.tag, {
      class: z(["v-list-item-action", {
        "v-list-item-action--start": e.start,
        "v-list-item-action--end": e.end
      }, e.class]),
      style: le(e.style)
    }, t)), {};
  }
}), Qg = F({
  start: Boolean,
  end: Boolean,
  ...se(),
  ...ke()
}, "VListItemMedia"), Jg = W()({
  name: "VListItemMedia",
  props: Qg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => k(e.tag, {
      class: z(["v-list-item-media", {
        "v-list-item-media--start": e.start,
        "v-list-item-media--end": e.end
      }, e.class]),
      style: le(e.style)
    }, t)), {};
  }
});
function ai(e, n) {
  return {
    x: e.x + n.x,
    y: e.y + n.y
  };
}
function eh(e, n) {
  return {
    x: e.x - n.x,
    y: e.y - n.y
  };
}
function Yr(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: t,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? n.width / 2 : a === "right" ? n.width : a, i = t === "top" ? 0 : t === "bottom" ? n.height : t;
    return ai({
      x: l,
      y: i
    }, n);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: t,
      align: a
    } = e, l = t === "left" ? 0 : t === "right" ? n.width : t, i = a === "top" ? 0 : a === "center" ? n.height / 2 : a === "bottom" ? n.height : a;
    return ai({
      x: l,
      y: i
    }, n);
  }
  return ai({
    x: n.width / 2,
    y: n.height / 2
  }, n);
}
const Ju = {
  static: ah,
  // specific viewport position, usually centered
  connected: ih
  // connected to a certain element
}, th = F({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Ju
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function nh(e, n) {
  const t = j({}), a = j();
  Oe && bt(() => !!(n.isActive.value && e.locationStrategy), (r) => {
    var s, c;
    ae(() => e.locationStrategy, r), lt(() => {
      window.removeEventListener("resize", l), visualViewport == null || visualViewport.removeEventListener("resize", i), visualViewport == null || visualViewport.removeEventListener("scroll", o), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), visualViewport == null || visualViewport.addEventListener("resize", i, {
      passive: !0
    }), visualViewport == null || visualViewport.addEventListener("scroll", o, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (s = e.locationStrategy(n, e, t)) == null ? void 0 : s.updateLocation : a.value = (c = Ju[e.locationStrategy](n, e, t)) == null ? void 0 : c.updateLocation;
  });
  function l(r) {
    var s;
    (s = a.value) == null || s.call(a, r);
  }
  function i(r) {
    var s;
    (s = a.value) == null || s.call(a, r);
  }
  function o(r) {
    var s;
    (s = a.value) == null || s.call(a, r);
  }
  return {
    contentStyles: t,
    updateLocation: a
  };
}
function ah() {
}
function lh(e, n) {
  const t = io(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function ih(e, n, t) {
  (Array.isArray(e.target.value) || sf(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = lo(() => {
    const y = mi(n.location, e.isRtl.value), h = n.origin === "overlap" ? y : n.origin === "auto" ? ql(y) : mi(n.origin, e.isRtl.value);
    return y.side === h.side && y.align === Xl(h).align ? {
      preferredAnchor: gr(y),
      preferredOrigin: gr(h)
    } : {
      preferredAnchor: y,
      preferredOrigin: h
    };
  }), [o, r, s, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((y) => w(() => {
    const h = parseFloat(n[y]);
    return isNaN(h) ? 1 / 0 : h;
  })), u = w(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const y = n.offset.split(" ").map(parseFloat);
      return y.length < 2 && y.push(0), y;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let d = !1, v = -1;
  const f = new Vs(4), g = new ResizeObserver(() => {
    if (!d) return;
    if (requestAnimationFrame((h) => {
      h !== v && f.clear(), requestAnimationFrame((C) => {
        v = C;
      });
    }), f.isFull) {
      const h = f.values();
      if (ct(h.at(-1), h.at(-3)) && !ct(h.at(-1), h.at(-2)))
        return;
    }
    const y = m();
    y && f.push(y.flipped);
  });
  ae([e.target, e.contentEl], (y, h) => {
    let [C, p] = y, [_, P] = h;
    _ && !Array.isArray(_) && g.unobserve(_), C && !Array.isArray(C) && g.observe(C), P && g.unobserve(P), p && g.observe(p);
  }, {
    immediate: !0
  }), lt(() => {
    g.disconnect();
  });
  let b = new zt({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  function m() {
    if (d = !1, requestAnimationFrame(() => d = !0), !e.target.value || !e.contentEl.value) return;
    (Array.isArray(e.target.value) || e.target.value.offsetParent || e.target.value.getClientRects().length) && (b = As(e.target.value));
    const y = lh(e.contentEl.value, e.isRtl.value), h = cl(e.contentEl.value), C = 12;
    h.length || (h.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (y.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), y.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const p = h.reduce((B, M) => {
      const L = _v(M);
      return B ? new zt({
        x: Math.max(B.left, L.left),
        y: Math.max(B.top, L.top),
        width: Math.min(B.right, L.right) - Math.max(B.left, L.left),
        height: Math.min(B.bottom, L.bottom) - Math.max(B.top, L.top)
      }) : L;
    }, void 0);
    p.x += C, p.y += C, p.width -= C * 2, p.height -= C * 2;
    let _ = {
      anchor: l.value,
      origin: i.value
    };
    function P(B) {
      const M = new zt(y), L = Yr(B.anchor, b), N = Yr(B.origin, M);
      let {
        x: Y,
        y: te
      } = eh(L, N);
      switch (B.anchor.side) {
        case "top":
          te -= u.value[0];
          break;
        case "bottom":
          te += u.value[0];
          break;
        case "left":
          Y -= u.value[0];
          break;
        case "right":
          Y += u.value[0];
          break;
      }
      switch (B.anchor.align) {
        case "top":
          te -= u.value[1];
          break;
        case "bottom":
          te += u.value[1];
          break;
        case "left":
          Y -= u.value[1];
          break;
        case "right":
          Y += u.value[1];
          break;
      }
      return M.x += Y, M.y += te, M.width = Math.min(M.width, s.value), M.height = Math.min(M.height, c.value), {
        overflows: yr(M, p),
        x: Y,
        y: te
      };
    }
    let I = 0, V = 0;
    const T = {
      x: 0,
      y: 0
    }, A = {
      x: !1,
      y: !1
    };
    let D = -1;
    for (; ; ) {
      if (D++ > 10) {
        Qn("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: B,
        y: M,
        overflows: L
      } = P(_);
      I += B, V += M, y.x += B, y.y += M;
      {
        const N = hr(_.anchor), Y = L.x.before || L.x.after, te = L.y.before || L.y.after;
        let q = !1;
        if (["x", "y"].forEach(($) => {
          if ($ === "x" && Y && !A.x || $ === "y" && te && !A.y) {
            const O = {
              anchor: {
                ..._.anchor
              },
              origin: {
                ..._.origin
              }
            }, R = $ === "x" ? N === "y" ? Xl : ql : N === "y" ? ql : Xl;
            O.anchor = R(O.anchor), O.origin = R(O.origin);
            const {
              overflows: U
            } = P(O);
            (U[$].before <= L[$].before && U[$].after <= L[$].after || U[$].before + U[$].after < (L[$].before + L[$].after) / 2) && (_ = O, q = A[$] = !0);
          }
        }), q) continue;
      }
      L.x.before && (I += L.x.before, y.x += L.x.before), L.x.after && (I -= L.x.after, y.x -= L.x.after), L.y.before && (V += L.y.before, y.y += L.y.before), L.y.after && (V -= L.y.after, y.y -= L.y.after);
      {
        const N = yr(y, p);
        T.x = p.width - N.x.before - N.x.after, T.y = p.height - N.y.before - N.y.after, I += N.x.before, y.x += N.x.before, V += N.y.before, y.y += N.y.before;
      }
      break;
    }
    const x = hr(_.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${_.anchor.side} ${_.anchor.align}`,
      transformOrigin: `${_.origin.side} ${_.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: oe(li(V)),
      left: e.isRtl.value ? void 0 : oe(li(I)),
      right: e.isRtl.value ? oe(li(-I)) : void 0,
      minWidth: oe(x === "y" ? Math.min(o.value, b.width) : o.value),
      maxWidth: oe(Kr(Me(T.x, o.value === 1 / 0 ? 0 : o.value, s.value))),
      maxHeight: oe(Kr(Me(T.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: T,
      contentBox: y,
      flipped: A
    };
  }
  return ae(() => [l.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => m()), Pe(() => {
    const y = m();
    if (!y) return;
    const {
      available: h,
      contentBox: C
    } = y;
    C.height > h.y && requestAnimationFrame(() => {
      m(), requestAnimationFrame(() => {
        m();
      });
    });
  }), {
    updateLocation: m
  };
}
function li(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Kr(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Di = !0;
const ml = [];
function oh(e) {
  !Di || ml.length ? (ml.push(e), Bi()) : (Di = !1, e(), Bi());
}
let qr = -1;
function Bi() {
  cancelAnimationFrame(qr), qr = requestAnimationFrame(() => {
    const e = ml.shift();
    e && e(), ml.length ? Bi() : Di = !0;
  });
}
const il = {
  none: null,
  close: uh,
  block: ch,
  reposition: dh
}, rh = F({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in il
  }
}, "VOverlay-scroll-strategies");
function sh(e, n) {
  if (!Oe) return;
  let t;
  je(async () => {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = qn(), await new Promise((a) => setTimeout(a)), t.active && t.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (a = il[e.scrollStrategy]) == null || a.call(il, n, e, t);
    }));
  }), lt(() => {
    t == null || t.stop();
  });
}
function uh(e) {
  function n(t) {
    e.isActive.value = !1;
  }
  ec(e.targetEl.value ?? e.contentEl.value, n);
}
function ch(e, n) {
  var o;
  const t = (o = e.root.value) == null ? void 0 : o.offsetParent, a = [.../* @__PURE__ */ new Set([...cl(e.targetEl.value, n.contained ? t : void 0), ...cl(e.contentEl.value, n.contained ? t : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => co(r) && r)(t || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", oe(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", oe(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", oe(l)), r.classList.add("v-overlay-scroll-blocked");
  }), lt(() => {
    a.forEach((r, s) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), u = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), d = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -u, r.style.scrollBehavior = d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function dh(e, n, t) {
  let a = !1, l = -1, i = -1;
  function o(r) {
    oh(() => {
      var u, d;
      const s = performance.now();
      (d = (u = e.updateLocation).value) == null || d.call(u, r), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    t.run(() => {
      ec(e.targetEl.value ?? e.contentEl.value, (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            o(r);
          });
        })) : o(r);
      });
    });
  }), lt(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function ec(e, n) {
  const t = [document, ...cl(e)];
  t.forEach((a) => {
    a.addEventListener("scroll", n, {
      passive: !0
    });
  }), lt(() => {
    t.forEach((a) => {
      a.removeEventListener("scroll", n);
    });
  });
}
const Oi = Symbol.for("vuetify:v-menu"), _o = F({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Io(e, n) {
  let t = () => {
  };
  function a(o) {
    t == null || t();
    const r = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((s) => {
      t = wv(r, () => {
        n == null || n(o), s(o);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function i() {
    return a(!1);
  }
  return {
    clearDelay: t,
    runOpenDelay: l,
    runCloseDelay: i
  };
}
const vh = F({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ..._o()
}, "VOverlay-activator");
function fh(e, n) {
  let {
    isActive: t,
    isTop: a,
    contentEl: l
  } = n;
  const i = Xe("useActivator"), o = j();
  let r = !1, s = !1, c = !0;
  const u = w(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = w(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !u.value), {
    runOpenDelay: v,
    runCloseDelay: f
  } = Io(e, (V) => {
    V === (e.openOnHover && r || u.value && s) && !(e.openOnHover && t.value && !a.value) && (t.value !== V && (c = !0), t.value = V);
  }), g = j(), b = {
    onClick: (V) => {
      V.stopPropagation(), o.value = V.currentTarget || V.target, t.value || (g.value = [V.clientX, V.clientY]), t.value = !t.value;
    },
    onMouseenter: (V) => {
      var T;
      (T = V.sourceCapabilities) != null && T.firesTouchEvents || (r = !0, o.value = V.currentTarget || V.target, v());
    },
    onMouseleave: (V) => {
      r = !1, f();
    },
    onFocus: (V) => {
      Xn(V.target, ":focus-visible") !== !1 && (s = !0, V.stopPropagation(), o.value = V.currentTarget || V.target, v());
    },
    onBlur: (V) => {
      s = !1, V.stopPropagation(), f();
    }
  }, m = w(() => {
    const V = {};
    return d.value && (V.onClick = b.onClick), e.openOnHover && (V.onMouseenter = b.onMouseenter, V.onMouseleave = b.onMouseleave), u.value && (V.onFocus = b.onFocus, V.onBlur = b.onBlur), V;
  }), y = w(() => {
    const V = {};
    if (e.openOnHover && (V.onMouseenter = () => {
      r = !0, v();
    }, V.onMouseleave = () => {
      r = !1, f();
    }), u.value && (V.onFocusin = () => {
      s = !0, v();
    }, V.onFocusout = () => {
      s = !1, f();
    }), e.closeOnContentClick) {
      const T = Ie(Oi, null);
      V.onClick = () => {
        t.value = !1, T == null || T.closeParents();
      };
    }
    return V;
  }), h = w(() => {
    const V = {};
    return e.openOnHover && (V.onMouseenter = () => {
      c && (r = !0, c = !1, v());
    }, V.onMouseleave = () => {
      r = !1, f();
    }), V;
  });
  ae(a, (V) => {
    var T;
    V && (e.openOnHover && !r && (!u.value || !s) || u.value && !s && (!e.openOnHover || !r)) && !((T = l.value) != null && T.contains(document.activeElement)) && (t.value = !1);
  }), ae(t, (V) => {
    V || setTimeout(() => {
      g.value = void 0;
    });
  }, {
    flush: "post"
  });
  const C = sl();
  je(() => {
    C.value && Pe(() => {
      o.value = C.el;
    });
  });
  const p = sl(), _ = w(() => e.target === "cursor" && g.value ? g.value : p.value ? p.el : tc(e.target, i) || o.value), P = w(() => Array.isArray(_.value) ? void 0 : _.value);
  let I;
  return ae(() => !!e.activator, (V) => {
    V && Oe ? (I = qn(), I.run(() => {
      mh(e, i, {
        activatorEl: o,
        activatorEvents: m
      });
    })) : I && I.stop();
  }, {
    flush: "post",
    immediate: !0
  }), lt(() => {
    I == null || I.stop();
  }), {
    activatorEl: o,
    activatorRef: C,
    target: _,
    targetEl: P,
    targetRef: p,
    activatorEvents: m,
    contentEvents: y,
    scrimEvents: h
  };
}
function mh(e, n, t) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = t;
  ae(() => e.activator, (s, c) => {
    if (c && s !== c) {
      const u = r(c);
      u && o(u);
    }
    s && Pe(() => i());
  }, {
    immediate: !0
  }), ae(() => e.activatorProps, () => {
    i();
  }), lt(() => {
    o();
  });
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Iv(s, H(l.value, c));
  }
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && Av(s, H(l.value, c));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = tc(s, n);
    return a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function tc(e, n) {
  var a, l;
  if (!e) return;
  let t;
  if (e === "parent") {
    let i = (l = (a = n == null ? void 0 : n.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    t = i;
  } else typeof e == "string" ? t = document.querySelector(e) : "$el" in e ? t = e.$el : t = e;
  return t;
}
function nc() {
  if (!Oe) return ee(!1);
  const {
    ssr: e
  } = $t();
  if (e) {
    const n = ee(!1);
    return ft(() => {
      n.value = !0;
    }), n;
  } else
    return ee(!0);
}
const Ao = F({
  eager: Boolean
}, "lazy");
function To(e, n) {
  const t = ee(!1), a = E(() => t.value || e.eager || n.value);
  ae(n, () => t.value = !0);
  function l() {
    e.eager || (t.value = !1);
  }
  return {
    isBooted: t,
    hasContent: a,
    onAfterLeave: l
  };
}
function Hn() {
  const n = Xe("useScopeId").vnode.scopeId;
  return {
    scopeId: n ? {
      [n]: ""
    } : void 0
  };
}
const Xr = Symbol.for("vuetify:stack"), ma = Ct([]);
function gh(e, n, t) {
  const a = Xe("useStack"), l = !t, i = Ie(Xr, void 0), o = Ct({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Re(Xr, o);
  const r = ee(Number(Wt(n)));
  bt(e, () => {
    var d;
    const u = (d = ma.at(-1)) == null ? void 0 : d[1];
    r.value = u ? u + 10 : Number(Wt(n)), l && ma.push([a.uid, r.value]), i == null || i.activeChildren.add(a.uid), lt(() => {
      if (l) {
        const v = Ke(ma).findIndex((f) => f[0] === a.uid);
        ma.splice(v, 1);
      }
      i == null || i.activeChildren.delete(a.uid);
    });
  });
  const s = ee(!0);
  l && je(() => {
    var d;
    const u = ((d = ma.at(-1)) == null ? void 0 : d[0]) === a.uid;
    setTimeout(() => s.value = u);
  });
  const c = E(() => !o.activeChildren.size);
  return {
    globalTop: Cl(s),
    localTop: c,
    stackStyles: E(() => ({
      zIndex: r.value
    }))
  };
}
function hh(e) {
  return {
    teleportTarget: w(() => {
      const t = e();
      if (t === !0 || !Oe) return;
      const a = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (a == null) {
        wl(`Unable to locate target ${t}`);
        return;
      }
      let l = [...a.children].find((i) => i.matches(".v-overlay-container"));
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function yh() {
  return !0;
}
function ac(e, n, t) {
  if (!e || lc(e, t) === !1) return !1;
  const a = Ns(n);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const l = (typeof t.value == "object" && t.value.include || (() => []))();
  return l.push(n), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function lc(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || yh)(e);
}
function bh(e, n, t) {
  const a = typeof t.value == "function" ? t.value : t.value.handler;
  e.shadowTarget = e.target, n._clickOutside.lastMousedownWasOutside && ac(e, n, t) && setTimeout(() => {
    lc(e, t) && a && a(e);
  }, 0);
}
function Zr(e, n) {
  const t = Ns(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Ei = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (l) => bh(l, e, n), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = ac(l, e, n);
    };
    Zr(e, (l) => {
      l.addEventListener("click", t, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[n.instance.$.uid] = {
      onClick: t,
      onMousedown: a
    };
  },
  beforeUnmount(e, n) {
    e._clickOutside && (Zr(e, (t) => {
      var i;
      if (!t || !((i = e._clickOutside) != null && i[n.instance.$.uid])) return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[n.instance.$.uid];
      t.removeEventListener("click", a, !0), t.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[n.instance.$.uid]);
  }
};
function kh(e) {
  const {
    modelValue: n,
    color: t,
    ...a
  } = e;
  return k(on, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && S("div", H({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const Ga = F({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...vh(),
  ...se(),
  ...Je(),
  ...Ao(),
  ...th(),
  ...rh(),
  ...Ae(),
  ...Ht()
}, "VOverlay"), Nt = W()({
  name: "VOverlay",
  directives: {
    vClickOutside: Ei
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...Ga()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    keydown: (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      slots: t,
      attrs: a,
      emit: l
    } = n;
    const i = Xe("VOverlay"), o = j(), r = j(), s = j(), c = de(e, "modelValue"), u = w({
      get: () => c.value,
      set: (X) => {
        X && e.disabled || (c.value = X);
      }
    }), {
      themeClasses: d
    } = Ee(e), {
      rtlClasses: v,
      isRtl: f
    } = nt(), {
      hasContent: g,
      onAfterLeave: b
    } = To(e, u), m = Le(() => typeof e.scrim == "string" ? e.scrim : null), {
      globalTop: y,
      localTop: h,
      stackStyles: C
    } = gh(u, () => e.zIndex, e._disableGlobalStack), {
      activatorEl: p,
      activatorRef: _,
      target: P,
      targetEl: I,
      targetRef: V,
      activatorEvents: T,
      contentEvents: A,
      scrimEvents: D
    } = fh(e, {
      isActive: u,
      isTop: h,
      contentEl: s
    }), {
      teleportTarget: x
    } = hh(() => {
      var ge, J, ie;
      const X = e.attach || e.contained;
      if (X) return X;
      const ve = ((ge = p == null ? void 0 : p.value) == null ? void 0 : ge.getRootNode()) || ((ie = (J = i.proxy) == null ? void 0 : J.$el) == null ? void 0 : ie.getRootNode());
      return ve instanceof ShadowRoot ? ve : !1;
    }), {
      dimensionStyles: B
    } = et(e), M = nc(), {
      scopeId: L
    } = Hn();
    ae(() => e.disabled, (X) => {
      X && (u.value = !1);
    });
    const {
      contentStyles: N,
      updateLocation: Y
    } = nh(e, {
      isRtl: f,
      contentEl: s,
      target: P,
      isActive: u
    });
    sh(e, {
      root: o,
      contentEl: s,
      targetEl: I,
      isActive: u,
      updateLocation: Y
    });
    function te(X) {
      l("click:outside", X), e.persistent ? ce() : u.value = !1;
    }
    function q(X) {
      return u.value && y.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || X.target === r.value || X instanceof MouseEvent && X.shadowTarget === r.value);
    }
    Oe && ae(u, (X) => {
      X ? window.addEventListener("keydown", $) : window.removeEventListener("keydown", $);
    }, {
      immediate: !0
    }), St(() => {
      Oe && window.removeEventListener("keydown", $);
    });
    function $(X) {
      var ve, ge, J;
      X.key === "Escape" && y.value && ((ve = s.value) != null && ve.contains(document.activeElement) || l("keydown", X), e.persistent ? ce() : (u.value = !1, (ge = s.value) != null && ge.contains(document.activeElement) && ((J = p.value) == null || J.focus())));
    }
    function O(X) {
      X.key === "Escape" && !y.value || l("keydown", X);
    }
    const R = vu();
    bt(() => e.closeOnBack, () => {
      tg(R, (X) => {
        y.value && u.value ? (X(!1), e.persistent ? ce() : u.value = !1) : X();
      });
    });
    const U = j();
    ae(() => u.value && (e.absolute || e.contained) && x.value == null, (X) => {
      if (X) {
        const ve = uo(o.value);
        ve && ve !== document.scrollingElement && (U.value = ve.scrollTop);
      }
    });
    function ce() {
      e.noClickAnimation || s.value && bn(s.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Sa
      });
    }
    function ne() {
      l("afterEnter");
    }
    function Q() {
      b(), l("afterLeave");
    }
    return G(() => {
      var X;
      return S(ue, null, [(X = t.activator) == null ? void 0 : X.call(t, {
        isActive: u.value,
        targetRef: V,
        props: H({
          ref: _
        }, T.value, e.activatorProps)
      }), M.value && g.value && k(iv, {
        disabled: !x.value,
        to: x.value
      }, {
        default: () => [S("div", H({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": u.value,
            "v-overlay--contained": e.contained
          }, d.value, v.value, e.class],
          style: [C.value, {
            "--v-overlay-opacity": e.opacity,
            top: oe(U.value)
          }, e.style],
          ref: o,
          onKeydown: O
        }, L, a), [k(kh, H({
          color: m,
          modelValue: u.value && !!e.scrim,
          ref: r
        }, D.value), null), k(yt, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: P.value,
          onAfterEnter: ne,
          onAfterLeave: Q
        }, {
          default: () => {
            var ve;
            return [We(S("div", H({
              ref: s,
              class: ["v-overlay__content", e.contentClass],
              style: [B.value, N.value]
            }, A.value, e.contentProps), [(ve = t.default) == null ? void 0 : ve.call(t, {
              isActive: u
            })]), [[Lt, u.value], [Ei, {
              handler: te,
              closeConditional: q,
              include: () => [p.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: p,
      scrimEl: r,
      target: P,
      animateClick: ce,
      contentEl: s,
      globalTop: y,
      localTop: h,
      updateLocation: Y
    };
  }
}), ic = F({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  disableInitialFocus: Boolean,
  ...Fe(Ga({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: _l
    }
  }), ["absolute"])
}, "VMenu"), Pn = W()({
  name: "VMenu",
  props: ic(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = de(e, "modelValue"), {
      scopeId: l
    } = Hn(), {
      isRtl: i
    } = nt(), o = xt(), r = E(() => e.id || `v-menu-${o}`), s = j(), c = Ie(Oi, null), u = ee(/* @__PURE__ */ new Set());
    Re(Oi, {
      register() {
        u.value.add(o);
      },
      unregister() {
        u.value.delete(o);
      },
      closeParents(m) {
        setTimeout(() => {
          var y;
          !u.value.size && !e.persistent && (m == null || (y = s.value) != null && y.contentEl && !Cv(m, s.value.contentEl)) && (a.value = !1, c == null || c.closeParents());
        }, 40);
      }
    }), St(() => {
      c == null || c.unregister(), document.removeEventListener("focusin", d);
    }), vs(() => a.value = !1);
    async function d(m) {
      var C, p, _;
      const y = m.relatedTarget, h = m.target;
      await Pe(), a.value && y !== h && ((C = s.value) != null && C.contentEl) && // We're the topmost menu
      ((p = s.value) != null && p.globalTop) && // It isn't the document or the menu body
      ![document, s.value.contentEl].includes(h) && // It isn't inside the menu body
      !s.value.contentEl.contains(h) && ((_ = ka(s.value.contentEl)[0]) == null || _.focus());
    }
    ae(a, (m) => {
      m ? (c == null || c.register(), Oe && !e.disableInitialFocus && document.addEventListener("focusin", d, {
        once: !0
      })) : (c == null || c.unregister(), Oe && document.removeEventListener("focusin", d));
    }, {
      immediate: !0
    });
    function v(m) {
      c == null || c.closeParents(m);
    }
    function f(m) {
      var y, h, C, p, _;
      if (!e.disabled)
        if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
          if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
          m.key === "Enter" && m.preventDefault(), Ps(ka((y = s.value) == null ? void 0 : y.contentEl, !1), m.shiftKey ? "prev" : "next", (I) => I.tabIndex >= 0) || (a.value = !1, (C = (h = s.value) == null ? void 0 : h.activatorEl) == null || C.focus());
        } else e.submenu && m.key === (i.value ? "ArrowRight" : "ArrowLeft") && (a.value = !1, (_ = (p = s.value) == null ? void 0 : p.activatorEl) == null || _.focus());
    }
    function g(m) {
      var h;
      if (e.disabled) return;
      const y = (h = s.value) == null ? void 0 : h.contentEl;
      y && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), wn(y, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), wn(y, "prev")) : e.submenu && (m.key === (i.value ? "ArrowRight" : "ArrowLeft") ? a.value = !1 : m.key === (i.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), wn(y, "first"))) : (e.submenu ? m.key === (i.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = !0, m.preventDefault(), setTimeout(() => setTimeout(() => g(m))));
    }
    const b = w(() => H({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-controls": r.value,
      onKeydown: g
    }, e.activatorProps));
    return G(() => {
      const m = Nt.filterProps(e);
      return k(Nt, H({
        ref: s,
        id: r.value,
        class: ["v-menu", e.class],
        style: e.style
      }, m, {
        modelValue: a.value,
        "onUpdate:modelValue": (y) => a.value = y,
        absolute: !0,
        activatorProps: b.value,
        location: e.location ?? (e.submenu ? "end" : "bottom"),
        "onClick:outside": v,
        onKeydown: f
      }, l), {
        activator: t.activator,
        default: function() {
          for (var y = arguments.length, h = new Array(y), C = 0; C < y; C++)
            h[C] = arguments[C];
          return k(we, {
            root: "VMenu"
          }, {
            default: () => {
              var p;
              return [(p = t.default) == null ? void 0 : p.call(t, ...h)];
            }
          });
        }
      });
    }), ut({
      id: r,
      ΨopenChildren: u
    }, s);
  }
}), Sh = F({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...se(),
  ...Ht({
    transition: {
      component: Il
    }
  })
}, "VCounter"), Ol = W()({
  name: "VCounter",
  functional: !0,
  props: Sh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = E(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return G(() => k(yt, {
      transition: e.transition
    }, {
      default: () => [We(S("div", {
        class: z(["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class]),
        style: le(e.style)
      }, [t.default ? t.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[Lt, e.active]])]
    })), {};
  }
}), wh = F({
  floating: Boolean,
  ...se()
}, "VFieldLabel"), ya = W()({
  name: "VFieldLabel",
  props: wh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => k(sa, {
      class: z(["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class]),
      style: le(e.style)
    }, t)), {};
  }
}), Ch = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Ya = F({
  appendInnerIcon: fe,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: fe,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  details: Boolean,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  glow: Boolean,
  error: Boolean,
  flat: Boolean,
  iconColor: [Boolean, String],
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: fe,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => Ch.includes(e)
  },
  "onClick:clear": dt(),
  "onClick:appendInner": dt(),
  "onClick:prependInner": dt(),
  ...se(),
  ...Tl(),
  ...He(),
  ...Ae()
}, "VField"), un = W()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Ua(),
    ...Ya()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      themeClasses: i
    } = Ee(e), {
      loaderClasses: o
    } = Na(e), {
      focusClasses: r,
      isFocused: s,
      focus: c,
      blur: u
    } = nn(e), {
      InputIcon: d
    } = pu(e), {
      roundedClasses: v
    } = Ye(e), {
      rtlClasses: f
    } = nt(), g = E(() => e.dirty || e.active), b = E(() => !!(e.label || l.label)), m = E(() => !e.singleLine && b.value), y = xt(), h = w(() => e.id || `input-${y}`), C = E(() => e.details ? `${h.value}-messages` : void 0), p = j(), _ = j(), P = j(), I = w(() => ["plain", "underlined"].includes(e.variant)), V = w(() => e.error || e.disabled ? void 0 : g.value && s.value ? e.color : e.baseColor), T = w(() => {
      if (!(!e.iconColor || e.glow && !s.value))
        return e.iconColor === !0 ? V.value : e.iconColor;
    }), {
      backgroundColorClasses: A,
      backgroundColorStyles: D
    } = Le(() => e.bgColor), {
      textColorClasses: x,
      textColorStyles: B
    } = vt(V);
    ae(g, (N) => {
      if (m.value) {
        const Y = p.value.$el, te = _.value.$el;
        requestAnimationFrame(() => {
          const q = io(Y), $ = te.getBoundingClientRect(), O = $.x - q.x, R = $.y - q.y - (q.height / 2 - $.height / 2), U = $.width / 0.75, ce = Math.abs(U - q.width) > 1 ? {
            maxWidth: oe(U)
          } : void 0, ne = getComputedStyle(Y), Q = getComputedStyle(te), X = parseFloat(ne.transitionDuration) * 1e3 || 150, ve = parseFloat(Q.getPropertyValue("--v-field-label-scale")), ge = Q.getPropertyValue("color");
          Y.style.visibility = "visible", te.style.visibility = "hidden", bn(Y, {
            transform: `translate(${O}px, ${R}px) scale(${ve})`,
            color: ge,
            ...ce
          }, {
            duration: X,
            easing: Sa,
            direction: N ? "normal" : "reverse"
          }).finished.then(() => {
            Y.style.removeProperty("visibility"), te.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const M = w(() => ({
      isActive: g,
      isFocused: s,
      controlRef: P,
      blur: u,
      focus: c
    }));
    function L(N) {
      N.target !== document.activeElement && N.preventDefault();
    }
    return G(() => {
      var O, R, U;
      const N = e.variant === "outlined", Y = !!(l["prepend-inner"] || e.prependInnerIcon), te = !!(e.clearable || l.clear) && !e.disabled, q = !!(l["append-inner"] || e.appendInnerIcon || te), $ = () => l.label ? l.label({
        ...M.value,
        label: e.label,
        props: {
          for: h.value
        }
      }) : e.label;
      return S("div", H({
        class: ["v-field", {
          "v-field--active": g.value,
          "v-field--appended": q,
          "v-field--center-affix": e.centerAffix ?? !I.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--glow": e.glow,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": Y,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !$(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, A.value, r.value, o.value, v.value, f.value, e.class],
        style: [D.value, e.style],
        onClick: L
      }, t), [S("div", {
        class: "v-field__overlay"
      }, null), k(Ha, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), Y && S("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && k(d, {
        key: "prepend-icon",
        name: "prependInner",
        color: T.value
      }, null), (O = l["prepend-inner"]) == null ? void 0 : O.call(l, M.value)]), S("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && m.value && k(ya, {
        key: "floating-label",
        ref: _,
        class: z([x.value]),
        floating: !0,
        for: h.value,
        "aria-hidden": !g.value,
        style: le(B.value)
      }, {
        default: () => [$()]
      }), b.value && k(ya, {
        key: "label",
        ref: p,
        for: h.value
      }, {
        default: () => [$()]
      }), ((R = l.default) == null ? void 0 : R.call(l, {
        ...M.value,
        props: {
          id: h.value,
          class: "v-field__input",
          "aria-describedby": C.value
        },
        focus: c,
        blur: u
      })) ?? S("div", {
        id: h.value,
        class: "v-field__input",
        "aria-describedby": C.value
      }, null)]), te && k(ko, {
        key: "clear"
      }, {
        default: () => [We(S("div", {
          class: "v-field__clearable",
          onMousedown: (ce) => {
            ce.preventDefault(), ce.stopPropagation();
          }
        }, [k(we, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [l.clear ? l.clear({
            ...M.value,
            props: {
              onFocus: c,
              onBlur: u,
              onClick: e["onClick:clear"],
              tabindex: -1
            }
          }) : k(d, {
            name: "clear",
            onFocus: c,
            onBlur: u,
            tabindex: -1
          }, null)]
        })]), [[Lt, e.dirty]])]
      }), q && S("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(U = l["append-inner"]) == null ? void 0 : U.call(l, M.value), e.appendInnerIcon && k(d, {
        key: "append-icon",
        name: "appendInner",
        color: T.value
      }, null)]), S("div", {
        class: z(["v-field__outline", x.value]),
        style: le(B.value)
      }, [N && S(ue, null, [S("div", {
        class: "v-field__outline__start"
      }, null), m.value && S("div", {
        class: "v-field__outline__notch"
      }, [k(ya, {
        ref: _,
        floating: !0,
        for: h.value,
        "aria-hidden": !g.value
      }, {
        default: () => [$()]
      })]), S("div", {
        class: "v-field__outline__end"
      }, null)]), I.value && m.value && k(ya, {
        ref: _,
        floating: !0,
        for: h.value,
        "aria-hidden": !g.value
      }, {
        default: () => [$()]
      })])]);
    }), {
      controlRef: P,
      fieldIconColor: T
    };
  }
});
function oc(e) {
  function n(t, a) {
    var l, i;
    !e.autofocus || !t || (i = (l = a[0].target) == null ? void 0 : l.focus) == null || i.call(l);
  }
  return {
    onIntersect: n
  };
}
const xh = ["color", "file", "time", "date", "datetime-local", "week", "month"], Ka = F({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...an(),
  ...Ya()
}, "VTextField"), Gt = W()({
  name: "VTextField",
  directives: {
    vIntersect: Zt
  },
  inheritAttrs: !1,
  props: Ka(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const i = de(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = nn(e), {
      onIntersect: c
    } = oc(e), u = w(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), d = w(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), v = w(() => ["plain", "underlined"].includes(e.variant)), f = j(), g = j(), b = j(), m = w(() => xh.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function y() {
      o.value || r(), Pe(() => {
        b.value !== document.activeElement && Pe(() => {
          var P;
          return (P = b.value) == null ? void 0 : P.focus();
        });
      });
    }
    function h(P) {
      a("mousedown:control", P), P.target !== b.value && (y(), P.preventDefault());
    }
    function C(P) {
      a("click:control", P);
    }
    function p(P, I) {
      P.stopPropagation(), y(), Pe(() => {
        i.value = null, I(), xl(e["onClick:clear"], P);
      });
    }
    function _(P) {
      var V;
      const I = P.target;
      if (i.value = I.value, (V = e.modelModifiers) != null && V.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const T = [I.selectionStart, I.selectionEnd];
        Pe(() => {
          I.selectionStart = T[0], I.selectionEnd = T[1];
        });
      }
    }
    return G(() => {
      const P = !!(l.counter || e.counter !== !1 && e.counter != null), I = !!(P || l.details), [V, T] = dn(t), {
        modelValue: A,
        ...D
      } = gt.filterProps(e), x = un.filterProps(e);
      return k(gt, H({
        ref: f,
        modelValue: i.value,
        "onUpdate:modelValue": (B) => i.value = B,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": v.value
        }, e.class],
        style: e.style
      }, V, D, {
        centerAffix: !v.value,
        focused: o.value
      }), {
        ...l,
        default: (B) => {
          let {
            id: M,
            isDisabled: L,
            isDirty: N,
            isReadonly: Y,
            isValid: te,
            hasDetails: q,
            reset: $
          } = B;
          return k(un, H({
            ref: g,
            onMousedown: h,
            onClick: C,
            "onClick:clear": (O) => p(O, $),
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, x, {
            id: M.value,
            active: m.value || N.value,
            dirty: N.value || e.dirty,
            disabled: L.value,
            focused: o.value,
            details: q.value,
            error: te.value === !1
          }), {
            ...l,
            default: (O) => {
              let {
                props: {
                  class: R,
                  ...U
                }
              } = O;
              const ce = We(S("input", H({
                ref: b,
                value: i.value,
                onInput: _,
                autofocus: e.autofocus,
                readonly: Y.value,
                disabled: L.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: y,
                onBlur: s
              }, U, T), null), [[Zt, {
                handler: c
              }, null, {
                once: !0
              }]]);
              return S(ue, null, [e.prefix && S("span", {
                class: "v-text-field__prefix"
              }, [S("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? S("div", {
                class: z(R),
                "data-no-activator": ""
              }, [l.default(), ce]) : ov(ce, {
                class: R
              }), e.suffix && S("span", {
                class: "v-text-field__suffix"
              }, [S("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: I ? (B) => {
          var M;
          return S(ue, null, [(M = l.details) == null ? void 0 : M.call(l, B), P && S(ue, null, [S("span", null, null), k(Ol, {
            active: e.persistentCounter || o.value,
            value: u.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), ut({}, f, g, b);
  }
}), Vh = F({
  renderless: Boolean,
  ...se()
}, "VVirtualScrollItem"), rc = W()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: Vh(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      resizeRef: i,
      contentRect: o
    } = Rt(void 0, "border");
    ae(() => {
      var r;
      return (r = o.value) == null ? void 0 : r.height;
    }, (r) => {
      r != null && a("update:height", r);
    }), G(() => {
      var r, s;
      return e.renderless ? S(ue, null, [(r = l.default) == null ? void 0 : r.call(l, {
        itemRef: i
      })]) : S("div", H({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, t), [(s = l.default) == null ? void 0 : s.call(l)]);
    });
  }
}), ph = -1, Ph = 1, ii = 100, sc = F({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  itemKey: {
    type: [String, Array, Function],
    default: null
  },
  height: [Number, String]
}, "virtual");
function uc(e, n) {
  const t = $t(), a = ee(0);
  je(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = ee(0), i = ee(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || t.height.value) / (a.value || 16)
  ) || 1), o = ee(0), r = ee(0), s = j(), c = j();
  let u = 0;
  const {
    resizeRef: d,
    contentRect: v
  } = Rt();
  je(() => {
    d.value = s.value;
  });
  const f = w(() => {
    var $;
    return s.value === document.documentElement ? t.height.value : (($ = v.value) == null ? void 0 : $.height) || parseInt(e.height) || 0;
  }), g = w(() => !!(s.value && c.value && f.value && a.value));
  let b = Array.from({
    length: n.value.length
  }), m = Array.from({
    length: n.value.length
  });
  const y = ee(0);
  let h = -1;
  function C($) {
    return b[$] || a.value;
  }
  const p = Cs(() => {
    const $ = performance.now();
    m[0] = 0;
    const O = n.value.length;
    for (let R = 1; R <= O - 1; R++)
      m[R] = (m[R - 1] || 0) + C(R - 1);
    y.value = Math.max(y.value, performance.now() - $);
  }, y), _ = ae(g, ($) => {
    $ && (_(), u = c.value.offsetTop, p.immediate(), N(), ~h && Pe(() => {
      Oe && window.requestAnimationFrame(() => {
        te(h), h = -1;
      });
    }));
  });
  lt(() => {
    p.clear();
  });
  function P($, O) {
    const R = b[$], U = a.value;
    a.value = U ? Math.min(a.value, O) : O, (R !== O || U !== a.value) && (b[$] = O, p());
  }
  function I($) {
    $ = Me($, 0, n.value.length - 1);
    const O = Math.floor($), R = $ % 1, U = O + 1, ce = m[O] || 0, ne = m[U] || ce;
    return ce + (ne - ce) * R;
  }
  function V($) {
    return _h(m, $);
  }
  let T = 0, A = 0, D = 0;
  ae(f, ($, O) => {
    O && (N(), $ < O && requestAnimationFrame(() => {
      A = 0, N();
    }));
  });
  let x = -1;
  function B() {
    if (!s.value || !c.value) return;
    const $ = s.value.scrollTop, O = performance.now();
    O - D > 500 ? (A = Math.sign($ - T), u = c.value.offsetTop) : A = $ - T, T = $, D = O, window.clearTimeout(x), x = window.setTimeout(M, 500), N();
  }
  function M() {
    !s.value || !c.value || (A = 0, D = 0, window.clearTimeout(x), N());
  }
  let L = -1;
  function N() {
    cancelAnimationFrame(L), L = requestAnimationFrame(Y);
  }
  function Y() {
    if (!s.value || !f.value || !a.value) return;
    const $ = T - u, O = Math.sign(A), R = Math.max(0, $ - ii), U = Me(V(R), 0, n.value.length), ce = $ + f.value + ii, ne = Me(V(ce) + 1, U + 1, n.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (O !== ph || U < l.value) && (O !== Ph || ne > i.value)
    ) {
      const Q = I(l.value) - I(U), X = I(ne) - I(i.value);
      Math.max(Q, X) > ii ? (l.value = U, i.value = ne) : (U <= 0 && (l.value = U), ne >= n.value.length && (i.value = ne));
    }
    o.value = I(l.value), r.value = I(n.value.length) - I(i.value);
  }
  function te($) {
    const O = I($);
    !s.value || $ && !O ? h = $ : s.value.scrollTop = O;
  }
  const q = w(() => n.value.slice(l.value, i.value).map(($, O) => {
    const R = O + l.value;
    return {
      raw: $,
      index: R,
      key: Qe($, e.itemKey, R)
    };
  }));
  return ae(n, () => {
    b = Array.from({
      length: n.value.length
    }), m = Array.from({
      length: n.value.length
    }), p.immediate(), N();
  }, {
    deep: 1
  }), {
    calculateVisibleItems: N,
    containerRef: s,
    markerRef: c,
    computedItems: q,
    paddingTop: o,
    paddingBottom: r,
    scrollToIndex: te,
    handleScroll: B,
    handleScrollend: M,
    handleItemResize: P
  };
}
function _h(e, n) {
  let t = e.length - 1, a = 0, l = 0, i = null, o = -1;
  if (e[t] < n)
    return t;
  for (; a <= t; )
    if (l = a + t >> 1, i = e[l], i > n)
      t = l - 1;
    else if (i < n)
      o = l, a = l + 1;
    else return i === n ? l : a;
  return o;
}
const Ih = F({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...sc(),
  ...se(),
  ...Je()
}, "VVirtualScroll"), El = W()({
  name: "VVirtualScroll",
  props: Ih(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Xe("VVirtualScroll"), {
      dimensionStyles: l
    } = et(e), {
      calculateVisibleItems: i,
      containerRef: o,
      markerRef: r,
      handleScroll: s,
      handleScrollend: c,
      handleItemResize: u,
      scrollToIndex: d,
      paddingTop: v,
      paddingBottom: f,
      computedItems: g
    } = uc(e, E(() => e.items));
    return bt(() => e.renderless, () => {
      function b() {
        var h, C;
        const y = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        o.value === document.documentElement ? (document[y]("scroll", s, {
          passive: !0
        }), document[y]("scrollend", c)) : ((h = o.value) == null || h[y]("scroll", s, {
          passive: !0
        }), (C = o.value) == null || C[y]("scrollend", c));
      }
      ft(() => {
        o.value = uo(a.vnode.el, !0), b(!0);
      }), lt(b);
    }), G(() => {
      const b = g.value.map((m) => k(rc, {
        key: m.key,
        renderless: e.renderless,
        "onUpdate:height": (y) => u(m.index, y)
      }, {
        default: (y) => {
          var h;
          return (h = t.default) == null ? void 0 : h.call(t, {
            item: m.raw,
            index: m.index,
            ...y
          });
        }
      }));
      return e.renderless ? S(ue, null, [S("div", {
        ref: r,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: oe(v.value)
        }
      }, null), b, S("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: oe(f.value)
        }
      }, null)]) : S("div", {
        ref: o,
        class: z(["v-virtual-scroll", e.class]),
        onScrollPassive: s,
        onScrollend: c,
        style: le([l.value, e.style])
      }, [S("div", {
        ref: r,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: oe(v.value),
          paddingBottom: oe(f.value)
        }
      }, [b])]);
    }), {
      calculateVisibleItems: i,
      scrollToIndex: d
    };
  }
});
function Do(e, n) {
  const t = ee(!1);
  let a;
  function l(r) {
    cancelAnimationFrame(a), t.value = !0, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }
  async function i() {
    await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
      if (t.value) {
        const s = ae(t, () => {
          s(), r();
        });
      } else r();
    });
  }
  async function o(r) {
    var u, d;
    if (r.key === "Tab" && ((u = n.value) == null || u.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key)) return;
    const s = (d = e.value) == null ? void 0 : d.$el;
    if (!s) return;
    (r.key === "Home" || r.key === "End") && s.scrollTo({
      top: r.key === "Home" ? 0 : s.scrollHeight,
      behavior: "smooth"
    }), await i();
    const c = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const v = s.getBoundingClientRect().top;
      for (const f of c)
        if (f.getBoundingClientRect().top >= v) {
          f.focus();
          break;
        }
    } else {
      const v = s.getBoundingClientRect().bottom;
      for (const f of [...c].reverse())
        if (f.getBoundingClientRect().bottom <= v) {
          f.focus();
          break;
        }
    }
  }
  return {
    onScrollPassive: l,
    onKeydown: o
  };
}
const Bo = F({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: fe,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  noAutoScroll: Boolean,
  ...Yu({
    itemChildren: !1
  })
}, "Select"), Ah = F({
  ...Bo(),
  ...Fe(Ka({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Ht({
    transition: {
      component: _l
    }
  })
}, "VSelect"), Oo = W()({
  name: "VSelect",
  props: Ah(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Ne(), l = j(), i = j(), o = j(), {
      items: r,
      transformIn: s,
      transformOut: c
    } = Po(e), u = de(e, "modelValue", [], ($) => s($ === null ? [null] : Ue($)), ($) => {
      const O = c($);
      return e.multiple ? O : O[0] ?? null;
    }), d = w(() => typeof e.counterValue == "function" ? e.counterValue(u.value) : typeof e.counterValue == "number" ? e.counterValue : u.value.length), v = ja(e), f = w(() => u.value.map(($) => $.value)), g = ee(!1);
    let b = "", m = -1, y;
    const h = w(() => e.hideSelected ? r.value.filter(($) => !u.value.some((O) => (e.valueComparator || ct)(O, $))) : r.value), C = w(() => e.hideNoData && !h.value.length || v.isReadonly.value || v.isDisabled.value), p = de(e, "menu"), _ = w({
      get: () => p.value,
      set: ($) => {
        var O;
        p.value && !$ && ((O = i.value) != null && O.ΨopenChildren.size) || $ && C.value || (p.value = $);
      }
    }), P = E(() => _.value ? e.closeText : e.openText), I = w(() => {
      var $;
      return {
        ...e.menuProps,
        activatorProps: {
          ...(($ = e.menuProps) == null ? void 0 : $.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), V = j(), T = Do(V, l);
    function A($) {
      e.openOnClear && (_.value = !0);
    }
    function D() {
      C.value || (_.value = !_.value);
    }
    function x($) {
      Zn($) && B($);
    }
    function B($) {
      var ge, J, ie;
      if (!$.key || v.isReadonly.value) return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes($.key) && $.preventDefault(), ["Enter", "ArrowDown", " "].includes($.key) && (_.value = !0), ["Escape", "Tab"].includes($.key) && (_.value = !1), $.key === "Home" ? (ge = V.value) == null || ge.focus("first") : $.key === "End" && ((J = V.value) == null || J.focus("last"));
      const O = 1e3;
      if (!Zn($)) return;
      const R = performance.now();
      R - y > O && (b = "", m = -1), b += $.key.toLowerCase(), y = R;
      const U = h.value;
      function ce() {
        let K = ne();
        return K || b.at(-1) === b.at(-2) && (b = b.slice(0, -1), K = ne(), K) || (m = -1, K = ne(), K) ? K : (b = $.key.toLowerCase(), ne());
      }
      function ne() {
        for (let K = m + 1; K < U.length; K++) {
          const Z = U[K];
          if (Z.title.toLowerCase().startsWith(b))
            return [Z, K];
        }
      }
      const Q = ce();
      if (!Q) return;
      const [X, ve] = Q;
      m = ve, (ie = V.value) == null || ie.focus(ve), e.multiple || (u.value = [X]);
    }
    function M($) {
      let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!$.props.disabled)
        if (e.multiple) {
          const R = u.value.findIndex((ce) => (e.valueComparator || ct)(ce.value, $.value)), U = O ?? !~R;
          if (~R) {
            const ce = U ? [...u.value, $] : [...u.value];
            ce.splice(R, 1), u.value = ce;
          } else U && (u.value = [...u.value, $]);
        } else {
          const R = O !== !1;
          u.value = R ? [$] : [], Pe(() => {
            _.value = !1;
          });
        }
    }
    function L($) {
      var O;
      (O = V.value) != null && O.$el.contains($.relatedTarget) || (_.value = !1);
    }
    function N() {
      var $;
      e.eager && (($ = o.value) == null || $.calculateVisibleItems());
    }
    function Y() {
      var $;
      g.value && (($ = l.value) == null || $.focus());
    }
    function te($) {
      g.value = !0;
    }
    function q($) {
      if ($ == null) u.value = [];
      else if (Xn(l.value, ":autofill") || Xn(l.value, ":-webkit-autofill")) {
        const O = r.value.find((R) => R.title === $);
        O && M(O);
      } else l.value && (l.value.value = "");
    }
    return ae(_, () => {
      if (!e.hideSelected && _.value && u.value.length) {
        const $ = h.value.findIndex((O) => u.value.some((R) => (e.valueComparator || ct)(R.value, O.value)));
        Oe && !e.noAutoScroll && window.requestAnimationFrame(() => {
          var O;
          $ >= 0 && ((O = o.value) == null || O.scrollToIndex($));
        });
      }
    }), ae(() => e.items, ($, O) => {
      _.value || g.value && e.hideNoData && !O.length && $.length && (_.value = !0);
    }), G(() => {
      const $ = !!(e.chips || t.chip), O = !!(!e.hideNoData || h.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), R = u.value.length > 0, U = Gt.filterProps(e), ce = R || !g.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return k(Gt, H({
        ref: l
      }, U, {
        modelValue: u.value.map((ne) => ne.props.value).join(", "),
        "onUpdate:modelValue": q,
        focused: g.value,
        "onUpdate:focused": (ne) => g.value = ne,
        validationValue: u.externalValue,
        counterValue: d.value,
        dirty: R,
        class: ["v-select", {
          "v-select--active-menu": _.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": u.value.length,
          "v-select--selection-slot": !!t.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: ce,
        "onClick:clear": A,
        "onMousedown:control": D,
        onBlur: L,
        onKeydown: B,
        "aria-label": a(P.value),
        title: a(P.value)
      }), {
        ...t,
        default: () => S(ue, null, [k(Pn, H({
          ref: i,
          modelValue: _.value,
          "onUpdate:modelValue": (ne) => _.value = ne,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: C.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: N,
          onAfterLeave: Y
        }, I.value), {
          default: () => [O && k(pn, H({
            ref: V,
            selected: f.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (ne) => ne.preventDefault(),
            onKeydown: x,
            onFocusin: te,
            tabindex: "-1",
            "aria-live": "polite",
            "aria-label": `${e.label}-list`,
            color: e.itemColor ?? e.color
          }, T, e.listProps), {
            default: () => {
              var ne, Q, X;
              return [(ne = t["prepend-item"]) == null ? void 0 : ne.call(t), !h.value.length && !e.hideNoData && (((Q = t["no-data"]) == null ? void 0 : Q.call(t)) ?? k(Dt, {
                key: "no-data",
                title: a(e.noDataText)
              }, null)), k(El, {
                ref: o,
                renderless: !0,
                items: h.value,
                itemKey: "value"
              }, {
                default: (ve) => {
                  var me, he, pe;
                  let {
                    item: ge,
                    index: J,
                    itemRef: ie
                  } = ve;
                  const K = Vv(ge.props), Z = H(ge.props, {
                    ref: ie,
                    key: ge.value,
                    onClick: () => M(ge, null)
                  });
                  return ge.type === "divider" ? ((me = t.divider) == null ? void 0 : me.call(t, {
                    props: ge.raw,
                    index: J
                  })) ?? k(At, H(ge.props, {
                    key: `divider-${J}`
                  }), null) : ge.type === "subheader" ? ((he = t.subheader) == null ? void 0 : he.call(t, {
                    props: ge.raw,
                    index: J
                  })) ?? k(ca, H(ge.props, {
                    key: `subheader-${J}`
                  }), null) : ((pe = t.item) == null ? void 0 : pe.call(t, {
                    item: ge,
                    index: J,
                    props: Z
                  })) ?? k(Dt, H(Z, {
                    role: "option"
                  }), {
                    prepend: (Ce) => {
                      let {
                        isSelected: Te
                      } = Ce;
                      return S(ue, null, [e.multiple && !e.hideSelected ? k(jt, {
                        key: ge.value,
                        modelValue: Te,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, K.prependAvatar && k(Et, {
                        image: K.prependAvatar
                      }, null), K.prependIcon && k(Be, {
                        icon: K.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (X = t["append-item"]) == null ? void 0 : X.call(t)];
            }
          })]
        }), u.value.map((ne, Q) => {
          function X(ie) {
            ie.stopPropagation(), ie.preventDefault(), M(ne, !1);
          }
          const ve = {
            "onClick:close": X,
            onKeydown(ie) {
              ie.key !== "Enter" && ie.key !== " " || (ie.preventDefault(), ie.stopPropagation(), X(ie));
            },
            onMousedown(ie) {
              ie.preventDefault(), ie.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, ge = $ ? !!t.chip : !!t.selection, J = ge ? Vl($ ? t.chip({
            item: ne,
            index: Q,
            props: ve
          }) : t.selection({
            item: ne,
            index: Q
          })) : void 0;
          if (!(ge && !J))
            return S("div", {
              key: ne.value,
              class: "v-select__selection"
            }, [$ ? t.chip ? k(we, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: ne.title
                }
              }
            }, {
              default: () => [J]
            }) : k(ua, H({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: ne.title,
              disabled: ne.props.disabled
            }, ve), null) : J ?? S("span", {
              class: "v-select__selection-text"
            }, [ne.title, e.multiple && Q < u.value.length - 1 && S("span", {
              class: "v-select__selection-comma"
            }, [mt(",")])])]);
        })]),
        "append-inner": function() {
          var ve, ge;
          for (var ne = arguments.length, Q = new Array(ne), X = 0; X < ne; X++)
            Q[X] = arguments[X];
          return S(ue, null, [(ve = t["append-inner"]) == null ? void 0 : ve.call(t, ...Q), e.menuIcon ? k(Be, {
            class: "v-select__menu-icon",
            color: (ge = l.value) == null ? void 0 : ge.fieldIconColor,
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), ut({
      isFocused: g,
      menu: _,
      select: M
    }, l);
  }
}), Th = (e, n, t) => {
  if (e == null || n == null) return -1;
  if (!n.length) return 0;
  e = e.toString().toLocaleLowerCase(), n = n.toString().toLocaleLowerCase();
  const a = [];
  let l = e.indexOf(n);
  for (; ~l; )
    a.push([l, l + n.length]), l = e.indexOf(n, l + n.length);
  return a.length ? a : -1;
};
function oi(e, n) {
  if (!(e == null || typeof e == "boolean" || e === -1))
    return typeof e == "number" ? [[e, e + n.length]] : Array.isArray(e[0]) ? e : [e];
}
const da = F({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function Dh(e, n, t) {
  var r;
  const a = [], l = (t == null ? void 0 : t.default) ?? Th, i = t != null && t.filterKeys ? Ue(t.filterKeys) : !1, o = Object.keys((t == null ? void 0 : t.customKeyFilter) ?? {}).length;
  if (!(e != null && e.length)) return a;
  e: for (let s = 0; s < e.length; s++) {
    const [c, u = c] = Ue(e[s]), d = {}, v = {};
    let f = -1;
    if ((n || o > 0) && !(t != null && t.noFilter)) {
      if (typeof c == "object") {
        if (c.type === "divider" || c.type === "subheader")
          continue;
        const m = i || Object.keys(u);
        for (const y of m) {
          const h = Qe(u, y), C = (r = t == null ? void 0 : t.customKeyFilter) == null ? void 0 : r[y];
          if (f = C ? C(h, n, c) : l(h, n, c), f !== -1 && f !== !1)
            C ? d[y] = oi(f, n) : v[y] = oi(f, n);
          else if ((t == null ? void 0 : t.filterMode) === "every")
            continue e;
        }
      } else
        f = l(c, n, c), f !== -1 && f !== !1 && (v.title = oi(f, n));
      const g = Object.keys(v).length, b = Object.keys(d).length;
      if (!g && !b || (t == null ? void 0 : t.filterMode) === "union" && b !== o && !g || (t == null ? void 0 : t.filterMode) === "intersection" && (b !== o || !g)) continue;
    }
    a.push({
      index: s,
      matches: {
        ...v,
        ...d
      }
    });
  }
  return a;
}
function va(e, n, t, a) {
  const l = ee([]), i = ee(/* @__PURE__ */ new Map()), o = w(() => a != null && a.transform ? be(n).map((s) => [s, a.transform(s)]) : be(n));
  je(() => {
    const s = typeof t == "function" ? t() : be(t), c = typeof s != "string" && typeof s != "number" ? "" : String(s), u = Dh(o.value, c, {
      customKeyFilter: {
        ...e.customKeyFilter,
        ...be(a == null ? void 0 : a.customKeyFilter)
      },
      default: e.customFilter,
      filterKeys: e.filterKeys,
      filterMode: e.filterMode,
      noFilter: e.noFilter
    }), d = be(n), v = [], f = /* @__PURE__ */ new Map();
    u.forEach((g) => {
      let {
        index: b,
        matches: m
      } = g;
      const y = d[b];
      v.push(y), f.set(y.value, m);
    }), l.value = v, i.value = f;
  });
  function r(s) {
    return i.value.get(s.value);
  }
  return {
    filteredItems: l,
    filteredMatches: i,
    getMatches: r
  };
}
function cc(e, n, t) {
  return t == null || !t.length ? n : t.map((a, l) => {
    const i = l === 0 ? 0 : t[l - 1][1], o = [S("span", {
      class: z(`${e}__unmask`)
    }, [n.slice(i, a[0])]), S("span", {
      class: z(`${e}__mask`)
    }, [n.slice(a[0], a[1])])];
    return l === t.length - 1 && o.push(S("span", {
      class: z(`${e}__unmask`)
    }, [n.slice(a[1])])), S(ue, null, [o]);
  });
}
const Bh = F({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: Boolean,
  search: String,
  ...da({
    filterKeys: ["title"]
  }),
  ...Bo(),
  ...Fe(Ka({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Ht({
    transition: !1
  })
}, "VAutocomplete"), dc = W()({
  name: "VAutocomplete",
  props: Bh(),
  emits: {
    "update:focused": (e) => !0,
    "update:search": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Ne(), l = j(), i = ee(!1), o = ee(!0), r = ee(!1), s = j(), c = j(), u = ee(-1), {
      items: d,
      transformIn: v,
      transformOut: f
    } = Po(e), {
      textColorClasses: g,
      textColorStyles: b
    } = vt(() => {
      var J;
      return (J = l.value) == null ? void 0 : J.color;
    }), m = de(e, "search", ""), y = de(e, "modelValue", [], (J) => v(J === null ? [null] : Ue(J)), (J) => {
      const ie = f(J);
      return e.multiple ? ie : ie[0] ?? null;
    }), h = w(() => typeof e.counterValue == "function" ? e.counterValue(y.value) : typeof e.counterValue == "number" ? e.counterValue : y.value.length), C = ja(e), {
      filteredItems: p,
      getMatches: _
    } = va(e, d, () => o.value ? "" : m.value), P = w(() => e.hideSelected ? p.value.filter((J) => !y.value.some((ie) => ie.value === J.value)) : p.value), I = w(() => !!(e.chips || t.chip)), V = w(() => I.value || !!t.selection), T = w(() => y.value.map((J) => J.props.value)), A = w(() => {
      var ie;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && m.value === ((ie = P.value[0]) == null ? void 0 : ie.title)) && P.value.length > 0 && !o.value && !r.value;
    }), D = w(() => e.hideNoData && !P.value.length || C.isReadonly.value || C.isDisabled.value), x = de(e, "menu"), B = w({
      get: () => x.value,
      set: (J) => {
        var ie;
        x.value && !J && ((ie = s.value) != null && ie.ΨopenChildren.size) || J && D.value || (x.value = J);
      }
    }), M = w(() => B.value ? e.closeText : e.openText), L = j(), N = Do(L, l);
    function Y(J) {
      e.openOnClear && (B.value = !0), m.value = "";
    }
    function te() {
      D.value || (B.value = !0);
    }
    function q(J) {
      D.value || (i.value && (J.preventDefault(), J.stopPropagation()), B.value = !B.value);
    }
    function $(J) {
      var ie;
      (Zn(J) || J.key === "Backspace") && ((ie = l.value) == null || ie.focus());
    }
    function O(J) {
      var Z, me, he, pe, Ce;
      if (C.isReadonly.value) return;
      const ie = (Z = l.value) == null ? void 0 : Z.selectionStart, K = y.value.length;
      if (["Enter", "ArrowDown", "ArrowUp"].includes(J.key) && J.preventDefault(), ["Enter", "ArrowDown"].includes(J.key) && (B.value = !0), ["Escape"].includes(J.key) && (B.value = !1), A.value && ["Enter", "Tab"].includes(J.key) && !y.value.some((Te) => {
        let {
          value: ye
        } = Te;
        return ye === P.value[0].value;
      }) && ge(P.value[0]), J.key === "ArrowDown" && A.value && ((me = L.value) == null || me.focus("next")), ["Backspace", "Delete"].includes(J.key)) {
        if (!e.multiple && V.value && y.value.length > 0 && !m.value) return ge(y.value[0], !1);
        if (~u.value) {
          J.preventDefault();
          const Te = u.value;
          ge(y.value[u.value], !1), u.value = Te >= K - 1 ? K - 2 : Te;
        } else J.key === "Backspace" && !m.value && (u.value = K - 1);
        return;
      }
      if (e.multiple)
        if (J.key === "ArrowLeft") {
          if (u.value < 0 && ie && ie > 0) return;
          const Te = u.value > -1 ? u.value - 1 : K - 1;
          if (y.value[Te])
            u.value = Te;
          else {
            const ye = ((he = m.value) == null ? void 0 : he.length) ?? null;
            u.value = -1, (pe = l.value) == null || pe.setSelectionRange(ye, ye);
          }
        } else if (J.key === "ArrowRight") {
          if (u.value < 0) return;
          const Te = u.value + 1;
          y.value[Te] ? u.value = Te : (u.value = -1, (Ce = l.value) == null || Ce.setSelectionRange(0, 0));
        } else ~u.value && Zn(J) && (u.value = -1);
    }
    function R(J) {
      if (Xn(l.value, ":autofill") || Xn(l.value, ":-webkit-autofill")) {
        const ie = d.value.find((K) => K.title === J.target.value);
        ie && ge(ie);
      }
    }
    function U() {
      var J;
      e.eager && ((J = c.value) == null || J.calculateVisibleItems());
    }
    function ce() {
      var J;
      i.value && (o.value = !0, (J = l.value) == null || J.focus());
    }
    function ne(J) {
      i.value = !0, setTimeout(() => {
        r.value = !0;
      });
    }
    function Q(J) {
      r.value = !1;
    }
    function X(J) {
      (J == null || J === "" && !e.multiple && !V.value) && (y.value = []);
    }
    const ve = ee(!1);
    function ge(J) {
      let ie = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!J || J.props.disabled))
        if (e.multiple) {
          const K = y.value.findIndex((me) => (e.valueComparator || ct)(me.value, J.value)), Z = ie ?? !~K;
          if (~K) {
            const me = Z ? [...y.value, J] : [...y.value];
            me.splice(K, 1), y.value = me;
          } else Z && (y.value = [...y.value, J]);
          e.clearOnSelect && (m.value = "");
        } else {
          const K = ie !== !1;
          y.value = K ? [J] : [], m.value = K && !V.value ? J.title : "", Pe(() => {
            B.value = !1, o.value = !0;
          });
        }
    }
    return ae(i, (J, ie) => {
      var K;
      J !== ie && (J ? (ve.value = !0, m.value = e.multiple || V.value ? "" : String(((K = y.value.at(-1)) == null ? void 0 : K.props.title) ?? ""), o.value = !0, Pe(() => ve.value = !1)) : (!e.multiple && m.value == null && (y.value = []), B.value = !1, (e.multiple || V.value) && (m.value = ""), u.value = -1));
    }), ae(m, (J) => {
      !i.value || ve.value || (J && (B.value = !0), o.value = !J);
    }), ae(B, () => {
      if (!e.hideSelected && B.value && y.value.length) {
        const J = P.value.findIndex((ie) => y.value.some((K) => ie.value === K.value));
        Oe && window.requestAnimationFrame(() => {
          var ie;
          J >= 0 && ((ie = c.value) == null || ie.scrollToIndex(J));
        });
      }
    }), ae(() => e.items, (J, ie) => {
      B.value || i.value && !ie.length && J.length && (B.value = !0);
    }), G(() => {
      const J = !!(!e.hideNoData || P.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), ie = y.value.length > 0, K = Gt.filterProps(e);
      return k(Gt, H({
        ref: l
      }, K, {
        modelValue: m.value,
        "onUpdate:modelValue": [(Z) => m.value = Z, X],
        focused: i.value,
        "onUpdate:focused": (Z) => i.value = Z,
        validationValue: y.externalValue,
        counterValue: h.value,
        dirty: ie,
        onChange: R,
        class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, {
          "v-autocomplete--active-menu": B.value,
          "v-autocomplete--chips": !!e.chips,
          "v-autocomplete--selection-slot": !!V.value,
          "v-autocomplete--selecting-index": u.value > -1
        }, e.class],
        style: e.style,
        readonly: C.isReadonly.value,
        placeholder: ie ? void 0 : e.placeholder,
        "onClick:clear": Y,
        "onMousedown:control": te,
        onKeydown: O
      }), {
        ...t,
        default: () => S(ue, null, [k(Pn, H({
          ref: s,
          modelValue: B.value,
          "onUpdate:modelValue": (Z) => B.value = Z,
          activator: "parent",
          contentClass: "v-autocomplete__content",
          disabled: D.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: U,
          onAfterLeave: ce
        }, e.menuProps), {
          default: () => [J && k(pn, H({
            ref: L,
            filterable: !0,
            selected: T.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (Z) => Z.preventDefault(),
            onKeydown: $,
            onFocusin: ne,
            onFocusout: Q,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, N, e.listProps), {
            default: () => {
              var Z, me, he;
              return [(Z = t["prepend-item"]) == null ? void 0 : Z.call(t), !P.value.length && !e.hideNoData && (((me = t["no-data"]) == null ? void 0 : me.call(t)) ?? k(Dt, {
                key: "no-data",
                title: a(e.noDataText)
              }, null)), k(El, {
                ref: c,
                renderless: !0,
                items: P.value,
                itemKey: "value"
              }, {
                default: (pe) => {
                  var rt, ln, fa;
                  let {
                    item: Ce,
                    index: Te,
                    itemRef: ye
                  } = pe;
                  const ot = H(Ce.props, {
                    ref: ye,
                    key: Ce.value,
                    active: A.value && Te === 0 ? !0 : void 0,
                    onClick: () => ge(Ce, null)
                  });
                  return Ce.type === "divider" ? ((rt = t.divider) == null ? void 0 : rt.call(t, {
                    props: Ce.raw,
                    index: Te
                  })) ?? k(At, H(Ce.props, {
                    key: `divider-${Te}`
                  }), null) : Ce.type === "subheader" ? ((ln = t.subheader) == null ? void 0 : ln.call(t, {
                    props: Ce.raw,
                    index: Te
                  })) ?? k(ca, H(Ce.props, {
                    key: `subheader-${Te}`
                  }), null) : ((fa = t.item) == null ? void 0 : fa.call(t, {
                    item: Ce,
                    index: Te,
                    props: ot
                  })) ?? k(Dt, H(ot, {
                    role: "option"
                  }), {
                    prepend: (mn) => {
                      let {
                        isSelected: Xa
                      } = mn;
                      return S(ue, null, [e.multiple && !e.hideSelected ? k(jt, {
                        key: Ce.value,
                        modelValue: Xa,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, Ce.props.prependAvatar && k(Et, {
                        image: Ce.props.prependAvatar
                      }, null), Ce.props.prependIcon && k(Be, {
                        icon: Ce.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var mn;
                      return o.value ? Ce.title : cc("v-autocomplete", Ce.title, (mn = _(Ce)) == null ? void 0 : mn.title);
                    }
                  });
                }
              }), (he = t["append-item"]) == null ? void 0 : he.call(t)];
            }
          })]
        }), y.value.map((Z, me) => {
          function he(ye) {
            ye.stopPropagation(), ye.preventDefault(), ge(Z, !1);
          }
          const pe = {
            "onClick:close": he,
            onKeydown(ye) {
              ye.key !== "Enter" && ye.key !== " " || (ye.preventDefault(), ye.stopPropagation(), he(ye));
            },
            onMousedown(ye) {
              ye.preventDefault(), ye.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, Ce = I.value ? !!t.chip : !!t.selection, Te = Ce ? Vl(I.value ? t.chip({
            item: Z,
            index: me,
            props: pe
          }) : t.selection({
            item: Z,
            index: me
          })) : void 0;
          if (!(Ce && !Te))
            return S("div", {
              key: Z.value,
              class: z(["v-autocomplete__selection", me === u.value && ["v-autocomplete__selection--selected", g.value]]),
              style: le(me === u.value ? b.value : {})
            }, [I.value ? t.chip ? k(we, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: Z.title
                }
              }
            }, {
              default: () => [Te]
            }) : k(ua, H({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: Z.title,
              disabled: Z.props.disabled
            }, pe), null) : Te ?? S("span", {
              class: "v-autocomplete__selection-text"
            }, [Z.title, e.multiple && me < y.value.length - 1 && S("span", {
              class: "v-autocomplete__selection-comma"
            }, [mt(",")])])]);
        })]),
        "append-inner": function() {
          var pe, Ce;
          for (var Z = arguments.length, me = new Array(Z), he = 0; he < Z; he++)
            me[he] = arguments[he];
          return S(ue, null, [(pe = t["append-inner"]) == null ? void 0 : pe.call(t, ...me), e.menuIcon ? k(Be, {
            class: "v-autocomplete__menu-icon",
            color: (Ce = l.value) == null ? void 0 : Ce.fieldIconColor,
            icon: e.menuIcon,
            onMousedown: q,
            onClick: _s,
            "aria-label": a(M.value),
            title: a(M.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      });
    }), ut({
      isFocused: i,
      isPristine: o,
      menu: B,
      search: m,
      filteredItems: p,
      select: ge
    }, l);
  }
}), Oh = F({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: fe,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: !0
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...se(),
  ...tn({
    location: "top end"
  }),
  ...He(),
  ...ke(),
  ...Ae(),
  ...Ht({
    transition: "scale-rotate-transition"
  }),
  ...Je()
}, "VBadge"), Eh = W()({
  name: "VBadge",
  inheritAttrs: !1,
  props: Oh(),
  setup(e, n) {
    const {
      backgroundColorClasses: t,
      backgroundColorStyles: a
    } = Le(() => e.color), {
      roundedClasses: l
    } = Ye(e), {
      t: i
    } = Ne(), {
      textColorClasses: o,
      textColorStyles: r
    } = vt(() => e.textColor), {
      themeClasses: s
    } = ho(), {
      locationStyles: c
    } = Nn(e, !0, (d) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(d) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(d) ? Number(e.offsetX ?? 0) : 0)), {
      dimensionStyles: u
    } = et(e);
    return G(() => {
      const d = Number(e.content), v = !e.max || isNaN(d) ? e.content : d <= Number(e.max) ? d : `${e.max}+`, [f, g] = di(n.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return k(e.tag, H({
        class: ["v-badge", {
          "v-badge--bordered": e.bordered,
          "v-badge--dot": e.dot,
          "v-badge--floating": e.floating,
          "v-badge--inline": e.inline
        }, e.class]
      }, g, {
        style: e.style
      }), {
        default: () => {
          var b, m;
          return [S("div", {
            class: "v-badge__wrapper"
          }, [(m = (b = n.slots).default) == null ? void 0 : m.call(b), k(yt, {
            transition: e.transition
          }, {
            default: () => {
              var y, h;
              return [We(S("span", H({
                class: ["v-badge__badge", s.value, t.value, l.value, o.value],
                style: [a.value, r.value, u.value, e.inline ? {} : c.value],
                "aria-atomic": "true",
                "aria-label": i(e.label, d),
                "aria-live": "polite",
                role: "status"
              }, f), [e.dot ? void 0 : n.slots.badge ? (h = (y = n.slots).badge) == null ? void 0 : h.call(y) : e.icon ? k(Be, {
                icon: e.icon
              }, null) : v]), [[Lt, e.modelValue]])];
            }
          })])];
        }
      });
    }), {};
  }
}), Lh = F({
  color: String,
  density: String,
  ...se()
}, "VBannerActions"), vc = W()({
  name: "VBannerActions",
  props: Lh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Ge({
      VBtn: {
        color: e.color,
        density: e.density,
        slim: !0,
        variant: "text"
      }
    }), G(() => {
      var a;
      return S("div", {
        class: z(["v-banner-actions", e.class]),
        style: le(e.style)
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), fc = en("v-banner-text"), $h = F({
  avatar: String,
  bgColor: String,
  color: String,
  icon: fe,
  lines: String,
  stacked: Boolean,
  sticky: Boolean,
  text: String,
  ...Vt(),
  ...se(),
  ...it(),
  ...Je(),
  ...Bn({
    mobile: null
  }),
  ...at(),
  ...tn(),
  ...oa(),
  ...He(),
  ...ke(),
  ...Ae()
}, "VBanner"), Mh = W()({
  name: "VBanner",
  props: $h(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Le(() => e.bgColor), {
      borderClasses: i
    } = pt(e), {
      densityClasses: o
    } = wt(e), {
      displayClasses: r,
      mobile: s
    } = $t(e), {
      dimensionStyles: c
    } = et(e), {
      elevationClasses: u
    } = st(e), {
      locationStyles: d
    } = Nn(e), {
      positionClasses: v
    } = ra(e), {
      roundedClasses: f
    } = Ye(e), {
      themeClasses: g
    } = Ee(e), b = E(() => e.color), m = E(() => e.density);
    Ge({
      VBannerActions: {
        color: b,
        density: m
      }
    }), G(() => {
      const y = !!(e.text || t.text), h = !!(e.avatar || e.icon), C = !!(h || t.prepend);
      return k(e.tag, {
        class: z(["v-banner", {
          "v-banner--stacked": e.stacked || s.value,
          "v-banner--sticky": e.sticky,
          [`v-banner--${e.lines}-line`]: !!e.lines
        }, g.value, a.value, i.value, o.value, r.value, u.value, v.value, f.value, e.class]),
        style: le([l.value, c.value, d.value, e.style]),
        role: "banner"
      }, {
        default: () => {
          var p;
          return [C && S("div", {
            key: "prepend",
            class: "v-banner__prepend"
          }, [t.prepend ? k(we, {
            key: "prepend-defaults",
            disabled: !h,
            defaults: {
              VAvatar: {
                color: b.value,
                density: m.value,
                icon: e.icon,
                image: e.avatar
              }
            }
          }, t.prepend) : k(Et, {
            key: "prepend-avatar",
            color: b.value,
            density: m.value,
            icon: e.icon,
            image: e.avatar
          }, null)]), S("div", {
            class: "v-banner__content"
          }, [y && k(fc, {
            key: "text"
          }, {
            default: () => {
              var _;
              return [((_ = t.text) == null ? void 0 : _.call(t)) ?? e.text];
            }
          }), (p = t.default) == null ? void 0 : p.call(t)]), t.actions && k(vc, {
            key: "actions"
          }, t.actions)];
        }
      });
    });
  }
}), Fh = F({
  baseColor: String,
  bgColor: String,
  color: String,
  grow: Boolean,
  mode: {
    type: String,
    validator: (e) => !e || ["horizontal", "shift"].includes(e)
  },
  height: {
    type: [Number, String],
    default: 56
  },
  active: {
    type: Boolean,
    default: !0
  },
  ...Vt(),
  ...se(),
  ...it(),
  ...at(),
  ...He(),
  ...On({
    name: "bottom-navigation"
  }),
  ...ke({
    tag: "header"
  }),
  ...Mn({
    selectedClass: "v-btn--selected"
  }),
  ...Ae()
}, "VBottomNavigation"), Rh = W()({
  name: "VBottomNavigation",
  props: Fh(),
  emits: {
    "update:active": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ho(), {
      borderClasses: l
    } = pt(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Le(() => e.bgColor), {
      densityClasses: r
    } = wt(e), {
      elevationClasses: s
    } = st(e), {
      roundedClasses: c
    } = Ye(e), {
      ssrBootStyles: u
    } = Ln(), d = w(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), v = de(e, "active", e.active), {
      layoutItemStyles: f
    } = En({
      id: e.name,
      order: w(() => parseInt(e.order, 10)),
      position: E(() => "bottom"),
      layoutSize: E(() => v.value ? d.value : 0),
      elementSize: d,
      active: v,
      absolute: E(() => e.absolute)
    });
    return fn(e, wo), Ge({
      VBtn: {
        baseColor: E(() => e.baseColor),
        color: E(() => e.color),
        density: E(() => e.density),
        stacked: E(() => e.mode !== "horizontal"),
        variant: "text"
      }
    }, {
      scoped: !0
    }), G(() => k(e.tag, {
      class: z(["v-bottom-navigation", {
        "v-bottom-navigation--active": v.value,
        "v-bottom-navigation--grow": e.grow,
        "v-bottom-navigation--shift": e.mode === "shift"
      }, a.value, i.value, l.value, r.value, s.value, c.value, e.class]),
      style: le([o.value, f.value, {
        height: oe(d.value)
      }, u.value, e.style])
    }, {
      default: () => [t.default && S("div", {
        class: "v-bottom-navigation__content"
      }, [t.default()])]
    })), {};
  }
}), mc = F({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...Ga({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: _l
    },
    zIndex: 2400
  })
}, "VDialog"), gl = W()({
  name: "VDialog",
  props: mc(),
  emits: {
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = de(e, "modelValue"), {
      scopeId: i
    } = Hn(), o = j();
    function r(u) {
      var f, g;
      const d = u.relatedTarget, v = u.target;
      if (d !== v && ((f = o.value) != null && f.contentEl) && // We're the topmost dialog
      ((g = o.value) != null && g.globalTop) && // It isn't the document or the dialog body
      ![document, o.value.contentEl].includes(v) && // It isn't inside the dialog body
      !o.value.contentEl.contains(v)) {
        const b = ka(o.value.contentEl);
        if (!b.length) return;
        const m = b[0], y = b[b.length - 1];
        d === m ? y.focus() : m.focus();
      }
    }
    St(() => {
      document.removeEventListener("focusin", r);
    }), Oe && ae(() => l.value && e.retainFocus, (u) => {
      u ? document.addEventListener("focusin", r) : document.removeEventListener("focusin", r);
    }, {
      immediate: !0
    });
    function s() {
      var u;
      t("afterEnter"), (e.scrim || e.retainFocus) && ((u = o.value) != null && u.contentEl) && !o.value.contentEl.contains(document.activeElement) && o.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function c() {
      t("afterLeave");
    }
    return ae(l, async (u) => {
      var d;
      u || (await Pe(), (d = o.value.activatorEl) == null || d.focus({
        preventScroll: !0
      }));
    }), G(() => {
      const u = Nt.filterProps(e), d = H({
        "aria-haspopup": "dialog"
      }, e.activatorProps), v = H({
        tabindex: -1
      }, e.contentProps);
      return k(Nt, H({
        ref: o,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, u, {
        modelValue: l.value,
        "onUpdate:modelValue": (f) => l.value = f,
        "aria-modal": "true",
        activatorProps: d,
        contentProps: v,
        height: e.fullscreen ? void 0 : e.height,
        width: e.fullscreen ? void 0 : e.width,
        maxHeight: e.fullscreen ? void 0 : e.maxHeight,
        maxWidth: e.fullscreen ? void 0 : e.maxWidth,
        role: "dialog",
        onAfterEnter: s,
        onAfterLeave: c
      }, i), {
        activator: a.activator,
        default: function() {
          for (var f = arguments.length, g = new Array(f), b = 0; b < f; b++)
            g[b] = arguments[b];
          return k(we, {
            root: "VDialog"
          }, {
            default: () => {
              var m;
              return [(m = a.default) == null ? void 0 : m.call(a, ...g)];
            }
          });
        }
      });
    }), ut({}, o);
  }
}), Nh = F({
  inset: Boolean,
  ...mc({
    transition: "bottom-sheet-transition"
  })
}, "VBottomSheet"), Hh = W()({
  name: "VBottomSheet",
  props: Nh(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = de(e, "modelValue");
    return G(() => {
      const l = gl.filterProps(e);
      return k(gl, H(l, {
        contentClass: ["v-bottom-sheet__content", e.contentClass],
        modelValue: a.value,
        "onUpdate:modelValue": (i) => a.value = i,
        class: ["v-bottom-sheet", {
          "v-bottom-sheet--inset": e.inset
        }, e.class],
        style: e.style
      }), t);
    }), {};
  }
}), zh = F({
  divider: [Number, String],
  ...se()
}, "VBreadcrumbsDivider"), gc = W()({
  name: "VBreadcrumbsDivider",
  props: zh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => {
      var a;
      return S("li", {
        "aria-hidden": "true",
        class: z(["v-breadcrumbs-divider", e.class]),
        style: le(e.style)
      }, [((a = t == null ? void 0 : t.default) == null ? void 0 : a.call(t)) ?? e.divider]);
    }), {};
  }
}), Wh = F({
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String,
  ...se(),
  ...Wa(),
  ...ke({
    tag: "li"
  })
}, "VBreadcrumbsItem"), hc = W()({
  name: "VBreadcrumbsItem",
  props: Wh(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    const l = za(e, a), i = w(() => {
      var s;
      return e.active || ((s = l.isActive) == null ? void 0 : s.value);
    }), {
      textColorClasses: o,
      textColorStyles: r
    } = vt(() => i.value ? e.activeColor : e.color);
    return G(() => k(e.tag, {
      class: z(["v-breadcrumbs-item", {
        "v-breadcrumbs-item--active": i.value,
        "v-breadcrumbs-item--disabled": e.disabled,
        [`${e.activeClass}`]: i.value && e.activeClass
      }, o.value, e.class]),
      style: le([r.value, e.style]),
      "aria-current": i.value ? "page" : void 0
    }, {
      default: () => {
        var s, c;
        return [l.isLink.value ? S("a", H({
          class: "v-breadcrumbs-item--link",
          onClick: l.navigate
        }, l.linkProps), [((c = t.default) == null ? void 0 : c.call(t)) ?? e.title]) : ((s = t.default) == null ? void 0 : s.call(t)) ?? e.title];
      }
    })), {};
  }
}), Uh = F({
  activeClass: String,
  activeColor: String,
  bgColor: String,
  color: String,
  disabled: Boolean,
  divider: {
    type: String,
    default: "/"
  },
  icon: fe,
  items: {
    type: Array,
    default: () => []
  },
  ...se(),
  ...it(),
  ...He(),
  ...ke({
    tag: "ul"
  })
}, "VBreadcrumbs"), jh = W()({
  name: "VBreadcrumbs",
  props: Uh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Le(() => e.bgColor), {
      densityClasses: i
    } = wt(e), {
      roundedClasses: o
    } = Ye(e);
    Ge({
      VBreadcrumbsDivider: {
        divider: E(() => e.divider)
      },
      VBreadcrumbsItem: {
        activeClass: E(() => e.activeClass),
        activeColor: E(() => e.activeColor),
        color: E(() => e.color),
        disabled: E(() => e.disabled)
      }
    });
    const r = w(() => e.items.map((s) => typeof s == "string" ? {
      item: {
        title: s
      },
      raw: s
    } : {
      item: s,
      raw: s
    }));
    return G(() => {
      const s = !!(t.prepend || e.icon);
      return k(e.tag, {
        class: z(["v-breadcrumbs", a.value, i.value, o.value, e.class]),
        style: le([l.value, e.style])
      }, {
        default: () => {
          var c;
          return [s && S("li", {
            key: "prepend",
            class: "v-breadcrumbs__prepend"
          }, [t.prepend ? k(we, {
            key: "prepend-defaults",
            disabled: !e.icon,
            defaults: {
              VIcon: {
                icon: e.icon,
                start: !0
              }
            }
          }, t.prepend) : k(Be, {
            key: "prepend-icon",
            start: !0,
            icon: e.icon
          }, null)]), r.value.map((u, d, v) => {
            var b;
            let {
              item: f,
              raw: g
            } = u;
            return S(ue, null, [((b = t.item) == null ? void 0 : b.call(t, {
              item: f,
              index: d
            })) ?? k(hc, H({
              key: d,
              disabled: d >= v.length - 1
            }, typeof f == "string" ? {
              title: f
            } : f), {
              default: t.title ? () => {
                var m;
                return (m = t.title) == null ? void 0 : m.call(t, {
                  item: f,
                  index: d
                });
              } : void 0
            }), d < v.length - 1 && k(gc, null, {
              default: t.divider ? () => {
                var m;
                return (m = t.divider) == null ? void 0 : m.call(t, {
                  item: g,
                  index: d
                });
              } : void 0
            })]);
          }), (c = t.default) == null ? void 0 : c.call(t)];
        }
      });
    }), {};
  }
}), yc = W()({
  name: "VCardActions",
  props: se(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Ge({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), G(() => {
      var a;
      return S("div", {
        class: z(["v-card-actions", e.class]),
        style: le(e.style)
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), Gh = F({
  opacity: [Number, String],
  ...se(),
  ...ke()
}, "VCardSubtitle"), bc = W()({
  name: "VCardSubtitle",
  props: Gh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => k(e.tag, {
      class: z(["v-card-subtitle", e.class]),
      style: le([{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style])
    }, t)), {};
  }
}), kc = en("v-card-title"), Yh = F({
  appendAvatar: String,
  appendIcon: fe,
  prependAvatar: String,
  prependIcon: fe,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...se(),
  ...it()
}, "VCardItem"), Sc = W()({
  name: "VCardItem",
  props: Yh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => {
      var c;
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || t.prepend), i = !!(e.appendAvatar || e.appendIcon), o = !!(i || t.append), r = !!(e.title != null || t.title), s = !!(e.subtitle != null || t.subtitle);
      return S("div", {
        class: z(["v-card-item", e.class]),
        style: le(e.style)
      }, [l && S("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [t.prepend ? k(we, {
        key: "prepend-defaults",
        disabled: !a,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.prependAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.prependIcon
          }
        }
      }, t.prepend) : S(ue, null, [e.prependAvatar && k(Et, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && k(Be, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), S("div", {
        class: "v-card-item__content"
      }, [r && k(kc, {
        key: "title"
      }, {
        default: () => {
          var u;
          return [((u = t.title) == null ? void 0 : u.call(t)) ?? tt(e.title)];
        }
      }), s && k(bc, {
        key: "subtitle"
      }, {
        default: () => {
          var u;
          return [((u = t.subtitle) == null ? void 0 : u.call(t)) ?? tt(e.subtitle)];
        }
      }), (c = t.default) == null ? void 0 : c.call(t)]), o && S("div", {
        key: "append",
        class: "v-card-item__append"
      }, [t.append ? k(we, {
        key: "append-defaults",
        disabled: !i,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.appendAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.appendIcon
          }
        }
      }, t.append) : S(ue, null, [e.appendIcon && k(Be, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && k(Et, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), Kh = F({
  opacity: [Number, String],
  ...se(),
  ...ke()
}, "VCardText"), wc = W()({
  name: "VCardText",
  props: Kh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => k(e.tag, {
      class: z(["v-card-text", e.class]),
      style: le([{
        "--v-card-text-opacity": e.opacity
      }, e.style])
    }, t)), {};
  }
}), qh = F({
  appendAvatar: String,
  appendIcon: fe,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: fe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...Vt(),
  ...se(),
  ...it(),
  ...Je(),
  ...at(),
  ...Tl(),
  ...tn(),
  ...oa(),
  ...He(),
  ...Wa(),
  ...ke(),
  ...Ae(),
  ...Mt({
    variant: "elevated"
  })
}, "VCard"), Cc = W()({
  name: "VCard",
  directives: {
    vRipple: kt
  },
  props: qh(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Ee(e), {
      borderClasses: i
    } = pt(e), {
      colorClasses: o,
      colorStyles: r,
      variantClasses: s
    } = $n(e), {
      densityClasses: c
    } = wt(e), {
      dimensionStyles: u
    } = et(e), {
      elevationClasses: d
    } = st(e), {
      loaderClasses: v
    } = Na(e), {
      locationStyles: f
    } = Nn(e), {
      positionClasses: g
    } = ra(e), {
      roundedClasses: b
    } = Ye(e), m = za(e, t);
    return G(() => {
      const y = e.link !== !1 && m.isLink.value, h = !e.disabled && e.link !== !1 && (e.link || m.isClickable.value), C = y ? "a" : e.tag, p = !!(a.title || e.title != null), _ = !!(a.subtitle || e.subtitle != null), P = p || _, I = !!(a.append || e.appendAvatar || e.appendIcon), V = !!(a.prepend || e.prependAvatar || e.prependIcon), T = !!(a.image || e.image), A = P || V || I, D = !!(a.text || e.text != null);
      return We(k(C, H({
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": h
        }, l.value, i.value, o.value, c.value, d.value, v.value, g.value, b.value, s.value, e.class],
        style: [r.value, u.value, f.value, e.style],
        onClick: h && m.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, m.linkProps), {
        default: () => {
          var x;
          return [T && S("div", {
            key: "image",
            class: "v-card__image"
          }, [a.image ? k(we, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, a.image) : k(Qt, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), k(Ha, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), A && k(Sc, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: a.item,
            prepend: a.prepend,
            title: a.title,
            subtitle: a.subtitle,
            append: a.append
          }), D && k(wc, {
            key: "text"
          }, {
            default: () => {
              var B;
              return [((B = a.text) == null ? void 0 : B.call(a)) ?? e.text];
            }
          }), (x = a.default) == null ? void 0 : x.call(a), a.actions && k(yc, null, {
            default: a.actions
          }), vn(h, "v-card")];
        }
      }), [[kt, h && e.ripple]]);
    }), {};
  }
}), Xh = (e) => {
  const {
    touchstartX: n,
    touchendX: t,
    touchstartY: a,
    touchendY: l
  } = e, i = 0.5, o = 16;
  e.offsetX = t - n, e.offsetY = l - a, Math.abs(e.offsetY) < i * Math.abs(e.offsetX) && (e.left && t < n - o && e.left(e), e.right && t > n + o && e.right(e)), Math.abs(e.offsetX) < i * Math.abs(e.offsetY) && (e.up && l < a - o && e.up(e), e.down && l > a + o && e.down(e));
};
function Zh(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchstartX = t.clientX, n.touchstartY = t.clientY, (a = n.start) == null || a.call(n, {
    originalEvent: e,
    ...n
  });
}
function Qh(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchendX = t.clientX, n.touchendY = t.clientY, (a = n.end) == null || a.call(n, {
    originalEvent: e,
    ...n
  }), Xh(n);
}
function Jh(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchmoveX = t.clientX, n.touchmoveY = t.clientY, (a = n.move) == null || a.call(n, {
    originalEvent: e,
    ...n
  });
}
function ey() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end
  };
  return {
    touchstart: (t) => Zh(t, n),
    touchend: (t) => Qh(t, n),
    touchmove: (t) => Jh(t, n)
  };
}
function ty(e, n) {
  var r;
  const t = n.value, a = t != null && t.parent ? e.parentElement : e, l = (t == null ? void 0 : t.options) ?? {
    passive: !0
  }, i = (r = n.instance) == null ? void 0 : r.$.uid;
  if (!a || !i) return;
  const o = ey(n.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[i] = o, Ss(o).forEach((s) => {
    a.addEventListener(s, o[s], l);
  });
}
function ny(e, n) {
  var i, o;
  const t = (i = n.value) != null && i.parent ? e.parentElement : e, a = (o = n.instance) == null ? void 0 : o.$.uid;
  if (!(t != null && t._touchHandlers) || !a) return;
  const l = t._touchHandlers[a];
  Ss(l).forEach((r) => {
    t.removeEventListener(r, l[r]);
  }), delete t._touchHandlers[a];
}
const hl = {
  mounted: ty,
  unmounted: ny
}, xc = Symbol.for("vuetify:v-window"), Vc = Symbol.for("vuetify:v-window-group"), Ll = F({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || e === "hover"
  },
  verticalArrows: [Boolean, String],
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...se(),
  ...ke(),
  ...Ae()
}, "VWindow"), _n = W()({
  name: "VWindow",
  directives: {
    vTouch: hl
  },
  props: Ll(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ee(e), {
      isRtl: l
    } = nt(), {
      t: i
    } = Ne(), o = fn(e, Vc), r = j(), s = w(() => l.value ? !e.reverse : e.reverse), c = ee(!1), u = w(() => {
      const p = e.direction === "vertical" ? "y" : "x", P = (s.value ? !c.value : c.value) ? "-reverse" : "";
      return `v-window-${p}${P}-transition`;
    }), d = ee(0), v = j(void 0), f = w(() => o.items.value.findIndex((p) => o.selected.value.includes(p.id)));
    ae(f, (p, _) => {
      const P = o.items.value.length, I = P - 1;
      P <= 2 ? c.value = p < _ : p === I && _ === 0 ? c.value = !0 : p === 0 && _ === I ? c.value = !1 : c.value = p < _;
    }), Re(xc, {
      transition: u,
      isReversed: c,
      transitionCount: d,
      transitionHeight: v,
      rootRef: r
    });
    const g = E(() => e.continuous || f.value !== 0), b = E(() => e.continuous || f.value !== o.items.value.length - 1);
    function m() {
      g.value && o.prev();
    }
    function y() {
      b.value && o.next();
    }
    const h = w(() => {
      const p = [], _ = {
        icon: l.value ? e.nextIcon : e.prevIcon,
        class: `v-window__${s.value ? "right" : "left"}`,
        onClick: o.prev,
        "aria-label": i("$vuetify.carousel.prev")
      };
      p.push(g.value ? t.prev ? t.prev({
        props: _
      }) : k(xe, _, null) : S("div", null, null));
      const P = {
        icon: l.value ? e.prevIcon : e.nextIcon,
        class: `v-window__${s.value ? "left" : "right"}`,
        onClick: o.next,
        "aria-label": i("$vuetify.carousel.next")
      };
      return p.push(b.value ? t.next ? t.next({
        props: P
      }) : k(xe, P, null) : S("div", null, null)), p;
    }), C = w(() => e.touch === !1 ? e.touch : {
      ...{
        left: () => {
          s.value ? m() : y();
        },
        right: () => {
          s.value ? y() : m();
        },
        start: (_) => {
          let {
            originalEvent: P
          } = _;
          P.stopPropagation();
        }
      },
      ...e.touch === !0 ? {} : e.touch
    });
    return G(() => We(k(e.tag, {
      ref: r,
      class: z(["v-window", {
        "v-window--show-arrows-on-hover": e.showArrows === "hover",
        "v-window--vertical-arrows": !!e.verticalArrows
      }, a.value, e.class]),
      style: le(e.style)
    }, {
      default: () => {
        var p, _;
        return [S("div", {
          class: "v-window__container",
          style: {
            height: v.value
          }
        }, [(p = t.default) == null ? void 0 : p.call(t, {
          group: o
        }), e.showArrows !== !1 && S("div", {
          class: z(["v-window__controls", {
            "v-window__controls--left": e.verticalArrows === "left" || e.verticalArrows === !0
          }, {
            "v-window__controls--right": e.verticalArrows === "right"
          }])
        }, [h.value])]), (_ = t.additional) == null ? void 0 : _.call(t, {
          group: o
        })];
      }
    }), [[hl, C.value]])), {
      group: o
    };
  }
}), ay = F({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: fe,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (e) => Number(e) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String],
  ...Ll({
    continuous: !0,
    mandatory: "force",
    showArrows: !0
  })
}, "VCarousel"), ly = W()({
  name: "VCarousel",
  props: ay(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = de(e, "modelValue"), {
      t: l
    } = Ne(), i = j();
    let o = -1;
    ae(a, s), ae(() => e.interval, s), ae(() => e.cycle, (c) => {
      c ? s() : window.clearTimeout(o);
    }), ft(r);
    function r() {
      !e.cycle || !i.value || (o = window.setTimeout(i.value.group.next, Number(e.interval) > 0 ? Number(e.interval) : 6e3));
    }
    function s() {
      window.clearTimeout(o), window.requestAnimationFrame(r);
    }
    return G(() => {
      const c = _n.filterProps(e);
      return k(_n, H({
        ref: i
      }, c, {
        modelValue: a.value,
        "onUpdate:modelValue": (u) => a.value = u,
        class: ["v-carousel", {
          "v-carousel--hide-delimiter-background": e.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": e.verticalDelimiters
        }, e.class],
        style: [{
          height: oe(e.height)
        }, e.style]
      }), {
        default: t.default,
        additional: (u) => {
          let {
            group: d
          } = u;
          return S(ue, null, [!e.hideDelimiters && S("div", {
            class: "v-carousel__controls",
            style: {
              left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto",
              right: e.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [d.items.value.length > 0 && k(we, {
            defaults: {
              VBtn: {
                color: e.color,
                icon: e.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            scoped: !0
          }, {
            default: () => [d.items.value.map((v, f) => {
              const g = {
                id: `carousel-item-${v.id}`,
                "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", f + 1, d.items.value.length),
                class: ["v-carousel__controls__item", d.isSelected(v.id) && "v-btn--active"],
                onClick: () => d.select(v.id, !0)
              };
              return t.item ? t.item({
                props: g,
                item: v
              }) : k(xe, H(v, g), null);
            })]
          })]), e.progress && k(Al, {
            absolute: !0,
            class: "v-carousel__progress",
            color: typeof e.progress == "string" ? e.progress : void 0,
            modelValue: (d.getItemIndex(a.value) + 1) / d.items.value.length * 100
          }, null)]);
        },
        prev: t.prev,
        next: t.next
      });
    }), {};
  }
}), $l = F({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...se(),
  ...Fn(),
  ...Ao()
}, "VWindowItem"), In = W()({
  name: "VWindowItem",
  directives: {
    vTouch: hl
  },
  props: $l(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ie(xc), l = Rn(e, Vc), {
      isBooted: i
    } = Ln();
    if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const o = ee(!1), r = w(() => i.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
    function s() {
      !o.value || !a || (o.value = !1, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
    }
    function c() {
      var g;
      o.value || !a || (o.value = !0, a.transitionCount.value === 0 && (a.transitionHeight.value = oe((g = a.rootRef.value) == null ? void 0 : g.clientHeight)), a.transitionCount.value += 1);
    }
    function u() {
      s();
    }
    function d(g) {
      o.value && Pe(() => {
        !r.value || !o.value || !a || (a.transitionHeight.value = oe(g.clientHeight));
      });
    }
    const v = w(() => {
      const g = a.isReversed.value ? e.reverseTransition : e.transition;
      return r.value ? {
        name: typeof g != "string" ? a.transition.value : g,
        onBeforeEnter: c,
        onAfterEnter: s,
        onEnterCancelled: u,
        onBeforeLeave: c,
        onAfterLeave: s,
        onLeaveCancelled: u,
        onEnter: d
      } : !1;
    }), {
      hasContent: f
    } = To(e, l.isSelected);
    return G(() => k(yt, {
      transition: v.value,
      disabled: !i.value
    }, {
      default: () => {
        var g;
        return [We(S("div", {
          class: z(["v-window-item", l.selectedClass.value, e.class]),
          style: le(e.style)
        }, [f.value && ((g = t.default) == null ? void 0 : g.call(t))]), [[Lt, l.isSelected.value]])];
      }
    })), {
      groupItem: l
    };
  }
}), iy = F({
  ...su(),
  ...$l()
}, "VCarouselItem"), oy = W()({
  name: "VCarouselItem",
  inheritAttrs: !1,
  props: iy(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    G(() => {
      const l = Qt.filterProps(e), i = In.filterProps(e);
      return k(In, H({
        class: ["v-carousel-item", e.class]
      }, i), {
        default: () => [k(Qt, H(a, l), t)]
      });
    });
  }
}), ry = en("v-code", "code"), sy = F({
  color: {
    type: Object
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  height: {
    type: [Number, String],
    default: 150
  },
  width: {
    type: [Number, String],
    default: 300
  },
  ...se()
}, "VColorPickerCanvas"), uy = Bt({
  name: "VColorPickerCanvas",
  props: sy(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = ee(!1), l = j(), i = ee(parseFloat(e.width)), o = ee(parseFloat(e.height)), r = j({
      x: 0,
      y: 0
    }), s = w({
      get: () => r.value,
      set(m) {
        var C, p;
        if (!l.value) return;
        const {
          x: y,
          y: h
        } = m;
        r.value = m, t("update:color", {
          h: ((C = e.color) == null ? void 0 : C.h) ?? 0,
          s: Me(y, 0, i.value) / i.value,
          v: 1 - Me(h, 0, o.value) / o.value,
          a: ((p = e.color) == null ? void 0 : p.a) ?? 1
        });
      }
    }), c = w(() => {
      const {
        x: m,
        y
      } = s.value, h = parseInt(e.dotSize, 10) / 2;
      return {
        width: oe(e.dotSize),
        height: oe(e.dotSize),
        transform: `translate(${oe(m - h)}, ${oe(y - h)})`
      };
    }), {
      resizeRef: u
    } = Rt((m) => {
      var C;
      if (!((C = u.el) != null && C.offsetParent)) return;
      const {
        width: y,
        height: h
      } = m[0].contentRect;
      i.value = y, o.value = h;
    });
    function d(m, y, h) {
      const {
        left: C,
        top: p,
        width: _,
        height: P
      } = h;
      s.value = {
        x: Me(m - C, 0, _),
        y: Me(y - p, 0, P)
      };
    }
    function v(m) {
      m.type === "mousedown" && m.preventDefault(), !e.disabled && (f(m), window.addEventListener("mousemove", f), window.addEventListener("mouseup", g), window.addEventListener("touchmove", f), window.addEventListener("touchend", g));
    }
    function f(m) {
      if (e.disabled || !l.value) return;
      a.value = !0;
      const y = Sv(m);
      d(y.clientX, y.clientY, l.value.getBoundingClientRect());
    }
    function g() {
      window.removeEventListener("mousemove", f), window.removeEventListener("mouseup", g), window.removeEventListener("touchmove", f), window.removeEventListener("touchend", g);
    }
    function b() {
      var p;
      if (!l.value) return;
      const m = l.value, y = m.getContext("2d");
      if (!y) return;
      const h = y.createLinearGradient(0, 0, m.width, 0);
      h.addColorStop(0, "hsla(0, 0%, 100%, 1)"), h.addColorStop(1, `hsla(${((p = e.color) == null ? void 0 : p.h) ?? 0}, 100%, 50%, 1)`), y.fillStyle = h, y.fillRect(0, 0, m.width, m.height);
      const C = y.createLinearGradient(0, 0, 0, m.height);
      C.addColorStop(0, "hsla(0, 0%, 0%, 0)"), C.addColorStop(1, "hsla(0, 0%, 0%, 1)"), y.fillStyle = C, y.fillRect(0, 0, m.width, m.height);
    }
    return ae(() => {
      var m;
      return (m = e.color) == null ? void 0 : m.h;
    }, b, {
      immediate: !0
    }), ae(() => [i.value, o.value], (m, y) => {
      b(), r.value = {
        x: s.value.x * m[0] / y[0],
        y: s.value.y * m[1] / y[1]
      };
    }, {
      flush: "post"
    }), ae(() => e.color, () => {
      if (a.value) {
        a.value = !1;
        return;
      }
      r.value = e.color ? {
        x: e.color.s * i.value,
        y: (1 - e.color.v) * o.value
      } : {
        x: 0,
        y: 0
      };
    }, {
      deep: !0,
      immediate: !0
    }), ft(() => b()), G(() => S("div", {
      ref: u,
      class: z(["v-color-picker-canvas", e.class]),
      style: le(e.style),
      onMousedown: v,
      onTouchstartPassive: v
    }, [S("canvas", {
      ref: l,
      width: i.value,
      height: o.value
    }, null), e.color && S("div", {
      class: z(["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": e.disabled
      }]),
      style: le(c.value)
    }, null)])), {};
  }
});
function cy(e, n) {
  if (n) {
    const {
      a: t,
      ...a
    } = e;
    return a;
  }
  return e;
}
function dy(e, n) {
  if (n == null || typeof n == "string") {
    const t = e.a !== 1;
    if (n != null && n.startsWith("rgb(")) {
      const {
        r: l,
        g: i,
        b: o,
        a: r
      } = Ut(e);
      return `rgb(${l} ${i} ${o}` + (t ? ` / ${r})` : ")");
    } else if (n != null && n.startsWith("hsl(")) {
      const {
        h: l,
        s: i,
        l: o,
        a: r
      } = yi(e);
      return `hsl(${l} ${Math.round(i * 100)} ${Math.round(o * 100)}` + (t ? ` / ${r})` : ")");
    }
    const a = Fs(e);
    return e.a === 1 ? a.slice(0, 7) : a;
  }
  if (typeof n == "object") {
    let t;
    return yn(n, ["r", "g", "b"]) ? t = Ut(e) : yn(n, ["h", "s", "l"]) ? t = yi(e) : yn(n, ["h", "s", "v"]) && (t = e), cy(t, !yn(n, ["a"]) && e.a === 1);
  }
  return e;
}
const Kn = {
  h: 0,
  s: 0,
  v: 0,
  a: 1
}, Li = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "R",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.r),
    getColor: (e, n) => ({
      ...e,
      r: Number(n)
    })
  }, {
    label: "G",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.g),
    getColor: (e, n) => ({
      ...e,
      g: Number(n)
    })
  }, {
    label: "B",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.b),
    getColor: (e, n) => ({
      ...e,
      b: Number(n)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: n
      } = e;
      return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => ({
      ...e,
      a: Number(n)
    })
  }],
  to: Ut,
  from: $a
};
var cs;
const vy = {
  ...Li,
  inputs: (cs = Li.inputs) == null ? void 0 : cs.slice(0, 3)
}, $i = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "H",
    max: 360,
    step: 1,
    getValue: (e) => Math.round(e.h),
    getColor: (e, n) => ({
      ...e,
      h: Number(n)
    })
  }, {
    label: "S",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.s * 100) / 100,
    getColor: (e, n) => ({
      ...e,
      s: Number(n)
    })
  }, {
    label: "L",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.l * 100) / 100,
    getColor: (e, n) => ({
      ...e,
      l: Number(n)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: n
      } = e;
      return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => ({
      ...e,
      a: Number(n)
    })
  }],
  to: yi,
  from: ro
}, fy = {
  ...$i,
  inputs: $i.inputs.slice(0, 3)
}, pc = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, n) => n
  }],
  to: Fs,
  from: Yv
}, my = {
  ...pc,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, n) => n
  }]
}, Cn = {
  rgb: vy,
  rgba: Li,
  hsl: fy,
  hsla: $i,
  hex: my,
  hexa: pc
}, gy = (e) => {
  let {
    label: n,
    ...t
  } = e;
  return S("div", {
    class: "v-color-picker-edit__input"
  }, [S("input", Ea(La(t)), null), S("span", null, [n])]);
}, hy = F({
  color: Object,
  disabled: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(Cn).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(Cn),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(Cn).includes(n))
  },
  ...se()
}, "VColorPickerEdit"), yy = Bt({
  name: "VColorPickerEdit",
  props: hy(),
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = w(() => e.modes.map((i) => ({
      ...Cn[i],
      name: i
    }))), l = w(() => {
      var r;
      const i = a.value.find((s) => s.name === e.mode);
      if (!i) return [];
      const o = e.color ? i.to(e.color) : null;
      return (r = i.inputs) == null ? void 0 : r.map((s) => {
        let {
          getValue: c,
          getColor: u,
          ...d
        } = s;
        return {
          ...i.inputProps,
          ...d,
          disabled: e.disabled,
          value: o && c(o),
          onChange: (v) => {
            const f = v.target;
            f && t("update:color", i.from(u(o ?? i.to(Kn), f.value)));
          }
        };
      });
    });
    return G(() => {
      var i;
      return S("div", {
        class: z(["v-color-picker-edit", e.class]),
        style: le(e.style)
      }, [(i = l.value) == null ? void 0 : i.map((o) => k(gy, o, null)), a.value.length > 1 && k(xe, {
        icon: "$unfold",
        size: "x-small",
        variant: "plain",
        onClick: () => {
          const o = a.value.findIndex((r) => r.name === e.mode);
          t("update:mode", a.value[(o + 1) % a.value.length].name);
        }
      }, null)]);
    }), {};
  }
}), Eo = Symbol.for("vuetify:v-slider");
function Mi(e, n, t) {
  const a = t === "vertical", l = n.getBoundingClientRect(), i = "touches" in e ? e.touches[0] : e;
  return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function by(e, n) {
  return "touches" in e && e.touches.length ? e.touches[0][n] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][n] : e[n];
}
const Pc = F({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  readonly: {
    type: Boolean,
    default: null
  },
  max: {
    type: [Number, String],
    default: 100
  },
  min: {
    type: [Number, String],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 0
  },
  thumbColor: String,
  thumbLabel: {
    type: [Boolean, String],
    default: void 0,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  thumbSize: {
    type: [Number, String],
    default: 20
  },
  showTicks: {
    type: [Boolean, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  ticks: {
    type: [Array, Object]
  },
  tickSize: {
    type: [Number, String],
    default: 2
  },
  color: String,
  trackColor: String,
  trackFillColor: String,
  trackSize: {
    type: [Number, String],
    default: 4
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  reverse: Boolean,
  ...He(),
  ...at({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), _c = (e) => {
  const n = w(() => parseFloat(e.min)), t = w(() => parseFloat(e.max)), a = w(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = w(() => Math.max(cr(a.value), cr(n.value)));
  function i(o) {
    if (o = parseFloat(o), a.value <= 0) return o;
    const r = Me(o, n.value, t.value), s = n.value % a.value;
    let c = Math.round((r - s) / a.value) * a.value + s;
    return r > c && c + a.value > t.value && (c = t.value), parseFloat(Math.min(c, t.value).toFixed(l.value));
  }
  return {
    min: n,
    max: t,
    step: a,
    decimals: l,
    roundValue: i
  };
}, Ic = (e) => {
  let {
    props: n,
    steps: t,
    onSliderStart: a,
    onSliderMove: l,
    onSliderEnd: i,
    getActiveThumb: o
  } = e;
  const {
    isRtl: r
  } = nt(), s = E(() => n.reverse), c = w(() => n.direction === "vertical"), u = w(() => c.value !== s.value), {
    min: d,
    max: v,
    step: f,
    decimals: g,
    roundValue: b
  } = t, m = w(() => parseInt(n.thumbSize, 10)), y = w(() => parseInt(n.tickSize, 10)), h = w(() => parseInt(n.trackSize, 10)), C = w(() => (v.value - d.value) / f.value), p = E(() => n.disabled), _ = w(() => n.error || n.disabled ? void 0 : n.thumbColor ?? n.color), P = w(() => n.error || n.disabled ? void 0 : n.trackColor ?? n.color), I = w(() => n.error || n.disabled ? void 0 : n.trackFillColor ?? n.color), V = ee(!1), T = ee(0), A = j(), D = j();
  function x(Q) {
    var pe;
    const X = (pe = A.value) == null ? void 0 : pe.$el;
    if (!X) return;
    const ve = n.direction === "vertical", ge = ve ? "top" : "left", J = ve ? "height" : "width", ie = ve ? "clientY" : "clientX", {
      [ge]: K,
      [J]: Z
    } = X.getBoundingClientRect(), me = by(Q, ie);
    let he = Me((me - K - T.value) / Z) || 0;
    return (ve ? u.value : u.value !== r.value) && (he = 1 - he), b(d.value + he * (v.value - d.value));
  }
  const B = (Q) => {
    const X = x(Q);
    X != null && i({
      value: X
    }), V.value = !1, T.value = 0;
  }, M = (Q) => {
    const X = x(Q);
    D.value = o(Q), D.value && (V.value = !0, D.value.contains(Q.target) ? T.value = Mi(Q, D.value, n.direction) : (T.value = 0, X != null && l({
      value: X
    })), X != null && a({
      value: X
    }), Pe(() => {
      var ve;
      return (ve = D.value) == null ? void 0 : ve.focus();
    }));
  }, L = {
    passive: !0,
    capture: !0
  };
  function N(Q) {
    const X = x(Q);
    X != null && l({
      value: X
    });
  }
  function Y(Q) {
    Q.stopPropagation(), Q.preventDefault(), B(Q), window.removeEventListener("mousemove", N, L), window.removeEventListener("mouseup", Y);
  }
  function te(Q) {
    var X;
    B(Q), window.removeEventListener("touchmove", N, L), (X = Q.target) == null || X.removeEventListener("touchend", te);
  }
  function q(Q) {
    var X;
    M(Q), window.addEventListener("touchmove", N, L), (X = Q.target) == null || X.addEventListener("touchend", te, {
      passive: !1
    });
  }
  function $(Q) {
    Q.button === 0 && (Q.preventDefault(), M(Q), window.addEventListener("mousemove", N, L), window.addEventListener("mouseup", Y, {
      passive: !1
    }));
  }
  const O = (Q) => {
    const X = (Q - d.value) / (v.value - d.value) * 100;
    return Me(isNaN(X) ? 0 : X, 0, 100);
  }, R = E(() => n.showTicks), U = w(() => R.value ? n.ticks ? Array.isArray(n.ticks) ? n.ticks.map((Q) => ({
    value: Q,
    position: O(Q),
    label: Q.toString()
  })) : Object.keys(n.ticks).map((Q) => ({
    value: parseFloat(Q),
    position: O(parseFloat(Q)),
    label: n.ticks[Q]
  })) : C.value !== 1 / 0 ? _t(C.value + 1).map((Q) => {
    const X = d.value + Q * f.value;
    return {
      value: X,
      position: O(X)
    };
  }) : [] : []), ce = w(() => U.value.some((Q) => {
    let {
      label: X
    } = Q;
    return !!X;
  })), ne = {
    activeThumbRef: D,
    color: E(() => n.color),
    decimals: g,
    disabled: p,
    direction: E(() => n.direction),
    elevation: E(() => n.elevation),
    hasLabels: ce,
    isReversed: s,
    indexFromEnd: u,
    min: d,
    max: v,
    mousePressed: V,
    numTicks: C,
    onSliderMousedown: $,
    onSliderTouchstart: q,
    parsedTicks: U,
    parseMouseMove: x,
    position: O,
    readonly: E(() => n.readonly),
    rounded: E(() => n.rounded),
    roundValue: b,
    showTicks: R,
    startOffset: T,
    step: f,
    thumbSize: m,
    thumbColor: _,
    thumbLabel: E(() => n.thumbLabel),
    ticks: E(() => n.ticks),
    tickSize: y,
    trackColor: P,
    trackContainerRef: A,
    trackFillColor: I,
    trackSize: h,
    vertical: c
  };
  return Re(Eo, ne), ne;
}, ky = F({
  focused: Boolean,
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  modelValue: {
    type: Number,
    required: !0
  },
  position: {
    type: Number,
    required: !0
  },
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  name: String,
  ...se()
}, "VSliderThumb"), Fi = W()({
  name: "VSliderThumb",
  directives: {
    vRipple: kt
  },
  props: ky(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = Ie(Eo), {
      isRtl: i,
      rtlClasses: o
    } = nt();
    if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      min: r,
      max: s,
      thumbColor: c,
      step: u,
      disabled: d,
      thumbSize: v,
      thumbLabel: f,
      direction: g,
      isReversed: b,
      vertical: m,
      readonly: y,
      elevation: h,
      mousePressed: C,
      decimals: p,
      indexFromEnd: _
    } = l, P = w(() => d.value ? void 0 : h.value), {
      elevationClasses: I
    } = st(P), {
      textColorClasses: V,
      textColorStyles: T
    } = vt(c), {
      pageup: A,
      pagedown: D,
      end: x,
      home: B,
      left: M,
      right: L,
      down: N,
      up: Y
    } = ci, te = [A, D, x, B, M, L, N, Y], q = w(() => u.value ? [1, 2, 3] : [1, 5, 10]);
    function $(R, U) {
      if (!te.includes(R.key)) return;
      R.preventDefault();
      const ce = u.value || 0.1, ne = (s.value - r.value) / ce;
      if ([M, L, N, Y].includes(R.key)) {
        const X = (m.value ? [i.value ? M : L, b.value ? N : Y] : _.value !== i.value ? [M, Y] : [L, Y]).includes(R.key) ? 1 : -1, ve = R.shiftKey ? 2 : R.ctrlKey ? 1 : 0;
        X === -1 && U === s.value && !ve && !Number.isInteger(ne) ? U = U - ne % 1 * ce : U = U + X * ce * q.value[ve];
      } else if (R.key === B)
        U = r.value;
      else if (R.key === x)
        U = s.value;
      else {
        const Q = R.key === D ? 1 : -1;
        U = U - Q * ce * (ne > 100 ? ne / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, U));
    }
    function O(R) {
      const U = $(R, e.modelValue);
      U != null && a("update:modelValue", U);
    }
    return G(() => {
      const R = oe(_.value ? 100 - e.position : e.position, "%");
      return S("div", {
        class: z(["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && C.value
        }, e.class, o.value]),
        style: le([{
          "--v-slider-thumb-position": R,
          "--v-slider-thumb-size": oe(v.value)
        }, e.style]),
        role: "slider",
        tabindex: d.value ? -1 : 0,
        "aria-label": e.name,
        "aria-valuemin": r.value,
        "aria-valuemax": s.value,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!y.value,
        "aria-orientation": g.value,
        onKeydown: y.value ? void 0 : O
      }, [S("div", {
        class: z(["v-slider-thumb__surface", V.value, I.value]),
        style: {
          ...T.value
        }
      }, null), We(S("div", {
        class: z(["v-slider-thumb__ripple", V.value]),
        style: le(T.value)
      }, null), [[kt, e.ripple, null, {
        circle: !0,
        center: !0
      }]]), k(bo, {
        origin: "bottom center"
      }, {
        default: () => {
          var U;
          return [We(S("div", {
            class: "v-slider-thumb__label-container"
          }, [S("div", {
            class: z(["v-slider-thumb__label", V.value])
          }, [S("div", null, [((U = t["thumb-label"]) == null ? void 0 : U.call(t, {
            modelValue: e.modelValue
          })) ?? e.modelValue.toFixed(u.value ? p.value : 1)])])]), [[Lt, f.value && e.focused || f.value === "always"]])];
        }
      })]);
    }), {};
  }
}), Sy = F({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...se()
}, "VSliderTrack"), Ac = W()({
  name: "VSliderTrack",
  props: Sy(),
  emits: {},
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ie(Eo);
    if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: l,
      parsedTicks: i,
      rounded: o,
      showTicks: r,
      tickSize: s,
      trackColor: c,
      trackFillColor: u,
      trackSize: d,
      vertical: v,
      min: f,
      max: g,
      indexFromEnd: b
    } = a, {
      roundedClasses: m
    } = Ye(o), {
      backgroundColorClasses: y,
      backgroundColorStyles: h
    } = Le(u), {
      backgroundColorClasses: C,
      backgroundColorStyles: p
    } = Le(c), _ = w(() => `inset-${v.value ? "block" : "inline"}-${b.value ? "end" : "start"}`), P = w(() => v.value ? "height" : "width"), I = w(() => ({
      [_.value]: "0%",
      [P.value]: "100%"
    })), V = w(() => e.stop - e.start), T = w(() => ({
      [_.value]: oe(e.start, "%"),
      [P.value]: oe(V.value, "%")
    })), A = w(() => r.value ? (v.value ? i.value.slice().reverse() : i.value).map((x, B) => {
      var L;
      const M = x.value !== f.value && x.value !== g.value ? oe(x.position, "%") : void 0;
      return S("div", {
        key: x.value,
        class: z(["v-slider-track__tick", {
          "v-slider-track__tick--filled": x.position >= e.start && x.position <= e.stop,
          "v-slider-track__tick--first": x.value === f.value,
          "v-slider-track__tick--last": x.value === g.value
        }]),
        style: {
          [_.value]: M
        }
      }, [(x.label || t["tick-label"]) && S("div", {
        class: "v-slider-track__tick-label"
      }, [((L = t["tick-label"]) == null ? void 0 : L.call(t, {
        tick: x,
        index: B
      })) ?? x.label])]);
    }) : []);
    return G(() => S("div", {
      class: z(["v-slider-track", m.value, e.class]),
      style: le([{
        "--v-slider-track-size": oe(d.value),
        "--v-slider-tick-size": oe(s.value)
      }, e.style])
    }, [S("div", {
      class: z(["v-slider-track__background", C.value, {
        "v-slider-track__background--opacity": !!l.value || !u.value
      }]),
      style: {
        ...I.value,
        ...p.value
      }
    }, null), S("div", {
      class: z(["v-slider-track__fill", y.value]),
      style: {
        ...T.value,
        ...h.value
      }
    }, null), r.value && S("div", {
      class: z(["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": r.value === "always"
      }])
    }, [A.value])])), {};
  }
}), wy = F({
  ...Ua(),
  ...Pc(),
  ...an(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), yl = W()({
  name: "VSlider",
  props: wy(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    start: (e) => !0,
    end: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = j(), i = j(), {
      rtlClasses: o
    } = nt(), r = _c(e), s = de(e, "modelValue", void 0, (I) => r.roundValue(I ?? r.min.value)), {
      min: c,
      max: u,
      mousePressed: d,
      roundValue: v,
      onSliderMousedown: f,
      onSliderTouchstart: g,
      trackContainerRef: b,
      position: m,
      hasLabels: y,
      readonly: h
    } = Ic({
      props: e,
      steps: r,
      onSliderStart: () => {
        a("start", s.value);
      },
      onSliderEnd: (I) => {
        let {
          value: V
        } = I;
        const T = v(V);
        s.value = T, a("end", T);
      },
      onSliderMove: (I) => {
        let {
          value: V
        } = I;
        return s.value = v(V);
      },
      getActiveThumb: () => {
        var I;
        return (I = l.value) == null ? void 0 : I.$el;
      }
    }), {
      isFocused: C,
      focus: p,
      blur: _
    } = nn(e), P = w(() => m(s.value));
    return G(() => {
      const I = gt.filterProps(e), V = !!(e.label || t.label || t.prepend);
      return k(gt, H({
        ref: i,
        class: ["v-slider", {
          "v-slider--has-labels": !!t["tick-label"] || y.value,
          "v-slider--focused": C.value,
          "v-slider--pressed": d.value,
          "v-slider--disabled": e.disabled
        }, o.value, e.class],
        style: e.style
      }, I, {
        focused: C.value
      }), {
        ...t,
        prepend: V ? (T) => {
          var A, D;
          return S(ue, null, [((A = t.label) == null ? void 0 : A.call(t, T)) ?? (e.label ? k(sa, {
            id: T.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (D = t.prepend) == null ? void 0 : D.call(t, T)]);
        } : void 0,
        default: (T) => {
          let {
            id: A,
            messagesId: D
          } = T;
          return S("div", {
            class: "v-slider__container",
            onMousedown: h.value ? void 0 : f,
            onTouchstartPassive: h.value ? void 0 : g
          }, [S("input", {
            id: A.value,
            name: e.name || A.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: s.value
          }, null), k(Ac, {
            ref: b,
            start: 0,
            stop: P.value
          }, {
            "tick-label": t["tick-label"]
          }), k(Fi, {
            ref: l,
            "aria-describedby": D.value,
            focused: C.value,
            min: c.value,
            max: u.value,
            modelValue: s.value,
            "onUpdate:modelValue": (x) => s.value = x,
            position: P.value,
            elevation: e.elevation,
            onFocus: p,
            onBlur: _,
            ripple: e.ripple,
            name: e.name
          }, {
            "thumb-label": t["thumb-label"]
          })]);
        }
      });
    }), ut({
      focus: () => {
        var I;
        return (I = l.value) == null ? void 0 : I.$el.focus();
      }
    }, i);
  }
}), Cy = F({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...se()
}, "VColorPickerPreview"), xy = Bt({
  name: "VColorPickerPreview",
  props: Cy(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = new AbortController();
    ms(() => a.abort());
    async function l() {
      if (!or || e.disabled) return;
      const i = new window.EyeDropper();
      try {
        const o = await i.open({
          signal: a.signal
        }), r = $a(It(o.sRGBHex));
        t("update:color", {
          ...e.color ?? Kn,
          ...r
        });
      } catch {
      }
    }
    return G(() => {
      var i, o;
      return S("div", {
        class: z(["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": e.hideAlpha
        }, e.class]),
        style: le(e.style)
      }, [or && S("div", {
        class: "v-color-picker-preview__eye-dropper",
        key: "eyeDropper"
      }, [k(xe, {
        density: "comfortable",
        disabled: e.disabled,
        icon: "$eyeDropper",
        variant: "plain",
        onClick: l
      }, null)]), S("div", {
        class: "v-color-picker-preview__dot"
      }, [S("div", {
        style: {
          background: Ls(e.color ?? Kn)
        }
      }, null)]), S("div", {
        class: "v-color-picker-preview__sliders"
      }, [k(yl, {
        class: "v-color-picker-preview__track v-color-picker-preview__hue",
        modelValue: (i = e.color) == null ? void 0 : i.h,
        "onUpdate:modelValue": (r) => t("update:color", {
          ...e.color ?? Kn,
          h: r
        }),
        step: 0,
        min: 0,
        max: 360,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null), !e.hideAlpha && k(yl, {
        class: "v-color-picker-preview__track v-color-picker-preview__alpha",
        modelValue: ((o = e.color) == null ? void 0 : o.a) ?? 1,
        "onUpdate:modelValue": (r) => t("update:color", {
          ...e.color ?? Kn,
          a: r
        }),
        step: 1 / 256,
        min: 0,
        max: 1,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null)])]);
    }), {};
  }
}), Vy = {
  base: "#f44336",
  lighten5: "#ffebee",
  lighten4: "#ffcdd2",
  lighten3: "#ef9a9a",
  lighten2: "#e57373",
  lighten1: "#ef5350",
  darken1: "#e53935",
  darken2: "#d32f2f",
  darken3: "#c62828",
  darken4: "#b71c1c",
  accent1: "#ff8a80",
  accent2: "#ff5252",
  accent3: "#ff1744",
  accent4: "#d50000"
}, py = {
  base: "#e91e63",
  lighten5: "#fce4ec",
  lighten4: "#f8bbd0",
  lighten3: "#f48fb1",
  lighten2: "#f06292",
  lighten1: "#ec407a",
  darken1: "#d81b60",
  darken2: "#c2185b",
  darken3: "#ad1457",
  darken4: "#880e4f",
  accent1: "#ff80ab",
  accent2: "#ff4081",
  accent3: "#f50057",
  accent4: "#c51162"
}, Py = {
  base: "#9c27b0",
  lighten5: "#f3e5f5",
  lighten4: "#e1bee7",
  lighten3: "#ce93d8",
  lighten2: "#ba68c8",
  lighten1: "#ab47bc",
  darken1: "#8e24aa",
  darken2: "#7b1fa2",
  darken3: "#6a1b9a",
  darken4: "#4a148c",
  accent1: "#ea80fc",
  accent2: "#e040fb",
  accent3: "#d500f9",
  accent4: "#aa00ff"
}, _y = {
  base: "#673ab7",
  lighten5: "#ede7f6",
  lighten4: "#d1c4e9",
  lighten3: "#b39ddb",
  lighten2: "#9575cd",
  lighten1: "#7e57c2",
  darken1: "#5e35b1",
  darken2: "#512da8",
  darken3: "#4527a0",
  darken4: "#311b92",
  accent1: "#b388ff",
  accent2: "#7c4dff",
  accent3: "#651fff",
  accent4: "#6200ea"
}, Iy = {
  base: "#3f51b5",
  lighten5: "#e8eaf6",
  lighten4: "#c5cae9",
  lighten3: "#9fa8da",
  lighten2: "#7986cb",
  lighten1: "#5c6bc0",
  darken1: "#3949ab",
  darken2: "#303f9f",
  darken3: "#283593",
  darken4: "#1a237e",
  accent1: "#8c9eff",
  accent2: "#536dfe",
  accent3: "#3d5afe",
  accent4: "#304ffe"
}, Ay = {
  base: "#2196f3",
  lighten5: "#e3f2fd",
  lighten4: "#bbdefb",
  lighten3: "#90caf9",
  lighten2: "#64b5f6",
  lighten1: "#42a5f5",
  darken1: "#1e88e5",
  darken2: "#1976d2",
  darken3: "#1565c0",
  darken4: "#0d47a1",
  accent1: "#82b1ff",
  accent2: "#448aff",
  accent3: "#2979ff",
  accent4: "#2962ff"
}, Ty = {
  base: "#03a9f4",
  lighten5: "#e1f5fe",
  lighten4: "#b3e5fc",
  lighten3: "#81d4fa",
  lighten2: "#4fc3f7",
  lighten1: "#29b6f6",
  darken1: "#039be5",
  darken2: "#0288d1",
  darken3: "#0277bd",
  darken4: "#01579b",
  accent1: "#80d8ff",
  accent2: "#40c4ff",
  accent3: "#00b0ff",
  accent4: "#0091ea"
}, Dy = {
  base: "#00bcd4",
  lighten5: "#e0f7fa",
  lighten4: "#b2ebf2",
  lighten3: "#80deea",
  lighten2: "#4dd0e1",
  lighten1: "#26c6da",
  darken1: "#00acc1",
  darken2: "#0097a7",
  darken3: "#00838f",
  darken4: "#006064",
  accent1: "#84ffff",
  accent2: "#18ffff",
  accent3: "#00e5ff",
  accent4: "#00b8d4"
}, By = {
  base: "#009688",
  lighten5: "#e0f2f1",
  lighten4: "#b2dfdb",
  lighten3: "#80cbc4",
  lighten2: "#4db6ac",
  lighten1: "#26a69a",
  darken1: "#00897b",
  darken2: "#00796b",
  darken3: "#00695c",
  darken4: "#004d40",
  accent1: "#a7ffeb",
  accent2: "#64ffda",
  accent3: "#1de9b6",
  accent4: "#00bfa5"
}, Oy = {
  base: "#4caf50",
  lighten5: "#e8f5e9",
  lighten4: "#c8e6c9",
  lighten3: "#a5d6a7",
  lighten2: "#81c784",
  lighten1: "#66bb6a",
  darken1: "#43a047",
  darken2: "#388e3c",
  darken3: "#2e7d32",
  darken4: "#1b5e20",
  accent1: "#b9f6ca",
  accent2: "#69f0ae",
  accent3: "#00e676",
  accent4: "#00c853"
}, Ey = {
  base: "#8bc34a",
  lighten5: "#f1f8e9",
  lighten4: "#dcedc8",
  lighten3: "#c5e1a5",
  lighten2: "#aed581",
  lighten1: "#9ccc65",
  darken1: "#7cb342",
  darken2: "#689f38",
  darken3: "#558b2f",
  darken4: "#33691e",
  accent1: "#ccff90",
  accent2: "#b2ff59",
  accent3: "#76ff03",
  accent4: "#64dd17"
}, Ly = {
  base: "#cddc39",
  lighten5: "#f9fbe7",
  lighten4: "#f0f4c3",
  lighten3: "#e6ee9c",
  lighten2: "#dce775",
  lighten1: "#d4e157",
  darken1: "#c0ca33",
  darken2: "#afb42b",
  darken3: "#9e9d24",
  darken4: "#827717",
  accent1: "#f4ff81",
  accent2: "#eeff41",
  accent3: "#c6ff00",
  accent4: "#aeea00"
}, $y = {
  base: "#ffeb3b",
  lighten5: "#fffde7",
  lighten4: "#fff9c4",
  lighten3: "#fff59d",
  lighten2: "#fff176",
  lighten1: "#ffee58",
  darken1: "#fdd835",
  darken2: "#fbc02d",
  darken3: "#f9a825",
  darken4: "#f57f17",
  accent1: "#ffff8d",
  accent2: "#ffff00",
  accent3: "#ffea00",
  accent4: "#ffd600"
}, My = {
  base: "#ffc107",
  lighten5: "#fff8e1",
  lighten4: "#ffecb3",
  lighten3: "#ffe082",
  lighten2: "#ffd54f",
  lighten1: "#ffca28",
  darken1: "#ffb300",
  darken2: "#ffa000",
  darken3: "#ff8f00",
  darken4: "#ff6f00",
  accent1: "#ffe57f",
  accent2: "#ffd740",
  accent3: "#ffc400",
  accent4: "#ffab00"
}, Fy = {
  base: "#ff9800",
  lighten5: "#fff3e0",
  lighten4: "#ffe0b2",
  lighten3: "#ffcc80",
  lighten2: "#ffb74d",
  lighten1: "#ffa726",
  darken1: "#fb8c00",
  darken2: "#f57c00",
  darken3: "#ef6c00",
  darken4: "#e65100",
  accent1: "#ffd180",
  accent2: "#ffab40",
  accent3: "#ff9100",
  accent4: "#ff6d00"
}, Ry = {
  base: "#ff5722",
  lighten5: "#fbe9e7",
  lighten4: "#ffccbc",
  lighten3: "#ffab91",
  lighten2: "#ff8a65",
  lighten1: "#ff7043",
  darken1: "#f4511e",
  darken2: "#e64a19",
  darken3: "#d84315",
  darken4: "#bf360c",
  accent1: "#ff9e80",
  accent2: "#ff6e40",
  accent3: "#ff3d00",
  accent4: "#dd2c00"
}, Ny = {
  base: "#795548",
  lighten5: "#efebe9",
  lighten4: "#d7ccc8",
  lighten3: "#bcaaa4",
  lighten2: "#a1887f",
  lighten1: "#8d6e63",
  darken1: "#6d4c41",
  darken2: "#5d4037",
  darken3: "#4e342e",
  darken4: "#3e2723"
}, Hy = {
  base: "#607d8b",
  lighten5: "#eceff1",
  lighten4: "#cfd8dc",
  lighten3: "#b0bec5",
  lighten2: "#90a4ae",
  lighten1: "#78909c",
  darken1: "#546e7a",
  darken2: "#455a64",
  darken3: "#37474f",
  darken4: "#263238"
}, zy = {
  base: "#9e9e9e",
  lighten5: "#fafafa",
  lighten4: "#f5f5f5",
  lighten3: "#eeeeee",
  lighten2: "#e0e0e0",
  lighten1: "#bdbdbd",
  darken1: "#757575",
  darken2: "#616161",
  darken3: "#424242",
  darken4: "#212121"
}, Wy = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, Uy = {
  red: Vy,
  pink: py,
  purple: Py,
  deepPurple: _y,
  indigo: Iy,
  blue: Ay,
  lightBlue: Ty,
  cyan: Dy,
  teal: By,
  green: Oy,
  lightGreen: Ey,
  lime: Ly,
  yellow: $y,
  amber: My,
  orange: Fy,
  deepOrange: Ry,
  brown: Ny,
  blueGrey: Hy,
  grey: zy,
  shades: Wy
}, jy = F({
  swatches: {
    type: Array,
    default: () => Gy(Uy)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...se()
}, "VColorPickerSwatches");
function Gy(e) {
  return Object.keys(e).map((n) => {
    const t = e[n];
    return t.base ? [t.base, t.darken4, t.darken3, t.darken2, t.darken1, t.lighten1, t.lighten2, t.lighten3, t.lighten4, t.lighten5] : [t.black, t.white, t.transparent];
  });
}
const Yy = Bt({
  name: "VColorPickerSwatches",
  props: jy(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    return G(() => S("div", {
      class: z(["v-color-picker-swatches", e.class]),
      style: le([{
        maxHeight: oe(e.maxHeight)
      }, e.style])
    }, [S("div", null, [e.swatches.map((a) => S("div", {
      class: "v-color-picker-swatches__swatch"
    }, [a.map((l) => {
      const i = It(l), o = $a(i), r = Es(i);
      return S("div", {
        class: "v-color-picker-swatches__color",
        onClick: () => o && t("update:color", o)
      }, [S("div", {
        style: {
          background: r
        }
      }, [e.color && ct(e.color, o) ? k(Be, {
        size: "x-small",
        icon: "$success",
        color: Zv(l, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
}), Ky = en("v-picker-title"), Lo = F({
  color: String,
  ...Vt(),
  ...se(),
  ...Je(),
  ...at(),
  ...tn(),
  ...oa(),
  ...He(),
  ...ke(),
  ...Ae()
}, "VSheet"), Ta = W()({
  name: "VSheet",
  props: Lo(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ee(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Le(() => e.color), {
      borderClasses: o
    } = pt(e), {
      dimensionStyles: r
    } = et(e), {
      elevationClasses: s
    } = st(e), {
      locationStyles: c
    } = Nn(e), {
      positionClasses: u
    } = ra(e), {
      roundedClasses: d
    } = Ye(e);
    return G(() => k(e.tag, {
      class: z(["v-sheet", a.value, l.value, o.value, s.value, u.value, d.value, e.class]),
      style: le([i.value, r.value, c.value, e.style])
    }, t)), {};
  }
}), Ml = F({
  bgColor: String,
  divided: Boolean,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  ...Lo()
}, "VPicker"), ta = W()({
  name: "VPicker",
  props: Ml(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Le(() => e.color);
    return G(() => {
      const i = Ta.filterProps(e), o = !!(e.title || t.title);
      return k(Ta, H(i, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--divided": e.divided,
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!t.actions
        }, e.class],
        style: e.style
      }), {
        default: () => {
          var r;
          return [!e.hideHeader && S("div", {
            key: "header",
            class: z([a.value]),
            style: le([l.value])
          }, [o && k(Ky, {
            key: "picker-title"
          }, {
            default: () => {
              var s;
              return [((s = t.title) == null ? void 0 : s.call(t)) ?? e.title];
            }
          }), t.header && S("div", {
            class: "v-picker__header"
          }, [t.header()])]), S("div", {
            class: "v-picker__body"
          }, [(r = t.default) == null ? void 0 : r.call(t)]), t.actions && k(we, {
            defaults: {
              VBtn: {
                slim: !0,
                variant: "text"
              }
            }
          }, {
            default: () => [S("div", {
              class: "v-picker__actions"
            }, [t.actions()])]
          })];
        }
      });
    }), {};
  }
}), qy = F({
  canvasHeight: {
    type: [String, Number],
    default: 150
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  hideCanvas: Boolean,
  hideSliders: Boolean,
  hideInputs: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(Cn).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(Cn),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(Cn).includes(n))
  },
  showSwatches: Boolean,
  swatches: Array,
  swatchesMaxHeight: {
    type: [Number, String],
    default: 150
  },
  modelValue: {
    type: [Object, String]
  },
  ...Ml({
    hideHeader: !0
  })
}, "VColorPicker"), Tc = Bt({
  name: "VColorPicker",
  props: qy(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = de(e, "mode"), l = j(null), i = de(e, "modelValue", void 0, (u) => {
      if (u == null || u === "") return null;
      let d;
      try {
        d = $a(It(u));
      } catch (v) {
        return Tt(v), null;
      }
      return d;
    }, (u) => u ? dy(u, e.modelValue) : null), o = w(() => i.value ? {
      ...i.value,
      h: l.value ?? i.value.h
    } : null), {
      rtlClasses: r
    } = nt();
    let s = !0;
    ae(i, (u) => {
      if (!s) {
        s = !0;
        return;
      }
      u && (l.value = u.h);
    }, {
      immediate: !0
    });
    const c = (u) => {
      s = !1, l.value = u.h, i.value = u;
    };
    return Oa(() => {
      e.modes.includes(a.value) || (a.value = e.modes[0]);
    }), Ge({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), G(() => {
      const u = ta.filterProps(e);
      return k(ta, H(u, {
        class: ["v-color-picker", r.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": Ls({
            ...o.value ?? Kn,
            a: 1
          })
        }, e.style]
      }), {
        ...t,
        default: () => S(ue, null, [!e.hideCanvas && k(uy, {
          key: "canvas",
          color: o.value,
          "onUpdate:color": c,
          disabled: e.disabled,
          dotSize: e.dotSize,
          width: e.width,
          height: e.canvasHeight
        }, null), (!e.hideSliders || !e.hideInputs) && S("div", {
          key: "controls",
          class: "v-color-picker__controls"
        }, [!e.hideSliders && k(xy, {
          key: "preview",
          color: o.value,
          "onUpdate:color": c,
          hideAlpha: !a.value.endsWith("a"),
          disabled: e.disabled
        }, null), !e.hideInputs && k(yy, {
          key: "edit",
          modes: e.modes,
          mode: a.value,
          "onUpdate:mode": (d) => a.value = d,
          color: o.value,
          "onUpdate:color": c,
          disabled: e.disabled
        }, null)]), e.showSwatches && k(Yy, {
          key: "swatches",
          color: o.value,
          "onUpdate:color": c,
          maxHeight: e.swatchesMaxHeight,
          swatches: e.swatches,
          disabled: e.disabled
        }, null)])
      });
    }), {};
  }
}), Xy = F({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: {
    type: Boolean,
    default: !0
  },
  delimiters: Array,
  ...da({
    filterKeys: ["title"]
  }),
  ...Bo({
    hideNoData: !0,
    returnObject: !0
  }),
  ...Fe(Ka({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Ht({
    transition: !1
  })
}, "VCombobox"), Zy = W()({
  name: "VCombobox",
  props: Xy(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:search": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    var ie;
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Ne(), i = j(), o = ee(!1), r = ee(!0), s = ee(!1), c = j(), u = j(), d = ee(-1);
    let v = !1;
    const {
      items: f,
      transformIn: g,
      transformOut: b
    } = Po(e), {
      textColorClasses: m,
      textColorStyles: y
    } = vt(() => {
      var K;
      return (K = i.value) == null ? void 0 : K.color;
    }), h = de(e, "modelValue", [], (K) => g(Ue(K)), (K) => {
      const Z = b(K);
      return e.multiple ? Z : Z[0] ?? null;
    }), C = ja(e), p = w(() => !!(e.chips || a.chip)), _ = w(() => p.value || !!a.selection), P = ee(!e.multiple && !_.value ? ((ie = h.value[0]) == null ? void 0 : ie.title) ?? "" : ""), I = w({
      get: () => P.value,
      set: (K) => {
        var Z;
        if (P.value = K ?? "", !e.multiple && !_.value && (h.value = [Ft(e, K)], Pe(() => {
          var me;
          return (me = u.value) == null ? void 0 : me.scrollToIndex(0);
        })), K && e.multiple && ((Z = e.delimiters) != null && Z.length)) {
          const me = K.split(new RegExp(`(?:${e.delimiters.join("|")})+`));
          me.length > 1 && (me.forEach((he) => {
            he = he.trim(), he && X(Ft(e, he));
          }), P.value = "");
        }
        K || (d.value = -1), r.value = !K;
      }
    }), V = w(() => typeof e.counterValue == "function" ? e.counterValue(h.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? h.value.length : I.value.length), {
      filteredItems: T,
      getMatches: A
    } = va(e, f, () => r.value ? "" : I.value), D = w(() => e.hideSelected ? T.value.filter((K) => !h.value.some((Z) => Z.value === K.value)) : T.value), x = w(() => e.hideNoData && !D.value.length || C.isReadonly.value || C.isDisabled.value), B = de(e, "menu"), M = w({
      get: () => B.value,
      set: (K) => {
        var Z;
        B.value && !K && ((Z = c.value) != null && Z.ΨopenChildren.size) || K && x.value || (B.value = K);
      }
    }), L = E(() => M.value ? e.closeText : e.openText);
    ae(P, (K) => {
      v ? Pe(() => v = !1) : o.value && !M.value && (M.value = !0), t("update:search", K);
    }), ae(h, (K) => {
      var Z;
      !e.multiple && !_.value && (P.value = ((Z = K[0]) == null ? void 0 : Z.title) ?? "");
    });
    const N = w(() => h.value.map((K) => K.value)), Y = w(() => {
      var Z;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && I.value === ((Z = D.value[0]) == null ? void 0 : Z.title)) && D.value.length > 0 && !r.value && !s.value;
    }), te = j(), q = Do(te, i);
    function $(K) {
      v = !0, e.openOnClear && (M.value = !0);
    }
    function O() {
      x.value || (M.value = !0);
    }
    function R(K) {
      x.value || (o.value && (K.preventDefault(), K.stopPropagation()), M.value = !M.value);
    }
    function U(K) {
      var Z;
      (Zn(K) || K.key === "Backspace") && ((Z = i.value) == null || Z.focus());
    }
    function ce(K) {
      var he, pe, Ce, Te;
      if (bv(K) || C.isReadonly.value) return;
      const Z = (he = i.value) == null ? void 0 : he.selectionStart, me = h.value.length;
      if (["Enter", "ArrowDown", "ArrowUp"].includes(K.key) && K.preventDefault(), ["Enter", "ArrowDown"].includes(K.key) && (M.value = !0), ["Escape"].includes(K.key) && (M.value = !1), ["Enter", "Escape", "Tab"].includes(K.key) && (Y.value && ["Enter", "Tab"].includes(K.key) && !h.value.some((ye) => {
        let {
          value: ot
        } = ye;
        return ot === D.value[0].value;
      }) && X(T.value[0]), r.value = !0), K.key === "ArrowDown" && Y.value && ((pe = te.value) == null || pe.focus("next")), K.key === "Enter" && I.value && (X(Ft(e, I.value)), _.value && (P.value = "")), ["Backspace", "Delete"].includes(K.key)) {
        if (!e.multiple && _.value && h.value.length > 0 && !I.value) return X(h.value[0], !1);
        if (~d.value) {
          K.preventDefault();
          const ye = d.value;
          X(h.value[d.value], !1), d.value = ye >= me - 1 ? me - 2 : ye;
        } else K.key === "Backspace" && !I.value && (d.value = me - 1);
        return;
      }
      if (e.multiple)
        if (K.key === "ArrowLeft") {
          if (d.value < 0 && Z && Z > 0) return;
          const ye = d.value > -1 ? d.value - 1 : me - 1;
          h.value[ye] ? d.value = ye : (d.value = -1, (Ce = i.value) == null || Ce.setSelectionRange(I.value.length, I.value.length));
        } else if (K.key === "ArrowRight") {
          if (d.value < 0) return;
          const ye = d.value + 1;
          h.value[ye] ? d.value = ye : (d.value = -1, (Te = i.value) == null || Te.setSelectionRange(0, 0));
        } else ~d.value && Zn(K) && (d.value = -1);
    }
    function ne() {
      var K;
      e.eager && ((K = u.value) == null || K.calculateVisibleItems());
    }
    function Q() {
      var K;
      o.value && (r.value = !0, (K = i.value) == null || K.focus());
    }
    function X(K) {
      let Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!K || K.props.disabled))
        if (e.multiple) {
          const me = h.value.findIndex((pe) => (e.valueComparator || ct)(pe.value, K.value)), he = Z ?? !~me;
          if (~me) {
            const pe = he ? [...h.value, K] : [...h.value];
            pe.splice(me, 1), h.value = pe;
          } else he && (h.value = [...h.value, K]);
          e.clearOnSelect && (I.value = "");
        } else {
          const me = Z !== !1;
          h.value = me ? [K] : [], P.value = me && !_.value ? K.title : "", Pe(() => {
            M.value = !1, r.value = !0;
          });
        }
    }
    function ve(K) {
      o.value = !0, setTimeout(() => {
        s.value = !0;
      });
    }
    function ge(K) {
      s.value = !1;
    }
    function J(K) {
      (K == null || K === "" && !e.multiple && !_.value) && (h.value = []);
    }
    return ae(o, (K, Z) => {
      if (!(K || K === Z) && (d.value = -1, M.value = !1, I.value)) {
        if (e.multiple) {
          X(Ft(e, I.value));
          return;
        }
        if (!_.value) return;
        h.value.some((me) => {
          let {
            title: he
          } = me;
          return he === I.value;
        }) ? P.value = "" : X(Ft(e, I.value));
      }
    }), ae(M, () => {
      if (!e.hideSelected && M.value && h.value.length) {
        const K = D.value.findIndex((Z) => h.value.some((me) => (e.valueComparator || ct)(me.value, Z.value)));
        Oe && window.requestAnimationFrame(() => {
          var Z;
          K >= 0 && ((Z = u.value) == null || Z.scrollToIndex(K));
        });
      }
    }), ae(() => e.items, (K, Z) => {
      M.value || o.value && !Z.length && K.length && (M.value = !0);
    }), G(() => {
      const K = !!(!e.hideNoData || D.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), Z = h.value.length > 0, me = Gt.filterProps(e);
      return k(Gt, H({
        ref: i
      }, me, {
        modelValue: I.value,
        "onUpdate:modelValue": [(he) => I.value = he, J],
        focused: o.value,
        "onUpdate:focused": (he) => o.value = he,
        validationValue: h.externalValue,
        counterValue: V.value,
        dirty: Z,
        class: ["v-combobox", {
          "v-combobox--active-menu": M.value,
          "v-combobox--chips": !!e.chips,
          "v-combobox--selection-slot": !!_.value,
          "v-combobox--selecting-index": d.value > -1,
          [`v-combobox--${e.multiple ? "multiple" : "single"}`]: !0
        }, e.class],
        style: e.style,
        readonly: C.isReadonly.value,
        placeholder: Z ? void 0 : e.placeholder,
        "onClick:clear": $,
        "onMousedown:control": O,
        onKeydown: ce
      }), {
        ...a,
        default: () => S(ue, null, [k(Pn, H({
          ref: c,
          modelValue: M.value,
          "onUpdate:modelValue": (he) => M.value = he,
          activator: "parent",
          contentClass: "v-combobox__content",
          disabled: x.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: ne,
          onAfterLeave: Q
        }, e.menuProps), {
          default: () => [K && k(pn, H({
            ref: te,
            filterable: !0,
            selected: N.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (he) => he.preventDefault(),
            onKeydown: U,
            onFocusin: ve,
            onFocusout: ge,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, q, e.listProps), {
            default: () => {
              var he, pe, Ce;
              return [(he = a["prepend-item"]) == null ? void 0 : he.call(a), !D.value.length && !e.hideNoData && (((pe = a["no-data"]) == null ? void 0 : pe.call(a)) ?? k(Dt, {
                key: "no-data",
                title: l(e.noDataText)
              }, null)), k(El, {
                ref: u,
                renderless: !0,
                items: D.value,
                itemKey: "value"
              }, {
                default: (Te) => {
                  var fa, mn, Xa;
                  let {
                    item: ye,
                    index: ot,
                    itemRef: rt
                  } = Te;
                  const ln = H(ye.props, {
                    ref: rt,
                    key: ye.value,
                    active: Y.value && ot === 0 ? !0 : void 0,
                    onClick: () => X(ye, null)
                  });
                  return ye.type === "divider" ? ((fa = a.divider) == null ? void 0 : fa.call(a, {
                    props: ye.raw,
                    index: ot
                  })) ?? k(At, H(ye.props, {
                    key: `divider-${ot}`
                  }), null) : ye.type === "subheader" ? ((mn = a.subheader) == null ? void 0 : mn.call(a, {
                    props: ye.raw,
                    index: ot
                  })) ?? k(ca, H(ye.props, {
                    key: `subheader-${ot}`
                  }), null) : ((Xa = a.item) == null ? void 0 : Xa.call(a, {
                    item: ye,
                    index: ot,
                    props: ln
                  })) ?? k(Dt, H(ln, {
                    role: "option"
                  }), {
                    prepend: (Za) => {
                      let {
                        isSelected: Kd
                      } = Za;
                      return S(ue, null, [e.multiple && !e.hideSelected ? k(jt, {
                        key: ye.value,
                        modelValue: Kd,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, ye.props.prependAvatar && k(Et, {
                        image: ye.props.prependAvatar
                      }, null), ye.props.prependIcon && k(Be, {
                        icon: ye.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var Za;
                      return r.value ? ye.title : cc("v-combobox", ye.title, (Za = A(ye)) == null ? void 0 : Za.title);
                    }
                  });
                }
              }), (Ce = a["append-item"]) == null ? void 0 : Ce.call(a)];
            }
          })]
        }), h.value.map((he, pe) => {
          function Ce(rt) {
            rt.stopPropagation(), rt.preventDefault(), X(he, !1);
          }
          const Te = {
            "onClick:close": Ce,
            onKeydown(rt) {
              rt.key !== "Enter" && rt.key !== " " || (rt.preventDefault(), rt.stopPropagation(), Ce(rt));
            },
            onMousedown(rt) {
              rt.preventDefault(), rt.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, ye = p.value ? !!a.chip : !!a.selection, ot = ye ? Vl(p.value ? a.chip({
            item: he,
            index: pe,
            props: Te
          }) : a.selection({
            item: he,
            index: pe
          })) : void 0;
          if (!(ye && !ot))
            return S("div", {
              key: he.value,
              class: z(["v-combobox__selection", pe === d.value && ["v-combobox__selection--selected", m.value]]),
              style: le(pe === d.value ? y.value : {})
            }, [p.value ? a.chip ? k(we, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: he.title
                }
              }
            }, {
              default: () => [ot]
            }) : k(ua, H({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: he.title,
              disabled: he.props.disabled
            }, Te), null) : ot ?? S("span", {
              class: "v-combobox__selection-text"
            }, [he.title, e.multiple && pe < h.value.length - 1 && S("span", {
              class: "v-combobox__selection-comma"
            }, [mt(",")])])]);
        })]),
        "append-inner": function() {
          var Te, ye;
          for (var he = arguments.length, pe = new Array(he), Ce = 0; Ce < he; Ce++)
            pe[Ce] = arguments[Ce];
          return S(ue, null, [(Te = a["append-inner"]) == null ? void 0 : Te.call(a, ...pe), (!e.hideNoData || e.items.length) && e.menuIcon ? k(Be, {
            class: "v-combobox__menu-icon",
            color: (ye = i.value) == null ? void 0 : ye.fieldIconColor,
            icon: e.menuIcon,
            onMousedown: R,
            onClick: _s,
            "aria-label": l(L.value),
            title: l(L.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      });
    }), ut({
      isFocused: o,
      isPristine: r,
      menu: M,
      search: I,
      selectionIndex: d,
      filteredItems: T,
      select: X
    }, i);
  }
}), Qy = F({
  modelValue: null,
  color: String,
  cancelText: {
    type: String,
    default: "$vuetify.confirmEdit.cancel"
  },
  okText: {
    type: String,
    default: "$vuetify.confirmEdit.ok"
  },
  disabled: {
    type: [Boolean, Array],
    default: void 0
  },
  hideActions: Boolean
}, "VConfirmEdit"), Jy = W()({
  name: "VConfirmEdit",
  props: Qy(),
  emits: {
    cancel: () => !0,
    save: (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = de(e, "modelValue"), i = j();
    je(() => {
      i.value = structuredClone(Ke(l.value));
    });
    const {
      t: o
    } = Ne(), r = w(() => ct(l.value, i.value));
    function s(b) {
      return typeof e.disabled == "boolean" ? e.disabled : Array.isArray(e.disabled) ? e.disabled.includes(b) : r.value;
    }
    const c = w(() => s("save")), u = w(() => s("cancel"));
    function d() {
      l.value = i.value, t("save", i.value);
    }
    function v() {
      i.value = structuredClone(Ke(l.value)), t("cancel");
    }
    function f(b) {
      return S(ue, null, [k(xe, H({
        disabled: u.value,
        variant: "text",
        color: e.color,
        onClick: v,
        text: o(e.cancelText)
      }, b), null), k(xe, H({
        disabled: c.value,
        variant: "text",
        color: e.color,
        onClick: d,
        text: o(e.okText)
      }, b), null)]);
    }
    let g = !1;
    return G(() => {
      var b;
      return S(ue, null, [(b = a.default) == null ? void 0 : b.call(a, {
        model: i,
        save: d,
        cancel: v,
        isPristine: r.value,
        get actions() {
          return g = !0, f;
        }
      }), !e.hideActions && !g && f()]);
    }), {
      save: d,
      cancel: v,
      isPristine: r
    };
  }
}), Dc = F({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand"), Bc = Symbol.for("vuetify:datatable:expanded");
function Fl(e) {
  const n = E(() => e.expandOnClick), t = de(e, "expanded", e.expanded, (r) => new Set(r), (r) => [...r.values()]);
  function a(r, s) {
    const c = new Set(t.value);
    s ? c.add(r.value) : c.delete(r.value), t.value = c;
  }
  function l(r) {
    return t.value.has(r.value);
  }
  function i(r) {
    a(r, !l(r));
  }
  const o = {
    expand: a,
    expanded: t,
    expandOnClick: n,
    isExpanded: l,
    toggleExpand: i
  };
  return Re(Bc, o), o;
}
function Oc() {
  const e = Ie(Bc);
  if (!e) throw new Error("foo");
  return e;
}
const $o = F({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group"), Ec = Symbol.for("vuetify:data-table-group");
function Mo(e) {
  return {
    groupBy: de(e, "groupBy")
  };
}
function Rl(e) {
  const {
    disableSort: n,
    groupBy: t,
    sortBy: a
  } = e, l = j(/* @__PURE__ */ new Set()), i = w(() => t.value.map((u) => ({
    ...u,
    order: u.order ?? !1
  })).concat(n != null && n.value ? [] : a.value));
  function o(u) {
    return l.value.has(u.id);
  }
  function r(u) {
    const d = new Set(l.value);
    o(u) ? d.delete(u.id) : d.add(u.id), l.value = d;
  }
  function s(u) {
    function d(v) {
      const f = [];
      for (const g of v.items)
        "type" in g && g.type === "group" ? f.push(...d(g)) : f.push(g);
      return [...new Set(f)];
    }
    return d({
      type: "group",
      items: u,
      id: "dummy",
      key: "dummy",
      value: "dummy",
      depth: 0
    });
  }
  const c = {
    sortByWithGroups: i,
    toggleGroup: r,
    opened: l,
    groupBy: t,
    extractRows: s,
    isGroupOpen: o
  };
  return Re(Ec, c), c;
}
function Lc() {
  const e = Ie(Ec);
  if (!e) throw new Error("Missing group!");
  return e;
}
function eb(e, n) {
  if (!e.length) return [];
  const t = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = Vn(a.raw, n);
    t.has(l) || t.set(l, []), t.get(l).push(a);
  }
  return t;
}
function $c(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!n.length) return [];
  const l = eb(e, n[0]), i = [], o = n.slice(1);
  return l.forEach((r, s) => {
    const c = n[0], u = `${a}_${c}_${s}`;
    i.push({
      depth: t,
      id: u,
      key: c,
      value: s,
      items: o.length ? $c(r, o, t + 1, u) : r,
      type: "group"
    });
  }), i;
}
function Mc(e, n) {
  const t = [];
  for (const a of e)
    "type" in a && a.type === "group" ? (a.value != null && t.push(a), (n.has(a.id) || a.value == null) && t.push(...Mc(a.items, n))) : t.push(a);
  return t;
}
function Nl(e, n, t) {
  return {
    flatItems: w(() => {
      if (!n.value.length) return e.value;
      const l = $c(e.value, n.value.map((i) => i.key));
      return Mc(l, t.value);
    })
  };
}
function Hl(e) {
  let {
    page: n,
    itemsPerPage: t,
    sortBy: a,
    groupBy: l,
    search: i
  } = e;
  const o = Xe("VDataTable"), r = () => ({
    page: n.value,
    itemsPerPage: t.value,
    sortBy: a.value,
    groupBy: l.value,
    search: i.value
  });
  let s = null;
  ae(r, (c) => {
    ct(s, c) || (s && s.search !== c.search && (n.value = 1), o.emit("update:options", c), s = c);
  }, {
    deep: !0,
    immediate: !0
  });
}
const Fo = F({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate"), Fc = Symbol.for("vuetify:data-table-pagination");
function Ro(e) {
  const n = de(e, "page", void 0, (a) => Number(a ?? 1)), t = de(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return {
    page: n,
    itemsPerPage: t
  };
}
function No(e) {
  const {
    page: n,
    itemsPerPage: t,
    itemsLength: a
  } = e, l = w(() => t.value === -1 ? 0 : t.value * (n.value - 1)), i = w(() => t.value === -1 ? a.value : Math.min(a.value, l.value + t.value)), o = w(() => t.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / t.value));
  ae([n, o], () => {
    n.value > o.value && (n.value = o.value);
  });
  function r(v) {
    t.value = v, n.value = 1;
  }
  function s() {
    n.value = Me(n.value + 1, 1, o.value);
  }
  function c() {
    n.value = Me(n.value - 1, 1, o.value);
  }
  function u(v) {
    n.value = Me(v, 1, o.value);
  }
  const d = {
    page: n,
    itemsPerPage: t,
    startIndex: l,
    stopIndex: i,
    pageCount: o,
    itemsLength: a,
    nextPage: s,
    prevPage: c,
    setPage: u,
    setItemsPerPage: r
  };
  return Re(Fc, d), d;
}
function tb() {
  const e = Ie(Fc);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function Rc(e) {
  const n = Xe("usePaginatedItems"), {
    items: t,
    startIndex: a,
    stopIndex: l,
    itemsPerPage: i
  } = e, o = w(() => i.value <= 0 ? t.value : t.value.slice(a.value, l.value));
  return ae(o, (r) => {
    n.emit("update:currentItems", r);
  }, {
    immediate: !0
  }), {
    paginatedItems: o
  };
}
const nb = {
  showSelectAll: !1,
  allSelected: () => [],
  select: (e) => {
    var a;
    let {
      items: n,
      value: t
    } = e;
    return new Set(t ? [(a = n[0]) == null ? void 0 : a.value] : []);
  },
  selectAll: (e) => {
    let {
      selected: n
    } = e;
    return n;
  }
}, Nc = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      currentPage: n
    } = e;
    return n;
  },
  select: (e) => {
    let {
      items: n,
      value: t,
      selected: a
    } = e;
    for (const l of n)
      t ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: n,
      currentPage: t,
      selected: a
    } = e;
    return Nc.select({
      items: t,
      value: n,
      selected: a
    });
  }
}, Hc = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      allItems: n
    } = e;
    return n;
  },
  select: (e) => {
    let {
      items: n,
      value: t,
      selected: a
    } = e;
    for (const l of n)
      t ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: n,
      allItems: t,
      selected: a
    } = e;
    return Hc.select({
      items: t,
      value: n,
      selected: a
    });
  }
}, zc = F({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: {
    type: Function,
    default: ct
  }
}, "DataTable-select"), Wc = Symbol.for("vuetify:data-table-selection");
function zl(e, n) {
  let {
    allItems: t,
    currentPage: a
  } = n;
  const l = de(e, "modelValue", e.modelValue, (h) => new Set(Ue(h).map((C) => {
    var p;
    return ((p = t.value.find((_) => e.valueComparator(C, _.value))) == null ? void 0 : p.value) ?? C;
  })), (h) => [...h.values()]), i = w(() => t.value.filter((h) => h.selectable)), o = w(() => a.value.filter((h) => h.selectable)), r = w(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return nb;
      case "all":
        return Hc;
      case "page":
      default:
        return Nc;
    }
  }), s = ee(null);
  function c(h) {
    return Ue(h).every((C) => l.value.has(C.value));
  }
  function u(h) {
    return Ue(h).some((C) => l.value.has(C.value));
  }
  function d(h, C) {
    const p = r.value.select({
      items: h,
      value: C,
      selected: new Set(l.value)
    });
    l.value = p;
  }
  function v(h, C, p) {
    const _ = [];
    if (C = C ?? a.value.findIndex((P) => P.value === h.value), e.selectStrategy !== "single" && (p != null && p.shiftKey) && s.value !== null) {
      const [P, I] = [s.value, C].sort((V, T) => V - T);
      _.push(...a.value.slice(P, I + 1).filter((V) => V.selectable));
    } else
      _.push(h), s.value = C;
    d(_, !c([h]));
  }
  function f(h) {
    const C = r.value.selectAll({
      value: h,
      allItems: i.value,
      currentPage: o.value,
      selected: new Set(l.value)
    });
    l.value = C;
  }
  const g = w(() => l.value.size > 0), b = w(() => {
    const h = r.value.allSelected({
      allItems: i.value,
      currentPage: o.value
    });
    return !!h.length && c(h);
  }), m = E(() => r.value.showSelectAll), y = {
    toggleSelect: v,
    select: d,
    selectAll: f,
    isSelected: c,
    isSomeSelected: u,
    someSelected: g,
    allSelected: b,
    showSelectAll: m,
    lastSelectedIndex: s,
    selectStrategy: r
  };
  return Re(Wc, y), y;
}
function Wl() {
  const e = Ie(Wc);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const Uc = F({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort"), jc = Symbol.for("vuetify:data-table-sort");
function Ul(e) {
  const n = de(e, "sortBy"), t = E(() => e.mustSort), a = E(() => e.multiSort);
  return {
    sortBy: n,
    mustSort: t,
    multiSort: a
  };
}
function jl(e) {
  const {
    sortBy: n,
    mustSort: t,
    multiSort: a,
    page: l
  } = e, i = (s) => {
    if (s.key == null) return;
    let c = n.value.map((d) => ({
      ...d
    })) ?? [];
    const u = c.find((d) => d.key === s.key);
    u ? u.order === "desc" ? t.value && c.length === 1 ? u.order = "asc" : c = c.filter((d) => d.key !== s.key) : u.order = "desc" : a.value ? c.push({
      key: s.key,
      order: "asc"
    }) : c = [{
      key: s.key,
      order: "asc"
    }], n.value = c, l && (l.value = 1);
  };
  function o(s) {
    return !!n.value.find((c) => c.key === s.key);
  }
  const r = {
    sortBy: n,
    toggleSort: i,
    isSorted: o
  };
  return Re(jc, r), r;
}
function Gc() {
  const e = Ie(jc);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function Ho(e, n, t, a) {
  const l = Ne();
  return {
    sortedItems: w(() => {
      var o, r;
      return t.value.length ? ab(n.value, t.value, l.current.value, {
        transform: a == null ? void 0 : a.transform,
        sortFunctions: {
          ...e.customKeySort,
          ...(o = a == null ? void 0 : a.sortFunctions) == null ? void 0 : o.value
        },
        sortRawFunctions: (r = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : r.value
      }) : n.value;
    })
  };
}
function ab(e, n, t, a) {
  const l = new Intl.Collator(t, {
    sensitivity: "accent",
    usage: "sort"
  });
  return e.map((o) => [o, a != null && a.transform ? a.transform(o) : o]).sort((o, r) => {
    var s, c;
    for (let u = 0; u < n.length; u++) {
      let d = !1;
      const v = n[u].key, f = n[u].order ?? "asc";
      if (f === !1) continue;
      let g = Vn(o[1], v), b = Vn(r[1], v), m = o[0].raw, y = r[0].raw;
      if (f === "desc" && ([g, b] = [b, g], [m, y] = [y, m]), (s = a == null ? void 0 : a.sortRawFunctions) != null && s[v]) {
        const h = a.sortRawFunctions[v](m, y);
        if (h == null) continue;
        if (d = !0, h) return h;
      }
      if ((c = a == null ? void 0 : a.sortFunctions) != null && c[v]) {
        const h = a.sortFunctions[v](g, b);
        if (h == null) continue;
        if (d = !0, h) return h;
      }
      if (!d && (g instanceof Date && b instanceof Date && (g = g.getTime(), b = b.getTime()), [g, b] = [g, b].map((h) => h != null ? h.toString().toLocaleLowerCase() : h), g !== b))
        return Qa(g) && Qa(b) ? 0 : Qa(g) ? -1 : Qa(b) ? 1 : !isNaN(g) && !isNaN(b) ? Number(g) - Number(b) : l.compare(g, b);
    }
    return 0;
  }).map((o) => {
    let [r] = o;
    return r;
  });
}
const lb = F({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  returnObject: Boolean
}, "DataIterator-items");
function ib(e, n) {
  const t = e.returnObject ? n : Qe(n, e.itemValue), a = Qe(n, e.itemSelectable, !0);
  return {
    type: "item",
    value: t,
    selectable: a,
    raw: n
  };
}
function ob(e, n) {
  const t = [];
  for (const a of n)
    t.push(ib(e, a));
  return t;
}
function rb(e) {
  return {
    items: w(() => ob(e, e.items))
  };
}
const sb = F({
  search: String,
  loading: Boolean,
  ...se(),
  ...lb(),
  ...zc(),
  ...Uc(),
  ...Fo({
    itemsPerPage: 5
  }),
  ...Dc(),
  ...$o(),
  ...da(),
  ...ke(),
  ...Ht({
    transition: {
      component: xa,
      hideOnLeave: !0
    }
  })
}, "VDataIterator"), ub = W()({
  name: "VDataIterator",
  props: sb(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = de(e, "groupBy"), l = E(() => e.search), {
      items: i
    } = rb(e), {
      filteredItems: o
    } = va(e, i, l, {
      transform: (O) => O.raw
    }), {
      sortBy: r,
      multiSort: s,
      mustSort: c
    } = Ul(e), {
      page: u,
      itemsPerPage: d
    } = Ro(e), {
      toggleSort: v
    } = jl({
      sortBy: r,
      multiSort: s,
      mustSort: c,
      page: u
    }), {
      sortByWithGroups: f,
      opened: g,
      extractRows: b,
      isGroupOpen: m,
      toggleGroup: y
    } = Rl({
      groupBy: a,
      sortBy: r
    }), {
      sortedItems: h
    } = Ho(e, o, f, {
      transform: (O) => O.raw
    }), {
      flatItems: C
    } = Nl(h, a, g), p = E(() => C.value.length), {
      startIndex: _,
      stopIndex: P,
      pageCount: I,
      prevPage: V,
      nextPage: T,
      setItemsPerPage: A,
      setPage: D
    } = No({
      page: u,
      itemsPerPage: d,
      itemsLength: p
    }), {
      paginatedItems: x
    } = Rc({
      items: C,
      startIndex: _,
      stopIndex: P,
      itemsPerPage: d
    }), B = w(() => b(x.value)), {
      isSelected: M,
      select: L,
      selectAll: N,
      toggleSelect: Y
    } = zl(e, {
      allItems: i,
      currentPage: B
    }), {
      isExpanded: te,
      toggleExpand: q
    } = Fl(e);
    Hl({
      page: u,
      itemsPerPage: d,
      sortBy: r,
      groupBy: a,
      search: l
    });
    const $ = w(() => ({
      page: u.value,
      itemsPerPage: d.value,
      sortBy: r.value,
      pageCount: I.value,
      toggleSort: v,
      prevPage: V,
      nextPage: T,
      setPage: D,
      setItemsPerPage: A,
      isSelected: M,
      select: L,
      selectAll: N,
      toggleSelect: Y,
      isExpanded: te,
      toggleExpand: q,
      isGroupOpen: m,
      toggleGroup: y,
      items: B.value,
      groupedItems: x.value
    }));
    return G(() => k(e.tag, {
      class: z(["v-data-iterator", {
        "v-data-iterator--loading": e.loading
      }, e.class]),
      style: le(e.style)
    }, {
      default: () => {
        var O, R;
        return [(O = t.header) == null ? void 0 : O.call(t, $.value), k(yt, {
          transition: e.transition
        }, {
          default: () => {
            var U, ce;
            return [e.loading ? k(Ha, {
              key: "loader",
              name: "v-data-iterator",
              active: !0
            }, {
              default: (ne) => {
                var Q;
                return (Q = t.loader) == null ? void 0 : Q.call(t, ne);
              }
            }) : S("div", {
              key: "items"
            }, [x.value.length ? (ce = t.default) == null ? void 0 : ce.call(t, $.value) : (U = t["no-data"]) == null ? void 0 : U.call(t)])];
          }
        }), (R = t.footer) == null ? void 0 : R.call(t, $.value)];
      }
    })), {};
  }
});
function cb() {
  const e = j([]);
  rv(() => e.value = []);
  function n(t, a) {
    e.value[a] = t;
  }
  return {
    refs: e,
    updateRef: n
  };
}
const db = F({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: (e) => e.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (e) => e % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: fe,
    default: "$first"
  },
  prevIcon: {
    type: fe,
    default: "$prev"
  },
  nextIcon: {
    type: fe,
    default: "$next"
  },
  lastIcon: {
    type: fe,
    default: "$last"
  },
  ariaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.root"
  },
  pageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.page"
  },
  currentPageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.currentPage"
  },
  firstAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.first"
  },
  previousAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.previous"
  },
  nextAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.next"
  },
  lastAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.last"
  },
  ellipsis: {
    type: String,
    default: "..."
  },
  showFirstLastPage: Boolean,
  ...Vt(),
  ...se(),
  ...it(),
  ...at(),
  ...He(),
  ...Kt(),
  ...ke({
    tag: "nav"
  }),
  ...Ae(),
  ...Mt({
    variant: "text"
  })
}, "VPagination"), Ri = W()({
  name: "VPagination",
  props: db(),
  emits: {
    "update:modelValue": (e) => !0,
    first: (e) => !0,
    prev: (e) => !0,
    next: (e) => !0,
    last: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = de(e, "modelValue"), {
      t: i,
      n: o
    } = Ne(), {
      isRtl: r
    } = nt(), {
      themeClasses: s
    } = Ee(e), {
      width: c
    } = $t(), u = ee(-1);
    Ge(void 0, {
      scoped: !0
    });
    const {
      resizeRef: d
    } = Rt((V) => {
      if (!V.length) return;
      const {
        target: T,
        contentRect: A
      } = V[0], D = T.querySelector(".v-pagination__list > *");
      if (!D) return;
      const x = A.width, B = D.offsetWidth + parseFloat(getComputedStyle(D).marginRight) * 2;
      u.value = b(x, B);
    }), v = w(() => parseInt(e.length, 10)), f = w(() => parseInt(e.start, 10)), g = w(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : u.value >= 0 ? u.value : b(c.value, 58));
    function b(V, T) {
      const A = e.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        Number(((V - T * A) / T).toFixed(2))
      ));
    }
    const m = w(() => {
      if (v.value <= 0 || isNaN(v.value) || v.value > Number.MAX_SAFE_INTEGER) return [];
      if (g.value <= 0) return [];
      if (g.value === 1) return [l.value];
      if (v.value <= g.value)
        return _t(v.value, f.value);
      const V = g.value % 2 === 0, T = V ? g.value / 2 : Math.floor(g.value / 2), A = V ? T : T + 1, D = v.value - T;
      if (A - l.value >= 0)
        return [..._t(Math.max(1, g.value - 1), f.value), e.ellipsis, v.value];
      if (l.value - D >= (V ? 1 : 0)) {
        const x = g.value - 1, B = v.value - x + f.value;
        return [f.value, e.ellipsis, ..._t(x, B)];
      } else {
        const x = Math.max(1, g.value - 2), B = x === 1 ? l.value : l.value - Math.ceil(x / 2) + f.value;
        return [f.value, e.ellipsis, ..._t(x, B), e.ellipsis, v.value];
      }
    });
    function y(V, T, A) {
      V.preventDefault(), l.value = T, A && a(A, T);
    }
    const {
      refs: h,
      updateRef: C
    } = cb();
    Ge({
      VPaginationBtn: {
        color: E(() => e.color),
        border: E(() => e.border),
        density: E(() => e.density),
        size: E(() => e.size),
        variant: E(() => e.variant),
        rounded: E(() => e.rounded),
        elevation: E(() => e.elevation)
      }
    });
    const p = w(() => m.value.map((V, T) => {
      const A = (D) => C(D, T);
      if (typeof V == "string")
        return {
          isActive: !1,
          key: `ellipsis-${T}`,
          page: V,
          props: {
            ref: A,
            ellipsis: !0,
            icon: !0,
            disabled: !0
          }
        };
      {
        const D = V === l.value;
        return {
          isActive: D,
          key: V,
          page: o(V),
          props: {
            ref: A,
            ellipsis: !1,
            icon: !0,
            disabled: !!e.disabled || Number(e.length) < 2,
            color: D ? e.activeColor : e.color,
            "aria-current": D,
            "aria-label": i(D ? e.currentPageAriaLabel : e.pageAriaLabel, V),
            onClick: (x) => y(x, V)
          }
        };
      }
    })), _ = w(() => {
      const V = !!e.disabled || l.value <= f.value, T = !!e.disabled || l.value >= f.value + v.value - 1;
      return {
        first: e.showFirstLastPage ? {
          icon: r.value ? e.lastIcon : e.firstIcon,
          onClick: (A) => y(A, f.value, "first"),
          disabled: V,
          "aria-label": i(e.firstAriaLabel),
          "aria-disabled": V
        } : void 0,
        prev: {
          icon: r.value ? e.nextIcon : e.prevIcon,
          onClick: (A) => y(A, l.value - 1, "prev"),
          disabled: V,
          "aria-label": i(e.previousAriaLabel),
          "aria-disabled": V
        },
        next: {
          icon: r.value ? e.prevIcon : e.nextIcon,
          onClick: (A) => y(A, l.value + 1, "next"),
          disabled: T,
          "aria-label": i(e.nextAriaLabel),
          "aria-disabled": T
        },
        last: e.showFirstLastPage ? {
          icon: r.value ? e.firstIcon : e.lastIcon,
          onClick: (A) => y(A, f.value + v.value - 1, "last"),
          disabled: T,
          "aria-label": i(e.lastAriaLabel),
          "aria-disabled": T
        } : void 0
      };
    });
    function P() {
      var T;
      const V = l.value - f.value;
      (T = h.value[V]) == null || T.$el.focus();
    }
    function I(V) {
      V.key === ci.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, Pe(P)) : V.key === ci.right && !e.disabled && l.value < f.value + v.value - 1 && (l.value = l.value + 1, Pe(P));
    }
    return G(() => k(e.tag, {
      ref: d,
      class: z(["v-pagination", s.value, e.class]),
      style: le(e.style),
      role: "navigation",
      "aria-label": i(e.ariaLabel),
      onKeydown: I,
      "data-test": "v-pagination-root"
    }, {
      default: () => [S("ul", {
        class: "v-pagination__list"
      }, [e.showFirstLastPage && S("li", {
        key: "first",
        class: "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [t.first ? t.first(_.value.first) : k(xe, H({
        _as: "VPaginationBtn"
      }, _.value.first), null)]), S("li", {
        key: "prev",
        class: "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [t.prev ? t.prev(_.value.prev) : k(xe, H({
        _as: "VPaginationBtn"
      }, _.value.prev), null)]), p.value.map((V, T) => S("li", {
        key: V.key,
        class: z(["v-pagination__item", {
          "v-pagination__item--is-active": V.isActive
        }]),
        "data-test": "v-pagination-item"
      }, [t.item ? t.item(V) : k(xe, H({
        _as: "VPaginationBtn"
      }, V.props), {
        default: () => [V.page]
      })])), S("li", {
        key: "next",
        class: "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [t.next ? t.next(_.value.next) : k(xe, H({
        _as: "VPaginationBtn"
      }, _.value.next), null)]), e.showFirstLastPage && S("li", {
        key: "last",
        class: "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [t.last ? t.last(_.value.last) : k(xe, H({
        _as: "VPaginationBtn"
      }, _.value.last), null)])])]
    })), {};
  }
}), zo = F({
  prevIcon: {
    type: fe,
    default: "$prev"
  },
  nextIcon: {
    type: fe,
    default: "$next"
  },
  firstIcon: {
    type: fe,
    default: "$first"
  },
  lastIcon: {
    type: fe,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter"), Da = W()({
  name: "VDataTableFooter",
  props: zo(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Ne(), {
      page: l,
      pageCount: i,
      startIndex: o,
      stopIndex: r,
      itemsLength: s,
      itemsPerPage: c,
      setItemsPerPage: u
    } = tb(), d = w(() => e.itemsPerPageOptions.map((v) => typeof v == "number" ? {
      value: v,
      title: v === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(v)
    } : {
      ...v,
      title: isNaN(Number(v.title)) ? a(v.title) : v.title
    }));
    return G(() => {
      var f;
      const v = Ri.filterProps(e);
      return S("div", {
        class: "v-data-table-footer"
      }, [(f = t.prepend) == null ? void 0 : f.call(t), S("div", {
        class: "v-data-table-footer__items-per-page"
      }, [S("span", {
        "aria-label": a(e.itemsPerPageText)
      }, [a(e.itemsPerPageText)]), k(Oo, {
        items: d.value,
        modelValue: c.value,
        "onUpdate:modelValue": (g) => u(Number(g)),
        density: "compact",
        variant: "outlined",
        hideDetails: !0
      }, null)]), S("div", {
        class: "v-data-table-footer__info"
      }, [S("div", null, [a(e.pageText, s.value ? o.value + 1 : 0, r.value, s.value)])]), S("div", {
        class: "v-data-table-footer__pagination"
      }, [k(Ri, H({
        modelValue: l.value,
        "onUpdate:modelValue": (g) => l.value = g,
        density: "comfortable",
        firstAriaLabel: e.firstPageLabel,
        lastAriaLabel: e.lastPageLabel,
        length: i.value,
        nextAriaLabel: e.nextPageLabel,
        previousAriaLabel: e.prevPageLabel,
        rounded: !0,
        showFirstLastPage: !0,
        totalVisible: e.showCurrentPage ? 1 : 0,
        variant: "plain"
      }, v), null)])]);
    }), {};
  }
}), bl = nf({
  align: {
    type: String,
    default: "start"
  },
  fixed: {
    type: [Boolean, String],
    default: !1
  },
  fixedOffset: [Number, String],
  fixedEndOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  firstFixedEnd: Boolean,
  noPadding: Boolean,
  tag: String,
  width: [Number, String],
  maxWidth: [Number, String],
  nowrap: Boolean
}, (e, n) => {
  let {
    slots: t
  } = n;
  const a = e.tag ?? "td", l = typeof e.fixed == "string" ? e.fixed : e.fixed ? "start" : "none";
  return k(a, {
    class: z(["v-data-table__td", {
      "v-data-table-column--fixed": l === "start",
      "v-data-table-column--fixed-end": l === "end",
      "v-data-table-column--last-fixed": e.lastFixed,
      "v-data-table-column--first-fixed-end": e.firstFixedEnd,
      "v-data-table-column--no-padding": e.noPadding,
      "v-data-table-column--nowrap": e.nowrap
    }, `v-data-table-column--align-${e.align}`]),
    style: {
      height: oe(e.height),
      width: oe(e.width),
      maxWidth: oe(e.maxWidth),
      left: l === "start" ? oe(e.fixedOffset || null) : void 0,
      right: l === "end" ? oe(e.fixedEndOffset || null) : void 0
    }
  }, {
    default: () => {
      var i;
      return [(i = t.default) == null ? void 0 : i.call(t)];
    }
  });
}), vb = F({
  headers: Array
}, "DataTable-header"), Yc = Symbol.for("vuetify:data-table-headers"), Kc = {
  title: "",
  sortable: !1
}, fb = {
  ...Kc,
  width: 48
};
function mb() {
  const n = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((t) => ({
    element: t,
    priority: 0
  }));
  return {
    enqueue: (t, a) => {
      let l = !1;
      for (let i = 0; i < n.length; i++)
        if (n[i].priority > a) {
          n.splice(i, 0, {
            element: t,
            priority: a
          }), l = !0;
          break;
        }
      l || n.push({
        element: t,
        priority: a
      });
    },
    size: () => n.length,
    count: () => {
      let t = 0;
      if (!n.length) return 0;
      const a = Math.floor(n[0].priority);
      for (let l = 0; l < n.length; l++)
        Math.floor(n[l].priority) === a && (t += 1);
      return t;
    },
    dequeue: () => n.shift()
  };
}
function Ni(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children)
    n.push(e);
  else
    for (const t of e.children)
      Ni(t, n);
  return n;
}
function qc(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const t of e)
    t.key && n.add(t.key), t.children && qc(t.children, n);
  return n;
}
function gb(e) {
  if (e.key) {
    if (e.key === "data-table-group") return Kc;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return fb;
  }
}
function Wo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(n, ...e.children.map((t) => Wo(t, n + 1))) : n;
}
function hb(e) {
  let n = !1;
  function t(r, s) {
    var d;
    let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "none";
    if (!r) return;
    c !== "none" && (r.fixed = c), r.fixed === !0 && (r.fixed = "start");
    const u = s === "start" ? (d = r.children) == null ? void 0 : d.toReversed() : r.children;
    if (r.fixed === s)
      if (u)
        for (const v of u)
          t(v, s, s);
      else
        !n && s === "start" ? r.lastFixed = !0 : !n && s === "end" ? r.firstFixedEnd = !0 : isNaN(Number(r.width)) ? Qn(`Multiple fixed columns should have a static width (key: ${r.key})`) : r.minWidth = Math.max(Number(r.width) || 0, Number(r.minWidth) || 0), n = !0;
    else if (u)
      for (const v of u)
        t(v, s);
    else
      n = !1;
  }
  for (const r of e.toReversed())
    t(r, "start");
  for (const r of e)
    t(r, "end");
  function a(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!r) return s;
    if (r.children) {
      r.fixedOffset = s;
      for (const c of r.children)
        s = a(c, s);
    } else r.fixed && r.fixed !== "end" && (r.fixedOffset = s, s += parseFloat(r.width || "0") || 0);
    return s;
  }
  let l = 0;
  for (const r of e)
    l = a(r, l);
  function i(r) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!r) return s;
    if (r.children) {
      r.fixedEndOffset = s;
      for (const c of r.children)
        s = i(c, s);
    } else r.fixed === "end" && (r.fixedEndOffset = s, s += parseFloat(r.width || "0") || 0);
    return s;
  }
  let o = 0;
  for (const r of e.toReversed())
    o = i(r, o);
}
function yb(e, n) {
  const t = [];
  let a = 0;
  const l = mb(e);
  for (; l.size() > 0; ) {
    let o = l.count();
    const r = [];
    let s = 1;
    for (; o > 0; ) {
      const {
        element: c,
        priority: u
      } = l.dequeue(), d = n - a - Wo(c);
      if (r.push({
        ...c,
        rowspan: d ?? 1,
        colspan: c.children ? Ni(c).length : 1
      }), c.children)
        for (const v of c.children) {
          const f = u % 1 + s / Math.pow(10, a + 2);
          l.enqueue(v, a + d + f);
        }
      s += 1, o -= 1;
    }
    a += 1, t.push(r);
  }
  return {
    columns: e.map((o) => Ni(o)).flat(),
    headers: t
  };
}
function Xc(e) {
  const n = [];
  for (const t of e) {
    const a = {
      ...gb(t),
      ...t
    }, l = a.key ?? (typeof a.value == "string" ? a.value : null), i = a.value ?? l ?? null, o = {
      ...a,
      key: l,
      value: i,
      sortable: a.sortable ?? (a.key != null || !!a.sort),
      children: a.children ? Xc(a.children) : void 0
    };
    n.push(o);
  }
  return n;
}
function Uo(e, n) {
  const t = j([]), a = j([]), l = j({}), i = j({}), o = j({});
  je(() => {
    var b, m, y;
    const c = (e.headers || Object.keys(e.items[0] ?? {}).map((h) => ({
      key: h,
      title: na(h)
    }))).slice(), u = qc(c);
    (b = n == null ? void 0 : n.groupBy) != null && b.value.length && !u.has("data-table-group") && c.unshift({
      key: "data-table-group",
      title: "Group"
    }), (m = n == null ? void 0 : n.showSelect) != null && m.value && !u.has("data-table-select") && c.unshift({
      key: "data-table-select"
    }), (y = n == null ? void 0 : n.showExpand) != null && y.value && !u.has("data-table-expand") && c.push({
      key: "data-table-expand"
    });
    const d = Xc(c);
    hb(d);
    const v = Math.max(...d.map((h) => Wo(h))) + 1, f = yb(d, v);
    t.value = f.headers, a.value = f.columns;
    const g = f.headers.flat(1);
    for (const h of g)
      h.key && (h.sortable && (h.sort && (l.value[h.key] = h.sort), h.sortRaw && (i.value[h.key] = h.sortRaw)), h.filter && (o.value[h.key] = h.filter));
  });
  const r = {
    headers: t,
    columns: a,
    sortFunctions: l,
    sortRawFunctions: i,
    filterFunctions: o
  };
  return Re(Yc, r), r;
}
function Gl() {
  const e = Ie(Yc);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const Zc = F({
  color: String,
  disableSort: Boolean,
  fixedHeader: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: fe,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: fe,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  },
  /** @deprecated */
  sticky: Boolean,
  ...Bn(),
  ...Tl()
}, "VDataTableHeaders"), An = W()({
  name: "VDataTableHeaders",
  props: Zc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Ne(), {
      toggleSort: l,
      sortBy: i,
      isSorted: o
    } = Gc(), {
      someSelected: r,
      allSelected: s,
      selectAll: c,
      showSelectAll: u
    } = Wl(), {
      columns: d,
      headers: v
    } = Gl(), {
      loaderClasses: f
    } = Na(e);
    function g(T, A) {
      if (!(e.sticky || e.fixedHeader) && !T.fixed) return;
      const D = typeof T.fixed == "string" ? T.fixed : T.fixed ? "start" : "none";
      return {
        position: "sticky",
        left: D === "start" ? oe(T.fixedOffset) : void 0,
        right: D === "end" ? oe(T.fixedEndOffset) : void 0,
        top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${A})` : void 0
      };
    }
    function b(T, A) {
      T.key === "Enter" && !e.disableSort && l(A);
    }
    function m(T) {
      const A = i.value.find((D) => D.key === T.key);
      return A ? A.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
    }
    const {
      backgroundColorClasses: y,
      backgroundColorStyles: h
    } = Le(() => e.color), {
      displayClasses: C,
      mobile: p
    } = $t(e), _ = w(() => ({
      headers: v.value,
      columns: d.value,
      toggleSort: l,
      isSorted: o,
      sortBy: i.value,
      someSelected: r.value,
      allSelected: s.value,
      selectAll: c,
      getSortIcon: m
    })), P = w(() => ["v-data-table__th", {
      "v-data-table__th--sticky": e.sticky || e.fixedHeader
    }, C.value, f.value]), I = (T) => {
      let {
        column: A,
        x: D,
        y: x
      } = T;
      const B = A.key === "data-table-select" || A.key === "data-table-expand", M = H(e.headerProps ?? {}, A.headerProps ?? {});
      return k(bl, H({
        tag: "th",
        align: A.align,
        class: [{
          "v-data-table__th--sortable": A.sortable && !e.disableSort,
          "v-data-table__th--sorted": o(A),
          "v-data-table__th--fixed": A.fixed
        }, ...P.value],
        style: {
          width: oe(A.width),
          minWidth: oe(A.minWidth),
          maxWidth: oe(A.maxWidth),
          ...g(A, x)
        },
        colspan: A.colspan,
        rowspan: A.rowspan,
        fixed: A.fixed,
        nowrap: A.nowrap,
        lastFixed: A.lastFixed,
        firstFixedEnd: A.firstFixedEnd,
        noPadding: B,
        tabindex: A.sortable ? 0 : void 0,
        onClick: A.sortable ? () => l(A) : void 0,
        onKeydown: A.sortable ? (L) => b(L, A) : void 0
      }, M), {
        default: () => {
          var Y;
          const L = `header.${A.key}`, N = {
            column: A,
            selectAll: c,
            isSorted: o,
            toggleSort: l,
            sortBy: i.value,
            someSelected: r.value,
            allSelected: s.value,
            getSortIcon: m
          };
          return t[L] ? t[L](N) : A.key === "data-table-select" ? ((Y = t["header.data-table-select"]) == null ? void 0 : Y.call(t, N)) ?? (u.value && k(jt, {
            modelValue: s.value,
            indeterminate: r.value && !s.value,
            "onUpdate:modelValue": c
          }, null)) : S("div", {
            class: "v-data-table-header__content"
          }, [S("span", null, [A.title]), A.sortable && !e.disableSort && k(Be, {
            key: "icon",
            class: "v-data-table-header__sort-icon",
            icon: m(A)
          }, null), e.multiSort && o(A) && S("div", {
            key: "badge",
            class: z(["v-data-table-header__sort-badge", ...y.value]),
            style: le(h.value)
          }, [i.value.findIndex((te) => te.key === A.key) + 1])]);
        }
      });
    }, V = () => {
      const T = w(() => d.value.filter((D) => (D == null ? void 0 : D.sortable) && !e.disableSort)), A = w(() => {
        if (d.value.find((x) => x.key === "data-table-select") != null)
          return s.value ? "$checkboxOn" : r.value ? "$checkboxIndeterminate" : "$checkboxOff";
      });
      return k(bl, H({
        tag: "th",
        class: [...P.value],
        colspan: v.value.length + 1
      }, e.headerProps), {
        default: () => [S("div", {
          class: "v-data-table-header__content"
        }, [k(Oo, {
          chips: !0,
          class: "v-data-table__td-sort-select",
          clearable: !0,
          density: "default",
          items: T.value,
          label: a("$vuetify.dataTable.sortBy"),
          multiple: e.multiSort,
          variant: "underlined",
          "onClick:clear": () => i.value = [],
          appendIcon: A.value,
          "onClick:append": () => c(!s.value)
        }, {
          ...t,
          chip: (D) => {
            var x;
            return k(ua, {
              onClick: (x = D.item.raw) != null && x.sortable ? () => l(D.item.raw) : void 0,
              onMousedown: (B) => {
                B.preventDefault(), B.stopPropagation();
              }
            }, {
              default: () => [D.item.title, k(Be, {
                class: z(["v-data-table__td-sort-icon", o(D.item.raw) && "v-data-table__td-sort-icon-active"]),
                icon: m(D.item.raw),
                size: "small"
              }, null)]
            });
          }
        })])]
      });
    };
    G(() => p.value ? S("tr", null, [k(V, null, null)]) : S(ue, null, [t.headers ? t.headers(_.value) : v.value.map((T, A) => S("tr", null, [T.map((D, x) => k(I, {
      column: D,
      x,
      y: A
    }, null))])), e.loading && S("tr", {
      class: "v-data-table-progress"
    }, [S("th", {
      colspan: d.value.length
    }, [k(Ha, {
      name: "v-data-table-progress",
      absolute: !0,
      active: !0,
      color: typeof e.loading == "boolean" ? void 0 : e.loading,
      indeterminate: !0
    }, {
      default: t.loader
    })])])]));
  }
}), bb = F({
  item: {
    type: Object,
    required: !0
  }
}, "VDataTableGroupHeaderRow"), kb = W()({
  name: "VDataTableGroupHeaderRow",
  props: bb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isGroupOpen: a,
      toggleGroup: l,
      extractRows: i
    } = Lc(), {
      isSelected: o,
      isSomeSelected: r,
      select: s
    } = Wl(), {
      columns: c
    } = Gl(), u = w(() => i([e.item]));
    return () => S("tr", {
      class: "v-data-table-group-header-row",
      style: {
        "--v-data-table-group-header-row-depth": e.item.depth
      }
    }, [c.value.map((d) => {
      var v, f;
      if (d.key === "data-table-group") {
        const g = a(e.item) ? "$expand" : "$next", b = () => l(e.item);
        return ((v = t["data-table-group"]) == null ? void 0 : v.call(t, {
          item: e.item,
          count: u.value.length,
          props: {
            icon: g,
            onClick: b
          }
        })) ?? k(bl, {
          class: "v-data-table-group-header-row__column"
        }, {
          default: () => [k(xe, {
            size: "small",
            variant: "text",
            icon: g,
            onClick: b
          }, null), S("span", null, [e.item.value]), S("span", null, [mt("("), u.value.length, mt(")")])]
        });
      }
      if (d.key === "data-table-select") {
        const g = o(u.value), b = r(u.value) && !g, m = (y) => s(u.value, y);
        return ((f = t["data-table-select"]) == null ? void 0 : f.call(t, {
          props: {
            modelValue: g,
            indeterminate: b,
            "onUpdate:modelValue": m
          }
        })) ?? S("td", null, [k(jt, {
          modelValue: g,
          indeterminate: b,
          "onUpdate:modelValue": m
        }, null)]);
      }
      return S("td", null, null);
    })]);
  }
}), Sb = F({
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  onClick: dt(),
  onContextmenu: dt(),
  onDblclick: dt(),
  ...Bn()
}, "VDataTableRow"), jo = W()({
  name: "VDataTableRow",
  props: Sb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      displayClasses: a,
      mobile: l
    } = $t(e, "v-data-table__tr"), {
      isSelected: i,
      toggleSelect: o,
      someSelected: r,
      allSelected: s,
      selectAll: c
    } = Wl(), {
      isExpanded: u,
      toggleExpand: d
    } = Oc(), {
      toggleSort: v,
      sortBy: f,
      isSorted: g
    } = Gc(), {
      columns: b
    } = Gl();
    G(() => S("tr", {
      class: z(["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick)
      }, a.value]),
      onClick: e.onClick,
      onContextmenu: e.onContextmenu,
      onDblclick: e.onDblclick
    }, [e.item && b.value.map((m, y) => {
      const h = e.item, C = `item.${m.key}`, p = `header.${m.key}`, _ = {
        index: e.index,
        item: h.raw,
        internalItem: h,
        value: Vn(h.columns, m.key),
        column: m,
        isSelected: i,
        toggleSelect: o,
        isExpanded: u,
        toggleExpand: d
      }, P = {
        column: m,
        selectAll: c,
        isSorted: g,
        toggleSort: v,
        sortBy: f.value,
        someSelected: r.value,
        allSelected: s.value,
        getSortIcon: () => ""
      }, I = typeof e.cellProps == "function" ? e.cellProps({
        index: _.index,
        item: _.item,
        internalItem: _.internalItem,
        value: _.value,
        column: m
      }) : e.cellProps, V = typeof m.cellProps == "function" ? m.cellProps({
        index: _.index,
        item: _.item,
        internalItem: _.internalItem,
        value: _.value
      }) : m.cellProps;
      return k(bl, H({
        align: m.align,
        class: {
          "v-data-table__td--expanded-row": m.key === "data-table-expand",
          "v-data-table__td--select-row": m.key === "data-table-select"
        },
        fixed: m.fixed,
        fixedOffset: m.fixedOffset,
        fixedEndOffset: m.fixedEndOffset,
        lastFixed: m.lastFixed,
        firstFixedEnd: m.firstFixedEnd,
        maxWidth: l.value ? void 0 : m.maxWidth,
        noPadding: m.key === "data-table-select" || m.key === "data-table-expand",
        nowrap: m.nowrap,
        width: l.value ? void 0 : m.width
      }, I, V), {
        default: () => {
          var A, D, x, B;
          if (m.key === "data-table-select")
            return ((A = t["item.data-table-select"]) == null ? void 0 : A.call(t, {
              ..._,
              props: {
                disabled: !h.selectable,
                modelValue: i([h]),
                onClick: Xt(() => o(h), ["stop"])
              }
            })) ?? k(jt, {
              disabled: !h.selectable,
              modelValue: i([h]),
              onClick: Xt((M) => o(h, e.index, M), ["stop"])
            }, null);
          if (m.key === "data-table-expand")
            return ((D = t["item.data-table-expand"]) == null ? void 0 : D.call(t, {
              ..._,
              props: {
                icon: u(h) ? "$collapse" : "$expand",
                size: "small",
                variant: "text",
                onClick: Xt(() => d(h), ["stop"])
              }
            })) ?? k(xe, {
              icon: u(h) ? "$collapse" : "$expand",
              size: "small",
              variant: "text",
              onClick: Xt(() => d(h), ["stop"])
            }, null);
          if (t[C] && !l.value) return t[C](_);
          const T = tt(_.value);
          return l.value ? S(ue, null, [S("div", {
            class: "v-data-table__td-title"
          }, [((x = t[p]) == null ? void 0 : x.call(t, P)) ?? m.title]), S("div", {
            class: "v-data-table__td-value"
          }, [((B = t[C]) == null ? void 0 : B.call(t, _)) ?? T])]) : T;
        }
      });
    })]));
  }
}), Qc = F({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  ...Bn()
}, "VDataTableRows"), Tn = W()({
  name: "VDataTableRows",
  inheritAttrs: !1,
  props: Qc(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      columns: l
    } = Gl(), {
      expandOnClick: i,
      toggleExpand: o,
      isExpanded: r
    } = Oc(), {
      isSelected: s,
      toggleSelect: c
    } = Wl(), {
      toggleGroup: u,
      isGroupOpen: d
    } = Lc(), {
      t: v
    } = Ne(), {
      mobile: f
    } = $t(e);
    return G(() => {
      var g, b;
      return e.loading && (!e.items.length || a.loading) ? S("tr", {
        class: "v-data-table-rows-loading",
        key: "loading"
      }, [S("td", {
        colspan: l.value.length
      }, [((g = a.loading) == null ? void 0 : g.call(a)) ?? v(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? S("tr", {
        class: "v-data-table-rows-no-data",
        key: "no-data"
      }, [S("td", {
        colspan: l.value.length
      }, [((b = a["no-data"]) == null ? void 0 : b.call(a)) ?? v(e.noDataText)])]) : S(ue, null, [e.items.map((m, y) => {
        var p;
        if (m.type === "group") {
          const _ = {
            index: y,
            item: m,
            columns: l.value,
            isExpanded: r,
            toggleExpand: o,
            isSelected: s,
            toggleSelect: c,
            toggleGroup: u,
            isGroupOpen: d
          };
          return a["group-header"] ? a["group-header"](_) : k(kb, H({
            key: `group-header_${m.id}`,
            item: m
          }, Pr(t, ":group-header", () => _)), a);
        }
        const h = {
          index: y,
          item: m.raw,
          internalItem: m,
          columns: l.value,
          isExpanded: r,
          toggleExpand: o,
          isSelected: s,
          toggleSelect: c
        }, C = {
          ...h,
          props: H({
            key: `item_${m.key ?? m.index}`,
            onClick: i.value ? () => {
              o(m);
            } : void 0,
            index: y,
            item: m,
            cellProps: e.cellProps,
            mobile: f.value
          }, Pr(t, ":row", () => h), typeof e.rowProps == "function" ? e.rowProps({
            item: h.item,
            index: h.index,
            internalItem: h.internalItem
          }) : e.rowProps)
        };
        return S(ue, {
          key: C.props.key
        }, [a.item ? a.item(C) : k(jo, C.props, a), r(m) && ((p = a["expanded-row"]) == null ? void 0 : p.call(a, h))]);
      })]);
    }), {};
  }
}), Jc = F({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  striped: {
    type: String,
    default: null,
    validator: (e) => ["even", "odd"].includes(e)
  },
  ...se(),
  ...it(),
  ...ke(),
  ...Ae()
}, "VTable"), Dn = W()({
  name: "VTable",
  props: Jc(),
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const {
      themeClasses: l
    } = Ee(e), {
      densityClasses: i
    } = wt(e);
    return G(() => k(e.tag, {
      class: z(["v-table", {
        "v-table--fixed-height": !!e.height,
        "v-table--fixed-header": e.fixedHeader,
        "v-table--fixed-footer": e.fixedFooter,
        "v-table--has-top": !!t.top,
        "v-table--has-bottom": !!t.bottom,
        "v-table--hover": e.hover,
        "v-table--striped-even": e.striped === "even",
        "v-table--striped-odd": e.striped === "odd"
      }, l.value, i.value, e.class]),
      style: le(e.style)
    }, {
      default: () => {
        var o, r, s;
        return [(o = t.top) == null ? void 0 : o.call(t), t.default ? S("div", {
          class: "v-table__wrapper",
          style: {
            height: oe(e.height)
          }
        }, [S("table", null, [t.default()])]) : (r = t.wrapper) == null ? void 0 : r.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
      }
    })), {};
  }
}), wb = F({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  returnObject: Boolean
}, "DataTable-items");
function Cb(e, n, t, a) {
  const l = e.returnObject ? n : Qe(n, e.itemValue), i = Qe(n, e.itemSelectable, !0), o = a.reduce((r, s) => (s.key != null && (r[s.key] = Qe(n, s.value)), r), {});
  return {
    type: "item",
    key: e.returnObject ? Qe(n, e.itemValue) : l,
    index: t,
    value: l,
    selectable: i,
    columns: o,
    raw: n
  };
}
function xb(e, n, t) {
  return n.map((a, l) => Cb(e, a, l, t));
}
function Go(e, n) {
  return {
    items: w(() => xb(e, e.items, n.value))
  };
}
const Yo = F({
  ...Qc(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...Dc(),
  ...$o(),
  ...vb(),
  ...wb(),
  ...zc(),
  ...Uc(),
  ...Zc(),
  ...Jc()
}, "DataTable"), Vb = F({
  ...Fo(),
  ...Yo(),
  ...da(),
  ...zo()
}, "VDataTable"), pb = W()({
  name: "VDataTable",
  props: Vb(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Mo(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = Ul(e), {
      page: s,
      itemsPerPage: c
    } = Ro(e), {
      disableSort: u
    } = aa(e), {
      columns: d,
      headers: v,
      sortFunctions: f,
      sortRawFunctions: g,
      filterFunctions: b
    } = Uo(e, {
      groupBy: l,
      showSelect: E(() => e.showSelect),
      showExpand: E(() => e.showExpand)
    }), {
      items: m
    } = Go(e, d), y = E(() => e.search), {
      filteredItems: h
    } = va(e, m, y, {
      transform: (X) => X.columns,
      customKeyFilter: b
    }), {
      toggleSort: C
    } = jl({
      sortBy: i,
      multiSort: o,
      mustSort: r,
      page: s
    }), {
      sortByWithGroups: p,
      opened: _,
      extractRows: P,
      isGroupOpen: I,
      toggleGroup: V
    } = Rl({
      groupBy: l,
      sortBy: i,
      disableSort: u
    }), {
      sortedItems: T
    } = Ho(e, h, p, {
      transform: (X) => ({
        ...X.raw,
        ...X.columns
      }),
      sortFunctions: f,
      sortRawFunctions: g
    }), {
      flatItems: A
    } = Nl(T, l, _), D = w(() => A.value.length), {
      startIndex: x,
      stopIndex: B,
      pageCount: M,
      setItemsPerPage: L
    } = No({
      page: s,
      itemsPerPage: c,
      itemsLength: D
    }), {
      paginatedItems: N
    } = Rc({
      items: A,
      startIndex: x,
      stopIndex: B,
      itemsPerPage: c
    }), Y = w(() => P(N.value)), {
      isSelected: te,
      select: q,
      selectAll: $,
      toggleSelect: O,
      someSelected: R,
      allSelected: U
    } = zl(e, {
      allItems: m,
      currentPage: Y
    }), {
      isExpanded: ce,
      toggleExpand: ne
    } = Fl(e);
    Hl({
      page: s,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: y
    }), Ge({
      VDataTableRows: {
        hideNoData: E(() => e.hideNoData),
        noDataText: E(() => e.noDataText),
        loading: E(() => e.loading),
        loadingText: E(() => e.loadingText)
      }
    });
    const Q = w(() => ({
      page: s.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: M.value,
      toggleSort: C,
      setItemsPerPage: L,
      someSelected: R.value,
      allSelected: U.value,
      isSelected: te,
      select: q,
      selectAll: $,
      toggleSelect: O,
      isExpanded: ce,
      toggleExpand: ne,
      isGroupOpen: I,
      toggleGroup: V,
      items: Y.value.map((X) => X.raw),
      internalItems: Y.value,
      groupedItems: N.value,
      columns: d.value,
      headers: v.value
    }));
    return G(() => {
      const X = Da.filterProps(e), ve = An.filterProps(e), ge = Tn.filterProps(e), J = Dn.filterProps(e);
      return k(Dn, H({
        class: ["v-data-table", {
          "v-data-table--show-select": e.showSelect,
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, J, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => {
          var ie;
          return (ie = a.top) == null ? void 0 : ie.call(a, Q.value);
        },
        default: () => {
          var ie, K, Z, me, he, pe;
          return a.default ? a.default(Q.value) : S(ue, null, [(ie = a.colgroup) == null ? void 0 : ie.call(a, Q.value), !e.hideDefaultHeader && S("thead", {
            key: "thead"
          }, [k(An, ve, a)]), (K = a.thead) == null ? void 0 : K.call(a, Q.value), !e.hideDefaultBody && S("tbody", null, [(Z = a["body.prepend"]) == null ? void 0 : Z.call(a, Q.value), a.body ? a.body(Q.value) : k(Tn, H(t, ge, {
            items: N.value
          }), a), (me = a["body.append"]) == null ? void 0 : me.call(a, Q.value)]), (he = a.tbody) == null ? void 0 : he.call(a, Q.value), (pe = a.tfoot) == null ? void 0 : pe.call(a, Q.value)]);
        },
        bottom: () => a.bottom ? a.bottom(Q.value) : !e.hideDefaultFooter && S(ue, null, [k(At, null, null), k(Da, X, {
          prepend: a["footer.prepend"]
        })])
      });
    }), {};
  }
}), Pb = F({
  ...Fe(Yo(), ["hideDefaultFooter"]),
  ...$o(),
  ...sc(),
  ...da()
}, "VDataTableVirtual"), _b = W()({
  name: "VDataTableVirtual",
  props: Pb(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Mo(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = Ul(e), {
      disableSort: s
    } = aa(e), {
      columns: c,
      headers: u,
      filterFunctions: d,
      sortFunctions: v,
      sortRawFunctions: f
    } = Uo(e, {
      groupBy: l,
      showSelect: E(() => e.showSelect),
      showExpand: E(() => e.showExpand)
    }), {
      items: g
    } = Go(e, c), b = E(() => e.search), {
      filteredItems: m
    } = va(e, g, b, {
      transform: (J) => J.columns,
      customKeyFilter: d
    }), {
      toggleSort: y
    } = jl({
      sortBy: i,
      multiSort: o,
      mustSort: r
    }), {
      sortByWithGroups: h,
      opened: C,
      extractRows: p,
      isGroupOpen: _,
      toggleGroup: P
    } = Rl({
      groupBy: l,
      sortBy: i,
      disableSort: s
    }), {
      sortedItems: I
    } = Ho(e, m, h, {
      transform: (J) => ({
        ...J.raw,
        ...J.columns
      }),
      sortFunctions: v,
      sortRawFunctions: f
    }), {
      flatItems: V
    } = Nl(I, l, C), T = w(() => p(V.value)), {
      isSelected: A,
      select: D,
      selectAll: x,
      toggleSelect: B,
      someSelected: M,
      allSelected: L
    } = zl(e, {
      allItems: T,
      currentPage: T
    }), {
      isExpanded: N,
      toggleExpand: Y
    } = Fl(e), {
      containerRef: te,
      markerRef: q,
      paddingTop: $,
      paddingBottom: O,
      computedItems: R,
      handleItemResize: U,
      handleScroll: ce,
      handleScrollend: ne,
      calculateVisibleItems: Q,
      scrollToIndex: X
    } = uc(e, V), ve = w(() => R.value.map((J) => J.raw));
    Hl({
      sortBy: i,
      page: ee(1),
      itemsPerPage: ee(-1),
      groupBy: l,
      search: b
    }), Ge({
      VDataTableRows: {
        hideNoData: E(() => e.hideNoData),
        noDataText: E(() => e.noDataText),
        loading: E(() => e.loading),
        loadingText: E(() => e.loadingText)
      }
    });
    const ge = w(() => ({
      sortBy: i.value,
      toggleSort: y,
      someSelected: M.value,
      allSelected: L.value,
      isSelected: A,
      select: D,
      selectAll: x,
      toggleSelect: B,
      isExpanded: N,
      toggleExpand: Y,
      isGroupOpen: _,
      toggleGroup: P,
      items: T.value.map((J) => J.raw),
      internalItems: T.value,
      groupedItems: V.value,
      columns: c.value,
      headers: u.value
    }));
    return G(() => {
      const J = An.filterProps(e), ie = Tn.filterProps(e), K = Dn.filterProps(e);
      return k(Dn, H({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, K, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => {
          var Z;
          return (Z = a.top) == null ? void 0 : Z.call(a, ge.value);
        },
        wrapper: () => {
          var Z, me, he, pe, Ce, Te;
          return S("div", {
            ref: te,
            onScrollPassive: ce,
            onScrollend: ne,
            class: "v-table__wrapper",
            style: {
              height: oe(e.height)
            }
          }, [S("table", null, [(Z = a.colgroup) == null ? void 0 : Z.call(a, ge.value), !e.hideDefaultHeader && S("thead", {
            key: "thead"
          }, [k(An, J, a)]), (me = a.thead) == null ? void 0 : me.call(a, ge.value), !e.hideDefaultBody && S("tbody", {
            key: "tbody"
          }, [S("tr", {
            ref: q,
            style: {
              height: oe($.value),
              border: 0
            }
          }, [S("td", {
            colspan: c.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)]), (he = a["body.prepend"]) == null ? void 0 : he.call(a, ge.value), k(Tn, H(t, ie, {
            items: ve.value
          }), {
            ...a,
            item: (ye) => k(rc, {
              key: ye.internalItem.index,
              renderless: !0,
              "onUpdate:height": (ot) => U(ye.internalItem.index, ot)
            }, {
              default: (ot) => {
                var ln;
                let {
                  itemRef: rt
                } = ot;
                return ((ln = a.item) == null ? void 0 : ln.call(a, {
                  ...ye,
                  itemRef: rt
                })) ?? k(jo, H(ye.props, {
                  ref: rt,
                  key: ye.internalItem.index,
                  index: ye.internalItem.index
                }), a);
              }
            })
          }), (pe = a["body.append"]) == null ? void 0 : pe.call(a, ge.value), S("tr", {
            style: {
              height: oe(O.value),
              border: 0
            }
          }, [S("td", {
            colspan: c.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)])]), (Ce = a.tbody) == null ? void 0 : Ce.call(a, ge.value), (Te = a.tfoot) == null ? void 0 : Te.call(a, ge.value)])]);
        },
        bottom: () => {
          var Z;
          return (Z = a.bottom) == null ? void 0 : Z.call(a, ge.value);
        }
      });
    }), {
      calculateVisibleItems: Q,
      scrollToIndex: X
    };
  }
}), Ib = F({
  itemsLength: {
    type: [Number, String],
    required: !0
  },
  ...Fo(),
  ...Yo(),
  ...zo()
}, "VDataTableServer"), Ab = W()({
  name: "VDataTableServer",
  props: Ib(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:groupBy": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Mo(e), {
      sortBy: i,
      multiSort: o,
      mustSort: r
    } = Ul(e), {
      page: s,
      itemsPerPage: c
    } = Ro(e), {
      disableSort: u
    } = aa(e), d = w(() => parseInt(e.itemsLength, 10)), {
      columns: v,
      headers: f
    } = Uo(e, {
      groupBy: l,
      showSelect: E(() => e.showSelect),
      showExpand: E(() => e.showExpand)
    }), {
      items: g
    } = Go(e, v), {
      toggleSort: b
    } = jl({
      sortBy: i,
      multiSort: o,
      mustSort: r,
      page: s
    }), {
      opened: m,
      isGroupOpen: y,
      toggleGroup: h,
      extractRows: C
    } = Rl({
      groupBy: l,
      sortBy: i,
      disableSort: u
    }), {
      pageCount: p,
      setItemsPerPage: _
    } = No({
      page: s,
      itemsPerPage: c,
      itemsLength: d
    }), {
      flatItems: P
    } = Nl(g, l, m), {
      isSelected: I,
      select: V,
      selectAll: T,
      toggleSelect: A,
      someSelected: D,
      allSelected: x
    } = zl(e, {
      allItems: g,
      currentPage: g
    }), {
      isExpanded: B,
      toggleExpand: M
    } = Fl(e), L = w(() => C(g.value));
    Hl({
      page: s,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: E(() => e.search)
    }), Re("v-data-table", {
      toggleSort: b,
      sortBy: i
    }), Ge({
      VDataTableRows: {
        hideNoData: E(() => e.hideNoData),
        noDataText: E(() => e.noDataText),
        loading: E(() => e.loading),
        loadingText: E(() => e.loadingText)
      }
    });
    const N = w(() => ({
      page: s.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: p.value,
      toggleSort: b,
      setItemsPerPage: _,
      someSelected: D.value,
      allSelected: x.value,
      isSelected: I,
      select: V,
      selectAll: T,
      toggleSelect: A,
      isExpanded: B,
      toggleExpand: M,
      isGroupOpen: y,
      toggleGroup: h,
      items: L.value.map((Y) => Y.raw),
      internalItems: L.value,
      groupedItems: P.value,
      columns: v.value,
      headers: f.value
    }));
    G(() => {
      const Y = Da.filterProps(e), te = An.filterProps(e), q = Tn.filterProps(e), $ = Dn.filterProps(e);
      return k(Dn, H({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, $, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => {
          var O;
          return (O = a.top) == null ? void 0 : O.call(a, N.value);
        },
        default: () => {
          var O, R, U, ce, ne, Q;
          return a.default ? a.default(N.value) : S(ue, null, [(O = a.colgroup) == null ? void 0 : O.call(a, N.value), !e.hideDefaultHeader && S("thead", {
            key: "thead",
            class: "v-data-table__thead",
            role: "rowgroup"
          }, [k(An, te, a)]), (R = a.thead) == null ? void 0 : R.call(a, N.value), !e.hideDefaultBody && S("tbody", {
            class: "v-data-table__tbody",
            role: "rowgroup"
          }, [(U = a["body.prepend"]) == null ? void 0 : U.call(a, N.value), a.body ? a.body(N.value) : k(Tn, H(t, q, {
            items: P.value
          }), a), (ce = a["body.append"]) == null ? void 0 : ce.call(a, N.value)]), (ne = a.tbody) == null ? void 0 : ne.call(a, N.value), (Q = a.tfoot) == null ? void 0 : Q.call(a, N.value)]);
        },
        bottom: () => a.bottom ? a.bottom(N.value) : !e.hideDefaultFooter && S(ue, null, [k(At, null, null), k(Da, Y, {
          prepend: a["footer.prepend"]
        })])
      });
    });
  }
}), Tb = F({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...se(),
  ...Je(),
  ...ke()
}, "VContainer"), Db = W()({
  name: "VContainer",
  props: Tb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: a
    } = nt(), {
      dimensionStyles: l
    } = et(e);
    return G(() => k(e.tag, {
      class: z(["v-container", {
        "v-container--fluid": e.fluid
      }, a.value, e.class]),
      style: le([l.value, e.style])
    }, t)), {};
  }
}), ed = pl.reduce((e, n) => (e[n] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), td = pl.reduce((e, n) => {
  const t = "offset" + na(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), nd = pl.reduce((e, n) => {
  const t = "order" + na(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Qr = {
  col: Object.keys(ed),
  offset: Object.keys(td),
  order: Object.keys(nd)
};
function Bb(e, n, t) {
  let a = e;
  if (!(t == null || t === !1)) {
    if (n) {
      const l = n.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (t === "" || t === !0) || (a += `-${t}`), a.toLowerCase();
  }
}
const Ob = ["auto", "start", "end", "center", "baseline", "stretch"], Eb = F({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...ed,
  offset: {
    type: [String, Number],
    default: null
  },
  ...td,
  order: {
    type: [String, Number],
    default: null
  },
  ...nd,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => Ob.includes(e)
  },
  ...se(),
  ...ke()
}, "VCol"), Lb = W()({
  name: "VCol",
  props: Eb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = w(() => {
      const l = [];
      let i;
      for (i in Qr)
        Qr[i].forEach((r) => {
          const s = e[r], c = Bb(i, r, s);
          c && l.push(c);
        });
      const o = l.some((r) => r.startsWith("v-col-"));
      return l.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !o || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), l;
    });
    return () => {
      var l;
      return cn(e.tag, {
        class: [a.value, e.class],
        style: e.style
      }, (l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), Ko = ["start", "end", "center"], ad = ["space-between", "space-around", "space-evenly"];
function qo(e, n) {
  return pl.reduce((t, a) => {
    const l = e + na(a);
    return t[l] = n(), t;
  }, {});
}
const $b = [...Ko, "baseline", "stretch"], ld = (e) => $b.includes(e), id = qo("align", () => ({
  type: String,
  default: null,
  validator: ld
})), Mb = [...Ko, ...ad], od = (e) => Mb.includes(e), rd = qo("justify", () => ({
  type: String,
  default: null,
  validator: od
})), Fb = [...Ko, ...ad, "stretch"], sd = (e) => Fb.includes(e), ud = qo("alignContent", () => ({
  type: String,
  default: null,
  validator: sd
})), Jr = {
  align: Object.keys(id),
  justify: Object.keys(rd),
  alignContent: Object.keys(ud)
}, Rb = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function Nb(e, n, t) {
  let a = Rb[e];
  if (t != null) {
    if (n) {
      const l = n.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${t}`, a.toLowerCase();
  }
}
const Hb = F({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: ld
  },
  ...id,
  justify: {
    type: String,
    default: null,
    validator: od
  },
  ...rd,
  alignContent: {
    type: String,
    default: null,
    validator: sd
  },
  ...ud,
  ...se(),
  ...ke()
}, "VRow"), zb = W()({
  name: "VRow",
  props: Hb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = w(() => {
      const l = [];
      let i;
      for (i in Jr)
        Jr[i].forEach((o) => {
          const r = e[o], s = Nb(i, o, r);
          s && l.push(s);
        });
      return l.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), l;
    });
    return () => {
      var l;
      return cn(e.tag, {
        class: ["v-row", a.value, e.class],
        style: e.style
      }, (l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), cd = en("v-spacer", "div", "VSpacer"), dd = F({
  active: {
    type: [String, Array],
    default: void 0
  },
  controlHeight: [Number, String],
  disabled: {
    type: [Boolean, String, Array],
    default: null
  },
  nextIcon: {
    type: fe,
    default: "$next"
  },
  prevIcon: {
    type: fe,
    default: "$prev"
  },
  modeIcon: {
    type: fe,
    default: "$subgroup"
  },
  text: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls"), Hi = W()({
  name: "VDatePickerControls",
  props: dd(),
  emits: {
    "click:year": () => !0,
    "click:month": () => !0,
    "click:prev": () => !0,
    "click:next": () => !0,
    "click:text": () => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = w(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), l = w(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), i = w(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), o = w(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
    function r() {
      t("click:prev");
    }
    function s() {
      t("click:next");
    }
    function c() {
      t("click:year");
    }
    function u() {
      t("click:month");
    }
    return G(() => S("div", {
      class: z(["v-date-picker-controls"]),
      style: {
        "--v-date-picker-controls-height": oe(e.controlHeight)
      }
    }, [k(xe, {
      class: "v-date-picker-controls__month-btn",
      "data-testid": "month-btn",
      disabled: a.value,
      text: e.text,
      variant: "text",
      rounded: !0,
      onClick: u
    }, null), k(xe, {
      class: "v-date-picker-controls__mode-btn",
      "data-testid": "year-btn",
      disabled: l.value,
      density: "comfortable",
      icon: e.modeIcon,
      variant: "text",
      onClick: c
    }, null), k(cd, null, null), S("div", {
      class: "v-date-picker-controls__month"
    }, [k(xe, {
      "data-testid": "prev-month",
      disabled: i.value,
      density: "comfortable",
      icon: e.prevIcon,
      variant: "text",
      onClick: r
    }, null), k(xe, {
      "data-testid": "next-month",
      disabled: o.value,
      icon: e.nextIcon,
      density: "comfortable",
      variant: "text",
      onClick: s
    }, null)])])), {};
  }
}), Wb = F({
  appendIcon: fe,
  color: String,
  header: String,
  transition: String,
  onClick: dt()
}, "VDatePickerHeader"), zi = W()({
  name: "VDatePickerHeader",
  props: Wb(),
  emits: {
    click: () => !0,
    "click:append": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Le(() => e.color);
    function o() {
      t("click");
    }
    function r() {
      t("click:append");
    }
    return G(() => {
      const s = !!(a.default || e.header), c = !!(a.append || e.appendIcon);
      return S("div", {
        class: z(["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, l.value]),
        style: le(i.value),
        onClick: o
      }, [a.prepend && S("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [a.prepend()]), s && k(yt, {
        key: "content",
        name: e.transition
      }, {
        default: () => {
          var u;
          return [S("div", {
            key: e.header,
            class: "v-date-picker-header__content"
          }, [((u = a.default) == null ? void 0 : u.call(a)) ?? e.header])];
        }
      }), c && S("div", {
        class: "v-date-picker-header__append"
      }, [a.append ? k(we, {
        key: "append-defaults",
        disabled: !e.appendIcon,
        defaults: {
          VBtn: {
            icon: e.appendIcon,
            variant: "text"
          }
        }
      }, {
        default: () => {
          var u;
          return [(u = a.append) == null ? void 0 : u.call(a)];
        }
      }) : k(xe, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: r
      }, null)])]);
    }), {};
  }
}), Ub = F({
  allowedDates: [Array, Function],
  disabled: {
    type: Boolean,
    default: null
  },
  displayValue: null,
  modelValue: Array,
  month: [Number, String],
  max: null,
  min: null,
  showAdjacentMonths: Boolean,
  year: [Number, String],
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  weeksInMonth: {
    type: String,
    default: "dynamic"
  },
  firstDayOfWeek: {
    type: [Number, String],
    default: void 0
  },
  weekdayFormat: String
}, "calendar");
function jb(e) {
  const n = Fa(), t = de(e, "modelValue", [], (f) => Ue(f).map((g) => n.date(g))), a = w(() => e.displayValue ? n.date(e.displayValue) : t.value.length > 0 ? n.date(t.value[0]) : e.min ? n.date(e.min) : Array.isArray(e.allowedDates) ? n.date(e.allowedDates[0]) : n.date()), l = de(e, "year", void 0, (f) => {
    const g = f != null ? Number(f) : n.getYear(a.value);
    return n.startOfYear(n.setYear(n.date(), g));
  }, (f) => n.getYear(f)), i = de(e, "month", void 0, (f) => {
    const g = f != null ? Number(f) : n.getMonth(a.value), b = n.setYear(n.startOfMonth(n.date()), n.getYear(l.value));
    return n.setMonth(b, g);
  }, (f) => n.getMonth(f)), o = w(() => {
    const f = n.toJsDate(n.startOfWeek(n.date(), e.firstDayOfWeek)).getDay();
    return n.getWeekdays(e.firstDayOfWeek, e.weekdayFormat).filter((g, b) => e.weekdays.includes((b + f) % 7));
  }), r = w(() => {
    const f = n.getWeekArray(i.value, e.firstDayOfWeek), g = f.flat(), b = 6 * 7;
    if (e.weeksInMonth === "static" && g.length < b) {
      const m = g[g.length - 1];
      let y = [];
      for (let h = 1; h <= b - g.length; h++)
        y.push(n.addDays(m, h)), h % 7 === 0 && (f.push(y), y = []);
    }
    return f;
  });
  function s(f, g) {
    return f.filter((b) => e.weekdays.includes(n.toJsDate(b).getDay())).map((b, m) => {
      const y = n.toISO(b), h = !n.isSameMonth(b, i.value), C = n.isSameDay(b, n.startOfMonth(i.value)), p = n.isSameDay(b, n.endOfMonth(i.value)), _ = n.isSameDay(b, i.value), P = e.weekdays.length;
      return {
        date: b,
        formatted: n.format(b, "keyboardDate"),
        isAdjacent: h,
        isDisabled: v(b),
        isEnd: p,
        isHidden: h && !e.showAdjacentMonths,
        isSame: _,
        isSelected: t.value.some((I) => n.isSameDay(b, I)),
        isStart: C,
        isToday: n.isSameDay(b, g),
        isWeekEnd: m % P === P - 1,
        isWeekStart: m % P === 0,
        isoDate: y,
        localized: n.format(b, "dayOfMonth"),
        month: n.getMonth(b),
        year: n.getYear(b)
      };
    });
  }
  const c = w(() => {
    const f = n.startOfWeek(a.value, e.firstDayOfWeek), g = [];
    for (let m = 0; m <= 6; m++)
      g.push(n.addDays(f, m));
    const b = n.date();
    return s(g, b);
  }), u = w(() => {
    const f = r.value.flat(), g = n.date();
    return s(f, g);
  }), d = w(() => r.value.map((f) => f.length ? n.getWeek(f[0], e.firstDayOfWeek) : null));
  function v(f) {
    if (e.disabled) return !0;
    const g = n.date(f);
    return e.min && n.isBefore(n.endOfDay(g), n.date(e.min)) || e.max && n.isAfter(g, n.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((b) => n.isSameDay(n.date(b), g)) : typeof e.allowedDates == "function" ? !e.allowedDates(g) : !1;
  }
  return {
    displayValue: a,
    daysInMonth: u,
    daysInWeek: c,
    genDays: s,
    model: t,
    weeksInMonth: r,
    weekdayLabels: o,
    weekNumbers: d
  };
}
const vd = F({
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String],
  showWeek: Boolean,
  transition: {
    type: String,
    default: "picker-transition"
  },
  reverseTransition: {
    type: String,
    default: "picker-reverse-transition"
  },
  ...Fe(Ub(), ["displayValue"])
}, "VDatePickerMonth"), Wi = W()({
  name: "VDatePickerMonth",
  props: vd(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = j(), {
      daysInMonth: i,
      model: o,
      weekNumbers: r,
      weekdayLabels: s
    } = jb(e), c = Fa(), u = ee(), d = ee(), v = ee(!1), f = E(() => v.value ? e.reverseTransition : e.transition);
    e.multiple === "range" && o.value.length > 0 && (u.value = o.value[0], o.value.length > 1 && (d.value = o.value[o.value.length - 1]));
    const g = w(() => {
      const h = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return o.value.length >= h;
    });
    ae(i, (h, C) => {
      C && (v.value = c.isBefore(h[0].date, C[0].date));
    });
    function b(h) {
      const C = c.startOfDay(h);
      if (o.value.length === 0 ? u.value = void 0 : o.value.length === 1 && (u.value = o.value[0], d.value = void 0), !u.value)
        u.value = C, o.value = [u.value];
      else if (d.value)
        u.value = h, d.value = void 0, o.value = [u.value];
      else {
        if (c.isSameDay(C, u.value)) {
          u.value = void 0, o.value = [];
          return;
        } else c.isBefore(C, u.value) ? (d.value = c.endOfDay(u.value), u.value = C) : d.value = c.endOfDay(C);
        o.value = Qf(c, u.value, d.value);
      }
    }
    function m(h) {
      const C = o.value.findIndex((p) => c.isSameDay(p, h));
      if (C === -1)
        o.value = [...o.value, h];
      else {
        const p = [...o.value];
        p.splice(C, 1), o.value = p;
      }
    }
    function y(h) {
      e.multiple === "range" ? b(h) : e.multiple ? m(h) : o.value = [h];
    }
    G(() => S("div", {
      class: "v-date-picker-month",
      style: {
        "--v-date-picker-days-in-week": e.weekdays.length
      }
    }, [e.showWeek && S("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && S("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [mt(" ")]), r.value.map((h) => S("div", {
      class: z(["v-date-picker-month__day", "v-date-picker-month__day--adjacent"])
    }, [h]))]), k(yt, {
      name: f.value
    }, {
      default: () => {
        var h;
        return [S("div", {
          ref: l,
          key: (h = i.value[0].date) == null ? void 0 : h.toString(),
          class: "v-date-picker-month__days"
        }, [!e.hideWeekdays && s.value.map((C) => S("div", {
          class: z(["v-date-picker-month__day", "v-date-picker-month__weekday"])
        }, [C])), i.value.map((C, p) => {
          var P;
          const _ = {
            props: {
              class: "v-date-picker-month__day-btn",
              color: C.isSelected || C.isToday ? e.color : void 0,
              disabled: C.isDisabled,
              icon: !0,
              ripple: !1,
              text: C.localized,
              variant: C.isSelected ? "flat" : C.isToday ? "outlined" : "text",
              onClick: () => y(C.date)
            },
            item: C,
            i: p
          };
          return g.value && !C.isSelected && (C.isDisabled = !0), S("div", {
            class: z(["v-date-picker-month__day", {
              "v-date-picker-month__day--adjacent": C.isAdjacent,
              "v-date-picker-month__day--hide-adjacent": C.isHidden,
              "v-date-picker-month__day--selected": C.isSelected,
              "v-date-picker-month__day--week-end": C.isWeekEnd,
              "v-date-picker-month__day--week-start": C.isWeekStart
            }]),
            "data-v-date": C.isDisabled ? void 0 : C.isoDate
          }, [(e.showAdjacentMonths || !C.isAdjacent) && (((P = a.day) == null ? void 0 : P.call(a, _)) ?? k(xe, _.props, null))]);
        })])];
      }
    })]));
  }
}), fd = F({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number,
  allowedMonths: [Array, Function]
}, "VDatePickerMonths"), Ui = W()({
  name: "VDatePickerMonths",
  props: fd(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Fa(), i = de(e, "modelValue"), o = w(() => {
      let s = l.startOfYear(l.date());
      return e.year && (s = l.setYear(s, e.year)), _t(12).map((c) => {
        const u = l.format(s, "monthShort"), d = !!(!r(c) || e.min && l.isAfter(l.startOfMonth(l.date(e.min)), s) || e.max && l.isAfter(s, l.startOfMonth(l.date(e.max))));
        return s = l.getNextMonth(s), {
          isDisabled: d,
          text: u,
          value: c
        };
      });
    });
    je(() => {
      i.value = i.value ?? l.getMonth(l.date());
    });
    function r(s) {
      return Array.isArray(e.allowedMonths) && e.allowedMonths.length ? e.allowedMonths.includes(s) : typeof e.allowedMonths == "function" ? e.allowedMonths(s) : !0;
    }
    return G(() => S("div", {
      class: "v-date-picker-months",
      style: {
        height: oe(e.height)
      }
    }, [S("div", {
      class: "v-date-picker-months__content"
    }, [o.value.map((s, c) => {
      var v;
      const u = {
        active: i.value === c,
        color: i.value === c ? e.color : void 0,
        disabled: s.isDisabled,
        rounded: !0,
        text: s.text,
        variant: i.value === s.value ? "flat" : "text",
        onClick: () => d(c)
      };
      function d(f) {
        if (i.value === f) {
          t("update:modelValue", i.value);
          return;
        }
        i.value = f;
      }
      return ((v = a.month) == null ? void 0 : v.call(a, {
        month: s,
        i: c,
        props: u
      })) ?? k(xe, H({
        key: "month"
      }, u), null);
    })])])), {};
  }
}), md = F({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  allowedYears: [Array, Function]
}, "VDatePickerYears"), ji = W()({
  name: "VDatePickerYears",
  props: md(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Fa(), i = de(e, "modelValue"), o = w(() => {
      const c = l.getYear(l.date());
      let u = c - 100, d = c + 52;
      e.min && (u = l.getYear(l.date(e.min))), e.max && (d = l.getYear(l.date(e.max)));
      let v = l.startOfYear(l.date());
      return v = l.setYear(v, u), _t(d - u + 1, u).map((f) => {
        const g = l.format(v, "year");
        return v = l.setYear(v, l.getYear(v) + 1), {
          text: g,
          value: f,
          isDisabled: !s(f)
        };
      });
    });
    je(() => {
      i.value = i.value ?? l.getYear(l.date());
    });
    const r = sl();
    ft(async () => {
      var c;
      await Pe(), (c = r.el) == null || c.focus();
    });
    function s(c) {
      return Array.isArray(e.allowedYears) && e.allowedYears.length ? e.allowedYears.includes(c) : typeof e.allowedYears == "function" ? e.allowedYears(c) : !0;
    }
    return G(() => S("div", {
      class: "v-date-picker-years",
      style: {
        height: oe(e.height)
      }
    }, [S("div", {
      class: "v-date-picker-years__content"
    }, [o.value.map((c, u) => {
      var v;
      const d = {
        ref: i.value === c.value ? r : void 0,
        active: i.value === c.value,
        color: i.value === c.value ? e.color : void 0,
        rounded: !0,
        text: c.text,
        disabled: c.isDisabled,
        variant: i.value === c.value ? "flat" : "text",
        onClick: () => {
          if (i.value === c.value) {
            t("update:modelValue", i.value);
            return;
          }
          i.value = c.value;
        }
      };
      return ((v = a.year) == null ? void 0 : v.call(a, {
        year: c,
        i: u,
        props: d
      })) ?? k(xe, H({
        key: "month"
      }, d), null);
    })])])), {};
  }
}), Gb = F({
  // TODO: implement in v3.5
  // calendarIcon: {
  //   type: String,
  //   default: '$calendar',
  // },
  // keyboardIcon: {
  //   type: String,
  //   default: '$edit',
  // },
  // inputMode: {
  //   type: String as PropType<'calendar' | 'keyboard'>,
  //   default: 'calendar',
  // },
  // inputText: {
  //   type: String,
  //   default: '$vuetify.datePicker.input.placeholder',
  // },
  // inputPlaceholder: {
  //   type: String,
  //   default: 'dd/mm/yyyy',
  // },
  header: {
    type: String,
    default: "$vuetify.datePicker.header"
  },
  headerColor: String,
  ...dd(),
  ...vd({
    weeksInMonth: "static"
  }),
  ...Fe(fd(), ["modelValue"]),
  ...Fe(md(), ["modelValue"]),
  ...Ml({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), Yb = W()({
  name: "VDatePicker",
  props: Gb(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Fa(), {
      t: i
    } = Ne(), {
      rtlClasses: o
    } = nt(), r = de(e, "modelValue", void 0, (N) => Ue(N).map((Y) => l.date(Y)), (N) => e.multiple ? N : N[0]), s = de(e, "viewMode"), c = w(() => {
      const N = l.date(e.min);
      return e.min && l.isValid(N) ? N : null;
    }), u = w(() => {
      const N = l.date(e.max);
      return e.max && l.isValid(N) ? N : null;
    }), d = w(() => {
      var te;
      const N = l.date();
      let Y = N;
      return (te = r.value) != null && te[0] ? Y = l.date(r.value[0]) : c.value && l.isBefore(N, c.value) ? Y = c.value : u.value && l.isAfter(N, u.value) && (Y = u.value), Y && l.isValid(Y) ? Y : N;
    }), v = E(() => e.headerColor ?? e.color), f = de(e, "month"), g = w({
      get: () => Number(f.value ?? l.getMonth(l.startOfMonth(d.value))),
      set: (N) => f.value = N
    }), b = de(e, "year"), m = w({
      get: () => Number(b.value ?? l.getYear(l.startOfYear(l.setMonth(d.value, g.value)))),
      set: (N) => b.value = N
    }), y = ee(!1), h = w(() => e.multiple && r.value.length > 1 ? i("$vuetify.datePicker.itemsSelected", r.value.length) : r.value[0] && l.isValid(r.value[0]) ? l.format(l.date(r.value[0]), "normalDateWithWeekday") : i(e.header)), C = w(() => {
      let N = l.date();
      return N = l.setDate(N, 1), N = l.setMonth(N, g.value), N = l.setYear(N, m.value), l.format(N, "monthAndYear");
    }), p = E(() => `date-picker-header${y.value ? "-reverse" : ""}-transition`), _ = w(() => {
      if (e.disabled) return !0;
      const N = [];
      if (s.value !== "month")
        N.push("prev", "next");
      else {
        let Y = l.date();
        if (Y = l.startOfMonth(Y), Y = l.setMonth(Y, g.value), Y = l.setYear(Y, m.value), c.value) {
          const te = l.addDays(l.startOfMonth(Y), -1);
          l.isAfter(c.value, te) && N.push("prev");
        }
        if (u.value) {
          const te = l.addDays(l.endOfMonth(Y), 1);
          l.isAfter(te, u.value) && N.push("next");
        }
      }
      return N;
    });
    function P(N, Y) {
      const te = e.allowedDates;
      if (typeof te != "function") return !0;
      const q = l.getDiff(Y, N, "days");
      for (let $ = 0; $ < q; $++)
        if (te(l.addDays(N, $))) return !0;
      return !1;
    }
    function I(N) {
      if (typeof e.allowedDates == "function") {
        const Y = l.parseISO(`${N}-01-01`);
        return P(Y, l.endOfYear(Y));
      }
      if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
        for (const Y of e.allowedDates)
          if (l.getYear(l.date(Y)) === N) return !0;
        return !1;
      }
      return !0;
    }
    function V(N) {
      if (typeof e.allowedDates == "function") {
        const Y = String(N + 1).padStart(2, "0"), te = l.parseISO(`${m.value}-${Y}-01`);
        return P(te, l.endOfMonth(te));
      }
      if (Array.isArray(e.allowedDates) && e.allowedDates.length) {
        for (const Y of e.allowedDates)
          if (l.getYear(l.date(Y)) === m.value && l.getMonth(l.date(Y)) === N) return !0;
        return !1;
      }
      return !0;
    }
    function T() {
      g.value < 11 ? g.value++ : (m.value++, g.value = 0, L()), M();
    }
    function A() {
      g.value > 0 ? g.value-- : (m.value--, g.value = 11, L()), M();
    }
    function D() {
      s.value = "month";
    }
    function x() {
      s.value = s.value === "months" ? "month" : "months";
    }
    function B() {
      s.value = s.value === "year" ? "month" : "year";
    }
    function M() {
      s.value === "months" && x();
    }
    function L() {
      s.value === "year" && B();
    }
    return ae(r, (N, Y) => {
      const te = Ue(Y), q = Ue(N);
      if (!q.length) return;
      const $ = l.date(te[te.length - 1]), O = l.date(q[q.length - 1]), R = l.getMonth(O), U = l.getYear(O);
      R !== g.value && (g.value = R, M()), U !== m.value && (m.value = U, L()), y.value = l.isBefore($, O);
    }), G(() => {
      const N = ta.filterProps(e), Y = Hi.filterProps(e), te = zi.filterProps(e), q = Wi.filterProps(e), $ = Fe(Ui.filterProps(e), ["modelValue"]), O = Fe(ji.filterProps(e), ["modelValue"]), R = {
        color: v.value,
        header: h.value,
        transition: p.value
      };
      return k(ta, H(N, {
        color: v.value,
        class: ["v-date-picker", `v-date-picker--${s.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, o.value, e.class],
        style: e.style
      }), {
        title: () => {
          var U;
          return ((U = a.title) == null ? void 0 : U.call(a)) ?? S("div", {
            class: "v-date-picker__title"
          }, [i(e.title)]);
        },
        header: () => a.header ? k(we, {
          defaults: {
            VDatePickerHeader: {
              ...R
            }
          }
        }, {
          default: () => {
            var U;
            return [(U = a.header) == null ? void 0 : U.call(a, R)];
          }
        }) : k(zi, H({
          key: "header"
        }, te, R, {
          onClick: s.value !== "month" ? D : void 0
        }), {
          prepend: a.prepend,
          append: a.append
        }),
        default: () => S(ue, null, [k(Hi, H(Y, {
          disabled: _.value,
          text: C.value,
          "onClick:next": T,
          "onClick:prev": A,
          "onClick:month": x,
          "onClick:year": B
        }), null), k(xa, {
          hideOnLeave: !0
        }, {
          default: () => [s.value === "months" ? k(Ui, H({
            key: "date-picker-months"
          }, $, {
            modelValue: g.value,
            "onUpdate:modelValue": [(U) => g.value = U, M],
            min: c.value,
            max: u.value,
            year: m.value,
            allowedMonths: V
          }), {
            month: a.month
          }) : s.value === "year" ? k(ji, H({
            key: "date-picker-years"
          }, O, {
            modelValue: m.value,
            "onUpdate:modelValue": [(U) => m.value = U, L],
            min: c.value,
            max: u.value,
            allowedYears: I
          }), {
            year: a.year
          }) : k(Wi, H({
            key: "date-picker-month"
          }, q, {
            modelValue: r.value,
            "onUpdate:modelValue": (U) => r.value = U,
            month: g.value,
            "onUpdate:month": [(U) => g.value = U, M],
            year: m.value,
            "onUpdate:year": [(U) => m.value = U, L],
            min: c.value,
            max: u.value
          }), {
            day: a.day
          })]
        })]),
        actions: a.actions
      });
    }), {};
  }
}), Kb = F({
  actionText: String,
  bgColor: String,
  color: String,
  icon: fe,
  image: String,
  justify: {
    type: String,
    default: "center"
  },
  headline: String,
  title: String,
  text: String,
  textWidth: {
    type: [Number, String],
    default: 500
  },
  href: String,
  to: String,
  ...se(),
  ...Je(),
  ...Kt({
    size: void 0
  }),
  ...Ae()
}, "VEmptyState"), qb = W()({
  name: "VEmptyState",
  props: Kb(),
  emits: {
    "click:action": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Ee(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Le(() => e.bgColor), {
      dimensionStyles: r
    } = et(e), {
      displayClasses: s
    } = $t();
    function c(u) {
      t("click:action", u);
    }
    return G(() => {
      var m, y, h;
      const u = !!(a.actions || e.actionText), d = !!(a.headline || e.headline), v = !!(a.title || e.title), f = !!(a.text || e.text), g = !!(a.media || e.image || e.icon), b = e.size || (e.image ? 200 : 96);
      return S("div", {
        class: z(["v-empty-state", {
          [`v-empty-state--${e.justify}`]: !0
        }, l.value, i.value, s.value, e.class]),
        style: le([o.value, r.value, e.style])
      }, [g && S("div", {
        key: "media",
        class: "v-empty-state__media"
      }, [a.media ? k(we, {
        key: "media-defaults",
        defaults: {
          VImg: {
            src: e.image,
            height: b
          },
          VIcon: {
            size: b,
            icon: e.icon
          }
        }
      }, {
        default: () => [a.media()]
      }) : S(ue, null, [e.image ? k(Qt, {
        key: "image",
        src: e.image,
        height: b
      }, null) : e.icon ? k(Be, {
        key: "icon",
        color: e.color,
        size: b,
        icon: e.icon
      }, null) : void 0])]), d && S("div", {
        key: "headline",
        class: "v-empty-state__headline"
      }, [((m = a.headline) == null ? void 0 : m.call(a)) ?? e.headline]), v && S("div", {
        key: "title",
        class: "v-empty-state__title"
      }, [((y = a.title) == null ? void 0 : y.call(a)) ?? e.title]), f && S("div", {
        key: "text",
        class: "v-empty-state__text",
        style: {
          maxWidth: oe(e.textWidth)
        }
      }, [((h = a.text) == null ? void 0 : h.call(a)) ?? e.text]), a.default && S("div", {
        key: "content",
        class: "v-empty-state__content"
      }, [a.default()]), u && S("div", {
        key: "actions",
        class: "v-empty-state__actions"
      }, [k(we, {
        defaults: {
          VBtn: {
            class: "v-empty-state__action-btn",
            color: e.color ?? "surface-variant",
            href: e.href,
            text: e.actionText,
            to: e.to
          }
        }
      }, {
        default: () => {
          var C;
          return [((C = a.actions) == null ? void 0 : C.call(a, {
            props: {
              onClick: c
            }
          })) ?? k(xe, {
            onClick: c
          }, null)];
        }
      })])]);
    }), {};
  }
}), Ba = Symbol.for("vuetify:v-expansion-panel"), gd = F({
  ...se(),
  ...Ao()
}, "VExpansionPanelText"), Gi = W()({
  name: "VExpansionPanelText",
  props: gd(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ie(Ba);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: l,
      onAfterLeave: i
    } = To(e, a.isSelected);
    return G(() => k(la, {
      onAfterLeave: i
    }, {
      default: () => {
        var o;
        return [We(S("div", {
          class: z(["v-expansion-panel-text", e.class]),
          style: le(e.style)
        }, [t.default && l.value && S("div", {
          class: "v-expansion-panel-text__wrapper"
        }, [(o = t.default) == null ? void 0 : o.call(t)])]), [[Lt, a.isSelected.value]])];
      }
    })), {};
  }
}), hd = F({
  color: String,
  expandIcon: {
    type: fe,
    default: "$expand"
  },
  collapseIcon: {
    type: fe,
    default: "$collapse"
  },
  hideActions: Boolean,
  focusable: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !1
  },
  readonly: Boolean,
  ...se(),
  ...Je()
}, "VExpansionPanelTitle"), Yi = W()({
  name: "VExpansionPanelTitle",
  directives: {
    vRipple: kt
  },
  props: hd(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ie(Ba);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Le(() => e.color), {
      dimensionStyles: o
    } = et(e), r = w(() => ({
      collapseIcon: e.collapseIcon,
      disabled: a.disabled.value,
      expanded: a.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    })), s = E(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
    return G(() => {
      var c;
      return We(S("button", {
        class: z(["v-expansion-panel-title", {
          "v-expansion-panel-title--active": a.isSelected.value,
          "v-expansion-panel-title--focusable": e.focusable,
          "v-expansion-panel-title--static": e.static
        }, l.value, e.class]),
        style: le([i.value, o.value, e.style]),
        type: "button",
        tabindex: a.disabled.value ? -1 : void 0,
        disabled: a.disabled.value,
        "aria-expanded": a.isSelected.value,
        onClick: e.readonly ? void 0 : a.toggle
      }, [S("span", {
        class: "v-expansion-panel-title__overlay"
      }, null), (c = t.default) == null ? void 0 : c.call(t, r.value), !e.hideActions && k(we, {
        defaults: {
          VIcon: {
            icon: s.value
          }
        }
      }, {
        default: () => {
          var u;
          return [S("span", {
            class: "v-expansion-panel-title__icon"
          }, [((u = t.actions) == null ? void 0 : u.call(t, r.value)) ?? k(Be, null, null)])];
        }
      })]), [[kt, e.ripple]]);
    }), {};
  }
}), yd = F({
  title: String,
  text: String,
  bgColor: String,
  ...at(),
  ...Fn(),
  ...He(),
  ...ke(),
  ...hd(),
  ...gd()
}, "VExpansionPanel"), Xb = W()({
  name: "VExpansionPanel",
  props: yd(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Rn(e, Ba), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Le(() => e.bgColor), {
      elevationClasses: o
    } = st(e), {
      roundedClasses: r
    } = Ye(e), s = E(() => (a == null ? void 0 : a.disabled.value) || e.disabled), c = w(() => a.group.items.value.reduce((v, f, g) => (a.group.selected.value.includes(f.id) && v.push(g), v), [])), u = w(() => {
      const v = a.group.items.value.findIndex((f) => f.id === a.id);
      return !a.isSelected.value && c.value.some((f) => f - v === 1);
    }), d = w(() => {
      const v = a.group.items.value.findIndex((f) => f.id === a.id);
      return !a.isSelected.value && c.value.some((f) => f - v === -1);
    });
    return Re(Ba, a), G(() => {
      const v = !!(t.text || e.text), f = !!(t.title || e.title), g = Yi.filterProps(e), b = Gi.filterProps(e);
      return k(e.tag, {
        class: z(["v-expansion-panel", {
          "v-expansion-panel--active": a.isSelected.value,
          "v-expansion-panel--before-active": u.value,
          "v-expansion-panel--after-active": d.value,
          "v-expansion-panel--disabled": s.value
        }, r.value, l.value, e.class]),
        style: le([i.value, e.style])
      }, {
        default: () => [S("div", {
          class: z(["v-expansion-panel__shadow", ...o.value])
        }, null), k(we, {
          defaults: {
            VExpansionPanelTitle: {
              ...g
            },
            VExpansionPanelText: {
              ...b
            }
          }
        }, {
          default: () => {
            var m;
            return [f && k(Yi, {
              key: "title"
            }, {
              default: () => [t.title ? t.title() : e.title]
            }), v && k(Gi, {
              key: "text"
            }, {
              default: () => [t.text ? t.text() : e.text]
            }), (m = t.default) == null ? void 0 : m.call(t)];
          }
        })]
      });
    }), {
      groupItem: a
    };
  }
}), Zb = ["default", "accordion", "inset", "popout"], Qb = F({
  flat: Boolean,
  ...Mn(),
  ...Jt(yd(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]),
  ...Ae(),
  ...se(),
  ...ke(),
  variant: {
    type: String,
    default: "default",
    validator: (e) => Zb.includes(e)
  }
}, "VExpansionPanels"), Jb = W()({
  name: "VExpansionPanels",
  props: Qb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      next: a,
      prev: l
    } = fn(e, Ba), {
      themeClasses: i
    } = Ee(e), o = E(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return Ge({
      VExpansionPanel: {
        bgColor: E(() => e.bgColor),
        collapseIcon: E(() => e.collapseIcon),
        color: E(() => e.color),
        eager: E(() => e.eager),
        elevation: E(() => e.elevation),
        expandIcon: E(() => e.expandIcon),
        focusable: E(() => e.focusable),
        hideActions: E(() => e.hideActions),
        readonly: E(() => e.readonly),
        ripple: E(() => e.ripple),
        rounded: E(() => e.rounded),
        static: E(() => e.static)
      }
    }), G(() => k(e.tag, {
      class: z(["v-expansion-panels", {
        "v-expansion-panels--flat": e.flat,
        "v-expansion-panels--tile": e.tile
      }, i.value, o.value, e.class]),
      style: le(e.style)
    }, {
      default: () => {
        var r;
        return [(r = t.default) == null ? void 0 : r.call(t, {
          prev: l,
          next: a
        })];
      }
    })), {
      next: a,
      prev: l
    };
  }
}), ek = F({
  app: Boolean,
  appear: Boolean,
  extended: Boolean,
  layout: Boolean,
  offset: Boolean,
  modelValue: {
    type: Boolean,
    default: !0
  },
  ...Fe(Dl({
    active: !0
  }), ["location"]),
  ...On(),
  ...tn(),
  ...Ht({
    transition: "fab-transition"
  })
}, "VFab"), tk = W()({
  name: "VFab",
  props: ek(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = de(e, "modelValue"), l = ee(56), i = j(), {
      resizeRef: o
    } = Rt((d) => {
      d.length && (l.value = d[0].target.clientHeight);
    }), r = E(() => e.app || e.absolute), s = w(() => {
      var d;
      return r.value ? ((d = e.location) == null ? void 0 : d.split(" ").shift()) ?? "bottom" : !1;
    }), c = w(() => {
      var d;
      return r.value ? ((d = e.location) == null ? void 0 : d.split(" ")[1]) ?? "end" : !1;
    });
    bt(() => e.app, () => {
      const d = En({
        id: e.name,
        order: w(() => parseInt(e.order, 10)),
        position: s,
        layoutSize: w(() => e.layout ? l.value + 24 : 0),
        elementSize: w(() => l.value + 24),
        active: w(() => e.app && a.value),
        absolute: E(() => e.absolute)
      });
      je(() => {
        i.value = d.layoutItemStyles.value;
      });
    });
    const u = j();
    return G(() => {
      const d = xe.filterProps(e);
      return S("div", {
        ref: u,
        class: z(["v-fab", {
          "v-fab--absolute": e.absolute,
          "v-fab--app": !!e.app,
          "v-fab--extended": e.extended,
          "v-fab--offset": e.offset,
          [`v-fab--${s.value}`]: r.value,
          [`v-fab--${c.value}`]: r.value
        }, e.class]),
        style: le([e.app ? {
          ...i.value
        } : {
          height: e.absolute ? "100%" : "inherit"
        }, e.style])
      }, [S("div", {
        class: "v-fab__container"
      }, [k(yt, {
        appear: e.appear,
        transition: e.transition
      }, {
        default: () => [We(k(xe, H({
          ref: o
        }, d, {
          active: void 0,
          location: void 0
        }), t), [[Lt, e.active]])]
      })])]);
    }), {};
  }
});
function nk() {
  function e(t) {
    var l, i;
    return [...((l = t.dataTransfer) == null ? void 0 : l.items) ?? []].filter((o) => o.kind === "file").map((o) => o.webkitGetAsEntry()).filter(Boolean).length > 0 || [...((i = t.dataTransfer) == null ? void 0 : i.files) ?? []].length > 0;
  }
  async function n(t) {
    var i, o;
    const a = [], l = [...((i = t.dataTransfer) == null ? void 0 : i.items) ?? []].filter((r) => r.kind === "file").map((r) => r.webkitGetAsEntry()).filter(Boolean);
    if (l.length)
      for (const r of l) {
        const s = await bd(r, kd(".", r));
        a.push(...s.map((c) => c.file));
      }
    else
      a.push(...((o = t.dataTransfer) == null ? void 0 : o.files) ?? []);
    return a;
  }
  return {
    handleDrop: n,
    hasFilesOrFolders: e
  };
}
function bd(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return new Promise((t, a) => {
    e.isFile ? e.file((i) => t([{
      file: i,
      path: n
    }]), a) : e.isDirectory && e.createReader().readEntries(async (i) => {
      const o = [];
      for (const r of i)
        o.push(...await bd(r, kd(n, r)));
      t(o);
    });
  });
}
function kd(e, n) {
  return n.isDirectory ? `${e}/${n.name}` : e;
}
const ak = F({
  chips: Boolean,
  counter: Boolean,
  counterSizeString: {
    type: String,
    default: "$vuetify.fileInput.counterSize"
  },
  counterString: {
    type: String,
    default: "$vuetify.fileInput.counter"
  },
  hideInput: Boolean,
  multiple: Boolean,
  showSize: {
    type: [Boolean, Number, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e))
  },
  ...an({
    prependIcon: "$file"
  }),
  modelValue: {
    type: [Array, Object],
    default: (e) => e.multiple ? [] : null,
    validator: (e) => Ue(e).every((n) => n != null && typeof n == "object")
  },
  ...Ya({
    clearable: !0
  })
}, "VFileInput"), lk = W()({
  name: "VFileInput",
  inheritAttrs: !1,
  props: ak(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: i
    } = Ne(), o = de(e, "modelValue", e.modelValue, (L) => Ue(L), (L) => !e.multiple && Array.isArray(L) ? L[0] : L), {
      isFocused: r,
      focus: s,
      blur: c
    } = nn(e), u = w(() => typeof e.showSize != "boolean" ? e.showSize : void 0), d = w(() => (o.value ?? []).reduce((L, N) => {
      let {
        size: Y = 0
      } = N;
      return L + Y;
    }, 0)), v = w(() => fr(d.value, u.value)), f = w(() => (o.value ?? []).map((L) => {
      const {
        name: N = "",
        size: Y = 0
      } = L;
      return e.showSize ? `${N} (${fr(Y, u.value)})` : N;
    })), g = w(() => {
      var N;
      const L = ((N = o.value) == null ? void 0 : N.length) ?? 0;
      return e.showSize ? i(e.counterSizeString, L, v.value) : i(e.counterString, L);
    }), b = j(), m = j(), y = j(), h = E(() => r.value || e.active), C = w(() => ["plain", "underlined"].includes(e.variant)), p = ee(!1), {
      handleDrop: _,
      hasFilesOrFolders: P
    } = nk();
    function I() {
      var L;
      y.value !== document.activeElement && ((L = y.value) == null || L.focus()), r.value || s();
    }
    function V(L) {
      var N;
      (N = y.value) == null || N.click();
    }
    function T(L) {
      a("mousedown:control", L);
    }
    function A(L) {
      var N;
      (N = y.value) == null || N.click(), a("click:control", L);
    }
    function D(L) {
      L.stopPropagation(), I(), Pe(() => {
        o.value = [], xl(e["onClick:clear"], L);
      });
    }
    function x(L) {
      L.preventDefault(), L.stopImmediatePropagation(), p.value = !0;
    }
    function B(L) {
      L.preventDefault(), p.value = !1;
    }
    async function M(L) {
      if (L.preventDefault(), L.stopImmediatePropagation(), p.value = !1, !y.value || !P(L)) return;
      const N = new DataTransfer();
      for (const Y of await _(L))
        N.items.add(Y);
      y.value.files = N.files, y.value.dispatchEvent(new Event("change", {
        bubbles: !0
      }));
    }
    return ae(o, (L) => {
      (!Array.isArray(L) || !L.length) && y.value && (y.value.value = "");
    }), G(() => {
      const L = !!(l.counter || e.counter), N = !!(L || l.details), [Y, te] = dn(t), {
        modelValue: q,
        ...$
      } = gt.filterProps(e), O = un.filterProps(e);
      return k(gt, H({
        ref: b,
        modelValue: e.multiple ? o.value : o.value[0],
        class: ["v-file-input", {
          "v-file-input--chips": !!e.chips,
          "v-file-input--dragging": p.value,
          "v-file-input--hide": e.hideInput,
          "v-input--plain-underlined": C.value
        }, e.class],
        style: e.style,
        "onClick:prepend": V
      }, Y, $, {
        centerAffix: !C.value,
        focused: r.value
      }), {
        ...l,
        default: (R) => {
          let {
            id: U,
            isDisabled: ce,
            isDirty: ne,
            isReadonly: Q,
            isValid: X,
            hasDetails: ve
          } = R;
          return k(un, H({
            ref: m,
            prependIcon: e.prependIcon,
            onMousedown: T,
            onClick: A,
            "onClick:clear": D,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, O, {
            id: U.value,
            active: h.value || ne.value,
            dirty: ne.value || e.dirty,
            disabled: ce.value,
            focused: r.value,
            details: ve.value,
            error: X.value === !1,
            onDragover: x,
            onDrop: M
          }), {
            ...l,
            default: (ge) => {
              var K;
              let {
                props: {
                  class: J,
                  ...ie
                }
              } = ge;
              return S(ue, null, [S("input", H({
                ref: y,
                type: "file",
                readonly: Q.value,
                disabled: ce.value,
                multiple: e.multiple,
                name: e.name,
                onClick: (Z) => {
                  Z.stopPropagation(), Q.value && Z.preventDefault(), I();
                },
                onChange: (Z) => {
                  if (!Z.target) return;
                  const me = Z.target;
                  o.value = [...me.files ?? []];
                },
                onDragleave: B,
                onFocus: I,
                onBlur: c
              }, ie, te), null), S("div", {
                class: z(J)
              }, [!!((K = o.value) != null && K.length) && !e.hideInput && (l.selection ? l.selection({
                fileNames: f.value,
                totalBytes: d.value,
                totalBytesReadable: v.value
              }) : e.chips ? f.value.map((Z) => k(ua, {
                key: Z,
                size: "small",
                text: Z
              }, null)) : f.value.join(", "))])]);
            }
          });
        },
        details: N ? (R) => {
          var U, ce;
          return S(ue, null, [(U = l.details) == null ? void 0 : U.call(l, R), L && S(ue, null, [S("span", null, null), k(Ol, {
            active: !!((ce = o.value) != null && ce.length),
            value: g.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), ut({}, b, m, y);
  }
}), ik = F({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Vt(),
  ...se(),
  ...at(),
  ...On(),
  ...He(),
  ...ke({
    tag: "footer"
  }),
  ...Ae()
}, "VFooter"), ok = W()({
  name: "VFooter",
  props: ik(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = j(), {
      themeClasses: l
    } = Ee(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Le(() => e.color), {
      borderClasses: r
    } = pt(e), {
      elevationClasses: s
    } = st(e), {
      roundedClasses: c
    } = Ye(e), u = ee(32), {
      resizeRef: d
    } = Rt((f) => {
      f.length && (u.value = f[0].target.clientHeight);
    }), v = w(() => e.height === "auto" ? u.value : parseInt(e.height, 10));
    return bt(() => e.app, () => {
      const f = En({
        id: e.name,
        order: w(() => parseInt(e.order, 10)),
        position: E(() => "bottom"),
        layoutSize: v,
        elementSize: w(() => e.height === "auto" ? void 0 : v.value),
        active: E(() => e.app),
        absolute: E(() => e.absolute)
      });
      je(() => {
        a.value = f.layoutItemStyles.value;
      });
    }), G(() => k(e.tag, {
      ref: d,
      class: z(["v-footer", l.value, i.value, r.value, s.value, c.value, e.class]),
      style: le([o.value, e.app ? a.value : {
        height: oe(e.height)
      }, e.style])
    }, t)), {};
  }
}), rk = F({
  ...se(),
  ...Sg()
}, "VForm"), sk = W()({
  name: "VForm",
  props: rk(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = wg(e), i = j();
    function o(s) {
      s.preventDefault(), l.reset();
    }
    function r(s) {
      const c = s, u = l.validate();
      c.then = u.then.bind(u), c.catch = u.catch.bind(u), c.finally = u.finally.bind(u), a("submit", c), c.defaultPrevented || u.then((d) => {
        var f;
        let {
          valid: v
        } = d;
        v && ((f = i.value) == null || f.submit());
      }), c.preventDefault();
    }
    return G(() => {
      var s;
      return S("form", {
        ref: i,
        class: z(["v-form", e.class]),
        style: le(e.style),
        novalidate: !0,
        onReset: o,
        onSubmit: r
      }, [(s = t.default) == null ? void 0 : s.call(t, l)]);
    }), ut(l, i);
  }
}), uk = F({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  ..._o()
}, "VHover"), ck = W()({
  name: "VHover",
  props: uk(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = de(e, "modelValue"), {
      runOpenDelay: l,
      runCloseDelay: i
    } = Io(e, (o) => !e.disabled && (a.value = o));
    return () => {
      var o;
      return (o = t.default) == null ? void 0 : o.call(t, {
        isHovering: a.value,
        props: {
          onMouseenter: l,
          onMouseleave: i
        }
      });
    };
  }
}), dk = F({
  color: String,
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  side: {
    type: String,
    default: "end",
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  mode: {
    type: String,
    default: "intersect",
    validator: (e) => ["intersect", "manual"].includes(e)
  },
  margin: [Number, String],
  loadMoreText: {
    type: String,
    default: "$vuetify.infiniteScroll.loadMore"
  },
  emptyText: {
    type: String,
    default: "$vuetify.infiniteScroll.empty"
  },
  ...Je(),
  ...ke()
}, "VInfiniteScroll"), es = Bt({
  name: "VInfiniteScrollIntersect",
  props: {
    side: {
      type: String,
      required: !0
    },
    rootMargin: String
  },
  emits: {
    intersect: (e, n) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = Ra();
    return ae(l, async (i) => {
      t("intersect", e.side, i);
    }), G(() => S("div", {
      class: "v-infinite-scroll-intersect",
      style: {
        "--v-infinite-margin-size": e.rootMargin
      },
      ref: a
    }, [mt(" ")])), {};
  }
}), vk = W()({
  name: "VInfiniteScroll",
  props: dk(),
  emits: {
    load: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = j(), i = ee("ok"), o = ee("ok"), r = w(() => oe(e.margin)), s = ee(!1);
    function c(P) {
      if (!l.value) return;
      const I = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      l.value[I] = P;
    }
    function u() {
      if (!l.value) return 0;
      const P = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      return l.value[P];
    }
    function d() {
      if (!l.value) return 0;
      const P = e.direction === "vertical" ? "scrollHeight" : "scrollWidth";
      return l.value[P];
    }
    function v() {
      if (!l.value) return 0;
      const P = e.direction === "vertical" ? "clientHeight" : "clientWidth";
      return l.value[P];
    }
    ft(() => {
      l.value && (e.side === "start" ? c(d()) : e.side === "both" && c(d() / 2 - v() / 2));
    });
    function f(P, I) {
      P === "start" ? i.value = I : P === "end" ? o.value = I : P === "both" && (i.value = I, o.value = I);
    }
    function g(P) {
      return P === "start" ? i.value : o.value;
    }
    let b = 0;
    function m(P, I) {
      s.value = I, s.value && y(P);
    }
    function y(P) {
      if (e.mode !== "manual" && !s.value) return;
      const I = g(P);
      if (!l.value || ["empty", "loading"].includes(I)) return;
      b = d(), f(P, "loading");
      function V(T) {
        f(P, T), Pe(() => {
          T === "empty" || T === "error" || (T === "ok" && P === "start" && c(d() - b + u()), e.mode !== "manual" && Pe(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                  y(P);
                });
              });
            });
          }));
        });
      }
      a("load", {
        side: P,
        done: V
      });
    }
    const {
      t: h
    } = Ne();
    function C(P, I) {
      var A, D, x, B, M;
      if (e.side !== P && e.side !== "both") return;
      const V = () => y(P), T = {
        side: P,
        props: {
          onClick: V,
          color: e.color
        }
      };
      return I === "error" ? (A = t.error) == null ? void 0 : A.call(t, T) : I === "empty" ? ((D = t.empty) == null ? void 0 : D.call(t, T)) ?? S("div", null, [h(e.emptyText)]) : e.mode === "manual" ? I === "loading" ? ((x = t.loading) == null ? void 0 : x.call(t, T)) ?? k(rn, {
        indeterminate: !0,
        color: e.color
      }, null) : ((B = t["load-more"]) == null ? void 0 : B.call(t, T)) ?? k(xe, {
        variant: "outlined",
        color: e.color,
        onClick: V
      }, {
        default: () => [h(e.loadMoreText)]
      }) : ((M = t.loading) == null ? void 0 : M.call(t, T)) ?? k(rn, {
        indeterminate: !0,
        color: e.color
      }, null);
    }
    const {
      dimensionStyles: p
    } = et(e);
    G(() => {
      const P = e.tag, I = e.side === "start" || e.side === "both", V = e.side === "end" || e.side === "both", T = e.mode === "intersect";
      return k(P, {
        ref: l,
        class: z(["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, {
          "v-infinite-scroll--start": I,
          "v-infinite-scroll--end": V
        }]),
        style: le(p.value)
      }, {
        default: () => {
          var A;
          return [S("div", {
            class: "v-infinite-scroll__side"
          }, [C("start", i.value)]), I && T && k(es, {
            key: "start",
            side: "start",
            onIntersect: m,
            rootMargin: r.value
          }, null), (A = t.default) == null ? void 0 : A.call(t), V && T && k(es, {
            key: "end",
            side: "end",
            onIntersect: m,
            rootMargin: r.value
          }, null), S("div", {
            class: "v-infinite-scroll__side"
          }, [C("end", o.value)])];
        }
      });
    });
    function _(P) {
      const I = P ?? e.side;
      f(I, "ok"), Pe(() => {
        c(d() - b + u()), e.mode !== "manual" && Pe(() => {
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                I === "both" ? (y("start"), y("end")) : y(I);
              });
            });
          });
        });
      });
    }
    return {
      reset: _
    };
  }
}), Sd = Symbol.for("vuetify:v-item-group"), fk = F({
  ...se(),
  ...Mn({
    selectedClass: "v-item--selected"
  }),
  ...ke(),
  ...Ae()
}, "VItemGroup"), mk = W()({
  name: "VItemGroup",
  props: fk(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ee(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: s
    } = fn(e, Sd);
    return () => k(e.tag, {
      class: z(["v-item-group", a.value, e.class]),
      style: le(e.style)
    }, {
      default: () => {
        var c;
        return [(c = t.default) == null ? void 0 : c.call(t, {
          isSelected: l,
          select: i,
          next: o,
          prev: r,
          selected: s.value
        })];
      }
    });
  }
}), gk = W()({
  name: "VItem",
  props: Fn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      select: l,
      toggle: i,
      selectedClass: o,
      value: r,
      disabled: s
    } = Rn(e, Sd);
    return () => {
      var c;
      return (c = t.default) == null ? void 0 : c.call(t, {
        isSelected: a.value,
        selectedClass: o.value,
        select: l,
        toggle: i,
        value: r.value,
        disabled: s.value
      });
    };
  }
}), hk = F({
  color: String,
  ...Vt(),
  ...se(),
  ...He(),
  ...ke({
    tag: "kbd"
  }),
  ...Ae(),
  ...at()
}, "VKbd"), yk = W()({
  name: "VKbd",
  props: hk(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ee(e), {
      borderClasses: l
    } = pt(e), {
      roundedClasses: i
    } = Ye(e), {
      backgroundColorClasses: o,
      backgroundColorStyles: r
    } = Le(() => e.color), {
      elevationClasses: s
    } = st(e);
    return G(() => k(e.tag, {
      class: z(["v-kbd", a.value, o.value, l.value, s.value, i.value, e.class]),
      style: le([r.value, e.style])
    }, t)), {};
  }
}), bk = F({
  ...se(),
  ...Je(),
  ...Js()
}, "VLayout"), kk = W()({
  name: "VLayout",
  props: bk(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      layoutClasses: a,
      layoutStyles: l,
      getLayoutItem: i,
      items: o,
      layoutRef: r
    } = tu(e), {
      dimensionStyles: s
    } = et(e);
    return G(() => {
      var c;
      return S("div", {
        ref: r,
        class: z([a.value, e.class]),
        style: le([s.value, l.value, e.style])
      }, [(c = t.default) == null ? void 0 : c.call(t)]);
    }), {
      getLayoutItem: i,
      items: o
    };
  }
}), Sk = F({
  position: {
    type: String,
    required: !0
  },
  size: {
    type: [Number, String],
    default: 300
  },
  modelValue: Boolean,
  ...se(),
  ...On()
}, "VLayoutItem"), wk = W()({
  name: "VLayoutItem",
  props: Sk(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      layoutItemStyles: a
    } = En({
      id: e.name,
      order: w(() => parseInt(e.order, 10)),
      position: E(() => e.position),
      elementSize: E(() => e.size),
      layoutSize: E(() => e.size),
      active: E(() => e.modelValue),
      absolute: E(() => e.absolute)
    });
    return () => {
      var l;
      return S("div", {
        class: z(["v-layout-item", e.class]),
        style: le([a.value, e.style])
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    };
  }
}), Ck = F({
  modelValue: Boolean,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  ...se(),
  ...Je(),
  ...ke(),
  ...Ht({
    transition: "fade-transition"
  })
}, "VLazy"), wd = W()({
  name: "VLazy",
  directives: {
    vIntersect: Zt
  },
  props: Ck(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = et(e), l = de(e, "modelValue");
    function i(o) {
      l.value || (l.value = o);
    }
    return G(() => We(k(e.tag, {
      class: z(["v-lazy", e.class]),
      style: le([a.value, e.style])
    }, {
      default: () => [l.value && k(yt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => {
          var o;
          return [(o = t.default) == null ? void 0 : o.call(t)];
        }
      })]
    }), [[Zt, {
      handler: i,
      options: e.options
    }, null]])), {};
  }
}), xk = F({
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: void 0
  },
  ...se()
}, "VLocaleProvider"), Vk = W()({
  name: "VLocaleProvider",
  props: xk(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: a
    } = ff(e);
    return G(() => {
      var l;
      return S("div", {
        class: z(["v-locale-provider", a.value, e.class]),
        style: le(e.style)
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    }), {};
  }
}), pk = F({
  scrollable: Boolean,
  ...se(),
  ...Je(),
  ...ke({
    tag: "main"
  })
}, "VMain"), Pk = W()({
  name: "VMain",
  props: pk(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = et(e), {
      mainStyles: l
    } = eu(), {
      ssrBootStyles: i
    } = Ln();
    return G(() => k(e.tag, {
      class: z(["v-main", {
        "v-main--scrollable": e.scrollable
      }, e.class]),
      style: le([l.value, i.value, a.value, e.style])
    }, {
      default: () => {
        var o, r;
        return [e.scrollable ? S("div", {
          class: "v-main__scroller"
        }, [(o = t.default) == null ? void 0 : o.call(t)]) : (r = t.default) == null ? void 0 : r.call(t)];
      }
    })), {};
  }
});
function _k(e) {
  let {
    rootEl: n,
    isSticky: t,
    layoutItemStyles: a
  } = e;
  const l = ee(!1), i = ee(0), o = w(() => {
    const c = typeof l.value == "boolean" ? "top" : l.value;
    return [t.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, l.value ? {
      [c]: oe(i.value)
    } : {
      top: a.value.top
    }];
  });
  ft(() => {
    ae(t, (c) => {
      c ? window.addEventListener("scroll", s, {
        passive: !0
      }) : window.removeEventListener("scroll", s);
    }, {
      immediate: !0
    });
  }), St(() => {
    window.removeEventListener("scroll", s);
  });
  let r = 0;
  function s() {
    const c = r > window.scrollY ? "up" : "down", u = n.value.getBoundingClientRect(), d = parseFloat(a.value.top ?? 0), v = window.scrollY - Math.max(0, i.value - d), f = u.height + Math.max(i.value, d) - window.scrollY - window.innerHeight, g = parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y")) || 0;
    u.height < window.innerHeight - d ? (l.value = "top", i.value = d) : c === "up" && l.value === "bottom" || c === "down" && l.value === "top" ? (i.value = window.scrollY + u.top - g, l.value = !0) : c === "down" && f <= 0 ? (i.value = 0, l.value = "bottom") : c === "up" && v <= 0 && (g ? l.value !== "top" && (i.value = -v + g + d, l.value = "top") : (i.value = u.top + v, l.value = "top")), r = window.scrollY;
  }
  return {
    isStuck: l,
    stickyStyles: o
  };
}
const Ik = 100, Ak = 20;
function ts(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function ns(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let n = 0;
  for (let t = e.length - 1; t > 0; t--) {
    if (e[t].t === e[t - 1].t)
      continue;
    const a = ts(n), l = (e[t].d - e[t - 1].d) / (e[t].t - e[t - 1].t);
    n += (l - a) * Math.abs(l), t === e.length - 1 && (n *= 0.5);
  }
  return ts(n) * 1e3;
}
function Tk() {
  const e = {};
  function n(l) {
    Array.from(l.changedTouches).forEach((i) => {
      (e[i.identifier] ?? (e[i.identifier] = new Vs(Ak))).push([l.timeStamp, i]);
    });
  }
  function t(l) {
    Array.from(l.changedTouches).forEach((i) => {
      delete e[i.identifier];
    });
  }
  function a(l) {
    var c;
    const i = (c = e[l]) == null ? void 0 : c.values().reverse();
    if (!i)
      throw new Error(`No samples for touch id ${l}`);
    const o = i[0], r = [], s = [];
    for (const u of i) {
      if (o[0] - u[0] > Ik) break;
      r.push({
        t: u[0],
        d: u[1].clientX
      }), s.push({
        t: u[0],
        d: u[1].clientY
      });
    }
    return {
      x: ns(r),
      y: ns(s),
      get direction() {
        const {
          x: u,
          y: d
        } = this, [v, f] = [Math.abs(u), Math.abs(d)];
        return v > f && u >= 0 ? "right" : v > f && u <= 0 ? "left" : f > v && d >= 0 ? "down" : f > v && d <= 0 ? "up" : Dk();
      }
    };
  }
  return {
    addMovement: n,
    endTouch: t,
    getVelocity: a
  };
}
function Dk() {
  throw new Error();
}
function Bk(e) {
  let {
    el: n,
    isActive: t,
    isTemporary: a,
    width: l,
    touchless: i,
    position: o
  } = e;
  ft(() => {
    window.addEventListener("touchstart", h, {
      passive: !0
    }), window.addEventListener("touchmove", C, {
      passive: !1
    }), window.addEventListener("touchend", p, {
      passive: !0
    });
  }), St(() => {
    window.removeEventListener("touchstart", h), window.removeEventListener("touchmove", C), window.removeEventListener("touchend", p);
  });
  const r = w(() => ["left", "right"].includes(o.value)), {
    addMovement: s,
    endTouch: c,
    getVelocity: u
  } = Tk();
  let d = !1;
  const v = ee(!1), f = ee(0), g = ee(0);
  let b;
  function m(P, I) {
    return (o.value === "left" ? P : o.value === "right" ? document.documentElement.clientWidth - P : o.value === "top" ? P : o.value === "bottom" ? document.documentElement.clientHeight - P : jn()) - (I ? l.value : 0);
  }
  function y(P) {
    let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const V = o.value === "left" ? (P - g.value) / l.value : o.value === "right" ? (document.documentElement.clientWidth - P - g.value) / l.value : o.value === "top" ? (P - g.value) / l.value : o.value === "bottom" ? (document.documentElement.clientHeight - P - g.value) / l.value : jn();
    return I ? Me(V) : V;
  }
  function h(P) {
    if (i.value) return;
    const I = P.changedTouches[0].clientX, V = P.changedTouches[0].clientY, T = 25, A = o.value === "left" ? I < T : o.value === "right" ? I > document.documentElement.clientWidth - T : o.value === "top" ? V < T : o.value === "bottom" ? V > document.documentElement.clientHeight - T : jn(), D = t.value && (o.value === "left" ? I < l.value : o.value === "right" ? I > document.documentElement.clientWidth - l.value : o.value === "top" ? V < l.value : o.value === "bottom" ? V > document.documentElement.clientHeight - l.value : jn());
    (A || D || t.value && a.value) && (b = [I, V], g.value = m(r.value ? I : V, t.value), f.value = y(r.value ? I : V), d = g.value > -20 && g.value < 80, c(P), s(P));
  }
  function C(P) {
    const I = P.changedTouches[0].clientX, V = P.changedTouches[0].clientY;
    if (d) {
      if (!P.cancelable) {
        d = !1;
        return;
      }
      const A = Math.abs(I - b[0]), D = Math.abs(V - b[1]);
      (r.value ? A > D && A > 3 : D > A && D > 3) ? (v.value = !0, d = !1) : (r.value ? D : A) > 3 && (d = !1);
    }
    if (!v.value) return;
    P.preventDefault(), s(P);
    const T = y(r.value ? I : V, !1);
    f.value = Math.max(0, Math.min(1, T)), T > 1 ? g.value = m(r.value ? I : V, !0) : T < 0 && (g.value = m(r.value ? I : V, !1));
  }
  function p(P) {
    if (d = !1, !v.value) return;
    s(P), v.value = !1;
    const I = u(P.changedTouches[0].identifier), V = Math.abs(I.x), T = Math.abs(I.y);
    (r.value ? V > T && V > 400 : T > V && T > 3) ? t.value = I.direction === ({
      left: "right",
      right: "left",
      top: "down",
      bottom: "up"
    }[o.value] || jn()) : t.value = f.value > 0.5;
  }
  const _ = w(() => v.value ? {
    transform: o.value === "left" ? `translateX(calc(-100% + ${f.value * l.value}px))` : o.value === "right" ? `translateX(calc(100% - ${f.value * l.value}px))` : o.value === "top" ? `translateY(calc(-100% + ${f.value * l.value}px))` : o.value === "bottom" ? `translateY(calc(100% - ${f.value * l.value}px))` : jn(),
    transition: "none"
  } : void 0);
  return bt(v, () => {
    var V, T;
    const P = ((V = n.value) == null ? void 0 : V.style.transform) ?? null, I = ((T = n.value) == null ? void 0 : T.style.transition) ?? null;
    je(() => {
      var A, D, x, B;
      (D = n.value) == null || D.style.setProperty("transform", ((A = _.value) == null ? void 0 : A.transform) || "none"), (B = n.value) == null || B.style.setProperty("transition", ((x = _.value) == null ? void 0 : x.transition) || null);
    }), lt(() => {
      var A, D;
      (A = n.value) == null || A.style.setProperty("transform", P), (D = n.value) == null || D.style.setProperty("transition", I);
    });
  }), {
    isDragging: v,
    dragProgress: f,
    dragStyles: _
  };
}
function jn() {
  throw new Error();
}
const Ok = ["start", "end", "left", "right", "top", "bottom"], Ek = F({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (e) => Ok.includes(e)
  },
  sticky: Boolean,
  ...Vt(),
  ...se(),
  ..._o(),
  ...Bn({
    mobile: null
  }),
  ...at(),
  ...On(),
  ...He(),
  ...ke({
    tag: "nav"
  }),
  ...Ae()
}, "VNavigationDrawer"), Lk = W()({
  name: "VNavigationDrawer",
  props: Ek(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:rail": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      isRtl: i
    } = nt(), {
      themeClasses: o
    } = Ee(e), {
      borderClasses: r
    } = pt(e), {
      backgroundColorClasses: s,
      backgroundColorStyles: c
    } = Le(() => e.color), {
      elevationClasses: u
    } = st(e), {
      displayClasses: d,
      mobile: v
    } = $t(e), {
      roundedClasses: f
    } = Ye(e), g = vu(), b = de(e, "modelValue", null, ($) => !!$), {
      ssrBootStyles: m
    } = Ln(), {
      scopeId: y
    } = Hn(), h = j(), C = ee(!1), {
      runOpenDelay: p,
      runCloseDelay: _
    } = Io(e, ($) => {
      C.value = $;
    }), P = w(() => e.rail && e.expandOnHover && C.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), I = w(() => gi(e.location, i.value)), V = E(() => e.persistent), T = w(() => !e.permanent && (v.value || e.temporary)), A = w(() => e.sticky && !T.value && I.value !== "bottom");
    bt(() => e.expandOnHover && e.rail != null, () => {
      ae(C, ($) => a("update:rail", !$));
    }), bt(() => !e.disableResizeWatcher, () => {
      ae(T, ($) => !e.permanent && Pe(() => b.value = !$));
    }), bt(() => !e.disableRouteWatcher && !!g, () => {
      ae(g.currentRoute, () => T.value && (b.value = !1));
    }), ae(() => e.permanent, ($) => {
      $ && (b.value = !0);
    }), e.modelValue == null && !T.value && (b.value = e.permanent || !v.value);
    const {
      isDragging: D,
      dragProgress: x
    } = Bk({
      el: h,
      isActive: b,
      isTemporary: T,
      width: P,
      touchless: E(() => e.touchless),
      position: I
    }), B = w(() => {
      const $ = T.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : P.value;
      return D.value ? $ * x.value : $;
    }), {
      layoutItemStyles: M,
      layoutItemScrimStyles: L
    } = En({
      id: e.name,
      order: w(() => parseInt(e.order, 10)),
      position: I,
      layoutSize: B,
      elementSize: P,
      active: Cl(b),
      disableTransitions: E(() => D.value),
      absolute: w(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        e.absolute || A.value && typeof N.value != "string"
      ))
    }), {
      isStuck: N,
      stickyStyles: Y
    } = _k({
      rootEl: h,
      isSticky: A,
      layoutItemStyles: M
    }), te = Le(() => typeof e.scrim == "string" ? e.scrim : null), q = w(() => ({
      ...D.value ? {
        opacity: x.value * 0.2,
        transition: "none"
      } : void 0,
      ...L.value
    }));
    return Ge({
      VList: {
        bgColor: "transparent"
      }
    }), G(() => {
      const $ = l.image || e.image;
      return S(ue, null, [k(e.tag, H({
        ref: h,
        onMouseenter: p,
        onMouseleave: _,
        class: ["v-navigation-drawer", `v-navigation-drawer--${I.value}`, {
          "v-navigation-drawer--expand-on-hover": e.expandOnHover,
          "v-navigation-drawer--floating": e.floating,
          "v-navigation-drawer--is-hovering": C.value,
          "v-navigation-drawer--rail": e.rail,
          "v-navigation-drawer--temporary": T.value,
          "v-navigation-drawer--persistent": V.value,
          "v-navigation-drawer--active": b.value,
          "v-navigation-drawer--sticky": A.value
        }, o.value, s.value, r.value, d.value, u.value, f.value, e.class],
        style: [c.value, M.value, m.value, Y.value, e.style]
      }, y, t), {
        default: () => {
          var O, R, U;
          return [$ && S("div", {
            key: "image",
            class: "v-navigation-drawer__img"
          }, [l.image ? k(we, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                alt: "",
                cover: !0,
                height: "inherit",
                src: e.image
              }
            }
          }, l.image) : k(Qt, {
            key: "image-img",
            alt: "",
            cover: !0,
            height: "inherit",
            src: e.image
          }, null)]), l.prepend && S("div", {
            class: "v-navigation-drawer__prepend"
          }, [(O = l.prepend) == null ? void 0 : O.call(l)]), S("div", {
            class: "v-navigation-drawer__content"
          }, [(R = l.default) == null ? void 0 : R.call(l)]), l.append && S("div", {
            class: "v-navigation-drawer__append"
          }, [(U = l.append) == null ? void 0 : U.call(l)])];
        }
      }), k(on, {
        name: "fade-transition"
      }, {
        default: () => [T.value && (D.value || b.value) && !!e.scrim && S("div", H({
          class: ["v-navigation-drawer__scrim", te.backgroundColorClasses.value],
          style: [q.value, te.backgroundColorStyles.value],
          onClick: () => {
            V.value || (b.value = !1);
          }
        }, y), null)]
      })]);
    }), {
      isStuck: N
    };
  }
}), $k = Bt({
  name: "VNoSsr",
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = nc();
    return () => {
      var l;
      return a.value && ((l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), Mk = 50, Fk = 500;
function Rk(e) {
  let {
    toggleUpDown: n
  } = e, t = -1, a = -1;
  lt(i);
  function l(r) {
    i(), o(r), window.addEventListener("pointerup", i), document.addEventListener("blur", i), t = window.setTimeout(() => {
      a = window.setInterval(() => o(r), Mk);
    }, Fk);
  }
  function i() {
    window.clearTimeout(t), window.clearInterval(a), window.removeEventListener("pointerup", i), document.removeEventListener("blur", i);
  }
  function o(r) {
    n(r === "up");
  }
  return {
    holdStart: l,
    holdStop: i
  };
}
const Nk = F({
  controlVariant: {
    type: String,
    default: "default"
  },
  inset: Boolean,
  hideInput: Boolean,
  modelValue: {
    type: Number,
    default: null
  },
  min: {
    type: Number,
    default: Number.MIN_SAFE_INTEGER
  },
  max: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER
  },
  step: {
    type: Number,
    default: 1
  },
  precision: {
    type: Number,
    default: 0
  },
  minFractionDigits: {
    type: Number,
    default: null
  },
  decimalSeparator: {
    type: String,
    validator: (e) => !e || e.length === 1
  },
  ...Fe(Ka(), ["modelValue", "validationValue"])
}, "VNumberInput"), Hk = W()({
  name: "VNumberInput",
  props: {
    ...Nk()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = j(), {
      holdStart: l,
      holdStop: i
    } = Rk({
      toggleUpDown: T
    }), o = ja(e), r = w(() => o.isDisabled.value || o.isReadonly.value), s = ee(e.focused), {
      decimalSeparator: c
    } = Ne(), u = w(() => {
      var O;
      return ((O = e.decimalSeparator) == null ? void 0 : O[0]) || c.value;
    });
    function d(O) {
      let R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
      const ce = R == null ? String(O) : O.toFixed(R);
      if (s.value && U)
        return Number(ce).toString().replace(".", u.value);
      if (e.minFractionDigits === null || R !== null && R < e.minFractionDigits)
        return ce.replace(".", u.value);
      let [ne, Q] = ce.split(".");
      return Q = (Q ?? "").padEnd(e.minFractionDigits, "0").replace(new RegExp(`(?<=\\d{${e.minFractionDigits}})0`, "g"), ""), [ne, Q].filter(Boolean).join(u.value);
    }
    const v = de(e, "modelValue", null, (O) => O ?? null, (O) => O == null ? O ?? null : Me(Number(O), e.min, e.max)), f = ee(null);
    je(() => {
      s.value && !r.value || (v.value == null ? f.value = null : isNaN(v.value) || (f.value = d(v.value)));
    });
    const g = w({
      get: () => f.value,
      set(O) {
        if (O === null || O === "") {
          v.value = null, f.value = null;
          return;
        }
        const R = Number(O.replace(u.value, "."));
        !isNaN(R) && R <= e.max && R >= e.min && (v.value = R, f.value = O);
      }
    }), b = w(() => r.value ? !1 : (v.value ?? 0) + e.step <= e.max), m = w(() => r.value ? !1 : (v.value ?? 0) - e.step >= e.min), y = w(() => e.hideInput ? "stacked" : e.controlVariant), h = E(() => y.value === "split" ? "$plus" : "$collapse"), C = E(() => y.value === "split" ? "$minus" : "$expand"), p = E(() => y.value === "split" ? "default" : "small"), _ = E(() => y.value === "stacked" ? "auto" : "100%"), P = {
      props: {
        onClick: x,
        onPointerup: B,
        onPointerdown: M,
        onPointercancel: B
      }
    }, I = {
      props: {
        onClick: x,
        onPointerup: B,
        onPointerdown: L,
        onPointercancel: B
      }
    };
    ae(() => e.precision, () => Y()), ae(() => e.minFractionDigits, () => Y()), ft(() => {
      N();
    });
    function V(O) {
      if (O == null) return 0;
      const R = O.toString(), U = R.indexOf(".");
      return ~U ? R.length - U : 0;
    }
    function T() {
      let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      if (r.value) return;
      if (v.value == null) {
        g.value = d(Me(0, e.min, e.max));
        return;
      }
      let R = Math.max(V(v.value), V(e.step));
      e.precision != null && (R = Math.max(R, e.precision)), O ? b.value && (g.value = d(v.value + e.step, R)) : m.value && (g.value = d(v.value - e.step, R));
    }
    function A(O) {
      var ve;
      if (!O.data) return;
      const R = O.target, {
        value: U,
        selectionStart: ce,
        selectionEnd: ne
      } = R ?? {}, Q = U ? U.slice(0, ce) + O.data + U.slice(ne) : O.data, X = xv(Q, e.precision, u.value);
      new RegExp(`^-?\\d*${fi(u.value)}?\\d*$`).test(Q) || (O.preventDefault(), R.value = X), e.precision != null && (((ve = Q.split(u.value)[1]) == null ? void 0 : ve.length) > e.precision && (O.preventDefault(), R.value = X), e.precision === 0 && Q.includes(u.value) && (O.preventDefault(), R.value = X));
    }
    async function D(O) {
      ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(O.key) || O.ctrlKey || ["ArrowDown", "ArrowUp"].includes(O.key) && (O.preventDefault(), N(), await Pe(), O.key === "ArrowDown" ? T(!1) : T());
    }
    function x(O) {
      O.stopPropagation();
    }
    function B(O) {
      const R = O.currentTarget;
      R == null || R.releasePointerCapture(O.pointerId), O.preventDefault(), i();
    }
    function M(O) {
      const R = O.currentTarget;
      R == null || R.setPointerCapture(O.pointerId), O.preventDefault(), O.stopPropagation(), l("up");
    }
    function L(O) {
      const R = O.currentTarget;
      R == null || R.setPointerCapture(O.pointerId), O.preventDefault(), O.stopPropagation(), l("down");
    }
    function N() {
      if (r.value || !a.value) return;
      const O = a.value.value, R = Number(O.replace(u.value, "."));
      O && !isNaN(R) ? g.value = d(Me(R, e.min, e.max)) : g.value = null;
    }
    function Y() {
      r.value || (g.value = v.value !== null && !isNaN(v.value) ? d(v.value, e.precision, !1) : null);
    }
    function te() {
      if (!r.value) {
        if (v.value === null || isNaN(v.value)) {
          g.value = null;
          return;
        }
        g.value = v.value.toString().replace(".", u.value);
      }
    }
    function q() {
      te();
    }
    function $() {
      N();
    }
    return G(() => {
      const {
        modelValue: O,
        ...R
      } = Gt.filterProps(e);
      function U() {
        return t.increment ? k(we, {
          key: "increment-defaults",
          defaults: {
            VBtn: {
              disabled: !b.value,
              flat: !0,
              height: _.value,
              size: p.value,
              icon: h.value
            }
          }
        }, {
          default: () => [t.increment(P)]
        }) : k(xe, {
          "aria-hidden": "true",
          "data-testid": "increment",
          disabled: !b.value,
          flat: !0,
          height: _.value,
          icon: h.value,
          key: "increment-btn",
          onClick: x,
          onPointerdown: M,
          onPointerup: B,
          onPointercancel: B,
          size: p.value,
          tabindex: "-1"
        }, null);
      }
      function ce() {
        return t.decrement ? k(we, {
          key: "decrement-defaults",
          defaults: {
            VBtn: {
              disabled: !m.value,
              flat: !0,
              height: _.value,
              size: p.value,
              icon: C.value
            }
          }
        }, {
          default: () => [t.decrement(I)]
        }) : k(xe, {
          "aria-hidden": "true",
          "data-testid": "decrement",
          disabled: !m.value,
          flat: !0,
          height: _.value,
          icon: C.value,
          key: "decrement-btn",
          onClick: x,
          onPointerdown: L,
          onPointerup: B,
          onPointercancel: B,
          size: p.value,
          tabindex: "-1"
        }, null);
      }
      function ne() {
        return S("div", {
          class: "v-number-input__control"
        }, [ce(), k(At, {
          vertical: y.value !== "stacked"
        }, null), U()]);
      }
      function Q() {
        return !e.hideInput && !e.inset ? k(At, {
          vertical: !0
        }, null) : void 0;
      }
      const X = y.value === "split" ? S("div", {
        class: "v-number-input__control"
      }, [k(At, {
        vertical: !0
      }, null), U()]) : e.reverse || y.value === "hidden" ? void 0 : S(ue, null, [Q(), ne()]), ve = t["append-inner"] || X, ge = y.value === "split" ? S("div", {
        class: "v-number-input__control"
      }, [ce(), k(At, {
        vertical: !0
      }, null)]) : e.reverse && y.value !== "hidden" ? S(ue, null, [ne(), Q()]) : void 0, J = t["prepend-inner"] || ge;
      return k(Gt, H({
        ref: a
      }, R, {
        modelValue: g.value,
        "onUpdate:modelValue": (ie) => g.value = ie,
        focused: s.value,
        "onUpdate:focused": (ie) => s.value = ie,
        validationValue: v.value,
        onBeforeinput: A,
        onFocus: q,
        onBlur: $,
        onKeydown: D,
        class: ["v-number-input", {
          "v-number-input--default": y.value === "default",
          "v-number-input--hide-input": e.hideInput,
          "v-number-input--inset": e.inset,
          "v-number-input--reverse": e.reverse,
          "v-number-input--split": y.value === "split",
          "v-number-input--stacked": y.value === "stacked"
        }, e.class],
        style: e.style,
        inputmode: "decimal"
      }), {
        ...t,
        "append-inner": ve ? function() {
          var me;
          for (var ie = arguments.length, K = new Array(ie), Z = 0; Z < ie; Z++)
            K[Z] = arguments[Z];
          return S(ue, null, [(me = t["append-inner"]) == null ? void 0 : me.call(t, ...K), X]);
        } : void 0,
        "prepend-inner": J ? function() {
          var me;
          for (var ie = arguments.length, K = new Array(ie), Z = 0; Z < ie; Z++)
            K[Z] = arguments[Z];
          return S(ue, null, [ge, (me = t["prepend-inner"]) == null ? void 0 : me.call(t, ...K)]);
        } : void 0
      });
    }), ut({}, a);
  }
}), zk = F({
  autofocus: Boolean,
  divider: String,
  focusAll: Boolean,
  label: {
    type: String,
    default: "$vuetify.input.otp"
  },
  length: {
    type: [Number, String],
    default: 6
  },
  modelValue: {
    type: [Number, String],
    default: void 0
  },
  placeholder: String,
  type: {
    type: String,
    default: "number"
  },
  ...Je(),
  ...Ua(),
  ...Jt(Ya({
    variant: "outlined"
  }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"])
}, "VOtpInput"), Wk = W()({
  name: "VOtpInput",
  props: zk(),
  emits: {
    finish: (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      dimensionStyles: i
    } = et(e), {
      isFocused: o,
      focus: r,
      blur: s
    } = nn(e), c = de(e, "modelValue", "", (V) => V == null ? [] : String(V).split(""), (V) => V.join("")), {
      t: u
    } = Ne(), d = w(() => Number(e.length)), v = w(() => Array(d.value).fill(0)), f = j(-1), g = j(), b = j([]), m = w(() => b.value[f.value]);
    bt(() => e.autofocus, () => {
      const V = qn();
      V.run(() => {
        const {
          intersectionRef: T,
          isIntersecting: A
        } = Ra();
        je(() => {
          T.value = b.value[0];
        }), ae(A, (D) => {
          var x;
          D && ((x = T.value) == null || x.focus(), V.stop());
        });
      });
    });
    function y() {
      if (I(m.value.value)) {
        m.value.value = "";
        return;
      }
      const V = c.value.slice(), T = m.value.value;
      V[f.value] = T;
      let A = null;
      f.value > c.value.length ? A = c.value.length + 1 : f.value + 1 !== d.value && (A = "next"), c.value = V, A && wn(g.value, A);
    }
    function h(V) {
      const T = c.value.slice(), A = f.value;
      let D = null;
      ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(V.key) && (V.preventDefault(), V.key === "ArrowLeft" ? D = "prev" : V.key === "ArrowRight" ? D = "next" : ["Backspace", "Delete"].includes(V.key) && (T[f.value] = "", c.value = T, f.value > 0 && V.key === "Backspace" ? D = "prev" : requestAnimationFrame(() => {
        var x;
        (x = b.value[A]) == null || x.select();
      })), requestAnimationFrame(() => {
        D != null && wn(g.value, D);
      }));
    }
    function C(V, T) {
      var x, B;
      T.preventDefault(), T.stopPropagation();
      const A = ((x = T == null ? void 0 : T.clipboardData) == null ? void 0 : x.getData("Text").trim().slice(0, d.value)) ?? "", D = A.length - 1 === -1 ? V : A.length - 1;
      I(A) || (c.value = A.split(""), (B = b.value) == null || B[D].focus());
    }
    function p() {
      c.value = [];
    }
    function _(V, T) {
      r(), f.value = T;
    }
    function P() {
      s(), f.value = -1;
    }
    function I(V) {
      return e.type === "number" && /[^0-9]/g.test(V);
    }
    return Ge({
      VField: {
        color: E(() => e.color),
        bgColor: E(() => e.color),
        baseColor: E(() => e.baseColor),
        disabled: E(() => e.disabled),
        error: E(() => e.error),
        variant: E(() => e.variant)
      }
    }, {
      scoped: !0
    }), ae(c, (V) => {
      V.length === d.value && (f.value = d.value - 1, a("finish", V.join("")));
    }, {
      deep: !0
    }), ae(f, (V) => {
      V < 0 || Pe(() => {
        var T;
        (T = b.value[V]) == null || T.select();
      });
    }), G(() => {
      var A;
      const [V, T] = dn(t);
      return S("div", H({
        class: ["v-otp-input", {
          "v-otp-input--divided": !!e.divider
        }, e.class],
        style: [e.style]
      }, V), [S("div", {
        ref: g,
        class: "v-otp-input__content",
        style: le([i.value])
      }, [v.value.map((D, x) => S(ue, null, [e.divider && x !== 0 && S("span", {
        class: "v-otp-input__divider"
      }, [e.divider]), k(un, {
        focused: o.value && e.focusAll || f.value === x,
        key: x
      }, {
        ...l,
        loader: void 0,
        default: () => S("input", {
          ref: (B) => b.value[x] = B,
          "aria-label": u(e.label, x + 1),
          autofocus: x === 0 && e.autofocus,
          autocomplete: "one-time-code",
          class: z(["v-otp-input__field"]),
          disabled: e.disabled,
          inputmode: e.type === "number" ? "numeric" : "text",
          min: e.type === "number" ? 0 : void 0,
          maxlength: x === 0 ? d.value : "1",
          placeholder: e.placeholder,
          type: e.type === "number" ? "text" : e.type,
          value: c.value[x],
          onInput: y,
          onFocus: (B) => _(B, x),
          onBlur: P,
          onKeydown: h,
          onPaste: (B) => C(x, B)
        }, null)
      })])), S("input", H({
        class: "v-otp-input-input",
        type: "hidden"
      }, T, {
        value: c.value.join("")
      }), null), k(Nt, {
        contained: !0,
        contentClass: "v-otp-input__loader",
        modelValue: !!e.loading,
        persistent: !0
      }, {
        default: () => {
          var D;
          return [((D = l.loader) == null ? void 0 : D.call(l)) ?? k(rn, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "24",
            width: "2"
          }, null)];
        }
      }), (A = l.default) == null ? void 0 : A.call(l)])]);
    }), {
      blur: () => {
        var V;
        (V = b.value) == null || V.some((T) => T.blur());
      },
      focus: () => {
        var V;
        (V = b.value) == null || V[0].focus();
      },
      reset: p,
      isFocused: o
    };
  }
});
function Uk(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const jk = F({
  scale: {
    type: [Number, String],
    default: 0.5
  },
  ...se()
}, "VParallax"), Gk = W()({
  name: "VParallax",
  props: jk(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = Ra(), {
      resizeRef: i,
      contentRect: o
    } = Rt(), {
      height: r
    } = $t(), s = j();
    je(() => {
      var f;
      a.value = i.value = (f = s.value) == null ? void 0 : f.$el;
    });
    let c;
    ae(l, (f) => {
      f ? (c = uo(a.value), c = c === document.scrollingElement ? document : c, c.addEventListener("scroll", v, {
        passive: !0
      }), v()) : c.removeEventListener("scroll", v);
    }), St(() => {
      c == null || c.removeEventListener("scroll", v);
    }), ae(r, v), ae(() => {
      var f;
      return (f = o.value) == null ? void 0 : f.height;
    }, v);
    const u = w(() => 1 - Me(Number(e.scale)));
    let d = -1;
    function v() {
      l.value && (cancelAnimationFrame(d), d = requestAnimationFrame(() => {
        var _;
        const f = ((_ = s.value) == null ? void 0 : _.$el).querySelector(".v-img__img");
        if (!f) return;
        const g = c instanceof Document ? document.documentElement.clientHeight : c.clientHeight, b = c instanceof Document ? window.scrollY : c.scrollTop, m = a.value.getBoundingClientRect().top + b, y = o.value.height, h = m + (y - g) / 2, C = Uk((b - h) * u.value), p = Math.max(1, (u.value * (g - y) + y) / y);
        f.style.setProperty("transform", `translateY(${C}px) scale(${p})`);
      }));
    }
    return G(() => k(Qt, {
      class: z(["v-parallax", {
        "v-parallax--active": l.value
      }, e.class]),
      style: le(e.style),
      ref: s,
      cover: !0,
      onLoadstart: v,
      onLoad: v
    }, t)), {};
  }
}), Yk = F({
  ...Bl({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), Kk = W()({
  name: "VRadio",
  props: Yk(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => {
      const a = sn.filterProps(e);
      return k(sn, H(a, {
        class: ["v-radio", e.class],
        style: e.style,
        type: "radio"
      }), t);
    }), {};
  }
}), qk = F({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...an(),
  ...Fe(Co(), ["multiple"]),
  trueIcon: {
    type: fe,
    default: "$radioOn"
  },
  falseIcon: {
    type: fe,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup"), Xk = W()({
  name: "VRadioGroup",
  inheritAttrs: !1,
  props: qk(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = xt(), i = w(() => e.id || `radio-group-${l}`), o = de(e, "modelValue"), r = j();
    return G(() => {
      const [s, c] = dn(t), u = gt.filterProps(e), d = sn.filterProps(e), v = a.label ? a.label({
        label: e.label,
        props: {
          for: i.value
        }
      }) : e.label;
      return k(gt, H({
        ref: r,
        class: ["v-radio-group", e.class],
        style: e.style
      }, s, u, {
        modelValue: o.value,
        "onUpdate:modelValue": (f) => o.value = f,
        id: i.value
      }), {
        ...a,
        default: (f) => {
          let {
            id: g,
            messagesId: b,
            isDisabled: m,
            isReadonly: y
          } = f;
          return S(ue, null, [v && k(sa, {
            id: g.value
          }, {
            default: () => [v]
          }), k(xu, H(d, {
            id: g.value,
            "aria-describedby": b.value,
            defaultsTarget: "VRadio",
            trueIcon: e.trueIcon,
            falseIcon: e.falseIcon,
            type: e.type,
            disabled: m.value,
            readonly: y.value,
            "aria-labelledby": v ? g.value : void 0,
            multiple: !1
          }, c, {
            modelValue: o.value,
            "onUpdate:modelValue": (h) => o.value = h
          }), a)]);
        }
      });
    }), ut({}, r);
  }
}), Zk = F({
  ...Ua(),
  ...an(),
  ...Pc(),
  strict: Boolean,
  modelValue: {
    type: Array,
    default: () => [0, 0]
  }
}, "VRangeSlider"), Qk = W()({
  name: "VRangeSlider",
  props: Zk(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    end: (e) => !0,
    start: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = j(), i = j(), o = j(), {
      rtlClasses: r
    } = nt();
    function s(A) {
      if (!l.value || !i.value) return;
      const D = Mi(A, l.value.$el, e.direction), x = Mi(A, i.value.$el, e.direction), B = Math.abs(D), M = Math.abs(x);
      return B < M || B === M && D < 0 ? l.value.$el : i.value.$el;
    }
    const c = _c(e), u = de(e, "modelValue", void 0, (A) => A != null && A.length ? A.map((D) => c.roundValue(D)) : [0, 0]), {
      activeThumbRef: d,
      hasLabels: v,
      max: f,
      min: g,
      mousePressed: b,
      onSliderMousedown: m,
      onSliderTouchstart: y,
      position: h,
      trackContainerRef: C,
      readonly: p
    } = Ic({
      props: e,
      steps: c,
      onSliderStart: () => {
        a("start", u.value);
      },
      onSliderEnd: (A) => {
        var B;
        let {
          value: D
        } = A;
        const x = d.value === ((B = l.value) == null ? void 0 : B.$el) ? [D, u.value[1]] : [u.value[0], D];
        !e.strict && x[0] < x[1] && (u.value = x), a("end", u.value);
      },
      onSliderMove: (A) => {
        var M, L, N, Y;
        let {
          value: D
        } = A;
        const [x, B] = u.value;
        !e.strict && x === B && x !== g.value && (d.value = D > x ? (M = i.value) == null ? void 0 : M.$el : (L = l.value) == null ? void 0 : L.$el, (N = d.value) == null || N.focus()), d.value === ((Y = l.value) == null ? void 0 : Y.$el) ? u.value = [Math.min(D, B), B] : u.value = [x, Math.max(x, D)];
      },
      getActiveThumb: s
    }), {
      isFocused: _,
      focus: P,
      blur: I
    } = nn(e), V = w(() => h(u.value[0])), T = w(() => h(u.value[1]));
    return G(() => {
      const A = gt.filterProps(e), D = !!(e.label || t.label || t.prepend);
      return k(gt, H({
        class: ["v-slider", "v-range-slider", {
          "v-slider--has-labels": !!t["tick-label"] || v.value,
          "v-slider--focused": _.value,
          "v-slider--pressed": b.value,
          "v-slider--disabled": e.disabled
        }, r.value, e.class],
        style: e.style,
        ref: o
      }, A, {
        focused: _.value
      }), {
        ...t,
        prepend: D ? (x) => {
          var B, M;
          return S(ue, null, [((B = t.label) == null ? void 0 : B.call(t, x)) ?? (e.label ? k(sa, {
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (M = t.prepend) == null ? void 0 : M.call(t, x)]);
        } : void 0,
        default: (x) => {
          var L, N;
          let {
            id: B,
            messagesId: M
          } = x;
          return S("div", {
            class: "v-slider__container",
            onMousedown: p.value ? void 0 : m,
            onTouchstartPassive: p.value ? void 0 : y
          }, [S("input", {
            id: `${B.value}_start`,
            name: e.name || B.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: u.value[0]
          }, null), S("input", {
            id: `${B.value}_stop`,
            name: e.name || B.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: u.value[1]
          }, null), k(Ac, {
            ref: C,
            start: V.value,
            stop: T.value
          }, {
            "tick-label": t["tick-label"]
          }), k(Fi, {
            ref: l,
            "aria-describedby": M.value,
            focused: _ && d.value === ((L = l.value) == null ? void 0 : L.$el),
            modelValue: u.value[0],
            "onUpdate:modelValue": (Y) => u.value = [Y, u.value[1]],
            onFocus: (Y) => {
              var te, q, $, O;
              P(), d.value = (te = l.value) == null ? void 0 : te.$el, f.value !== g.value && u.value[0] === u.value[1] && u.value[1] === g.value && Y.relatedTarget !== ((q = i.value) == null ? void 0 : q.$el) && (($ = l.value) == null || $.$el.blur(), (O = i.value) == null || O.$el.focus());
            },
            onBlur: () => {
              I(), d.value = void 0;
            },
            min: g.value,
            max: u.value[1],
            position: V.value,
            ripple: e.ripple
          }, {
            "thumb-label": t["thumb-label"]
          }), k(Fi, {
            ref: i,
            "aria-describedby": M.value,
            focused: _ && d.value === ((N = i.value) == null ? void 0 : N.$el),
            modelValue: u.value[1],
            "onUpdate:modelValue": (Y) => u.value = [u.value[0], Y],
            onFocus: (Y) => {
              var te, q, $, O;
              P(), d.value = (te = i.value) == null ? void 0 : te.$el, f.value !== g.value && u.value[0] === u.value[1] && u.value[0] === f.value && Y.relatedTarget !== ((q = l.value) == null ? void 0 : q.$el) && (($ = i.value) == null || $.$el.blur(), (O = l.value) == null || O.$el.focus());
            },
            onBlur: () => {
              I(), d.value = void 0;
            },
            min: u.value[0],
            max: f.value,
            position: T.value,
            ripple: e.ripple
          }, {
            "thumb-label": t["thumb-label"]
          })]);
        }
      });
    }), ut({
      focus: () => {
        var A;
        return (A = l.value) == null ? void 0 : A.$el.focus();
      }
    }, o);
  }
}), Jk = F({
  name: String,
  itemAriaLabel: {
    type: String,
    default: "$vuetify.rating.ariaLabel.item"
  },
  activeColor: String,
  color: String,
  clearable: Boolean,
  disabled: Boolean,
  emptyIcon: {
    type: fe,
    default: "$ratingEmpty"
  },
  fullIcon: {
    type: fe,
    default: "$ratingFull"
  },
  halfIncrements: Boolean,
  hover: Boolean,
  length: {
    type: [Number, String],
    default: 5
  },
  readonly: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  itemLabels: Array,
  itemLabelPosition: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ripple: Boolean,
  ...se(),
  ...it(),
  ...Kt(),
  ...ke(),
  ...Ae()
}, "VRating"), eS = W()({
  name: "VRating",
  props: Jk(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Ne(), {
      themeClasses: l
    } = Ee(e), i = de(e, "modelValue"), o = w(() => Me(parseFloat(i.value), 0, Number(e.length))), r = w(() => _t(Number(e.length), 1)), s = w(() => r.value.flatMap((m) => e.halfIncrements ? [m - 0.5, m] : [m])), c = ee(-1), u = w(() => s.value.map((m) => {
      const y = e.hover && c.value > -1, h = o.value >= m, C = c.value >= m, _ = (y ? C : h) ? e.fullIcon : e.emptyIcon, P = e.activeColor ?? e.color, I = h || C ? P : e.color;
      return {
        isFilled: h,
        isHovered: C,
        icon: _,
        color: I
      };
    })), d = w(() => [0, ...s.value].map((m) => {
      function y() {
        c.value = m;
      }
      function h() {
        c.value = -1;
      }
      function C() {
        e.disabled || e.readonly || (i.value = o.value === m && e.clearable ? 0 : m);
      }
      return {
        onMouseenter: e.hover ? y : void 0,
        onMouseleave: e.hover ? h : void 0,
        onClick: C
      };
    })), v = xt(), f = w(() => e.name ?? `v-rating-${v}`);
    function g(m) {
      var T, A;
      let {
        value: y,
        index: h,
        showStar: C = !0
      } = m;
      const {
        onMouseenter: p,
        onMouseleave: _,
        onClick: P
      } = d.value[h + 1], I = `${f.value}-${String(y).replace(".", "-")}`, V = {
        color: (T = u.value[h]) == null ? void 0 : T.color,
        density: e.density,
        disabled: e.disabled,
        icon: (A = u.value[h]) == null ? void 0 : A.icon,
        ripple: e.ripple,
        size: e.size,
        variant: "plain"
      };
      return S(ue, null, [S("label", {
        for: I,
        class: z({
          "v-rating__item--half": e.halfIncrements && y % 1 > 0,
          "v-rating__item--full": e.halfIncrements && y % 1 === 0
        }),
        onMouseenter: p,
        onMouseleave: _,
        onClick: P
      }, [S("span", {
        class: "v-rating__hidden"
      }, [a(e.itemAriaLabel, y, e.length)]), C ? t.item ? t.item({
        ...u.value[h],
        props: V,
        value: y,
        index: h,
        rating: o.value
      }) : k(xe, H({
        "aria-label": a(e.itemAriaLabel, y, e.length)
      }, V), null) : void 0]), S("input", {
        class: "v-rating__hidden",
        name: f.value,
        id: I,
        type: "radio",
        value: y,
        checked: o.value === y,
        tabindex: -1,
        readonly: e.readonly,
        disabled: e.disabled
      }, null)]);
    }
    function b(m) {
      return t["item-label"] ? t["item-label"](m) : m.label ? S("span", null, [m.label]) : S("span", null, [mt(" ")]);
    }
    return G(() => {
      var y;
      const m = !!((y = e.itemLabels) != null && y.length) || t["item-label"];
      return k(e.tag, {
        class: z(["v-rating", {
          "v-rating--hover": e.hover,
          "v-rating--readonly": e.readonly
        }, l.value, e.class]),
        style: le(e.style)
      }, {
        default: () => [k(g, {
          value: 0,
          index: -1,
          showStar: !1
        }, null), r.value.map((h, C) => {
          var p, _;
          return S("div", {
            class: "v-rating__wrapper"
          }, [m && e.itemLabelPosition === "top" ? b({
            value: h,
            index: C,
            label: (p = e.itemLabels) == null ? void 0 : p[C]
          }) : void 0, S("div", {
            class: "v-rating__item"
          }, [e.halfIncrements ? S(ue, null, [k(g, {
            value: h - 0.5,
            index: C * 2
          }, null), k(g, {
            value: h,
            index: C * 2 + 1
          }, null)]) : k(g, {
            value: h,
            index: C
          }, null)]), m && e.itemLabelPosition === "bottom" ? b({
            value: h,
            index: C,
            label: (_ = e.itemLabels) == null ? void 0 : _[C]
          }) : void 0]);
        })]
      });
    }), {};
  }
}), tS = {
  actions: "button@2",
  article: "heading, paragraph",
  avatar: "avatar",
  button: "button",
  card: "image, heading",
  "card-avatar": "image, list-item-avatar",
  chip: "chip",
  "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions",
  "date-picker-options": "text, avatar@2",
  "date-picker-days": "avatar@28",
  divider: "divider",
  heading: "heading",
  image: "image",
  "list-item": "text",
  "list-item-avatar": "avatar, text",
  "list-item-two-line": "sentences",
  "list-item-avatar-two-line": "avatar, sentences",
  "list-item-three-line": "paragraph",
  "list-item-avatar-three-line": "avatar, paragraph",
  ossein: "ossein",
  paragraph: "text@3",
  sentences: "text@2",
  subtitle: "text",
  table: "table-heading, table-thead, table-tbody, table-tfoot",
  "table-heading": "chip, text",
  "table-thead": "heading@6",
  "table-tbody": "table-row-divider@6",
  "table-row-divider": "table-row, divider",
  "table-row": "text@6",
  "table-tfoot": "text@2, avatar@2",
  text: "text"
};
function nS(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return S("div", {
    class: z(["v-skeleton-loader__bone", `v-skeleton-loader__${e}`])
  }, [n]);
}
function as(e) {
  const [n, t] = e.split("@");
  return Array.from({
    length: t
  }).map(() => Yl(n));
}
function Yl(e) {
  let n = [];
  if (!e) return n;
  const t = tS[e];
  if (e !== t) {
    if (e.includes(",")) return ls(e);
    if (e.includes("@")) return as(e);
    t.includes(",") ? n = ls(t) : t.includes("@") ? n = as(t) : t && n.push(Yl(t));
  }
  return [nS(e, n)];
}
function ls(e) {
  return e.replace(/\s/g, "").split(",").map(Yl);
}
const aS = F({
  boilerplate: Boolean,
  color: String,
  loading: Boolean,
  loadingText: {
    type: String,
    default: "$vuetify.loading"
  },
  type: {
    type: [String, Array],
    default: "ossein"
  },
  ...Je(),
  ...at(),
  ...Ae()
}, "VSkeletonLoader"), lS = W()({
  name: "VSkeletonLoader",
  props: aS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Le(() => e.color), {
      dimensionStyles: i
    } = et(e), {
      elevationClasses: o
    } = st(e), {
      themeClasses: r
    } = Ee(e), {
      t: s
    } = Ne(), c = w(() => Yl(Ue(e.type).join(",")));
    return G(() => {
      var v;
      const u = !t.default || e.loading, d = e.boilerplate || !u ? {} : {
        ariaLive: "polite",
        ariaLabel: s(e.loadingText),
        role: "alert"
      };
      return S("div", H({
        class: ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": e.boilerplate
        }, r.value, a.value, o.value],
        style: [l.value, u ? i.value : {}]
      }, d), [u ? c.value : (v = t.default) == null ? void 0 : v.call(t)]);
    }), {};
  }
}), iS = W()({
  name: "VSlideGroupItem",
  props: Fn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Rn(e, Bu);
    return () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t, {
        isSelected: a.isSelected.value,
        select: a.select,
        toggle: a.toggle,
        selectedClass: a.selectedClass.value
      });
    };
  }
});
function oS(e) {
  const n = ee(e());
  let t = -1;
  function a() {
    clearInterval(t);
  }
  function l() {
    a(), Pe(() => n.value = e());
  }
  function i(o) {
    const r = o ? getComputedStyle(o) : {
      transitionDuration: 0.2
    }, s = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (a(), n.value <= 0) return;
    const c = performance.now();
    t = window.setInterval(() => {
      const u = performance.now() - c + s;
      n.value = Math.max(e() - u, 0), n.value <= 0 && a();
    }, s);
  }
  return lt(a), {
    clear: a,
    time: n,
    start: i,
    reset: l
  };
}
const Cd = F({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...tn({
    location: "bottom"
  }),
  ...oa(),
  ...He(),
  ...Mt(),
  ...Ae(),
  ...Fe(Ga({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar"), Ki = W()({
  name: "VSnackbar",
  props: Cd(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = de(e, "modelValue"), {
      positionClasses: l
    } = ra(e), {
      scopeId: i
    } = Hn(), {
      themeClasses: o
    } = Ee(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: c
    } = $n(e), {
      roundedClasses: u
    } = Ye(e), d = oS(() => Number(e.timeout)), v = j(), f = j(), g = ee(!1), b = ee(0), m = j(), y = Ie(Ca, void 0);
    bt(() => !!y, () => {
      const D = eu();
      je(() => {
        m.value = D.mainStyles.value;
      });
    }), ae(a, C), ae(() => e.timeout, C), ft(() => {
      a.value && C();
    });
    let h = -1;
    function C() {
      d.reset(), window.clearTimeout(h);
      const D = Number(e.timeout);
      if (!a.value || D === -1) return;
      const x = no(f.value);
      d.start(x), h = window.setTimeout(() => {
        a.value = !1;
      }, D);
    }
    function p() {
      d.reset(), window.clearTimeout(h);
    }
    function _() {
      g.value = !0, p();
    }
    function P() {
      g.value = !1, C();
    }
    function I(D) {
      b.value = D.touches[0].clientY;
    }
    function V(D) {
      Math.abs(b.value - D.changedTouches[0].clientY) > 50 && (a.value = !1);
    }
    function T() {
      g.value && P();
    }
    const A = w(() => e.location.split(" ").reduce((D, x) => (D[`v-snackbar--${x}`] = !0, D), {}));
    return G(() => {
      const D = Nt.filterProps(e), x = !!(t.default || t.text || e.text);
      return k(Nt, H({
        ref: v,
        class: ["v-snackbar", {
          "v-snackbar--active": a.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--timer": !!e.timer,
          "v-snackbar--vertical": e.vertical
        }, A.value, l.value, e.class],
        style: [m.value, e.style]
      }, D, {
        modelValue: a.value,
        "onUpdate:modelValue": (B) => a.value = B,
        contentProps: H({
          class: ["v-snackbar__wrapper", o.value, r.value, u.value, c.value],
          style: [s.value],
          onPointerenter: _,
          onPointerleave: P
        }, D.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0,
        onTouchstartPassive: I,
        onTouchend: V,
        onAfterLeave: T
      }, i), {
        default: () => {
          var B, M;
          return [vn(!1, "v-snackbar"), e.timer && !g.value && S("div", {
            key: "timer",
            class: "v-snackbar__timer"
          }, [k(Al, {
            ref: f,
            color: typeof e.timer == "string" ? e.timer : "info",
            max: e.timeout,
            modelValue: d.time.value
          }, null)]), x && S("div", {
            key: "content",
            class: "v-snackbar__content",
            role: "status",
            "aria-live": "polite"
          }, [((B = t.text) == null ? void 0 : B.call(t)) ?? e.text, (M = t.default) == null ? void 0 : M.call(t)]), t.actions && k(we, {
            defaults: {
              VBtn: {
                variant: "text",
                ripple: !1,
                slim: !0
              }
            }
          }, {
            default: () => [S("div", {
              class: "v-snackbar__actions"
            }, [t.actions({
              isActive: a
            })])]
          })];
        },
        activator: t.activator
      });
    }), ut({}, v);
  }
}), rS = F({
  // TODO: Port this to Snackbar on dev
  closable: [Boolean, String],
  closeText: {
    type: String,
    default: "$vuetify.dismiss"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  ...Fe(Cd(), ["modelValue"])
}, "VSnackbarQueue"), sS = W()({
  name: "VSnackbarQueue",
  props: rS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Ne(), i = ee(!1), o = ee(!1), r = ee();
    ae(() => e.modelValue.length, (v, f) => {
      !o.value && v > f && c();
    }), ae(i, (v) => {
      v && (o.value = !0);
    });
    function s() {
      e.modelValue.length ? c() : (r.value = void 0, o.value = !1);
    }
    function c() {
      const [v, ...f] = e.modelValue;
      t("update:modelValue", f), r.value = typeof v == "string" ? {
        text: v
      } : v, Pe(() => {
        i.value = !0;
      });
    }
    function u() {
      i.value = !1;
    }
    const d = w(() => ({
      color: typeof e.closable == "string" ? e.closable : void 0,
      text: l(e.closeText)
    }));
    G(() => {
      const v = !!(e.closable || a.actions), {
        modelValue: f,
        ...g
      } = Ki.filterProps(e);
      return S(ue, null, [o.value && !!r.value && (a.default ? k(we, {
        defaults: {
          VSnackbar: r.value
        }
      }, {
        default: () => [a.default({
          item: r.value
        })]
      }) : k(Ki, H(g, r.value, {
        modelValue: i.value,
        "onUpdate:modelValue": (b) => i.value = b,
        onAfterLeave: s
      }), {
        text: a.text ? () => {
          var b;
          return (b = a.text) == null ? void 0 : b.call(a, {
            item: r.value
          });
        } : void 0,
        actions: v ? () => S(ue, null, [a.actions ? k(we, {
          defaults: {
            VBtn: d.value
          }
        }, {
          default: () => [a.actions({
            item: r.value,
            props: {
              onClick: u
            }
          })]
        }) : k(xe, H(d.value, {
          onClick: u
        }), null)]) : void 0
      }))]);
    });
  }
}), xd = F({
  autoDraw: Boolean,
  autoDrawDuration: [Number, String],
  autoDrawEasing: {
    type: String,
    default: "ease"
  },
  color: String,
  gradient: {
    type: Array,
    default: () => []
  },
  gradientDirection: {
    type: String,
    validator: (e) => ["top", "bottom", "left", "right"].includes(e),
    default: "top"
  },
  height: {
    type: [String, Number],
    default: 75
  },
  labels: {
    type: Array,
    default: () => []
  },
  labelSize: {
    type: [Number, String],
    default: 7
  },
  lineWidth: {
    type: [String, Number],
    default: 4
  },
  id: String,
  itemValue: {
    type: String,
    default: "value"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  min: [String, Number],
  max: [String, Number],
  padding: {
    type: [String, Number],
    default: 8
  },
  showLabels: Boolean,
  smooth: [Boolean, String, Number],
  width: {
    type: [Number, String],
    default: 300
  }
}, "Line"), Vd = F({
  autoLineWidth: Boolean,
  ...xd()
}, "VBarline"), is = W()({
  name: "VBarline",
  props: Vd(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = xt(), l = w(() => e.id || `barline-${a}`), i = w(() => Number(e.autoDrawDuration) || 500), o = w(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), r = w(() => parseFloat(e.lineWidth) || 4), s = w(() => Math.max(e.modelValue.length * r.value, Number(e.width))), c = w(() => ({
      minX: 0,
      maxX: s.value,
      minY: 0,
      maxY: parseInt(e.height, 10)
    })), u = w(() => e.modelValue.map((m) => Qe(m, e.itemValue, m)));
    function d(m, y) {
      const {
        minX: h,
        maxX: C,
        minY: p,
        maxY: _
      } = y, P = m.length;
      let I = e.max != null ? Number(e.max) : Math.max(...m), V = e.min != null ? Number(e.min) : Math.min(...m);
      V > 0 && e.min == null && (V = 0), I < 0 && e.max == null && (I = 0);
      const T = C / P, A = (_ - p) / (I - V || 1), D = _ - Math.abs(V * A);
      return m.map((x, B) => {
        const M = Math.abs(A * x);
        return {
          x: h + B * T,
          y: D - M + +(x < 0) * M,
          height: M,
          value: x
        };
      });
    }
    const v = w(() => {
      const m = [], y = d(u.value, c.value), h = y.length;
      for (let C = 0; m.length < h; C++) {
        const p = y[C];
        let _ = e.labels[C];
        _ || (_ = typeof p == "object" ? p.value : p), m.push({
          x: p.x,
          value: String(_)
        });
      }
      return m;
    }), f = w(() => d(u.value, c.value)), g = w(() => (Math.abs(f.value[0].x - f.value[1].x) - r.value) / 2), b = w(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
    G(() => {
      const m = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return S("svg", {
        display: "block"
      }, [S("defs", null, [S("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [m.map((y, h) => S("stop", {
        offset: h / Math.max(m.length - 1, 1),
        "stop-color": y || "currentColor"
      }, null))])]), S("clipPath", {
        id: `${l.value}-clip`
      }, [f.value.map((y) => S("rect", {
        x: y.x + g.value,
        y: y.y,
        width: r.value,
        height: y.height,
        rx: b.value,
        ry: b.value
      }, [e.autoDraw && S(ue, null, [S("animate", {
        attributeName: "y",
        from: y.y + y.height,
        to: y.y,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null), S("animate", {
        attributeName: "height",
        from: "0",
        to: y.height,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null)])]))]), o.value && S("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [v.value.map((y, h) => {
        var C;
        return S("text", {
          x: y.x + g.value + r.value / 2,
          y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [((C = t.label) == null ? void 0 : C.call(t, {
          index: h,
          value: y.value
        })) ?? y.value]);
      })]), S("g", {
        "clip-path": `url(#${l.value}-clip)`,
        fill: `url(#${l.value})`
      }, [S("rect", {
        x: 0,
        y: 0,
        width: Math.max(e.modelValue.length * r.value, Number(e.width)),
        height: e.height
      }, null)])]);
    });
  }
});
function uS(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), i = e[e.length - 1];
  return (t ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((o, r) => {
    const s = e[r + 1], c = e[r - 1] || l, u = s && cS(s, o, c);
    if (!s || u)
      return `L${o.x} ${o.y}`;
    const d = Math.min(os(c, o), os(s, o)), f = d / 2 < n ? d / 2 : n, g = rs(c, o, f), b = rs(s, o, f);
    return `L${g.x} ${g.y}S${o.x} ${o.y} ${b.x} ${b.y}`;
  }).join("") + (t ? `L${i.x} ${a - l.x + 2} Z` : "");
}
function nl(e) {
  return parseInt(e, 10);
}
function cS(e, n, t) {
  return nl(e.x + t.x) === nl(2 * n.x) && nl(e.y + t.y) === nl(2 * n.y);
}
function os(e, n) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function rs(e, n, t) {
  const a = {
    x: e.x - n.x,
    y: e.y - n.y
  }, l = Math.sqrt(a.x * a.x + a.y * a.y), i = {
    x: a.x / l,
    y: a.y / l
  };
  return {
    x: n.x + i.x * t,
    y: n.y + i.y * t
  };
}
const pd = F({
  fill: Boolean,
  ...xd()
}, "VTrendline"), ss = W()({
  name: "VTrendline",
  props: pd(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = xt(), l = w(() => e.id || `trendline-${a}`), i = w(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), o = j(0), r = j(null);
    function s(m, y) {
      const {
        minX: h,
        maxX: C,
        minY: p,
        maxY: _
      } = y, P = m.length, I = e.max != null ? Number(e.max) : Math.max(...m), V = e.min != null ? Number(e.min) : Math.min(...m), T = (C - h) / (P - 1), A = (_ - p) / (I - V || 1);
      return m.map((D, x) => ({
        x: h + x * T,
        y: _ - (D - V) * A,
        value: D
      }));
    }
    const c = w(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), u = w(() => parseFloat(e.lineWidth) || 4), d = w(() => Number(e.width)), v = w(() => {
      const m = Number(e.padding);
      return {
        minX: m,
        maxX: d.value - m,
        minY: m,
        maxY: parseInt(e.height, 10) - m
      };
    }), f = w(() => e.modelValue.map((m) => Qe(m, e.itemValue, m))), g = w(() => {
      const m = [], y = s(f.value, v.value), h = y.length;
      for (let C = 0; m.length < h; C++) {
        const p = y[C];
        let _ = e.labels[C];
        _ || (_ = typeof p == "object" ? p.value : p), m.push({
          x: p.x,
          value: String(_)
        });
      }
      return m;
    });
    ae(() => e.modelValue, async () => {
      if (await Pe(), !e.autoDraw || !r.value) return;
      const m = r.value, y = m.getTotalLength();
      e.fill ? (m.style.transformOrigin = "bottom center", m.style.transition = "none", m.style.transform = "scaleY(0)", m.getBoundingClientRect(), m.style.transition = `transform ${i.value}ms ${e.autoDrawEasing}`, m.style.transform = "scaleY(1)") : (m.style.strokeDasharray = `${y}`, m.style.strokeDashoffset = `${y}`, m.getBoundingClientRect(), m.style.transition = `stroke-dashoffset ${i.value}ms ${e.autoDrawEasing}`, m.style.strokeDashoffset = "0"), o.value = y;
    }, {
      immediate: !0
    });
    function b(m) {
      const y = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
      return uS(s(f.value, v.value), y, m, parseInt(e.height, 10));
    }
    G(() => {
      var y;
      const m = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return S("svg", {
        display: "block",
        "stroke-width": parseFloat(e.lineWidth) ?? 4
      }, [S("defs", null, [S("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [m.map((h, C) => S("stop", {
        offset: C / Math.max(m.length - 1, 1),
        "stop-color": h || "currentColor"
      }, null))])]), c.value && S("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [g.value.map((h, C) => {
        var p;
        return S("text", {
          x: h.x + u.value / 2 + u.value / 2,
          y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [((p = t.label) == null ? void 0 : p.call(t, {
          index: C,
          value: h.value
        })) ?? h.value]);
      })]), S("path", {
        ref: r,
        d: b(e.fill),
        fill: e.fill ? `url(#${l.value})` : "none",
        stroke: e.fill ? "none" : `url(#${l.value})`
      }, null), e.fill && S("path", {
        d: b(!1),
        fill: "none",
        stroke: e.color ?? ((y = e.gradient) == null ? void 0 : y[0])
      }, null)]);
    });
  }
}), dS = F({
  type: {
    type: String,
    default: "trend"
  },
  ...Vd(),
  ...pd()
}, "VSparkline"), vS = W()({
  name: "VSparkline",
  props: dS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = vt(() => e.color), i = w(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), o = w(() => {
      let r = parseInt(e.height, 10);
      return i.value && (r += parseInt(e.labelSize, 10) * 1.5), r;
    });
    G(() => {
      const r = e.type === "trend" ? ss : is, s = e.type === "trend" ? ss.filterProps(e) : is.filterProps(e);
      return k(r, H({
        key: e.type,
        class: a.value,
        style: l.value,
        viewBox: `0 0 ${e.width} ${parseInt(o.value, 10)}`
      }, s), t);
    });
  }
}), fS = F({
  ...se(),
  ...ic({
    offset: 8,
    minWidth: 0,
    openDelay: 0,
    closeDelay: 100,
    location: "top center",
    transition: "scale-transition"
  })
}, "VSpeedDial"), mS = W()({
  name: "VSpeedDial",
  props: fS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = de(e, "modelValue"), l = j(), i = w(() => {
      var c;
      const [r, s = "center"] = ((c = e.location) == null ? void 0 : c.split(" ")) ?? [];
      return `${r} ${s}`;
    }), o = w(() => ({
      [`v-speed-dial__content--${i.value.replace(" ", "-")}`]: !0
    }));
    return G(() => {
      const r = Pn.filterProps(e);
      return k(Pn, H(r, {
        modelValue: a.value,
        "onUpdate:modelValue": (s) => a.value = s,
        class: e.class,
        style: e.style,
        contentClass: ["v-speed-dial__content", o.value, e.contentClass],
        location: i.value,
        ref: l,
        transition: "fade-transition"
      }), {
        ...t,
        default: (s) => k(we, {
          defaults: {
            VBtn: {
              size: "small"
            }
          }
        }, {
          default: () => [k(yt, {
            appear: !0,
            group: !0,
            transition: e.transition
          }, {
            default: () => {
              var c;
              return [(c = t.default) == null ? void 0 : c.call(t, s)];
            }
          })]
        })
      });
    }), {};
  }
}), Xo = Symbol.for("vuetify:v-stepper"), Pd = F({
  color: String,
  disabled: {
    type: [Boolean, String],
    default: !1
  },
  prevText: {
    type: String,
    default: "$vuetify.stepper.prev"
  },
  nextText: {
    type: String,
    default: "$vuetify.stepper.next"
  }
}, "VStepperActions"), _d = W()({
  name: "VStepperActions",
  props: Pd(),
  emits: {
    "click:prev": () => !0,
    "click:next": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Ne();
    function i() {
      t("click:prev");
    }
    function o() {
      t("click:next");
    }
    return G(() => {
      const r = {
        onClick: i
      }, s = {
        onClick: o
      };
      return S("div", {
        class: "v-stepper-actions"
      }, [k(we, {
        defaults: {
          VBtn: {
            disabled: ["prev", !0].includes(e.disabled),
            text: l(e.prevText),
            variant: "text"
          }
        }
      }, {
        default: () => {
          var c;
          return [((c = a.prev) == null ? void 0 : c.call(a, {
            props: r
          })) ?? k(xe, r, null)];
        }
      }), k(we, {
        defaults: {
          VBtn: {
            color: e.color,
            disabled: ["next", !0].includes(e.disabled),
            text: l(e.nextText),
            variant: "tonal"
          }
        }
      }, {
        default: () => {
          var c;
          return [((c = a.next) == null ? void 0 : c.call(a, {
            props: s
          })) ?? k(xe, s, null)];
        }
      })]);
    }), {};
  }
}), Id = en("v-stepper-header"), gS = F({
  color: String,
  title: String,
  subtitle: String,
  complete: Boolean,
  completeIcon: {
    type: fe,
    default: "$complete"
  },
  editable: Boolean,
  editIcon: {
    type: fe,
    default: "$edit"
  },
  error: Boolean,
  errorIcon: {
    type: fe,
    default: "$error"
  },
  icon: fe,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  rules: {
    type: Array,
    default: () => []
  }
}, "StepperItem"), hS = F({
  ...gS(),
  ...Fn()
}, "VStepperItem"), Ad = W()({
  name: "VStepperItem",
  directives: {
    vRipple: kt
  },
  props: hS(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Rn(e, Xo, !0), l = w(() => (a == null ? void 0 : a.value.value) ?? e.value), i = w(() => e.rules.every((v) => v() === !0)), o = w(() => !e.disabled && e.editable), r = w(() => !e.disabled && e.editable), s = w(() => e.error || !i.value), c = w(() => e.complete || e.rules.length > 0 && i.value), u = w(() => s.value ? e.errorIcon : c.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), d = w(() => ({
      canEdit: r.value,
      hasError: s.value,
      hasCompleted: c.value,
      title: e.title,
      subtitle: e.subtitle,
      step: l.value,
      value: e.value
    }));
    return G(() => {
      var m, y, h;
      const v = (!a || a.isSelected.value || c.value || r.value) && !s.value && !e.disabled, f = !!(e.title != null || t.title), g = !!(e.subtitle != null || t.subtitle);
      function b() {
        a == null || a.toggle();
      }
      return We(S("button", {
        class: z(["v-stepper-item", {
          "v-stepper-item--complete": c.value,
          "v-stepper-item--disabled": e.disabled,
          "v-stepper-item--error": s.value
        }, a == null ? void 0 : a.selectedClass.value]),
        disabled: !e.editable,
        type: "button",
        onClick: b
      }, [o.value && vn(!0, "v-stepper-item"), k(Et, {
        key: "stepper-avatar",
        class: "v-stepper-item__avatar",
        color: v ? e.color : void 0,
        size: 24
      }, {
        default: () => {
          var C;
          return [((C = t.icon) == null ? void 0 : C.call(t, d.value)) ?? (u.value ? k(Be, {
            icon: u.value
          }, null) : l.value)];
        }
      }), S("div", {
        class: "v-stepper-item__content"
      }, [f && S("div", {
        key: "title",
        class: "v-stepper-item__title"
      }, [((m = t.title) == null ? void 0 : m.call(t, d.value)) ?? e.title]), g && S("div", {
        key: "subtitle",
        class: "v-stepper-item__subtitle"
      }, [((y = t.subtitle) == null ? void 0 : y.call(t, d.value)) ?? e.subtitle]), (h = t.default) == null ? void 0 : h.call(t, d.value)])]), [[kt, e.editable && e.ripple, null]]);
    }), {};
  }
}), yS = F({
  ...Fe(Ll(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VStepperWindow"), Td = W()({
  name: "VStepperWindow",
  props: yS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ie(Xo, null), l = de(e, "modelValue"), i = w({
      get() {
        var o;
        return l.value != null || !a ? l.value : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return G(() => {
      const o = _n.filterProps(e);
      return k(_n, H({
        _as: "VStepperWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-stepper-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
}), bS = F({
  ...$l()
}, "VStepperWindowItem"), Dd = W()({
  name: "VStepperWindowItem",
  props: bS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => {
      const a = In.filterProps(e);
      return k(In, H({
        _as: "VStepperWindowItem"
      }, a, {
        class: ["v-stepper-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
}), kS = F({
  altLabels: Boolean,
  bgColor: String,
  completeIcon: fe,
  editIcon: fe,
  editable: Boolean,
  errorIcon: fe,
  hideActions: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: String,
    default: "title"
  },
  itemValue: {
    type: String,
    default: "value"
  },
  nonLinear: Boolean,
  flat: Boolean,
  ...Bn()
}, "Stepper"), SS = F({
  ...kS(),
  ...Mn({
    mandatory: "force",
    selectedClass: "v-stepper-item--selected"
  }),
  ...Lo(),
  ...Jt(Pd(), ["prevText", "nextText"])
}, "VStepper"), wS = W()({
  name: "VStepper",
  props: SS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a,
      next: l,
      prev: i,
      selected: o
    } = fn(e, Xo), {
      displayClasses: r,
      mobile: s
    } = $t(e), {
      completeIcon: c,
      editIcon: u,
      errorIcon: d,
      color: v,
      editable: f,
      prevText: g,
      nextText: b
    } = aa(e), m = w(() => e.items.map((C, p) => {
      const _ = Qe(C, e.itemTitle, C), P = Qe(C, e.itemValue, p + 1);
      return {
        title: _,
        value: P,
        raw: C
      };
    })), y = w(() => a.value.findIndex((C) => o.value.includes(C.id))), h = w(() => e.disabled ? e.disabled : y.value === 0 ? "prev" : y.value === a.value.length - 1 ? "next" : !1);
    return Ge({
      VStepperItem: {
        editable: f,
        errorIcon: d,
        completeIcon: c,
        editIcon: u,
        prevText: g,
        nextText: b
      },
      VStepperActions: {
        color: v,
        disabled: h,
        prevText: g,
        nextText: b
      }
    }), G(() => {
      const C = Ta.filterProps(e), p = !!(t.header || e.items.length), _ = e.items.length > 0, P = !e.hideActions && !!(_ || t.actions);
      return k(Ta, H(C, {
        color: e.bgColor,
        class: ["v-stepper", {
          "v-stepper--alt-labels": e.altLabels,
          "v-stepper--flat": e.flat,
          "v-stepper--non-linear": e.nonLinear,
          "v-stepper--mobile": s.value
        }, r.value, e.class],
        style: e.style
      }), {
        default: () => {
          var I, V;
          return [p && k(Id, {
            key: "stepper-header"
          }, {
            default: () => [m.value.map((T, A) => {
              let {
                raw: D,
                ...x
              } = T;
              return S(ue, null, [!!A && k(At, null, null), k(Ad, x, {
                default: t[`header-item.${x.value}`] ?? t.header,
                icon: t.icon,
                title: t.title,
                subtitle: t.subtitle
              })]);
            })]
          }), _ && k(Td, {
            key: "stepper-window"
          }, {
            default: () => [m.value.map((T) => k(Dd, {
              value: T.value
            }, {
              default: () => {
                var A, D;
                return ((A = t[`item.${T.value}`]) == null ? void 0 : A.call(t, T)) ?? ((D = t.item) == null ? void 0 : D.call(t, T));
              }
            }))]
          }), (I = t.default) == null ? void 0 : I.call(t, {
            prev: i,
            next: l
          }), P && (((V = t.actions) == null ? void 0 : V.call(t, {
            next: l,
            prev: i
          })) ?? k(_d, {
            key: "stepper-actions",
            "onClick:prev": i,
            "onClick:next": l
          }, t))];
        }
      });
    }), {
      prev: i,
      next: l
    };
  }
}), CS = F({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  },
  ...an(),
  ...Bl()
}, "VSwitch"), Bd = W()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: CS(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = de(e, "indeterminate"), i = de(e, "modelValue"), {
      loaderClasses: o
    } = Na(e), {
      isFocused: r,
      focus: s,
      blur: c
    } = nn(e), u = j(), d = j(), v = Oe && window.matchMedia("(forced-colors: active)").matches, f = E(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), g = xt(), b = E(() => e.id || `switch-${g}`);
    function m() {
      l.value && (l.value = !1);
    }
    function y(h) {
      var C, p;
      h.stopPropagation(), h.preventDefault(), (p = (C = u.value) == null ? void 0 : C.input) == null || p.click();
    }
    return G(() => {
      const [h, C] = dn(t), p = gt.filterProps(e), _ = sn.filterProps(e);
      return k(gt, H({
        ref: d,
        class: ["v-switch", {
          "v-switch--flat": e.flat
        }, {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": l.value
        }, o.value, e.class]
      }, h, p, {
        modelValue: i.value,
        "onUpdate:modelValue": (P) => i.value = P,
        id: b.value,
        focused: r.value,
        style: e.style
      }), {
        ...a,
        default: (P) => {
          let {
            id: I,
            messagesId: V,
            isDisabled: T,
            isReadonly: A,
            isValid: D
          } = P;
          const x = {
            model: i,
            isValid: D
          };
          return k(sn, H({
            ref: u
          }, _, {
            modelValue: i.value,
            "onUpdate:modelValue": [(B) => i.value = B, m],
            id: I.value,
            "aria-describedby": V.value,
            type: "checkbox",
            "aria-checked": l.value ? "mixed" : void 0,
            disabled: T.value,
            readonly: A.value,
            onFocus: s,
            onBlur: c
          }, C), {
            ...a,
            default: (B) => {
              let {
                backgroundColorClasses: M,
                backgroundColorStyles: L
              } = B;
              return S("div", {
                class: z(["v-switch__track", v ? void 0 : M.value]),
                style: le(L.value),
                onClick: y
              }, [a["track-true"] && S("div", {
                key: "prepend",
                class: "v-switch__track-true"
              }, [a["track-true"](x)]), a["track-false"] && S("div", {
                key: "append",
                class: "v-switch__track-false"
              }, [a["track-false"](x)])]);
            },
            input: (B) => {
              let {
                inputNode: M,
                icon: L,
                backgroundColorClasses: N,
                backgroundColorStyles: Y
              } = B;
              return S(ue, null, [M, S("div", {
                class: z(["v-switch__thumb", {
                  "v-switch__thumb--filled": L || e.loading
                }, e.inset || v ? void 0 : N.value]),
                style: le(e.inset ? void 0 : Y.value)
              }, [a.thumb ? k(we, {
                defaults: {
                  VIcon: {
                    icon: L,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [a.thumb({
                  ...x,
                  icon: L
                })]
              }) : k(bo, null, {
                default: () => [e.loading ? k(Ha, {
                  name: "v-switch",
                  active: !0,
                  color: D.value === !1 ? void 0 : f.value
                }, {
                  default: (te) => a.loader ? a.loader(te) : k(rn, {
                    active: te.isActive,
                    color: te.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : L && k(Be, {
                  key: String(L),
                  icon: L,
                  size: "x-small"
                }, null)]
              })])]);
            }
          });
        }
      });
    }), ut({}, d);
  }
}), xS = F({
  color: String,
  height: [Number, String],
  window: Boolean,
  ...se(),
  ...at(),
  ...On(),
  ...He(),
  ...ke(),
  ...Ae()
}, "VSystemBar"), VS = W()({
  name: "VSystemBar",
  props: xS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ee(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Le(() => e.color), {
      elevationClasses: o
    } = st(e), {
      roundedClasses: r
    } = Ye(e), {
      ssrBootStyles: s
    } = Ln(), c = w(() => e.height ?? (e.window ? 32 : 24)), {
      layoutItemStyles: u
    } = En({
      id: e.name,
      order: w(() => parseInt(e.order, 10)),
      position: ee("top"),
      layoutSize: c,
      elementSize: c,
      active: w(() => !0),
      absolute: E(() => e.absolute)
    });
    return G(() => k(e.tag, {
      class: z(["v-system-bar", {
        "v-system-bar--window": e.window
      }, a.value, l.value, o.value, r.value, e.class]),
      style: le([i.value, u.value, s.value, e.style])
    }, t)), {};
  }
}), Zo = Symbol.for("vuetify:v-tabs"), pS = F({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...Fe(Dl({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab"), Qo = W()({
  name: "VTab",
  props: pS(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    const {
      textColorClasses: l,
      textColorStyles: i
    } = vt(() => e.sliderColor), o = j(), r = j(), s = w(() => e.direction === "horizontal"), c = w(() => {
      var d, v;
      return ((v = (d = o.value) == null ? void 0 : d.group) == null ? void 0 : v.isSelected.value) ?? !1;
    });
    function u(d) {
      var f, g;
      let {
        value: v
      } = d;
      if (v) {
        const b = (g = (f = o.value) == null ? void 0 : f.$el.parentElement) == null ? void 0 : g.querySelector(".v-tab--selected .v-tab__slider"), m = r.value;
        if (!b || !m) return;
        const y = getComputedStyle(b).color, h = b.getBoundingClientRect(), C = m.getBoundingClientRect(), p = s.value ? "x" : "y", _ = s.value ? "X" : "Y", P = s.value ? "right" : "bottom", I = s.value ? "width" : "height", V = h[p], T = C[p], A = V > T ? h[P] - C[P] : h[p] - C[p], D = Math.sign(A) > 0 ? s.value ? "right" : "bottom" : Math.sign(A) < 0 ? s.value ? "left" : "top" : "center", B = (Math.abs(A) + (Math.sign(A) < 0 ? h[I] : C[I])) / Math.max(h[I], C[I]) || 0, M = h[I] / C[I] || 0, L = 1.5;
        bn(m, {
          backgroundColor: [y, "currentcolor"],
          transform: [`translate${_}(${A}px) scale${_}(${M})`, `translate${_}(${A / L}px) scale${_}(${(B - 1) / L + 1})`, "none"],
          transformOrigin: Array(3).fill(D)
        }, {
          duration: 225,
          easing: Sa
        });
      }
    }
    return G(() => {
      const d = xe.filterProps(e);
      return k(xe, H({
        symbol: Zo,
        ref: o,
        class: ["v-tab", e.class],
        style: e.style,
        tabindex: c.value ? 0 : -1,
        role: "tab",
        "aria-selected": String(c.value),
        active: !1
      }, d, a, {
        block: e.fixed,
        maxWidth: e.fixed ? 300 : void 0,
        "onGroup:selected": u
      }), {
        ...t,
        default: () => {
          var v;
          return S(ue, null, [((v = t.default) == null ? void 0 : v.call(t)) ?? e.text, !e.hideSlider && S("div", {
            ref: r,
            class: z(["v-tab__slider", l.value]),
            style: le(i.value)
          }, null)]);
        }
      });
    }), ut({}, o);
  }
}), PS = F({
  ...Fe(Ll(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow"), Jo = W()({
  name: "VTabsWindow",
  props: PS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ie(Zo, null), l = de(e, "modelValue"), i = w({
      get() {
        var o;
        return l.value != null || !a ? l.value : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return G(() => {
      const o = _n.filterProps(e);
      return k(_n, H({
        _as: "VTabsWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-tabs-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
}), _S = F({
  ...$l()
}, "VTabsWindowItem"), er = W()({
  name: "VTabsWindowItem",
  props: _S(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return G(() => {
      const a = In.filterProps(e);
      return k(In, H({
        _as: "VTabsWindowItem"
      }, a, {
        class: ["v-tabs-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
});
function IS(e) {
  return e ? e.map((n) => ba(n) ? n : {
    text: n,
    value: n
  }) : [];
}
const AS = F({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...xo({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...it(),
  ...ke()
}, "VTabs"), Od = W()({
  name: "VTabs",
  props: AS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = de(e, "modelValue"), i = w(() => IS(e.items)), {
      densityClasses: o
    } = wt(e), {
      backgroundColorClasses: r,
      backgroundColorStyles: s
    } = Le(() => e.bgColor), {
      scopeId: c
    } = Hn();
    return Ge({
      VTab: {
        color: E(() => e.color),
        direction: E(() => e.direction),
        stacked: E(() => e.stacked),
        fixed: E(() => e.fixedTabs),
        sliderColor: E(() => e.sliderColor),
        hideSlider: E(() => e.hideSlider)
      }
    }), G(() => {
      const u = _a.filterProps(e), d = !!(a.window || e.items.length > 0);
      return S(ue, null, [k(_a, H(u, {
        modelValue: l.value,
        "onUpdate:modelValue": (v) => l.value = v,
        class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, {
          "v-tabs--fixed-tabs": e.fixedTabs,
          "v-tabs--grow": e.grow,
          "v-tabs--stacked": e.stacked
        }, o.value, r.value, e.class],
        style: [{
          "--v-tabs-height": oe(e.height)
        }, s.value, e.style],
        role: "tablist",
        symbol: Zo
      }, c, t), {
        default: () => {
          var v;
          return [((v = a.default) == null ? void 0 : v.call(a)) ?? i.value.map((f) => {
            var g;
            return ((g = a.tab) == null ? void 0 : g.call(a, {
              item: f
            })) ?? k(Qo, H(f, {
              key: f.text,
              value: f.value
            }), {
              default: a[`tab.${f.value}`] ? () => {
                var b;
                return (b = a[`tab.${f.value}`]) == null ? void 0 : b.call(a, {
                  item: f
                });
              } : void 0
            });
          })];
        }
      }), d && k(Jo, H({
        modelValue: l.value,
        "onUpdate:modelValue": (v) => l.value = v,
        key: "tabs-window"
      }, c), {
        default: () => {
          var v;
          return [i.value.map((f) => {
            var g;
            return ((g = a.item) == null ? void 0 : g.call(a, {
              item: f
            })) ?? k(er, {
              value: f.value
            }, {
              default: () => {
                var b;
                return (b = a[`item.${f.value}`]) == null ? void 0 : b.call(a, {
                  item: f
                });
              }
            });
          }), (v = a.window) == null ? void 0 : v.call(a)];
        }
      })]);
    }), {};
  }
}), TS = F({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (e) => !isNaN(parseFloat(e))
  },
  maxRows: {
    type: [Number, String],
    validator: (e) => !isNaN(parseFloat(e))
  },
  suffix: String,
  modelModifiers: Object,
  ...an(),
  ...Ya()
}, "VTextarea"), DS = W()({
  name: "VTextarea",
  directives: {
    vIntersect: Zt
  },
  inheritAttrs: !1,
  props: TS(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:rows": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const i = de(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = nn(e), {
      onIntersect: c
    } = oc(e), u = w(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), d = w(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), v = j(), f = j(), g = ee(""), b = j(), m = w(() => e.persistentPlaceholder || o.value || e.active);
    function y() {
      var D;
      b.value !== document.activeElement && ((D = b.value) == null || D.focus()), o.value || r();
    }
    function h(D) {
      y(), a("click:control", D);
    }
    function C(D) {
      a("mousedown:control", D);
    }
    function p(D) {
      D.stopPropagation(), y(), Pe(() => {
        i.value = "", xl(e["onClick:clear"], D);
      });
    }
    function _(D) {
      var B;
      const x = D.target;
      if (i.value = x.value, (B = e.modelModifiers) != null && B.trim) {
        const M = [x.selectionStart, x.selectionEnd];
        Pe(() => {
          x.selectionStart = M[0], x.selectionEnd = M[1];
        });
      }
    }
    const P = j(), I = j(Number(e.rows)), V = w(() => ["plain", "underlined"].includes(e.variant));
    je(() => {
      e.autoGrow || (I.value = Number(e.rows));
    });
    function T() {
      e.autoGrow && Pe(() => {
        if (!P.value || !f.value) return;
        const D = getComputedStyle(P.value), x = getComputedStyle(f.value.$el), B = parseFloat(D.getPropertyValue("--v-field-padding-top")) + parseFloat(D.getPropertyValue("--v-input-padding-top")) + parseFloat(D.getPropertyValue("--v-field-padding-bottom")), M = P.value.scrollHeight, L = parseFloat(D.lineHeight), N = Math.max(parseFloat(e.rows) * L + B, parseFloat(x.getPropertyValue("--v-input-control-height"))), Y = parseFloat(e.maxRows) * L + B || 1 / 0, te = Me(M ?? 0, N, Y);
        I.value = Math.floor((te - B) / L), g.value = oe(te);
      });
    }
    ft(T), ae(i, T), ae(() => e.rows, T), ae(() => e.maxRows, T), ae(() => e.density, T), ae(I, (D) => {
      a("update:rows", D);
    });
    let A;
    return ae(P, (D) => {
      D ? (A = new ResizeObserver(T), A.observe(P.value)) : A == null || A.disconnect();
    }), St(() => {
      A == null || A.disconnect();
    }), G(() => {
      const D = !!(l.counter || e.counter || e.counterValue), x = !!(D || l.details), [B, M] = dn(t), {
        modelValue: L,
        ...N
      } = gt.filterProps(e), Y = un.filterProps(e);
      return k(gt, H({
        ref: v,
        modelValue: i.value,
        "onUpdate:modelValue": (te) => i.value = te,
        class: ["v-textarea v-text-field", {
          "v-textarea--prefixed": e.prefix,
          "v-textarea--suffixed": e.suffix,
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-textarea--auto-grow": e.autoGrow,
          "v-textarea--no-resize": e.noResize || e.autoGrow,
          "v-input--plain-underlined": V.value
        }, e.class],
        style: e.style
      }, B, N, {
        centerAffix: I.value === 1 && !V.value,
        focused: o.value
      }), {
        ...l,
        default: (te) => {
          let {
            id: q,
            isDisabled: $,
            isDirty: O,
            isReadonly: R,
            isValid: U,
            hasDetails: ce
          } = te;
          return k(un, H({
            ref: f,
            style: {
              "--v-textarea-control-height": g.value
            },
            onClick: h,
            onMousedown: C,
            "onClick:clear": p,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, Y, {
            id: q.value,
            active: m.value || O.value,
            centerAffix: I.value === 1 && !V.value,
            dirty: O.value || e.dirty,
            disabled: $.value,
            focused: o.value,
            details: ce.value,
            error: U.value === !1
          }), {
            ...l,
            default: (ne) => {
              let {
                props: {
                  class: Q,
                  ...X
                }
              } = ne;
              return S(ue, null, [e.prefix && S("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), We(S("textarea", H({
                ref: b,
                class: Q,
                value: i.value,
                onInput: _,
                autofocus: e.autofocus,
                readonly: R.value,
                disabled: $.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: e.name,
                onFocus: y,
                onBlur: s
              }, X, M), null), [[Zt, {
                handler: c
              }, null, {
                once: !0
              }]]), e.autoGrow && We(S("textarea", {
                class: z([Q, "v-textarea__sizer"]),
                id: `${X.id}-sizer`,
                "onUpdate:modelValue": (ve) => i.value = ve,
                ref: P,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[sv, i.value]]), e.suffix && S("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: x ? (te) => {
          var q;
          return S(ue, null, [(q = l.details) == null ? void 0 : q.call(l, te), D && S(ue, null, [S("span", null, null), k(Ol, {
            active: e.persistentCounter || o.value,
            value: u.value,
            max: d.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), ut({}, v, f, b);
  }
}), BS = F({
  withBackground: Boolean,
  ...se(),
  ...Ae(),
  ...ke()
}, "VThemeProvider"), OS = W()({
  name: "VThemeProvider",
  props: BS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ee(e);
    return () => {
      var l;
      return e.withBackground ? k(e.tag, {
        class: z(["v-theme-provider", a.value, e.class]),
        style: le(e.style)
      }, {
        default: () => {
          var i;
          return [(i = t.default) == null ? void 0 : i.call(t)];
        }
      }) : (l = t.default) == null ? void 0 : l.call(t);
    };
  }
}), ES = F({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: fe,
  iconColor: String,
  lineColor: String,
  ...se(),
  ...He(),
  ...Kt(),
  ...at()
}, "VTimelineDivider"), LS = W()({
  name: "VTimelineDivider",
  props: ES(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      sizeClasses: a,
      sizeStyles: l
    } = ia(e, "v-timeline-divider__dot"), {
      backgroundColorStyles: i,
      backgroundColorClasses: o
    } = Le(() => e.dotColor), {
      roundedClasses: r
    } = Ye(e, "v-timeline-divider__dot"), {
      elevationClasses: s
    } = st(e), {
      backgroundColorClasses: c,
      backgroundColorStyles: u
    } = Le(() => e.lineColor);
    return G(() => S("div", {
      class: z(["v-timeline-divider", {
        "v-timeline-divider--fill-dot": e.fillDot
      }, e.class]),
      style: le(e.style)
    }, [S("div", {
      class: z(["v-timeline-divider__before", c.value]),
      style: le(u.value)
    }, null), !e.hideDot && S("div", {
      key: "dot",
      class: z(["v-timeline-divider__dot", s.value, r.value, a.value]),
      style: le(l.value)
    }, [S("div", {
      class: z(["v-timeline-divider__inner-dot", o.value, r.value]),
      style: le(i.value)
    }, [t.default ? k(we, {
      key: "icon-defaults",
      disabled: !e.icon,
      defaults: {
        VIcon: {
          color: e.iconColor,
          icon: e.icon,
          size: e.size
        }
      }
    }, t.default) : k(Be, {
      key: "icon",
      color: e.iconColor,
      icon: e.icon,
      size: e.size
    }, null)])]), S("div", {
      class: z(["v-timeline-divider__after", c.value]),
      style: le(u.value)
    }, null)])), {};
  }
}), Ed = F({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: void 0
  },
  icon: fe,
  iconColor: String,
  lineInset: [Number, String],
  side: {
    type: String,
    validator: (e) => e == null || ["start", "end"].includes(e)
  },
  ...se(),
  ...Je(),
  ...at(),
  ...He(),
  ...Kt(),
  ...ke()
}, "VTimelineItem"), $S = W()({
  name: "VTimelineItem",
  props: Ed(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = et(e), l = ee(0), i = j();
    return ae(i, (o) => {
      var r;
      o && (l.value = ((r = o.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : r.getBoundingClientRect().width) ?? 0);
    }, {
      flush: "post"
    }), G(() => {
      var o, r;
      return S("div", {
        class: z(["v-timeline-item", {
          "v-timeline-item--fill-dot": e.fillDot,
          "v-timeline-item--side-start": e.side === "start",
          "v-timeline-item--side-end": e.side === "end"
        }, e.class]),
        style: le([{
          "--v-timeline-dot-size": oe(l.value),
          "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${oe(e.lineInset)})` : oe(0)
        }, e.style])
      }, [S("div", {
        class: "v-timeline-item__body",
        style: le(a.value)
      }, [(o = t.default) == null ? void 0 : o.call(t)]), k(LS, {
        ref: i,
        hideDot: e.hideDot,
        icon: e.icon,
        iconColor: e.iconColor,
        size: e.size,
        elevation: e.elevation,
        dotColor: e.dotColor,
        fillDot: e.fillDot,
        rounded: e.rounded
      }, {
        default: t.icon
      }), e.density !== "compact" && S("div", {
        class: "v-timeline-item__opposite"
      }, [!e.hideOpposite && ((r = t.opposite) == null ? void 0 : r.call(t))])]);
    }), {};
  }
}), MS = F({
  align: {
    type: String,
    default: "center",
    validator: (e) => ["center", "start"].includes(e)
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  justify: {
    type: String,
    default: "auto",
    validator: (e) => ["auto", "center"].includes(e)
  },
  side: {
    type: String,
    validator: (e) => e == null || ["start", "end"].includes(e)
  },
  lineThickness: {
    type: [String, Number],
    default: 2
  },
  lineColor: String,
  truncateLine: {
    type: String,
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  ...Jt(Ed({
    lineInset: 0
  }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]),
  ...se(),
  ...it(),
  ...ke(),
  ...Ae()
}, "VTimeline"), FS = W()({
  name: "VTimeline",
  props: MS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ee(e), {
      densityClasses: l
    } = wt(e), {
      rtlClasses: i
    } = nt();
    Ge({
      VTimelineDivider: {
        lineColor: E(() => e.lineColor)
      },
      VTimelineItem: {
        density: E(() => e.density),
        dotColor: E(() => e.dotColor),
        fillDot: E(() => e.fillDot),
        hideOpposite: E(() => e.hideOpposite),
        iconColor: E(() => e.iconColor),
        lineColor: E(() => e.lineColor),
        lineInset: E(() => e.lineInset),
        size: E(() => e.size)
      }
    });
    const o = w(() => {
      const s = e.side ? e.side : e.density !== "default" ? "end" : null;
      return s && `v-timeline--side-${s}`;
    }), r = w(() => {
      const s = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (e.truncateLine) {
        case "both":
          return s;
        case "start":
          return s[0];
        case "end":
          return s[1];
        default:
          return null;
      }
    });
    return G(() => k(e.tag, {
      class: z(["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, r.value, {
        "v-timeline--inset-line": !!e.lineInset
      }, a.value, l.value, o.value, i.value, e.class]),
      style: le([{
        "--v-timeline-line-thickness": oe(e.lineThickness)
      }, e.style])
    }, t)), {};
  }
});
function kn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(n, "0");
}
const RS = F({
  allowedValues: Function,
  ampm: Boolean,
  color: String,
  disabled: Boolean,
  displayedValue: null,
  double: Boolean,
  format: {
    type: Function,
    default: (e) => e
  },
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  scrollable: Boolean,
  readonly: Boolean,
  rotate: {
    type: Number,
    default: 0
  },
  step: {
    type: Number,
    default: 1
  },
  modelValue: {
    type: Number
  }
}, "VTimePickerClock"), qi = W()({
  name: "VTimePickerClock",
  props: RS(),
  emits: {
    change: (e) => !0,
    input: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = j(null), l = j(null), i = j(void 0), o = j(!1), r = j(null), s = j(null), c = Cs((q) => t("change", q), 750), {
      textColorClasses: u,
      textColorStyles: d
    } = vt(() => e.color), {
      backgroundColorClasses: v,
      backgroundColorStyles: f
    } = Le(() => e.color), g = w(() => e.max - e.min + 1), b = w(() => e.double ? g.value / 2 : g.value), m = w(() => 360 / b.value), y = w(() => m.value * Math.PI / 180), h = w(() => e.modelValue == null ? e.min : e.modelValue), C = w(() => 0.62), p = w(() => {
      const q = [];
      for (let $ = e.min; $ <= e.max; $ = $ + e.step)
        q.push($);
      return q;
    });
    ae(() => e.modelValue, (q) => {
      i.value = q;
    });
    function _(q) {
      i.value !== q && (i.value = q), t("input", q);
    }
    function P(q) {
      return !e.allowedValues || e.allowedValues(q);
    }
    function I(q) {
      if (!e.scrollable || e.disabled) return;
      q.preventDefault();
      const $ = Math.sign(-q.deltaY || 1);
      let O = h.value;
      do
        O = O + $, O = (O - e.min + g.value) % g.value + e.min;
      while (!P(O) && O !== h.value);
      O !== e.displayedValue && _(O), c(O);
    }
    function V(q) {
      return e.double && q - e.min >= b.value;
    }
    function T(q) {
      return V(q) ? C.value : 1;
    }
    function A(q) {
      const $ = e.rotate * Math.PI / 180;
      return {
        x: Math.sin((q - e.min) * y.value + $) * T(q),
        y: -Math.cos((q - e.min) * y.value + $) * T(q)
      };
    }
    function D(q, $) {
      const O = (Math.round(q / m.value) + ($ ? b.value : 0)) % g.value + e.min;
      return q < 360 - m.value / 2 ? O : $ ? e.max - b.value + 1 : e.min;
    }
    function x(q) {
      const {
        x: $,
        y: O
      } = A(q);
      return {
        left: `${Math.round(50 + $ * 50)}%`,
        top: `${Math.round(50 + O * 50)}%`
      };
    }
    function B(q, $) {
      const O = $.x - q.x, R = $.y - q.y;
      return Math.sqrt(O * O + R * R);
    }
    function M(q, $) {
      const O = 2 * Math.atan2($.y - q.y - B(q, $), $.x - q.x);
      return Math.abs(O * 180 / Math.PI);
    }
    function L(q) {
      r.value === null && (r.value = q), s.value = q, _(q);
    }
    function N(q) {
      var K, Z;
      if (q.preventDefault(), !o.value && q.type !== "click" || !a.value) return;
      const {
        width: $,
        top: O,
        left: R
      } = (K = a.value) == null ? void 0 : K.getBoundingClientRect(), {
        width: U
      } = ((Z = l.value) == null ? void 0 : Z.getBoundingClientRect()) ?? {
        width: 0
      }, {
        clientX: ce,
        clientY: ne
      } = "touches" in q ? q.touches[0] : q, Q = {
        x: $ / 2,
        y: -$ / 2
      }, X = {
        x: ce - R,
        y: O - ne
      }, ve = Math.round(M(Q, X) - e.rotate + 360) % 360, ge = e.double && B(Q, X) < (U + U * C.value) / 4, J = Math.ceil(15 / m.value);
      let ie;
      for (let me = 0; me < J; me++)
        if (ie = D(ve + me * m.value, ge), P(ie) || (ie = D(ve - me * m.value, ge), P(ie))) return L(ie);
    }
    function Y(q) {
      e.disabled || (q.preventDefault(), window.addEventListener("mousemove", N), window.addEventListener("touchmove", N), window.addEventListener("mouseup", te), window.addEventListener("touchend", te), r.value = null, s.value = null, o.value = !0, N(q));
    }
    function te(q) {
      q.stopPropagation(), window.removeEventListener("mousemove", N), window.removeEventListener("touchmove", N), window.removeEventListener("mouseup", te), window.removeEventListener("touchend", te), o.value = !1, s.value !== null && P(s.value) && t("change", s.value);
    }
    G(() => S("div", {
      class: z([{
        "v-time-picker-clock": !0,
        "v-time-picker-clock--indeterminate": e.modelValue == null,
        "v-time-picker-clock--readonly": e.readonly
      }]),
      onMousedown: Y,
      onTouchstart: Y,
      onWheel: I,
      ref: a
    }, [S("div", {
      class: "v-time-picker-clock__inner",
      ref: l
    }, [S("div", {
      class: z([{
        "v-time-picker-clock__hand": !0,
        "v-time-picker-clock__hand--inner": V(e.modelValue)
      }, u.value]),
      style: le([{
        transform: `rotate(${e.rotate + m.value * (h.value - e.min)}deg) scaleY(${T(h.value)})`
      }, d.value])
    }, null), p.value.map((q) => {
      const $ = q === h.value;
      return S("div", {
        class: z([{
          "v-time-picker-clock__item": !0,
          "v-time-picker-clock__item--active": $,
          "v-time-picker-clock__item--disabled": e.disabled || !P(q)
        }, $ && v.value]),
        style: le([x(q), $ && f.value])
      }, [S("span", null, [e.format(q)])]);
    })])]));
  }
}), NS = F({
  ampm: Boolean,
  color: String,
  disabled: Boolean,
  hour: Number,
  minute: Number,
  second: Number,
  period: String,
  readonly: Boolean,
  useSeconds: Boolean,
  value: Number,
  viewMode: String
}, "VTimePickerControls"), Xi = W()({
  name: "VTimePickerControls",
  props: NS(),
  emits: {
    "update:period": (e) => !0,
    "update:viewMode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Ne();
    return G(() => {
      let i = e.hour;
      return e.ampm && (i = i ? (i - 1) % 12 + 1 : 12), S("div", {
        class: "v-time-picker-controls"
      }, [S("div", {
        class: z({
          "v-time-picker-controls__time": !0,
          "v-time-picker-controls__time--with-seconds": e.useSeconds
        })
      }, [k(xe, {
        active: e.viewMode === "hour",
        color: e.viewMode === "hour" ? e.color : void 0,
        disabled: e.disabled,
        variant: "tonal",
        class: z({
          "v-time-picker-controls__time__btn": !0,
          "v-time-picker-controls__time--with-ampm__btn": e.ampm,
          "v-time-picker-controls__time--with-seconds__btn": e.useSeconds
        }),
        text: e.hour == null ? "--" : kn(`${i}`),
        onClick: () => t("update:viewMode", "hour")
      }, null), S("span", {
        class: z(["v-time-picker-controls__time__separator", {
          "v-time-picker-controls--with-seconds__time__separator": e.useSeconds
        }])
      }, [mt(":")]), k(xe, {
        active: e.viewMode === "minute",
        color: e.viewMode === "minute" ? e.color : void 0,
        class: z({
          "v-time-picker-controls__time__btn": !0,
          "v-time-picker-controls__time__btn__active": e.viewMode === "minute",
          "v-time-picker-controls__time--with-ampm__btn": e.ampm,
          "v-time-picker-controls__time--with-seconds__btn": e.useSeconds
        }),
        disabled: e.disabled,
        variant: "tonal",
        text: e.minute == null ? "--" : kn(e.minute),
        onClick: () => t("update:viewMode", "minute")
      }, null), e.useSeconds && S("span", {
        class: z(["v-time-picker-controls__time__separator", {
          "v-time-picker-controls--with-seconds__time__separator": e.useSeconds
        }]),
        key: "secondsDivider"
      }, [mt(":")]), e.useSeconds && k(xe, {
        key: "secondsVal",
        active: e.viewMode === "second",
        color: e.viewMode === "second" ? e.color : void 0,
        variant: "tonal",
        onClick: () => t("update:viewMode", "second"),
        class: z({
          "v-time-picker-controls__time__btn": !0,
          "v-time-picker-controls__time__btn__active": e.viewMode === "second",
          "v-time-picker-controls__time--with-seconds__btn": e.useSeconds
        }),
        disabled: e.disabled,
        text: e.second == null ? "--" : kn(e.second)
      }, null), e.ampm && S("div", {
        class: "v-time-picker-controls__ampm"
      }, [k(xe, {
        active: e.period === "am",
        color: e.period === "am" ? e.color : void 0,
        class: z({
          "v-time-picker-controls__ampm__am": !0,
          "v-time-picker-controls__ampm__btn": !0,
          "v-time-picker-controls__ampm__btn__active": e.period === "am"
        }),
        disabled: e.disabled,
        text: l("$vuetify.timePicker.am"),
        variant: e.disabled && e.period === "am" ? "elevated" : "tonal",
        onClick: () => e.period !== "am" ? t("update:period", "am") : null
      }, null), k(xe, {
        active: e.period === "pm",
        color: e.period === "pm" ? e.color : void 0,
        class: z({
          "v-time-picker-controls__ampm__pm": !0,
          "v-time-picker-controls__ampm__btn": !0,
          "v-time-picker-controls__ampm__btn__active": e.period === "pm"
        }),
        disabled: e.disabled,
        text: l("$vuetify.timePicker.pm"),
        variant: e.disabled && e.period === "pm" ? "elevated" : "tonal",
        onClick: () => e.period !== "pm" ? t("update:period", "pm") : null
      }, null)])])]);
    }), {};
  }
}), HS = _t(24), Ld = _t(12), zS = Ld.map((e) => e + 12);
_t(60);
const WS = F({
  allowedHours: [Function, Array],
  allowedMinutes: [Function, Array],
  allowedSeconds: [Function, Array],
  disabled: Boolean,
  format: {
    type: String,
    default: "ampm"
  },
  max: String,
  min: String,
  viewMode: {
    type: String,
    default: "hour"
  },
  modelValue: null,
  readonly: Boolean,
  scrollable: Boolean,
  useSeconds: Boolean,
  ...Fe(Ml({
    title: "$vuetify.timePicker.title"
  }), ["landscape"])
}, "VTimePicker"), US = W()({
  name: "VTimePicker",
  props: WS(),
  emits: {
    "update:hour": (e) => !0,
    "update:minute": (e) => !0,
    "update:period": (e) => !0,
    "update:second": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:viewMode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Ne(), i = j(null), o = j(null), r = j(null), s = j(null), c = j(null), u = j(null), d = j("am"), v = de(e, "viewMode", "hour"), f = j(null), g = j(null), b = w(() => {
      let x;
      if (e.allowedHours instanceof Array ? x = (L) => e.allowedHours.includes(L) : x = e.allowedHours, !e.min && !e.max) return x;
      const B = e.min ? Number(e.min.split(":")[0]) : 0, M = e.max ? Number(e.max.split(":")[0]) : 23;
      return (L) => L >= Number(B) && L <= Number(M) && (!x || x(L));
    }), m = w(() => {
      let x;
      const B = !b.value || i.value === null || b.value(i.value);
      if (e.allowedMinutes instanceof Array ? x = ($) => e.allowedMinutes.includes($) : x = e.allowedMinutes, !e.min && !e.max)
        return B ? x : () => !1;
      const [M, L] = e.min ? e.min.split(":").map(Number) : [0, 0], [N, Y] = e.max ? e.max.split(":").map(Number) : [23, 59], te = M * 60 + Number(L), q = N * 60 + Number(Y);
      return ($) => {
        const O = 60 * i.value + $;
        return O >= te && O <= q && B && (!x || x($));
      };
    }), y = w(() => {
      let x;
      const M = (!b.value || i.value === null || b.value(i.value)) && (!m.value || o.value === null || m.value(o.value));
      if (e.allowedSeconds instanceof Array ? x = (U) => e.allowedSeconds.includes(U) : x = e.allowedSeconds, !e.min && !e.max)
        return M ? x : () => !1;
      const [L, N, Y] = e.min ? e.min.split(":").map(Number) : [0, 0, 0], [te, q, $] = e.max ? e.max.split(":").map(Number) : [23, 59, 59], O = L * 3600 + N * 60 + Number(Y || 0), R = te * 3600 + q * 60 + Number($ || 0);
      return (U) => {
        const ce = 3600 * i.value + 60 * o.value + U;
        return ce >= O && ce <= R && M && (!x || x(U));
      };
    }), h = w(() => e.format === "ampm");
    ae(() => e.modelValue, (x) => I(x)), ft(() => {
      I(e.modelValue);
    });
    function C() {
      return i.value != null && o.value != null && (!e.useSeconds || r.value != null) ? `${kn(i.value)}:${kn(o.value)}` + (e.useSeconds ? `:${kn(r.value)}` : "") : null;
    }
    function p() {
      const x = C();
      x !== null && t("update:modelValue", x);
    }
    function _(x) {
      return x ? (x - 1) % 12 + 1 : 12;
    }
    function P(x, B) {
      return x % 12 + (B === "pm" ? 12 : 0);
    }
    function I(x) {
      if (x == null || x === "")
        i.value = null, o.value = null, r.value = null;
      else if (x instanceof Date)
        i.value = x.getHours(), o.value = x.getMinutes(), r.value = x.getSeconds();
      else {
        const [B, , M, , L, N] = x.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
        i.value = N ? P(parseInt(B, 10), N) : parseInt(B, 10), o.value = parseInt(M, 10), r.value = parseInt(L || 0, 10);
      }
      d.value = i.value == null || i.value < 12 ? "am" : "pm";
    }
    function V(x, B) {
      const M = b.value;
      if (!M) return B;
      const L = h.value ? B < 12 ? Ld : zS : HS;
      return ((L.find((Y) => M((Y + B) % L.length + L[0])) || 0) + B) % L.length + L[0];
    }
    function T(x) {
      if (d.value = x, i.value != null) {
        const B = i.value + (d.value === "am" ? -12 : 12);
        i.value = V("hour", B);
      }
      return t("update:period", x), p(), !0;
    }
    function A(x) {
      v.value === "hour" ? i.value = h.value ? P(x, d.value) : x : v.value === "minute" ? o.value = x : r.value = x;
    }
    function D(x) {
      switch (v.value || "hour") {
        case "hour":
          t("update:hour", x);
          break;
        case "minute":
          t("update:minute", x);
          break;
        case "second":
          t("update:second", x);
          break;
      }
      const B = i.value !== null && o.value !== null && (e.useSeconds ? r.value !== null : !0);
      v.value === "hour" ? v.value = "minute" : e.useSeconds && v.value === "minute" && (v.value = "second"), !(i.value === s.value && o.value === c.value && (!e.useSeconds || r.value === u.value) || C() === null) && (s.value = i.value, c.value = o.value, e.useSeconds && (u.value = r.value), B && p());
    }
    G(() => {
      const x = ta.filterProps(e), B = Xi.filterProps(e), M = qi.filterProps(Fe(e, ["format", "modelValue", "min", "max"]));
      return k(ta, H(x, {
        color: void 0,
        class: ["v-time-picker", e.class],
        style: e.style
      }), {
        title: () => {
          var L;
          return ((L = a.title) == null ? void 0 : L.call(a)) ?? S("div", {
            class: "v-time-picker__title"
          }, [l(e.title)]);
        },
        header: () => k(Xi, H(B, {
          ampm: h.value,
          hour: i.value,
          minute: o.value,
          period: d.value,
          second: r.value,
          viewMode: v.value,
          "onUpdate:period": (L) => T(L),
          "onUpdate:viewMode": (L) => v.value = L,
          ref: f
        }), null),
        default: () => k(qi, H(M, {
          allowedValues: v.value === "hour" ? b.value : v.value === "minute" ? m.value : y.value,
          double: v.value === "hour" && !h.value,
          format: v.value === "hour" ? h.value ? _ : (L) => L : (L) => kn(L, 2),
          max: v.value === "hour" ? h.value && d.value === "am" ? 11 : 23 : 59,
          min: v.value === "hour" && h.value && d.value === "pm" ? 12 : 0,
          size: 20,
          step: v.value === "hour" ? 1 : 5,
          modelValue: v.value === "hour" ? i.value : v.value === "minute" ? o.value : r.value,
          onChange: D,
          onInput: A,
          ref: g
        }), null),
        actions: a.actions
      });
    });
  }
}), jS = F({
  ...se(),
  ...Mt({
    variant: "text"
  })
}, "VToolbarItems"), GS = W()({
  name: "VToolbarItems",
  props: jS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Ge({
      VBtn: {
        color: E(() => e.color),
        height: "inherit",
        variant: E(() => e.variant)
      }
    }), G(() => {
      var a;
      return S("div", {
        class: z(["v-toolbar-items", e.class]),
        style: le(e.style)
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), YS = F({
  id: String,
  interactive: Boolean,
  text: String,
  ...Fe(Ga({
    closeOnBack: !1,
    location: "end",
    locationStrategy: "connected",
    eager: !0,
    minWidth: 0,
    offset: 10,
    openOnClick: !1,
    openOnHover: !0,
    origin: "auto",
    scrim: !1,
    scrollStrategy: "reposition",
    transition: null
  }), ["absolute", "persistent"])
}, "VTooltip"), tr = W()({
  name: "VTooltip",
  props: YS(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = de(e, "modelValue"), {
      scopeId: l
    } = Hn(), i = xt(), o = E(() => e.id || `v-tooltip-${i}`), r = j(), s = w(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), c = w(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), u = E(() => e.transition != null ? e.transition : a.value ? "scale-transition" : "fade-transition"), d = w(() => H({
      "aria-describedby": o.value
    }, e.activatorProps));
    return G(() => {
      const v = Nt.filterProps(e);
      return k(Nt, H({
        ref: r,
        class: ["v-tooltip", {
          "v-tooltip--interactive": e.interactive
        }, e.class],
        style: e.style,
        id: o.value
      }, v, {
        modelValue: a.value,
        "onUpdate:modelValue": (f) => a.value = f,
        transition: u.value,
        absolute: !0,
        location: s.value,
        origin: c.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: d.value,
        _disableGlobalStack: !0
      }, l), {
        activator: t.activator,
        default: function() {
          var m;
          for (var f = arguments.length, g = new Array(f), b = 0; b < f; b++)
            g[b] = arguments[b];
          return ((m = t.default) == null ? void 0 : m.call(t, ...g)) ?? e.text;
        }
      });
    }), ut({}, r);
  }
}), KS = F({
  ...Fe(zu({
    collapseIcon: "$treeviewCollapse",
    expandIcon: "$treeviewExpand"
  }), ["subgroup"])
}, "VTreeviewGroup"), Zi = W()({
  name: "VTreeviewGroup",
  props: KS(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = j(), l = w(() => {
      var o;
      return (o = a.value) != null && o.isOpen ? e.collapseIcon : e.expandIcon;
    }), i = w(() => ({
      VTreeviewItem: {
        prependIcon: void 0,
        appendIcon: void 0,
        toggleIcon: l.value
      }
    }));
    return G(() => {
      const o = Aa.filterProps(e);
      return k(Aa, H(o, {
        ref: a,
        class: ["v-treeview-group", e.class],
        subgroup: !0
      }), {
        ...t,
        activator: t.activator ? (r) => S(ue, null, [k(we, {
          defaults: i.value
        }, {
          default: () => {
            var s;
            return [(s = t.activator) == null ? void 0 : s.call(t, r)];
          }
        })]) : void 0
      });
    }), {};
  }
}), $d = Symbol.for("vuetify:v-treeview"), Md = F({
  loading: Boolean,
  hideActions: Boolean,
  indentLines: Array,
  toggleIcon: fe,
  ...ju({
    slim: !0
  })
}, "VTreeviewItem"), Qi = W()({
  name: "VTreeviewItem",
  props: Md(),
  emits: {
    toggleExpand: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = Ie($d, {
      visibleIds: j()
    }).visibleIds, i = j(), o = w(() => {
      var v, f;
      return ((v = i.value) == null ? void 0 : v.root.activatable.value) && ((f = i.value) == null ? void 0 : f.isGroupActivator);
    }), r = w(() => {
      var v, f;
      return ((v = i.value) == null ? void 0 : v.link.isClickable.value) || e.value != null && !!((f = i.value) != null && f.list);
    }), s = w(() => !e.disabled && e.link !== !1 && (e.link || r.value || o.value)), c = w(() => {
      var v;
      return l.value && !l.value.has(Ke((v = i.value) == null ? void 0 : v.id));
    });
    function u(v) {
      var f, g;
      s.value && o.value && ((g = i.value) == null || g.activate(!((f = i.value) != null && f.isActivated), v));
    }
    function d(v) {
      v.preventDefault(), v.stopPropagation(), a("toggleExpand", v);
    }
    return G(() => {
      var g;
      const v = Dt.filterProps(e), f = t.prepend || e.toggleIcon || e.indentLines;
      return k(Dt, H({
        ref: i
      }, v, {
        active: ((g = i.value) == null ? void 0 : g.isActivated) || void 0,
        class: ["v-treeview-item", {
          "v-treeview-item--activatable-group-activator": o.value,
          "v-treeview-item--filtered": c.value
        }, e.class],
        ripple: !1,
        onClick: u
      }), {
        ...t,
        prepend: f ? (b) => {
          var m;
          return S(ue, null, [e.indentLines && e.indentLines.length > 0 ? S("div", {
            key: "indent-lines",
            class: "v-treeview-indent-lines",
            style: {
              "--v-indent-parts": e.indentLines.length
            }
          }, [e.indentLines.map((y) => S("div", {
            class: z(`v-treeview-indent-line v-treeview-indent-line--${y}`)
          }, null))]) : "", !e.hideActions && k(Qu, {
            start: !0
          }, {
            default: () => [e.toggleIcon ? k(xe, {
              density: "compact",
              icon: e.toggleIcon,
              loading: e.loading,
              variant: "text",
              onClick: d
            }, {
              loader: () => k(rn, {
                indeterminate: "disable-shrink",
                size: "20",
                width: "2"
              }, null)
            }) : S("div", {
              class: "v-treeview-item__level"
            }, null)]
          }), (m = t.prepend) == null ? void 0 : m.call(t, b)]);
        } : void 0
      });
    }), ut({}, i);
  }
}), Fd = F({
  disabled: Boolean,
  loadChildren: Function,
  loadingIcon: {
    type: String,
    default: "$loading"
  },
  items: Array,
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  indeterminateIcon: {
    type: fe,
    default: "$checkboxIndeterminate"
  },
  falseIcon: fe,
  trueIcon: fe,
  returnObject: Boolean,
  activatable: Boolean,
  selectable: Boolean,
  selectedColor: String,
  selectStrategy: [String, Function, Object],
  index: Number,
  isLastGroup: Boolean,
  separateRoots: Boolean,
  parentIndentLines: Array,
  indentLinesVariant: String,
  path: {
    type: Array,
    default: () => []
  },
  ...Jt(Md(), ["hideActions"]),
  ...it()
}, "VTreeviewChildren"), kl = W()({
  name: "VTreeviewChildren",
  props: Fd(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ct(/* @__PURE__ */ new Set()), l = j([]), i = w(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable && !e.activatable));
    async function o(s) {
      var c, u;
      try {
        if (!((c = e.items) != null && c.length) || !e.loadChildren) return;
        ((u = s == null ? void 0 : s.children) == null ? void 0 : u.length) === 0 && (a.add(s.value), await e.loadChildren(s.raw));
      } finally {
        a.delete(s.value);
      }
    }
    function r(s, c) {
      e.selectable && s(c);
    }
    return () => {
      var s, c;
      return ((s = t.default) == null ? void 0 : s.call(t)) ?? ((c = e.items) == null ? void 0 : c.map((u, d, v) => {
        var V, T;
        const {
          children: f,
          props: g
        } = u, b = a.has(u.value), m = !!((V = v.at(d + 1)) != null && V.children), y = ((T = e.path) == null ? void 0 : T.length) ?? 0, h = v.length - 1 === d, C = {
          index: d,
          depth: y,
          isFirst: d === 0,
          isLast: h,
          path: [...e.path, d],
          hideAction: e.hideActions
        }, p = rf({
          depth: y,
          isLast: h,
          isLastGroup: e.isLastGroup,
          leafLinks: !e.hideActions,
          separateRoots: e.separateRoots,
          parentIndentLines: e.parentIndentLines,
          variant: e.indentLinesVariant
        }), _ = {
          prepend: (A) => {
            var D;
            return S(ue, null, [e.selectable && (!f || f && !["leaf", "single-leaf"].includes(e.selectStrategy)) && S("div", null, [k(jt, {
              key: u.value,
              modelValue: A.isSelected,
              disabled: e.disabled,
              loading: b,
              color: e.selectedColor,
              density: e.density,
              indeterminate: A.isIndeterminate,
              indeterminateIcon: e.indeterminateIcon,
              falseIcon: e.falseIcon,
              trueIcon: e.trueIcon,
              "onUpdate:modelValue": (x) => r(A.select, x),
              onClick: (x) => x.stopPropagation(),
              onKeydown: (x) => {
                ["Enter", "Space"].includes(x.key) && (x.stopPropagation(), r(A.select, A.isSelected));
              }
            }, null)]), (D = t.prepend) == null ? void 0 : D.call(t, {
              ...A,
              ...C,
              item: u.raw,
              internalItem: u
            })]);
          },
          append: t.append ? (A) => {
            var D;
            return (D = t.append) == null ? void 0 : D.call(t, {
              ...A,
              ...C,
              item: u.raw,
              internalItem: u
            });
          } : void 0,
          title: t.title ? (A) => {
            var D;
            return (D = t.title) == null ? void 0 : D.call(t, {
              ...A,
              item: u.raw,
              internalItem: u
            });
          } : void 0,
          subtitle: t.subtitle ? (A) => {
            var D;
            return (D = t.subtitle) == null ? void 0 : D.call(t, {
              ...A,
              item: u.raw,
              internalItem: u
            });
          } : void 0
        }, P = Zi.filterProps(g), I = kl.filterProps({
          ...e,
          ...C
        });
        return f ? k(Zi, H(P, {
          value: e.returnObject ? u.raw : P == null ? void 0 : P.value,
          rawId: P == null ? void 0 : P.value
        }), {
          activator: (A) => {
            let {
              props: D
            } = A;
            const x = {
              ...g,
              ...D,
              value: g == null ? void 0 : g.value,
              onToggleExpand: [() => o(u), D.onClick],
              onClick: i.value ? [() => o(u), D.onClick] : () => {
                var B, M;
                return r((B = l.value[d]) == null ? void 0 : B.select, !((M = l.value[d]) != null && M.isSelected));
              }
            };
            return k(Qi, H({
              ref: (B) => l.value[d] = B
            }, x, {
              hideActions: e.hideActions,
              indentLines: p.node,
              value: e.returnObject ? u.raw : g.value,
              loading: b
            }), _);
          },
          default: () => k(kl, H(I, {
            items: f,
            indentLinesVariant: e.indentLinesVariant,
            parentIndentLines: p.children,
            isLastGroup: m,
            returnObject: e.returnObject
          }), t)
        }) : Kl(t.item, {
          props: g,
          item: u.raw,
          internalItem: u
        }, () => u.type === "divider" ? Kl(t.divider, {
          props: u.raw
        }, () => k(At, u.props, null)) : u.type === "subheader" ? Kl(t.subheader, {
          props: u.raw
        }, () => k(ca, u.props, null)) : k(Qi, H(g, {
          hideActions: e.hideActions,
          indentLines: p.leaf,
          value: e.returnObject ? Ke(u.raw) : g.value
        }), _));
      }));
    };
  }
});
function Rd(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const t of e)
    n.push(t), t.children && Rd(t.children, n);
  return n;
}
const qS = F({
  fluid: Boolean,
  openAll: Boolean,
  indentLines: [Boolean, String],
  search: String,
  ...da({
    filterKeys: ["title"]
  }),
  ...Fe(Fd(), ["index", "path", "indentLinesVariant", "parentIndentLines", "isLastGroup"]),
  ...Fe(Zu({
    collapseIcon: "$treeviewCollapse",
    expandIcon: "$treeviewExpand",
    slim: !0
  }), ["nav", "openStrategy"]),
  modelValue: Array
}, "VTreeview"), XS = W()({
  name: "VTreeview",
  props: qS(),
  emits: {
    "update:opened": (e) => !0,
    "update:activated": (e) => !0,
    "update:selected": (e) => !0,
    "update:modelValue": (e) => !0,
    "click:open": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const {
      items: l
    } = Xu(e), i = E(() => e.activeColor), o = E(() => e.baseColor), r = E(() => e.color), s = de(e, "activated"), c = de(e, "selected"), u = w({
      get: () => e.modelValue ?? c.value,
      set(C) {
        c.value = C, a("update:modelValue", C);
      }
    }), d = j(), v = w(() => e.openAll ? h(l.value) : e.opened), f = w(() => Rd(l.value)), g = E(() => e.search), {
      filteredItems: b
    } = va(e, f, g), m = w(() => {
      var p;
      if (!g.value) return null;
      const C = (p = d.value) == null ? void 0 : p.getPath;
      return C ? new Set(b.value.flatMap((_) => {
        const P = e.returnObject ? _.raw : _.props.value;
        return [...C(P), ...y(P)].map(Ke);
      })) : null;
    });
    function y(C) {
      var P, I;
      const p = [], _ = (((P = d.value) == null ? void 0 : P.children.get(C)) ?? []).slice();
      for (; _.length; ) {
        const V = _.shift();
        V && (p.push(V), _.push(...(((I = d.value) == null ? void 0 : I.children.get(V)) ?? []).slice()));
      }
      return p;
    }
    function h(C) {
      let p = [];
      for (const _ of C)
        _.children && (p.push(e.returnObject ? Ke(_.raw) : _.value), _.children && (p = p.concat(h(_.children))));
      return p;
    }
    return Re($d, {
      visibleIds: m
    }), Ge({
      VTreeviewGroup: {
        activeColor: i,
        baseColor: o,
        color: r,
        collapseIcon: E(() => e.collapseIcon),
        expandIcon: E(() => e.expandIcon)
      },
      VTreeviewItem: {
        activeClass: E(() => e.activeClass),
        activeColor: i,
        baseColor: o,
        color: r,
        density: E(() => e.density),
        disabled: E(() => e.disabled),
        lines: E(() => e.lines),
        variant: E(() => e.variant)
      }
    }), G(() => {
      const C = pn.filterProps(e), p = kl.filterProps(e), _ = typeof e.indentLines == "boolean" ? "default" : e.indentLines;
      return k(pn, H({
        ref: d
      }, C, {
        class: ["v-treeview", {
          "v-treeview--fluid": e.fluid
        }, e.class],
        openStrategy: "multiple",
        style: e.style,
        opened: v.value,
        activated: s.value,
        "onUpdate:activated": (P) => s.value = P,
        selected: u.value,
        "onUpdate:selected": (P) => u.value = P
      }), {
        default: () => [k(kl, H(p, {
          density: e.density,
          returnObject: e.returnObject,
          items: l.value,
          parentIndentLines: e.indentLines ? [] : void 0,
          indentLinesVariant: _
        }), t)]
      });
    }), {};
  }
}), ZS = W()({
  name: "VValidation",
  props: Iu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Au(e, "validation");
    return () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t, a);
    };
  }
}), QS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VAlert: wu,
  VAlertTitle: Su,
  VApp: Cm,
  VAppBar: zm,
  VAppBarNavIcon: ug,
  VAppBarTitle: cg,
  VAutocomplete: dc,
  VAvatar: Et,
  VBadge: Eh,
  VBanner: Mh,
  VBannerActions: vc,
  VBannerText: fc,
  VBottomNavigation: Rh,
  VBottomSheet: Hh,
  VBreadcrumbs: jh,
  VBreadcrumbsDivider: gc,
  VBreadcrumbsItem: hc,
  VBtn: xe,
  VBtnGroup: _i,
  VBtnToggle: Km,
  VCard: Cc,
  VCardActions: yc,
  VCardItem: Sc,
  VCardSubtitle: bc,
  VCardText: wc,
  VCardTitle: kc,
  VCarousel: ly,
  VCarouselItem: oy,
  VCheckbox: pg,
  VCheckboxBtn: jt,
  VChip: ua,
  VChipGroup: Tg,
  VClassIcon: go,
  VCode: ry,
  VCol: Lb,
  VColorPicker: Tc,
  VCombobox: Zy,
  VComponentIcon: Vi,
  VConfirmEdit: Jy,
  VContainer: Db,
  VCounter: Ol,
  VDataIterator: ub,
  VDataTable: pb,
  VDataTableFooter: Da,
  VDataTableHeaders: An,
  VDataTableRow: jo,
  VDataTableRows: Tn,
  VDataTableServer: Ab,
  VDataTableVirtual: _b,
  VDatePicker: Yb,
  VDatePickerControls: Hi,
  VDatePickerHeader: zi,
  VDatePickerMonth: Wi,
  VDatePickerMonths: Ui,
  VDatePickerYears: ji,
  VDefaultsProvider: we,
  VDialog: gl,
  VDialogBottomTransition: Pm,
  VDialogTopTransition: _m,
  VDialogTransition: _l,
  VDivider: At,
  VEmptyState: qb,
  VExpandTransition: la,
  VExpandXTransition: ko,
  VExpansionPanel: Xb,
  VExpansionPanelText: Gi,
  VExpansionPanelTitle: Yi,
  VExpansionPanels: Jb,
  VFab: tk,
  VFabTransition: pm,
  VFadeTransition: xa,
  VField: un,
  VFieldLabel: ya,
  VFileInput: lk,
  VFooter: ok,
  VForm: sk,
  VHover: ck,
  VIcon: Be,
  VImg: Qt,
  VInfiniteScroll: vk,
  VInput: gt,
  VItem: gk,
  VItemGroup: mk,
  VKbd: yk,
  VLabel: sa,
  VLayout: kk,
  VLayoutItem: wk,
  VLazy: wd,
  VLigatureIcon: rm,
  VList: pn,
  VListGroup: Aa,
  VListImg: Xg,
  VListItem: Dt,
  VListItemAction: Qu,
  VListItemMedia: Jg,
  VListItemSubtitle: Wu,
  VListItemTitle: Uu,
  VListSubheader: ca,
  VLocaleProvider: Vk,
  VMain: Pk,
  VMenu: Pn,
  VMessages: Pu,
  VNavigationDrawer: Lk,
  VNoSsr: $k,
  VNumberInput: Hk,
  VOtpInput: Wk,
  VOverlay: Nt,
  VPagination: Ri,
  VParallax: Gk,
  VProgressCircular: rn,
  VProgressLinear: Al,
  VRadio: Kk,
  VRadioGroup: Xk,
  VRangeSlider: Qk,
  VRating: eS,
  VResponsive: pi,
  VRow: zb,
  VScaleTransition: bo,
  VScrollXReverseTransition: Am,
  VScrollXTransition: Im,
  VScrollYReverseTransition: Dm,
  VScrollYTransition: Tm,
  VSelect: Oo,
  VSelectionControl: sn,
  VSelectionControlGroup: xu,
  VSheet: Ta,
  VSkeletonLoader: lS,
  VSlideGroup: _a,
  VSlideGroupItem: iS,
  VSlideXReverseTransition: Om,
  VSlideXTransition: Bm,
  VSlideYReverseTransition: Em,
  VSlideYTransition: Il,
  VSlider: yl,
  VSnackbar: Ki,
  VSnackbarQueue: sS,
  VSpacer: cd,
  VSparkline: vS,
  VSpeedDial: mS,
  VStepper: wS,
  VStepperActions: _d,
  VStepperHeader: Id,
  VStepperItem: Ad,
  VStepperWindow: Td,
  VStepperWindowItem: Dd,
  VSvgIcon: mo,
  VSwitch: Bd,
  VSystemBar: VS,
  VTab: Qo,
  VTable: Dn,
  VTabs: Od,
  VTabsWindow: Jo,
  VTabsWindowItem: er,
  VTextField: Gt,
  VTextarea: DS,
  VThemeProvider: OS,
  VTimePicker: US,
  VTimePickerClock: qi,
  VTimePickerControls: Xi,
  VTimeline: FS,
  VTimelineItem: $S,
  VToolbar: Pi,
  VToolbarItems: GS,
  VToolbarTitle: yo,
  VTooltip: tr,
  VTreeview: XS,
  VTreeviewGroup: Zi,
  VTreeviewItem: Qi,
  VValidation: ZS,
  VVirtualScroll: El,
  VWindow: _n,
  VWindowItem: In
}, Symbol.toStringTag, { value: "Module" }));
function JS(e, n) {
  const t = n.modifiers || {}, a = n.value, {
    once: l,
    immediate: i,
    ...o
  } = t, r = !Object.keys(o).length, {
    handler: s,
    options: c
  } = typeof a == "object" ? a : {
    handler: a,
    options: {
      attributes: (o == null ? void 0 : o.attr) ?? r,
      characterData: (o == null ? void 0 : o.char) ?? r,
      childList: (o == null ? void 0 : o.child) ?? r,
      subtree: (o == null ? void 0 : o.sub) ?? r
    }
  }, u = new MutationObserver(function() {
    let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], v = arguments.length > 1 ? arguments[1] : void 0;
    s == null || s(d, v), l && Nd(e, n);
  });
  i && (s == null || s([], u)), e._mutate = Object(e._mutate), e._mutate[n.instance.$.uid] = {
    observer: u
  }, u.observe(e, c);
}
function Nd(e, n) {
  var t;
  (t = e._mutate) != null && t[n.instance.$.uid] && (e._mutate[n.instance.$.uid].observer.disconnect(), delete e._mutate[n.instance.$.uid]);
}
const ew = {
  mounted: JS,
  unmounted: Nd
};
function tw(e, n) {
  var l, i;
  const t = n.value, a = {
    passive: !((l = n.modifiers) != null && l.active)
  };
  window.addEventListener("resize", t, a), e._onResize = Object(e._onResize), e._onResize[n.instance.$.uid] = {
    handler: t,
    options: a
  }, (i = n.modifiers) != null && i.quiet || t();
}
function nw(e, n) {
  var l;
  if (!((l = e._onResize) != null && l[n.instance.$.uid])) return;
  const {
    handler: t,
    options: a
  } = e._onResize[n.instance.$.uid];
  window.removeEventListener("resize", t, a), delete e._onResize[n.instance.$.uid];
}
const aw = {
  mounted: tw,
  unmounted: nw
};
function Hd(e, n) {
  const {
    self: t = !1
  } = n.modifiers ?? {}, a = n.value, l = typeof a == "object" && a.options || {
    passive: !0
  }, i = typeof a == "function" || "handleEvent" in a ? a : a.handler, o = t ? e : n.arg ? document.querySelector(n.arg) : window;
  o && (o.addEventListener("scroll", i, l), e._onScroll = Object(e._onScroll), e._onScroll[n.instance.$.uid] = {
    handler: i,
    options: l,
    // Don't reference self
    target: t ? void 0 : o
  });
}
function zd(e, n) {
  var i;
  if (!((i = e._onScroll) != null && i[n.instance.$.uid])) return;
  const {
    handler: t,
    options: a,
    target: l = e
  } = e._onScroll[n.instance.$.uid];
  l.removeEventListener("scroll", t, a), delete e._onScroll[n.instance.$.uid];
}
function lw(e, n) {
  n.value !== n.oldValue && (zd(e, n), Hd(e, n));
}
const iw = {
  mounted: Hd,
  unmounted: zd,
  updated: lw
};
function ow(e, n) {
  const t = typeof e == "string" ? uv(e) : e, a = rw(t, n);
  return {
    mounted: a,
    updated: a,
    unmounted(l) {
      gs(null, l);
    }
  };
}
function rw(e, n) {
  return function(t, a, l) {
    var d, v, f;
    const i = typeof n == "function" ? n(a) : n, o = ((d = a.value) == null ? void 0 : d.text) ?? a.value ?? (i == null ? void 0 : i.text), r = ba(a.value) ? a.value : {}, s = () => o ?? t.textContent, c = (l.ctx === a.instance.$ ? (v = sw(l, a.instance.$)) == null ? void 0 : v.provides : (f = l.ctx) == null ? void 0 : f.provides) ?? a.instance.$.provides, u = cn(e, H(i, r), s);
    u.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, {
      provides: c
    }), gs(u, t);
  };
}
function sw(e, n) {
  const t = /* @__PURE__ */ new Set(), a = (i) => {
    var o, r;
    for (const s of i) {
      if (!s) continue;
      if (s === e || s.el && e.el && s.el === e.el)
        return !0;
      t.add(s);
      let c;
      if (s.suspense ? c = a([s.ssContent]) : Array.isArray(s.children) ? c = a(s.children) : (o = s.component) != null && o.vnode && (c = a([(r = s.component) == null ? void 0 : r.subTree])), c)
        return c;
      t.delete(s);
    }
    return !1;
  };
  if (!a([n.subTree]))
    return Qn("Could not find original vnode, component will not inherit provides"), n;
  const l = Array.from(t).reverse();
  for (const i of l)
    if (i.component)
      return i.component;
  return n;
}
const uw = ow(tr, (e) => {
  var n;
  return {
    activator: "parent",
    location: (n = e.arg) == null ? void 0 : n.replace("-", " "),
    text: typeof e.value == "boolean" ? void 0 : e.value
  };
}), cw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickOutside: Ei,
  Intersect: Zt,
  Mutate: ew,
  Resize: aw,
  Ripple: kt,
  Scroll: iw,
  Tooltip: uw,
  Touch: hl
}, Symbol.toStringTag, { value: "Module" })), dw = {
  dark: !0,
  colors: {
    background: "#1B1B1B",
    surface: "#262626",
    primary: "#D52265",
    secondary: "#FEC651",
    success: "#4DBD74",
    error: "#FF5E4E",
    info: "#51D9FE",
    "on-background": "#FFFFFF",
    "surface-bright": "#FFFFFF",
    // Custom UI colors
    black: "#212121",
    "background-variant": "#333333",
    "surface-variant-one": "#2C2C2C",
    "surface-variant-two": "#5D5E60",
    "border-gray": "#3A3A3A",
    "light-gray-100": "#C5C5C5",
    "primary-hover": "#E94D87",
    "secondary-hover": "#FFD783",
    "info-hover": "#82E4FF",
    "success-hover": "#74DA98"
  },
  variables: {
    "btn-height": "40px",
    "theme-overlay-multiplier": 1,
    "border-radius": "8px",
    "spacing-xxs": "4px",
    "spacing-xs": "8px",
    "spacing-s": "12px",
    "spacing-m": "16px",
    "spacing-l": "24px",
    "xs-font-size": "12px",
    "sm-font-size": "14px",
    "md-font-size": "16px",
    "lg-font-size": "18px",
    "xs-d-font-size": "24px",
    "md-d-font-size": "36px",
    "regular-font-weight": 400,
    "medium-font-weight": 500,
    "semibold-font-weight": 600
  }
}, vw = nu({
  components: QS,
  directives: cw,
  theme: {
    defaultTheme: "vixiTheme",
    themes: {
      vixiTheme: dw
    }
  }
});
class fw {
  constructor(n) {
    lr(this, "i18n");
    this.i18n = Zd({
      legacy: !1,
      locale: "en",
      fallbackLocale: "en",
      messages: n
    });
  }
}
const mw = { common: { powered_by: "Powered by The Famous Group" }, modals: { cancel: "Cancel", delete: "Delete", rename: "Rename", proceed: "I Understand (Proceed Anyway)" }, assets: { error: { invalid_file_type: "Invalid file type.", size_exceeded: "File should be smaller than {size}MB", upload_failed: "Failed to upload file, please try again", clear_failed: "Failed to clear file, please try again" } } }, gw = {
  components: mw
}, hw = { common: { powered_by: "Un producto de The Famous Group" }, modals: { cancel: "Cancelar", delete: "Borrar", rename: "Renombrar", proceed: "Entiendo (Continuar de todos modos)" } }, yw = {
  components: hw
}, us = { en: gw, es: yw }, bw = (e) => e ? (Object.keys(e).forEach((n) => {
  const t = us[n];
  t && (e[n] = {
    ...t,
    ...e[n]
  });
}), e) : us;
var De = /* @__PURE__ */ ((e) => (e.ACCOUNT = "account", e.ACCOUNT_GROUP = "account-group", e.ADD_PREPEND = "add-prepend", e.ADD_TAG = "add-tag", e.ADD_TO_GROOV = "add-to-groov", e.ADD_TO_MOSAIC = "add-to-mosaic", e.ADD_TO_PLAYLIST = "add-to-playlist", e.ADD = "add", e.ADDED_TO_GROOV = "added-to-groov", e.ADDED_TO_MOSAIC = "added-to-mosaic", e.ADDED_TO_PLAYLIST = "added-to-playlist", e.AI_ACTIONS = "ai-actions", e.ALIGN_CENTER = "align-center", e.ALIGN_JUSTIFY = "align-justify", e.ALIGN_LEFT = "align-left", e.ALIGN_RIGHT = "align-right", e.ASSET_MANAGER = "asset-manager", e.ATTENTION = "attention", e.BASE = "base", e.BOLD = "bold", e.BORDER_RADIUS = "border-radius", e.BROADCAST = "mdi-broadcast", e.BROADCAST_OFF = "mdi-broadcast-off", e.CAPTURE = "capture", e.CASE_LOWER = "case-lower", e.CASE_UPPER = "case-upper", e.CHECK = "check", e.CHESS_ROOK = "chess-rook", e.CHEVRON_DOWN = "chevron-down", e.CHEVRON_LEFT = "chevron-left", e.CHEVRON_RIGHT = "chevron-right", e.CHEVRON_UP = "chevron-up", e.CLOSE = "close", e.COLLAPSE = "collapse", e.COLOR_RESET = "color-reset", e.COLOR = "color", e.COLORIZE = "colorize", e.CONFIGURE_VIXI_3D = "configure-vixi-3d", e.CONTEXT_MENU_HORIZONTAL = "context-menu-horizontal", e.CONTEXT_MENU_VERTICAL = "context-menu-vertical", e.COPY = "copy", e.COPY_VARIANT = "copy-variant", e.DELETE_ALL = "delete-all", e.DELETE_SWEEP = "delete-sweep", e.DELETE = "delete", e.DOWNLOAD = "download", e.DRAG_HANDLE = "drag-handle", e.EARTH = "earth", e.EDIT = "edit", e.EDIT_TOGGLE = "edit-toggle", e.EMAIL = "email", e.ERROR = "error", e.EXPAND = "expand", e.FACEBOOK_LOGO = "facebook-logo", e.FAVORITE_BORDER = "favorite-border", e.FAVORITE_FILLED = "favorite-filled", e.FILTER = "filter", e.FORMAT_LIST_GROUP_PLUS = "format-list-group-plus", e.FOUR_VARIANT = "four-variant", e.FOUR = "four", e.FRAME = "frame", e.GROOV_PLAYLIST = "groov-playlist", e.GROOVE = "groove", e.GROUP = "group", e.HEADER_OPEN_IN_FULL = "header-open-in-full", e.HELP = "help", e.HOME = "home", e.ICON_PLACEHOLDER = "icon-placeholder", e.INFO = "Info", e.INSTA_PLAY = "insta-play", e.ITALIC = "italic", e.KICK = "kick", e.LETTER_CASE = "letter-case", e.LINK = "link", e.LIVE = "live", e.LOADING = "loading", e.LOCK = "lock", e.MAGNIFY = "magnify", e.MESSAGE_FEATURED = "message-featured", e.MESSAGE = "message", e.MICROPHONE = "microphone", e.MINUS = "minus", e.MOSAIC_PLAYLIST = "mosaic-playlist", e.MOSAIC = "mosaic", e.NEXT = "next", e.ONE_VARIANT = "one-variant", e.ONE = "one", e.OPEN_LOCK = "open-lock", e.OPEN_PANEL = "open-panel", e.OUTPUT_DESIGN = "output-design", e.PALETTE_SWATCH = "palette-swatch", e.PAUSE = "pause", e.PENCIL_RULER = "mdi-pencil-ruler", e.PHONE_DESIGN = "phone-design", e.PHOTO_MAGIC_2 = "photo-magic-2", e.PHOTO_MAGIC_FEATURED = "photo-magic-featured", e.PHOTO_MAGIC = "photo-magic", e.PIN = "pin", e.PLAY = "play", e.PLAYLIST = "playlist", e.PODIUM = "mdi-podium", e.POLL = "poll", e.PREVIEW_OFF = "preview-off", e.PREVIEW_ON = "preview-on", e.PREVIOUS = "previous", e.QUESTIONS = "questions", e.QR_CODE = "mdi-qrcode", e.QR_CODE_SCAN = "mdi-qrcode-scan", e.QR_CODE_EDIT = "mdi-qrcode-edit", e.REDO = "redo", e.REELS = "reels", e.REFRESH = "refresh", e.RENAME = "rename", e.REPEAT = "repeat", e.RESET = "reset", e.ROTATE_ANGLE = "rotate-angle", e.ROTATE = "rotate", e.SCALE = "scale", e.SELECT_BOX = "select-box", e.SEND = "send", e.SETTINGS = "settings", e.SERVER_ON = "mdi-server-network", e.SERVER_OFF = "mdi-server-network-off", e.SIZE_HORIZONTAL = "size-horizontal", e.SIZE_VERTICAL = "size-vertical", e.SKIP = "skip", e.SORT_ALPHABETICAL_ASCENDING = "sort-alphabetical-ascending", e.SORT_ALPHABETICAL_DESCENDING = "sort-alphabetical-descending", e.SPEED = "speed", e.STAR = "star", e.STARS = "stars", e.STATISTICS = "statistics", e.STATISTICS_CHART = "statistics-chart", e.STOP = "stop", e.SUCCESS = "success", e.SUCCESS_CHECK = "success-check", e.SUPPORT = "support", e.SWAP_HORIZ = "swap-horiz", e.SWAP_VERT = "swap-vert", e.TAG = "tag", e.THREE_VARIANT = "three-variant", e.THREE = "three", e.TIMER = "timer", e.TWO_VARIANT = "two-variant", e.TWO = "two", e.UNDERLINE = "underline", e.UNDO_VAR = "undo-var", e.UNDO = "undo", e.UNFOLD = "unfold", e.UPLOAD_PHOTO = "upload-photo", e.UPLOAD = "upload", e.UPPER_CASE = "upper-case", e.VIDEO_AI = "video-ai", e.VIDEO = "video", e.VIDEO_ACCOUNT = "mdi-video-account", e.VIDEO_MARKER = "mdi-video-marker", e.VIDEO_WIRELESS = "mdi-video-wireless", e.VOLUME_OFF = "volume-off", e.VOLUME_UP = "volume-up", e.WARN = "warn", e.WARN_PLAIN = "warn-plain", e.X_LOGO = "x-logo", e))(De || {}), nr = /* @__PURE__ */ ((e) => (e.xxs = "xxs", e.xs = "xs", e.s = "s", e.m = "m", e.l = "l", e))(nr || {});
const kw = 3, Wd = hs("notifications", {
  state: () => ({
    notificationQueue: [],
    currentNotifications: []
  }),
  actions: {
    close(e) {
      this.currentNotifications.splice(e, 1);
    },
    closeOldest() {
      this.currentNotifications.shift();
    },
    error(e, n) {
      n && console.error(n);
      const t = {
        message: e,
        icon: De.ERROR,
        type: "error",
        ID: self.crypto.randomUUID()
      };
      this.queue(t);
    },
    info(e) {
      const n = {
        message: e,
        icon: De.INFO,
        type: "info",
        ID: self.crypto.randomUUID()
      };
      this.queue(n);
    },
    process() {
      const e = this.notificationQueue.shift();
      e && this.currentNotifications.push(e);
    },
    queue(e) {
      this.currentSize >= kw ? this.notificationQueue.push(e) : this.currentNotifications.push(e);
    },
    success(e) {
      const n = {
        message: e,
        icon: De.SUCCESS,
        type: "success",
        ID: self.crypto.randomUUID()
      };
      this.queue(n);
    },
    warn(e, n) {
      n && console.warn(n);
      const t = {
        message: e,
        icon: De.WARN,
        type: "warn",
        ID: self.crypto.randomUUID()
      };
      this.queue(t);
    }
  },
  getters: {
    queueSize: (e) => e.notificationQueue.length,
    currentSize: (e) => e.currentNotifications.length
  }
}), Sw = {
  key: 0,
  class: "path1"
}, ww = {
  key: 1,
  class: "path2"
}, Cw = {
  key: 2,
  class: "path3"
}, xw = {
  key: 3,
  class: "path4"
}, ze = /* @__PURE__ */ qe({
  __name: "VS2Icon",
  props: {
    icon: {}
  },
  setup(e) {
    const n = [De.INFO, De.ERROR, De.SUCCESS, De.WARN], t = [De.ICON_PLACEHOLDER], a = w(() => {
      var l, i;
      return (i = (l = e.icon) == null ? void 0 : l.startsWith) == null ? void 0 : i.call(l, "mdi-");
    });
    return (l, i) => a.value ? (re(), Ve(Be, { key: 0 }, {
      default: Se(() => [
        mt(tt(l.icon), 1)
      ]),
      _: 1
    })) : (re(), _e("i", {
      key: 1,
      class: z(["vs2-icon", `icon-${l.icon}`])
    }, [
      n.includes(l.icon) || t.includes(l.icon) ? (re(), _e("span", Sw)) : $e("", !0),
      n.includes(l.icon) || t.includes(l.icon) ? (re(), _e("span", ww)) : $e("", !0),
      t.includes(l.icon) ? (re(), _e("span", Cw)) : $e("", !0),
      t.includes(l.icon) ? (re(), _e("span", xw)) : $e("", !0)
    ], 2));
  }
}), Vw = { class: "d-flex ga-xxs align-center" }, pw = { class: "v2-sm-text-medium" }, Pw = 300, _w = /* @__PURE__ */ qe({
  __name: "VS2TextField",
  props: {
    hint: { default: "" },
    placeholder: {},
    rules: {},
    disabled: { type: Boolean },
    asyncHandler: { type: Function }
  },
  emits: ["update:modelValue", "update:isValid"],
  setup(e, { emit: n }) {
    const t = j(!1), a = n;
    let l;
    const i = ui("internal-input"), o = async (r) => {
      e.asyncHandler ? (l && (window.clearTimeout(l), l = void 0), l = window.setTimeout(async () => {
        t.value = !0;
        try {
          await e.asyncHandler(r), a("update:modelValue", r);
        } catch (s) {
          console.error(s);
        } finally {
          t.value = !1;
        }
      }, Pw)) : a("update:modelValue", r);
    };
    return ae(
      () => {
        var r;
        return (r = i.value) == null ? void 0 : r.isValid;
      },
      () => {
        i.value && i.value.isValid !== null && a("update:isValid", {
          value: i.value.isValid,
          errors: i.value.errorMessages !== null ? `${i.value.errorMessages}` : ""
        });
      }
    ), (r, s) => (re(), Ve(Gt, {
      ref: "internal-input",
      disabled: t.value || r.disabled,
      hint: r.hint,
      loading: t.value,
      placeholder: r.placeholder,
      rules: r.rules,
      "onUpdate:modelValue": o,
      density: "compact",
      variant: "outlined",
      flat: ""
    }, {
      message: Se(({ message: c }) => [
        S("div", Vw, [
          k(ze, {
            icon: be(De).ATTENTION
          }, null, 8, ["icon"]),
          S("span", pw, tt(c), 1)
        ])
      ]),
      "append-inner": Se(() => [
        Ze(r.$slots, "append-inner")
      ]),
      _: 3
    }, 8, ["disabled", "hint", "loading", "placeholder", "rules"]));
  }
}), Iw = { class: "d-flex w-100 justify-center flex-column align-center ga-l" }, Aw = { class: "d-flex flex-column align-center ga-xs" }, Tw = { class: "v2-lg-text-semibold modal-title" }, Dw = { class: "v2-sm-text text-light-gray-100 text-center" }, ri = /* @__PURE__ */ qe({
  __name: "VS2ModalWithIcon",
  props: {
    icon: {},
    title: {},
    subtitle: {},
    addTextField: { type: Boolean, default: !1 },
    loading: { type: Boolean },
    initialText: {},
    hint: {},
    placeholder: {},
    rules: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "update:isValid"],
  setup(e, { emit: n }) {
    const t = n, a = j(e.initialText || "");
    ae(
      a,
      (i) => {
        t("update:modelValue", i);
      },
      { immediate: !0 }
    );
    const l = (i) => {
      t("update:isValid", i);
    };
    return (i, o) => (re(), _e("div", Iw, [
      k(ze, {
        class: "circular-icon",
        icon: i.icon
      }, null, 8, ["icon"]),
      S("div", Aw, [
        S("h1", Tw, tt(i.title), 1),
        S("p", Dw, tt(i.subtitle), 1),
        i.addTextField ? (re(), Ve(_w, {
          key: 0,
          modelValue: a.value,
          "onUpdate:modelValue": o[0] || (o[0] = (r) => a.value = r),
          "onUpdate:isValid": o[1] || (o[1] = (r) => l(r)),
          disabled: i.loading,
          "hide-details": !(i.rules || i.hint !== ""),
          hint: i.hint,
          placeholder: i.placeholder,
          rules: i.rules,
          class: "w-100",
          "validate-on": "blur"
        }, null, 8, ["modelValue", "disabled", "hide-details", "hint", "placeholder", "rules"])) : $e("", !0)
      ])
    ]));
  }
}), Bw = hs("modal", {
  state: () => ({
    isOpen: !1,
    isModalLoading: !1,
    closable: !0,
    modalWidth: 400,
    view: {
      component: {},
      props: {}
    },
    actions: []
  }),
  actions: {
    close() {
      this.isOpen = !1;
    },
    setModalLoading(e) {
      this.isModalLoading = e;
    },
    clear() {
      this.view = si({
        component: {},
        props: {}
      }), this.closable = !0, this.actions = [];
    },
    open(e, n, t = !0) {
      this.clear(), this.isOpen = !0, this.closable = t, this.view = {
        ...e,
        component: si(e.component)
      }, this.actions = n;
    },
    openDelete(e, n, t, a, l) {
      this.open(
        {
          component: ri,
          props: {
            icon: De.DELETE,
            title: n,
            subtitle: t
          }
        },
        [
          {
            label: l || Gn.t("components.modals.cancel"),
            type: "secondary",
            block: !1,
            isSubmit: !1,
            class: "flex-grow-1",
            callback: () => {
              this.close();
            }
          },
          {
            label: a || Gn.t("components.modals.delete"),
            type: "destructive",
            block: !1,
            class: "flex-grow-1",
            isSubmit: !1,
            callback: async () => {
              this.isModalLoading = !0, await e(), this.isModalLoading = !1, this.close();
            }
          }
        ]
      );
    },
    openInput(e, n, t, a, l, i, o, r) {
      this.open(
        {
          component: ri,
          props: {
            icon: De.EDIT,
            title: n,
            subtitle: t,
            addTextField: !0,
            initialText: a,
            rules: l,
            hint: i,
            placeholder: o
          }
        },
        [
          {
            label: Gn.t("components.modals.cancel"),
            type: "secondary",
            block: !1,
            class: "flex-grow-1",
            isSubmit: !1,
            callback: () => {
              this.close();
            }
          },
          {
            label: r || Gn.t("components.modals.rename"),
            type: "primary",
            block: !1,
            class: "flex-grow-1",
            isSubmit: !0,
            callback: async (s) => {
              this.isModalLoading = !0, await e(s), this.isModalLoading = !1, this.close();
            }
          }
        ]
      );
    },
    openWarning(e, n, t, a = !1) {
      this.open(
        {
          component: ri,
          props: {
            icon: De.WARN,
            title: n,
            subtitle: t
          }
        },
        [
          {
            label: Gn.t("components.modals.proceed"),
            type: "primary",
            block: !0,
            isSubmit: !1,
            callback: async () => {
              this.isModalLoading = !0, await e(), this.isModalLoading = !1, this.close();
            }
          }
        ],
        a
      );
    }
  }
}), Ow = "data:image/svg+xml,%3csvg%20width='115'%20height='100'%20viewBox='0%200%20115%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2022.1622V55.6757L67.2643%20100L93.3016%2083.2432V49.189L92.7591%2048.6484L115%2034.0537V0L66.1793%2031.8916V64.8646L0%2022.1622Z'%20fill='%23A82259'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M66.1793%2031.8916L93.3017%2049.189L67.5354%2065.6757L66.1793%2064.8645V31.8916Z'%20fill='%23D52364'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2021.8926V55.4061L67.2643%2099.7304V65.6758L0%2021.8926Z'%20fill='%23D52364'/%3e%3c/svg%3e", Ew = { class: "vs2-logo-name" }, Lw = {
  key: 0,
  class: "vs2-logo-powered-by"
}, $w = /* @__PURE__ */ qe({
  __name: "VS2Logo",
  props: {
    name: {},
    vertical: { type: Boolean },
    poweredBy: { type: Boolean },
    pathOverride: {}
  },
  setup(e) {
    const { t: n } = ds({ useScope: "global" });
    return (t, a) => (re(), _e("div", {
      class: z(["vs2-logo d-flex justify-center", {
        "flex-column": t.vertical === !0,
        "ga-m": t.vertical !== !0,
        "ga-l": t.vertical === !0
      }])
    }, [
      a[0] || (a[0] = S("img", {
        height: "100",
        src: Ow
      }, null, -1)),
      t.name ? (re(), _e("div", {
        key: 0,
        class: z(["d-flex flex-column justify-center ga-m", { "text-center": t.vertical === !0 }])
      }, [
        S("div", Ew, tt(t.name), 1),
        t.poweredBy === !0 ? (re(), _e("div", Lw, tt(be(n)("components.common.powered_by")), 1)) : $e("", !0)
      ], 2)) : $e("", !0)
    ], 2));
  }
}), qa = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, l] of n)
    t[a] = l;
  return t;
}, _0 = /* @__PURE__ */ qa($w, [["__scopeId", "data-v-1227f981"]]), Sl = /* @__PURE__ */ qe({
  __name: "VS2Button",
  props: {
    block: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    variant: { default: "text" },
    asyncHandler: { type: Function }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = j(!1), l = async (i) => {
      if (e.asyncHandler) {
        a.value = !0;
        try {
          await e.asyncHandler(i);
        } catch (o) {
          console.error(o);
        } finally {
          a.value = !1;
        }
      } else
        t("click", i);
    };
    return (i, o) => (re(), Ve(xe, {
      loading: a.value,
      block: i.block,
      disabled: i.disabled,
      class: z(i.variant),
      variant: i.variant === "text" ? "text" : "flat",
      onClick: o[0] || (o[0] = (r) => l(r))
    }, {
      prepend: Se(() => [
        Ze(i.$slots, "left")
      ]),
      default: Se(() => [
        Ze(i.$slots, "default")
      ]),
      append: Se(() => [
        Ze(i.$slots, "right")
      ]),
      _: 3
    }, 8, ["loading", "block", "disabled", "class", "variant"]));
  }
}), Mw = /* @__PURE__ */ qe({
  __name: "VS2Card",
  props: {
    size: { default: () => nr.l }
  },
  setup(e) {
    return (n, t) => (re(), Ve(Cc, {
      class: z(["vs2-card d-flex flex-column justify-space-between", `pa-${n.size}`]),
      elevation: 0
    }, {
      default: Se(() => [
        Ze(n.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ud = /* @__PURE__ */ qa(Mw, [["__scopeId", "data-v-55158a2b"]]), ar = /* @__PURE__ */ qe({
  __name: "VS2IconButton",
  props: {
    icon: {},
    toggled: { type: Boolean, default: !1 },
    asyncHandler: { type: Function }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = j(!1), l = async (i) => {
      if (e.asyncHandler) {
        a.value = !0;
        try {
          await e.asyncHandler(i);
        } catch (o) {
          console.error(o);
        } finally {
          a.value = !1;
        }
      } else
        t("click", i);
    };
    return (i, o) => (re(), Ve(xe, {
      class: "px-0 bg-surface",
      flat: "",
      color: i.toggled ? "secondary" : "",
      onClick: o[0] || (o[0] = (r) => l(r)),
      loading: a.value
    }, {
      default: Se(() => [
        k(ze, { icon: i.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 8, ["color", "loading"]));
  }
}), Fw = { class: "notifications-container" }, Rw = { class: "d-flex ga-xs align-center" }, Nw = { class: "v2-sm-text" }, Hw = 2e3, I0 = /* @__PURE__ */ qe({
  __name: "VS2Notification",
  setup(e) {
    const n = {
      CLOSE: "close",
      CLOSE_OLDEST: "closeOldest"
    }, t = Wd(), a = t.$onAction(({ name: o, store: r, after: s }) => {
      (o === n.CLOSE || o === n.CLOSE_OLDEST) && r.queueSize > 0 && s(() => {
        o === n.CLOSE && l && (window.clearInterval(l), l = void 0), r.process();
      });
    });
    let l;
    const { currentNotifications: i } = ys(t);
    return ae(i.value, (o) => {
      o.length > 0 && !l ? l = window.setInterval(() => {
        t.closeOldest();
      }, Hw) : o.length === 0 && l && (window.clearInterval(l), l = void 0);
    }), ms(() => {
      a(), l && window.clearInterval(l);
    }), (o, r) => (re(), _e("div", Fw, [
      k(Il, { group: "" }, {
        default: Se(() => [
          (re(!0), _e(ue, null, xn(be(i), (s, c) => (re(), Ve(wu, {
            key: s.ID,
            class: z(s.type),
            variant: "outlined"
          }, {
            close: Se(() => [
              k(ze, {
                onClick: (u) => be(t).close(c),
                icon: be(De).CLOSE
              }, null, 8, ["onClick", "icon"])
            ]),
            default: Se(() => [
              S("div", Rw, [
                k(ze, {
                  class: "d-flex justify-center notification-icon",
                  icon: s.icon
                }, null, 8, ["icon"]),
                S("span", Nw, tt(s.message), 1)
              ])
            ]),
            _: 2
          }, 1032, ["class"]))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), jd = /* @__PURE__ */ qe({
  __name: "VS2Tooltip",
  props: {
    location: { default: "bottom" },
    activator: {},
    width: {}
  },
  setup(e) {
    const n = w(() => `${e.location.replaceAll(" ", "-")}-aligned`);
    return (t, a) => (re(), Ve(tr, {
      width: t.width,
      "min-width": t.width,
      activator: t.activator,
      location: t.location,
      "content-class": n.value
    }, {
      activator: Se(({ props: l }) => [
        Ze(t.$slots, "activator", Ea(La(l)))
      ]),
      default: Se(() => [
        Ze(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["width", "min-width", "activator", "location", "content-class"]));
  }
}), zw = {
  key: 1,
  class: "v2-sm-text",
  style: { color: "rgb(var(--v-theme-light-gray-100))" }
}, Ww = {
  key: 0,
  class: "d-flex ga-s align-center"
}, A0 = /* @__PURE__ */ qe({
  __name: "VS2Select",
  props: {
    label: {},
    items: {},
    disabled: { type: Boolean },
    itemActions: {},
    value: {},
    showActionsOnSelected: { type: Boolean, default: !1 },
    prependIcon: {},
    asyncHandler: { type: Function }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = j(!1), a = n, l = async (i) => {
      if (e.asyncHandler) {
        t.value = !0;
        try {
          await e.asyncHandler(i), a("update:modelValue", i);
        } catch (o) {
          console.error(o);
        } finally {
          t.value = !1;
        }
      } else
        a("update:modelValue", i);
    };
    return (i, o) => (re(), Ve(dc, {
      "onUpdate:modelValue": l,
      disabled: t.value || i.disabled,
      loading: t.value,
      items: i.items,
      "menu-props": {
        closeOnContentClick: !0
      },
      transition: "scroll-y-transition",
      class: "v2-rounded v2-md-text-medium",
      variant: "outlined"
    }, ir({
      "append-inner": Se(() => [
        S("div", null, [
          k(ze, {
            class: "up",
            icon: be(De).CHEVRON_UP
          }, null, 8, ["icon"]),
          k(ze, {
            class: "down",
            icon: be(De).CHEVRON_DOWN
          }, null, 8, ["icon"])
        ])
      ]),
      item: Se(({ index: r, props: s }) => [
        k(Dt, H(s, { class: "select-item" }), ir({
          title: Se(() => [
            Ze(i.$slots, "item", {
              index: r,
              data: s
            }, () => [
              mt(tt(s.title), 1)
            ])
          ]),
          append: Se(({ isSelected: c }) => [
            (!c || i.showActionsOnSelected) && i.itemActions ? (re(), _e("div", Ww, [
              (re(!0), _e(ue, null, xn(i.itemActions, (u) => (re(), _e(ue, null, [
                u.tooltip ? (re(), Ve(jd, {
                  key: `${u.icon}-tooltip`
                }, {
                  activator: Se((d) => [
                    k(ze, H({ ref_for: !0 }, d, {
                      class: "action-icon",
                      onClick: Xt((v) => u.callback(r), ["stop"]),
                      icon: u.icon
                    }), null, 16, ["onClick", "icon"])
                  ]),
                  default: Se(() => [
                    mt(tt(u.tooltip), 1)
                  ]),
                  _: 2
                }, 1024)) : (re(), Ve(ze, {
                  key: `${u.icon}-icon`,
                  class: "action-icon",
                  onClick: Xt((d) => u.callback(r), ["stop"]),
                  icon: u.icon
                }, null, 8, ["onClick", "icon"]))
              ], 64))), 256))
            ])) : $e("", !0),
            c ? (re(), Ve(ze, {
              key: 1,
              icon: be(De).CHECK,
              style: { color: "rgb(var(--v-theme-success))" }
            }, null, 8, ["icon"])) : $e("", !0)
          ]),
          _: 2
        }, [
          i.$slots.prependItem ? {
            name: "prepend",
            fn: Se(() => [
              Ze(i.$slots, "prependItem", { index: r })
            ]),
            key: "0"
          } : void 0
        ]), 1040)
      ]),
      _: 2
    }, [
      i.label || i.prependIcon ? {
        name: "prepend-inner",
        fn: Se(() => [
          i.prependIcon ? (re(), Ve(ze, {
            key: 0,
            icon: i.prependIcon,
            class: z({ "mr-2": i.label })
          }, null, 8, ["icon", "class"])) : $e("", !0),
          i.label ? (re(), _e("span", zw, tt(`${i.label}:`), 1)) : $e("", !0)
        ]),
        key: "0"
      } : void 0,
      i.$slots.appendItem ? {
        name: "append-item",
        fn: Se(() => [
          Ze(i.$slots, "appendItem")
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["disabled", "loading", "items"]));
  }
}), T0 = /* @__PURE__ */ qe({
  __name: "VS2Slider",
  props: {
    max: {},
    min: { default: 0 },
    step: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    return (n, t) => (re(), Ve(yl, {
      color: "success",
      disabled: n.disabled,
      "thumb-color": "surface-bright",
      "thumb-size": "24",
      "tick-size": "8",
      "track-color": "grey",
      "track-size": "8",
      max: n.max,
      min: n.min,
      "show-ticks": "always",
      step: n.step
    }, null, 8, ["disabled", "max", "min", "step"]));
  }
}), D0 = /* @__PURE__ */ qe({
  __name: "VS2Switch",
  props: {
    disabled: { type: Boolean },
    label: {},
    withIcon: { type: Boolean, default: !0 },
    asyncHandler: { type: Function }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = n, a = j(!1), l = async (i) => {
      if (e.asyncHandler) {
        a.value = !0;
        try {
          await e.asyncHandler(i), t("update:modelValue", i);
        } catch (o) {
          console.error(o);
        } finally {
          a.value = !1;
        }
      } else
        t("update:modelValue", i);
    };
    return (i, o) => (re(), Ve(Bd, {
      inset: "",
      flat: "",
      color: "success",
      "onUpdate:modelValue": o[0] || (o[0] = (r) => l(!!r)),
      disabled: i.disabled || a.value,
      label: i.label,
      loading: a.value
    }, {
      thumb: Se(({ model: r }) => [
        S("div", {
          class: z(["thumb", r.value ? "filled" : ""])
        }, [
          !r.value && !a.value && i.withIcon ? (re(), Ve(ze, {
            key: 0,
            icon: be(De).CLOSE
          }, null, 8, ["icon"])) : $e("", !0),
          a.value ? (re(), Ve(rn, {
            key: 1,
            color: r.value ? "background" : "surface-bright",
            size: 15,
            width: 1,
            indeterminate: ""
          }, null, 8, ["color"])) : $e("", !0)
        ], 2)
      ]),
      _: 1
    }, 8, ["disabled", "label", "loading"]));
  }
}), Uw = { class: "action-tooltip-container" }, jw = { class: "d-flex ga-xs justify-center align-center" }, B0 = /* @__PURE__ */ qe({
  __name: "VS2TooltipWithActions",
  props: {
    actions: {},
    location: { default: "bottom" },
    activator: {},
    width: {}
  },
  setup(e) {
    const n = w(() => `${e.location.replaceAll(" ", "-")}-aligned`);
    return (t, a) => (re(), Ve(Pn, {
      location: t.location,
      activator: t.activator,
      "open-on-hover": "",
      "content-class": n.value,
      width: t.width,
      "min-width": t.width
    }, {
      activator: Se(({ props: l }) => [
        Ze(t.$slots, "default", Ea(La(l)))
      ]),
      default: Se(() => [
        S("div", Uw, [
          (re(!0), _e(ue, null, xn(t.actions, (l) => (re(), Ve(xe, {
            key: l.text,
            onClick: l.handler,
            class: "tooltip-btn w-100",
            elevation: "0"
          }, {
            default: Se(() => [
              S("div", jw, [
                S("span", null, tt(l.text), 1),
                k(ze, {
                  class: "tooltip-icon",
                  icon: l.icon
                }, null, 8, ["icon"])
              ])
            ]),
            _: 2
          }, 1032, ["onClick"]))), 128))
        ])
      ]),
      _: 3
    }, 8, ["location", "activator", "content-class", "width", "min-width"]));
  }
}), Gw = { class: "d-flex ga-xs justify-center align-center" }, Yw = ["src"], Kw = ["src"], qw = /* @__PURE__ */ qe({
  __name: "VS2TooltipWithMedia",
  props: {
    src: {},
    mediaType: { default: "image" },
    location: { default: "bottom" },
    activator: {},
    width: {}
  },
  setup(e) {
    const n = w(() => e.src instanceof File ? URL.createObjectURL(e.src) : e.src);
    return (t, a) => (re(), Ve(jd, {
      location: t.location,
      activator: t.activator,
      width: t.width,
      "min-width": t.width
    }, {
      activator: Se((l) => [
        Ze(t.$slots, "default", Ea(La(l)), void 0, !0)
      ]),
      default: Se(() => [
        S("div", Gw, [
          t.mediaType === "image" ? (re(), _e("img", {
            key: 0,
            class: "tooltip-image",
            src: n.value,
            alt: "",
            width: "112",
            height: "63"
          }, null, 8, Yw)) : $e("", !0),
          t.mediaType === "video" ? (re(), _e("video", {
            key: 1,
            muted: "",
            loop: "",
            src: n.value,
            width: "112",
            height: "63"
          }, null, 8, Kw)) : $e("", !0)
        ])
      ]),
      _: 3
    }, 8, ["location", "activator", "width", "min-width"]));
  }
}), O0 = /* @__PURE__ */ qa(qw, [["__scopeId", "data-v-fe42ed65"]]), Xw = (e, n) => {
  if (!e) return null;
  if (e.indexOf("__b__") === -1 && e.indexOf("__p__") === -1) return e;
  let t = e;
  const a = [
    "org_if_sml=1"
    // Prevent enlarging
  ];
  if (n.w && a.push(`w=${n.w}`), n.h && a.push(`h=${n.h}`), n.func && a.push(`func=${n.func}`), n.trim !== void 0 && a.push(`trim=${Math.min(25, Math.max(0, n.trim))}`), n.face_margin && a.push(`face_margin=${n.face_margin}`), n.gravity && a.push(`gravity=${n.gravity}`), n.other_cdn) {
    const l = n.other_cdn.split("?").pop();
    l && l.length > 3 && a.push(l);
  }
  return a.length === 0 || (t += t.indexOf("?") === -1 ? "?" : "&", t += a.join("&")), t;
}, ga = 100, ha = {
  image: "image",
  video: "video",
  audio: "audio",
  document: "document",
  font: "font"
}, Gd = {
  src: {
    type: String,
    required: !1
  },
  alt: {
    type: String,
    required: !0
  },
  error_src: {
    type: String,
    required: !1
  },
  height: {
    type: String,
    required: !1
  },
  minHeight: {
    type: String,
    required: !1
  },
  maxHeight: {
    type: String,
    required: !1
  },
  width: {
    type: String,
    required: !1
  },
  minWidth: {
    type: String,
    required: !1
  },
  maxWidth: {
    type: String,
    required: !1
  },
  borderRadius: {
    type: String,
    required: !1
  },
  aspectRatio: {
    type: String,
    required: !1
  },
  // See <https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold>
  threshold: {
    type: Number,
    default: 0
  },
  // See <https://vuetifyjs.com/en/styles/transitions/#api>
  // example 'fade-transition'
  transition: {
    type: String,
    required: !1
  },
  autoplay: {
    type: Boolean,
    default: !1
  },
  muted: {
    type: Boolean,
    default: !1
  },
  loop: {
    type: Boolean,
    default: !1
  },
  controls: {
    type: Boolean,
    default: !1
  },
  isUpload: {
    type: Boolean,
    default: !1
  }
}, Yd = {
  func: {
    type: String,
    required: !1
  },
  trim: {
    type: Number,
    required: !1
  },
  faceMargin: {
    type: Number,
    required: !1
  },
  gravity: {
    type: String,
    required: !1
  },
  otherCdn: {
    type: String,
    required: !1
  }
}, Zw = {
  key: 0,
  ref: "assettool",
  style: { visibility: "hidden" }
}, Qw = ["alt", "src"], Jw = ["alt", "src", "autoplay", "muted", "controls", "loop"], e0 = {
  key: 2,
  class: "asset-view"
}, t0 = ["alt", "src", "autoplay", "muted", "controls", "loop"], n0 = ["alt"], a0 = ["alt"], l0 = {
  key: 1,
  class: "asset-view"
}, i0 = {
  key: 2,
  class: "asset-view"
}, o0 = /* @__PURE__ */ qe({
  __name: "VS2AssetView",
  props: {
    type: {
      type: String,
      required: !0
    },
    ...Gd,
    ...Yd
  },
  setup(e) {
    const n = e, t = j(n.src && n.src.length > 0 ? n.src : null), a = w(
      () => Math.round(Math.max(1, Math.min(3, window.devicePixelRatio ?? 1)))
    ), l = w(() => n.type === ha.image), i = w(() => n.type === ha.video), o = w(() => n.type === ha.font), r = w(() => n.type === ha.document), s = w(() => n.type === ha.audio), c = j(
      window.crypto.randomUUID().replaceAll("-", "").replaceAll(/\d/gi, "g").slice(-12)
    ), u = w(
      () => P.value ? new FontFace(c.value, `url(${P.value})`) : null
    ), d = w(() => parseInt(n.width ?? "")), v = w(() => parseInt(n.height ?? "")), f = w(() => parseFloat(n.aspectRatio ?? "")), g = j(!1), b = ui("assettool"), m = j(-1), y = (x, B, M = !1) => {
      if (isNaN(x)) {
        if (M) return;
        const L = ga * 2, N = B <= 0 ? ga : Math.round(B / L) * L;
        return Math.max(ga, N);
      }
      return isNaN(f.value) || f.value <= 0 ? x : Math.round(M ? x / f.value : x * f.value);
    }, h = w(() => isNaN(d.value) ? y(v.value, m.value) : d.value), C = w(() => isNaN(v.value) ? y(d.value, m.value, !0) : v.value), p = w(() => {
      const x = h.value;
      return x ? x * a.value : void 0;
    }), _ = w(() => {
      const x = C.value;
      return x ? x * a.value : void 0;
    }), P = w(() => {
      const x = t.value;
      if (!x) return null;
      if (s.value || r.value || o.value || x.slice(-4) === ".svg") return x;
      const B = p.value, M = _.value, L = {};
      return B && (L.w = i.value ? Math.max(ga, B) : B), M && (L.h = i.value ? Math.max(ga, M) : M), n.func && (L.func = n.func), n.trim && (L.trim = n.trim), n.faceMargin && (L.face_margin = n.faceMargin), n.gravity && (L.gravity = n.gravity), n.otherCdn && (L.other_cdn = n.otherCdn), Xw(x, L);
    }), I = (x) => {
      x && window.open(x);
    }, V = (x) => {
      x.stopPropagation();
      const B = x.target;
      if (B)
        try {
          const M = B;
          if (n.error_src) {
            const L = "err";
            M.getAttribute(L) === n.error_src ? M.style.visibility = "hidden" : (M.setAttribute(L, n.error_src), M.src = n.error_src);
          } else
            M.style.visibility = "hidden";
        } catch (M) {
          console.warn("Error handler failure", M);
        }
    }, T = ui("audioref"), A = j(!1), D = () => {
      const x = T == null ? void 0 : T.value;
      if (!x) {
        console.warn("Failed to preview audio");
        return;
      }
      if (A.value) {
        x.pause();
        return;
      }
      new Promise(async (B) => {
        const M = () => {
          x.removeEventListener("ended", M), x.removeEventListener("pause", M), B();
        };
        x.addEventListener("ended", M), x.addEventListener("pause", M), A.value = !0, await x.play();
      }).catch(() => {
      }).finally(() => {
        A.value = !1;
      });
    };
    return ft(() => {
      if (o.value && u.value) {
        const x = u.value;
        x.load().then(() => {
          document.fonts.add(x), g.value = !0;
        }).catch((B) => console.error(B));
      } else
        Pe(() => {
          const x = b.value;
          x && (m.value = x.clientWidth), g.value = !0;
        });
    }), (x, B) => g.value ? (re(), Ve(wd, {
      key: 1,
      height: C.value,
      "min-height": x.minHeight,
      "max-height": x.maxHeight,
      width: h.value,
      "min-width": x.minWidth,
      "max-width": x.maxWidth,
      options: { threshold: x.threshold },
      transition: x.transition,
      style: le({
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "hidden",
        aspectRatio: x.aspectRatio ? `${x.aspectRatio}px` : void 0,
        borderRadius: x.borderRadius ? `${x.borderRadius}px` : void 0
      })
    }, {
      default: Se(() => [
        g.value ? (re(), _e(ue, { key: 0 }, [
          P.value ? (re(), _e(ue, { key: 0 }, [
            l.value ? (re(), _e("img", {
              key: 0,
              class: "asset-view asset-view-img",
              alt: x.alt,
              src: P.value,
              onError: V
            }, null, 40, Qw)) : i.value ? (re(), _e("video", {
              key: 1,
              class: "asset-view asset-view-video",
              alt: x.alt,
              src: P.value,
              autoplay: x.autoplay,
              muted: x.muted,
              controls: x.controls,
              loop: x.loop
            }, null, 8, Jw)) : s.value ? (re(), _e("div", e0, [
              S("audio", {
                class: "asset-view-audio",
                style: le({ display: x.controls ? "block" : "none" }),
                ref: "audioref",
                alt: x.alt,
                src: P.value,
                autoplay: x.autoplay,
                muted: x.muted,
                controls: x.controls,
                loop: x.loop
              }, null, 12, t0),
              x.controls ? $e("", !0) : (re(), Ve(ze, {
                key: 0,
                class: z(["cursor-pointer", { "text-success": A.value }]),
                icon: be(De).ADDED_TO_GROOV,
                onClick: D
              }, null, 8, ["class", "icon"]))
            ])) : o.value ? (re(), _e("div", {
              key: 3,
              class: "asset-view asset-view-font v2-md-text-semibold",
              style: le({
                fontFamily: c.value,
                fontSize: C.value ? `${C.value / 2}px` : void 0,
                lineHeight: C.value ? `${C.value}px` : void 0
              }),
              alt: x.alt
            }, " Aa ", 12, n0)) : r.value ? (re(), _e("div", {
              key: 4,
              class: "asset-view cursor-pointer",
              alt: x.alt,
              onClick: B[0] || (B[0] = () => I(P.value))
            }, [
              k(ze, {
                class: "asset-view-doc",
                icon: be(De).SCALE
              }, null, 8, ["icon"])
            ], 8, a0)) : $e("", !0)
          ], 64)) : x.isUpload ? (re(), _e("div", l0, [
            l.value ? (re(), Ve(ze, {
              key: 0,
              icon: be(De).UPLOAD_PHOTO
            }, null, 8, ["icon"])) : s.value ? (re(), Ve(ze, {
              key: 1,
              icon: be(De).ADD_TO_GROOV
            }, null, 8, ["icon"])) : o.value ? (re(), Ve(ze, {
              key: 2,
              icon: be(De).LETTER_CASE
            }, null, 8, ["icon"])) : (re(), Ve(ze, {
              key: 3,
              icon: be(De).UPLOAD
            }, null, 8, ["icon"]))
          ])) : (re(), _e("div", i0, [
            l.value ? (re(), Ve(ze, {
              key: 0,
              icon: be(De).PHOTO_MAGIC_2
            }, null, 8, ["icon"])) : s.value ? (re(), Ve(ze, {
              key: 1,
              icon: be(De).GROOVE
            }, null, 8, ["icon"])) : o.value ? (re(), Ve(ze, {
              key: 2,
              icon: be(De).LETTER_CASE
            }, null, 8, ["icon"])) : (re(), Ve(ze, {
              key: 3,
              icon: be(De).ASSET_MANAGER
            }, null, 8, ["icon"]))
          ]))
        ], 64)) : $e("", !0)
      ]),
      _: 1
    }, 8, ["height", "min-height", "max-height", "width", "min-width", "max-width", "options", "transition", "style"])) : (re(), _e("div", Zw, null, 512));
  }
}), r0 = /* @__PURE__ */ qa(o0, [["__scopeId", "data-v-131614d8"]]), s0 = /* @__PURE__ */ new Map([
  ["774f4632", "font/woff2"],
  ["774f4646", "font/woff"],
  ["0100", "font/ttf"],
  ["4f54544f", "font/otf"],
  ["89504e47", "image/png"],
  ["47494638", "image/gif"],
  ["ffd8ffe0", "image/jpeg"],
  ["ffd8ffe1", "image/jpeg"],
  ["ffd8ffe2", "image/jpeg"]
]), u0 = async (e) => {
  try {
    let n = await e.slice(0, 4).arrayBuffer(), t = Array.from(new Uint8Array(n)).map((l) => l.toString(16)).join("");
    return s0.get(t) || "";
  } catch (n) {
    return console.error(n), "";
  }
}, c0 = { class: "asset-uploader-content" }, d0 = ["disabled", "accept"], v0 = {
  key: 0,
  class: "asset-uploader-loading"
}, f0 = /* @__PURE__ */ qe({
  __name: "VS2AssetUploader",
  props: {
    sizeLimitMB: {
      type: Number,
      required: !1
    },
    types: {
      type: Array,
      required: !1
    },
    assetType: {
      type: String,
      required: !1
    },
    skipFileTypeCheck: {
      type: Boolean,
      required: !1,
      default: !1
    },
    acceptedExtensions: {
      type: Array,
      required: !1,
      default: []
    },
    ...Gd,
    ...Yd
  },
  emits: ["update:asset", "update:clear"],
  setup(e, { emit: n }) {
    const { t } = ds({ useScope: "global" }), a = Wd(), l = e, i = n, o = j(""), r = w(() => l.sizeLimitMB || 5), s = w(() => l.types || ["image/jpeg", "image/png", "image/gif"]), c = j(!1), u = w(() => l.src && l.src.length > 0), d = w(() => l.acceptedExtensions.join(",")), v = w(() => {
      if (l.assetType) return l.assetType;
      const p = [], _ = s.value.reduce((P, I) => {
        let V;
        return I.startsWith("image/") ? V = "image" : I.startsWith("video/") ? V = "video" : I.startsWith("audio/") ? V = "audio" : I.startsWith("font/") || I === "application/font-woff" ? V = "font" : V = "document", P.indexOf(V) === -1 && P.push(V), P;
      }, p);
      return _.length === 0 ? "image" : _[0];
    }), f = (p) => p.size > r.value * 1024 * 1024, g = (p) => {
      const _ = (P) => P.trim().endsWith("/*") ? p.startsWith(P.split("/")[0]) : P.trim() === p;
      return s.value.filter(_).length > 0;
    }, b = async (p) => {
      if (o.value = "", !p) return;
      let _ = p.type.trim();
      if (_ === "" && (_ = await u0(p)), l.skipFileTypeCheck || g(_) || (o.value = t("components.assets.error.invalid_file_type")), o.value.length === 0 && f(p) && (o.value = t("components.assets.error.size_exceeded", {
        size: r.value
      })), o.value.length > 0) {
        a.error(`${o.value}`);
        return;
      }
      await new Promise((P, I) => {
        i("update:asset", P, I, p, _);
      });
    }, m = (p) => {
      if (c.value) return;
      const _ = p.target, P = _.files && _.files[0];
      c.value = !0, b(P).catch((I) => {
        const V = t("components.assets.error.upload_failed");
        o.value = V, a.error(V, I);
      }).finally(() => {
        c.value = !1;
      });
    }, y = (p) => {
      var P;
      if (c.value) return;
      const _ = (P = p.dataTransfer) == null ? void 0 : P.files[0];
      c.value = !0, b(_).catch((I) => {
        const V = t("components.assets.error.upload_failed");
        o.value = V, a.error(V, I);
      }).finally(() => {
        c.value = !1;
      });
    }, h = () => {
    }, C = () => {
      c.value || (c.value = !0, new Promise((p, _) => {
        i("update:clear", p, _, l.src ?? null);
      }).catch((p) => {
        const _ = t("components.assets.error.clear_failed");
        o.value = _, a.error(_, p);
      }).finally(() => {
        c.value = !1;
      }));
    };
    return (p, _) => (re(), _e("div", {
      class: z(["asset-uploader", { filled: u.value }]),
      onDragover: Xt(h, ["prevent"]),
      onDrop: Xt(y, ["prevent"])
    }, [
      S("div", c0, [
        S("input", {
          type: "file",
          onChange: m,
          class: "file-input",
          multiple: !1,
          disabled: c.value,
          accept: d.value
        }, null, 40, d0),
        k(r0, Ea(La({ ...l, type: v.value })), null, 16),
        c.value ? (re(), _e("div", v0, [
          k(ar, {
            icon: be(De).LOADING,
            loading: !0
          }, null, 8, ["icon"])
        ])) : $e("", !0)
      ]),
      u.value && !c.value ? (re(), Ve(ze, {
        key: 0,
        class: "asset-uploader-clear",
        icon: be(De).CLOSE,
        onClick: Xt(C, ["stop", "prevent"])
      }, null, 8, ["icon"])) : $e("", !0)
    ], 34));
  }
}), E0 = /* @__PURE__ */ qa(f0, [["__scopeId", "data-v-158ac840"]]), L0 = /* @__PURE__ */ qe({
  __name: "VS2CollapsableCard",
  props: /* @__PURE__ */ cv({
    title: {},
    size: { default: () => nr.l }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const n = dv(e, "modelValue");
    return (t, a) => (re(), Ve(Ud, { size: t.size }, {
      default: Se(() => [
        k(Sl, {
          onClick: a[0] || (a[0] = (l) => n.value = !n.value)
        }, {
          right: Se(() => [
            k(ze, {
              icon: n.value ? be(De).CHEVRON_UP : be(De).CHEVRON_DOWN
            }, null, 8, ["icon"])
          ]),
          default: Se(() => [
            S("span", null, tt(t.title), 1)
          ]),
          _: 1
        }),
        k(la, null, {
          default: Se(() => [
            We(S("div", null, [
              Ze(t.$slots, "default")
            ], 512), [
              [Lt, n.value]
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["size"]));
  }
}), m0 = { class: "color-picker-container pa-s" }, g0 = { class: "d-flex justify-space-between" }, $0 = /* @__PURE__ */ qe({
  __name: "VS2ColorPicker",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = j(t.modelValue), i = j(t.modelValue), o = j(!1), r = () => {
      o.value = !1;
    }, s = () => {
      o.value = !1, i.value = l.value, a("update:modelValue", l.value);
    };
    return ae(
      () => t.modelValue,
      () => {
        t.modelValue !== i.value && (i.value = t.modelValue);
      }
    ), (c, u) => (re(), Ve(Nt, {
      contained: "",
      location: "bottom",
      "location-strategy": "connected",
      "open-on-click": "",
      "open-on-hover": !1,
      scrim: !1,
      modelValue: o.value,
      "onUpdate:modelValue": u[1] || (u[1] = (d) => o.value = d)
    }, {
      activator: Se(({ props: d }) => [
        S("div", H(d, {
          class: "box-color-preview",
          style: { backgroundColor: i.value }
        }), null, 16)
      ]),
      default: Se(() => [
        S("div", m0, [
          k(Tc, H({
            elevation: "0",
            modelValue: l.value,
            "onUpdate:modelValue": u[0] || (u[0] = (d) => l.value = d),
            mode: "hexa"
          }, c.$attrs), null, 16, ["modelValue"]),
          S("div", g0, [
            k(Sl, {
              variant: "secondary",
              onClick: r
            }, {
              default: Se(() => u[2] || (u[2] = [
                mt("Cancel")
              ])),
              _: 1
            }),
            k(Sl, {
              variant: "primary",
              onClick: s
            }, {
              default: Se(() => u[3] || (u[3] = [
                mt("Save")
              ])),
              _: 1
            })
          ])
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), M0 = /* @__PURE__ */ qe({
  __name: "VS2List",
  props: {
    items: {},
    activeId: {},
    editId: {},
    draggableList: { type: Boolean, default: !0 },
    expandableList: { type: Boolean, default: !1 }
  },
  emits: ["dragStart", "dragEnd"],
  setup(e, { emit: n }) {
    const t = n, a = (l, i, o) => {
      l === "dragStart" ? t("dragStart", i) : t("dragEnd", { newIndex: o, oldIndex: i });
    };
    return (l, i) => (re(), Ve(pn, {
      class: z(l.draggableList ? "" : "list-spacing ga-xs")
    }, {
      default: Se(() => [
        l.draggableList ? (re(), Ve(be(vv), {
          key: 0,
          class: "list-spacing ga-xs",
          list: l.items,
          "item-key": "ID",
          handle: ".drag-handler",
          animation: 200,
          onStart: i[0] || (i[0] = (o) => a("dragStart", o.oldIndex, o.newIndex)),
          onEnd: i[1] || (i[1] = (o) => a("dragEnd", o.oldIndex, o.newIndex))
        }, {
          item: Se(({ element: o, index: r }) => [
            S("div", null, [
              Ze(l.$slots, "default", {
                active: l.activeId ? o.ID === l.activeId : !1,
                editable: l.editId ? o.ID === l.editId : !1,
                draggableItem: l.draggableList,
                element: o,
                expandableItem: l.expandableList,
                index: r
              })
            ])
          ]),
          _: 3
        }, 8, ["list"])) : (re(!0), _e(ue, { key: 1 }, xn(l.items, (o, r) => Ze(l.$slots, "default", {
          key: o.ID,
          active: l.activeId ? o.ID === l.activeId : !1,
          editable: l.editId ? o.ID === l.editId : !1,
          element: o,
          draggableItem: l.draggableList,
          expandableItem: l.expandableList,
          index: r
        })), 128))
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), h0 = { class: "d-flex justify-space-between align-center ga-xs" }, y0 = {
  key: 0,
  class: "left d-flex ga-xs"
}, b0 = {
  key: 0,
  class: "drag-handler"
}, k0 = {
  key: 1,
  class: "right d-flex"
}, S0 = {
  key: 0,
  class: "expanded-content"
}, F0 = /* @__PURE__ */ qe({
  __name: "VS2ListItem",
  props: {
    borderColor: {},
    draggableItem: { type: Boolean, default: !0 },
    expandableItem: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    editable: { type: Boolean }
  },
  emits: ["expanded", "active"],
  setup(e, { emit: n }) {
    const t = n, a = j(e.expanded), l = j(e.active);
    ae(
      () => e.expanded,
      () => {
        a.value !== e.expanded && (a.value = e.expanded);
      }
    ), ae(a, () => {
      a.value !== e.expanded && t("expanded", a.value);
    }), ae(
      () => e.active,
      () => {
        l.value !== e.active && (l.value = e.active);
      }
    ), ae(l, () => {
      l.value !== e.active && t("active", l.value);
    });
    const i = w(
      () => e.borderColor ? {
        "--indicator-border-color": `var(${e.borderColor})`
      } : {}
    );
    return (o, r) => (re(), Ve(Dt, {
      ref: "list-item",
      active: l.value,
      style: le(i.value),
      disabled: o.disabled
    }, {
      default: Se(() => [
        S("div", h0, [
          o.$slots.left || o.draggableItem || o.expandableItem ? (re(), _e("div", y0, [
            o.draggableItem ? (re(), _e("div", b0, [
              o.$slots.dragHandle ? Ze(o.$slots, "dragHandle", {
                key: 0,
                disabled: o.disabled
              }) : (re(), Ve(ze, {
                key: 1,
                class: z(["drag-icon v2-rounded", o.disabled ? "bg-surface-variant-one" : "bg-surface"]),
                icon: be(De).DRAG_HANDLE
              }, null, 8, ["icon", "class"]))
            ])) : $e("", !0),
            o.expandableItem && !o.$slots.left ? (re(), Ve(ar, {
              key: 1,
              icon: a.value ? be(De).CHEVRON_UP : be(De).CHEVRON_DOWN,
              toggled: a.value,
              onClick: r[0] || (r[0] = (s) => a.value = !a.value)
            }, null, 8, ["icon", "toggled"])) : o.$slots.left ? Ze(o.$slots, "left", { key: 2 }) : $e("", !0)
          ])) : $e("", !0),
          Ze(o.$slots, "default"),
          o.$slots.right ? (re(), _e("div", k0, [
            Ze(o.$slots, "right")
          ])) : $e("", !0)
        ]),
        o.$slots.hint ? Ze(o.$slots, "hint", { key: 0 }) : $e("", !0),
        o.expandableItem ? (re(), Ve(la, { key: 1 }, {
          default: Se(() => [
            a.value ? (re(), _e("div", S0, [
              a.value ? Ze(o.$slots, "expanded", { key: 0 }) : $e("", !0)
            ])) : $e("", !0)
          ]),
          _: 3
        })) : $e("", !0)
      ]),
      _: 3
    }, 8, ["active", "style", "disabled"]));
  }
}), w0 = {
  key: 1,
  class: "d-flex ga-m justify-space-evenly"
}, R0 = /* @__PURE__ */ qe({
  __name: "VS2Modal",
  setup(e) {
    const n = Bw(), { isOpen: t, view: a, closable: l, actions: i, modalWidth: o, isModalLoading: r } = ys(n), s = j({}), c = j(!0), u = (d) => {
      c.value = d.value;
    };
    return (d, v) => (re(), Ve(gl, {
      modelValue: be(t),
      "onUpdate:modelValue": v[2] || (v[2] = (f) => ol(t) ? t.value = f : null),
      width: be(o),
      variant: "outlined",
      persistent: !be(l)
    }, {
      default: Se(() => [
        k(Ud, {
          class: "bg-background-variant ga-l dialog-content-container",
          loading: be(r)
        }, {
          default: Se(() => [
            be(l) ? (re(), Ve(ar, {
              key: 0,
              class: "close-modal-btn bg-background-variant",
              icon: be(De).CLOSE,
              ripple: !1,
              onClick: be(n).close,
              disabled: be(r)
            }, null, 8, ["icon", "onClick", "disabled"])) : $e("", !0),
            (re(), Ve(fs(be(a).component), H(be(a).props, {
              modelValue: s.value,
              "onUpdate:modelValue": v[0] || (v[0] = (f) => s.value = f),
              "onUpdate:isValid": v[1] || (v[1] = (f) => u(f)),
              loading: be(r)
            }), null, 16, ["modelValue", "loading"])),
            be(i) && be(i).length > 0 ? (re(), _e("div", w0, [
              (re(!0), _e(ue, null, xn(be(i), (f, g) => (re(), Ve(Sl, {
                variant: f.type,
                key: g,
                block: f.block,
                class: z(f.class),
                onClick: (b) => f.callback(s.value),
                disabled: be(r) || f.isSubmit && !c.value
              }, {
                default: Se(() => [
                  mt(tt(f.label), 1)
                ]),
                _: 2
              }, 1032, ["variant", "block", "class", "onClick", "disabled"]))), 128))
            ])) : $e("", !0)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }, 8, ["modelValue", "width", "persistent"]));
  }
}), N0 = /* @__PURE__ */ qe({
  __name: "VS2Tabs",
  props: {
    tabs: {}
  },
  setup(e) {
    const n = j(null);
    return (t, a) => (re(), _e(ue, null, [
      k(Od, {
        modelValue: n.value,
        "onUpdate:modelValue": a[0] || (a[0] = (l) => n.value = l),
        grow: "",
        "hide-slider": "",
        class: "pt-1"
      }, {
        default: Se(() => [
          (re(!0), _e(ue, null, xn(t.tabs, (l) => (re(), Ve(Qo, {
            key: l,
            value: l
          }, {
            default: Se(() => [
              mt(tt(l), 1)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"]),
      k(Jo, {
        modelValue: n.value,
        "onUpdate:modelValue": a[1] || (a[1] = (l) => n.value = l)
      }, {
        default: Se(() => [
          (re(!0), _e(ue, null, xn(t.tabs, (l) => (re(), Ve(er, {
            key: l,
            value: l
          }, {
            default: Se(() => [
              Ze(t.$slots, l)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ]),
        _: 3
      }, 8, ["modelValue"])
    ], 64));
  }
});
let Gn;
const H0 = {
  install: (e, n) => {
    e.use(vw);
    const t = new fw(bw(n == null ? void 0 : n.messages)).i18n;
    e.use(t), Gn = t.global, n != null && n.$pinia && e.use(n == null ? void 0 : n.$pinia);
  }
};
export {
  Gd as ASSET_PROPS,
  ha as ASSET_TYPE,
  Xw as CDN_IMG,
  Yd as CDN_IMG_OPTION_PROPS,
  ga as VID_MIN_PIXELS,
  E0 as VS2AssetUploader,
  r0 as VS2AssetView,
  Sl as VS2Button,
  Ud as VS2Card,
  L0 as VS2CollapsableCard,
  $0 as VS2ColorPicker,
  ze as VS2Icon,
  ar as VS2IconButton,
  De as VS2IconEnum,
  M0 as VS2List,
  F0 as VS2ListItem,
  _0 as VS2Logo,
  R0 as VS2Modal,
  ri as VS2ModalWithIcon,
  I0 as VS2Notification,
  A0 as VS2Select,
  nr as VS2SizesEnum,
  T0 as VS2Slider,
  D0 as VS2Switch,
  N0 as VS2Tabs,
  _w as VS2TextField,
  jd as VS2Tooltip,
  B0 as VS2TooltipWithActions,
  O0 as VS2TooltipWithMedia,
  Gn as i18nGlobal,
  H0 as plugin,
  U0 as useI18n,
  Bw as useModal,
  Wd as useNotifications
};
