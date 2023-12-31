!(function t(e, n, r) {
    function o(s, u) {
        if (!n[s]) {
            if (!e[s]) {
                var l = "function" == typeof require && require;
                if (!u && l) return l(s, !0);
                if (i) return i(s, !0);
                var a = new Error("Cannot find module '" + s + "'");
                throw ((a.code = "MODULE_NOT_FOUND"), a);
            }
            var p = (n[s] = { exports: {} });
            e[s][0].call(
                p.exports,
                function (t) {
                    var n = e[s][1][t];
                    return o(n ? n : t);
                },
                p,
                p.exports,
                t,
                e,
                n,
                r
            );
        }
        return n[s].exports;
    }
    for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);
    return o;
})(
    {
        1: [
            function (t, e, n) {
                var r,
                    o =
                        (this && this.__extends) ||
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                            t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n());
                        };
                !(function (t) {
                    function e(t) {
                        return [].slice.call(t);
                    }
                    function n(t, e, n) {
                        if (window.CustomEvent) var r = new CustomEvent(e, { detail: n });
                        else {
                            var r = document.createEvent("CustomEvent");
                            r.initCustomEvent(e, !0, !0, n);
                        }
                        return t.dispatchEvent(r);
                    }
                    var r = { rulerClassName: "bricklayer-column-sizer", columnClassName: "bricklayer-column" },
                        i = (function () {
                            function t(t) {
                                (this.element = document.createElement("div")), (this.element.className = t);
                            }
                            return (
                                (t.prototype.destroy = function () {
                                    this.element.parentNode.removeChild(this.element);
                                }),
                                t
                            );
                        })(),
                        s = (function (t) {
                            function e() {
                                t.apply(this, arguments);
                            }
                            return (
                                o(e, t),
                                (e.prototype.getWidth = function () {
                                    this.element.setAttribute("style", "\n        display: block;\n        visibility: hidden !important;\n        top: -1000px !important;\n      ");
                                    var t = this.element.offsetWidth;
                                    return this.element.removeAttribute("style"), t;
                                }),
                                e
                            );
                        })(i),
                        u = (function (t) {
                            function e() {
                                t.apply(this, arguments);
                            }
                            return o(e, t), e;
                        })(i),
                        l = (function () {
                            function t(t, e) {
                                void 0 === e && (e = r), (this.element = t), (this.options = e), this.build(), this.buildResponsive();
                            }
                            return (
                                (t.prototype.append = function (t) {
                                    var n = this;
                                    if (Array.isArray(t))
                                        return void t.forEach(function (t) {
                                            return n.append(t);
                                        });
                                    var r = this.findMinHeightColumn();
                                    (this.elements = e(this.elements).concat([t])), this.applyPosition("append", r, t);
                                }),
                                (t.prototype.prepend = function (t) {
                                    var n = this;
                                    if (Array.isArray(t))
                                        return void t.forEach(function (t) {
                                            return n.prepend(t);
                                        });
                                    var r = this.findMinHeightColumn();
                                    (this.elements = [t].concat(e(this.elements))), this.applyPosition("prepend", r, t);
                                }),
                                (t.prototype.on = function (t, e) {
                                    return this.element.addEventListener("bricklayer." + t, e), this;
                                }),
                                (t.prototype.redraw = function () {
                                    var t = this.columnCount;
                                    this.checkColumnCount(!1), this.reorderElements(t), n(this.element, "bricklayer.redraw", { columnCount: t });
                                }),
                                (t.prototype.destroy = function () {
                                    var t = this;
                                    this.ruler.destroy(),
                                        e(this.elements).forEach(function (e) {
                                            return t.element.appendChild(e);
                                        }),
                                        e(this.getColumns()).forEach(function (t) {
                                            return t.parentNode.removeChild(t);
                                        }),
                                        n(this.element, "bricklayer.destroy", {});
                                }),
                                (t.prototype.build = function () {
                                    (this.ruler = new s(this.options.rulerClassName)), (this.elements = this.getElementsInOrder()), this.element.insertBefore(this.ruler.element, this.element.firstChild);
                                }),
                                (t.prototype.buildResponsive = function () {
                                    var t = this;
                                    window.addEventListener("resize", function (e) {
                                        return t.checkColumnCount();
                                    }),
                                        this.checkColumnCount(),
                                        this.on("breakpoint", function (e) {
                                            return t.reorderElements(e.detail.columnCount);
                                        }),
                                        this.columnCount >= 1 && this.reorderElements(this.columnCount);
                                }),
                                (t.prototype.getColumns = function () {
                                    return this.element.querySelectorAll(":scope > ." + this.options.columnClassName);
                                }),
                                (t.prototype.findMinHeightColumn = function () {
                                    var t = e(this.getColumns()),
                                        n = t.map(function (t) {
                                            return t.offsetHeight;
                                        }),
                                        r = Math.min.apply(null, n);
                                    return t[n.indexOf(r)];
                                }),
                                (t.prototype.getElementsInOrder = function () {
                                    return this.element.querySelectorAll(":scope > *:not(." + this.options.columnClassName + "):not(." + this.options.rulerClassName + ")");
                                }),
                                (t.prototype.checkColumnCount = function (t) {
                                    void 0 === t && (t = !0);
                                    var e = this.getColumnCount();
                                    this.columnCount !== e && (t && n(this.element, "bricklayer.breakpoint", { columnCount: e }), (this.columnCount = e));
                                }),
                                (t.prototype.reorderElements = function (t) {
                                    var n = this;
                                    void 0 === t && (t = 1), (t == 1 / 0 || 1 > t) && (t = 1);
                                    for (
                                        var r = e(this.elements).map(function (t) {
                                                var e = t.parentNode ? t.parentNode.removeChild(t) : t;
                                                return e;
                                            }),
                                            o = this.getColumns(),
                                            i = 0;
                                        i < o.length;
                                        i++
                                    )
                                        o[i].parentNode.removeChild(o[i]);
                                    for (var i = 0; t > i; i++) {
                                        var s = new u(this.options.columnClassName).element;
                                        this.element.appendChild(s);
                                    }
                                    r.forEach(function (t) {
                                        var e = n.findMinHeightColumn();
                                        e.appendChild(t);
                                    });
                                }),
                                (t.prototype.getColumnCount = function () {
                                    var t = this.element.offsetWidth,
                                        e = this.ruler.getWidth();
                                    return Math.round(t / e);
                                }),
                                (t.prototype.applyPosition = function (t, e, r) {
                                    var o = this,
                                        i = function (i) {
                                            var s = i + t.charAt(0).toUpperCase() + t.substr(1);
                                            n(o.element, "bricklayer." + s, { item: r, column: e });
                                        };
                                    switch ((i("before"), t)) {
                                        case "append":
                                            e.appendChild(r);
                                            break;
                                        case "prepend":
                                            e.insertBefore(r, e.firstChild);
                                    }
                                    i("after");
                                }),
                                t
                            );
                        })();
                    t.Container = l;
                })(r || (r = {})),
                    (function (t, n) {
                        "function" == typeof define && define.amd
                            ? define(function () {
                                  return n();
                              })
                            : "undefined" != typeof window && t === window
                            ? (t.Bricklayer = n())
                            : "object" == typeof e && e.exports && (e.exports = n());
                    })("undefined" != typeof window ? window : this, function () {
                        return r.Container;
                    });
            },
            {},
        ],
    },
    {},
    [1]
);
var bricklayer_items = document.querySelector(".bricklayer");
if (bricklayer_items !== null) {
    var bricklayer = new Bricklayer(bricklayer_items);
}
