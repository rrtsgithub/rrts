define(
  "@wsb/guac-widget-shared/c/_commonjsHelpers-67085353.js",
  ["exports"],
  function (e) {
    "use strict";
    var n =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
    (e.a = n),
      (e.b = function (e) {
        if (e.__esModule) return e;
        var n = Object.defineProperty({}, "__esModule", { value: !0 });
        return (
          Object.keys(e).forEach(function (t) {
            var r = Object.getOwnPropertyDescriptor(e, t);
            Object.defineProperty(
              n,
              t,
              r.get
                ? r
                : {
                    enumerable: !0,
                    get: function () {
                      return e[t];
                    },
                  }
            );
          }),
          n
        );
      }),
      (e.c = function (e, n, t) {
        return (
          e(
            (t = {
              path: n,
              exports: {},
              require: function (e, n) {
                return (function () {
                  throw new Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  );
                })(null == n && t.path);
              },
            }),
            t.exports
          ),
          t.exports
        );
      }),
      (e.g = function (e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      });
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=_commonjsHelpers-67085353.js.map
