!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : ((t = t || self).Shuffle = e());
})(this, function () {
    "use strict";
    function t(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function e(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
    }
    function i(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t;
    }
    function n(t) {
        return (n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
    }
    function s(t, e) {
        return (s =
            Object.setPrototypeOf ||
            function (t, e) {
                return (t.__proto__ = e), t;
            })(t, e);
    }
    function o() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
            return !1;
        }
    }
    function r(t, e) {
        return !e || ("object" != typeof e && "function" != typeof e)
            ? (function (t) {
                  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return t;
              })(t)
            : e;
    }
    function l() {}
    l.prototype = {
        on: function (t, e, i) {
            var n = this.e || (this.e = {});
            return (n[t] || (n[t] = [])).push({ fn: e, ctx: i }), this;
        },
        once: function (t, e, i) {
            var n = this;
            function s() {
                n.off(t, s), e.apply(i, arguments);
            }
            return (s._ = e), this.on(t, s, i);
        },
        emit: function (t) {
            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, s = i.length; n < s; n++) i[n].fn.apply(i[n].ctx, e);
            return this;
        },
        off: function (t, e) {
            var i = this.e || (this.e = {}),
                n = i[t],
                s = [];
            if (n && e) for (var o = 0, r = n.length; o < r; o++) n[o].fn !== e && n[o].fn._ !== e && s.push(n[o]);
            return s.length ? (i[t] = s) : delete i[t], this;
        },
    };
    var a = l,
        u = l;
    a.TinyEmitter = u;
    var h = "undefined" != typeof Element ? Element.prototype : {},
        f = h.matches || h.matchesSelector || h.webkitMatchesSelector || h.mozMatchesSelector || h.msMatchesSelector || h.oMatchesSelector,
        c = function (t, e) {
            if (!t || 1 !== t.nodeType) return !1;
            if (f) return f.call(t, e);
            for (var i = t.parentNode.querySelectorAll(e), n = 0; n < i.length; n++) if (i[n] == t) return !0;
            return !1;
        };
    var d = function (t, e) {
        var i,
            n,
            s,
            o,
            r = 0;
        return function () {
            (i = this), (n = arguments);
            var t = new Date() - r;
            return o || (t >= e ? l() : (o = setTimeout(l, e - t))), s;
        };
        function l() {
            (o = 0), (r = +new Date()), (s = t.apply(i, n)), (i = null), (n = null);
        }
    };
    function p() {}
    function m(t) {
        return parseFloat(t) || 0;
    }
    var v = (function () {
            function e(i, n) {
                t(this, e), (this.x = m(i)), (this.y = m(n));
            }
            return (
                i(e, null, [
                    {
                        key: "equals",
                        value: function (t, e) {
                            return t.x === e.x && t.y === e.y;
                        },
                    },
                ]),
                e
            );
        })(),
        y = (function () {
            function e(i, n, s, o, r) {
                t(this, e), (this.id = r), (this.left = i), (this.top = n), (this.width = s), (this.height = o);
            }
            return (
                i(e, null, [
                    {
                        key: "intersects",
                        value: function (t, e) {
                            return t.left < e.left + e.width && e.left < t.left + t.width && t.top < e.top + e.height && e.top < t.top + t.height;
                        },
                    },
                ]),
                e
            );
        })(),
        g = { BASE: "shuffle", SHUFFLE_ITEM: "shuffle-item", VISIBLE: "shuffle-item--visible", HIDDEN: "shuffle-item--hidden" },
        _ = 0,
        E = (function () {
            function e(i) {
                t(this, e), (_ += 1), (this.id = _), (this.element = i), (this.isVisible = !0), (this.isHidden = !1);
            }
            return (
                i(e, [
                    {
                        key: "show",
                        value: function () {
                            (this.isVisible = !0), this.element.classList.remove(g.HIDDEN), this.element.classList.add(g.VISIBLE), this.element.removeAttribute("aria-hidden");
                        },
                    },
                    {
                        key: "hide",
                        value: function () {
                            (this.isVisible = !1), this.element.classList.remove(g.VISIBLE), this.element.classList.add(g.HIDDEN), this.element.setAttribute("aria-hidden", !0);
                        },
                    },
                    {
                        key: "init",
                        value: function () {
                            this.addClasses([g.SHUFFLE_ITEM, g.VISIBLE]), this.applyCss(e.Css.INITIAL), (this.scale = e.Scale.VISIBLE), (this.point = new v());
                        },
                    },
                    {
                        key: "addClasses",
                        value: function (t) {
                            var e = this;
                            t.forEach(function (t) {
                                e.element.classList.add(t);
                            });
                        },
                    },
                    {
                        key: "removeClasses",
                        value: function (t) {
                            var e = this;
                            t.forEach(function (t) {
                                e.element.classList.remove(t);
                            });
                        },
                    },
                    {
                        key: "applyCss",
                        value: function (t) {
                            var e = this;
                            Object.keys(t).forEach(function (i) {
                                e.element.style[i] = t[i];
                            });
                        },
                    },
                    {
                        key: "dispose",
                        value: function () {
                            this.removeClasses([g.HIDDEN, g.VISIBLE, g.SHUFFLE_ITEM]), this.element.removeAttribute("style"), (this.element = null);
                        },
                    },
                ]),
                e
            );
        })();
    (E.Css = {
        INITIAL: { position: "absolute", top: 0, left: 0, visibility: "visible", willChange: "transform" },
        VISIBLE: { before: { opacity: 1, visibility: "visible" }, after: { transitionDelay: "" } },
        HIDDEN: { before: { opacity: 0 }, after: { visibility: "hidden", transitionDelay: "" } },
    }),
        (E.Scale = { VISIBLE: 1, HIDDEN: 0.001 });
    var I = null,
        b = function () {
            if (null !== I) return I;
            var t = document.body || document.documentElement,
                e = document.createElement("div");
            return (e.style.cssText = "width:10px;padding:2px;box-sizing:border-box;"), t.appendChild(e), (I = "10px" === window.getComputedStyle(e, null).width), t.removeChild(e), I;
        };
    function S(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.getComputedStyle(t, null),
            n = m(i[e]);
        return (
            b() || "width" !== e
                ? b() || "height" !== e || (n += m(i.paddingTop) + m(i.paddingBottom) + m(i.borderTopWidth) + m(i.borderBottomWidth))
                : (n += m(i.paddingLeft) + m(i.paddingRight) + m(i.borderLeftWidth) + m(i.borderRightWidth)),
            n
        );
    }
    var T = { reverse: !1, by: null, compare: null, randomize: !1, key: "element" };
    function k(t, e) {
        var i = Object.assign({}, T, e),
            n = Array.from(t),
            s = !1;
        return t.length
            ? i.randomize
                ? (function (t) {
                      for (var e = t.length; e; ) {
                          e -= 1;
                          var i = Math.floor(Math.random() * (e + 1)),
                              n = t[i];
                          (t[i] = t[e]), (t[e] = n);
                      }
                      return t;
                  })(t)
                : ("function" == typeof i.by
                      ? t.sort(function (t, e) {
                            if (s) return 0;
                            var n = i.by(t[i.key]),
                                o = i.by(e[i.key]);
                            return void 0 === n && void 0 === o ? ((s = !0), 0) : n < o || "sortFirst" === n || "sortLast" === o ? -1 : n > o || "sortLast" === n || "sortFirst" === o ? 1 : 0;
                        })
                      : "function" == typeof i.compare && t.sort(i.compare),
                  s ? n : (i.reverse && t.reverse(), t))
            : [];
    }
    var w = {},
        C = 0;
    function L(t) {
        return !!w[t] && (w[t].element.removeEventListener("transitionend", w[t].listener), (w[t] = null), !0);
    }
    function D(t, e) {
        var i = "transitionend" + (C += 1),
            n = function (t) {
                t.currentTarget === t.target && (L(i), e(t));
            };
        return t.addEventListener("transitionend", n), (w[i] = { element: t, listener: n }), i;
    }
    function z(t) {
        return Math.max.apply(Math, t);
    }
    function M(t, e, i, n) {
        var s = t / e;
        return Math.abs(Math.round(s) - s) < n && (s = Math.round(s)), Math.min(Math.ceil(s), i);
    }
    function A(t, e, i) {
        if (1 === e) return t;
        for (var n = [], s = 0; s <= i - e; s++) n.push(z(t.slice(s, s + e)));
        return n;
    }
    function F(t, e) {
        for (var i, n = ((i = t), Math.min.apply(Math, i)), s = 0, o = t.length; s < o; s++) if (t[s] >= n - e && t[s] <= n + e) return s;
        return 0;
    }
    function x(t, e) {
        var i = {};
        t.forEach(function (t) {
            i[t.top] ? i[t.top].push(t) : (i[t.top] = [t]);
        });
        var n = [],
            s = [],
            o = [];
        return (
            Object.keys(i).forEach(function (t) {
                var r = i[t];
                s.push(r);
                var l,
                    a = r[r.length - 1],
                    u = a.left + a.width,
                    h = Math.round((e - u) / 2),
                    f = r,
                    c = !1;
                if (h > 0) {
                    var d = [];
                    (c = r.every(function (t) {
                        var e = new y(t.left + h, t.top, t.width, t.height, t.id),
                            i = !n.some(function (t) {
                                return y.intersects(e, t);
                            });
                        return d.push(e), i;
                    })) && (f = d);
                }
                if (
                    !c &&
                    r.some(function (t) {
                        return n.some(function (e) {
                            var i = y.intersects(t, e);
                            return i && (l = e), i;
                        });
                    })
                ) {
                    var p = o.findIndex(function (t) {
                        return t.includes(l);
                    });
                    o.splice(p, 1, s[p]);
                }
                (n = n.concat(f)), o.push(f);
            }),
            [].concat
                .apply([], o)
                .sort(function (t, e) {
                    return t.id - e.id;
                })
                .map(function (t) {
                    return new v(t.left, t.top);
                })
        );
    }
    function O(t) {
        return Array.from(new Set(t));
    }
    var N = 0,
        H = (function (e) {
            !(function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && s(t, e);
            })(u, e);
            var l,
                a =
                    ((l = u),
                    function () {
                        var t,
                            e = n(l);
                        if (o()) {
                            var i = n(this).constructor;
                            t = Reflect.construct(e, arguments, i);
                        } else t = e.apply(this, arguments);
                        return r(this, t);
                    });
            function u(e) {
                var i,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t(this, u),
                    ((i = a.call(this)).options = Object.assign({}, u.options, n)),
                    i.options.delimeter && (i.options.delimiter = i.options.delimeter),
                    (i.lastSort = {}),
                    (i.group = u.ALL_ITEMS),
                    (i.lastFilter = u.ALL_ITEMS),
                    (i.isEnabled = !0),
                    (i.isDestroyed = !1),
                    (i.isInitialized = !1),
                    (i._transitions = []),
                    (i.isTransitioning = !1),
                    (i._queue = []);
                var s = i._getElementOption(e);
                if (!s) throw new TypeError("Shuffle needs to be initialized with an element.");
                return (i.element = s), (i.id = "shuffle_" + N), (N += 1), i._init(), (i.isInitialized = !0), i;
            }
            return (
                i(
                    u,
                    [
                        {
                            key: "_init",
                            value: function () {
                                if (
                                    ((this.items = this._getItems()),
                                    (this.options.sizer = this._getElementOption(this.options.sizer)),
                                    this.element.classList.add(u.Classes.BASE),
                                    this._initItems(this.items),
                                    (this._onResize = this._getResizeFunction()),
                                    window.addEventListener("resize", this._onResize),
                                    "complete" !== document.readyState)
                                ) {
                                    var t = this.layout.bind(this);
                                    window.addEventListener("load", function e() {
                                        window.removeEventListener("load", e), t();
                                    });
                                }
                                var e = window.getComputedStyle(this.element, null),
                                    i = u.getSize(this.element).width;
                                this._validateStyles(e),
                                    this._setColumns(i),
                                    this.filter(this.options.group, this.options.initialSort),
                                    this.element.offsetWidth,
                                    this.setItemTransitions(this.items),
                                    (this.element.style.transition = "height ".concat(this.options.speed, "ms ").concat(this.options.easing));
                            },
                        },
                        {
                            key: "_getResizeFunction",
                            value: function () {
                                var t = this._handleResize.bind(this);
                                return this.options.throttle ? this.options.throttle(t, this.options.throttleTime) : t;
                            },
                        },
                        {
                            key: "_getElementOption",
                            value: function (t) {
                                return "string" == typeof t ? this.element.querySelector(t) : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null;
                            },
                        },
                        {
                            key: "_validateStyles",
                            value: function (t) {
                                "static" === t.position && (this.element.style.position = "relative"), "hidden" !== t.overflow && (this.element.style.overflow = "hidden");
                            },
                        },
                        {
                            key: "_filter",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastFilter,
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items,
                                    i = this._getFilteredSets(t, e);
                                return this._toggleFilterClasses(i), (this.lastFilter = t), "string" == typeof t && (this.group = t), i;
                            },
                        },
                        {
                            key: "_getFilteredSets",
                            value: function (t, e) {
                                var i = this,
                                    n = [],
                                    s = [];
                                return (
                                    t === u.ALL_ITEMS
                                        ? (n = e)
                                        : e.forEach(function (e) {
                                              i._doesPassFilter(t, e.element) ? n.push(e) : s.push(e);
                                          }),
                                    { visible: n, hidden: s }
                                );
                            },
                        },
                        {
                            key: "_doesPassFilter",
                            value: function (t, e) {
                                if ("function" == typeof t) return t.call(e, e, this);
                                var i = e.getAttribute("data-" + u.FILTER_ATTRIBUTE_KEY),
                                    n = this.options.delimiter ? i.split(this.options.delimiter) : JSON.parse(i);
                                function s(t) {
                                    return n.includes(t);
                                }
                                return Array.isArray(t) ? (this.options.filterMode === u.FilterMode.ANY ? t.some(s) : t.every(s)) : n.includes(t);
                            },
                        },
                        {
                            key: "_toggleFilterClasses",
                            value: function (t) {
                                var e = t.visible,
                                    i = t.hidden;
                                e.forEach(function (t) {
                                    t.show();
                                }),
                                    i.forEach(function (t) {
                                        t.hide();
                                    });
                            },
                        },
                        {
                            key: "_initItems",
                            value: function (t) {
                                t.forEach(function (t) {
                                    t.init();
                                });
                            },
                        },
                        {
                            key: "_disposeItems",
                            value: function (t) {
                                t.forEach(function (t) {
                                    t.dispose();
                                });
                            },
                        },
                        {
                            key: "_updateItemCount",
                            value: function () {
                                this.visibleItems = this._getFilteredItems().length;
                            },
                        },
                        {
                            key: "setItemTransitions",
                            value: function (t) {
                                var e = this.options,
                                    i = e.speed,
                                    n = e.easing,
                                    s = this.options.useTransforms ? ["transform"] : ["top", "left"],
                                    o = Object.keys(E.Css.HIDDEN.before).map(function (t) {
                                        return t.replace(/([A-Z])/g, function (t, e) {
                                            return "-".concat(e.toLowerCase());
                                        });
                                    }),
                                    r = s.concat(o).join();
                                t.forEach(function (t) {
                                    (t.element.style.transitionDuration = i + "ms"), (t.element.style.transitionTimingFunction = n), (t.element.style.transitionProperty = r);
                                });
                            },
                        },
                        {
                            key: "_getItems",
                            value: function () {
                                var t = this;
                                return Array.from(this.element.children)
                                    .filter(function (e) {
                                        return c(e, t.options.itemSelector);
                                    })
                                    .map(function (t) {
                                        return new E(t);
                                    });
                            },
                        },
                        {
                            key: "_mergeNewItems",
                            value: function (t) {
                                var e = Array.from(this.element.children);
                                return k(this.items.concat(t), {
                                    by: function (t) {
                                        return e.indexOf(t);
                                    },
                                });
                            },
                        },
                        {
                            key: "_getFilteredItems",
                            value: function () {
                                return this.items.filter(function (t) {
                                    return t.isVisible;
                                });
                            },
                        },
                        {
                            key: "_getConcealedItems",
                            value: function () {
                                return this.items.filter(function (t) {
                                    return !t.isVisible;
                                });
                            },
                        },
                        {
                            key: "_getColumnSize",
                            value: function (t, e) {
                                var i;
                                return (
                                    0 ===
                                        (i =
                                            "function" == typeof this.options.columnWidth
                                                ? this.options.columnWidth(t)
                                                : this.options.sizer
                                                ? u.getSize(this.options.sizer).width
                                                : this.options.columnWidth
                                                ? this.options.columnWidth
                                                : this.items.length > 0
                                                ? u.getSize(this.items[0].element, !0).width
                                                : t) && (i = t),
                                    i + e
                                );
                            },
                        },
                        {
                            key: "_getGutterSize",
                            value: function (t) {
                                return "function" == typeof this.options.gutterWidth ? this.options.gutterWidth(t) : this.options.sizer ? S(this.options.sizer, "marginLeft") : this.options.gutterWidth;
                            },
                        },
                        {
                            key: "_setColumns",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.getSize(this.element).width,
                                    e = this._getGutterSize(t),
                                    i = this._getColumnSize(t, e),
                                    n = (t + e) / i;
                                Math.abs(Math.round(n) - n) < this.options.columnThreshold && (n = Math.round(n)), (this.cols = Math.max(Math.floor(n || 0), 1)), (this.containerWidth = t), (this.colWidth = i);
                            },
                        },
                        {
                            key: "_setContainerSize",
                            value: function () {
                                this.element.style.height = this._getContainerSize() + "px";
                            },
                        },
                        {
                            key: "_getContainerSize",
                            value: function () {
                                return z(this.positions);
                            },
                        },
                        {
                            key: "_getStaggerAmount",
                            value: function (t) {
                                return Math.min(t * this.options.staggerAmount, this.options.staggerAmountMax);
                            },
                        },
                        {
                            key: "_dispatch",
                            value: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                this.isDestroyed || ((e.shuffle = this), this.emit(t, e));
                            },
                        },
                        {
                            key: "_resetCols",
                            value: function () {
                                var t = this.cols;
                                for (this.positions = []; t; ) (t -= 1), this.positions.push(0);
                            },
                        },
                        {
                            key: "_layout",
                            value: function (t) {
                                var e = this,
                                    i = this._getNextPositions(t),
                                    n = 0;
                                t.forEach(function (t, s) {
                                    function o() {
                                        t.applyCss(E.Css.VISIBLE.after);
                                    }
                                    if (v.equals(t.point, i[s]) && !t.isHidden) return t.applyCss(E.Css.VISIBLE.before), void o();
                                    (t.point = i[s]), (t.scale = E.Scale.VISIBLE), (t.isHidden = !1);
                                    var r = e.getStylesForTransition(t, E.Css.VISIBLE.before);
                                    (r.transitionDelay = e._getStaggerAmount(n) + "ms"), e._queue.push({ item: t, styles: r, callback: o }), (n += 1);
                                });
                            },
                        },
                        {
                            key: "_getNextPositions",
                            value: function (t) {
                                var e = this;
                                if (this.options.isCentered) {
                                    var i = t.map(function (t, i) {
                                        var n = u.getSize(t.element, !0),
                                            s = e._getItemPosition(n);
                                        return new y(s.x, s.y, n.width, n.height, i);
                                    });
                                    return this.getTransformedPositions(i, this.containerWidth);
                                }
                                return t.map(function (t) {
                                    return e._getItemPosition(u.getSize(t.element, !0));
                                });
                            },
                        },
                        {
                            key: "_getItemPosition",
                            value: function (t) {
                                return (function (t) {
                                    for (
                                        var e = t.itemSize,
                                            i = t.positions,
                                            n = t.gridSize,
                                            s = t.total,
                                            o = t.threshold,
                                            r = t.buffer,
                                            l = M(e.width, n, s, o),
                                            a = A(i, l, s),
                                            u = F(a, r),
                                            h = new v(n * u, a[u]),
                                            f = a[u] + e.height,
                                            c = 0;
                                        c < l;
                                        c++
                                    )
                                        i[u + c] = f;
                                    return h;
                                })({ itemSize: t, positions: this.positions, gridSize: this.colWidth, total: this.cols, threshold: this.options.columnThreshold, buffer: this.options.buffer });
                            },
                        },
                        {
                            key: "getTransformedPositions",
                            value: function (t, e) {
                                return x(t, e);
                            },
                        },
                        {
                            key: "_shrink",
                            value: function () {
                                var t = this,
                                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getConcealedItems(),
                                    i = 0;
                                e.forEach(function (e) {
                                    function n() {
                                        e.applyCss(E.Css.HIDDEN.after);
                                    }
                                    if (e.isHidden) return e.applyCss(E.Css.HIDDEN.before), void n();
                                    (e.scale = E.Scale.HIDDEN), (e.isHidden = !0);
                                    var s = t.getStylesForTransition(e, E.Css.HIDDEN.before);
                                    (s.transitionDelay = t._getStaggerAmount(i) + "ms"), t._queue.push({ item: e, styles: s, callback: n }), (i += 1);
                                });
                            },
                        },
                        {
                            key: "_handleResize",
                            value: function () {
                                this.isEnabled && !this.isDestroyed && this.update();
                            },
                        },
                        {
                            key: "getStylesForTransition",
                            value: function (t, e) {
                                var i = Object.assign({}, e);
                                if (this.options.useTransforms) {
                                    var n = this.options.roundTransforms ? Math.round(t.point.x) : t.point.x,
                                        s = this.options.roundTransforms ? Math.round(t.point.y) : t.point.y;
                                    i.transform = "translate(".concat(n, "px, ").concat(s, "px) scale(").concat(t.scale, ")");
                                } else (i.left = t.point.x + "px"), (i.top = t.point.y + "px");
                                return i;
                            },
                        },
                        {
                            key: "_whenTransitionDone",
                            value: function (t, e, i) {
                                var n = D(t, function (t) {
                                    e(), i(null, t);
                                });
                                this._transitions.push(n);
                            },
                        },
                        {
                            key: "_getTransitionFunction",
                            value: function (t) {
                                var e = this;
                                return function (i) {
                                    t.item.applyCss(t.styles), e._whenTransitionDone(t.item.element, t.callback, i);
                                };
                            },
                        },
                        {
                            key: "_processQueue",
                            value: function () {
                                this.isTransitioning && this._cancelMovement();
                                var t = this.options.speed > 0,
                                    e = this._queue.length > 0;
                                e && t && this.isInitialized ? this._startTransitions(this._queue) : e ? (this._styleImmediately(this._queue), this._dispatch(u.EventType.LAYOUT)) : this._dispatch(u.EventType.LAYOUT),
                                    (this._queue.length = 0);
                            },
                        },
                        {
                            key: "_startTransitions",
                            value: function (t) {
                                var e = this;
                                (this.isTransitioning = !0),
                                    (function (t, e, i) {
                                        i || ("function" == typeof e ? ((i = e), (e = null)) : (i = p));
                                        var n = t && t.length;
                                        if (!n) return i(null, []);
                                        var s = !1,
                                            o = new Array(n);
                                        function r(t) {
                                            return function (e, r) {
                                                if (!s) {
                                                    if (e) return i(e, o), void (s = !0);
                                                    (o[t] = r), --n || i(null, o);
                                                }
                                            };
                                        }
                                        t.forEach(
                                            e
                                                ? function (t, i) {
                                                      t.call(e, r(i));
                                                  }
                                                : function (t, e) {
                                                      t(r(e));
                                                  }
                                        );
                                    })(
                                        t.map(function (t) {
                                            return e._getTransitionFunction(t);
                                        }),
                                        this._movementFinished.bind(this)
                                    );
                            },
                        },
                        {
                            key: "_cancelMovement",
                            value: function () {
                                this._transitions.forEach(L), (this._transitions.length = 0), (this.isTransitioning = !1);
                            },
                        },
                        {
                            key: "_styleImmediately",
                            value: function (t) {
                                if (t.length) {
                                    var e = t.map(function (t) {
                                        return t.item.element;
                                    });
                                    u._skipTransitions(e, function () {
                                        t.forEach(function (t) {
                                            t.item.applyCss(t.styles), t.callback();
                                        });
                                    });
                                }
                            },
                        },
                        {
                            key: "_movementFinished",
                            value: function () {
                                (this._transitions.length = 0), (this.isTransitioning = !1), this._dispatch(u.EventType.LAYOUT);
                            },
                        },
                        {
                            key: "filter",
                            value: function (t, e) {
                                this.isEnabled && ((!t || (t && 0 === t.length)) && (t = u.ALL_ITEMS), this._filter(t), this._shrink(), this._updateItemCount(), this.sort(e));
                            },
                        },
                        {
                            key: "sort",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastSort;
                                if (this.isEnabled) {
                                    this._resetCols();
                                    var e = k(this._getFilteredItems(), t);
                                    this._layout(e), this._processQueue(), this._setContainerSize(), (this.lastSort = t);
                                }
                            },
                        },
                        {
                            key: "update",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                this.isEnabled && (t || this._setColumns(), this.sort());
                            },
                        },
                        {
                            key: "layout",
                            value: function () {
                                this.update(!0);
                            },
                        },
                        {
                            key: "add",
                            value: function (t) {
                                var e = this,
                                    i = O(t).map(function (t) {
                                        return new E(t);
                                    });
                                this._initItems(i), this._resetCols();
                                var n = k(this._mergeNewItems(i), this.lastSort),
                                    s = this._filter(this.lastFilter, n),
                                    o = function (t) {
                                        return i.includes(t);
                                    },
                                    r = function (t) {
                                        (t.scale = E.Scale.HIDDEN), (t.isHidden = !0), t.applyCss(E.Css.HIDDEN.before), t.applyCss(E.Css.HIDDEN.after);
                                    },
                                    l = this._getNextPositions(s.visible);
                                s.visible.forEach(function (t, i) {
                                    o(t) && ((t.point = l[i]), r(t), t.applyCss(e.getStylesForTransition(t, {})));
                                }),
                                    s.hidden.forEach(function (t) {
                                        o(t) && r(t);
                                    }),
                                    this.element.offsetWidth,
                                    this.setItemTransitions(i),
                                    (this.items = this._mergeNewItems(i)),
                                    this.filter(this.lastFilter);
                            },
                        },
                        {
                            key: "disable",
                            value: function () {
                                this.isEnabled = !1;
                            },
                        },
                        {
                            key: "enable",
                            value: function () {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                (this.isEnabled = !0), t && this.update();
                            },
                        },
                        {
                            key: "remove",
                            value: function (t) {
                                var e = this;
                                if (t.length) {
                                    var i = O(t),
                                        n = i
                                            .map(function (t) {
                                                return e.getItemByElement(t);
                                            })
                                            .filter(function (t) {
                                                return !!t;
                                            });
                                    this._toggleFilterClasses({ visible: [], hidden: n }),
                                        this._shrink(n),
                                        this.sort(),
                                        (this.items = this.items.filter(function (t) {
                                            return !n.includes(t);
                                        })),
                                        this._updateItemCount(),
                                        this.once(u.EventType.LAYOUT, function () {
                                            e._disposeItems(n),
                                                i.forEach(function (t) {
                                                    t.parentNode.removeChild(t);
                                                }),
                                                e._dispatch(u.EventType.REMOVED, { collection: i });
                                        });
                                }
                            },
                        },
                        {
                            key: "getItemByElement",
                            value: function (t) {
                                return this.items.find(function (e) {
                                    return e.element === t;
                                });
                            },
                        },
                        {
                            key: "resetItems",
                            value: function () {
                                var t = this;
                                this._disposeItems(this.items),
                                    (this.isInitialized = !1),
                                    (this.items = this._getItems()),
                                    this._initItems(this.items),
                                    this.once(u.EventType.LAYOUT, function () {
                                        t.setItemTransitions(t.items), (t.isInitialized = !0);
                                    }),
                                    this.filter(this.lastFilter);
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                this._cancelMovement(),
                                    window.removeEventListener("resize", this._onResize),
                                    this.element.classList.remove("shuffle"),
                                    this.element.removeAttribute("style"),
                                    this._disposeItems(this.items),
                                    (this.items.length = 0),
                                    (this._transitions.length = 0),
                                    (this.options.sizer = null),
                                    (this.element = null),
                                    (this.isDestroyed = !0),
                                    (this.isEnabled = !1);
                            },
                        },
                    ],
                    [
                        {
                            key: "getSize",
                            value: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = window.getComputedStyle(t, null),
                                    n = S(t, "width", i),
                                    s = S(t, "height", i);
                                if (e) {
                                    var o = S(t, "marginLeft", i),
                                        r = S(t, "marginRight", i),
                                        l = S(t, "marginTop", i),
                                        a = S(t, "marginBottom", i);
                                    (n += o + r), (s += l + a);
                                }
                                return { width: n, height: s };
                            },
                        },
                        {
                            key: "_skipTransitions",
                            value: function (t, e) {
                                var i = t.map(function (t) {
                                    var e = t.style,
                                        i = e.transitionDuration,
                                        n = e.transitionDelay;
                                    return (e.transitionDuration = "0ms"), (e.transitionDelay = "0ms"), { duration: i, delay: n };
                                });
                                e(),
                                    t[0].offsetWidth,
                                    t.forEach(function (t, e) {
                                        (t.style.transitionDuration = i[e].duration), (t.style.transitionDelay = i[e].delay);
                                    });
                            },
                        },
                    ]
                ),
                u
            );
        })(a);
    return (
        (H.ShuffleItem = E),
        (H.ALL_ITEMS = "all"),
        (H.FILTER_ATTRIBUTE_KEY = "groups"),
        (H.EventType = { LAYOUT: "shuffle:layout", REMOVED: "shuffle:removed" }),
        (H.Classes = g),
        (H.FilterMode = { ANY: "any", ALL: "all" }),
        (H.options = {
            group: H.ALL_ITEMS,
            speed: 250,
            easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
            itemSelector: "*",
            sizer: null,
            gutterWidth: 0,
            columnWidth: 0,
            delimiter: null,
            buffer: 0,
            columnThreshold: 0.01,
            initialSort: null,
            throttle: d,
            throttleTime: 300,
            staggerAmount: 15,
            staggerAmountMax: 150,
            useTransforms: !0,
            filterMode: H.FilterMode.ANY,
            isCentered: !1,
            roundTransforms: !0,
        }),
        (H.Point = v),
        (H.Rect = y),
        (H.__sorter = k),
        (H.__getColumnSpan = M),
        (H.__getAvailablePositions = A),
        (H.__getShortColumn = F),
        (H.__getCenteredPositions = x),
        H
    );
});
