import ne, { useState as P, useMemo as z } from "react";
var C = { exports: {} }, k = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G;
function ae() {
  if (G) return k;
  G = 1;
  var i = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function d(m, l, a) {
    var R = null;
    if (a !== void 0 && (R = "" + a), l.key !== void 0 && (R = "" + l.key), "key" in l) {
      a = {};
      for (var b in l)
        b !== "key" && (a[b] = l[b]);
    } else a = l;
    return l = a.ref, {
      $$typeof: i,
      type: m,
      key: R,
      ref: l !== void 0 ? l : null,
      props: a
    };
  }
  return k.Fragment = u, k.jsx = d, k.jsxs = d, k;
}
var A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B;
function oe() {
  return B || (B = 1, process.env.NODE_ENV !== "production" && function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case j:
          return "Fragment";
        case t:
          return "Profiler";
        case N:
          return "StrictMode";
        case H:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case w:
            return "Portal";
          case T:
            return (e.displayName || "Context") + ".Provider";
          case p:
            return (e._context.displayName || "Context") + ".Consumer";
          case y:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case F:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function d(e) {
      try {
        u(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), u(e);
      }
    }
    function m(e) {
      if (e === j) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === F)
        return "<...>";
      try {
        var r = i(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = Y.A;
      return e === null ? null : e.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function R(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function b(e, r) {
      function n() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function O() {
      var e = i(this.type);
      return U[e] || (U[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, r, n, o, E, f, I, M) {
      return n = f.ref, e = {
        $$typeof: g,
        type: e,
        key: r,
        props: f,
        _owner: E
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: O
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: M
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, r, n, o, E, f, I, M) {
      var s = r.children;
      if (s !== void 0)
        if (o)
          if (re(s)) {
            for (o = 0; o < s.length; o++)
              x(s[o]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(s);
      if (L.call(r, "key")) {
        s = i(e);
        var S = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        o = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", J[s + o] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          s,
          S,
          s
        ), J[s + o] = !0);
      }
      if (s = null, n !== void 0 && (d(n), s = "" + n), R(r) && (d(r.key), s = "" + r.key), "key" in r) {
        n = {};
        for (var $ in r)
          $ !== "key" && (n[$] = r[$]);
      } else n = r;
      return s && b(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        s,
        f,
        E,
        l(),
        n,
        I,
        M
      );
    }
    function x(e) {
      typeof e == "object" && e !== null && e.$$typeof === g && e._store && (e._store.validated = 1);
    }
    var v = ne, g = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), t = Symbol.for("react.profiler"), p = Symbol.for("react.consumer"), T = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), Y = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, re = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var W, U = {}, V = v["react-stack-bottom-frame"].bind(
      v,
      a
    )(), q = D(m(a)), J = {};
    A.Fragment = j, A.jsx = function(e, r, n, o, E) {
      var f = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        n,
        !1,
        o,
        E,
        f ? Error("react-stack-top-frame") : V,
        f ? D(m(e)) : q
      );
    }, A.jsxs = function(e, r, n, o, E) {
      var f = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        n,
        !0,
        o,
        E,
        f ? Error("react-stack-top-frame") : V,
        f ? D(m(e)) : q
      );
    };
  }()), A;
}
var X;
function se() {
  return X || (X = 1, process.env.NODE_ENV === "production" ? C.exports = ae() : C.exports = oe()), C.exports;
}
var c = se();
function le({
  data: i,
  columns: u,
  itemsPerPage: d = 5
}) {
  const [m, l] = P(""), [a, R] = P(null), [b, O] = P("asc"), [h, _] = P(1), x = z(() => i.filter(
    (t) => u.some(
      (p) => String(t[p.accessor]).toLowerCase().includes(m.toLowerCase())
    )
  ), [i, u, m]), v = z(() => a ? [...x].sort((t, p) => {
    const T = String(t[a]), y = String(p[a]);
    return b === "asc" ? T.localeCompare(y) : y.localeCompare(T);
  }) : x, [x, a, b]), g = Math.ceil(v.length / d), w = v.slice(
    (h - 1) * d,
    h * d
  ), j = (t) => {
    a === t ? O((p) => p === "asc" ? "desc" : "asc") : (R(t), O("asc"));
  }, N = (t) => {
    l(t.target.value), _(1);
  };
  return /* @__PURE__ */ c.jsxs("div", { children: [
    /* @__PURE__ */ c.jsx("input", { type: "text", placeholder: "Rechercher...", value: m, onChange: N, style: { marginBottom: "1rem", padding: "0.5rem", width: "100%", maxWidth: "300px" } }),
    /* @__PURE__ */ c.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
      /* @__PURE__ */ c.jsx("thead", { children: /* @__PURE__ */ c.jsx("tr", { children: u.map((t) => /* @__PURE__ */ c.jsxs(
        "th",
        {
          onClick: () => t.sortable && j(t.accessor),
          style: { cursor: t.sortable ? "pointer" : "default", borderBottom: "1px solid #ccc", padding: "0.5rem" },
          children: [
            t.label,
            " ",
            a === t.accessor && (b === "asc" ? "↑" : "↓")
          ]
        },
        String(t.accessor)
      )) }) }),
      /* @__PURE__ */ c.jsxs("tbody", { children: [
        w.map((t, p) => /* @__PURE__ */ c.jsx("tr", { children: u.map((T) => /* @__PURE__ */ c.jsx("td", { style: { padding: "0.5rem", borderBottom: "1px solid #eee" }, children: String(t[T.accessor]) }, String(T.accessor))) }, p)),
        w.length === 0 && /* @__PURE__ */ c.jsx("tr", { children: /* @__PURE__ */ c.jsx("td", { colSpan: u.length, style: { textAlign: "center" }, children: "Aucun résultat." }) })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { style: { marginTop: "1rem", display: "flex", gap: "0.5rem" }, children: [
      /* @__PURE__ */ c.jsx("button", { onClick: () => _((t) => Math.max(t - 1, 1)), disabled: h === 1, children: "Précédent" }),
      /* @__PURE__ */ c.jsxs("span", { children: [
        "Page ",
        h,
        " sur ",
        g
      ] }),
      /* @__PURE__ */ c.jsx("button", { onClick: () => _((t) => Math.min(t + 1, g)), disabled: h === g, children: "Suivant" })
    ] })
  ] });
}
export {
  le as DataTable
};
