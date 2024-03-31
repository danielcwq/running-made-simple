/*! jQuery UI - v1.10.2 - 2013-04-16
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e, t) {
    function i(t, i) {
        var a, n, r, o = t.nodeName.toLowerCase();
        return "area" === o ? (a = t.parentNode,
        n = a.name,
        t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0],
        !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
    }
    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var a = 0
      , n = /^ui-id-\d+$/;
    e.ui = e.ui || {},
    e.extend(e.ui, {
        version: "1.10.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(),
                        s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(i) {
            if (i !== t)
                return this.css("zIndex", i);
            if (this.length)
                for (var s, a, n = e(this[0]); n.length && n[0] !== document; ) {
                    if (s = n.css("position"),
                    ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10),
                    !isNaN(a) && 0 !== a))
                        return a;
                    n = n.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++a)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                n.test(this.id) && e(this).removeAttr("id")
            })
        }
    }),
    e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, s) {
            return !!e.data(t, s[3])
        }
        ,
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var s = e.attr(t, "tabindex")
              , a = isNaN(s);
            return (a || s >= 0) && i(t, !a)
        }
    }),
    e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, s) {
        function a(t, i, s, a) {
            return e.each(n, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0,
                s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }),
            i
        }
        var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"]
          , r = s.toLowerCase()
          , o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + s] = function(i) {
            return i === t ? o["inner" + s].call(this) : this.each(function() {
                e(this).css(r, a(this, i) + "px")
            })
        }
        ,
        e.fn["outer" + s] = function(t, i) {
            return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function() {
                e(this).css(r, a(this, t, !0, i) + "px")
            })
        }
    }),
    e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
    ),
    e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)),
    e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    e.support.selectstart = "onselectstart"in document.createElement("div"),
    e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }),
    e.extend(e.ui, {
        plugin: {
            add: function(t, i, s) {
                var a, n = e.ui[t].prototype;
                for (a in s)
                    n.plugins[a] = n.plugins[a] || [],
                    n.plugins[a].push([i, s[a]])
            },
            call: function(e, t, i) {
                var s, a = e.plugins[t];
                if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (s = 0; a.length > s; s++)
                        e.options[a[s][0]] && a[s][1].apply(e.element, i)
            }
        },
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow"))
                return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop"
              , a = !1;
            return t[s] > 0 ? !0 : (t[s] = 1,
            a = t[s] > 0,
            t[s] = 0,
            a)
        }
    })
}
)(jQuery);
(function(e, t) {
    var i = 0
      , s = Array.prototype.slice
      , n = e.cleanData;
    e.cleanData = function(t) {
        for (var i, s = 0; null != (i = t[s]); s++)
            try {
                e(i).triggerHandler("remove")
            } catch (a) {}
        n(t)
    }
    ,
    e.widget = function(i, s, n) {
        var a, r, o, h, l = {}, u = i.split(".")[0];
        i = i.split(".")[1],
        a = u + "-" + i,
        n || (n = s,
        s = e.Widget),
        e.expr[":"][a.toLowerCase()] = function(t) {
            return !!e.data(t, a)
        }
        ,
        e[u] = e[u] || {},
        r = e[u][i],
        o = e[u][i] = function(e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i),
            t) : new o(e,i)
        }
        ,
        e.extend(o, r, {
            version: n.version,
            _proto: e.extend({}, n),
            _childConstructors: []
        }),
        h = new s,
        h.options = e.widget.extend({}, h.options),
        e.each(n, function(i, n) {
            return e.isFunction(n) ? (l[i] = function() {
                var e = function() {
                    return s.prototype[i].apply(this, arguments)
                }
                  , t = function(e) {
                    return s.prototype[i].apply(this, e)
                };
                return function() {
                    var i, s = this._super, a = this._superApply;
                    return this._super = e,
                    this._superApply = t,
                    i = n.apply(this, arguments),
                    this._super = s,
                    this._superApply = a,
                    i
                }
            }(),
            t) : (l[i] = n,
            t)
        }),
        o.prototype = e.widget.extend(h, {
            widgetEventPrefix: r ? h.widgetEventPrefix : i
        }, l, {
            constructor: o,
            namespace: u,
            widgetName: i,
            widgetFullName: a
        }),
        r ? (e.each(r._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }),
        delete r._childConstructors) : s._childConstructors.push(o),
        e.widget.bridge(i, o)
    }
    ,
    e.widget.extend = function(i) {
        for (var n, a, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++)
            for (n in r[o])
                a = r[o][n],
                r[o].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
        return i
    }
    ,
    e.widget.bridge = function(i, n) {
        var a = n.prototype.widgetFullName || i;
        e.fn[i] = function(r) {
            var o = "string" == typeof r
              , h = s.call(arguments, 1)
              , l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r,
            o ? this.each(function() {
                var s, n = e.data(this, a);
                return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, h),
                s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s,
                !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
            }) : this.each(function() {
                var t = e.data(this, a);
                t ? t.option(r || {})._init() : e.data(this, a, new n(r,this))
            }),
            l
        }
    }
    ,
    e.Widget = function() {}
    ,
    e.Widget._childConstructors = [],
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, s) {
            s = e(s || this.defaultElement || this)[0],
            this.element = e(s),
            this.uuid = i++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t),
            this.bindings = e(),
            this.hoverable = e(),
            this.focusable = e(),
            s !== this && (e.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(e) {
                    e.target === s && this.destroy()
                }
            }),
            this.document = e(s.style ? s.ownerDocument : s.document || s),
            this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(),
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n, a, r, o = i;
            if (0 === arguments.length)
                return e.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (o = {},
                n = i.split("."),
                i = n.shift(),
                n.length) {
                    for (a = o[i] = e.widget.extend({}, this.options[i]),
                    r = 0; n.length - 1 > r; r++)
                        a[n[r]] = a[n[r]] || {},
                        a = a[n[r]];
                    if (i = n.pop(),
                    s === t)
                        return a[i] === t ? null : a[i];
                    a[i] = s
                } else {
                    if (s === t)
                        return this.options[i] === t ? null : this.options[i];
                    o[i] = s
                }
            return this._setOptions(o),
            this
        },
        _setOptions: function(e) {
            var t;
            for (t in e)
                this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t,
            "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus")),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(i, s, n) {
            var a, r = this;
            "boolean" != typeof i && (n = s,
            s = i,
            i = !1),
            n ? (s = a = e(s),
            this.bindings = this.bindings.add(s)) : (n = s,
            s = this.element,
            a = this.widget()),
            e.each(n, function(n, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
                }
                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/)
                  , u = l[1] + r.eventNamespace
                  , c = l[2];
                c ? a.delegate(c, u, h) : s.bind(u, h)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, s) {
            var n, a, r = this.options[t];
            if (s = s || {},
            i = e.Event(i),
            i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            i.target = this.element[0],
            a = i.originalEvent)
                for (n in a)
                    n in i || (i[n] = a[n]);
            return this.element.trigger(i, s),
            !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    },
    e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var r, o = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {},
            "number" == typeof n && (n = {
                duration: n
            }),
            r = !e.isEmptyObject(n),
            n.complete = a,
            n.delay && s.delay(n.delay),
            r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function(i) {
                e(this)[t](),
                a && a.call(s[0]),
                i()
            })
        }
    })
}
)(jQuery);
(function(e) {
    var t = !1;
    e(document).mouseup(function() {
        t = !1
    }),
    e.widget("ui.mouse", {
        version: "1.10.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1) : undefined
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i),
                this._mouseDownEvent = i;
                var s = this
                  , n = 1 === i.which
                  , a = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1,
                !this._mouseStarted) ? (i.preventDefault(),
                !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(e) {
                    return s._mouseMove(e)
                }
                ,
                this._mouseUpDelegate = function(e) {
                    return s._mouseUp(e)
                }
                ,
                e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                i.preventDefault(),
                t = !0,
                !0)) : !0
            }
        },
        _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1,
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
            !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}
)(jQuery);
(function(t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }
    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }
    function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }
    t.ui = t.ui || {};
    var a, o = Math.max, r = Math.abs, h = Math.round, l = /left|center|right/, c = /top|center|bottom/, u = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, p = /%$/, f = t.fn.position;
    t.position = {
        scrollbarWidth: function() {
            if (a !== e)
                return a;
            var i, s, n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = n.children()[0];
            return t("body").append(n),
            i = o.offsetWidth,
            n.css("overflow", "scroll"),
            s = o.offsetWidth,
            i === s && (s = n[0].clientWidth),
            n.remove(),
            a = i - s
        },
        getScrollInfo: function(e) {
            var i = e.isWindow ? "" : e.element.css("overflow-x")
              , s = e.isWindow ? "" : e.element.css("overflow-y")
              , n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth
              , a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
            return {
                width: a ? t.position.scrollbarWidth() : 0,
                height: n ? t.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(e) {
            var i = t(e || window)
              , s = t.isWindow(i[0]);
            return {
                element: i,
                isWindow: s,
                offset: i.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: s ? i.width() : i.outerWidth(),
                height: s ? i.height() : i.outerHeight()
            }
        }
    },
    t.fn.position = function(e) {
        if (!e || !e.of)
            return f.apply(this, arguments);
        e = t.extend({}, e);
        var a, p, m, g, v, _, b = t(e.of), y = t.position.getWithinInfo(e.within), w = t.position.getScrollInfo(y), x = (e.collision || "flip").split(" "), k = {};
        return _ = n(b),
        b[0].preventDefault && (e.at = "left top"),
        p = _.width,
        m = _.height,
        g = _.offset,
        v = t.extend({}, g),
        t.each(["my", "at"], function() {
            var t, i, s = (e[this] || "").split(" ");
            1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]),
            s[0] = l.test(s[0]) ? s[0] : "center",
            s[1] = c.test(s[1]) ? s[1] : "center",
            t = u.exec(s[0]),
            i = u.exec(s[1]),
            k[this] = [t ? t[0] : 0, i ? i[0] : 0],
            e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
        }),
        1 === x.length && (x[1] = x[0]),
        "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2),
        "bottom" === e.at[1] ? v.top += m : "center" === e.at[1] && (v.top += m / 2),
        a = i(k.at, p, m),
        v.left += a[0],
        v.top += a[1],
        this.each(function() {
            var n, l, c = t(this), u = c.outerWidth(), d = c.outerHeight(), f = s(this, "marginLeft"), _ = s(this, "marginTop"), D = u + f + s(this, "marginRight") + w.width, T = d + _ + s(this, "marginBottom") + w.height, C = t.extend({}, v), M = i(k.my, c.outerWidth(), c.outerHeight());
            "right" === e.my[0] ? C.left -= u : "center" === e.my[0] && (C.left -= u / 2),
            "bottom" === e.my[1] ? C.top -= d : "center" === e.my[1] && (C.top -= d / 2),
            C.left += M[0],
            C.top += M[1],
            t.support.offsetFractions || (C.left = h(C.left),
            C.top = h(C.top)),
            n = {
                marginLeft: f,
                marginTop: _
            },
            t.each(["left", "top"], function(i, s) {
                t.ui.position[x[i]] && t.ui.position[x[i]][s](C, {
                    targetWidth: p,
                    targetHeight: m,
                    elemWidth: u,
                    elemHeight: d,
                    collisionPosition: n,
                    collisionWidth: D,
                    collisionHeight: T,
                    offset: [a[0] + M[0], a[1] + M[1]],
                    my: e.my,
                    at: e.at,
                    within: y,
                    elem: c
                })
            }),
            e.using && (l = function(t) {
                var i = g.left - C.left
                  , s = i + p - u
                  , n = g.top - C.top
                  , a = n + m - d
                  , h = {
                    target: {
                        element: b,
                        left: g.left,
                        top: g.top,
                        width: p,
                        height: m
                    },
                    element: {
                        element: c,
                        left: C.left,
                        top: C.top,
                        width: u,
                        height: d
                    },
                    horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                    vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
                };
                u > p && p > r(i + s) && (h.horizontal = "center"),
                d > m && m > r(n + a) && (h.vertical = "middle"),
                h.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical",
                e.using.call(this, t, h)
            }
            ),
            c.offset(t.extend(C, {
                using: l
            }))
        })
    }
    ,
    t.ui.position = {
        fit: {
            left: function(t, e) {
                var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, h = n - r, l = r + e.collisionWidth - a - n;
                e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n,
                t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
            },
            top: function(t, e) {
                var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, h = n - r, l = r + e.collisionHeight - a - n;
                e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n,
                t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
            }
        },
        flip: {
            left: function(t, e) {
                var i, s, n = e.within, a = n.offset.left + n.scrollLeft, o = n.width, h = n.isWindow ? n.scrollLeft : n.offset.left, l = t.left - e.collisionPosition.marginLeft, c = l - h, u = l + e.collisionWidth - o - h, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a,
                (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h,
                (s > 0 || u > r(s)) && (t.left += d + p + f))
            },
            top: function(t, e) {
                var i, s, n = e.within, a = n.offset.top + n.scrollTop, o = n.height, h = n.isWindow ? n.scrollTop : n.offset.top, l = t.top - e.collisionPosition.marginTop, c = l - h, u = l + e.collisionHeight - o - h, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, m = -2 * e.offset[1];
                0 > c ? (s = t.top + p + f + m + e.collisionHeight - o - a,
                t.top + p + f + m > c && (0 > s || r(c) > s) && (t.top += p + f + m)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - h,
                t.top + p + f + m > u && (i > 0 || u > r(i)) && (t.top += p + f + m))
            }
        },
        flipfit: {
            left: function() {
                t.ui.position.flip.left.apply(this, arguments),
                t.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                t.ui.position.flip.top.apply(this, arguments),
                t.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function() {
        var e, i, s, n, a, o = document.getElementsByTagName("body")[0], r = document.createElement("div");
        e = document.createElement(o ? "div" : "body"),
        s = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        },
        o && t.extend(s, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (a in s)
            e.style[a] = s[a];
        e.appendChild(r),
        i = o || document.documentElement,
        i.insertBefore(e, i.firstChild),
        r.style.cssText = "position: absolute; left: 10.7432222px;",
        n = t(r).offset().left,
        t.support.offsetFractions = n > 10 && 11 > n,
        e.innerHTML = "",
        i.removeChild(e)
    }()
}
)(jQuery);
(function(e) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.10.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
            this.options.addClasses && this.element.addClass("ui-draggable"),
            this.options.disabled && this.element.addClass("ui-draggable-disabled"),
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t),
            this.handle ? (e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }),
            !0) : !1)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t),
            this.helper.addClass("ui-draggable-dragging"),
            this._cacheHelperProportions(),
            e.ui.ddmanager && (e.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.positionAbs = this.element.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.originalPosition = this.position = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            i.containment && this._setContainment(),
            this._trigger("start", t) === !1 ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t),
            !0)
        },
        _mouseDrag: function(t, i) {
            if (this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            !i) {
                var s = this._uiHash();
                if (this._trigger("drag", t, s) === !1)
                    return this._mouseUp({}),
                    !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var i, s = this, n = !1, a = !1;
            for (e.ui.ddmanager && !this.options.dropBehaviour && (a = e.ui.ddmanager.drop(this, t)),
            this.dropped && (a = this.dropped,
            this.dropped = !1),
            i = this.element[0]; i && (i = i.parentNode); )
                i === document && (n = !0);
            return n || "original" !== this.options.helper ? ("invalid" === this.options.revert && !a || "valid" === this.options.revert && a || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, a) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                s._trigger("stop", t) !== !1 && s._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(),
            !1) : !1
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }),
            e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
            e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
            this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(t) {
            var i = this.options
              , s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
            s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"),
            s
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, i, s, n = this.options;
            if ("parent" === n.containment && (n.containment = this.helper[0].parentNode),
            ("document" === n.containment || "window" === n.containment) && (this.containment = ["document" === n.containment ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" === n.containment ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" === n.containment ? 0 : e(window).scrollLeft()) + e("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? 0 : e(window).scrollTop()) + (e("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(n.containment) || n.containment.constructor === Array)
                n.containment.constructor === Array && (this.containment = n.containment);
            else {
                if (i = e(n.containment),
                s = i[0],
                !s)
                    return;
                t = "hidden" !== e(s).css("overflow"),
                this.containment = [(parseInt(e(s).css("borderLeftWidth"), 10) || 0) + (parseInt(e(s).css("paddingLeft"), 10) || 0), (parseInt(e(s).css("borderTopWidth"), 10) || 0) + (parseInt(e(s).css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(e(s).css("borderRightWidth"), 10) || 0) - (parseInt(e(s).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(e(s).css("borderBottomWidth"), 10) || 0) - (parseInt(e(s).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                this.relative_container = i
            }
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1
              , n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , a = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(t) {
            var i, s, n, a, o = this.options, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName), l = t.pageX, u = t.pageY;
            return this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(),
            i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment,
            t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < i[1] && (u = i[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > i[3] && (u = i[3] + this.offset.click.top)),
            o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY,
            u = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n,
            a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX,
            l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)),
            {
                top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1
        },
        _trigger: function(t, i, s) {
            return s = s || this._uiHash(),
            e.ui.plugin.call(this, t, [i, s]),
            "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")),
            e.Widget.prototype._trigger.call(this, t, i, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i) {
            var s = e(this).data("ui-draggable")
              , n = s.options
              , a = e.extend({}, i, {
                item: s.element
            });
            s.sortables = [],
            e(n.connectToSortable).each(function() {
                var i = e.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }),
                i.refreshPositions(),
                i._trigger("activate", t, a))
            })
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable")
              , n = e.extend({}, i, {
                item: s.element
            });
            e.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0,
                s.cancelHelperRemoval = !0,
                this.instance.cancelHelperRemoval = !1,
                this.shouldRevert && (this.instance.options.revert = this.shouldRevert),
                this.instance._mouseStop(t),
                this.instance.options.helper = this.instance.options._helper,
                "original" === s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1,
                this.instance._trigger("deactivate", t, n))
            })
        },
        drag: function(t, i) {
            var s = e(this).data("ui-draggable")
              , n = this;
            e.each(s.sortables, function() {
                var a = !1
                  , o = this;
                this.instance.positionAbs = s.positionAbs,
                this.instance.helperProportions = s.helperProportions,
                this.instance.offset.click = s.offset.click,
                this.instance._intersectsWith(this.instance.containerCache) && (a = !0,
                e.each(s.sortables, function() {
                    return this.instance.positionAbs = s.positionAbs,
                    this.instance.helperProportions = s.helperProportions,
                    this.instance.offset.click = s.offset.click,
                    this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (a = !1),
                    a
                })),
                a ? (this.instance.isOver || (this.instance.isOver = 1,
                this.instance.currentItem = e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0),
                this.instance.options._helper = this.instance.options.helper,
                this.instance.options.helper = function() {
                    return i.helper[0]
                }
                ,
                t.target = this.instance.currentItem[0],
                this.instance._mouseCapture(t, !0),
                this.instance._mouseStart(t, !0, !0),
                this.instance.offset.click.top = s.offset.click.top,
                this.instance.offset.click.left = s.offset.click.left,
                this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left,
                this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top,
                s._trigger("toSortable", t),
                s.dropped = this.instance.element,
                s.currentItem = s.element,
                this.instance.fromOutside = s),
                this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0,
                this.instance.cancelHelperRemoval = !0,
                this.instance.options.revert = !1,
                this.instance._trigger("out", t, this.instance._uiHash(this.instance)),
                this.instance._mouseStop(t, !0),
                this.instance.options.helper = this.instance.options._helper,
                this.instance.currentItem.remove(),
                this.instance.placeholder && this.instance.placeholder.remove(),
                s._trigger("fromSortable", t),
                s.dropped = !1)
            })
        }
    }),
    e.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = e("body")
              , i = e(this).data("ui-draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor")),
            t.css("cursor", i.cursor)
        },
        stop: function() {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }),
    e.ui.plugin.add("draggable", "opacity", {
        start: function(t, i) {
            var s = e(i.helper)
              , n = e(this).data("ui-draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")),
            s.css("opacity", n.opacity)
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable").options;
            s._opacity && e(i.helper).css("opacity", s._opacity)
        }
    }),
    e.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var i = e(this).data("ui-draggable")
              , s = i.options
              , n = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)),
            s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(document).scrollTop() < s.scrollSensitivity ? n = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (n = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed))),
            s.axis && "y" === s.axis || (t.pageX - e(document).scrollLeft() < s.scrollSensitivity ? n = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (n = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed)))),
            n !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
        }
    }),
    e.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = e(this).data("ui-draggable")
              , i = t.options;
            t.snapElements = [],
            e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = e(this)
                  , s = i.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        },
        drag: function(t, i) {
            var s, n, a, o, r, h, l, u, c, d, p = e(this).data("ui-draggable"), f = p.options, m = f.snapTolerance, g = i.offset.left, v = g + p.helperProportions.width, y = i.offset.top, b = y + p.helperProportions.height;
            for (c = p.snapElements.length - 1; c >= 0; c--)
                r = p.snapElements[c].left,
                h = r + p.snapElements[c].width,
                l = p.snapElements[c].top,
                u = l + p.snapElements[c].height,
                g > r - m && h + m > g && y > l - m && u + m > y || g > r - m && h + m > g && b > l - m && u + m > b || v > r - m && h + m > v && y > l - m && u + m > y || v > r - m && h + m > v && b > l - m && u + m > b ? ("inner" !== f.snapMode && (s = m >= Math.abs(l - b),
                n = m >= Math.abs(u - y),
                a = m >= Math.abs(r - v),
                o = m >= Math.abs(h - g),
                s && (i.position.top = p._convertPositionTo("relative", {
                    top: l - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top),
                n && (i.position.top = p._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top - p.margins.top),
                a && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: r - p.helperProportions.width
                }).left - p.margins.left),
                o && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left - p.margins.left)),
                d = s || n || a || o,
                "outer" !== f.snapMode && (s = m >= Math.abs(l - y),
                n = m >= Math.abs(u - b),
                a = m >= Math.abs(r - g),
                o = m >= Math.abs(h - v),
                s && (i.position.top = p._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top - p.margins.top),
                n && (i.position.top = p._convertPositionTo("relative", {
                    top: u - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top),
                a && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: r
                }).left - p.margins.left),
                o && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: h - p.helperProportions.width
                }).left - p.margins.left)),
                !p.snapElements[c].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
                    snapItem: p.snapElements[c].item
                })),
                p.snapElements[c].snapping = s || n || a || o || d) : (p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
                    snapItem: p.snapElements[c].item
                })),
                p.snapElements[c].snapping = !1)
        }
    }),
    e.ui.plugin.add("draggable", "stack", {
        start: function() {
            var t, i = this.data("ui-draggable").options, s = e.makeArray(e(i.stack)).sort(function(t, i) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
            });
            s.length && (t = parseInt(e(s[0]).css("zIndex"), 10) || 0,
            e(s).each(function(i) {
                e(this).css("zIndex", t + i)
            }),
            this.css("zIndex", t + s.length))
        }
    }),
    e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i) {
            var s = e(i.helper)
              , n = e(this).data("ui-draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")),
            s.css("zIndex", n.zIndex)
        },
        stop: function(t, i) {
            var s = e(this).data("ui-draggable").options;
            s._zIndex && e(i.helper).css("zIndex", s._zIndex)
        }
    })
}
)(jQuery);
(function(e) {
    function t(e, t, i) {
        return e > t && t + i > e
    }
    e.widget("ui.droppable", {
        version: "1.10.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t = this.options
              , i = t.accept;
            this.isover = !1,
            this.isout = !0,
            this.accept = e.isFunction(i) ? i : function(e) {
                return e.is(i)
            }
            ,
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            },
            e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [],
            e.ui.ddmanager.droppables[t.scope].push(this),
            t.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var t = 0, i = e.ui.ddmanager.droppables[this.options.scope]; i.length > t; t++)
                i[t] === this && i.splice(t, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, i) {
            "accept" === t && (this.accept = e.isFunction(i) ? i : function(e) {
                return e.is(i)
            }
            ),
            e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass),
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass),
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass),
            this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
            this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var s = i || e.ui.ddmanager.current
              , n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var t = e.data(this, "ui-droppable");
                return t.options.greedy && !t.options.disabled && t.options.scope === s.options.scope && t.accept.call(t.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance) ? (n = !0,
                !1) : undefined
            }),
            n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass),
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
            this._trigger("drop", t, this.ui(s)),
            this.element) : !1) : !1
        },
        ui: function(e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }),
    e.ui.intersect = function(e, i, s) {
        if (!i.offset)
            return !1;
        var n, a, o = (e.positionAbs || e.position.absolute).left, r = o + e.helperProportions.width, h = (e.positionAbs || e.position.absolute).top, l = h + e.helperProportions.height, u = i.offset.left, c = u + i.proportions.width, d = i.offset.top, p = d + i.proportions.height;
        switch (s) {
        case "fit":
            return o >= u && c >= r && h >= d && p >= l;
        case "intersect":
            return o + e.helperProportions.width / 2 > u && c > r - e.helperProportions.width / 2 && h + e.helperProportions.height / 2 > d && p > l - e.helperProportions.height / 2;
        case "pointer":
            return n = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left,
            a = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top,
            t(a, d, i.proportions.height) && t(n, u, i.proportions.width);
        case "touch":
            return (h >= d && p >= h || l >= d && p >= l || d > h && l > p) && (o >= u && c >= o || r >= u && c >= r || u > o && r > c);
        default:
            return !1
        }
    }
    ,
    e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var s, n, a = e.ui.ddmanager.droppables[t.options.scope] || [], o = i ? i.type : null, r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e: for (s = 0; a.length > s; s++)
                if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) {
                    for (n = 0; r.length > n; n++)
                        if (r[n] === a[s].element[0]) {
                            a[s].proportions.height = 0;
                            continue e
                        }
                    a[s].visible = "none" !== a[s].element.css("display"),
                    a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i),
                    a[s].offset = a[s].element.offset(),
                    a[s].proportions = {
                        width: a[s].element[0].offsetWidth,
                        height: a[s].element[0].offsetHeight
                    })
                }
        },
        drop: function(t, i) {
            var s = !1;
            return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (s = this._drop.call(this, i) || s),
                !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0,
                this.isover = !1,
                this._deactivate.call(this, i)))
            }),
            s
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable", function() {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i),
            e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, a, o = e.ui.intersect(t, this, this.options.tolerance), r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope,
                    a = this.element.parents(":data(ui-droppable)").filter(function() {
                        return e.data(this, "ui-droppable").options.scope === n
                    }),
                    a.length && (s = e.data(a[0], "ui-droppable"),
                    s.greedyChild = "isover" === r)),
                    s && "isover" === r && (s.isover = !1,
                    s.isout = !0,
                    s._out.call(s, i)),
                    this[r] = !0,
                    this["isout" === r ? "isover" : "isout"] = !1,
                    this["isover" === r ? "_over" : "_out"].call(this, i),
                    s && "isout" === r && (s.isout = !1,
                    s.isover = !0,
                    s._over.call(s, i)))
                }
            })
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable"),
            t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        }
    }
}
)(jQuery);
(function(e) {
    function t(e) {
        return parseInt(e, 10) || 0
    }
    function i(e) {
        return !isNaN(parseInt(e, 10))
    }
    e.widget("ui.resizable", e.ui.mouse, {
        version: "1.10.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var t, i, s, n, a, o = this, r = this.options;
            if (this.element.addClass("ui-resizable"),
            e.extend(this, {
                _aspectRatio: !!r.aspectRatio,
                aspectRatio: r.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
            }),
            this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")),
            this.elementIsWrapper = !0,
            this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }),
            this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css({
                margin: this.originalElement.css("margin")
            }),
            this._proportionallyResize()),
            this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"),
            this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                t = this.handles.split(","),
                this.handles = {},
                i = 0; t.length > i; i++)
                    s = e.trim(t[i]),
                    a = "ui-resizable-" + s,
                    n = e("<div class='ui-resizable-handle " + a + "'></div>"),
                    n.css({
                        zIndex: r.zIndex
                    }),
                    "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                    this.handles[s] = ".ui-resizable-" + s,
                    this.element.append(n);
            this._renderAxis = function(t) {
                var i, s, n, a;
                t = t || this.element;
                for (i in this.handles)
                    this.handles[i].constructor === String && (this.handles[i] = e(this.handles[i], this.element).show()),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element),
                    a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(),
                    n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""),
                    t.css(n, a),
                    this._proportionallyResize()),
                    e(this.handles[i]).length
            }
            ,
            this._renderAxis(this.element),
            this._handles = e(".ui-resizable-handle", this.element).disableSelection(),
            this._handles.mouseover(function() {
                o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                o.axis = n && n[1] ? n[1] : "se")
            }),
            r.autoHide && (this._handles.hide(),
            e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                r.disabled || (e(this).removeClass("ui-resizable-autohide"),
                o._handles.show())
            }).mouseleave(function() {
                r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"),
                o._handles.hide())
            })),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element),
            t = this.element,
            this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t),
            t.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _mouseCapture: function(t) {
            var i, s, n = !1;
            for (i in this.handles)
                s = e(this.handles[i])[0],
                (s === t.target || e.contains(s, t.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function(i) {
            var s, n, a, o = this.options, r = this.element.position(), h = this.element;
            return this.resizing = !0,
            /absolute/.test(h.css("position")) ? h.css({
                position: "absolute",
                top: h.css("top"),
                left: h.css("left")
            }) : h.is(".ui-draggable") && h.css({
                position: "absolute",
                top: r.top,
                left: r.left
            }),
            this._renderProxy(),
            s = t(this.helper.css("left")),
            n = t(this.helper.css("top")),
            o.containment && (s += e(o.containment).scrollLeft() || 0,
            n += e(o.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: s,
                top: n
            },
            this.size = this._helper ? {
                width: h.outerWidth(),
                height: h.outerHeight()
            } : {
                width: h.width(),
                height: h.height()
            },
            this.originalSize = this._helper ? {
                width: h.outerWidth(),
                height: h.outerHeight()
            } : {
                width: h.width(),
                height: h.height()
            },
            this.originalPosition = {
                left: s,
                top: n
            },
            this.sizeDiff = {
                width: h.outerWidth() - h.width(),
                height: h.outerHeight() - h.height()
            },
            this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            },
            this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            a = e(".ui-resizable-" + this.axis).css("cursor"),
            e("body").css("cursor", "auto" === a ? this.axis + "-resize" : a),
            h.addClass("ui-resizable-resizing"),
            this._propagate("start", i),
            !0
        },
        _mouseDrag: function(t) {
            var i, s = this.helper, n = {}, a = this.originalMousePosition, o = this.axis, r = this.position.top, h = this.position.left, l = this.size.width, u = this.size.height, c = t.pageX - a.left || 0, d = t.pageY - a.top || 0, p = this._change[o];
            return p ? (i = p.apply(this, [t, c, d]),
            this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)),
            i = this._respectSize(i, t),
            this._updateCache(i),
            this._propagate("resize", t),
            this.position.top !== r && (n.top = this.position.top + "px"),
            this.position.left !== h && (n.left = this.position.left + "px"),
            this.size.width !== l && (n.width = this.size.width + "px"),
            this.size.height !== u && (n.height = this.size.height + "px"),
            s.css(n),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            e.isEmptyObject(n) || this._trigger("resize", t, this.ui()),
            !1) : !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var i, s, n, a, o, r, h, l = this.options, u = this;
            return this._helper && (i = this._proportionallyResizeElements,
            s = i.length && /textarea/i.test(i[0].nodeName),
            n = s && e.ui.hasScroll(i[0], "left") ? 0 : u.sizeDiff.height,
            a = s ? 0 : u.sizeDiff.width,
            o = {
                width: u.helper.width() - a,
                height: u.helper.height() - n
            },
            r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null,
            h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null,
            l.animate || this.element.css(e.extend(o, {
                top: h,
                left: r
            })),
            u.helper.height(u.size.height),
            u.helper.width(u.size.width),
            this._helper && !l.animate && this._proportionallyResize()),
            e("body").css("cursor", "auto"),
            this.element.removeClass("ui-resizable-resizing"),
            this._propagate("stop", t),
            this._helper && this.helper.remove(),
            !1
        },
        _updateVirtualBoundaries: function(e) {
            var t, s, n, a, o, r = this.options;
            o = {
                minWidth: i(r.minWidth) ? r.minWidth : 0,
                maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: i(r.minHeight) ? r.minHeight : 0,
                maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
            },
            (this._aspectRatio || e) && (t = o.minHeight * this.aspectRatio,
            n = o.minWidth / this.aspectRatio,
            s = o.maxHeight * this.aspectRatio,
            a = o.maxWidth / this.aspectRatio,
            t > o.minWidth && (o.minWidth = t),
            n > o.minHeight && (o.minHeight = n),
            o.maxWidth > s && (o.maxWidth = s),
            o.maxHeight > a && (o.maxHeight = a)),
            this._vBoundaries = o
        },
        _updateCache: function(e) {
            this.offset = this.helper.offset(),
            i(e.left) && (this.position.left = e.left),
            i(e.top) && (this.position.top = e.top),
            i(e.height) && (this.size.height = e.height),
            i(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function(e) {
            var t = this.position
              , s = this.size
              , n = this.axis;
            return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio),
            "sw" === n && (e.left = t.left + (s.width - e.width),
            e.top = null),
            "nw" === n && (e.top = t.top + (s.height - e.height),
            e.left = t.left + (s.width - e.width)),
            e
        },
        _respectSize: function(e) {
            var t = this._vBoundaries
              , s = this.axis
              , n = i(e.width) && t.maxWidth && t.maxWidth < e.width
              , a = i(e.height) && t.maxHeight && t.maxHeight < e.height
              , o = i(e.width) && t.minWidth && t.minWidth > e.width
              , r = i(e.height) && t.minHeight && t.minHeight > e.height
              , h = this.originalPosition.left + this.originalSize.width
              , l = this.position.top + this.size.height
              , u = /sw|nw|w/.test(s)
              , c = /nw|ne|n/.test(s);
            return o && (e.width = t.minWidth),
            r && (e.height = t.minHeight),
            n && (e.width = t.maxWidth),
            a && (e.height = t.maxHeight),
            o && u && (e.left = h - t.minWidth),
            n && u && (e.left = h - t.maxWidth),
            r && c && (e.top = l - t.minHeight),
            a && c && (e.top = l - t.maxHeight),
            e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null,
            e
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var e, t, i, s, n, a = this.helper || this.element;
                for (e = 0; this._proportionallyResizeElements.length > e; e++) {
                    if (n = this._proportionallyResizeElements[e],
                    !this.borderDif)
                        for (this.borderDif = [],
                        i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")],
                        s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")],
                        t = 0; i.length > t; t++)
                            this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(s[t], 10) || 0);
                    n.css({
                        height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: a.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var t = this.element
              , i = this.options;
            this.elementOffset = t.offset(),
            this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"),
            this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }),
            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(e, t) {
                var i = this.originalSize
                  , s = this.originalPosition;
                return {
                    left: s.left + t,
                    width: i.width - t
                }
            },
            n: function(e, t, i) {
                var s = this.originalSize
                  , n = this.originalPosition;
                return {
                    top: n.top + i,
                    height: s.height - i
                }
            },
            s: function(e, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            },
            sw: function(t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            },
            ne: function(t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            },
            nw: function(t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }
        },
        _propagate: function(t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]),
            "resize" !== t && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    e.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = e(this).data("ui-resizable")
              , s = i.options
              , n = i._proportionallyResizeElements
              , a = n.length && /textarea/i.test(n[0].nodeName)
              , o = a && e.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height
              , r = a ? 0 : i.sizeDiff.width
              , h = {
                width: i.size.width - r,
                height: i.size.height - o
            }
              , l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null
              , u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(h, u && l ? {
                top: u,
                left: l
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && e(n[0]).css({
                        width: s.width,
                        height: s.height
                    }),
                    i._updateCache(s),
                    i._propagate("resize", t)
                }
            })
        }
    }),
    e.ui.plugin.add("resizable", "containment", {
        start: function() {
            var i, s, n, a, o, r, h, l = e(this).data("ui-resizable"), u = l.options, c = l.element, d = u.containment, p = d instanceof e ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
            p && (l.containerElement = e(p),
            /document/.test(d) || d === document ? (l.containerOffset = {
                left: 0,
                top: 0
            },
            l.containerPosition = {
                left: 0,
                top: 0
            },
            l.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (i = e(p),
            s = [],
            e(["Top", "Right", "Left", "Bottom"]).each(function(e, n) {
                s[e] = t(i.css("padding" + n))
            }),
            l.containerOffset = i.offset(),
            l.containerPosition = i.position(),
            l.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1]
            },
            n = l.containerOffset,
            a = l.containerSize.height,
            o = l.containerSize.width,
            r = e.ui.hasScroll(p, "left") ? p.scrollWidth : o,
            h = e.ui.hasScroll(p) ? p.scrollHeight : a,
            l.parentData = {
                element: p,
                left: n.left,
                top: n.top,
                width: r,
                height: h
            }))
        },
        resize: function(t) {
            var i, s, n, a, o = e(this).data("ui-resizable"), r = o.options, h = o.containerOffset, l = o.position, u = o._aspectRatio || t.shiftKey, c = {
                top: 0,
                left: 0
            }, d = o.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (c = h),
            l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - c.left),
            u && (o.size.height = o.size.width / o.aspectRatio),
            o.position.left = r.helper ? h.left : 0),
            l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top),
            u && (o.size.width = o.size.height * o.aspectRatio),
            o.position.top = o._helper ? h.top : 0),
            o.offset.left = o.parentData.left + o.position.left,
            o.offset.top = o.parentData.top + o.position.top,
            i = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width),
            s = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - h.top) + o.sizeDiff.height),
            n = o.containerElement.get(0) === o.element.parent().get(0),
            a = /relative|absolute/.test(o.containerElement.css("position")),
            n && a && (i -= o.parentData.left),
            i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i,
            u && (o.size.height = o.size.width / o.aspectRatio)),
            s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s,
            u && (o.size.width = o.size.height * o.aspectRatio))
        },
        stop: function() {
            var t = e(this).data("ui-resizable")
              , i = t.options
              , s = t.containerOffset
              , n = t.containerPosition
              , a = t.containerElement
              , o = e(t.helper)
              , r = o.offset()
              , h = o.outerWidth() - t.sizeDiff.width
              , l = o.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }),
            t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            })
        }
    }),
    e.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = e(this).data("ui-resizable")
              , i = t.options
              , s = function(t) {
                e(t).each(function() {
                    var t = e(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0],
            s(i.alsoResize)) : e.each(i.alsoResize, function(e) {
                s(e)
            })
        },
        resize: function(t, i) {
            var s = e(this).data("ui-resizable")
              , n = s.options
              , a = s.originalSize
              , o = s.originalPosition
              , r = {
                height: s.size.height - a.height || 0,
                width: s.size.width - a.width || 0,
                top: s.position.top - o.top || 0,
                left: s.position.left - o.left || 0
            }
              , h = function(t, s) {
                e(t).each(function() {
                    var t = e(this)
                      , n = e(this).data("ui-resizable-alsoresize")
                      , a = {}
                      , o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    e.each(o, function(e, t) {
                        var i = (n[t] || 0) + (r[t] || 0);
                        i && i >= 0 && (a[t] = i || null)
                    }),
                    t.css(a)
                })
            };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : e.each(n.alsoResize, function(e, t) {
                h(e, t)
            })
        },
        stop: function() {
            e(this).removeData("resizable-alsoresize")
        }
    }),
    e.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = e(this).data("ui-resizable")
              , i = t.options
              , s = t.size;
            t.ghost = t.originalElement.clone(),
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""),
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }),
    e.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t = e(this).data("ui-resizable")
              , i = t.options
              , s = t.size
              , n = t.originalSize
              , a = t.originalPosition
              , o = t.axis
              , r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid
              , h = r[0] || 1
              , l = r[1] || 1
              , u = Math.round((s.width - n.width) / h) * h
              , c = Math.round((s.height - n.height) / l) * l
              , d = n.width + u
              , p = n.height + c
              , f = i.maxWidth && d > i.maxWidth
              , m = i.maxHeight && p > i.maxHeight
              , g = i.minWidth && i.minWidth > d
              , v = i.minHeight && i.minHeight > p;
            i.grid = r,
            g && (d += h),
            v && (p += l),
            f && (d -= h),
            m && (p -= l),
            /^(se|s|e)$/.test(o) ? (t.size.width = d,
            t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = d,
            t.size.height = p,
            t.position.top = a.top - c) : /^(sw)$/.test(o) ? (t.size.width = d,
            t.size.height = p,
            t.position.left = a.left - u) : (t.size.width = d,
            t.size.height = p,
            t.position.top = a.top - c,
            t.position.left = a.left - u)
        }
    })
}
)(jQuery);
(function(e) {
    e.widget("ui.selectable", e.ui.mouse, {
        version: "1.10.2",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var t, i = this;
            this.element.addClass("ui-selectable"),
            this.dragged = !1,
            this.refresh = function() {
                t = e(i.options.filter, i.element[0]),
                t.addClass("ui-selectee"),
                t.each(function() {
                    var t = e(this)
                      , i = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }
            ,
            this.refresh(),
            this.selectees = t.addClass("ui-selectee"),
            this._mouseInit(),
            this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
            this.element.removeClass("ui-selectable ui-selectable-disabled"),
            this._mouseDestroy()
        },
        _mouseStart: function(t) {
            var i = this
              , s = this.options;
            this.opos = [t.pageX, t.pageY],
            this.options.disabled || (this.selectees = e(s.filter, this.element[0]),
            this._trigger("start", t),
            e(s.appendTo).append(this.helper),
            this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }),
            s.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function() {
                var s = e.data(this, "selectable-item");
                s.startselected = !0,
                t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"),
                s.selected = !1,
                s.$element.addClass("ui-unselecting"),
                s.unselecting = !0,
                i._trigger("unselecting", t, {
                    unselecting: s.element
                }))
            }),
            e(t.target).parents().addBack().each(function() {
                var s, n = e.data(this, "selectable-item");
                return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"),
                n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"),
                n.unselecting = !s,
                n.selecting = s,
                n.selected = s,
                s ? i._trigger("selecting", t, {
                    selecting: n.element
                }) : i._trigger("unselecting", t, {
                    unselecting: n.element
                }),
                !1) : undefined
            }))
        },
        _mouseDrag: function(t) {
            if (this.dragged = !0,
            !this.options.disabled) {
                var i, s = this, n = this.options, a = this.opos[0], o = this.opos[1], r = t.pageX, h = t.pageY;
                return a > r && (i = r,
                r = a,
                a = i),
                o > h && (i = h,
                h = o,
                o = i),
                this.helper.css({
                    left: a,
                    top: o,
                    width: r - a,
                    height: h - o
                }),
                this.selectees.each(function() {
                    var i = e.data(this, "selectable-item")
                      , l = !1;
                    i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom),
                    l ? (i.selected && (i.$element.removeClass("ui-selected"),
                    i.selected = !1),
                    i.unselecting && (i.$element.removeClass("ui-unselecting"),
                    i.unselecting = !1),
                    i.selecting || (i.$element.addClass("ui-selecting"),
                    i.selecting = !0,
                    s._trigger("selecting", t, {
                        selecting: i.element
                    }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"),
                    i.selecting = !1,
                    i.$element.addClass("ui-selected"),
                    i.selected = !0) : (i.$element.removeClass("ui-selecting"),
                    i.selecting = !1,
                    i.startselected && (i.$element.addClass("ui-unselecting"),
                    i.unselecting = !0),
                    s._trigger("unselecting", t, {
                        unselecting: i.element
                    }))),
                    i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"),
                    i.selected = !1,
                    i.$element.addClass("ui-unselecting"),
                    i.unselecting = !0,
                    s._trigger("unselecting", t, {
                        unselecting: i.element
                    })))))
                }),
                !1
            }
        },
        _mouseStop: function(t) {
            var i = this;
            return this.dragged = !1,
            e(".ui-unselecting", this.element[0]).each(function() {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"),
                s.unselecting = !1,
                s.startselected = !1,
                i._trigger("unselected", t, {
                    unselected: s.element
                })
            }),
            e(".ui-selecting", this.element[0]).each(function() {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"),
                s.selecting = !1,
                s.selected = !0,
                s.startselected = !0,
                i._trigger("selected", t, {
                    selected: s.element
                })
            }),
            this._trigger("stop", t),
            this.helper.remove(),
            !1
        }
    })
}
)(jQuery);
(function(t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }
    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {},
            this.element.addClass("ui-sortable"),
            this.refresh(),
            this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1,
            this.offset = this.element.offset(),
            this._mouseInit(),
            this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"),
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--)
                this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i,
            this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, i) {
            var s = null
              , n = !1
              , a = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e),
            t(e.target).parents().each(function() {
                return t.data(this, a.widgetName + "-item") === a ? (s = t(this),
                !1) : undefined
            }),
            t.data(e.target, a.widgetName + "-item") === a && (s = t(e.target)),
            s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (n = !0)
            }),
            n) ? (this.currentItem = s,
            this._removeCurrentsFromItems(),
            !0) : !1 : !1)
        },
        _mouseStart: function(e, i, s) {
            var n, a, o = this.options;
            if (this.currentContainer = this,
            this.refreshPositions(),
            this.helper = this._createHelper(e),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            this.originalPosition = this._generatePosition(e),
            this.originalPageX = e.pageX,
            this.originalPageY = e.pageY,
            o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            o.containment && this._setContainment(),
            o.cursor && "auto" !== o.cursor && (a = this.document.find("body"),
            this.storedCursor = a.css("cursor"),
            a.css("cursor", o.cursor),
            this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)),
            o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", o.opacity)),
            o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", o.zIndex)),
            this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", e, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !s)
                for (n = this.containers.length - 1; n >= 0; n--)
                    this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this),
            t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
            this.dragging = !0,
            this.helper.addClass("ui-sortable-helper"),
            this._mouseDrag(e),
            !0
        },
        _mouseDrag: function(e) {
            var i, s, n, a, o = this.options, r = !1;
            for (this.position = this._generatePosition(e),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - t(document).scrollTop() < o.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - o.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < o.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + o.scrollSpeed)),
            e.pageX - t(document).scrollLeft() < o.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - o.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < o.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + o.scrollSpeed))),
            r !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i],
                n = s.item[0],
                a = this._intersectsWithPointer(s),
                a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                    if (this.direction = 1 === a ? "down" : "up",
                    "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))
                        break;
                    this._rearrange(e, s),
                    this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            this._trigger("sort", e, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e),
                this.options.revert) {
                    var s = this
                      , n = this.placeholder.offset()
                      , a = this.options.axis
                      , o = {};
                    a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)),
                    a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)),
                    this.reverting = !0,
                    t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e)
                    })
                } else
                    this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }),
                "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--)
                    this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
                    this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)),
                    this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected)
              , s = [];
            return e = e || {},
            t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }),
            !s.length && e.key && s.push(e.key + "="),
            s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected)
              , s = [];
            return e = e || {},
            i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }),
            s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left
              , i = e + this.helperProportions.width
              , s = this.positionAbs.top
              , n = s + this.helperProportions.height
              , a = t.left
              , o = a + t.width
              , r = t.top
              , h = r + t.height
              , l = this.offset.click.top
              , c = this.offset.click.left
              , u = s + l > r && h > s + l && e + c > a && o > e + c;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u : e + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height)
              , s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width)
              , n = i && s
              , a = this._getDragVerticalDirection()
              , o = this._getDragHorizontalDirection();
            return n ? this.floating ? o && "right" === o || "down" === a ? 2 : 1 : a && ("down" === a ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height)
              , s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width)
              , n = this._getDragVerticalDirection()
              , a = this._getDragHorizontalDirection();
            return this.floating && a ? "right" === a && s || "left" === a && !s : n && ("down" === n && i || "up" === n && !i)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            var i, s, n, a, o = [], r = [], h = this._connectWith();
            if (h && e)
                for (i = h.length - 1; i >= 0; i--)
                    for (n = t(h[i]),
                    s = n.length - 1; s >= 0; s--)
                        a = t.data(n[s], this.widgetFullName),
                        a && a !== this && !a.options.disabled && r.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (r.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
            i = r.length - 1; i >= 0; i--)
                r[i][0].each(function() {
                    o.push(this)
                });
            return t(o)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0])
                        return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [],
            this.containers = [this];
            var i, s, n, a, o, r, h, l, c = this.items, u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this]], d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (n = t(d[i]),
                    s = n.length - 1; s >= 0; s--)
                        a = t.data(n[s], this.widgetFullName),
                        a && a !== this && !a.options.disabled && (u.push([t.isFunction(a.options.items) ? a.options.items.call(a.element[0], e, {
                            item: this.currentItem
                        }) : t(a.options.items, a.element), a]),
                        this.containers.push(a));
            for (i = u.length - 1; i >= 0; i--)
                for (o = u[i][1],
                r = u[i][0],
                s = 0,
                l = r.length; l > s; s++)
                    h = t(r[s]),
                    h.data(this.widgetName + "-item", o),
                    c.push({
                        item: h,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, a;
            for (i = this.items.length - 1; i >= 0; i--)
                s = this.items[i],
                s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item,
                e || (s.width = n.outerWidth(),
                s.height = n.outerHeight()),
                a = n.offset(),
                s.left = a.left,
                s.top = a.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--)
                    a = this.containers[i].element.offset(),
                    this.containers[i].containerCache.left = a.left,
                    this.containers[i].containerCache.top = a.top,
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder,
            s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase()
                      , n = t(e.document[0].createElement(s)).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? n.append("<td colspan='99'>&#160;</td>") : "img" === s && n.attr("src", e.currentItem.attr("src")),
                    i || n.css("visibility", "hidden"),
                    n
                },
                update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)),
                    n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)),
            e.currentItem.after(e.placeholder),
            s.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function(s) {
            var n, a, o, r, h, l, c, u, d, p, f = null, m = null;
            for (n = this.containers.length - 1; n >= 0; n--)
                if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (f && t.contains(this.containers[n].element[0], f.element[0]))
                            continue;
                        f = this.containers[n],
                        m = n
                    } else
                        this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)),
                        this.containers[n].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length)
                    this.containers[m].containerCache.over || (this.containers[m]._trigger("over", s, this._uiHash(this)),
                    this.containers[m].containerCache.over = 1);
                else {
                    for (o = 1e4,
                    r = null,
                    p = f.floating || i(this.currentItem),
                    h = p ? "left" : "top",
                    l = p ? "width" : "height",
                    c = this.positionAbs[h] + this.offset.click[h],
                    a = this.items.length - 1; a >= 0; a--)
                        t.contains(this.containers[m].element[0], this.items[a].item[0]) && this.items[a].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[a].top, this.items[a].height)) && (u = this.items[a].item.offset()[h],
                        d = !1,
                        Math.abs(u - c) > Math.abs(u + this.items[a][l] - c) && (d = !0,
                        u += this.items[a][l]),
                        o > Math.abs(u - c) && (o = Math.abs(u - c),
                        r = this.items[a],
                        this.direction = d ? "up" : "down"));
                    if (!r && !this.options.dropOnEmpty)
                        return;
                    if (this.currentContainer === this.containers[m])
                        return;
                    r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[m].element, !0),
                    this._trigger("change", s, this._uiHash()),
                    this.containers[m]._trigger("change", s, this._uiHash(this)),
                    this.currentContainer = this.containers[m],
                    this.options.placeholder.update(this.currentContainer, this.placeholder),
                    this.containers[m]._trigger("over", s, this._uiHash(this)),
                    this.containers[m].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options
              , s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]),
            s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
            (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
            s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left"in e && (this.offset.click.left = e.left + this.margins.left),
            "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top"in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
            e.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode),
            ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0],
            i = t(n.containment).offset(),
            s = "hidden" !== t(e).css("overflow"),
            this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1
              , n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , a = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n = this.options, a = e.pageX, o = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left),
            e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top),
            e.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left),
            e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)),
            n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1],
            o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i,
            s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0],
            a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)),
            {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(t, e) {
            this.reverting = !1;
            var i, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null,
            this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)
                    ("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !e && s.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }),
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                this._trigger("update", t, this._uiHash())
            }),
            this !== this.currentContainer && (e || (s.push(function(t) {
                this._trigger("remove", t, this._uiHash())
            }),
            s.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            s.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)))),
            i = this.containers.length - 1; i >= 0; i--)
                e || s.push(function(t) {
                    return function(e) {
                        t._trigger("deactivate", e, this._uiHash(this))
                    }
                }
                .call(this, this.containers[i])),
                this.containers[i].containerCache.over && (s.push(function(t) {
                    return function(e) {
                        t._trigger("out", e, this._uiHash(this))
                    }
                }
                .call(this, this.containers[i])),
                this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
            this.dragging = !1,
            this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()),
                    i = 0; s.length > i; i++)
                        s[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1,
                !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            this.helper = null,
            !e) {
                for (i = 0; s.length > i; i++)
                    s[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !0
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}
)(jQuery);
(function(t) {
    var e = 0
      , i = {}
      , s = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide",
    s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show",
    t.widget("ui.accordion", {
        version: "1.10.2",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(),
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"),
            e.collapsible || e.active !== !1 && null != e.active || (e.active = 0),
            this._processPanels(),
            0 > e.active && (e.active += this.headers.length),
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t(),
                content: this.active.length ? this.active.next() : t()
            }
        },
        _createIcons: function() {
            var e = this.options.icons;
            e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers),
            this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),
            this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var t;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }),
            this._destroyIcons(),
            t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }),
            "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) {
            return "active" === t ? (this._activate(e),
            undefined) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event),
            this._setupEvents(e)),
            this._super(t, e),
            "collapsible" !== t || e || this.options.active !== !1 || this._activate(0),
            "icons" === t && (this._destroyIcons(),
            e && this._createIcons()),
            "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e),
            undefined)
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode
                  , s = this.headers.length
                  , n = this.headers.index(e.target)
                  , a = !1;
                switch (e.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    a = this.headers[(n + 1) % s];
                    break;
                case i.LEFT:
                case i.UP:
                    a = this.headers[(n - 1 + s) % s];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._eventHandler(e);
                    break;
                case i.HOME:
                    a = this.headers[0];
                    break;
                case i.END:
                    a = this.headers[s - 1]
                }
                a && (t(e.target).attr("tabIndex", -1),
                t(a).attr("tabIndex", 0),
                a.focus(),
                e.preventDefault())
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(),
            (e.active === !1 && e.collapsible === !0 || !this.headers.length) && (e.active = !1,
            this.active = t()),
            e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1,
            this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active),
            this._destroyIcons(),
            this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),
            this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var i, s = this.options, n = s.heightStyle, a = this.element.parent(), o = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e);
            this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),
            this.active.next().addClass("ui-accordion-content-active").show(),
            this.headers.attr("role", "tab").each(function(e) {
                var i = t(this)
                  , s = i.attr("id")
                  , n = i.next()
                  , a = n.attr("id");
                s || (s = o + "-header-" + e,
                i.attr("id", s)),
                a || (a = o + "-panel-" + e,
                n.attr("id", a)),
                i.attr("aria-controls", a),
                n.attr("aria-labelledby", s)
            }).next().attr("role", "tabpanel"),
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(),
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(s.event),
            "fill" === n ? (i = a.height(),
            this.element.siblings(":visible").each(function() {
                var e = t(this)
                  , s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }),
            this.headers.each(function() {
                i -= t(this).outerHeight(!0)
            }),
            this.headers.next().each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === n && (i = 0,
            this.headers.next().each(function() {
                i = Math.max(i, t(this).css("height", "").height())
            }).height(i))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0],
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }),
            this._hoverable(this.headers),
            this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i = this.options
              , s = this.active
              , n = t(e.currentTarget)
              , a = n[0] === s[0]
              , o = a && i.collapsible
              , r = o ? t() : n.next()
              , h = s.next()
              , l = {
                oldHeader: s,
                oldPanel: h,
                newHeader: o ? t() : n,
                newPanel: r
            };
            e.preventDefault(),
            a && !i.collapsible || this._trigger("beforeActivate", e, l) === !1 || (i.active = o ? !1 : this.headers.index(n),
            this.active = a ? t() : n,
            this._toggle(l),
            s.removeClass("ui-accordion-header-active ui-state-active"),
            i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),
            a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),
            i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),
            n.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel
              , s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0),
            this.prevShow = i,
            this.prevHide = s,
            this.options.animate ? this._animate(i, s, e) : (s.hide(),
            i.show(),
            this._toggleComplete(e)),
            s.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            s.prev().attr("aria-selected", "false"),
            i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1),
            i.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(t, e, n) {
            var a, o, r, h = this, l = 0, c = t.length && (!e.length || t.index() < e.index()), u = this.options.animate || {}, d = c && u.down || u, p = function() {
                h._toggleComplete(n)
            };
            return "number" == typeof d && (r = d),
            "string" == typeof d && (o = d),
            o = o || d.easing || u.easing,
            r = r || d.duration || u.duration,
            e.length ? t.length ? (a = t.show().outerHeight(),
            e.animate(i, {
                duration: r,
                easing: o,
                step: function(t, e) {
                    e.now = Math.round(t)
                }
            }),
            t.hide().animate(s, {
                duration: r,
                easing: o,
                complete: p,
                step: function(t, i) {
                    i.now = Math.round(t),
                    "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(a - e.outerHeight() - l),
                    l = 0)
                }
            }),
            undefined) : e.animate(i, r, o, p) : t.animate(s, r, o, p)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel;
            e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
            e.length && (e.parent()[0].className = e.parent()[0].className),
            this._trigger("activate", null, t)
        }
    })
}
)(jQuery);
(function(e) {
    var t = 0;
    e.widget("ui.autocomplete", {
        version: "1.10.2",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var t, i, s, n = this.element[0].nodeName.toLowerCase(), a = "textarea" === n, o = "input" === n;
            this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"),
            this.valueMethod = this.element[a || o ? "val" : "text"],
            this.isNewMenu = !0,
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly"))
                        return t = !0,
                        s = !0,
                        i = !0,
                        undefined;
                    t = !1,
                    s = !1,
                    i = !1;
                    var a = e.ui.keyCode;
                    switch (n.keyCode) {
                    case a.PAGE_UP:
                        t = !0,
                        this._move("previousPage", n);
                        break;
                    case a.PAGE_DOWN:
                        t = !0,
                        this._move("nextPage", n);
                        break;
                    case a.UP:
                        t = !0,
                        this._keyEvent("previous", n);
                        break;
                    case a.DOWN:
                        t = !0,
                        this._keyEvent("next", n);
                        break;
                    case a.ENTER:
                    case a.NUMPAD_ENTER:
                        this.menu.active && (t = !0,
                        n.preventDefault(),
                        this.menu.select(n));
                        break;
                    case a.TAB:
                        this.menu.active && this.menu.select(n);
                        break;
                    case a.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term),
                        this.close(n),
                        n.preventDefault());
                        break;
                    default:
                        i = !0,
                        this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (t)
                        return t = !1,
                        s.preventDefault(),
                        undefined;
                    if (!i) {
                        var n = e.ui.keyCode;
                        switch (s.keyCode) {
                        case n.PAGE_UP:
                            this._move("previousPage", s);
                            break;
                        case n.PAGE_DOWN:
                            this._move("nextPage", s);
                            break;
                        case n.UP:
                            this._keyEvent("previous", s);
                            break;
                        case n.DOWN:
                            this._keyEvent("next", s)
                        }
                    }
                },
                input: function(e) {
                    return s ? (s = !1,
                    e.preventDefault(),
                    undefined) : (this._searchTimeout(e),
                    undefined)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(e) {
                    return this.cancelBlur ? (delete this.cancelBlur,
                    undefined) : (clearTimeout(this.searching),
                    this.close(e),
                    this._change(e),
                    undefined)
                }
            }),
            this._initSource(),
            this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                input: e(),
                role: null
            }).hide().data("ui-menu"),
            this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(s) {
                            s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                        })
                    })
                },
                menufocus: function(t, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1,
                    t.originalEvent && /^mouse/.test(t.originalEvent.type)))
                        return this.menu.blur(),
                        this.document.one("mousemove", function() {
                            e(t.target).trigger(t.originalEvent)
                        }),
                        undefined;
                    var s = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {
                        item: s
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                },
                menuselect: function(e, t) {
                    var i = t.item.data("ui-autocomplete-item")
                      , s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(),
                    this.previous = s,
                    this._delay(function() {
                        this.previous = s,
                        this.selectedItem = i
                    })),
                    !1 !== this._trigger("select", e, {
                        item: i
                    }) && this._value(i.value),
                    this.term = this._value(),
                    this.close(e),
                    this.selectedItem = i
                }
            }),
            this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t),
            "source" === e && this._initSource(),
            "appendTo" === e && this.menu.element.appendTo(this._appendTo()),
            "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)),
            t || (t = this.element.closest(".ui-front")),
            t.length || (t = this.document[0].body),
            t
        },
        _initSource: function() {
            var t, i, s = this;
            e.isArray(this.options.source) ? (t = this.options.source,
            this.source = function(i, s) {
                s(e.ui.autocomplete.filter(t, i.term))
            }
            ) : "string" == typeof this.options.source ? (i = this.options.source,
            this.source = function(t, n) {
                s.xhr && s.xhr.abort(),
                s.xhr = e.ajax({
                    url: i,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        n(e)
                    },
                    error: function() {
                        n([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching),
            this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null,
                this.search(null, e))
            }, this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(),
            this.term = this._value(),
            e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : undefined
        },
        _search: function(e) {
            this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var e = this
              , i = ++t;
            return function(s) {
                i === t && e.__response(s),
                e.pending--,
                e.pending || e.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(e) {
            e && (e = this._normalize(e)),
            this._trigger("response", null, {
                content: e
            }),
            !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e),
            this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0,
            this._close(e)
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t),
            this.isNewMenu = !0,
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(e.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var s = this;
            e.each(i, function(e, i) {
                s._renderItemData(t, i)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
        },
        _move: function(e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term),
            this.menu.blur(),
            undefined) : (this.menu[e](t),
            undefined) : (this.search(null, t),
            undefined)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t),
            t.preventDefault())
        }
    }),
    e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function(e) {
                return s.test(e.label || e.value || e)
            })
        }
    }),
    e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var t;
            this._superApply(arguments),
            this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults,
            this.liveRegion.text(t))
        }
    })
}
)(jQuery);
(function(t) {
    var e, i, s, n, a = "ui-button ui-widget ui-state-default ui-corner-all", o = "ui-state-hover ui-state-active ", r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", h = function() {
        var e = t(this).find(":ui-button");
        setTimeout(function() {
            e.button("refresh")
        }, 1)
    }, l = function(e) {
        var i = e.name
          , s = e.form
          , n = t([]);
        return i && (i = i.replace(/'/g, "\\'"),
        n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function() {
            return !this.form
        })),
        n
    };
    t.widget("ui.button", {
        version: "1.10.2",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, h),
            "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled),
            this._determineButtonType(),
            this.hasTitle = !!this.buttonElement.attr("title");
            var o = this
              , r = this.options
              , c = "checkbox" === this.type || "radio" === this.type
              , u = c ? "" : "ui-state-active"
              , d = "ui-state-focus";
            null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()),
            this._hoverable(this.buttonElement),
            this.buttonElement.addClass(a).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                r.disabled || this === e && t(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                r.disabled || t(this).removeClass(u)
            }).bind("click" + this.eventNamespace, function(t) {
                r.disabled && (t.preventDefault(),
                t.stopImmediatePropagation())
            }),
            this.element.bind("focus" + this.eventNamespace, function() {
                o.buttonElement.addClass(d)
            }).bind("blur" + this.eventNamespace, function() {
                o.buttonElement.removeClass(d)
            }),
            c && (this.element.bind("change" + this.eventNamespace, function() {
                n || o.refresh()
            }),
            this.buttonElement.bind("mousedown" + this.eventNamespace, function(t) {
                r.disabled || (n = !1,
                i = t.pageX,
                s = t.pageY)
            }).bind("mouseup" + this.eventNamespace, function(t) {
                r.disabled || (i !== t.pageX || s !== t.pageY) && (n = !0)
            })),
            "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return r.disabled || n ? !1 : undefined
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (r.disabled || n)
                    return !1;
                t(this).addClass("ui-state-active"),
                o.buttonElement.attr("aria-pressed", "true");
                var e = o.element[0];
                l(e).not(e).map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return r.disabled ? !1 : (t(this).addClass("ui-state-active"),
                e = this,
                o.document.one("mouseup", function() {
                    e = null
                }),
                undefined)
            }).bind("mouseup" + this.eventNamespace, function() {
                return r.disabled ? !1 : (t(this).removeClass("ui-state-active"),
                undefined)
            }).bind("keydown" + this.eventNamespace, function(e) {
                return r.disabled ? !1 : ((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"),
                undefined)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                t(this).removeClass("ui-state-active")
            }),
            this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            })),
            this._setOption("disabled", r.disabled),
            this._resetButton()
        },
        _determineButtonType: function() {
            var t, e, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button",
            "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(),
            e = "label[for='" + this.element.attr("id") + "']",
            this.buttonElement = t.find(e),
            this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(),
            this.buttonElement = t.filter(e),
            this.buttonElement.length || (this.buttonElement = t.find(e))),
            this.element.addClass("ui-helper-hidden-accessible"),
            i = this.element.is(":checked"),
            i && this.buttonElement.addClass("ui-state-active"),
            this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"),
            this.buttonElement.removeClass(a + " " + o + " " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(t, e) {
            return this._super(t, e),
            "disabled" === t ? (e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1),
            undefined) : (this._resetButton(),
            undefined)
        },
        refresh: function() {
            var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOption("disabled", e),
            "radio" === this.type ? l(this.element[0]).each(function() {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type)
                return this.options.label && this.element.val(this.options.label),
                undefined;
            var e = this.buttonElement.removeClass(r)
              , i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text()
              , s = this.options.icons
              , n = s.primary && s.secondary
              , a = [];
            s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")),
            s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"),
            s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"),
            this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"),
            this.hasTitle || e.attr("title", t.trim(i)))) : a.push("ui-button-text-only"),
            e.addClass(a.join(" "))
        }
    }),
    t.widget("ui.buttonset", {
        version: "1.10.2",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(t, e) {
            "disabled" === t && this.buttons.button("option", t, e),
            this._super(t, e)
        },
        refresh: function() {
            var e = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"),
            this.buttons.map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}
)(jQuery);
(function(t, e) {
    function i() {
        this._curInst = null,
        this._keyEvent = !1,
        this._disabledInputs = [],
        this._datepickerShowing = !1,
        this._inDialog = !1,
        this._mainDivId = "ui-datepicker-div",
        this._inlineClass = "ui-datepicker-inline",
        this._appendClass = "ui-datepicker-append",
        this._triggerClass = "ui-datepicker-trigger",
        this._dialogClass = "ui-datepicker-dialog",
        this._disableClass = "ui-datepicker-disabled",
        this._unselectableClass = "ui-datepicker-unselectable",
        this._currentClass = "ui-datepicker-current-day",
        this._dayOverClass = "ui-datepicker-days-cell-over",
        this.regional = [],
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        },
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        },
        t.extend(this._defaults, this.regional[""]),
        this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function s(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(i, "mouseout", function() {
            t(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function() {
            t.datepicker._isDisabledDatepicker(a.inline ? e.parent()[0] : a.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
            t(this).addClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        })
    }
    function n(e, i) {
        t.extend(e, i);
        for (var s in i)
            null == i[s] && (e[s] = i[s]);
        return e
    }
    t.extend(t.ui, {
        datepicker: {
            version: "1.10.2"
        }
    });
    var a, r = "datepicker", o = (new Date).getTime();
    t.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return n(this._defaults, t || {}),
            this
        },
        _attachDatepicker: function(e, i) {
            var s, n, a;
            s = e.nodeName.toLowerCase(),
            n = "div" === s || "span" === s,
            e.id || (this.uuid += 1,
            e.id = "dp" + this.uuid),
            a = this._newInst(t(e), n),
            a.settings = t.extend({}, i || {}),
            "input" === s ? this._connectDatepicker(e, a) : n && this._inlineDatepicker(e, a)
        },
        _newInst: function(e, i) {
            var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: n,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var s = t(e);
            i.append = t([]),
            i.trigger = t([]),
            s.hasClass(this.markerClassName) || (this._attachments(s, i),
            s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),
            this._autoSize(i),
            t.data(e, r, i),
            i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var s, n, a, r = this._get(i, "appendText"), o = this._get(i, "isRTL");
            i.append && i.append.remove(),
            r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"),
            e[o ? "before" : "after"](i.append)),
            e.unbind("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            s = this._get(i, "showOn"),
            ("focus" === s || "both" === s) && e.focus(this._showDatepicker),
            ("button" === s || "both" === s) && (n = this._get(i, "buttonText"),
            a = this._get(i, "buttonImage"),
            i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: a,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(a ? t("<img/>").attr({
                src: a,
                alt: n,
                title: n
            }) : n)),
            e[o ? "before" : "after"](i.trigger),
            i.trigger.click(function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(),
                t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]),
                !1
            }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, a = new Date(2009,11,20), r = this._get(t, "dateFormat");
                r.match(/[DM]/) && (e = function(t) {
                    for (i = 0,
                    s = 0,
                    n = 0; t.length > n; n++)
                        t[n].length > i && (i = t[n].length,
                        s = n);
                    return s
                }
                ,
                a.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                a.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())),
                t.input.attr("size", this._formatDate(t, a).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv),
            t.data(e, r, i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(e),
            i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, s, a, o) {
            var h, l, c, u, d, p = this._dialogInst;
            return p || (this.uuid += 1,
            h = "dp" + this.uuid,
            this._dialogInput = t("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"),
            this._dialogInput.keydown(this._doKeyDown),
            t("body").append(this._dialogInput),
            p = this._dialogInst = this._newInst(this._dialogInput, !1),
            p.settings = {},
            t.data(this._dialogInput[0], r, p)),
            n(p.settings, a || {}),
            i = i && i.constructor === Date ? this._formatDate(p, i) : i,
            this._dialogInput.val(i),
            this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null,
            this._pos || (l = document.documentElement.clientWidth,
            c = document.documentElement.clientHeight,
            u = document.documentElement.scrollLeft || document.body.scrollLeft,
            d = document.documentElement.scrollTop || document.body.scrollTop,
            this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]),
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            p.settings.onSelect = s,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            t.blockUI && t.blockUI(this.dpDiv),
            t.data(this._dialogInput[0], r, p),
            this
        },
        _destroyDatepicker: function(e) {
            var i, s = t(e), n = t.data(e, r);
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
            t.removeData(e, r),
            "input" === i ? (n.append.remove(),
            n.trigger.remove(),
            s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(e) {
            var i, s, n = t(e), a = t.data(e, r);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
            "input" === i ? (e.disabled = !1,
            a.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass),
            s.children().removeClass("ui-state-disabled"),
            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
            this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function(e) {
            var i, s, n = t(e), a = t.data(e, r);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(),
            "input" === i ? (e.disabled = !0,
            a.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass),
            s.children().addClass("ui-state-disabled"),
            s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
            this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }),
            this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t)
                return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t)
                    return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return t.data(e, r)
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(i, s, a) {
            var r, o, h, l, c = this._getInst(i);
            return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? t.extend({}, t.datepicker._defaults) : c ? "all" === s ? t.extend({}, c.settings) : this._get(c, s) : null : (r = s || {},
            "string" == typeof s && (r = {},
            r[s] = a),
            c && (this._curInst === c && this._hideDatepicker(),
            o = this._getDateDatepicker(i, !0),
            h = this._getMinMaxDate(c, "min"),
            l = this._getMinMaxDate(c, "max"),
            n(c.settings, r),
            null !== h && r.dateFormat !== e && r.minDate === e && (c.settings.minDate = this._formatDate(c, h)),
            null !== l && r.dateFormat !== e && r.maxDate === e && (c.settings.maxDate = this._formatDate(c, l)),
            "disabled"in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)),
            this._attachments(t(i), c),
            this._autoSize(c),
            this._setDate(c, o),
            this._updateAlternate(c),
            this._updateDatepicker(c)),
            e)
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e),
            this._updateDatepicker(i),
            this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e),
            i ? this._getDate(i) : null
        },
        _doKeyDown: function(e) {
            var i, s, n, a = t.datepicker._getInst(e.target), r = !0, o = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0,
            t.datepicker._datepickerShowing)
                switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(),
                    r = !1;
                    break;
                case 13:
                    return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", a.dpDiv),
                    n[0] && t.datepicker._selectDay(e.target, a.selectedMonth, a.selectedYear, n[0]),
                    i = t.datepicker._get(a, "onSelect"),
                    i ? (s = t.datepicker._formatDate(a),
                    i.apply(a.input ? a.input[0] : null, [s, a])) : t.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                    r = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                    r = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? 1 : -1, "D"),
                    r = e.ctrlKey || e.metaKey,
                    e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"),
                    r = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? -1 : 1, "D"),
                    r = e.ctrlKey || e.metaKey,
                    e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"),
                    r = e.ctrlKey || e.metaKey;
                    break;
                default:
                    r = !1
                }
            else
                36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
            r && (e.preventDefault(),
            e.stopPropagation())
        },
        _doKeyPress: function(i) {
            var s, n, a = t.datepicker._getInst(i.target);
            return t.datepicker._get(a, "constrainInput") ? (s = t.datepicker._possibleChars(t.datepicker._get(a, "dateFormat")),
            n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode),
            i.ctrlKey || i.metaKey || " " > n || !s || s.indexOf(n) > -1) : e
        },
        _doKeyUp: function(e) {
            var i, s = t.datepicker._getInst(e.target);
            if (s.input.val() !== s.lastVal)
                try {
                    i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)),
                    i && (t.datepicker._setDateFromField(s),
                    t.datepicker._updateAlternate(s),
                    t.datepicker._updateDatepicker(s))
                } catch (n) {}
            return !0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e,
            "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]),
            !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var i, s, a, r, o, h, l;
                i = t.datepicker._getInst(e),
                t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0),
                i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
                s = t.datepicker._get(i, "beforeShow"),
                a = s ? s.apply(e, [e, i]) : {},
                a !== !1 && (n(i.settings, a),
                i.lastVal = null,
                t.datepicker._lastInput = e,
                t.datepicker._setDateFromField(i),
                t.datepicker._inDialog && (e.value = ""),
                t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e),
                t.datepicker._pos[1] += e.offsetHeight),
                r = !1,
                t(e).parents().each(function() {
                    return r |= "fixed" === t(this).css("position"),
                    !r
                }),
                o = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                },
                t.datepicker._pos = null,
                i.dpDiv.empty(),
                i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }),
                t.datepicker._updateDatepicker(i),
                o = t.datepicker._checkOffset(i, o, r),
                i.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: o.left + "px",
                    top: o.top + "px"
                }),
                i.inline || (h = t.datepicker._get(i, "showAnim"),
                l = t.datepicker._get(i, "duration"),
                i.dpDiv.zIndex(t(e).zIndex() + 1),
                t.datepicker._datepickerShowing = !0,
                t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null),
                i.input.is(":visible") && !i.input.is(":disabled") && i.input.focus(),
                t.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4,
            a = e,
            e.dpDiv.empty().append(this._generateHTML(e)),
            this._attachHandlers(e),
            e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, s = this._getNumberOfMonths(e), n = s[1], r = 17;
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
            n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", r * n + "em"),
            e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
            e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
            e === t.datepicker._curInst && t.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] !== document.activeElement && e.input.focus(),
            e.yearshtml && (i = e.yearshtml,
            setTimeout(function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),
                i = e.yearshtml = null
            }, 0))
        },
        _getBorders: function(t) {
            var e = function(t) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[t] || t
            };
            return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
        },
        _checkOffset: function(e, i, s) {
            var n = e.dpDiv.outerWidth()
              , a = e.dpDiv.outerHeight()
              , r = e.input ? e.input.outerWidth() : 0
              , o = e.input ? e.input.outerHeight() : 0
              , h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft())
              , l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - r : 0,
            i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0,
            i.top -= s && i.top === e.input.offset().top + o ? t(document).scrollTop() : 0,
            i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0),
            i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + o) : 0),
            i
        },
        _findPos: function(e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); )
                e = e[n ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(),
            [i.left, i.top]
        },
        _hideDatepicker: function(e) {
            var i, s, n, a, o = this._curInst;
            !o || e && o !== t.data(e, r) || this._datepickerShowing && (i = this._get(o, "showAnim"),
            s = this._get(o, "duration"),
            n = function() {
                t.datepicker._tidyDialog(o)
            }
            ,
            t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n),
            i || n(),
            this._datepickerShowing = !1,
            a = this._get(o, "onClose"),
            a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]),
            this._lastInput = null,
            this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }),
            t.blockUI && (t.unblockUI(),
            t("body").append(this.dpDiv))),
            this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target)
                  , s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, s) {
            var n = t(e)
              , a = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s),
            this._updateDatepicker(a))
        },
        _gotoToday: function(e) {
            var i, s = t(e), n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay,
            n.drawMonth = n.selectedMonth = n.currentMonth,
            n.drawYear = n.selectedYear = n.currentYear) : (i = new Date,
            n.selectedDay = i.getDate(),
            n.drawMonth = n.selectedMonth = i.getMonth(),
            n.drawYear = n.selectedYear = i.getFullYear()),
            this._notifyChange(n),
            this._adjustDate(s)
        },
        _selectMonthYear: function(e, i, s) {
            var n = t(e)
              , a = this._getInst(n[0]);
            a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10),
            this._notifyChange(a),
            this._adjustDate(n)
        },
        _selectDay: function(e, i, s, n) {
            var a, r = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (a = this._getInst(r[0]),
            a.selectedDay = a.currentDay = t("a", n).html(),
            a.selectedMonth = a.currentMonth = i,
            a.selectedYear = a.currentYear = s,
            this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var s, n = t(e), a = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(a),
            a.input && a.input.val(i),
            this._updateAlternate(a),
            s = this._get(a, "onSelect"),
            s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"),
            a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(),
            this._lastInput = a.input[0],
            "object" != typeof a.input[0] && a.input.focus(),
            this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, s, n, a = this._get(e, "altField");
            a && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
            s = this._getDate(e),
            n = this.formatDate(i, s, this._getFormatConfig(e)),
            t(a).each(function() {
                t(this).val(n)
            }))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
            e = i.getTime(),
            i.setMonth(0),
            i.setDate(1),
            Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(i, s, n) {
            if (null == i || null == s)
                throw "Invalid arguments";
            if (s = "object" == typeof s ? "" + s : s + "",
            "" === s)
                return null;
            var a, r, o, h, l = 0, c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10), d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, p = (n ? n.dayNames : null) || this._defaults.dayNames, f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, m = (n ? n.monthNames : null) || this._defaults.monthNames, g = -1, v = -1, _ = -1, b = -1, y = !1, w = function(t) {
                var e = i.length > a + 1 && i.charAt(a + 1) === t;
                return e && a++,
                e
            }, k = function(t) {
                var e = w(t)
                  , i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2
                  , n = RegExp("^\\d{1," + i + "}")
                  , a = s.substring(l).match(n);
                if (!a)
                    throw "Missing number at position " + l;
                return l += a[0].length,
                parseInt(a[0], 10)
            }, x = function(i, n, a) {
                var r = -1
                  , o = t.map(w(i) ? a : n, function(t, e) {
                    return [[e, t]]
                }).sort(function(t, e) {
                    return -(t[1].length - e[1].length)
                });
                if (t.each(o, function(t, i) {
                    var n = i[1];
                    return s.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (r = i[0],
                    l += n.length,
                    !1) : e
                }),
                -1 !== r)
                    return r + 1;
                throw "Unknown name at position " + l
            }, D = function() {
                if (s.charAt(l) !== i.charAt(a))
                    throw "Unexpected literal at position " + l;
                l++
            };
            for (a = 0; i.length > a; a++)
                if (y)
                    "'" !== i.charAt(a) || w("'") ? D() : y = !1;
                else
                    switch (i.charAt(a)) {
                    case "d":
                        _ = k("d");
                        break;
                    case "D":
                        x("D", d, p);
                        break;
                    case "o":
                        b = k("o");
                        break;
                    case "m":
                        v = k("m");
                        break;
                    case "M":
                        v = x("M", f, m);
                        break;
                    case "y":
                        g = k("y");
                        break;
                    case "@":
                        h = new Date(k("@")),
                        g = h.getFullYear(),
                        v = h.getMonth() + 1,
                        _ = h.getDate();
                        break;
                    case "!":
                        h = new Date((k("!") - this._ticksTo1970) / 1e4),
                        g = h.getFullYear(),
                        v = h.getMonth() + 1,
                        _ = h.getDate();
                        break;
                    case "'":
                        w("'") ? D() : y = !0;
                        break;
                    default:
                        D()
                    }
            if (s.length > l && (o = s.substr(l),
            !/^\s+/.test(o)))
                throw "Extra/unparsed characters found in date: " + o;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= g ? 0 : -100)),
            b > -1)
                for (v = 1,
                _ = b; ; ) {
                    if (r = this._getDaysInMonth(g, v - 1),
                    r >= _)
                        break;
                    v++,
                    _ -= r
                }
            if (h = this._daylightSavingAdjust(new Date(g,v - 1,_)),
            h.getFullYear() !== g || h.getMonth() + 1 !== v || h.getDate() !== _)
                throw "Invalid date";
            return h
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e)
                return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, a = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, o = (i ? i.monthNames : null) || this._defaults.monthNames, h = function(e) {
                var i = t.length > s + 1 && t.charAt(s + 1) === e;
                return i && s++,
                i
            }, l = function(t, e, i) {
                var s = "" + e;
                if (h(t))
                    for (; i > s.length; )
                        s = "0" + s;
                return s
            }, c = function(t, e, i, s) {
                return h(t) ? s[e] : i[e]
            }, u = "", d = !1;
            if (e)
                for (s = 0; t.length > s; s++)
                    if (d)
                        "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
                    else
                        switch (t.charAt(s)) {
                        case "d":
                            u += l("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), n, a);
                            break;
                        case "o":
                            u += l("o", Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime() - new Date(e.getFullYear(),0,0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += l("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), r, o);
                            break;
                        case "y":
                            u += h("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(s)
                        }
            return u
        },
        _possibleChars: function(t) {
            var e, i = "", s = !1, n = function(i) {
                var s = t.length > e + 1 && t.charAt(e + 1) === i;
                return s && e++,
                s
            };
            for (e = 0; t.length > e; e++)
                if (s)
                    "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                else
                    switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += t.charAt(e)
                    }
            return i
        },
        _get: function(t, i) {
            return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat")
                  , s = t.lastVal = t.input ? t.input.val() : null
                  , n = this._getDefaultDate(t)
                  , a = n
                  , r = this._getFormatConfig(t);
                try {
                    a = this.parseDate(i, s, r) || n
                } catch (o) {
                    s = e ? "" : s
                }
                t.selectedDay = a.getDate(),
                t.drawMonth = t.selectedMonth = a.getMonth(),
                t.drawYear = t.selectedYear = a.getFullYear(),
                t.currentDay = s ? a.getDate() : 0,
                t.currentMonth = s ? a.getMonth() : 0,
                t.currentYear = s ? a.getFullYear() : 0,
                this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(e, i, s) {
            var n = function(t) {
                var e = new Date;
                return e.setDate(e.getDate() + t),
                e
            }
              , a = function(i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                } catch (s) {}
                for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, a = n.getFullYear(), r = n.getMonth(), o = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l; ) {
                    switch (l[2] || "d") {
                    case "d":
                    case "D":
                        o += parseInt(l[1], 10);
                        break;
                    case "w":
                    case "W":
                        o += 7 * parseInt(l[1], 10);
                        break;
                    case "m":
                    case "M":
                        r += parseInt(l[1], 10),
                        o = Math.min(o, t.datepicker._getDaysInMonth(a, r));
                        break;
                    case "y":
                    case "Y":
                        a += parseInt(l[1], 10),
                        o = Math.min(o, t.datepicker._getDaysInMonth(a, r))
                    }
                    l = h.exec(i)
                }
                return new Date(a,r,o)
            }
              , r = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return r = r && "Invalid Date" == "" + r ? s : r,
            r && (r.setHours(0),
            r.setMinutes(0),
            r.setSeconds(0),
            r.setMilliseconds(0)),
            this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0),
            t) : null
        },
        _setDate: function(t, e, i) {
            var s = !e
              , n = t.selectedMonth
              , a = t.selectedYear
              , r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = r.getDate(),
            t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(),
            t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(),
            n === t.selectedMonth && a === t.selectedYear || i || this._notifyChange(t),
            this._adjustInstDate(t),
            t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
            return e
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths")
              , s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        window["DP_jQuery_" + o].datepicker._adjustDate(s, -i, "M")
                    },
                    next: function() {
                        window["DP_jQuery_" + o].datepicker._adjustDate(s, +i, "M")
                    },
                    hide: function() {
                        window["DP_jQuery_" + o].datepicker._hideDatepicker()
                    },
                    today: function() {
                        window["DP_jQuery_" + o].datepicker._gotoToday(s)
                    },
                    selectDay: function() {
                        return window["DP_jQuery_" + o].datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return window["DP_jQuery_" + o].datepicker._selectMonthYear(s, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return window["DP_jQuery_" + o].datepicker._selectMonthYear(s, this, "Y"),
                        !1
                    }
                };
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, s, n, a, r, o, h, l, c, u, d, p, f, m, g, v, _, b, y, w, k, x, D, T, C, S, M, N, I, P, A, z, H, E, F, O, W, j, R = new Date, L = this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())), Y = this._get(t, "isRTL"), B = this._get(t, "showButtonPanel"), J = this._get(t, "hideIfNoPrevNext"), Q = this._get(t, "navigationAsDateFormat"), K = this._getNumberOfMonths(t), V = this._get(t, "showCurrentAtPos"), U = this._get(t, "stepMonths"), q = 1 !== K[0] || 1 !== K[1], X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear,t.currentMonth,t.currentDay) : new Date(9999,9,9)), G = this._getMinMaxDate(t, "min"), $ = this._getMinMaxDate(t, "max"), Z = t.drawMonth - V, te = t.drawYear;
            if (0 > Z && (Z += 12,
            te--),
            $)
                for (e = this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth() - K[0] * K[1] + 1,$.getDate())),
                e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te,Z,1)) > e; )
                    Z--,
                    0 > Z && (Z = 11,
                    te--);
            for (t.drawMonth = Z,
            t.drawYear = te,
            i = this._get(t, "prevText"),
            i = Q ? this.formatDate(i, this._daylightSavingAdjust(new Date(te,Z - U,1)), this._getFormatConfig(t)) : i,
            s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>",
            n = this._get(t, "nextText"),
            n = Q ? this.formatDate(n, this._daylightSavingAdjust(new Date(te,Z + U,1)), this._getFormatConfig(t)) : n,
            a = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>",
            r = this._get(t, "currentText"),
            o = this._get(t, "gotoCurrent") && t.currentDay ? X : L,
            r = Q ? this.formatDate(r, o, this._getFormatConfig(t)) : r,
            h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>",
            l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (Y ? "" : h) + "</div>" : "",
            c = parseInt(this._get(t, "firstDay"), 10),
            c = isNaN(c) ? 0 : c,
            u = this._get(t, "showWeek"),
            d = this._get(t, "dayNames"),
            p = this._get(t, "dayNamesMin"),
            f = this._get(t, "monthNames"),
            m = this._get(t, "monthNamesShort"),
            g = this._get(t, "beforeShowDay"),
            v = this._get(t, "showOtherMonths"),
            _ = this._get(t, "selectOtherMonths"),
            b = this._getDefaultDate(t),
            y = "",
            k = 0; K[0] > k; k++) {
                for (x = "",
                this.maxRows = 4,
                D = 0; K[1] > D; D++) {
                    if (T = this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),
                    C = " ui-corner-all",
                    S = "",
                    q) {
                        if (S += "<div class='ui-datepicker-group",
                        K[1] > 1)
                            switch (D) {
                            case 0:
                                S += " ui-datepicker-group-first",
                                C = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case K[1] - 1:
                                S += " ui-datepicker-group-last",
                                C = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                S += " ui-datepicker-group-middle",
                                C = ""
                            }
                        S += "'>"
                    }
                    for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === k ? Y ? a : s : "") + (/all|right/.test(C) && 0 === k ? Y ? s : a : "") + this._generateMonthYearHeader(t, Z, te, G, $, k > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>",
                    M = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                    w = 0; 7 > w; w++)
                        N = (w + c) % 7,
                        M += "<th" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[N] + "'>" + p[N] + "</span></th>";
                    for (S += M + "</tr></thead><tbody>",
                    I = this._getDaysInMonth(te, Z),
                    te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)),
                    P = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7,
                    A = Math.ceil((P + I) / 7),
                    z = q ? this.maxRows > A ? this.maxRows : A : A,
                    this.maxRows = z,
                    H = this._daylightSavingAdjust(new Date(te,Z,1 - P)),
                    E = 0; z > E; E++) {
                        for (S += "<tr>",
                        F = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "",
                        w = 0; 7 > w; w++)
                            O = g ? g.apply(t.input ? t.input[0] : null, [H]) : [!0, ""],
                            W = H.getMonth() !== Z,
                            j = W && !_ || !O[0] || G && G > H || $ && H > $,
                            F += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (H.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === H.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + O[1] + (H.getTime() === X.getTime() ? " " + this._currentClass : "") + (H.getTime() === L.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === L.getTime() ? " ui-state-highlight" : "") + (H.getTime() === X.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>",
                            H.setDate(H.getDate() + 1),
                            H = this._daylightSavingAdjust(H);
                        S += F + "</tr>"
                    }
                    Z++,
                    Z > 11 && (Z = 0,
                    te++),
                    S += "</tbody></table>" + (q ? "</div>" + (K[0] > 0 && D === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""),
                    x += S
                }
                y += x
            }
            return y += l,
            t._keyEvent = !1,
            y
        },
        _generateMonthYearHeader: function(t, e, i, s, n, a, r, o) {
            var h, l, c, u, d, p, f, m, g = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), _ = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
            if (a || !g)
                y += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
            else {
                for (h = s && s.getFullYear() === i,
                l = n && n.getFullYear() === i,
                y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                c = 0; 12 > c; c++)
                    (!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + o[c] + "</option>");
                y += "</select>"
            }
            if (_ || (b += y + (!a && g && v ? "" : "&#xa0;")),
            !t.yearshtml)
                if (t.yearshtml = "",
                a || !v)
                    b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"),
                    d = (new Date).getFullYear(),
                    p = function(t) {
                        var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                        return isNaN(e) ? d : e
                    }
                    ,
                    f = p(u[0]),
                    m = Math.max(f, p(u[1] || "")),
                    f = s ? Math.max(f, s.getFullYear()) : f,
                    m = n ? Math.min(m, n.getFullYear()) : m,
                    t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++)
                        t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>",
                    b += t.yearshtml,
                    t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"),
            _ && (b += (!a && g && v ? "" : "&#xa0;") + y),
            b += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.drawYear + ("Y" === i ? e : 0)
              , n = t.drawMonth + ("M" === i ? e : 0)
              , a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0)
              , r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s,n,a)));
            t.selectedDay = r.getDate(),
            t.drawMonth = t.selectedMonth = r.getMonth(),
            t.drawYear = t.selectedYear = r.getFullYear(),
            ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min")
              , s = this._getMinMaxDate(t, "max")
              , n = i && i > e ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t,e,32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t,e,1).getDay()
        },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t)
              , a = this._daylightSavingAdjust(new Date(i,s + (0 > e ? e : n[0] * n[1]),1));
            return 0 > e && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())),
            this._isInRange(t, a)
        },
        _isInRange: function(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"), a = this._getMinMaxDate(t, "max"), r = null, o = null, h = this._get(t, "yearRange");
            return h && (i = h.split(":"),
            s = (new Date).getFullYear(),
            r = parseInt(i[0], 10),
            o = parseInt(i[1], 10),
            i[0].match(/[+\-].*/) && (r += s),
            i[1].match(/[+\-].*/) && (o += s)),
            (!n || e.getTime() >= n.getTime()) && (!a || e.getTime() <= a.getTime()) && (!r || e.getFullYear() >= r) && (!o || o >= e.getFullYear())
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
            {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, s) {
            e || (t.currentDay = t.selectedDay,
            t.currentMonth = t.selectedMonth,
            t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s,i,e)) : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }),
    t.fn.datepicker = function(e) {
        if (!this.length)
            return this;
        t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick),
        t.datepicker.initialized = !0),
        0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }
    ,
    t.datepicker = new i,
    t.datepicker.initialized = !1,
    t.datepicker.uuid = (new Date).getTime(),
    t.datepicker.version = "1.10.2",
    window["DP_jQuery_" + o] = t
}
)(jQuery);
(function(t) {
    var e = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }
      , i = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
    };
    t.widget("ui.dialog", {
        version: "1.10.2",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            },
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            },
            this.originalTitle = this.element.attr("title"),
            this.options.title = this.options.title || this.originalTitle,
            this._createWrapper(),
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),
            this._createTitlebar(),
            this._createButtonPane(),
            this.options.draggable && t.fn.draggable && this._makeDraggable(),
            this.options.resizable && t.fn.resizable && this._makeResizable(),
            this._isOpen = !1
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._destroyOverlay(),
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),
            this.uiDialog.stop(!0, !0).remove(),
            this.originalTitle && this.element.attr("title", this.originalTitle),
            t = e.parent.children().eq(e.index),
            t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1,
            this._destroyOverlay(),
            this.opener.filter(":focusable").focus().length || t(this.document[0].activeElement).blur(),
            this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", e)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, e) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !e && this._trigger("focus", t),
            i
        },
        open: function() {
            var e = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(),
            undefined) : (this._isOpen = !0,
            this.opener = t(this.document[0].activeElement),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this._show(this.uiDialog, this.options.show, function() {
                e._focusTabbable(),
                e._trigger("focus")
            }),
            this._trigger("open"),
            undefined)
        },
        _focusTabbable: function() {
            var t = this.element.find("[autofocus]");
            t.length || (t = this.element.find(":tabbable")),
            t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
            t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
            t.length || (t = this.uiDialog),
            t.eq(0).focus()
        },
        _keepFocus: function(e) {
            function i() {
                var e = this.document[0].activeElement
                  , i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                i || this._focusTabbable()
            }
            e.preventDefault(),
            i.call(this),
            this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()),
            this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE)
                        return e.preventDefault(),
                        this.close(e),
                        undefined;
                    if (e.keyCode === t.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable")
                          , s = i.filter(":first")
                          , n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (n.focus(1),
                        e.preventDefault()) : (s.focus(1),
                        e.preventDefault())
                    }
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }),
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),
            this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }),
            this.uiDialogTitlebarClose = t("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),
            this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(),
                    this.close(t)
                }
            }),
            e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),
            this._title(e),
            this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            })
        },
        _title: function(t) {
            this.options.title || t.html("&#160;"),
            t.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
            this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),
            this._createButtons()
        },
        _createButtons: function() {
            var e = this
              , i = this.options.buttons;
            return this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"),
            undefined) : (t.each(i, function(i, s) {
                var n, a;
                s = t.isFunction(s) ? {
                    click: s,
                    text: i
                } : s,
                s = t.extend({
                    type: "button"
                }, s),
                n = s.click,
                s.click = function() {
                    n.apply(e.element[0], arguments)
                }
                ,
                a = {
                    icons: s.icons,
                    text: s.showText
                },
                delete s.icons,
                delete s.showText,
                t("<button></button>", s).button(a).appendTo(e.uiButtonSet)
            }),
            this.uiDialog.addClass("ui-dialog-buttons"),
            this.uiDialogButtonPane.appendTo(this.uiDialog),
            undefined)
        },
        _makeDraggable: function() {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var i = this
              , s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(s, n) {
                    t(this).addClass("ui-dialog-dragging"),
                    i._blockFrames(),
                    i._trigger("dragStart", s, e(n))
                },
                drag: function(t, s) {
                    i._trigger("drag", t, e(s))
                },
                stop: function(n, a) {
                    s.position = [a.position.left - i.document.scrollLeft(), a.position.top - i.document.scrollTop()],
                    t(this).removeClass("ui-dialog-dragging"),
                    i._unblockFrames(),
                    i._trigger("dragStop", n, e(a))
                }
            })
        },
        _makeResizable: function() {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            var i = this
              , s = this.options
              , n = s.resizable
              , a = this.uiDialog.css("position")
              , o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function(s, n) {
                    t(this).addClass("ui-dialog-resizing"),
                    i._blockFrames(),
                    i._trigger("resizeStart", s, e(n))
                },
                resize: function(t, s) {
                    i._trigger("resize", t, e(s))
                },
                stop: function(n, a) {
                    s.height = t(this).height(),
                    s.width = t(this).width(),
                    t(this).removeClass("ui-dialog-resizing"),
                    i._unblockFrames(),
                    i._trigger("resizeStop", n, e(a))
                }
            }).css("position", a)
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(),
            this.uiDialog.position(this.options.position),
            t || this.uiDialog.hide()
        },
        _setOptions: function(s) {
            var n = this
              , a = !1
              , o = {};
            t.each(s, function(t, s) {
                n._setOption(t, s),
                t in e && (a = !0),
                t in i && (o[t] = s)
            }),
            a && (this._size(),
            this._position()),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o)
        },
        _setOption: function(t, e) {
            var i, s, n = this.uiDialog;
            "dialogClass" === t && n.removeClass(this.options.dialogClass).addClass(e),
            "disabled" !== t && (this._super(t, e),
            "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
            "buttons" === t && this._createButtons(),
            "closeText" === t && this.uiDialogTitlebarClose.button({
                label: "" + e
            }),
            "draggable" === t && (i = n.is(":data(ui-draggable)"),
            i && !e && n.draggable("destroy"),
            !i && e && this._makeDraggable()),
            "position" === t && this._position(),
            "resizable" === t && (s = n.is(":data(ui-resizable)"),
            s && !e && n.resizable("destroy"),
            s && "string" == typeof e && n.resizable("option", "handles", e),
            s || e === !1 || this._makeResizable()),
            "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, e, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }),
            s.minWidth > s.width && (s.width = s.minWidth),
            t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(),
            e = Math.max(0, s.minHeight - t),
            i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none",
            "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _allowInteraction: function(e) {
            return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = this
                  , i = this.widgetFullName;
                t.ui.dialog.overlayInstances || this._delay(function() {
                    t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(s) {
                        e._allowInteraction(s) || (s.preventDefault(),
                        t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                }),
                this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }),
                t.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function() {
            this.options.modal && this.overlay && (t.ui.dialog.overlayInstances--,
            t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"),
            this.overlay.remove(),
            this.overlay = null)
        }
    }),
    t.ui.dialog.overlayInstances = 0,
    t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
        _position: function() {
            var e, i = this.options.position, s = [], n = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0"in i) && (s = i.split ? i.split(" ") : [i[0], i[1]],
            1 === s.length && (s[1] = s[0]),
            t.each(["left", "top"], function(t, e) {
                +s[t] === s[t] && (n[t] = s[t],
                s[t] = e)
            }),
            i = {
                my: s[0] + (0 > n[0] ? n[0] : "+" + n[0]) + " " + s[1] + (0 > n[1] ? n[1] : "+" + n[1]),
                at: s.join(" ")
            }),
            i = t.extend({}, t.ui.dialog.prototype.options.position, i)) : i = t.ui.dialog.prototype.options.position,
            e = this.uiDialog.is(":visible"),
            e || this.uiDialog.show(),
            this.uiDialog.position(i),
            e || this.uiDialog.hide()
        }
    })
}
)(jQuery);
(function(t) {
    t.widget("ui.menu", {
        version: "1.10.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.mouseHandled = !1,
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function(t) {
                this.options.disabled && t.preventDefault()
            }, this)),
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
            this._on({
                "mousedown .ui-menu-item > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-state-disabled > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0,
                    this.select(e),
                    i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]),
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"),
                    this.focus(e, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e),
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }),
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var s, n, a, o, r, h = !0;
            switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case t.ui.keyCode.UP:
                this.previous(e);
                break;
            case t.ui.keyCode.DOWN:
                this.next(e);
                break;
            case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                h = !1,
                n = this.previousFilter || "",
                a = String.fromCharCode(e.keyCode),
                o = !1,
                clearTimeout(this.filterTimer),
                a === n ? o = !0 : a = n + a,
                r = RegExp("^" + i(a), "i"),
                s = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return r.test(t(this).children("a").text())
                }),
                s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s,
                s.length || (a = String.fromCharCode(e.keyCode),
                r = RegExp("^" + i(a), "i"),
                s = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return r.test(t(this).children("a").text())
                })),
                s.length ? (this.focus(e, s),
                s.length > 1 ? (this.previousFilter = a,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            h && e.preventDefault()
        },
        _activate: function(t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e, i = this.options.icons.submenu, s = this.element.find(this.options.menus);
            s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this)
                  , s = e.prev("a")
                  , n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(n),
                e.attr("aria-labelledby", s.attr("id"))
            }),
            e = s.add(this.element),
            e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            e.children(":not(.ui-menu-item)").each(function() {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }),
            e.children(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),
            this._super(t, e)
        },
        focus: function(t, e) {
            var i, s;
            this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            this.active = e.first(),
            s = this.active.children("a").addClass("ui-state-focus"),
            this.options.role && this.element.attr("aria-activedescendant", s.attr("id")),
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),
            t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay),
            i = e.children(".ui-menu"),
            i.length && /^mouse/.test(t.type) && this._startOpening(i),
            this.activeMenu = e.parent(),
            this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i, s, n, a, o, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0,
            s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0,
            n = e.offset().top - this.activeMenu.offset().top - i - s,
            a = this.activeMenu.scrollTop(),
            o = this.activeMenu.height(),
            r = e.height(),
            0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer),
            this.active && (this.active.children("a").removeClass("ui-state-focus"),
            this.active = null,
            this._trigger("blur", t, {
                item: this.active
            }))
        },
        _startOpening: function(t) {
            clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(),
                this._open(t)
            }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element),
                this._close(s),
                this.blur(e),
                this.activeMenu = s
            }, this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element),
            t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(),
            this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()),
            this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
            s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()),
            this.focus(i, s)
        },
        nextPage: function(e) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top,
            n = this.element.height(),
            this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this),
                0 > i.offset().top - s - n
            }),
            this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())),
            undefined) : (this.next(e),
            undefined)
        },
        previousPage: function(e) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top,
            n = this.element.height(),
            this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this),
                i.offset().top - s + n > 0
            }),
            this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())),
            undefined) : (this.next(e),
            undefined)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, i)
        }
    })
}
)(jQuery);
(function(t, e) {
    t.widget("ui.progressbar", {
        version: "1.10.2",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(),
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }),
            this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
            this.valueDiv.remove()
        },
        value: function(t) {
            return t === e ? this.options.value : (this.options.value = this._constrainedValue(t),
            this._refreshValue(),
            e)
        },
        _constrainedValue: function(t) {
            return t === e && (t = this.options.value),
            this.indeterminate = t === !1,
            "number" != typeof t && (t = 0),
            this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value,
            this._super(t),
            this.options.value = this._constrainedValue(e),
            this._refreshValue()
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)),
            this._super(t, e)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var e = this.options.value
              , i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"),
            this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate),
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
            this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }),
            this.overlayDiv && (this.overlayDiv.remove(),
            this.overlayDiv = null)),
            this.oldValue !== e && (this.oldValue = e,
            this._trigger("change")),
            e === this.options.max && this._trigger("complete")
        }
    })
}
)(jQuery);
(function(t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.2",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1,
            this._mouseSliding = !1,
            this._animateOff = !0,
            this._handleIndex = null,
            this._detectOrientation(),
            this._mouseInit(),
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"),
            this._refresh(),
            this._setOption("disabled", this.options.disabled),
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function() {
            var e, i, s = this.options, n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", o = [];
            for (i = s.values && s.values.length || 1,
            n.length > i && (n.slice(i).remove(),
            n = n.slice(0, i)),
            e = n.length; i > e; e++)
                o.push(a);
            this.handles = n.add(t(o.join("")).appendTo(this.element)),
            this.handle = this.handles.eq(0),
            this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function() {
            var e = this.options
              , i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element),
            i = "ui-slider-range ui-widget-header ui-corner-all"),
            this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : this.range = t([])
        },
        _setupEvents: function() {
            var t = this.handles.add(this.range).filter("a");
            this._off(t),
            this._on(t, this._handleEvents),
            this._hoverable(t),
            this._focusable(t)
        },
        _destroy: function() {
            this.handles.remove(),
            this.range.remove(),
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
            this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, s, n, a, o, r, h, l, u = this, c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            i = {
                x: e.pageX,
                y: e.pageY
            },
            s = this._normValueFromMouse(i),
            n = this._valueMax() - this._valueMin() + 1,
            this.handles.each(function(e) {
                var i = Math.abs(s - u.values(e));
                (n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i,
                a = t(this),
                o = e)
            }),
            r = this._start(e, o),
            r === !1 ? !1 : (this._mouseSliding = !0,
            this._handleIndex = o,
            a.addClass("ui-state-active").focus(),
            h = a.offset(),
            l = !t(e.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - h.left - a.width() / 2,
                top: e.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(e, o, s),
            this._animateOff = !0,
            !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }
              , i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i),
            !1
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"),
            this._mouseSliding = !1,
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, a;
            return "horizontal" === this.orientation ? (e = this.elementSize.width,
            i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height,
            i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            s = i / e,
            s > 1 && (s = 1),
            0 > s && (s = 0),
            "vertical" === this.orientation && (s = 1 - s),
            n = this._valueMax() - this._valueMin(),
            a = this._valueMin() + s * n,
            this._trimAlignValue(a)
        },
        _start: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e),
            i.values = this.values()),
            this._trigger("start", t, i)
        },
        _slide: function(t, e, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1),
            2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s),
            i !== this.values(e) && (n = this.values(),
            n[e] = i,
            a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: n
            }),
            s = this.values(e ? 0 : 1),
            a !== !1 && this.values(e, i, !0))) : i !== this.value() && (a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }),
            a !== !1 && this.value(i))
        },
        _stop: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e),
            i.values = this.values()),
            this._trigger("stop", t, i)
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e),
                i.values = this.values()),
                this._lastChangedValue = e,
                this._trigger("change", t, i)
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t),
            this._refreshValue(),
            this._change(null, 0),
            undefined) : this._value()
        },
        values: function(e, i) {
            var s, n, a;
            if (arguments.length > 1)
                return this.options.values[e] = this._trimAlignValue(i),
                this._refreshValue(),
                this._change(null, e),
                undefined;
            if (!arguments.length)
                return this._values();
            if (!t.isArray(arguments[0]))
                return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (s = this.options.values,
            n = arguments[0],
            a = 0; s.length > a; a += 1)
                s[a] = this._trimAlignValue(n[a]),
                this._change(null, a);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0),
            this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null)),
            t.isArray(this.options.values) && (n = this.options.values.length),
            t.Widget.prototype._setOption.apply(this, arguments),
            e) {
            case "orientation":
                this._detectOrientation(),
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                this._refreshValue();
                break;
            case "value":
                this._animateOff = !0,
                this._refreshValue(),
                this._change(null, 0),
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                s = 0; n > s; s += 1)
                    this._change(null, s);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0,
                this._refreshValue(),
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0,
                this._refresh(),
                this._animateOff = !1
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length)
                return e = this.options.values[t],
                e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(),
                s = 0; i.length > s; s += 1)
                    i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t)
                return this._valueMin();
            if (t >= this._valueMax())
                return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1
              , i = (t - this._valueMin()) % e
              , s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
            parseFloat(s.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var e, i, s, n, a, o = this.options.range, r = this.options, h = this, l = this._animateOff ? !1 : r.animate, u = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) {
                i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())),
                u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%",
                t(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate),
                h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate),
                1 === s && h.range[l ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate),
                1 === s && h.range[l ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))),
                e = i
            }) : (s = this.value(),
            n = this._valueMin(),
            a = this._valueMax(),
            i = a !== n ? 100 * ((s - n) / (a - n)) : 0,
            u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%",
            this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate),
            "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: i + "%"
            }, r.animate),
            "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }),
            "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: i + "%"
            }, r.animate),
            "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function(i) {
                var s, n, a, o, r = t(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_UP:
                case t.ui.keyCode.PAGE_DOWN:
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (i.preventDefault(),
                    !this._keySliding && (this._keySliding = !0,
                    t(i.target).addClass("ui-state-active"),
                    s = this._start(i, r),
                    s === !1))
                        return
                }
                switch (o = this.options.step,
                n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(),
                i.keyCode) {
                case t.ui.keyCode.HOME:
                    a = this._valueMin();
                    break;
                case t.ui.keyCode.END:
                    a = this._valueMax();
                    break;
                case t.ui.keyCode.PAGE_UP:
                    a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                    if (n === this._valueMax())
                        return;
                    a = this._trimAlignValue(n + o);
                    break;
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (n === this._valueMin())
                        return;
                    a = this._trimAlignValue(n - o)
                }
                this._slide(i, r, a)
            },
            click: function(t) {
                t.preventDefault()
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(e, i),
                this._change(e, i),
                t(e.target).removeClass("ui-state-active"))
            }
        }
    })
}
)(jQuery);
(function(t) {
    function e(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments),
            this._refresh(),
            e !== this.element.val() && this._trigger("change")
        }
    }
    t.widget("ui.spinner", {
        version: "1.10.2",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max),
            this._setOption("min", this.options.min),
            this._setOption("step", this.options.step),
            this._value(this.element.val(), !0),
            this._draw(),
            this._on(this._events),
            this._refresh(),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var e = {}
              , i = this.element;
            return t.each(["min", "max", "step"], function(t, s) {
                var n = i.attr(s);
                void 0 !== n && n.length && (e[s] = n)
            }),
            e
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(t) {
                return this.cancelBlur ? (delete this.cancelBlur,
                void 0) : (this._stop(),
                this._refresh(),
                this.previous !== this.element.val() && this._trigger("change", t),
                void 0)
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t))
                        return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t),
                    clearTimeout(this.mousewheelTimer),
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t)
                    }, 100),
                    t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() {
                    var t = this.element[0] === this.document[0].activeElement;
                    t || (this.element.focus(),
                    this.previous = s,
                    this._delay(function() {
                        this.previous = s
                    }))
                }
                var s;
                s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(),
                e.preventDefault(),
                i.call(this),
                this.cancelBlur = !0,
                this._delay(function() {
                    delete this.cancelBlur,
                    i.call(this)
                }),
                this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e),
                void 0) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"),
            this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"),
            this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()),
            this.options.disabled && this.disable()
        },
        _keydown: function(e) {
            var i = this.options
              , s = t.ui.keyCode;
            switch (e.keyCode) {
            case s.UP:
                return this._repeat(null, 1, e),
                !0;
            case s.DOWN:
                return this._repeat(null, -1, e),
                !0;
            case s.PAGE_UP:
                return this._repeat(null, i.page, e),
                !0;
            case s.PAGE_DOWN:
                return this._repeat(null, -i.page, e),
                !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        },
        _start: function(t) {
            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1),
            this.spinning = !0,
            !0) : !1
        },
        _repeat: function(t, e, i) {
            t = t || 500,
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                this._repeat(40, e, i)
            }, t),
            this._spin(e * this.options.step, i)
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1),
            i = this._adjustValue(i + t * this._increment(this.counter)),
            this.spinning && this._trigger("spin", e, {
                value: i
            }) === !1 || (this._value(i),
            this.counter++)
        },
        _increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
            t
        },
        _precisionOf: function(t) {
            var e = "" + t
              , i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) {
            var e, i, s = this.options;
            return e = null !== s.min ? s.min : 0,
            i = t - e,
            i = Math.round(i / s.step) * s.step,
            t = e + i,
            t = parseFloat(t.toFixed(this._precision())),
            null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer),
            clearTimeout(this.mousewheelTimer),
            this.counter = 0,
            this.spinning = !1,
            this._trigger("stop", t))
        },
        _setOption: function(t, e) {
            if ("culture" === t || "numberFormat" === t) {
                var i = this._parse(this.element.val());
                return this.options[t] = e,
                this.element.val(this._format(i)),
                void 0
            }
            ("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)),
            "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),
            this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),
            this._super(t, e),
            "disabled" === t && (e ? (this.element.prop("disabled", !0),
            this.buttons.button("disable")) : (this.element.prop("disabled", !1),
            this.buttons.button("enable")))
        },
        _setOptions: e(function(t) {
            this._super(t),
            this._value(this.element.val())
        }),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
            "" === t || isNaN(t) ? null : t
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(t, e) {
            var i;
            "" !== t && (i = this._parse(t),
            null !== i && (e || (i = this._adjustValue(i)),
            t = this._format(i))),
            this.element.val(t),
            this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function(t) {
            this._stepUp(t)
        }),
        _stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step),
            this._stop())
        },
        stepDown: e(function(t) {
            this._stepDown(t)
        }),
        _stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step),
            this._stop())
        },
        pageUp: e(function(t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function(t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function(t) {
            return arguments.length ? (e(this._value).call(this, t),
            void 0) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    })
}
)(jQuery);
(function(t, e) {
    function i() {
        return ++n
    }
    function s(t) {
        return t.hash.length > 1 && decodeURIComponent(t.href.replace(a, "")) === decodeURIComponent(location.href.replace(a, ""))
    }
    var n = 0
      , a = /#.*$/;
    t.widget("ui.tabs", {
        version: "1.10.2",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var e = this
              , i = this.options;
            this.running = !1,
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }),
            this._processTabs(),
            i.active = this._initialActive(),
            t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()),
            this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(),
            this._refresh(),
            this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var i = this.options.active
              , s = this.options.collapsible
              , n = location.hash.substring(1);
            return null === i && (n && this.tabs.each(function(s, a) {
                return t(a).attr("aria-controls") === n ? (i = s,
                !1) : e
            }),
            null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)),
            i !== !1 && (i = this.tabs.index(this.tabs.eq(i)),
            -1 === i && (i = s ? !1 : 0)),
            !s && i === !1 && this.anchors.length && (i = 0),
            i
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function(i) {
            var s = t(this.document[0].activeElement).closest("li")
              , n = this.tabs.index(s)
              , a = !0;
            if (!this._handlePageNav(i)) {
                switch (i.keyCode) {
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                    n++;
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.LEFT:
                    a = !1,
                    n--;
                    break;
                case t.ui.keyCode.END:
                    n = this.anchors.length - 1;
                    break;
                case t.ui.keyCode.HOME:
                    n = 0;
                    break;
                case t.ui.keyCode.SPACE:
                    return i.preventDefault(),
                    clearTimeout(this.activating),
                    this._activate(n),
                    e;
                case t.ui.keyCode.ENTER:
                    return i.preventDefault(),
                    clearTimeout(this.activating),
                    this._activate(n === this.options.active ? !1 : n),
                    e;
                default:
                    return
                }
                i.preventDefault(),
                clearTimeout(this.activating),
                n = this._focusNextTab(n, a),
                i.ctrlKey || (s.attr("aria-selected", "false"),
                this.tabs.eq(n).attr("aria-selected", "true"),
                this.activating = this._delay(function() {
                    this.option("active", n)
                }, this.delay))
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(),
            this.active.focus())
        },
        _handlePageNav: function(i) {
            return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0) : e
        },
        _findNextTab: function(e, i) {
            function s() {
                return e > n && (e = 0),
                0 > e && (e = n),
                e
            }
            for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled); )
                e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e),
            this.tabs.eq(t).focus(),
            t
        },
        _setOption: function(t, i) {
            return "active" === t ? (this._activate(i),
            e) : "disabled" === t ? (this._setupDisabled(i),
            e) : (this._super(t, i),
            "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i),
            i || this.options.active !== !1 || this._activate(0)),
            "event" === t && this._setupEvents(i),
            "heightStyle" === t && this._setupHeightStyle(i),
            e)
        },
        _tabId: function(t) {
            return t.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var e = this.options
              , i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t)
            }),
            this._processTabs(),
            e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1,
            this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1,
            this.active = t()),
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }),
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }),
            this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"),
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }),
            this.anchors = this.tabs.map(function() {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }),
            this.panels = t(),
            this.anchors.each(function(i, n) {
                var a, o, r, h = t(n).uniqueId().attr("id"), l = t(n).closest("li"), u = l.attr("aria-controls");
                s(n) ? (a = n.hash,
                o = e.element.find(e._sanitizeSelector(a))) : (r = e._tabId(l),
                a = "#" + r,
                o = e.element.find(a),
                o.length || (o = e._createPanel(r),
                o.insertAfter(e.panels[i - 1] || e.tablist)),
                o.attr("aria-live", "polite")),
                o.length && (e.panels = e.panels.add(o)),
                u && l.data("ui-tabs-aria-controls", u),
                l.attr({
                    "aria-controls": a.substring(1),
                    "aria-labelledby": h
                }),
                o.attr("aria-labelledby", h)
            }),
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, s = 0; i = this.tabs[s]; s++)
                e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },
        _setupEvents: function(e) {
            var i = {
                click: function(t) {
                    t.preventDefault()
                }
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(this.anchors, i),
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }),
            this._on(this.panels, {
                keydown: "_panelKeydown"
            }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(),
            i -= this.element.outerHeight() - this.element.height(),
            this.element.siblings(":visible").each(function() {
                var e = t(this)
                  , s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }),
            this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0)
            }),
            this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0,
            this.panels.each(function() {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options
              , s = this.active
              , n = t(e.currentTarget)
              , a = n.closest("li")
              , o = a[0] === s[0]
              , r = o && i.collapsible
              , h = r ? t() : this._getPanelForTab(a)
              , l = s.length ? this._getPanelForTab(s) : t()
              , u = {
                oldTab: s,
                oldPanel: l,
                newTab: r ? t() : a,
                newPanel: h
            };
            e.preventDefault(),
            a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = r ? !1 : this.tabs.index(a),
            this.active = o ? t() : a,
            this.xhr && this.xhr.abort(),
            l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."),
            h.length && this.load(this.tabs.index(a), e),
            this._toggle(e, u))
        },
        _toggle: function(e, i) {
            function s() {
                a.running = !1,
                a._trigger("activate", e, i)
            }
            function n() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
                o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(),
                s())
            }
            var a = this
              , o = i.newPanel
              , r = i.oldPanel;
            this.running = !0,
            r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                n()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
            r.hide(),
            n()),
            r.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }),
            i.oldTab.attr("aria-selected", "false"),
            o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1),
            o.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }),
            i.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active),
            i = s.find(".ui-tabs-anchor")[0],
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))),
            t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(),
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),
            this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }),
            this.tabs.each(function() {
                var e = t(this)
                  , i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }),
            this.panels.show(),
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(i) {
            var s = this.options.disabled;
            s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i),
            s = t.isArray(s) ? t.map(s, function(t) {
                return t !== i ? t : null
            }) : t.map(this.tabs, function(t, e) {
                return e !== i ? e : null
            })),
            this._setupDisabled(s))
        },
        disable: function(i) {
            var s = this.options.disabled;
            if (s !== !0) {
                if (i === e)
                    s = !0;
                else {
                    if (i = this._getIndex(i),
                    -1 !== t.inArray(i, s))
                        return;
                    s = t.isArray(s) ? t.merge([i], s).sort() : [i]
                }
                this._setupDisabled(s)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var n = this
              , a = this.tabs.eq(e)
              , o = a.find(".ui-tabs-anchor")
              , r = this._getPanelForTab(a)
              , h = {
                tab: a,
                panel: r
            };
            s(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, h)),
            this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"),
            r.attr("aria-busy", "true"),
            this.xhr.success(function(t) {
                setTimeout(function() {
                    r.html(t),
                    n._trigger("load", i, h)
                }, 1)
            }).complete(function(t, e) {
                setTimeout(function() {
                    "abort" === e && n.panels.stop(!1, !0),
                    a.removeClass("ui-tabs-loading"),
                    r.removeAttr("aria-busy"),
                    t === n.xhr && delete n.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(e, i, s) {
            var n = this;
            return {
                url: e.attr("href"),
                beforeSend: function(e, a) {
                    return n._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: a
                    }, s))
                }
            }
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
}
)(jQuery);
(function(t) {
    function e(e, i) {
        var s = (e.attr("aria-describedby") || "").split(/\s+/);
        s.push(i),
        e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
    }
    function i(e) {
        var i = e.data("ui-tooltip-id")
          , s = (e.attr("aria-describedby") || "").split(/\s+/)
          , n = t.inArray(i, s);
        -1 !== n && s.splice(n, 1),
        e.removeData("ui-tooltip-id"),
        s = t.trim(s.join(" ")),
        s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
    }
    var s = 0;
    t.widget("ui.tooltip", {
        version: "1.10.2",
        options: {
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }),
            this.tooltips = {},
            this.parents = {},
            this.options.disabled && this._disable()
        },
        _setOption: function(e, i) {
            var s = this;
            return "disabled" === e ? (this[i ? "_disable" : "_enable"](),
            this.options[e] = i,
            void 0) : (this._super(e, i),
            "content" === e && t.each(this.tooltips, function(t, e) {
                s._updateContent(e)
            }),
            void 0)
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0],
                e.close(n, !0)
            }),
            this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            })
        },
        open: function(e) {
            var i = this
              , s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")),
            s.data("ui-tooltip-open", !0),
            e && "mouseover" === e.type && s.parents().each(function() {
                var e, s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"),
                e.target = e.currentTarget = this,
                i.close(e, !0)),
                s.attr("title") && (s.uniqueId(),
                i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                },
                s.attr("title", ""))
            }),
            this._updateContent(s, e))
        },
        _updateContent: function(t, e) {
            var i, s = this.options.content, n = this, a = e ? e.type : null;
            return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function(i) {
                t.data("ui-tooltip-open") && n._delay(function() {
                    e && (e.type = a),
                    this._open(e, t, i)
                })
            }),
            i && this._open(e, t, i),
            void 0)
        },
        _open: function(i, s, n) {
            function a(t) {
                l.of = t,
                o.is(":hidden") || o.position(l)
            }
            var o, r, h, l = t.extend({}, this.options.position);
            if (n) {
                if (o = this._find(s),
                o.length)
                    return o.find(".ui-tooltip-content").html(n),
                    void 0;
                s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")),
                o = this._tooltip(s),
                e(s, o.attr("id")),
                o.find(".ui-tooltip-content").html(n),
                this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                    mousemove: a
                }),
                a(i)) : o.position(t.extend({
                    of: s
                }, this.options.position)),
                o.hide(),
                this._show(o, this.options.show),
                this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                    o.is(":visible") && (a(l.of),
                    clearInterval(h))
                }, t.fx.interval)),
                this._trigger("open", i, {
                    tooltip: o
                }),
                r = {
                    keyup: function(e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var i = t.Event(e);
                            i.currentTarget = s[0],
                            this.close(i, !0)
                        }
                    },
                    remove: function() {
                        this._removeTooltip(o)
                    }
                },
                i && "mouseover" !== i.type || (r.mouseleave = "close"),
                i && "focusin" !== i.type || (r.focusout = "close"),
                this._on(!0, s, r)
            }
        },
        close: function(e) {
            var s = this
              , n = t(e ? e.currentTarget : this.element)
              , a = this._find(n);
            this.closing || (clearInterval(this.delayedShow),
            n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")),
            i(n),
            a.stop(!0),
            this._hide(a, this.options.hide, function() {
                s._removeTooltip(t(this))
            }),
            n.removeData("ui-tooltip-open"),
            this._off(n, "mouseleave focusout keyup"),
            n[0] !== this.element[0] && this._off(n, "remove"),
            this._off(this.document, "mousemove"),
            e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title),
                delete s.parents[e]
            }),
            this.closing = !0,
            this._trigger("close", e, {
                tooltip: a
            }),
            this.closing = !1)
        },
        _tooltip: function(e) {
            var i = "ui-tooltip-" + s++
              , n = t("<div>").attr({
                id: i,
                role: "tooltip"
            }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return t("<div>").addClass("ui-tooltip-content").appendTo(n),
            n.appendTo(this.document[0].body),
            this.tooltips[i] = e,
            n
        },
        _find: function(e) {
            var i = e.data("ui-tooltip-id");
            return i ? t("#" + i) : t()
        },
        _removeTooltip: function(t) {
            t.remove(),
            delete this.tooltips[t.attr("id")]
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0],
                e.close(n, !0),
                t("#" + i).remove(),
                s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")),
                s.removeData("ui-tooltip-title"))
            })
        }
    })
}
)(jQuery);
(function(t, e) {
    var i = "ui-effects-";
    t.effects = {
        effect: {}
    },
    function(t, e) {
        function i(t, e, i) {
            var s = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t),
            isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }
        function s(i) {
            var s = l()
              , n = s._rgba = [];
            return i = i.toLowerCase(),
            f(h, function(t, a) {
                var o, r = a.re.exec(i), h = r && a.parse(r), l = a.space || "rgba";
                return h ? (o = s[l](h),
                s[c[l].cache] = o[c[l].cache],
                n = s._rgba = o._rgba,
                !1) : e
            }),
            n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent),
            s) : a[i]
        }
        function n(t, e, i) {
            return i = (i + 1) % 1,
            1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }
        var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
        }], l = t.Color = function(e, i, s, n) {
            return new t.Color.fn.parse(e,i,s,n)
        }
        , c = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, u = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, d = l.support = {}, p = t("<p>")[0], f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)",
        d.rgba = p.style.backgroundColor.indexOf("rgba") > -1,
        f(c, function(t, e) {
            e.cache = "_" + t,
            e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }),
        l.fn = t.extend(l.prototype, {
            parse: function(n, o, r, h) {
                if (n === e)
                    return this._rgba = [null, null, null, null],
                    this;
                (n.jquery || n.nodeType) && (n = t(n).css(o),
                o = e);
                var u = this
                  , d = t.type(n)
                  , p = this._rgba = [];
                return o !== e && (n = [n, o, r, h],
                d = "array"),
                "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
                    p[e.idx] = i(n[e.idx], e)
                }),
                this) : "object" === d ? (n instanceof l ? f(c, function(t, e) {
                    n[e.cache] && (u[e.cache] = n[e.cache].slice())
                }) : f(c, function(e, s) {
                    var a = s.cache;
                    f(s.props, function(t, e) {
                        if (!u[a] && s.to) {
                            if ("alpha" === t || null == n[t])
                                return;
                            u[a] = s.to(u._rgba)
                        }
                        u[a][e.idx] = i(n[t], e, !0)
                    }),
                    u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1,
                    s.from && (u._rgba = s.from(u[a])))
                }),
                this) : e
            },
            is: function(t) {
                var i = l(t)
                  , s = !0
                  , n = this;
                return f(c, function(t, a) {
                    var o, r = i[a.cache];
                    return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [],
                    f(a.props, function(t, i) {
                        return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
                    })),
                    s
                }),
                s
            },
            _space: function() {
                var t = []
                  , e = this;
                return f(c, function(i, s) {
                    e[s.cache] && t.push(i)
                }),
                t.pop()
            },
            transition: function(t, e) {
                var s = l(t)
                  , n = s._space()
                  , a = c[n]
                  , o = 0 === this.alpha() ? l("transparent") : this
                  , r = o[a.cache] || a.to(o._rgba)
                  , h = r.slice();
                return s = s[a.cache],
                f(a.props, function(t, n) {
                    var a = n.idx
                      , o = r[a]
                      , l = s[a]
                      , c = u[n.type] || {};
                    null !== l && (null === o ? h[a] = l : (c.mod && (l - o > c.mod / 2 ? o += c.mod : o - l > c.mod / 2 && (o -= c.mod)),
                    h[a] = i((l - o) * e + o, n)))
                }),
                this[n](h)
            },
            blend: function(e) {
                if (1 === this._rgba[3])
                    return this;
                var i = this._rgba.slice()
                  , s = i.pop()
                  , n = l(e)._rgba;
                return l(t.map(i, function(t, e) {
                    return (1 - s) * n[e] + s * t
                }))
            },
            toRgbaString: function() {
                var e = "rgba("
                  , i = t.map(this._rgba, function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === i[3] && (i.pop(),
                e = "rgb("),
                e + i.join() + ")"
            },
            toHslaString: function() {
                var e = "hsla("
                  , i = t.map(this.hsla(), function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0),
                    e && 3 > e && (t = Math.round(100 * t) + "%"),
                    t
                });
                return 1 === i[3] && (i.pop(),
                e = "hsl("),
                e + i.join() + ")"
            },
            toHexString: function(e) {
                var i = this._rgba.slice()
                  , s = i.pop();
                return e && i.push(~~(255 * s)),
                "#" + t.map(i, function(t) {
                    return t = (t || 0).toString(16),
                    1 === t.length ? "0" + t : t
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }),
        l.fn.parse.prototype = l.fn,
        c.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, a = t[2] / 255, o = t[3], r = Math.max(s, n, a), h = Math.min(s, n, a), l = r - h, c = r + h, u = .5 * c;
            return e = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240,
            i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c),
            [Math.round(e) % 360, i, u, null == o ? 1 : o]
        }
        ,
        c.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e = t[0] / 360
              , i = t[1]
              , s = t[2]
              , a = t[3]
              , o = .5 >= s ? s * (1 + i) : s + i - s * i
              , r = 2 * s - o;
            return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
        }
        ,
        f(c, function(s, n) {
            var a = n.props
              , o = n.cache
              , h = n.to
              , c = n.from;
            l.fn[s] = function(s) {
                if (h && !this[o] && (this[o] = h(this._rgba)),
                s === e)
                    return this[o].slice();
                var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[o].slice();
                return f(a, function(t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]),
                    d[e.idx] = i(s, e)
                }),
                c ? (n = l(c(d)),
                n[o] = d,
                n) : l(d)
            }
            ,
            f(a, function(e, i) {
                l.fn[e] || (l.fn[e] = function(n) {
                    var a, o = t.type(n), h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, l = this[h](), c = l[i.idx];
                    return "undefined" === o ? c : ("function" === o && (n = n.call(this, c),
                    o = t.type(n)),
                    null == n && i.empty ? this : ("string" === o && (a = r.exec(n),
                    a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))),
                    l[i.idx] = n,
                    this[h](l)))
                }
                )
            })
        }),
        l.hook = function(e) {
            var i = e.split(" ");
            f(i, function(e, i) {
                t.cssHooks[i] = {
                    set: function(e, n) {
                        var a, o, r = "";
                        if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
                            if (n = l(a || n),
                            !d.rgba && 1 !== n._rgba[3]) {
                                for (o = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && o && o.style; )
                                    try {
                                        r = t.css(o, "backgroundColor"),
                                        o = o.parentNode
                                    } catch (h) {}
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            e.style[i] = n
                        } catch (h) {}
                    }
                },
                t.fx.step[i] = function(e) {
                    e.colorInit || (e.start = l(e.elem, i),
                    e.end = l(e.end),
                    e.colorInit = !0),
                    t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }
        ,
        l.hook(o),
        t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                    e["border" + s + "Color"] = t
                }),
                e
            }
        },
        a = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery),
    function() {
        function i(e) {
            var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, a = {};
            if (n && n.length && n[0] && n[n[0]])
                for (s = n.length; s--; )
                    i = n[s],
                    "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]);
            else
                for (i in n)
                    "string" == typeof n[i] && (a[i] = n[i]);
            return a
        }
        function s(e, i) {
            var s, n, o = {};
            for (s in i)
                n = i[s],
                e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
            return o
        }
        var n = ["add", "remove", "toggle"]
          , a = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
            t.fx.step[i] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end),
                t.setAttr = !0)
            }
        }),
        t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
        ),
        t.effects.animateClass = function(e, a, o, r) {
            var h = t.speed(a, o, r);
            return this.queue(function() {
                var a, o = t(this), r = o.attr("class") || "", l = h.children ? o.find("*").addBack() : o;
                l = l.map(function() {
                    var e = t(this);
                    return {
                        el: e,
                        start: i(this)
                    }
                }),
                a = function() {
                    t.each(n, function(t, i) {
                        e[i] && o[i + "Class"](e[i])
                    })
                }
                ,
                a(),
                l = l.map(function() {
                    return this.end = i(this.el[0]),
                    this.diff = s(this.start, this.end),
                    this
                }),
                o.attr("class", r),
                l = l.map(function() {
                    var e = this
                      , i = t.Deferred()
                      , s = t.extend({}, h, {
                        queue: !1,
                        complete: function() {
                            i.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, s),
                    i.promise()
                }),
                t.when.apply(t, l.get()).done(function() {
                    a(),
                    t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "")
                        })
                    }),
                    h.complete.call(o[0])
                })
            })
        }
        ,
        t.fn.extend({
            addClass: function(e) {
                return function(i, s, n, a) {
                    return s ? t.effects.animateClass.call(this, {
                        add: i
                    }, s, n, a) : e.apply(this, arguments)
                }
            }(t.fn.addClass),
            removeClass: function(e) {
                return function(i, s, n, a) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {
                        remove: i
                    }, s, n, a) : e.apply(this, arguments)
                }
            }(t.fn.removeClass),
            toggleClass: function(i) {
                return function(s, n, a, o, r) {
                    return "boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {
                        add: s
                    } : {
                        remove: s
                    }, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
                        toggle: s
                    }, n, a, o)
                }
            }(t.fn.toggleClass),
            switchClass: function(e, i, s, n, a) {
                return t.effects.animateClass.call(this, {
                    add: i,
                    remove: e
                }, s, n, a)
            }
        })
    }(),
    function() {
        function s(e, i, s, n) {
            return t.isPlainObject(e) && (i = e,
            e = e.effect),
            e = {
                effect: e
            },
            null == i && (i = {}),
            t.isFunction(i) && (n = i,
            s = null,
            i = {}),
            ("number" == typeof i || t.fx.speeds[i]) && (n = s,
            s = i,
            i = {}),
            t.isFunction(s) && (n = s,
            s = null),
            i && t.extend(e, i),
            s = s || i.duration,
            e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default,
            e.complete = n || i.complete,
            e
        }
        function n(e) {
            return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
        }
        t.extend(t.effects, {
            version: "1.10.2",
            save: function(t, e) {
                for (var s = 0; e.length > s; s++)
                    null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
            },
            restore: function(t, s) {
                var n, a;
                for (a = 0; s.length > a; a++)
                    null !== s[a] && (n = t.data(i + s[a]),
                    n === e && (n = ""),
                    t.css(s[a], n))
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
                e
            },
            getBaseline: function(t, e) {
                var i, s;
                switch (t[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = t[0] / e.height
                }
                switch (t[1]) {
                case "left":
                    s = 0;
                    break;
                case "center":
                    s = .5;
                    break;
                case "right":
                    s = 1;
                    break;
                default:
                    s = t[1] / e.width
                }
                return {
                    x: s,
                    y: i
                }
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper"))
                    return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    "float": e.css("float")
                }
                  , s = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , n = {
                    width: e.width(),
                    height: e.height()
                }
                  , a = document.activeElement;
                try {
                    a.id
                } catch (o) {
                    a = document.body
                }
                return e.wrap(s),
                (e[0] === a || t.contains(e[0], a)) && t(a).focus(),
                s = e.parent(),
                "static" === e.css("position") ? (s.css({
                    position: "relative"
                }),
                e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }),
                t.each(["top", "left", "bottom", "right"], function(t, s) {
                    i[s] = e.css(s),
                    isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }),
                e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                e.css(n),
                s.css(i).show()
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e),
                (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
                e
            },
            setTransition: function(e, i, s, n) {
                return n = n || {},
                t.each(i, function(t, i) {
                    var a = e.cssUnit(i);
                    a[0] > 0 && (n[i] = a[0] * s + a[1])
                }),
                n
            }
        }),
        t.fn.extend({
            effect: function() {
                function e(e) {
                    function s() {
                        t.isFunction(a) && a.call(n[0]),
                        t.isFunction(e) && e()
                    }
                    var n = t(this)
                      , a = i.complete
                      , r = i.mode;
                    (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](),
                    s()) : o.call(n[0], i, s)
                }
                var i = s.apply(this, arguments)
                  , n = i.mode
                  , a = i.queue
                  , o = t.effects.effect[i.effect];
                return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function() {
                    i.complete && i.complete.call(this)
                }) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
            },
            show: function(t) {
                return function(e) {
                    if (n(e))
                        return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "show",
                    this.effect.call(this, i)
                }
            }(t.fn.show),
            hide: function(t) {
                return function(e) {
                    if (n(e))
                        return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "hide",
                    this.effect.call(this, i)
                }
            }(t.fn.hide),
            toggle: function(t) {
                return function(e) {
                    if (n(e) || "boolean" == typeof e)
                        return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "toggle",
                    this.effect.call(this, i)
                }
            }(t.fn.toggle),
            cssUnit: function(e) {
                var i = this.css(e)
                  , s = [];
                return t.each(["em", "px", "%", "pt"], function(t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }),
                s
            }
        })
    }(),
    function() {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2)
            }
        }),
        t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(t) {
                return t * t * (3 * t - 2)
            },
            Bounce: function(t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; )
                    ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }),
        t.each(e, function(e, i) {
            t.easing["easeIn" + e] = i,
            t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t)
            }
            ,
            t.easing["easeInOut" + e] = function(t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        })
    }()
}
)(jQuery);
(function(t) {
    var e = /up|down|vertical/
      , i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function(s, n) {
        var a, o, r, h = t(this), l = ["position", "top", "bottom", "left", "right", "height", "width"], c = t.effects.setMode(h, s.mode || "hide"), u = s.direction || "up", d = e.test(u), p = d ? "height" : "width", f = d ? "top" : "left", m = i.test(u), g = {}, v = "show" === c;
        h.parent().is(".ui-effects-wrapper") ? t.effects.save(h.parent(), l) : t.effects.save(h, l),
        h.show(),
        a = t.effects.createWrapper(h).css({
            overflow: "hidden"
        }),
        o = a[p](),
        r = parseFloat(a.css(f)) || 0,
        g[p] = v ? o : 0,
        m || (h.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
            position: "absolute"
        }),
        g[f] = v ? r : o + r),
        v && (a.css(p, 0),
        m || a.css(f, r + o)),
        a.animate(g, {
            duration: s.duration,
            easing: s.easing,
            queue: !1,
            complete: function() {
                "hide" === c && h.hide(),
                t.effects.restore(h, l),
                t.effects.removeWrapper(h),
                n()
            }
        })
    }
}
)(jQuery);
(function(t) {
    t.effects.effect.bounce = function(e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = t.effects.setMode(o, e.mode || "effect"), l = "hide" === h, c = "show" === h, u = e.direction || "up", d = e.distance, p = e.times || 5, f = 2 * p + (c || l ? 1 : 0), m = e.duration / f, g = e.easing, v = "up" === u || "down" === u ? "top" : "left", _ = "up" === u || "left" === u, b = o.queue(), y = b.length;
        for ((c || l) && r.push("opacity"),
        t.effects.save(o, r),
        o.show(),
        t.effects.createWrapper(o),
        d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3),
        c && (a = {
            opacity: 1
        },
        a[v] = 0,
        o.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(a, m, g)),
        l && (d /= Math.pow(2, p - 1)),
        a = {},
        a[v] = 0,
        s = 0; p > s; s++)
            n = {},
            n[v] = (_ ? "-=" : "+=") + d,
            o.animate(n, m, g).animate(a, m, g),
            d = l ? 2 * d : d / 2;
        l && (n = {
            opacity: 0
        },
        n[v] = (_ ? "-=" : "+=") + d,
        o.animate(n, m, g)),
        o.queue(function() {
            l && o.hide(),
            t.effects.restore(o, r),
            t.effects.removeWrapper(o),
            i()
        }),
        y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))),
        o.dequeue()
    }
}
)(jQuery);
(function(t) {
    t.effects.effect.clip = function(e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "height", "width"], h = t.effects.setMode(o, e.mode || "hide"), l = "show" === h, c = e.direction || "vertical", u = "vertical" === c, d = u ? "height" : "width", p = u ? "top" : "left", f = {};
        t.effects.save(o, r),
        o.show(),
        s = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }),
        n = "IMG" === o[0].tagName ? s : o,
        a = n[d](),
        l && (n.css(d, 0),
        n.css(p, a / 2)),
        f[d] = l ? a : 0,
        f[p] = l ? 0 : a / 2,
        n.animate(f, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                l || o.hide(),
                t.effects.restore(o, r),
                t.effects.removeWrapper(o),
                i()
            }
        })
    }
}
)(jQuery);
(function(t) {
    t.effects.effect.drop = function(e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], o = t.effects.setMode(n, e.mode || "hide"), r = "show" === o, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left", c = "up" === h || "left" === h ? "pos" : "neg", u = {
            opacity: r ? 1 : 0
        };
        t.effects.save(n, a),
        n.show(),
        t.effects.createWrapper(n),
        s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2,
        r && n.css("opacity", 0).css(l, "pos" === c ? -s : s),
        u[l] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s,
        n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && n.hide(),
                t.effects.restore(n, a),
                t.effects.removeWrapper(n),
                i()
            }
        })
    }
}
)(jQuery);
(function(t) {
    t.effects.effect.explode = function(e, i) {
        function s() {
            b.push(this),
            b.length === u * d && n()
        }
        function n() {
            p.css({
                visibility: "visible"
            }),
            t(b).remove(),
            m || p.hide(),
            i()
        }
        var a, o, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = u, p = t(this), f = t.effects.setMode(p, e.mode || "hide"), m = "show" === f, g = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / d), _ = Math.ceil(p.outerHeight() / u), b = [];
        for (a = 0; u > a; a++)
            for (h = g.top + a * _,
            c = a - (u - 1) / 2,
            o = 0; d > o; o++)
                r = g.left + o * v,
                l = o - (d - 1) / 2,
                p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -o * v,
                    top: -a * _
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: v,
                    height: _,
                    left: r + (m ? l * v : 0),
                    top: h + (m ? c * _ : 0),
                    opacity: m ? 0 : 1
                }).animate({
                    left: r + (m ? 0 : l * v),
                    top: h + (m ? 0 : c * _),
                    opacity: m ? 1 : 0
                }, e.duration || 500, e.easing, s)
    }
}
)(jQuery);
(function(t) {
    t.effects.effect.fade = function(e, i) {
        var s = t(this)
          , n = t.effects.setMode(s, e.mode || "toggle");
        s.animate({
            opacity: n
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
}
)(jQuery);
(function(t) {
    t.effects.effect.fold = function(e, i) {
        var s, n, a = t(this), o = ["position", "top", "bottom", "left", "right", "height", "width"], r = t.effects.setMode(a, e.mode || "hide"), h = "show" === r, l = "hide" === r, c = e.size || 15, u = /([0-9]+)%/.exec(c), d = !!e.horizFirst, p = h !== d, f = p ? ["width", "height"] : ["height", "width"], m = e.duration / 2, g = {}, v = {};
        t.effects.save(a, o),
        a.show(),
        s = t.effects.createWrapper(a).css({
            overflow: "hidden"
        }),
        n = p ? [s.width(), s.height()] : [s.height(), s.width()],
        u && (c = parseInt(u[1], 10) / 100 * n[l ? 0 : 1]),
        h && s.css(d ? {
            height: 0,
            width: c
        } : {
            height: c,
            width: 0
        }),
        g[f[0]] = h ? n[0] : c,
        v[f[1]] = h ? n[1] : 0,
        s.animate(g, m, e.easing).animate(v, m, e.easing, function() {
            l && a.hide(),
            t.effects.restore(a, o),
            t.effects.removeWrapper(a),
            i()
        })
    }
}
)(jQuery);
(function(t) {
    t.effects.effect.highlight = function(e, i) {
        var s = t(this)
          , n = ["backgroundImage", "backgroundColor", "opacity"]
          , a = t.effects.setMode(s, e.mode || "show")
          , o = {
            backgroundColor: s.css("backgroundColor")
        };
        "hide" === a && (o.opacity = 0),
        t.effects.save(s, n),
        s.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === a && s.hide(),
                t.effects.restore(s, n),
                i()
            }
        })
    }
}
)(jQuery);
(function(t) {
    t.effects.effect.pulsate = function(e, i) {
        var s, n = t(this), a = t.effects.setMode(n, e.mode || "show"), o = "show" === a, r = "hide" === a, h = o || "hide" === a, l = 2 * (e.times || 5) + (h ? 1 : 0), c = e.duration / l, u = 0, d = n.queue(), p = d.length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(),
        u = 1),
        s = 1; l > s; s++)
            n.animate({
                opacity: u
            }, c, e.easing),
            u = 1 - u;
        n.animate({
            opacity: u
        }, c, e.easing),
        n.queue(function() {
            r && n.hide(),
            i()
        }),
        p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, l + 1))),
        n.dequeue()
    }
}
)(jQuery);
(function(t) {
    t.effects.effect.puff = function(e, i) {
        var s = t(this)
          , n = t.effects.setMode(s, e.mode || "hide")
          , a = "hide" === n
          , o = parseInt(e.percent, 10) || 150
          , r = o / 100
          , h = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: n,
            complete: i,
            percent: a ? o : 100,
            from: a ? h : {
                height: h.height * r,
                width: h.width * r,
                outerHeight: h.outerHeight * r,
                outerWidth: h.outerWidth * r
            }
        }),
        s.effect(e)
    }
    ,
    t.effects.effect.scale = function(e, i) {
        var s = t(this)
          , n = t.extend(!0, {}, e)
          , a = t.effects.setMode(s, e.mode || "effect")
          , o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100)
          , r = e.direction || "both"
          , h = e.origin
          , l = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        }
          , c = {
            y: "horizontal" !== r ? o / 100 : 1,
            x: "vertical" !== r ? o / 100 : 1
        };
        n.effect = "size",
        n.queue = !1,
        n.complete = i,
        "effect" !== a && (n.origin = h || ["middle", "center"],
        n.restore = !0),
        n.from = e.from || ("show" === a ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : l),
        n.to = {
            height: l.height * c.y,
            width: l.width * c.x,
            outerHeight: l.outerHeight * c.y,
            outerWidth: l.outerWidth * c.x
        },
        n.fade && ("show" === a && (n.from.opacity = 0,
        n.to.opacity = 1),
        "hide" === a && (n.from.opacity = 1,
        n.to.opacity = 0)),
        s.effect(n)
    }
    ,
    t.effects.effect.size = function(e, i) {
        var s, n, a, o = t(this), r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], l = ["width", "height", "overflow"], c = ["fontSize"], u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], p = t.effects.setMode(o, e.mode || "effect"), f = e.restore || "effect" !== p, m = e.scale || "both", g = e.origin || ["middle", "center"], v = o.css("position"), _ = f ? r : h, b = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === p && o.show(),
        s = {
            height: o.height(),
            width: o.width(),
            outerHeight: o.outerHeight(),
            outerWidth: o.outerWidth()
        },
        "toggle" === e.mode && "show" === p ? (o.from = e.to || b,
        o.to = e.from || s) : (o.from = e.from || ("show" === p ? b : s),
        o.to = e.to || ("hide" === p ? b : s)),
        a = {
            from: {
                y: o.from.height / s.height,
                x: o.from.width / s.width
            },
            to: {
                y: o.to.height / s.height,
                x: o.to.width / s.width
            }
        },
        ("box" === m || "both" === m) && (a.from.y !== a.to.y && (_ = _.concat(u),
        o.from = t.effects.setTransition(o, u, a.from.y, o.from),
        o.to = t.effects.setTransition(o, u, a.to.y, o.to)),
        a.from.x !== a.to.x && (_ = _.concat(d),
        o.from = t.effects.setTransition(o, d, a.from.x, o.from),
        o.to = t.effects.setTransition(o, d, a.to.x, o.to))),
        ("content" === m || "both" === m) && a.from.y !== a.to.y && (_ = _.concat(c).concat(l),
        o.from = t.effects.setTransition(o, c, a.from.y, o.from),
        o.to = t.effects.setTransition(o, c, a.to.y, o.to)),
        t.effects.save(o, _),
        o.show(),
        t.effects.createWrapper(o),
        o.css("overflow", "hidden").css(o.from),
        g && (n = t.effects.getBaseline(g, s),
        o.from.top = (s.outerHeight - o.outerHeight()) * n.y,
        o.from.left = (s.outerWidth - o.outerWidth()) * n.x,
        o.to.top = (s.outerHeight - o.to.outerHeight) * n.y,
        o.to.left = (s.outerWidth - o.to.outerWidth) * n.x),
        o.css(o.from),
        ("content" === m || "both" === m) && (u = u.concat(["marginTop", "marginBottom"]).concat(c),
        d = d.concat(["marginLeft", "marginRight"]),
        l = r.concat(u).concat(d),
        o.find("*[width]").each(function() {
            var i = t(this)
              , s = {
                height: i.height(),
                width: i.width(),
                outerHeight: i.outerHeight(),
                outerWidth: i.outerWidth()
            };
            f && t.effects.save(i, l),
            i.from = {
                height: s.height * a.from.y,
                width: s.width * a.from.x,
                outerHeight: s.outerHeight * a.from.y,
                outerWidth: s.outerWidth * a.from.x
            },
            i.to = {
                height: s.height * a.to.y,
                width: s.width * a.to.x,
                outerHeight: s.height * a.to.y,
                outerWidth: s.width * a.to.x
            },
            a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, u, a.from.y, i.from),
            i.to = t.effects.setTransition(i, u, a.to.y, i.to)),
            a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from),
            i.to = t.effects.setTransition(i, d, a.to.x, i.to)),
            i.css(i.from),
            i.animate(i.to, e.duration, e.easing, function() {
                f && t.effects.restore(i, l)
            })
        })),
        o.animate(o.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                0 === o.to.opacity && o.css("opacity", o.from.opacity),
                "hide" === p && o.hide(),
                t.effects.restore(o, _),
                f || ("static" === v ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left
                }) : t.each(["top", "left"], function(t, e) {
                    o.css(e, function(e, i) {
                        var s = parseInt(i, 10)
                          , n = t ? o.to.left : o.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })),
                t.effects.removeWrapper(o),
                i()
            }
        })
    }
}
)(jQuery);
(function(t) {
    t.effects.effect.shake = function(e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "height", "width"], o = t.effects.setMode(n, e.mode || "effect"), r = e.direction || "left", h = e.distance || 20, l = e.times || 3, c = 2 * l + 1, u = Math.round(e.duration / c), d = "up" === r || "down" === r ? "top" : "left", p = "up" === r || "left" === r, f = {}, m = {}, g = {}, v = n.queue(), _ = v.length;
        for (t.effects.save(n, a),
        n.show(),
        t.effects.createWrapper(n),
        f[d] = (p ? "-=" : "+=") + h,
        m[d] = (p ? "+=" : "-=") + 2 * h,
        g[d] = (p ? "-=" : "+=") + 2 * h,
        n.animate(f, u, e.easing),
        s = 1; l > s; s++)
            n.animate(m, u, e.easing).animate(g, u, e.easing);
        n.animate(m, u, e.easing).animate(f, u / 2, e.easing).queue(function() {
            "hide" === o && n.hide(),
            t.effects.restore(n, a),
            t.effects.removeWrapper(n),
            i()
        }),
        _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))),
        n.dequeue()
    }
}
)(jQuery);
(function(t) {
    t.effects.effect.slide = function(e, i) {
        var s, n = t(this), a = ["position", "top", "bottom", "left", "right", "width", "height"], o = t.effects.setMode(n, e.mode || "show"), r = "show" === o, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left", c = "up" === h || "left" === h, u = {};
        t.effects.save(n, a),
        n.show(),
        s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0),
        t.effects.createWrapper(n).css({
            overflow: "hidden"
        }),
        r && n.css(l, c ? isNaN(s) ? "-" + s : -s : s),
        u[l] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s,
        n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && n.hide(),
                t.effects.restore(n, a),
                t.effects.removeWrapper(n),
                i()
            }
        })
    }
}
)(jQuery);
(function(t) {
    t.effects.effect.transfer = function(e, i) {
        var s = t(this)
          , n = t(e.to)
          , a = "fixed" === n.css("position")
          , o = t("body")
          , r = a ? o.scrollTop() : 0
          , h = a ? o.scrollLeft() : 0
          , l = n.offset()
          , c = {
            top: l.top - r,
            left: l.left - h,
            height: n.innerHeight(),
            width: n.innerWidth()
        }
          , u = s.offset()
          , d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
            top: u.top - r,
            left: u.left - h,
            height: s.innerHeight(),
            width: s.innerWidth(),
            position: a ? "fixed" : "absolute"
        }).animate(c, e.duration, e.easing, function() {
            d.remove(),
            i()
        })
    }
}
)(jQuery);
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', {expires: 7, path: '/', domain: 'jquery.com', secure: true});
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
            // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
}
;
/*
 * Copyright 2010 akquinet
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *  This JQuery Plugin will help you in showing some nice Toast-Message like notification messages. The behavior is
 *  similar to the android Toast class.
 *  You have 4 different toast types you can show. Each type comes with its own icon and colored border. The types are:
 *  - notice
 *  - success
 *  - warning
 *  - error
 *
 *  The following methods will display a toast message:
 *
 *   $().toastmessage('showNoticeToast', 'some message here');
 *   $().toastmessage('showSuccessToast', "some message here");
 *   $().toastmessage('showWarningToast', "some message here");
 *   $().toastmessage('showErrorToast', "some message here");
 *
 *   // user configured toastmessage:
 *   $().toastmessage('showToast', {
 *      text     : 'Hello World',
 *      sticky   : true,
 *      position : 'top-right',
 *      type     : 'success',
 *      close    : function () {console.log("toast is closed ...");}
 *   });
 *
 *   To see some more examples please have a look into the Tests in src/test/javascript/ToastmessageTest.js
 *
 *   For further style configuration please see corresponding css file: jquery-toastmessage.css
 *
 *   This plugin is based on the jquery-notice (http://sandbox.timbenniks.com/projects/jquery-notice/)
 *   but is enhanced in several ways:
 *
 *   configurable positioning
 *   convenience methods for different message types
 *   callback functionality when closing the toast
 *   included some nice free icons
 *   reimplemented to follow jquery plugin good practices rules
 *
 *   Author: Daniel Bremer-Tonn
**/
(function($) {
    var settings = {
        inEffect: {
            opacity: 'show'
        },
        // in effect
        inEffectDuration: 600,
        // in effect duration in miliseconds
        stayTime: 2000,
        // time in miliseconds before the item has to disappear
        text: '',
        // content of the item. Might be a string or a jQuery object. Be aware that any jQuery object which is acting as a message will be deleted when the toast is fading away.
        sticky: false,
        // should the toast item sticky or not?
        type: 'success',
        // notice, warning, error, success
        position: 'top-center',
        // top-left, top-center, top-right, middle-left, middle-center, middle-right ... Position of the toast container holding different toast. Position can be set only once at the very first call, changing the position after the first call does nothing
        closeText: '',
        // text which will be shown as close button, set to '' when you want to introduce an image via css
        close: null,
        // callback function when the toastmessage is closed
        showCloseButton: false //Indicates if close button should be shown or not
    };

    var methods = {
        init: function(options) {
            if (options) {
                $.extend(settings, options);
            }
        },

        showToast: function(options) {
            var localSettings = {};
            $.extend(localSettings, settings, options);

            // declare variables
            var toastWrapAll, toastItemOuter, toastItemInner, toastItemClose, toastItemImage;

            toastWrapAll = (!$('.toast-container').length) ? $('<div></div>').addClass('toast-container').addClass('toast-position-' + localSettings.position).appendTo('body') : $('.toast-container');
            toastItemOuter = $('<div></div>').addClass('toast-item-wrapper');
            toastItemInner = $('<div></div>').addClass('toast-item toast-type-' + localSettings.type).appendTo(toastWrapAll).html($('<p>').append(localSettings.text)).animate(localSettings.inEffect, localSettings.inEffectDuration).wrap(toastItemOuter);
            if (localSettings.showCloseButton) {
                toastItemClose = $('<div></div>').addClass('toast-item-close').prependTo(toastItemInner).html(localSettings.closeText).click(function() {
                    $().toastmessage('removeToast', toastItemInner, localSettings)
                });
            }
            toastItemImage = $('<div></div>').addClass('toast-item-image').addClass('toast-item-image-' + localSettings.type).prependTo(toastItemInner);

            if (navigator.userAgent.match(/MSIE 6/i)) {
                toastWrapAll.css({
                    top: document.documentElement.scrollTop
                });
            }

            if (!localSettings.sticky) {
                setTimeout(function() {
                    $().toastmessage('removeToast', toastItemInner, localSettings);
                }, localSettings.stayTime);
            }
            return toastItemInner;
        },

        showNoticeToast: function(message) {
            var options = {
                text: message,
                type: 'notice'
            };
            return $().toastmessage('showToast', options);
        },

        showSuccessToast: function(message) {
            var options = {
                text: message,
                type: 'success'
            };
            return $().toastmessage('showToast', options);
        },

        showErrorToast: function(message) {
            var options = {
                text: message,
                type: 'error'
            };
            return $().toastmessage('showToast', options);
        },

        showWarningToast: function(message) {
            var options = {
                text: message,
                type: 'warning'
            };
            return $().toastmessage('showToast', options);
        },

        removeToast: function(obj, options) {
            obj.animate({
                opacity: '0'
            }, 600, function() {
                obj.parent().animate({
                    height: '0px'
                }, 300, function() {
                    obj.parent().remove();
                });
            });
            // callback
            if (options && options.close !== null) {
                options.close();
            }
        }
    };

    $.fn.toastmessage = function(method) {

        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.toastmessage');
        }
    }
    ;

}
)(jQuery);
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f, h, $) {
    var a = 'placeholder'in h.createElement('input'), d = 'placeholder'in h.createElement('textarea'), i = $.fn, c = $.valHooks, k, j;
    if (a && d) {
        j = i.placeholder = function() {
            return this
        }
        ;
        j.input = j.textarea = true
    } else {
        j = i.placeholder = function() {
            var l = this;
            l.filter((a ? 'textarea' : ':input') + '[placeholder]').not('.placeholder').bind({
                'focus.placeholder': b,
                'blur.placeholder': e
            }).data('placeholder-enabled', true).trigger('blur.placeholder');
            return l
        }
        ;
        j.input = a;
        j.textarea = d;
        k = {
            get: function(m) {
                var l = $(m);
                return l.data('placeholder-enabled') && l.hasClass('placeholder') ? '' : m.value
            },
            set: function(m, n) {
                var l = $(m);
                if (!l.data('placeholder-enabled')) {
                    return m.value = n
                }
                if (n == '') {
                    m.value = n;
                    if (m != h.activeElement) {
                        e.call(m)
                    }
                } else {
                    if (l.hasClass('placeholder')) {
                        b.call(m, true, n) || (m.value = n)
                    } else {
                        m.value = n
                    }
                }
                return l
            }
        };
        a || (c.input = k);
        d || (c.textarea = k);
        $(function() {
            $(h).delegate('form', 'submit.placeholder', function() {
                var l = $('.placeholder', this).each(b);
                setTimeout(function() {
                    l.each(e)
                }, 10)
            })
        });
        $(f).bind('beforeunload.placeholder', function() {
            $('.placeholder').each(function() {
                this.value = ''
            })
        })
    }
    function g(m) {
        var l = {}
          , n = /^jQuery\d+$/;
        $.each(m.attributes, function(p, o) {
            if (o.specified && !n.test(o.name)) {
                l[o.name] = o.value
            }
        });
        return l
    }
    function b(m, n) {
        var l = this
          , o = $(l);
        if (l.value == o.attr('placeholder') && o.hasClass('placeholder')) {
            if (o.data('placeholder-password')) {
                o = o.hide().next().show().attr('id', o.removeAttr('id').data('placeholder-id'));
                if (m === true) {
                    return o[0].value = n
                }
                o.focus()
            } else {
                l.value = '';
                o.removeClass('placeholder');
                l == h.activeElement && l.select()
            }
        }
    }
    function e() {
        var q, l = this, p = $(l), m = p, o = this.id;
        if (l.value == '') {
            if (l.type == 'password') {
                if (!p.data('placeholder-textinput')) {
                    try {
                        q = p.clone().attr({
                            type: 'text'
                        })
                    } catch (n) {
                        q = $('<input>').attr($.extend(g(this), {
                            type: 'text'
                        }))
                    }
                    q.removeAttr('name').data({
                        'placeholder-password': true,
                        'placeholder-id': o
                    }).bind('focus.placeholder', b);
                    p.data({
                        'placeholder-textinput': q,
                        'placeholder-id': o
                    }).before(q)
                }
                p = p.removeAttr('id').hide().prev().attr('id', o).show()
            }
            p.addClass('placeholder');
            p[0].value = p.attr('placeholder')
        } else {
            p.removeClass('placeholder')
        }
    }
}(this, document, jQuery));
/**
 * Original source:
 * https://github.com/fabiorogeriosj/jquery-placeholder-label
 *
 * Customized by V.O2 team to support password manager and better floating animation
 */

(function($) {
    $.fn.placeholderLabel = function(options) {

        var settings = $.extend({
            // These are the defaults.
            placeholderColor: "#898989",
            labelColor: "#4AA2CC",
            labelSize: this.css('font-size'),
            fontStyle: "normal",
            useBorderColor: true,
            inInput: true,
            timeMove: 200
        }, options);

        var getActiveLabelMarginTop = function(label, pt) {
            var lh = label.height();

            if (settings.inInput) {
                return -(lh / 2) + "px";
            }

            return -lh - 5 + "px";
        };

        var BindOnData = function(input, label, borderOverlay, pt) {
            borderOverlay.css('opacity', '1.0');
            borderOverlay.css('width', label.width());
            label.css('margin-top', getActiveLabelMarginTop(label, pt));
            label.css('font-size', settings.labelSize);
            label.css('color', settings.placeholderColor);

            input.keyup();
        };

        var activateLabel = function(input, label, borderOverlay, pt) {
            if (settings.useBorderColor) {
                input.css('border-color', settings.labelColor);
            }
            label.css('color', settings.labelColor);

            label.animate({
                marginTop: getActiveLabelMarginTop(label, pt),
                fontSize: settings.labelSize
            }, settings.timeMove);

            borderOverlay.animate({
                opacity: 1.0,
                width: label.width()
            }, settings.timeMove);
        };

        var deactivateLabel = function(input, label, borderOverlay, pt, inactiveLabelMarginTop) {
            var currentPlaceholderSize = input.css('font-size');
            var currentBorderColor = input.css('border-color');

            if (settings.useBorderColor) {
                input.css('border-color', currentBorderColor);
            }
            label.css('color', settings.placeholderColor);

            if (input.val().length > 0) {
                label.animate({
                    marginTop: getActiveLabelMarginTop(label, pt),
                    fontSize: settings.labelSize
                }, settings.timeMove);

                borderOverlay.animate({
                    opacity: 1.0,
                    width: label.width()
                }, settings.timeMove);

            } else {
                label.animate({
                    marginTop: inactiveLabelMarginTop,
                    fontSize: currentPlaceholderSize
                }, settings.timeMove);

                borderOverlay.animate({
                    opacity: 0.0,
                    width: 0
                }, settings.timeMove);
            }

        };

        //Work
        $(this).each(function(i, e) {
            var self = $(e);

            if (self.attr('bind-placeholder-label') !== undefined) {
                var pt = self.css('padding-top');
                BindOnData(self, self.prev(), self.prev().prev(), pt);
            }

            var currentPlaceholderSize = self.css('font-size');
            var currentBorderColor = self.css('border-color');

            if (!self.attr('placeholder')) {
                return null;
            }

            var ep = self.position().left;
            var pt = self.css('padding-top');
            var pl = self.css('padding-left');
            var mt = self.css('margin-top');
            var ml = self.css('margin-left');
            var inactiveLabelMarginTop = Number(pt.replace('px', '')) + Number(mt.replace('px', '')) + "px";

            var label = $('<label></label>');

            label.css('position', 'absolute');
            label.css('margin-top', inactiveLabelMarginTop);
            label.css('margin-left', (Number(pl.replace('px', '')) - 5) + Number(ml.replace('px', '')));
            label.css('padding-left', '5px');
            label.css('padding-right', '5px');

            label.css('cursor', 'initial');
            label.css('font-style', settings.fontStyle);
            label.css('color', settings.placeholderColor);
            label.css('font-size', currentPlaceholderSize);
            var text = self.attr('placeholder');
            self.removeAttr('placeholder');
            label.text(text);

            var borderOverlay = $('<div></div>');
            borderOverlay.css('position', 'absolute');
            borderOverlay.css('height', self.css('border-top-width'));
            borderOverlay.css('width', "0");
            borderOverlay.css('opacity', "0");
            if (settings.inInput) {
                borderOverlay.css('background-color', self.css('background-color'));
            }

            borderOverlay.css('margin-left', label.css('margin-left'));
            borderOverlay.css('padding-left', label.css('padding-left'));
            borderOverlay.css('padding-right', label.css('padding-right'));

            //Event
            label.click(function() {
                self.focus();
            });
            self.focus(function() {
                activateLabel(self, label, borderOverlay, pt);
            });
            self.blur(function() {
                deactivateLabel(self, label, borderOverlay, pt, inactiveLabelMarginTop);
            });
            self.change(function() {
                var isActive = self.val().length > 0 || self.is(":focus");
                if (isActive) {
                    activateLabel(self, label, borderOverlay, pt);
                } else {
                    deactivateLabel(self, label, borderOverlay, inactiveLabelMarginTop);
                }
            });
            if (self.attr('alt')) {
                var textLabel = self.attr('alt');
                var textLabelOld = label.text();
                self.removeAttr('alt');
                self.keyup(function() {
                    if (self.val().length) {
                        label.text(textLabel);
                    } else {
                        label.text(textLabelOld);
                    }
                });
            }
            self.before(borderOverlay);
            self.before(label);

            if (self.val().length) {
                BindOnData(self, label, borderOverlay, pt);
            } else {
                // Hack to catch the data bind from chrome auto-fill
                setTimeout(function() {
                    if (!self.val().length) {
                        return;
                    }

                    BindOnData(self, label, borderOverlay, pt);
                }, 250);
            }

            return self.attr('bind-placeholder-label', 'true');

        });
    }
    ;
}(jQuery));

function Observer() {
    this.subscribers = new Array();
}

Observer.prototype = {
    constructor: Observer,

    subscribe: function(eventName, subscriberCallback) {
        // If this is the first subscriber for this kind of event we initialize subscribers array for this event
        if (this.subscribers[eventName] == null) {
            this.subscribers[eventName] = new Array();
        }

        this.subscribers[eventName].push(subscriberCallback);
    },

    notify: function(eventName, eventArgs) {
        if (this.subscribers[eventName] != null) {
            $.each(this.subscribers[eventName], function(index, value) {
                value(eventArgs);
            });
        }
    }
};

var NotificationCenter = new Observer();

function ObserverEvent() {
    this.handlers = [];
    // observers
}

ObserverEvent.prototype = {

    subscribe: function(eventHandler) {
        this.handlers.push(eventHandler);
    },

    unsubscribe: function(eventHandler) {
        this.handlers = this.handlers.filter(function(item) {
            if (item !== eventHandler) {
                return item;
            }
        });
    },

    fire: function(eventData) {
        this.handlers.forEach(function(eventHandler) {
            eventHandler(eventData);
        });
    }
};
// Restricts input for each element in the set of matched elements to the given inputFilter.
(function($) {
    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    }
    ;
}(jQuery));
/**
 * Original source:
 * https://github.com/fabiorogeriosj/jquery-placeholder-label
 *
 * Customized by V.O2 team to support password manager and better floating animation
 */

// Chrome - Autofill hack
var AUTOFILLED = 'is-autofilled';
var onAutoFillStart = function(el) {
    el.classList.add(AUTOFILLED);
    el.dispatchEvent(new CustomEvent('change'));
};

var onAutoFillCancel = function(el) {
    el.classList.remove(AUTOFILLED);
    el.dispatchEvent(new CustomEvent('change'));
};

var onAnimationStart = function(event) {
    switch (event.animationName) {
    case 'onAutoFillStart':
        return onAutoFillStart(event.target);
    case 'onAutoFillCancel':
        return onAutoFillCancel(event.target);
    }
};

var inputElements = document.querySelectorAll('.input-form .input-field input');
if (inputElements) {
    for (i = 0; i < inputElements.length; ++i) {
        inputElements[i].addEventListener('animationstart', onAnimationStart, false);
    }
}

(function($) {

    $.fn.inputFieldPlaceholder = function() {
        var bindOnData = function(input, placeholder) {
            placeholder.addClass('active');
            input.keyup();
        };

        var activatePlaceholder = function(input, placeholder) {
            var isFocused = input.is(":focus");

            placeholder.addClass('active');
            if (isFocused) {
                placeholder.addClass('focused');
            } else {
                placeholder.removeClass('focused');
            }

        };

        var deactivatePlaceholder = function(input, placeholder) {
            var isActive = input.val().length > 0 || input.hasClass(AUTOFILLED);

            placeholder.removeClass('focused');
            if (isActive) {
                placeholder.addClass('active');
            } else {
                placeholder.removeClass('active');
            }
        };

        var ignoreDatepickerClicks = function(input) {
            var isDatepicker = input.hasClass('datepicker') || input.hasClass('birthday-datepicker');
            var isDatepickerOpen = $('div.datepicker.datepicker-dropdown').length > 0;

            return isDatepicker && isDatepickerOpen;
        };

        var disableTransitions = function(placeholder) {
            var div = placeholder.find('div');
            var label = placeholder.find('label');

            div.addClass('no-transition');
            label.addClass('no-transition');
        };

        var enableTransitions = function(placeholder) {
            var div = placeholder.find('div');
            var label = placeholder.find('label');

            // ReSharper disable once WrongExpressionStatement
            div[0].offsetHeight;
            // ReSharper disable once WrongExpressionStatement
            label[0].offsetHeight;

            div.removeClass('no-transition');
            label.removeClass('no-transition');
        };

        //Work
        $(this).each(function(i, e) {
            var self = $(e);
            var placeholder = self.find('.field-placeholder');
            var input = self.find('input');

            if (placeholder.length === 0 || input.length === 0) {
                return null;
            }

            if (self.attr('bind-placeholder-label') !== undefined) {
                bindOnData(input, placeholder);
                return self;
            }

            //Event
            placeholder.click(function() {
                input.focus();
            });
            input.focus(function() {
                activatePlaceholder(input, placeholder);
            });
            input.blur(function() {
                if (ignoreDatepickerClicks(input)) {
                    return;
                }

                deactivatePlaceholder(input, placeholder);
            });
            input.change(function() {
                var isActive = input.val().length > 0 || input.hasClass(AUTOFILLED);
                var isFocus = input.is(":focus");

                if (isActive && !isFocus) {
                    // Password manager auto-fill
                    disableTransitions(placeholder);
                }

                if (isActive || isFocus) {
                    activatePlaceholder(input, placeholder);
                } else {
                    deactivatePlaceholder(input, placeholder);
                }

                if (isActive && !isFocus) {
                    // Password manager auto-fill
                    enableTransitions(placeholder);
                }

            });

            var isActive = input.val().length > 0 || input.hasClass(AUTOFILLED);
            if (isActive) {
                bindOnData(input, placeholder);
            } else {
                // Backup hack to catch the data bind from chrome auto-fill
                setTimeout(function() {
                    input.change();
                }, 200);
            }

            return self.attr('bind-placeholder-label', 'true');
        });
    }
    ;
}(jQuery));

(function($) {
    $.fn.timeInputField = function() {
        var requiresConvert = function(value) {

            var segments = value.split(':');
            for (var i = 0; i < segments.length; i++) {
                var item = segments[i];
                if (i >= segments.length - 2 && item.length > 2) {
                    return true;
                }
            }

            return false;
        };

        var convertInputToTime = function(input) {
            var val = input.val();

            if (!requiresConvert(val)) {
                return;
            }

            var addedSegmentsCount = 0;
            var result = replaceAll(val, ":", "");
            for (var i = result.length - 2; i >= 1 && addedSegmentsCount < 2; i -= 2) {
                result = insert(result, i, ":");
                addedSegmentsCount++;
            }

            input.val(result);
        };

        //Work
        $(this).each(function(i, e) {
            var self = $(e);
            self.inputFilter(function(value) {
                return /^[\d+:]*$/.test(value);
            });

            self.change(function() {
                convertInputToTime(self);
            });

            self.on('input', function(e) {
                convertInputToTime(self);
            });

            if (self.val().length) {
                convertInputToTime(self);
            }

            return self.attr('bind-placeholder-label', 'true');
        });

    }
    ;
}(jQuery));

/* 
 * Misc
 */
const EmptyGuid = "00000000-0000-0000-0000-000000000000";
const AnimDuration = 250;
const OtherCrossTrainingType = 5;

var UserType = {
    Athlete: 0,
    Coach: 1,
    EnumCount: 2,

    enumValue: function(value) {
        if (Validate.requiredInteger(value)) {
            return parseInt(value);
        }

        switch ((value + "").toLowerCase()) {
        case "athlete":
            return UserType.Athlete;
        case "coach":
            return UserType.Coach;
        default:
            return undefined;
        }
    }
};

var QualitySessionType = {
    Rest: 0,
    Easy: 1,
    Marathon: 2,
    Threshold: 3,
    Interval: 4,
    Repetition: 5,
    Hills: 6,
    Text: 7,
    FastReps: 8,

    enumValue: function(value) {
        if (Validate.requiredInteger(value)) {
            return parseInt(value);
        }

        switch (value) {
        case "Rest":
            return QualitySessionType.Rest;
        case "Easy":
            return QualitySessionType.Easy;
        case "Marathon":
            return QualitySessionType.Marathon;
        case "Threshold":
            return QualitySessionType.Threshold;
        case "Interval":
            return QualitySessionType.Interval;
        case "Repetition":
            return QualitySessionType.Repetition;
        case "Hills":
            return QualitySessionType.Hills;
        case "Text":
            return QualitySessionType.Text;
        case "Fast Reps":
        case "FastReps":
            return QualitySessionType.FastReps;
        default:
            return QualitySessionType.Easy;
        }
    },

    stringValue: function(value) {
        if (!Validate.requiredInteger(value)) {
            return value;
            // Already a string
        }

        var enumValue = parseInt(value);
        switch (enumValue) {
        case QualitySessionType.Rest:
            return "Rest";
        case QualitySessionType.Easy:
            return "Easy";
        case QualitySessionType.Marathon:
            return "Marathon";
        case QualitySessionType.Threshold:
            return "Threshold";
        case QualitySessionType.Interval:
            return "Interval";
        case QualitySessionType.Repetition:
            return "Repetition";
        case QualitySessionType.Hills:
            return "Hills";
        case QualitySessionType.Text:
            return "Text";
        case QualitySessionType.FastReps:
            return "FastReps";
        default:
            return "Easy";
        }
    }
};

var CrossTrainingType = {
    Elliptical: 1,
    Bike: 2,
    Swim: 3,
    Strength: 4,
    Other: 5,
    CrossFit: 6,
    Yoga: 7,
    Rowing: 8,
    Stepping: 9,

    enumValue: function(value) {
        if (Validate.requiredInteger(value)) {
            return parseInt(value);
        }

        switch (value) {
        case "Elliptical":
            return CrossTrainingType.Elliptical;
        case "Bike":
            return CrossTrainingType.Bike;
        case "Swim":
            return CrossTrainingType.Swim;
        case "Strength":
            return CrossTrainingType.Strength;
        case "Other":
            return CrossTrainingType.Other;
        case "CrossFit":
            return CrossTrainingType.CrossFit;
        case "Yoga":
            return CrossTrainingType.Yoga;
        case "Rowing":
            return CrossTrainingType.Rowing;
        case "Stepping":
            return CrossTrainingType.Stepping;
        default:
            return CrossTrainingType.Other;
        }
    }

};

var CrossTrainingItemType = {
    Unknown: 0,
    RepeatGroup: 1,
    Rest: 2,
    Cycling: 3,
    Swimming: 4,
    Strength: 5,
    Cardio: 6
}

var HRZone = {
    Unknown: 0,
    Zone1: 1,
    Zone2: 2,
    Zone3: 3,
    Zone4: 4,
    Zone5: 5,

    enumValue: function(value) {
        if (Validate.requiredInteger(value)) {
            return parseInt(value);
        }

        switch (value) {
        case "Zone1":
            return HRZone.Zone1;
        case "Zone2":
            return HRZone.Zone2;
        case "Zone3":
            return HRZone.Zone3;
        case "Zone4":
            return HRZone.Zone4;
        case "Zone5":
            return HRZone.Zone5;
        default:
            return HRZone.Unknown;
        }
    }

};

var DistanceUnit = {
    m: 0,
    mi: 1,
    km: 2,
    min: 3,
    sec: 4,
    rep: 5,
    yd: 6,
    EnumCount: 7,

    stringValue: function(value) {
        if (!Validate.requiredInteger(value)) {
            return value;
            // Already a string
        }

        var enumValue = parseInt(value);
        switch (enumValue) {
        case DistanceUnit.m:
            return "m";
        case DistanceUnit.mi:
            return "mi";
        case DistanceUnit.km:
            return "km";
        case DistanceUnit.min:
            return "min";
        case DistanceUnit.sec:
            return "sec";
        case DistanceUnit.rep:
            return "rep";
        case DistanceUnit.yd:
            return "yd";
        default:
            return undefined;
        }
    },

    enumValue: function(value) {
        if (Validate.requiredInteger(value)) {
            return parseInt(value);
        }

        switch (value) {
        case "m":
            return DistanceUnit.m;
        case "mi":
            return DistanceUnit.mi;
        case "km":
            return DistanceUnit.km;
        case "min":
            return DistanceUnit.min;
        case "sec":
            return DistanceUnit.sec;
        case "rep":
            return DistanceUnit.rep;
        case "yd":
            return DistanceUnit.yd;
        default:
            return undefined;
        }
    },

    isTimeUnit: function(value) {
        const distanceUnit = DistanceUnit.enumValue(value);
        return distanceUnit === DistanceUnit.min || distanceUnit === DistanceUnit.sec;
    }
};

var RecoveryDistanceUnit = {
    JogMeters: 0,
    JogMiles: 1,
    JogKilometers: 2,
    JogMinutes: 3,
    JogSeconds: 4,
    JogReps: 5,
    WalkMeters: 6,
    WalkMiles: 7,
    WalkKilometers: 8,
    WalkMinutes: 9,
    WalkSeconds: 10,
    WalkReps: 11,
    EnumCount: 12,
    MatchingDistanceEnumCount: 6,

    stringValue: function(value) {
        if (!Validate.requiredInteger(value)) {
            return value;
            // Already a string
        }

        var stringValues = ["m (jog)", "mi (jog)", "km (jog)", "min (jog)", "sec (jog)", "rep (jog)", "m (walk)", "mi (walk)", "km (walk)", "min (walk)", "sec (walk)", "rep (walk)"];

        var enumValue = parseInt(value);
        if (enumValue < 0 || enumValue >= this.EnumCount) {
            return "";
        }

        return stringValues[enumValue];
    },

    enumValue: function(value) {
        if (Validate.requiredInteger(value)) {
            return parseInt(value);
        }

        return undefined;
    },

    isTimeUnit: function(value) {
        const distanceUnit = RecoveryDistanceUnit.enumValue(value);
        return distanceUnit === RecoveryDistanceUnit.WalkMinutes || distanceUnit === RecoveryDistanceUnit.WalkSeconds || distanceUnit === RecoveryDistanceUnit.JogMinutes || distanceUnit === RecoveryDistanceUnit.JogSeconds;
    }
};

var TemperatureUnit = {
    F: 0,
    C: 1,
    EnumCount: 2
};

var AltitudeUnit = {
    ft: 0,
    m: 1,
    EnumCount: 2
};

var ProductType = {
    None: 0,
    TrainingPlan: 1,
    PrivateCoaching: 2,
    CoachModule: 3,
    Vdot: 4,
    Consultation: 5,
    VirtualRace: 6,
    VdotAthlete: 7,

    enumValue: function(value) {
        if (Validate.requiredInteger(value)) {
            return parseInt(value);
        }

        return undefined;
    }
};

var EventType = {
    EasyPace: 0,
    QualitySession: 1,
    Race: 2,
    DayOff: 3,
    CrossTraining: 4,
    ImportedActivity: 5,
    Note: 6,

    enumValue: function(value) {
        if (Validate.requiredInteger(value)) {
            return parseInt(value);
        }

        return undefined;
    }
};

var CalendarEventStatus = {
    Planned: 0,
    Skipped: 1,
    Modified: 2,
    Completed: 3
}

var CustomTrainingPaceType = {
    Effort: 0,
    Distance: 1,
}

var ImportedActivitySource = {
    Garmin: 0,
    Strava: 1,
    Coros: 2,
    UserUpload: 3,
    VdotWatchApp: 4,
    HealthKit: 5,
    Spike: 6,
    GoogleFit: 7,
    Polar: 8,
    Suunto: 9,
    Fitbit: 10,
    SamsungHealth: 11,
    HealthConnect: 12,
    Wahoo: 13,
    Xiaomi: 14,
    Whoop: 15,
    Oura: 16,
    WearOS: 17,
    Huawei: 18,
    Peloton: 19,
    Zwift: 20,
    Unknown: 21,
}

/*
 * Set client side timezone cookie 
 */

if ($.cookie('_timeZoneOffset') === null) {
    var timeZoneOffset = new Date().getTimezoneOffset();
    // in minutes
    $.cookie('_timeZoneOffset', timeZoneOffset.toString(), {
        expires: 1
    });
}

/*
 * Inheritance
 */
var InhertitsFrom = function(child, parent) {
    child.prototype = Object.create(parent.prototype);
};

var isGoogleMapsScriptLoaded = false;
var GoogleMapsScriptLoadedEvent = 'Global_GoogleMapsScriptLoadedEvent';

function googleMapsScriptLoaded() {
    isGoogleMapsScriptLoaded = true;
    NotificationCenter.notify(GoogleMapsScriptLoadedEvent, true);
}

/*
 * String Helpers
 */
if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    }
    ;
}

function trimChars(str, char) {
    var regex = new RegExp("^[" + char + "]+|[" + char + "]+$","g");
    return str.replace(regex, "");
}

function isEmptyString(str) {
    return (!str || 0 === str.length);
}

function hasAttribute($element, attribute) {
    var attr = $element.attr(attribute);
    return typeof attr !== typeof undefined && attr !== false;
}

function boolValue(str) {
    if (!str) {
        return false;
    }

    if (isBoolean(str)) {
        return str;
    }

    const value = str.toLowerCase().trim();
    return value === "true" || value === "yes" || value === "1";
}

function makeString(object) {
    if (object == null) {
        return '';
    }

    return String(object);
}
;
function escapeRegExp(str) {
    return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
;
function defaultToWhiteSpace(characters) {
    if (characters == null)
        return '\\s';
    else if (characters.source)
        return characters.source;
    else
        return '[' + escapeRegExp(characters) + ']';
}

function insert(str, index, value) {
    if (!str) {
        return str;
    }

    return str.substr(0, index) + value + str.substr(index);
}

function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
}

function isBoolean(value) {
    return Object.prototype.toString.call(value) === '[object Boolean]';
}

function replaceAll(str, search, replacement) {
    return str.split(search).join(replacement);
}
;
function ltrim(str, characters) {
    var nativeTrimLeft = String.prototype.trimLeft;
    str = makeString(str);
    if (!characters && nativeTrimLeft)
        return nativeTrimLeft.call(str);
    characters = defaultToWhiteSpace(characters);
    return str.replace(new RegExp('^' + characters + '+'), '');
}

function trim(str, characters) {
    var nativeTrim = String.prototype.trim;
    str = makeString(str);
    if (!characters && nativeTrim)
        return nativeTrim.call(str);
    characters = defaultToWhiteSpace(characters);
    return str.replace(new RegExp('^' + characters + '+|' + characters + '+$','g'), '');
}

function rtrim(str, characters) {
    var nativeTrimRight = String.prototype.trimRight;
    str = makeString(str);
    if (!characters && nativeTrimRight)
        return nativeTrimRight.call(str);
    characters = defaultToWhiteSpace(characters);
    return str.replace(new RegExp(characters + '+$'), '');
}

function bind(scope, fn) {
    return function() {
        return fn.apply(scope, arguments);
    }
    ;
}

function isObject(value) {
    return value && typeof value === 'object';
}

function removeClassMatching($element, classNameRegex) {
    $element.removeClass(function(index, className) {
        return (className.match(classNameRegex) || []).join(' ');
    });
}

function outerHtml($element) {
    var tmp = $element.wrap('<div class="wrap-unwrap"></div>');
    var html = tmp.parent().html();
    tmp.unwrap();
    return html;
}

function enableTooltipster($element, options) {

    if (!options) {
        options = {};
    }

    if (!options.theme) {
        options.theme = ['tooltipster-light', 'tooltipster-light-customized'];
    }

    $element.tooltipster(options);
}

function animateShow($element, show, animated) {
    if (animated === undefined || animated == null) {
        animated = true;

    }
    if (show) {
        $element.css({
            visibility: 'visible'
        });
    }

    $element.animate({
        opacity: show ? 1 : 0,
    }, animated ? 'fast' : 0, null, function(value) {
        if (!show) {
            $element.css({
                visibility: 'hidden'
            });
        } else {
            $element.css({
                visibility: 'visible'
            });
        }
    });
}

function jqExists($element) {
    return $element && $element.length;
}

// 
// Ajax wrappers
//
function httpPost(url, data, callback) {
    return $.post(url, data, callback).fail(function(xhr, status, error) {
        callback({
            status: "NOK",
            error: "Unknown error occurred: " + error
        });
    });
}

function httpGet(url, callback) {
    $.ajax({
        url: url,
        success: callback,
        error: function(xhr, status, error) {
            callback({
                status: "NOK",
                error: "Unknown error occurred: " + error
            });
        },
        cache: false
    });
}

function httpFormPost(url, data, callback) {
    $.ajax({
        url: url,
        type: 'post',
        data: data,
        contentType: false,
        processData: false,
        success: (response)=>{
            callback(response);
        }
        ,
        error: function(xhr, status, error) {
            callback({
                status: "NOK",
                error: "Unknown error occurred: " + error
            });
        },
    });
}

function _excludeJsonKeys(obj, keys) {
    const dup = {};
    for (let key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
            continue;
        }
        if (keys.indexOf(key) === -1) {
            dup[key] = obj[key];
        }

    }
    return dup;
}

function serializeJson(object, excludeProperties) {
    if (!excludeProperties) {
        return JSON.stringify(object);
    }

    return JSON.stringify(_excludeJsonKeys(object, excludeProperties));
}

//
// Common Response Helpers
//
function IsValidAjaxResponse(response) {
    return response && isEmptyString(response.error);
}

function ValidateAjaxResponse(response) {
    if (!IsValidAjaxResponse(response)) {
        var keepVisible = isEmptyString(response.errorId) === false || response.requiresUserDismiss;
        ShowErrorPopup(response.error, keepVisible);
        return false;
    } else {
        return true;
    }
}

function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'resizable=yes,scrollbars=yes,titlebar=yes,statusbar=yes,location=yes,width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

function BeginRequest(delay) {
    if (delay === undefined) {
        delay = 100;
    }

    $("#overlay").LoadingOverlay("show", {
        delay: delay,
        fade: [400, 200],
        maxSize: "60px",
        zIndex: 1000
    });
}

function EndRequest(successMessage, operationResult) {
    $("#overlay").LoadingOverlay("hide", true);
    if (operationResult != undefined && ValidateAjaxResponse(operationResult)) {
        if (!isEmptyString(successMessage)) {
            ShowInformationPopup(successMessage, false, null);
        }
        return true;
    }

    return false;
}

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

window.matchMedia || (window.matchMedia = function() {
    "use strict";

    // For browsers that support matchMedium api such as IE 9 and webkit
    var styleMedia = (window.styleMedia || window.media);

    // For those that don't support matchMedium
    if (!styleMedia) {
        var style = document.createElement('style')
          , script = document.getElementsByTagName('script')[0]
          , info = null;

        style.type = 'text/css';
        style.id = 'matchmediajs-test';

        script.parentNode.insertBefore(style, script);

        // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
        info = ('getComputedStyle'in window) && window.getComputedStyle(style, null) || style.currentStyle;

        styleMedia = {
            matchMedium: function(media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                if (style.styleSheet) {
                    style.styleSheet.cssText = text;
                } else {
                    style.textContent = text;
                }

                // Test if media query is true or false
                return info.width === '1px';
            }
        };
    }

    return function(media) {
        return {
            matches: styleMedia.matchMedium(media || 'all'),
            media: media || 'all'
        };
    }
    ;
}());

$.extend($.expr[':'], {
    'startsWith': function(elem, i, match, array) {
        return (elem.textContent || elem.innerText || '').toLowerCase().startsWith((match[3] || "").toLowerCase());
    }
});
//The RunSmartPopupsFacade.js is a Facade to popups mechanism. These functions should be used all over the application to show notifications, errors, questions etc.
//Keeping this in one place behind the facade will make easier to replace one popups third party mechanism to another

//Requires jQuery and jquery.toastmessage

function ShowInformationPopup(informationToShow, keepVisible, callback) {
    ShowInformationPopup(informationToShow, keepVisible, callback, false);
}

function ShowInformationPopup(informationToShow, keepVisible, callback, showCloseButton) {
    if (informationToShow == null || informationToShow == "") {
        return;
    }

    ShowToastMessage(informationToShow, keepVisible, 'success', 2000, callback, showCloseButton);
}

function ShowValidateMessages(errorMessages) {
    if (!errorMessages || errorMessages.length === 0) {
        return;
    }

    ShowErrorPopup(errorMessages.join('<br/>'), false, null);
}

function ShowErrorPopup(errorMessage) {
    ShowErrorPopup(errorMessage, false, null);
}

function ShowErrorPopup(errorMessage, keepVisible, callback) {
    if (errorMessage == null || errorMessage == "") {
        return;
    }

    ShowToastMessage(errorMessage, keepVisible, 'error', 4000, callback, keepVisible);
}

function ClosePopup(popup) {
    if (popup == null) {
        return;
    }

    $().toastmessage('removeToast', popup);
}

function IsValidCallback(callback) {
    return callback != null && typeof (callback) === "function";
}

function ShowToastMessage(message, keepVisible, type, stayTime, callback) {
    ShowToastMessage(message, keepVisible, type, stayTime, callback, keepVisible);
}

function ShowToastMessage(message, keepVisible, type, stayTime, callback, showCloseButton) {
    if (keepVisible == null) {
        keepVisible = false;
    }

    if (keepVisible) {
        // It doesn't make sense to keepVisible without close button
        showCloseButton = true;
    }
    if (stayTime == null) {
        stayTime = 2000;
    }
    return $().toastmessage('showToast', {
        stayTime: stayTime,
        text: message,
        sticky: keepVisible,
        type: type,
        showCloseButton: showCloseButton,
        close: function() {
            if (IsValidCallback(callback)) {
                callback();
            }
        }
    });
}

function ConfirmPopupPresenter() {
    this.confirmCallback = null;
    this.cancelCallback = null;

    this.initialize();
}

ConfirmPopupPresenter.prototype = {
    initialize: function() {
        this.initializeControls();
    },

    initializeControls: function() {
        this.confirmPopup = $('#ConfirmPopupDialog').dialog({
            autoOpen: false,
            modal: true,
            width: GetPopupWidth(460),
            classes: "confirm-dialog",
            dialogClass: "confirm-dialog",
            buttons: {
                'No': {
                    click: bind(this, this.onCancelClicked),
                    text: 'No',
                    id: 'ConfirmPopupDialogButtonCancel',
                    class: 'btn btn-default'
                },
                'Yes': {
                    click: bind(this, this.onConfirmClicked),
                    text: 'Yes',
                    id: 'ConfirmPopupDialogButtonSuccess',
                    class: 'btn btn-success'
                },
                'Danger': {
                    click: bind(this, this.onConfirmClicked),
                    text: 'Yes',
                    id: 'ConfirmPopupDialogButtonDangerSuccess',
                    class: 'btn btn-danger'
                }
            }
        });

        this.messageLabel = $('#ConfirmPopupDialog').find('#MessageLabel');
    },

    show: function(message, isDanger, confirmCallback, cancelCallback, confirmButtonName, cancelButtonName, hideConfirmButton) {
        this.confirmCallback = confirmCallback;
        this.cancelCallback = cancelCallback;
        this.messageLabel.html(message);

        if (hideConfirmButton) {
            $('#ConfirmPopupDialogButtonSuccess').hide();
            $('#ConfirmPopupDialogButtonDangerSuccess').hide();
        } else if (isDanger) {
            $('#ConfirmPopupDialogButtonSuccess').hide();
            $('#ConfirmPopupDialogButtonDangerSuccess').show();
        } else {
            $('#ConfirmPopupDialogButtonSuccess').show();
            $('#ConfirmPopupDialogButtonDangerSuccess').hide();
        }

        if (confirmButtonName) {
            $('#ConfirmPopupDialogButtonSuccess').text(confirmButtonName);
            $('#ConfirmPopupDialogButtonDangerSuccess').text(confirmButtonName);
        } else {
            $('#ConfirmPopupDialogButtonSuccess').text("Yes");
            $('#ConfirmPopupDialogButtonDangerSuccess').text("Yes");
        }

        if (cancelButtonName) {
            $('#ConfirmPopupDialogButtonCancel').text(cancelButtonName);
        } else {
            $('#ConfirmPopupDialogButtonCancel').text("No");
        }

        this.confirmPopup.dialog("open");
    },

    onCancelClicked: function() {
        this.confirmPopup.dialog("close");
        if (this.cancelCallback) {
            this.cancelCallback();
        }
    },

    onConfirmClicked: function() {
        this.confirmPopup.dialog("close");
        if (this.confirmCallback) {
            this.confirmCallback();
        }
    },
}

var confirmPopupPresenter;

function ShowConfirmPopupWithConfig(message, config) {
    if (!confirmPopupPresenter) {
        confirmPopupPresenter = new ConfirmPopupPresenter();
    }
    confirmPopupPresenter.show(message, false, config.confirmCallback, config.cancelCallback, config.confirmButtonText, config.cancelButtonText, config.hideConfirmButton);
}

function ShowConfirmPopup(message, confirmCallback) {
    if (!confirmPopupPresenter) {
        confirmPopupPresenter = new ConfirmPopupPresenter();
    }
    confirmPopupPresenter.show(message, false, confirmCallback);
}

function ShowInfoPopup(message) {
    if (!confirmPopupPresenter) {
        confirmPopupPresenter = new ConfirmPopupPresenter();
    }

    confirmPopupPresenter.show(message, false, null, null, null, "Ok", true);
}

function ShowConfirmDangerPopup(message, confirmCallback) {
    if (!confirmPopupPresenter) {
        confirmPopupPresenter = new ConfirmPopupPresenter();
    }
    confirmPopupPresenter.show(message, true, confirmCallback);
}

function PopupPresenter() {
    this.dialogId = '';

    this.initialize();
}

PopupPresenter.prototype = {
    initialize: function() {},

    show: function(dialogId, dialogClass) {
        this.dialogId = dialogId;
        this.popup = $(dialogId).dialog({
            autoOpen: false,
            modal: true,
            width: GetPopupWidth(),
            dialogClass: dialogClass,
            buttons: {
                'Close': {
                    'click': bind(this, this.onCloseClicked),
                    'text': 'Close',
                    'class': 'btn btn-success'
                }
            }
        });
        this.popup.dialog("open");
    },

    onCloseClicked: function() {
        this.popup.dialog("close");
    }
};

function ShowPopup(dialogId, dialogClass) {
    var popupPresenter = new PopupPresenter();
    popupPresenter.show(dialogId, dialogClass);

    return popupPresenter;
}

function GetPopupWidth(maxPopupWidth) {
    if (!maxPopupWidth) {
        maxPopupWidth = 1200;
    }

    var documentWidth = $(document).width();
    if (documentWidth >= 1200) {
        return Math.min(570, maxPopupWidth);
    } else if (documentWidth >= 768) {
        return Math.min(460, maxPopupWidth);
    } else if (documentWidth > 480) {
        return Math.min(400, maxPopupWidth);
    }

    return Math.min(documentWidth - 40, maxPopupWidth);
}

function ModalPresenter($element, hideOnCloseButton) {
    this.$element = $element;
    this.hideOnCloseButton = hideOnCloseButton;
    this.initialize();
}

ModalPresenter.prototype = {

    initialize: function() {
        this.onHistoryPopListener = bind(this, this.onHistoryPop);
        window.addEventListener('popstate', this.onHistoryPopListener);

        if (this.hideOnCloseButton) {
            this.$element.find(".modal-close").click(bind(this, function() {
                this.hide();
            }));
        }
    },

    show: function() {
        this.selfRef = this;

        this.$element.fadeIn('fast');
        $('body').addClass('modal-open');
        $('body').on('keydown.modal', bind(this, function(e) {
            if (e.key === "Escape") {
                this.hide();
            }
        }));

        var currentState = history.state;
        if (!currentState) {
            currentState = {};
        }
        currentState.vdotModalPresenterActive = true;
        window.history.replaceState(currentState, "Modal-Show");

        const state = {
            vdotModalPresenterActive: true
        };
        window.history.pushState(state, "Show Modal");

    },

    hide: function() {
        this.selfRef = undefined;
        var currentState = history.state;
        currentState.vdotModalPresenterActive = undefined;
        window.history.replaceState(currentState, "Modal-Hide");
        window.removeEventListener('popstate', this.onHistoryPopListener);

        $('body').off("keydown.modal");
        this.$element.fadeOut('fast', function() {
            $('body').removeClass('modal-open');
        });
    },

    onHistoryPop: function(event) {
        // not our event
        if (!event.state) {
            return;
        }

        if (event.state.vdotModalPresenterActive) {
            this.hide();
            return;
        }
    }
};

function ShowModal($element, hideOnCloseButton) {
    var modalPresenter = new ModalPresenter($element,hideOnCloseButton);
    modalPresenter.show();

    return modalPresenter;
}

function HideModal() {
    window.history.back();
}

function ShowLoadingOverlay(container) {
    container.LoadingOverlay('show', {
        fade: [400, 200],
        maxSize: '60px',
        zIndex: 1000,
    });
}

function ShowBusyIndicator(container) {
    container.LoadingOverlay('show', {
        fade: [400, 200],
        maxSize: '60px',
        zIndex: 1000,
        color: "rgba(255, 0, 255, 0.0)"
    });
}

function HideLoadingOverlay(container) {
    container.LoadingOverlay('hide', true);
}

function BasePresenter() {}

BasePresenter.prototype = {
    beginRequest: function(delay) {
        BeginRequest(delay);

    },

    endRequest: function(successMessage, operationResult) {
        EndRequest(successMessage, operationResult);
    },

    requestFailed: function(result) {
        $("#overlay").LoadingOverlay("hide", true);
        var operationResult = jQuery.parseJSON(result.responseText);

        if (operationResult == undefined || isEmptyString(operationResult.error)) {
            ShowErrorPopup("Request Failed: " + result.status, false);
            return;
        }

        var hasErrorId = isEmptyString(operationResult.errorId) === false;
        ShowErrorPopup(operationResult.error, hasErrorId);
    }
};
// ReSharper disable InconsistentNaming
// ReSharper restore InconsistentNaming
var Forms;
(function(Forms) {
    function setupInputForms() {
        return window.setupInputForms();
    }
    Forms.setupInputForms = setupInputForms;
    function setupInputFields(element) {
        return window.setupInputFields(element);
    }
    Forms.setupInputFields = setupInputFields;
    function getCheckboxValue(element) {
        return window.getCheckboxFieldValue(element);
    }
    Forms.getCheckboxValue = getCheckboxValue;
    function setCheckboxValue(element, value) {
        return window.setCheckboxFieldValue(element, value);
    }
    Forms.setCheckboxValue = setCheckboxValue;
    function getRadioValue(element) {
        return window.getRadioButtonsFieldValue(element);
    }
    Forms.getRadioValue = getRadioValue;
    function setRadioValue(element, value) {
        return window.setRadioButtonsFieldValue(element, value);
    }
    Forms.setRadioValue = setRadioValue;
    function getDropdownFieldValue(element) {
        return window.getDropdownFieldValue(element);
    }
    Forms.getDropdownFieldValue = getDropdownFieldValue;
    function getDropdownFieldIntValue(element) {
        return InputParser.parseInt(this.getDropdownFieldValue(element), undefined);
    }
    Forms.getDropdownFieldIntValue = getDropdownFieldIntValue;
    function getDropdownFieldBoolValue(element) {
        return InputParser.parseBool(this.getDropdownFieldValue(element));
    }
    Forms.getDropdownFieldBoolValue = getDropdownFieldBoolValue;
    function setDropdownFieldValue(element, value) {
        return window.setDropdownFieldValue(element, value);
    }
    Forms.setDropdownFieldValue = setDropdownFieldValue;
    function setDropdownOptions(element, options) {
        return window.setDropdownOptions(element, options);
    }
    Forms.setDropdownOptions = setDropdownOptions;
    function getTextFieldValue(element) {
        return window.getTextFieldValue(element);
    }
    Forms.getTextFieldValue = getTextFieldValue;
    function getTextFieldIntValue(element) {
        return InputParser.parseInt(this.getTextFieldValue(element), undefined);
    }
    Forms.getTextFieldIntValue = getTextFieldIntValue;
    function setTextFieldValue(element, value, triggerChanged) {
        if (triggerChanged === void 0) {
            triggerChanged = false;
        }
        return window.setTextFieldValue(element, value, triggerChanged);
    }
    Forms.setTextFieldValue = setTextFieldValue;
    function resetTextField(element) {
        Forms.setTextFieldValue(element, "");
        Input.setHasValidInput(element, true);
    }
    Forms.resetTextField = resetTextField;
    function getTimeTextFieldValue(element) {
        var timeText = this.getTextFieldValue(element);
        return Conversion.fromTimeString(timeText);
    }
    Forms.getTimeTextFieldValue = getTimeTextFieldValue;
    function getDatepickerFieldValue(element) {
        return window.getDatepickerFieldValue(element);
    }
    Forms.getDatepickerFieldValue = getDatepickerFieldValue;
    function getDistanceFieldValue(element) {
        return window.getDatepickerFieldValue(element);
    }
    Forms.getDistanceFieldValue = getDistanceFieldValue;
    function setupSpinner(element) {
        window.setupSpinner(element);
    }
    Forms.setupSpinner = setupSpinner;
    function isButtonBusy(element) {
        return window.isSpinnerVisible(element);
    }
    Forms.isButtonBusy = isButtonBusy;
    function setButtonBusy(element) {
        window.showSpinner(element);
    }
    Forms.setButtonBusy = setButtonBusy;
    function setButtonIdle(element) {
        window.hideSpinner(element);
    }
    Forms.setButtonIdle = setButtonIdle;
    function setupClipboard(selector) {
        window.setupClipboard(selector);
    }
    Forms.setupClipboard = setupClipboard;
    function loadContent(element, url, onSuccess) {
        if (onSuccess === void 0) {
            onSuccess = undefined;
        }
        element.html("<div class='loader loader-large'></div>");
        Http.get(url, function(response) {
            element.html(response);
            element.hide();
            element.fadeIn("slow");
            if (onSuccess) {
                onSuccess();
            }
        }, function(error) {
            var errorMessage = error.error || "Failed to load content.";
            element.html("<div class=\"alert alert-error\"> ".concat(errorMessage, " </div>"));
        });
    }
    Forms.loadContent = loadContent;
    function hideAlertBox(element) {
        element.html("").removeClass("alert-error").removeClass("alert-danger").removeClass("alert-info").removeClass("alert-success").removeClass("alert-warning").hide();
    }
    Forms.hideAlertBox = hideAlertBox;
    function showSuccessAlertBox(element, html) {
        hideAlertBox(element);
        element.html(html).addClass("alert-success").fadeIn();
    }
    Forms.showSuccessAlertBox = showSuccessAlertBox;
    function showInfoAlertBox(element, html) {
        hideAlertBox(element);
        element.html(html).addClass("alert-info").fadeIn();
    }
    Forms.showInfoAlertBox = showInfoAlertBox;
    function showErrorAlertBox(element, html) {
        hideAlertBox(element);
        element.html(html).addClass("alert-error").addClass("alert-danger").fadeIn();
    }
    Forms.showErrorAlertBox = showErrorAlertBox;
}
)(Forms || (Forms = {}));
var Input;
(function(Input) {
    function getInt(input, defaultValue) {
        if (defaultValue === void 0) {
            defaultValue = 0;
        }
        return InputParser.parseInt(input, defaultValue);
    }
    Input.getInt = getInt;
    function getNumber(input, defaultValue) {
        if (defaultValue === void 0) {
            defaultValue = 0.0;
        }
        return InputParser.parseFloat(input, defaultValue);
    }
    Input.getNumber = getNumber;
    function getBool(input) {
        return InputParser.parseBool(input);
    }
    Input.getBool = getBool;
    function validateTextField(field, validatorFunction, markInputInvalid) {
        if (markInputInvalid === void 0) {
            markInputInvalid = true;
        }
        return window.validateTextField(field, validatorFunction, markInputInvalid);
    }
    Input.validateTextField = validateTextField;
    function validateDropdownField(field, validatorFunction, markInputInvalid) {
        if (markInputInvalid === void 0) {
            markInputInvalid = true;
        }
        return window.validateDropdownField(field, validatorFunction, markInputInvalid);
    }
    Input.validateDropdownField = validateDropdownField;
    function validateCheckboxField(field, markInputInvalid) {
        if (markInputInvalid === void 0) {
            markInputInvalid = true;
        }
        return window.validateCheckboxField(field, markInputInvalid);
    }
    Input.validateCheckboxField = validateCheckboxField;
    function setHasValidInput(field, withSubInputField) {
        if (withSubInputField === void 0) {
            withSubInputField = true;
        }
        return window.setHasValidInput(field, withSubInputField);
    }
    Input.setHasValidInput = setHasValidInput;
    function setHasInvalidInput(field) {
        return window.setHasInvalidInput(field);
    }
    Input.setHasInvalidInput = setHasInvalidInput;
    function toggleValidInput(field, hasValidInput) {
        return window.toggleValidInput(field, hasValidInput);
    }
    Input.toggleValidInput = toggleValidInput;
}
)(Input || (Input = {}));
var Http;
(function(Http) {
    function isValidResponse(response) {
        return window.IsValidAjaxResponse(response);
    }
    Http.isValidResponse = isValidResponse;
    function validateResponse(response) {
        return window.ValidateAjaxResponse(response);
    }
    Http.validateResponse = validateResponse;
    function get(url, onSuccess, onError) {
        $.get(url, function(response) {
            if (!isValidResponse(response)) {
                onError(response);
                return;
            }
            onSuccess(response);
        }).fail(function(xhr, status, error) {
            onError({
                status: "NOK",
                error: error
            });
        });
    }
    Http.get = get;
    function post(url, data, onSuccess, onError) {
        $.post(url, data, function(response) {
            if (!isValidResponse(response)) {
                onError(response);
                return;
            }
            onSuccess(response);
        }).fail(function(xhr, status, error) {
            onError({
                status: "NOK",
                error: error
            });
        });
    }
    Http.post = post;
    function formPost(url, data, onSuccess, onError) {
        window.httpFormPost(url, data, function(response) {
            if (!isValidResponse(response)) {
                onError(response);
                return;
            }
            onSuccess(response);
        });
    }
    Http.formPost = formPost;
    function put(url, data, onSuccess, onError) {
        $.ajax({
            url: url,
            type: 'PUT',
            data: data,
            success: function(response) {
                if (!isValidResponse(response)) {
                    onError(response);
                    return;
                }
                onSuccess(response);
            },
            error: function(jqXHR, textStatus, error) {
                onError({
                    status: "NOK",
                    error: error
                });
            }
        });
    }
    Http.put = put;
    function del(url, onSuccess, onError) {
        $.ajax({
            url: url,
            type: 'DELETE',
            success: function(response) {
                if (!isValidResponse(response)) {
                    onError(response);
                    return;
                }
                onSuccess(response);
            },
            error: function(jqXHR, textStatus, error) {
                onError({
                    status: "NOK",
                    error: error
                });
            }
        });
    }
    Http.del = del;
    function okResponse() {
        return {
            status: "OK",
            error: undefined
        };
    }
    Http.okResponse = okResponse;
}
)(Http || (Http = {}));
var Cookie;
(function(Cookie) {
    function get(name) {
        return jQuery.cookie(name);
    }
    Cookie.get = get;
    function set(name, value, options) {
        if (options === void 0) {
            options = {};
        }
        return jQuery.cookie(name, value, options);
    }
    Cookie.set = set;
}
)(Cookie || (Cookie = {}));
var Popups;
(function(Popups) {
    function beginRequest(delay) {
        if (delay === void 0) {
            delay = undefined;
        }
        window.BeginRequest(delay);
    }
    Popups.beginRequest = beginRequest;
    function endRequest(apiResponse, successMessage) {
        if (apiResponse === void 0) {
            apiResponse = undefined;
        }
        if (successMessage === void 0) {
            successMessage = "";
        }
        return window.EndRequest(successMessage, apiResponse);
    }
    Popups.endRequest = endRequest;
    function showLoadingOverlay(container) {
        window.ShowLoadingOverlay(container);
    }
    Popups.showLoadingOverlay = showLoadingOverlay;
    function hideLoadingOverlay(container) {
        window.HideLoadingOverlay(container);
    }
    Popups.hideLoadingOverlay = hideLoadingOverlay;
    function showSuccessToast(message) {
        window.ShowInformationPopup(message);
    }
    Popups.showSuccessToast = showSuccessToast;
    function showInformationToast(message) {
        window.ShowInformationPopup(message);
    }
    Popups.showInformationToast = showInformationToast;
    function showModal(view, hideOnCloseButton) {
        if (hideOnCloseButton === void 0) {
            hideOnCloseButton = false;
        }
        return window.ShowModal(view, hideOnCloseButton);
    }
    Popups.showModal = showModal;
    function hideModal() {
        window.HideModal();
    }
    Popups.hideModal = hideModal;
    function showConfirm(html, config) {
        window.ShowConfirmPopupWithConfig(html, config);
    }
    Popups.showConfirm = showConfirm;
    function showConfirmDanger(html, confirmCallback) {
        window.ShowConfirmDangerPopup(html, confirmCallback);
    }
    Popups.showConfirmDanger = showConfirmDanger;
    function showError(html, keepVisible) {
        if (keepVisible === void 0) {
            keepVisible = false;
        }
        window.ShowErrorPopup(html, keepVisible);
    }
    Popups.showError = showError;
}
)(Popups || (Popups = {}));
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//# sourceMappingURL=modules.js.map
/// <reference path="~/Scripts/_references.js" />
/// <reference path="~/Views/Shared/_GoogleAnalytics.cshtml" />

var Analytics = {
    onLogin: function(method) {
        this._logEvent("login", {
            'method': method
        });
    },

    onSignUp: function(method) {
        this._logEvent("sign_up", {
            'method': method
        });
    },

    onShowProfileSetupStep: function(step) {
        this._logEvent("show_profile_setup_" + step);
    },

    onViewItem: function(value, currency, items) {
        this._logEvent("view_item", {
            value: value,
            currency: currency,
            items: items
        });
    },

    onAddToCart: function(value, currency, coupon, items) {
        this._logEvent("add_to_cart", {
            value: value,
            currency: currency,
            coupon: coupon,
            items: items
        });
    },

    onBeginCheckout: function(value, currency, coupon, items) {
        this._logEvent("begin_checkout", {
            value: value,
            currency: currency,
            coupon: coupon,
            items: items
        });
    },

    onPurchase: function(value, currency, orderId, coupon, items) {
        this._logEvent("purchase", {
            value: value,
            currency: currency,
            transaction_id: orderId,
            coupon: coupon,
            items: items
        });
    },

    logCalculate: function(inputType, distance, advancedOption) {
        this._logEvent("calculate", {
            type: inputType,
            distance: distance,
            advanced: advancedOption
        });
    },

    logAdShow: function(adName) {
        // ReSharper disable once StringLiteralTypo
        this._logEvent("ad_show_" + adName, {
            ad_name: adName
        });
    },

    logAdClick: function(adName) {
        this._logEvent("ad_click_" + adName, {
            ad_name: adName
        });
    },

    _logEvent: function(eventName, data) {
        // ReSharper disable once IdentifierTypo
        // ReSharper disable once UseOfImplicitGlobalInFunctionScope
        gtag("event", eventName, data);
    }

}

var DateHelper = {

    FromYMDString: function(value) {
        var year = parseInt(value.substring(0, 4));
        var month = parseInt(value.substring(4, 6)) - 1;
        var day = parseInt(value.substring(6, 8));
        return new Date(year,month,day);
    },

    ToYMDString: function(value) {
        if (!value) {
            return undefined;
        }

        if (isString(value)) {
            return value;
        }

        var year = value.getFullYear().toString();
        var month = (value.getMonth() + 1).toString();
        if (month.length == 1) {
            month = "0" + month;
        }
        var day = value.getDate().toString();
        if (day.length == 1) {
            day = "0" + day;
        }
        return year + month + day;
    },

    toDateString: function(date) {
        if (!date) {
            return date;
        }

        return date.toDateString();
    },

    ToYMDWithDash: function(value) {
        var year = value.getFullYear().toString();
        var month = (value.getMonth() + 1).toString();
        if (month.length == 1) {
            month = "0" + month;
        }
        var day = value.getDate().toString();
        if (day.length == 1) {
            day = "0" + day;
        }
        return year + "-" + month + "-" + day;
    },

    ToCalendarMonthParam: function(value) {
        if (!value) {
            return undefined;
        }

        const year = value.getFullYear().toString();
        var month = (value.getMonth() + 1).toString();
        if (month.length == 1) {
            month = "0" + month;
        }
        return year + month + "01";
    },

    fromDatePickerValue: function(value) {
        if (!value) {
            return undefined;
        }

        // mm/dd/yyyy format
        var elements = value.split("/");
        var month = parseInt(elements[0]) - 1;
        var day = parseInt(elements[1]);
        var year = parseInt(elements[2]);

        return new Date(year,month,day);
    },

    toDatePickerDate: function(date) {
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 1).toString();
        if (month.length == 1) {
            month = "0" + month;
        }
        var day = date.getDate().toString();
        if (day.length == 1) {
            day = "0" + day;
        }
        return month + "/" + day + "/" + year;
    },

    isPastDate: function(date) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    },

    isFutureDate: function(date) {
        var today = new Date();
        today.setHours(23, 59, 59, 999);
        return date > today;
    },

    getAge: function(date) {
        if (!date) {
            return 0;
        }

        var today = new Date();
        var age = today.getFullYear() - date.getFullYear();
        var monthDiff = today.getMonth() - date.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
            age--;
        }

        return age;
    },

    getDayOfYear: function(date) {
        const start = new Date(date.getFullYear(),0,0);
        const diff = date - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const day = Math.floor(diff / oneDay);
        return day;
    }
};
var Conversion = {
    isMinUnit: function(unit) {
        return unit === "min" || unit == "3" || unit === DistanceUnit.min;
    },

    isTimeUnit: function(unit) {
        return unit === "min" || unit === "sec" || unit == "3" || unit == "4" || unit === DistanceUnit.min || unit === DistanceUnit.sec;
    },

    isJogTimeUnit: function(unit) {
        const restUnit = RecoveryDistanceUnit.enumValue(unit);
        return restUnit === RecoveryDistanceUnit.JogMinutes || restUnit === RecoveryDistanceUnit.JogSeconds;
    },

    isWalkTimeUnit: function(unit) {
        const restUnit = RecoveryDistanceUnit.enumValue(unit);
        return restUnit === RecoveryDistanceUnit.WalkMinutes || restUnit === RecoveryDistanceUnit.WalkSeconds;
    },

    isPaceUnit: function(unit) {
        return unit === "mi" || unit === "km" || unit == "1" || unit == "2" || unit === DistanceUnit.mi || unit === DistanceUnit.km;
    },

    toMetersFromUnits: function(distance, units, vdot) {
        if (units == "mi" || units == "1") {
            return distance * 1609.344;
        } else if (units == "km" || units == "2") {
            return distance * 1000;
        } else if (units == "m" || units == "0") {
            return distance * 1;
            // will convert to number
        } else if (vdot != undefined && vdot != 0) {
            if (units === "min" || units === "3") {
                return (distance / Formula.getEasyPace(vdot, 1000)) * 1000;
            } else if (units === "sec" || units === "4") {
                return ((distance / 60) / Formula.getEasyPace(vdot, 1000)) * 1000;
            }
        }

        return 0;

    },

    fromMetersToUnits: function(meters, units) {
        units = DistanceUnit.enumValue(units);

        if (units === DistanceUnit.mi) {
            return this.toMiles(meters);
        } else if (units === DistanceUnit.km) {
            return this.toKilometers(meters);
        } else if (units === DistanceUnit.yd) {
            return this.toYards(meters);
        } else {
            return meters * 1;
            // will convert to number
        }
    },

    fromMiles: function(value) {
        return value * 1609.344;
    },

    toMiles: function(value) {
        return value / 1609.344;
    },

    fromKilometers: function(value) {
        return value * 1000;
    },

    toKilometers: function(value) {
        return value / 1000;
    },

    fromYards: function(value) {
        return value * 0.9144;
    },

    toYards: function(value) {
        return value / 0.9144;
    },

    fromFeet: function(value) {
        return value * 0.3048;
    },

    toFeet: function(value) {
        return value / 0.3048;
    },

    toCelcius: function(temperature, unit) {
        if (unit === TemperatureUnit.F) {
            return (temperature - 32.0) * 5 / 9;
        }

        return temperature;
    },

    altitudeToMeters: function(altitude, unit) {
        if (unit === AltitudeUnit.ft) {
            return Conversion.fromFeet(altitude);
        }

        return altitude;
    },

    heightFromFeet: function(feet, inches) {
        var inchFeet = inches * 0.08333333;
        var totalFeet = (feet * 1) + inchFeet;
        return totalFeet * 30.48;
    },

    weightFromPounds: function(pounds) {
        return pounds / 2.20462262;
    },

    toTimeString: function(minutes) {
        if ((minutes + "").indexOf(':') >= 0) {
            return minutes;
        }

        // minutes
        if (minutes < 1) {
            return "" + minutes * 60;
        } else if (minutes < 60) {
            var minutesValue = parseInt(minutes);
            var secondsValue = parseInt((minutes - minutesValue) * 60);
            return minutesValue + ":" + this.twoDigits(secondsValue);
        } else {
            var totalMinutesValue = parseInt(minutes);
            var hoursValue = parseInt(totalMinutesValue / 60);
            var minutesValue = parseInt(totalMinutesValue % 60);
            var secondsValue = parseInt((minutes - totalMinutesValue) * 60);
            return hoursValue + ":" + this.twoDigits(minutesValue) + ":" + this.twoDigits(secondsValue);
        }
    },

    twoDigits: function(value) {
        return value > 9 ? value : "0" + value;
    },

    fromTimeString: function(value, defaultValue) {
        if (!defaultValue) {
            defaultValue = 0.0;

        }
        if (!Validate.isValidTimeText(value)) {
            return defaultValue;
        }

        // minutes
        let pieces = value.split(":");
        if (pieces.length === 1) {
            return value / 60;
        } else if (pieces.length === 2) {
            let part1 = parseInt(pieces[0]);
            let part2 = parseInt(pieces[1]) / 60;
            let total = part1 + part2;
            return total;
        } else if (pieces.length === 3) {
            let part1 = parseInt(pieces[0]);
            let part2 = parseInt(pieces[1]);
            let part3 = parseInt(pieces[2]);

            return (part1 * 60) + part2 + (part3 / 60);
        }

        return defaultValue;
    },

    roundToFullSeconds: function(minutes) {
        var fullSeconds = Math.round(minutes * 60);
        var roundedMinutes = fullSeconds / 60;
        return roundedMinutes;
    },

    fromDistanceUnitString: function(value, unit, convertToMeters, convertToMinutes) {
        unit = DistanceUnit.enumValue(unit);

        if (Conversion.isTimeUnit(unit)) {
            if (Conversion.isMinUnit(unit)) {
                return value.indexOf(":") >= 0 ? this.fromTimeString(value) : value;
            } else {
                return convertToMinutes ? value / 60 : value;
            }
        } else if (!convertToMeters) {
            return value * 1;
        } else if (unit === DistanceUnit.mi) {
            return Conversion.fromMiles(value);
        } else if (unit === DistanceUnit.km) {
            return value * 1000;
        } else if (unit === DistanceUnit.yd) {
            return Conversion.fromYards(value);
        }

        return value * 1;
    },

    recoveryToDistanceUnit: function(distanceUnit) {
        return RecoveryDistanceUnit.enumValue(distanceUnit) % RecoveryDistanceUnit.MatchingDistanceEnumCount;
    },

    getRecoveryDistanceFromTime: function(distance, recoveryUnit, vdot) {
        const distanceUnit = Conversion.recoveryToDistanceUnit(recoveryUnit);
        const toMinutesCalculationFactorValue = distanceUnit === DistanceUnit.sec ? 1 / 60 : 1;
        const minutes = distance * toMinutesCalculationFactorValue;

        if (vdot <= 0 || !Conversion.isTimeUnit(distanceUnit) || (Conversion.isWalkTimeUnit(recoveryUnit) && minutes <= 1)) {
            return 0;
        }

        var pace = Conversion.isWalkTimeUnit(recoveryUnit) ? Formula.getWalkPace(1000) : Formula.getJogPace(vdot, 1000);
        if (pace <= 0) {
            return 0.0;
        }

        return (minutes * 1000) / pace;
    },

    getTimeFromMetersAndPace: function(meters, pace, paceUnit) {
        const distance = this.fromMetersToUnits(meters, paceUnit);
        const minutes = pace * distance;

        return minutes;
    },

    getMetersFromTimeAndPace: function(time, pace, paceUnit) {
        const paceDistance = FormulaHelpers.getPaceDistanceForUnit(paceUnit);

        return paceDistance * time / pace;
    },

    getPaceDiff: function(paceRange, pace) {
        const fastPace = paceRange.fast;
        const slowPace = paceRange.slow > 0 ? paceRange.slow : paceRange.fast;

        if (pace < fastPace) {
            return pace - fastPace;
        } else if (pace > slowPace) {
            return pace - slowPace;
        } else {
            return 0;
        }
    }
}
var Formatting = {

    htmlDecode: function(text) {
        return $('<textarea>').html(text).text();
    },

    getMonthName: function(value) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[value];
    },

    toMinutes: function(value, allowMinutesOnly, showZeroValue, withDecimal) {
        if (value === 0) {
            if (!showZeroValue) {
                return "";
            }

            return allowMinutesOnly ? "0" : "0:00";
        }

        if (!Validate.isValidNumber(value)) {
            if (Validate.isValidTimeText(value)) {
                return value;
            }

            return '';
        }

        var minutes = Math.floor(value);
        const secondsFraction = value - minutes;
        var seconds = secondsFraction * 60;
        var decimal = 0;

        if (withDecimal) {
            var fullSeconds = Math.floor(seconds);
            decimal = Math.round((seconds - fullSeconds) * 10);
            seconds = fullSeconds;

            if (decimal === 10) {
                decimal = 0;
                seconds++;
            }
        } else {
            seconds = parseInt(Math.round(seconds));
        }

        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }

        if (minutes < 60 && allowMinutesOnly && seconds === 0 && decimal === 0) {
            return minutes.toString();
        }

        const decimalText = withDecimal ? "." + decimal.toString() : "";

        if (minutes < 60) {
            return minutes.toString() + ":" + (seconds.toString().length === 1 ? "0" : "") + seconds.toString() + decimalText;
        }

        const hours = Math.floor(minutes / 60);
        // lets say its... 72 minutes. 72 / 60 = 1
        minutes = minutes - (hours * 60);
        return hours.toString() + ':' + (minutes.toString().length === 1 ? "0" : "") + minutes.toString() + ":" + (seconds.toString().length === 1 ? "0" : "") + seconds.toString() + decimalText;

    },

    toTimeWithLabels: function(value, zeroValue) {
        zeroValue = zeroValue ?? "0 min";

        if (value === 0) {
            return zeroValue;
        }

        if (!Validate.isValidNumber(value)) {
            if (Validate.isValidTimeText(value)) {
                return value;
            }

            return zeroValue;
        }

        var minutes = Math.floor(value);
        const secondsFraction = value - minutes;
        var seconds = parseInt(Math.round(secondsFraction * 60));

        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }

        if (minutes < 1) {
            return seconds + "\u00A0sec";
        }

        const secondsText = seconds === 0 ? "" : "\u00A0" + seconds + "\u00A0sec";
        if (minutes < 60) {
            return minutes + "\u00A0min" + secondsText;
        }

        const hours = Math.floor(minutes / 60);
        // lets say its... 72 minutes. 72 / 60 = 1
        minutes = minutes - (hours * 60);
        return hours + "\u00A0hr\u00A0" + minutes + "\u00A0min" + secondsText;

    },

    toPaceMinutes: function(value, unit, withUnitSpace, showZeroValue) {
        const minutes = this.toMinutes(value, false, showZeroValue);
        if (Validate.isEmptyInput(minutes)) {
            return "";
        }

        const slash = (withUnitSpace === true) ? " /" : "/";
        return minutes + slash + DistanceUnit.stringValue(unit);
    },

    twoDecimalPlaces: function(value) {
        var retValue = '' + value.toFixed(2);
        if (retValue.endsWith('.00')) {
            return retValue.replace('.00', '');
        } else {
            return retValue;
        }
    },

    oneDecimalPlace: function(value, trimZeros) {
        const retValue = '' + value.toFixed(1);
        if (retValue.endsWith('.0') && trimZeros) {
            return retValue.replace('.0', '');
        } else {
            return retValue;
        }
    },

    distanceInput: function(distance, unit) {
        if (distance === 0) {
            return '';
        }

        const hasDecimal = (distance % 1) !== 0;
        if (DistanceUnit.enumValue(unit) === DistanceUnit.min && hasDecimal) {
            return Formatting.toMinutes(distance);
        }

        return Formatting.twoDecimalPlaces(distance);
    },

    paceRange: function(range) {
        if (Validate.isEmptyInput(range) || range.fast <= 0 || range.slow <= 0) {
            return '';
        }

        return Formatting.toMinutes(range.fast) + ' ~ ' + Formatting.toMinutes(range.slow);
    },

    easyPaceRange: function(range, paceUnit) {
        if (Validate.isEmptyInput(range) || range.fast <= 0 || range.slow <= 0) {
            return '';
        }

        return Formatting.paceRange(range) + ' / ' + DistanceUnit.stringValue(paceUnit);
    },

    qualitySetItemPaces: function(itemPaces) {
        var pace = itemPaces.pace;
        var repTime = itemPaces.repTime;
        var paceUnit = itemPaces.paceUnit;

        if (pace === 0) {
            return '&nbsp;';
        }

        var paceText = Formatting.toMinutes(pace) + '/' + paceUnit;
        if (pace === repTime || repTime <= 0) {
            return paceText;
        }

        return paceText + '&nbsp;(' + Formatting.toMinutes(repTime) + '/rep)';
    },

    distanceUnit: function(distanceUnit) {
        return DistanceUnit.stringValue(distanceUnit);
    },

    temperatureUnit: function(unit) {
        if (unit < 0 || unit > TemperatureUnit.EnumCount) {
            return "";
        }

        const unitDisplay = ["°F", "°C"];
        return unitDisplay[unit];
    },

    altitudeUnit: function(unit) {
        if (unit < 0 || unit > AltitudeUnit.EnumCount) {
            return "";
        }

        const unitDisplay = ["ft", "m"];
        return unitDisplay[unit];
    },

    temperature: function(temperature, unit) {
        return this.oneDecimalPlace(temperature, true) + " " + this.temperatureUnit(unit);
    },

    altitude: function(altitude, unit) {
        return this.oneDecimalPlace(altitude, true) + " " + this.altitudeUnit(unit);
    },

    distance: function(value, unit) {
        return this.twoDecimalPlaces(value, true) + " " + this.distanceUnit(unit);
    },

}

var Formula = {
    _SlowVdotLimit: 39,

    getVDOT: function(distance, time) {
        var V = this._getVDOTSpeedParam(distance, time);
        var VO2 = this._getVO2(V);
        // fraction of VO2 max
        var F = .80 + .298956 * Math.exp(-.193261 * time) + .189439 * Math.exp(-.012778 * time);
        return VO2 / F;
    },

    _getVDOTSpeedParam(meters, minutes) {
        if (meters >= 1600) {
            return meters / minutes;
        }

        if (meters > 800) {
            const scale = 1600 / meters;
            const percentage = (1600 - meters) / 800;
            const adjustment = scale + 0.1 * percentage;
            const m1600Mins = minutes * adjustment;
            return 1600 / m1600Mins;
        } else {
            const m800Adjustment = 2.1;
            const distanceFactor = 800 / meters;
            const adjustment = distanceFactor * m800Adjustment;
            const m1600Mins = minutes * adjustment;
            return 1600 / m1600Mins;
        }
    },

    getPredictedRaceTime: function(VDOT, distance) {
        var A = distance / (4 * VDOT);
        for (var i = 0; i < 3; i++) {
            var B = Math.exp(-.193261 * A);
            var C = .298956 * B + Math.exp(-.012778 * A) * .189439 + .8;
            var E = Math.pow((VDOT * C), 2) * -.0075 + (VDOT * C) * 5.000663 + 29.54;
            var G = (.298956 * B) * .19326;
            var H = G - Math.exp(-.012778 * A) * .189439 * (-.012778);
            var I = (C * H * VDOT) * (-.007546) * 3;
            var J = (H * VDOT) * 5.000663 + I;
            var K = (distance * J) / Math.pow(E, 2) + 1;
            var L = A - (distance / E);
            var P = L / K;
            A = A - P;var Formula = {
    _SlowVdotLimit: 39,

    getVDOT: function(distance, time) {
        var V = this._getVDOTSpeedParam(distance, time);
        var VO2 = this._getVO2(V);
        // fraction of VO2 max
        var F = .80 + .298956 * Math.exp(-.193261 * time) + .189439 * Math.exp(-.012778 * time);
        return VO2 / F;
    },

    _getVDOTSpeedParam(meters, minutes) {
        if (meters >= 1600) {
            return meters / minutes;
        }

        if (meters > 800) {
            const scale = 1600 / meters;
            const percentage = (1600 - meters) / 800;
            const adjustment = scale + 0.1 * percentage;
            const m1600Mins = minutes * adjustment;
            return 1600 / m1600Mins;
        } else {
            const m800Adjustment = 2.1;
            const distanceFactor = 800 / meters;
            const adjustment = distanceFactor * m800Adjustment;
            const m1600Mins = minutes * adjustment;
            return 1600 / m1600Mins;
        }
    },

    getPredictedRaceTime: function(VDOT, distance) {
        var A = distance / (4 * VDOT);
        for (var i = 0; i < 3; i++) {
            var B = Math.exp(-.193261 * A);
            var C = .298956 * B + Math.exp(-.012778 * A) * .189439 + .8;
            var E = Math.pow((VDOT * C), 2) * -.0075 + (VDOT * C) * 5.000663 + 29.54;
            var G = (.298956 * B) * .19326;
            var H = G - Math.exp(-.012778 * A) * .189439 * (-.012778);
            var I = (C * H * VDOT) * (-.007546) * 3;
            var J = (H * VDOT) * 5.000663 + I;
            var K = (distance * J) / Math.pow(E, 2) + 1;
            var L = A - (distance / E);
            var P = L / K;
            A = A - P;
        }
        const V = distance / A;
        const time = distance / V;
        // distance over velocity

        if (distance >= 1600) {
            return time;
        }

        const adjustedV = this._getVDOTSpeedParam(distance, time);

        const scale = V / adjustedV;
        return time / scale;
    },
        }
        const V = distance / A;
        const time = distance / V;
        // distance over velocity

        if (distance >= 1600) {
            return time;
        }

        const adjustedV = this._getVDOTSpeedParam(distance, time);

        const scale = V / adjustedV;
        return time / scale;
    },

    getMarathonPace: function(VDOT, trainingDistance) {
        return trainingDistance / Formula._getMarathonVelocity(VDOT);
    },

    getJogPace: function(vdot, distance) {
        if (vdot > 50.5) {
            const pace = 9.0 * Conversion.toMiles(distance);
            return pace;
        }

        return this.getEasyPace(vdot, distance, true);
    },

    getWalkPace: function(distance) {
        const pace = 12 * (1000 / distance);
        return pace;
    },

    getEasyPace: function(vdot, distance, slowerPace) {
        if (this._isSlowVdot(vdot)) {
            vdot = this._getSRVDOT(vdot);
        }

        var percentage = slowerPace ? .62 : .70;
        return this._getCustomEffortPace(vdot, distance, percentage);
    },

    getEasyPaceRange: function(vdot, distance, unit) {
        const slower = this.getEasyPace(vdot, distance, true);
        const faster = this.getEasyPace(vdot, distance, false);

        return {
            slow: slower,
            fast: faster,
            unit: unit
        };
    },

    getThresholdPace: function(vdot, distance) {
        if (this._isSlowVdot(vdot)) {
            var srvdot = this._getSRVDOT(vdot);
            vdot = (srvdot + parseFloat(vdot)) / 2;
        }

        return this._getCustomEffortPace(vdot, distance, .88);
    },

    getIntervalPace: function(vdot, distance) {
        if (this._isSlowVdot(vdot)) {
            vdot = this._getSRVDOT(vdot);
        }

        return this._getCustomEffortPace(vdot, distance, .975);
    },

    getRepetitionPace: function(vdot, distance) {
        const per400FasterBy = 6.0;
        const divisor = (distance / 400) * (per400FasterBy / 60);

        const pace = this.getIntervalPace(vdot, distance);
        return pace - divisor;
    },

    getFastRepsPace: function(vdot, distance) {
        var per200FasterBy = 4.0;
        var divisor = (distance / 200) * (per200FasterBy / 60);

        // 200m - 4s
        // 1000m - 20s
        //        if (distance === 200) {
        //            toSubtract = 4 / 60;
        //        } else if (distance === 300) {
        //            toSubtract = 6 / 60;
        //        } else if (distance === 400) {
        //            toSubtract = 8 / 60;
        //        } else if (distance === 600) {
        //            toSubtract = 12 / 60;
        //        } 

        var pace = this.getRepetitionPace(vdot, distance);
        return pace - divisor;
    },

    isFastRepsDistance: function(distance) {
        return distance === 200 || distance === 300 || distance === 400 || distance === 600;
    },

    getCustomTrainingPace: function(paceType, percentage, distanceMeters, vdot, paceUnit) {
        if (paceType === CustomTrainingPaceType.Effort) {
            if (this._isSlowVdot(vdot)) {
                vdot = this._getSRVDOT(vdot);
            }

            const paceDistance = FormulaHelpers.getPaceDistanceForUnit(paceUnit);
            return this._getCustomEffortPace(vdot, paceDistance, percentage / 100);
        }

        return this._getCustomDistancePace(vdot, distanceMeters, paceUnit);
    },

    _isSlowVdot: function(vdot) {
        return vdot > 0 && vdot < Formula._SlowVdotLimit;
    },

    _getSRVDOT: function(vdot) {
        return (vdot * 2 / 3) + 13;
    },

    _getCustomEffortPace: function(vdot, distance, percentage) {
        var O = vdot * percentage;
        var V = Formula._getPaceVelocity(O);
        return distance / V;
    },

    _getCustomDistancePace: function(vdot, meters, paceUnit) {
        const raceTime = this.getPredictedRaceTime(vdot, meters);
        const paceDistance = FormulaHelpers.getPaceDistanceForUnit(paceUnit);
        const distanceInPaceUnit = meters / paceDistance;

        return raceTime / distanceInPaceUnit;
    },

    _getVO2: function(V) {
        return .182258 * V + .000104 * Math.pow(V, 2) - 4.6;
    },

    _getPaceVelocity: function(O) {
        return 29.54 + 5.000663 * O - .007546 * Math.pow(O, 2);
    },

    _getMarathonVelocity: function(VDOT) {
        var distance = 42195;
        var A = distance / (4 * VDOT);
        for (var i = 0; i < 3; i++) {
            var B = Math.exp(-.193261 * A);
            var C = .298956 * B + Math.exp(-.012778 * A) * .189439 + .8;
            var E = Math.pow((VDOT * C), 2) * -.0075 + (VDOT * C) * 5.000663 + 29.54;
            var G = (.298956 * B) * .19326;
            var H = G - Math.exp(-.012778 * A) * .189439 * (-.012778);
            var I = (C * H * VDOT) * (-.007546) * 3;
            var J = (H * VDOT) * 5.000663 + I;
            var K = (distance * J) / Math.pow(E, 2) + 1;
            var L = A - (distance / E);
            var P = L / K;
            A = A - P;
        }
        return distance / A;
        /*var V = distance / A;
        return trainingDistance / V;*/
    }

};

var FormulaHelpers = {
    getPaceUnitForUser: function(unit, user) {
        var unitEnum = DistanceUnit.enumValue(unit);
        return Conversion.isPaceUnit(unitEnum) ? unitEnum : user.mikm;
    },

    getPaceDistanceForUnit: function(paceUnit) {
        var unitEnum = DistanceUnit.enumValue(paceUnit);
        return unitEnum === DistanceUnit.mi ? Conversion.fromMiles(1) : 1000;
    },

    getEasyPaceRangeForUnit: function(vdot, paceUnit) {
        const distance = this.getPaceDistanceForUnit(paceUnit);
        return Formula.getEasyPaceRange(vdot, distance, paceUnit);
    },

    getQualitySetItemPaces: function(user, distance, distanceUnit, effort, customPace) {
        const sessionType = QualitySessionType.enumValue(effort);

        distanceUnit = DistanceUnit.enumValue(distanceUnit);
        const userPreferredUnit = DistanceUnit.enumValue(user.mikm);
        const isRepetition = this._isRepetitionSet(distanceUnit, userPreferredUnit);

        // Note: For repetitions, we use default user unit to calculate pace
        const paceUnit = isRepetition ? userPreferredUnit : this.getPaceUnitForUser(distanceUnit, user);
        const paceDistance = this.getPaceDistanceForUnit(paceUnit);

        // Note: For time set items we just use the same calculations as for mi/km paces
        const repDistance = Conversion.isTimeUnit(distanceUnit) ? paceDistance : Conversion.fromDistanceUnitString(distance, distanceUnit, true, false);

        var pace = 0;
        var repTime = 0;

        if (customPace != null) {
            pace = Formula.getCustomTrainingPace(customPace.paceType, customPace.percentage, customPace.distanceMeters, user.VDOT, paceUnit);
        } else if (sessionType === QualitySessionType.FastReps) {

            // Note: here we need to update pace on the repTime, which is why we invert the and calculate pace from repTime
            repTime = Formula.getFastRepsPace(user.VDOT, repDistance);
            pace = this.getQualitySetRepPace(repTime, repDistance, paceUnit);
        } else {
            pace = FormulaHelpers.getQualitySessionPace(sessionType, user.VDOT, paceDistance);
        }

        if (pace && pace > 0 && repTime === 0) {
            repTime = this.getQualitySetRepTime(pace, paceUnit, repDistance);
        }

        return {
            pace: pace,
            repTime: repTime,
            paceUnit: paceUnit,
            isRepetition: isRepetition
        };
    },

    getQualitySessionPace: function(sessionType, vdot, distance) {
        switch (sessionType) {
        case QualitySessionType.Easy:
            return Formula.getEasyPace(vdot, distance);
        case QualitySessionType.Threshold:
            return Formula.getThresholdPace(vdot, distance);
        case QualitySessionType.Interval:
            return Formula.getIntervalPace(vdot, distance);
        case QualitySessionType.Repetition:
            return Formula.getRepetitionPace(vdot, distance);
        case QualitySessionType.FastReps:
            return Formula.getFastRepsPace(vdot, distance);
        case QualitySessionType.Marathon:
            return Formula.getMarathonPace(vdot, distance);
            break;
        case QualitySessionType.Hills:
            // We don't show paces for hills
            return Formula.getIntervalPace(vdot, distance);
        default:
            return 0;
        }
    },

    getPaceRangeForWorkoutSet: function(user, pace, distanceUnit, sessionType) {
        if (sessionType === QualitySessionType.Hills) {
            return {
                slow: 0,
                fast: 0,
                unit: distanceUnit
            }
        } else if (sessionType === QualitySessionType.Easy) {
            const paceUnit = this.getPaceUnitForUser(distanceUnit, user);
            const slowPace = this.getSlowPaceForEasyWorkoutSet(user, pace, paceUnit);
            return {
                slow: slowPace,
                fast: pace,
                unit: paceUnit
            }
        } else {
            const isRepUnit = distanceUnit === DistanceUnit.rep || distanceUnit === DistanceUnit.meter;
            const paceUnit = isRepUnit ? DistanceUnit.rep : this.getPaceUnitForUser(distanceUnit, user);

            return {
                slow: 0,
                fast: pace,
                unit: paceUnit
            }
        }
    },

    getSlowPaceForEasyWorkoutSet: function(user, pace, paceUnit) {
        const paceDistance = this.getPaceDistanceForUnit(paceUnit);
        const easyRange = Formula.getEasyPaceRange(user.VDOT, paceDistance, paceUnit);

        const diff = easyRange.fast - pace;
        if (easyRange.slow < pace || diff / pace > 0.1) {
            return pace + 0.3333;
        }

        return easyRange.slow;
    },

    getQualitySetRepTime: function(pace, paceUnit, repDistance) {
        var paceDistance = this.getPaceDistanceForUnit(paceUnit);
        var repTime = pace * repDistance / paceDistance;

        return repTime;
    },

    getQualitySetRepPace: function(repTime, repDistanceMeters, paceUnit) {
        // var fullSeconds = Conversion.roundToFullSeconds(repTime);
        var paceDistance = this.getPaceDistanceForUnit(paceUnit);
        var pace = paceDistance * repTime / repDistanceMeters;

        return pace;
    },

    getQualityWorkoutRecoveryMeters: function(repsCount, recoveryAmount, recoveryUnit, vdot) {
        var recoveryMeters = this.getQualityWorkoutSingleRecoveryMeters(repsCount, recoveryAmount, recoveryUnit, vdot);

        return (repsCount - 1) * recoveryMeters;
    },

    getQualityWorkoutSingleRecoveryMeters: function(repsCount, recoveryAmount, recoveryUnit, vdot) {
        if (repsCount <= 1 || recoveryAmount <= 0) {
            return 0;
        }

        var recoveryDistanceUnit = Conversion.recoveryToDistanceUnit(recoveryUnit);

        if (Conversion.isTimeUnit(recoveryDistanceUnit)) {
            return Conversion.getRecoveryDistanceFromTime(recoveryAmount, recoveryUnit, vdot);
        } else {
            return Conversion.toMetersFromUnits(recoveryAmount, recoveryDistanceUnit);
        }
    },

    isWorkoutSet: function(sessionType) {
        var value = QualitySessionType.enumValue(sessionType);

        return value !== QualitySessionType.Rest && value !== QualitySessionType.Text;
    },

    isRaceTimeEquivalentToVdot: function(time, distance, vdot) {
        if (time === 0 && distance === 0) {
            return true;
        } else if (distance === 0) {
            return false;
        }

        var vdotEquivalentTime = Formula.getPredictedRaceTime(vdot, distance);
        var timeText = Formatting.toMinutes(time);
        var vdotEquivalentText = Formatting.toMinutes(vdotEquivalentTime);
        return timeText === vdotEquivalentText;
    },

    _isRepetitionSet: function(distanceUnit, userPreferredUnit) {
        if (Conversion.isTimeUnit(distanceUnit)) {
            return false;
        }

        return distanceUnit === DistanceUnit.m || distanceUnit === DistanceUnit.rep || userPreferredUnit !== distanceUnit;
    },

    getMiPace: function(distance, totalTime) {
        const paceTotalDistance = Conversion.toMiles(distance);
        return totalTime / paceTotalDistance;
    },

    getKmPace(distance, totalTime) {
        const paceTotalDistance = Conversion.toKilometers(distance);
        return totalTime / paceTotalDistance;
    },
}
var VdotLevels = {
    _MinAgeIndex: 6,
    _MaxAgeIndex: 123,

    _MaleLevels: {
        0: [36.8, 40.0, 45.0, 50.0, 55.0, 60.0, 65.0, 70.0, 75.0, 80.0],
        6: [16.1, 18.8],
        7: [17.7, 20.7, 23.6],
        8: [19.3, 22.5, 25.7, 28.9],
        9: [20.9, 24.3, 27.7, 31.1, 34.5],
        10: [22.5, 26.2, 29.8, 33.4, 37.0, 40.6],
        11: [24.1, 28.0, 31.8, 35.6, 39.4, 43.2, 47.0],
        12: [25.7, 29.8, 33.8, 37.8, 41.8, 45.8, 49.8, 53.8],
        13: [27.3, 31.5, 35.7, 39.9, 44.1, 48.3, 52.5, 56.7, 60.9],
        14: [28.9, 33.3, 37.7, 42.1, 46.5, 50.9, 55.3, 59.7, 64.0, 68.3],
        15: [30.5, 35.1, 39.7, 44.3, 48.9, 53.4, 57.9, 62.4, 66.9, 71.4],
        16: [32.0, 36.8, 41.5, 46.2, 50.9, 55.6, 60.3, 65.0, 69.7, 74.4],
        17: [33.5, 38.4, 43.3, 48.2, 53.1, 58.0, 62.9, 67.7, 72.5, 77.3],
        39: [34.1, 39.5, 44.1, 49.1, 54.1, 59.1, 64.1, 69.1, 74.1, 79.1],
        40: [33.2, 38.2, 43.2, 48.2, 53.2, 58.2, 63.2, 68.2, 73.2, 78.2],
        41: [32.4, 37.4, 42.4, 47.4, 52.4, 57.4, 62.4, 67.4, 72.4, 77.4],
        42: [31.5, 36.5, 41.5, 46.5, 51.5, 56.5, 61.5, 66.5, 71.5, 76.5],
        43: [30.6, 35.6, 40.6, 45.6, 50.6, 55.6, 60.6, 65.6, 70.6, 75.6],
        44: [29.7, 34.7, 39.7, 44.7, 49.7, 54.7, 59.7, 64.7, 69.7, 74.7],
        45: [28.8, 33.8, 38.8, 43.8, 48.8, 53.8, 58.8, 63.8, 68.8, 73.8],
        46: [28.0, 33.0, 38.0, 43.0, 48.0, 53.0, 58.0, 63.0, 68.0, 73.0],
        47: [27.1, 32.1, 37.1, 42.1, 47.1, 52.1, 57.1, 62.1, 67.1, 72.1],
        48: [26.2, 31.2, 36.2, 41.2, 46.2, 51.2, 56.2, 61.2, 66.2, 71.2],
        49: [25.3, 30.3, 35.3, 40.3, 45.3, 50.3, 55.3, 60.3, 65.3, 70.3],
        50: [24.4, 29.4, 34.4, 39.4, 44.4, 49.4, 54.4, 59.4, 64.4, 69.4],
        51: [23.6, 28.6, 33.6, 38.6, 43.6, 48.6, 53.6, 58.6, 63.6, 68.6],
        52: [22.7, 27.7, 32.7, 37.7, 42.7, 47.7, 52.7, 57.7, 62.7, 67.7],
        53: [21.8, 26.8, 31.8, 36.8, 41.8, 46.8, 51.8, 56.8, 61.8, 66.8],
        54: [20.9, 25.9, 30.9, 35.9, 40.9, 45.9, 50.9, 55.9, 60.9, 65.9],
        55: [20.0, 25.0, 30.0, 35.0, 40.0, 45.0, 50.0, 55.0, 60.0, 65.0],
        56: [19.2, 24.2, 29.2, 34.2, 39.2, 44.2, 49.2, 54.2, 59.2, 64.2],
        57: [18.3, 23.3, 28.3, 33.3, 38.3, 43.3, 48.3, 53.3, 58.3, 63.3],
        58: [17.4, 22.4, 27.4, 32.4, 37.4, 42.4, 47.4, 52.4, 57.4, 62.4],
        59: [16.5, 21.5, 26.5, 31.5, 36.5, 41.5, 46.5, 51.4, 56.5, 61.5],
        60: [15.6, 20.6, 25.6, 30.6, 35.6, 40.6, 45.6, 50.7, 55.6, 60.6],
        61: [14.7, 19.7, 24.8, 29.8, 34.8, 39.8, 44.8, 49.8, 54.8, 59.8],
        62: [13.8, 18.9, 23.9, 28.9, 33.9, 38.9, 43.9, 48.9, 53.9, 58.9],
        63: [13.0, 18.0, 23.0, 28.0, 33.0, 38.0, 43.0, 48.0, 53.0, 58.0],
        64: [12.1, 17.1, 22.1, 27.1, 32.1, 37.1, 42.1, 47.1, 52.1, 57.1],
        65: [11.2, 16.2, 21.2, 26.2, 31.2, 36.2, 41.2, 46.3, 51.2, 56.2],
        66: [10.3, 15.3, 20.4, 25.4, 30.4, 35.4, 40.4, 45.4, 50.4, 55.4],
        67: [9.4, 14.5, 19.5, 24.5, 29.5, 34.5, 39.5, 44.5, 49.5, 54.5],
        68: [8.6, 13.6, 18.6, 23.6, 28.6, 33.6, 38.6, 43.6, 48.6, 53.6],
        69: [7.7, 12.7, 17.7, 22.7, 27.7, 32.7, 37.7, 42.7, 47.7, 52.7],
        70: [6.8, 11.8, 16.8, 21.8, 26.8, 31.8, 36.8, 41.9, 46.8, 51.8],
        71: [5.9, 10.9, 16.0, 21.0, 26.0, 31.0, 36.0, 41.0, 46.0, 51.0],
        72: [5.0, 10.1, 15.1, 20.1, 25.1, 30.1, 35.1, 40.1, 45.1, 50.1],
        73: [4.2, 9.2, 14.2, 19.2, 24.2, 29.2, 34.2, 39.2, 44.2, 49.2],
        74: [3.5, 8.3, 13.3, 18.3, 23.3, 28.3, 33.3, 38.3, 43.3, 48.3],
        75: [3.5, 7.4, 12.4, 17.4, 22.4, 27.4, 32.4, 37.5, 42.4, 47.4],
        76: [3.5, 6.5, 11.6, 16.6, 21.6, 26.6, 31.6, 36.6, 41.6, 46.6],
        77: [3.5, 5.7, 10.7, 15.7, 20.7, 25.7, 30.7, 35.7, 40.7, 45.7],
        78: [3.5, 4.8, 9.8, 14.8, 19.8, 24.8, 29.8, 34.8, 39.8, 44.8],
        79: [3.5, 3.9, 8.9, 13.9, 18.9, 23.9, 28.9, 33.9, 38.9, 43.9],
        80: [3.5, 3.5, 8.0, 13.0, 18.0, 23.0, 28.0, 33.1, 38.0, 43.0],
        81: [3.5, 3.5, 7.2, 12.2, 17.2, 22.2, 27.2, 32.2, 37.2, 42.2],
        82: [3.5, 3.5, 6.3, 11.3, 16.3, 21.3, 26.3, 31.3, 36.3, 41.3],
        83: [3.5, 3.5, 5.4, 10.4, 15.4, 20.4, 25.4, 30.4, 35.4, 40.4],
        84: [3.5, 3.5, 4.5, 9.5, 14.5, 19.5, 24.5, 29.5, 34.5, 39.5],
        85: [3.5, 3.5, 3.5, 8.6, 13.6, 18.6, 23.6, 28.7, 33.6, 38.6],
        86: [3.5, 3.5, 3.5, 7.8, 12.8, 17.8, 22.8, 27.8, 32.8, 37.8],
        87: [3.5, 3.5, 3.5, 6.9, 11.9, 16.9, 21.9, 26.9, 31.9, 36.9],
        88: [3.5, 3.5, 3.5, 6.0, 11.0, 16.0, 21.0, 26.0, 31.0, 36.0],
        89: [3.5, 3.5, 3.5, 5.1, 10.1, 15.1, 20.1, 25.1, 30.1, 35.1],
        90: [3.5, 3.5, 3.5, 4.2, 9.2, 14.2, 19.2, 24.3, 29.2, 34.2],
        91: [3.5, 3.5, 3.5, 3.5, 8.4, 13.5, 18.4, 23.4, 28.4, 33.4],
        92: [3.5, 3.5, 3.5, 3.5, 7.5, 12.5, 17.5, 22.5, 27.5, 32.5],
        93: [3.5, 3.5, 3.5, 3.5, 6.6, 11.6, 16.6, 21.6, 26.6, 31.6],
        94: [3.5, 3.5, 3.5, 3.5, 5.7, 10.7, 15.7, 20.7, 25.7, 30.7],
        95: [3.5, 3.5, 3.5, 3.5, 4.8, 9.8, 14.8, 19.8, 24.8, 29.8],
        96: [3.5, 3.5, 3.5, 3.5, 4.0, 9.0, 14.0, 19.0, 24.0, 29.0],
        97: [3.5, 3.5, 3.5, 3.5, 3.5, 8.1, 13.1, 18.1, 23.1, 28.1],
        98: [3.5, 3.5, 3.5, 3.5, 3.5, 7.2, 12.2, 17.2, 22.2, 27.2],
        99: [3.5, 3.5, 3.5, 3.5, 3.5, 6.3, 11.3, 16.3, 21.3, 26.3],
        100: [3.5, 3.5, 3.5, 3.5, 3.5, 5.4, 10.4, 15.4, 20.4, 25.4]
    },

    _FemaleLevels: {
        0: [34.3, 37.3, 40.2, 44.7, 49.1, 53.6, 58.1, 62.5, 67.0, 71.4],
        6: [16.1, 18.8],
        7: [17.4, 20.3, 23.2],
        8: [18.7, 21.8, 24.9, 28.0],
        9: [20.0, 23.3, 26.6, 29.9, 33.2],
        10: [21.3, 24.8, 28.3, 31.8, 35.2, 38.6],
        11: [22.6, 26.2, 29.8, 33.4, 37.0, 40.6, 44.2],
        12: [23.9, 27.7, 31.5, 35.3, 39.0, 42.7, 46.4, 50.1],
        13: [25.2, 29.1, 33.0, 36.9, 40.8, 44.7, 48.6, 52.4, 56.2],
        14: [26.5, 30.5, 34.5, 38.5, 42.5, 46.5, 50.5, 54.5, 58.5, 62.4],
        15: [27.8, 31.9, 36.0, 40.1, 44.2, 48.3, 52.4, 56.5, 60.6, 64.7],
        16: [29.0, 33.3, 37.5, 41.7, 45.9, 50.1, 54.3, 58.5, 62.7, 66.9],
        17: [30.2, 34.6, 38.9, 43.2, 47.5, 51.8, 56.1, 60.4, 64.7, 69.0],
        39: [30.4, 34.8, 39.3, 43.8, 48.2, 52.7, 57.2, 61.6, 66.1, 70.5],
        40: [29.5, 33.9, 38.4, 42.9, 47.3, 51.8, 56.3, 60.7, 65.2, 69.6],
        41: [28.7, 33.1, 37.6, 42.1, 46.5, 51.0, 55.5, 59.9, 64.4, 68.8],
        42: [27.8, 32.2, 36.7, 41.2, 45.6, 50.1, 54.6, 59.0, 63.5, 67.9],
        43: [26.9, 31.3, 35.8, 40.3, 44.7, 49.2, 53.7, 58.1, 62.6, 67.0],
        44: [26.0, 30.4, 34.9, 39.4, 43.8, 48.3, 52.8, 57.2, 61.7, 66.1],
        45: [25.1, 29.5, 34.0, 38.5, 42.9, 47.4, 51.9, 56.3, 60.8, 65.2],
        46: [24.3, 28.7, 33.2, 37.7, 42.1, 46.6, 51.1, 55.5, 60.0, 64.4],
        47: [23.4, 27.8, 32.3, 36.8, 41.2, 45.7, 50.2, 54.6, 59.1, 63.5],
        48: [22.5, 26.9, 31.4, 35.9, 40.3, 44.8, 49.3, 53.7, 58.2, 62.6],
        49: [21.6, 26.0, 30.5, 35.0, 39.4, 43.9, 48.4, 52.8, 57.3, 61.7],
        50: [20.7, 25.1, 29.6, 34.1, 38.5, 43.0, 47.5, 51.9, 56.4, 60.8],
        51: [19.9, 24.3, 28.8, 33.3, 37.7, 42.2, 46.6, 51.0, 55.5, 59.9],
        52: [19.0, 23.4, 27.9, 32.4, 36.8, 41.3, 45.8, 50.2, 54.7, 59.1],
        53: [18.1, 22.5, 27.0, 31.5, 35.9, 40.4, 44.9, 49.3, 53.8, 58.2],
        54: [17.2, 21.6, 26.1, 30.6, 35.0, 39.5, 44.0, 48.4, 52.9, 57.3],
        55: [16.3, 20.7, 25.2, 29.7, 34.1, 38.6, 43.1, 47.5, 52.0, 56.4],
        56: [15.5, 19.9, 24.4, 28.8, 33.3, 37.8, 42.2, 46.6, 51.1, 55.5],
        57: [14.6, 19.0, 23.5, 27.9, 32.4, 36.9, 41.4, 45.8, 50.3, 54.7],
        58: [13.7, 18.1, 22.6, 27.0, 31.5, 36.0, 40.5, 44.9, 49.4, 53.8],
        59: [12.8, 17.2, 21.7, 26.2, 30.6, 35.1, 39.6, 44.0, 48.5, 52.9],
        60: [11.9, 16.3, 20.8, 25.3, 29.7, 34.2, 38.7, 43.1, 47.6, 52.0],
        61: [11.0, 15.4, 20.0, 24.5, 28.9, 33.4, 37.9, 42.3, 46.7, 51.1],
        62: [10.1, 14.6, 19.1, 23.6, 28.0, 32.5, 37.0, 41.4, 45.9, 50.3],
        63: [9.3, 13.7, 18.2, 22.7, 27.1, 31.6, 36.1, 40.5, 45.0, 49.4],
        64: [8.4, 12.8, 17.3, 21.7, 26.2, 30.7, 35.2, 39.6, 44.1, 48.5],
        65: [7.5, 11.9, 16.4, 20.9, 25.3, 29.8, 34.3, 38.7, 43.2, 47.6],
        66: [6.6, 11.1, 15.6, 20.1, 24.5, 29.0, 33.4, 37.8, 42.3, 46.7],
        67: [5.7, 10.2, 14.7, 19.2, 23.6, 28.1, 32.6, 37.0, 41.5, 45.9],
        68: [4.9, 9.3, 13.8, 18.3, 22.7, 27.2, 31.7, 36.1, 40.6, 45.0],
        69: [4.0, 8.4, 12.9, 17.4, 21.8, 26.3, 30.8, 35.2, 39.7, 44.1],
        70: [3.5, 7.5, 12.0, 16.5, 20.9, 25.4, 29.9, 34.3, 38.8, 43.2],
        71: [3.5, 6.6, 11.2, 15.6, 20.1, 24.6, 29.1, 33.5, 37.9, 42.3],
        72: [3.5, 5.8, 10.3, 14.8, 19.2, 23.7, 28.2, 32.6, 37.1, 41.5],
        73: [3.5, 4.9, 9.4, 13.9, 18.3, 22.8, 27.3, 31.7, 36.2, 40.6],
        74: [3.5, 4.0, 8.5, 13.0, 17.4, 21.9, 26.4, 30.8, 35.3, 39.7],
        75: [3.5, 3.5, 7.6, 12.0, 16.5, 21.0, 25.5, 29.9, 34.4, 38.8],
        76: [3.5, 3.5, 6.8, 11.2, 15.7, 20.2, 24.7, 29.0, 33.5, 37.9],
        77: [3.5, 3.5, 5.9, 10.3, 14.8, 19.3, 23.8, 28.2, 32.7, 37.1],
        78: [3.5, 3.5, 5.0, 9.4, 13.9, 18.4, 22.9, 27.3, 31.8, 36.2],
        79: [3.5, 3.5, 4.1, 8.6, 13.0, 17.5, 22.0, 26.4, 30.9, 35.3],
        80: [3.5, 3.5, 3.5, 8.1, 12.1, 16.6, 21.1, 25.5, 30.0, 34.4],
        81: [3.5, 3.5, 3.5, 7.2, 11.5, 15.8, 20.3, 24.6, 29.1, 33.5],
        82: [3.5, 3.5, 3.5, 6.0, 10.4, 14.9, 19.4, 23.8, 28.3, 32.7],
        83: [3.5, 3.5, 3.5, 5.0, 9.5, 14.0, 18.5, 22.9, 27.4, 31.8],
        84: [3.5, 3.5, 3.5, 4.1, 8.6, 13.1, 17.6, 22.0, 26.5, 30.9],
        85: [3.5, 3.5, 3.5, 3.7, 7.7, 12.2, 16.7, 21.1, 25.6, 30.0],
        86: [3.5, 3.5, 3.5, 3.5, 6.9, 11.4, 15.9, 20.3, 24.7, 29.1],
        87: [3.5, 3.5, 3.5, 3.5, 6.0, 10.5, 15.0, 19.4, 23.9, 28.3],
        88: [3.5, 3.5, 3.5, 3.5, 5.1, 9.6, 14.1, 18.5, 23.0, 27.4],
        89: [3.5, 3.5, 3.5, 3.5, 4.2, 8.7, 13.2, 17.6, 22.1, 26.5],
        90: [3.5, 3.5, 3.5, 3.5, 3.5, 7.8, 12.3, 16.7, 21.2, 25.6],
        91: [3.5, 3.5, 3.5, 3.5, 3.5, 7.0, 11.5, 15.5, 20.3, 24.7],
        92: [3.5, 3.5, 3.5, 3.5, 3.5, 6.1, 10.6, 15.0, 19.5, 23.9],
        93: [3.5, 3.5, 3.5, 3.5, 3.5, 5.2, 9.7, 14.1, 18.6, 23.0],
        94: [3.5, 3.5, 3.5, 3.5, 3.5, 4.3, 8.8, 13.2, 17.7, 22.1],
        95: [3.5, 3.2, 3.5, 3.5, 3.5, 3.5, 7.9, 12.3, 16.8, 21.2],
        96: [3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 7.1, 11.4, 15.9, 20.3],
        97: [3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 6.2, 10.6, 15.1, 19.5],
        98: [3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 5.3, 9.7, 14.2, 18.6],
        99: [3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 4.4, 8.8, 13.3, 17.7],
        100: [3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 7.9, 12.4, 16.8]
    },

    getLevelForVdot: function(vdot, isFemale, age) {
        if (!vdot) {
            return 0;
        }

        var ageLevels = this.getAgeLevels(isFemale, age);
        for (var i = ageLevels.length - 1; i >= 0; i--) {
            var levelVdot = ageLevels[i];
            if (vdot >= levelVdot) {
                return i + 1;
            }
        }

        return 0;
    },

    getAgeLevels: function(isFemale, age) {
        var levels = isFemale ? VdotLevels._FemaleLevels : VdotLevels._MaleLevels;
        if (!age) {
            return levels[0];
        }

        var ageIndex = Math.floor(age);
        if (ageIndex < 0) {
            ageIndex = 0;
        } else if (ageIndex > 0 && ageIndex < VdotLevels._MinAgeIndex) {
            ageIndex = VdotLevels._MinAgeIndex;
        } else if (ageIndex > 100 && ageIndex < VdotLevels._MaxAgeIndex) {
            ageIndex = 100;
        }

        var ageLevels = levels[ageIndex];
        if (!ageLevels) {
            ageLevels = levels[0];
        }

        return ageLevels;
    }

}
var Validate = {
    isEmptyInput: function(input) {
        return input === null || input === undefined || input === '';
    },

    isValidNumber: function(value) {
        return value !== null && value !== undefined && !isNaN(value);
    },

    isValidTimeText: function(value) {
        value = '' + value;

        if (Validate.isEmptyInput(value)) {
            return false;
        }

        var intRegex = /^\d+$/;
        var segments = value.split(':');
        if (segments.length < 1) {
            return false;
        }
        if (segments.length > 3) {
            return false;
        }
        for (var i = 0; i < segments.length; i++) {
            if (!intRegex.test(segments[i])) {
                return false;
            }

            if (segments.length === 3 && i === 0) {
                continue;
            }

            var intValue = InputParser.parseInt(segments[i], -1);
            if (intValue < 0 || intValue > 59) {
                return false;
            }
        }

        return true;
    },

    requiredText: function(input) {
        return !Validate.isEmptyInput(input);
    },

    requiredNumber: function(input) {
        return $.isNumeric(input);
    },

    requiredInteger: function(input) {
        if (!Validate.requiredNumber(input)) {
            return false;
        } else {
            var value = parseInt(input);
            return !isNaN(value);
        }
    },

    requiredPositiveNumber: function(input) {
        if (!Validate.requiredNumber(input)) {
            return false;
        } else {
            var value = parseFloat(input);
            return !isNaN(value) && value > 0;
        }
    },

    requiredPositiveInteger: function(input) {
        if (!Validate.requiredNumber(input)) {
            return false;
        } else {
            var value = parseInt(input);
            return !isNaN(value) && value > 0;
        }
    },

    requiredPositiveNumberOrTime: function(input) {
        const isValidTime = Validate.isValidTimeText(input);
        const isValidNumber = Validate.requiredNumber(input);
        if (isValidNumber) {
            const value = parseFloat(input);
            return !isNaN(value) && value > 0;
        } else if (isValidTime) {
            return true;
        }

        return false;
    },

    requiredTimeString: function(input) {
        return Validate.isValidTimeText(input);
    },

    requiredUrl: function(input) {
        if (Validate.isEmptyInput(input)) {
            return false;
        }

        var pattern = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/);

        return pattern.test(input);
    },

    optionalText: function(input) {
        return Validate.isEmptyInput(input) || Validate.requiredText(input);
    },

    optionalInvariantDate: function(input) {
        if (isEmptyString(input) || input.match(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/) || input.match(/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/)) {
            return true;
        } else {
            return false;
        }
    },

    optionalNumber: function(input) {
        return Validate.isEmptyInput(input) || Validate.requiredNumber(input);
    },

    optionalInteger: function(input) {
        return Validate.isEmptyInput(input) || Validate.requiredInteger(input);
    },

    optionalPositiveNumber: function(input) {
        return Validate.isEmptyInput(input) || Validate.requiredPositiveNumber(input) || parseFloat(input) === 0;
    },

    optionalPositiveNumberOrTime: function(input) {
        if (Validate.isEmptyInput(input)) {
            return true;
        }

        return Validate.isEmptyInput(input) || Validate.requiredPositiveNumberOrTime(input) || parseFloat(input) === 0;
    },

    optionalPositiveInteger: function(input) {
        return Validate.isEmptyInput(input) || Validate.requiredPositiveInteger(input) || parseInt(input) === 0;
    },

    optionalTimeString: function(input) {
        return Validate.isEmptyInput(input) || Validate.requiredTimeString(input);
    },

    isValidEmail: function(value) {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const success = re.test(String(value).toLowerCase());
        return success;
    },

    requiredDistanceValidatorForUnit: function(unit) {
        const isTimeUnit = DistanceUnit.isTimeUnit(unit);
        return isTimeUnit ? Validate.requiredPositiveNumberOrTime : Validate.requiredPositiveNumber;
    },

    optionalDistanceValidatorForUnit: function(unit) {
        const isTimeUnit = DistanceUnit.isTimeUnit(unit);

        return isTimeUnit ? Validate.optionalPositiveNumberOrTime : Validate.optionalPositiveNumber;
    }
}
/// <reference path="~/js/clipboardjs/clipboard.js" />

var _dropdownFilterText = '';
var _dropdownFilterLastCharTime = 0;

function ensureBootstrapDatepicker() {
    if ($.fn.bootstrapDP) {
        return true;
    }

    if (!$.fn.datepicker || !$.fn.datepicker.noConflict) {
        return false;
    }

    const datepicker = $.fn.datepicker.noConflict();
    // return $.fn.datepicker to previously assigned value
    $.fn.bootstrapDP = datepicker;
    return true;
}

function setupDropdowns($element, allowEmptyValue) {
    $element.click(function(e) {
        const $unitLabel = $(e.target).closest(".dropdown").find('.unit-label');
        const $hiddenUnit = $(e.target).closest(".dropdown").find('.hidden-unit');
        const unit = $(e.target).attr('data-unit');

        if ($unitLabel.length === 0 && $hiddenUnit.length === 0) {
            return;
        }

        if (unit || allowEmptyValue) {
            const value = $(e.target).text();
            $unitLabel.html(value);
            $hiddenUnit.val(unit);
        }

        $hiddenUnit.change();
    });
}

function onInputFormDropdownItemSelected($item) {
    const unit = $item.attr('data-unit');
    const value = $item.text();
    const dropdown = $item.closest(".dropdown");

    if (Validate.isEmptyInput(value)) {
        dropdown.find('.field-placeholder').removeClass('active');
    } else {
        dropdown.find('.field-placeholder').addClass('active');
    }

    dropdown.find('.unit-label').html(value);
    dropdown.find('.hidden-unit').val(unit);
    dropdown.find('.hidden-unit').change();
}

function setupInputForms() {
    setupInputFields($(".input-form"));
}

function setupInputFields($element) {
    $element.find('.time-input').timeInputField();
    $element.find('.pace-input').timeInputField();

    $element.find('input[placeholder]').placeholderLabel({
        placeholderColor: "#888",
        labelColor: "#333",
        useBorderColor: false,
        timeMove: 150
    });
    $element.find('.input-field').inputFieldPlaceholder();
    $element.find('textarea').placeholder();

    setupInputDropdowns($element);
    setupInputDatePickers($element);
}

function setupInputDropdowns($element) {
    $element.find('.dropdown-menu > li > a').click(inputFormDropdownClicked);

    const filteredDropdowns = $element.find('.dropdown-field.dropdown-filtered');
    if (filteredDropdowns.length > 0) {
        filteredDropdowns.find(".dropdown-toggle").keydown(bind(this, this.onFilteredDropdownKeydown));
        filteredDropdowns.find("li>a").keydown(bind(this, this.onFilteredDropdownKeydown));
        filteredDropdowns.find(".dropdown-toggle").click(bind(this, this.onFilteredDropdownClick));
    }
}

function onFilteredDropdownClick(e) {
    const dropdownMenu = $(e.target).closest(".dropdown-field").find(".dropdown-menu");
    dropdownMenu.scrollTop(0);
    _dropdownFilterText = "";
    _dropdownFilterLastCharTime = 0;
    focusDropdownItem(dropdownMenu, null);
}

function onFilteredDropdownKeydown(e) {
    e.preventDefault();
    e.stopPropagation();

    const dropdown = $(e.target).closest(".dropdown-field");
    const dropdownMenu = dropdown.find(".dropdown-menu");
    const allItems = dropdownMenu.find("li>a");
    const focusedItem = dropdownMenu.find("li>a.focused");
    if (e.which === 13) {
        onInputFormDropdownItemSelected(focusedItem);
        dropdown.removeClass('open');
        return;
    } else if (e.which === 38) {
        if (focusedItem.length === 0) {
            focusDropdownItem(dropdownMenu, allItems[0]);
            return;
        }

        const prevIndex = allItems.index(focusedItem) - 1;
        if (prevIndex >= 0 && prevIndex < allItems.length - 1) {
            focusDropdownItem(dropdownMenu, allItems[prevIndex]);
        }
        return;
    } else if (e.which === 40) {
        if (focusedItem.length === 0) {
            focusDropdownItem(dropdownMenu, allItems[0]);
            return;
        }

        const nextIndex = allItems.index(focusedItem) + 1;
        if (nextIndex >= 0 && nextIndex < allItems.length) {
            focusDropdownItem(dropdownMenu, allItems[nextIndex]);
        }
        return;
    }

    const c = String.fromCharCode(e.which).toLowerCase();
    if (c < "a" || c > "z") {
        return;
    }

    if ((new Date().getTime() - _dropdownFilterLastCharTime) > 1500) {
        _dropdownFilterText = '';
    }

    _dropdownFilterLastCharTime = new Date().getTime();
    _dropdownFilterText += c;

    const items = dropdownMenu.find("li>a:startsWith('" + _dropdownFilterText + "')");
    if (items.length === 0) {
        return;
    }

    focusDropdownItem(dropdownMenu, items[0]);
}

function focusDropdownItem(dropdownMenu, item) {
    dropdownMenu.find("li>a").removeClass("focused");

    const $item = $(item);
    if (!$item.length) {
        return;
    }

    $item.focus();
    $item.addClass("focused");
    dropdownMenu.scrollTop(dropdownMenu.scrollTop() + $item.position().top - 36 * 6);
}

function setupInputDatePickers($element) {
    if (!ensureBootstrapDatepicker()) {
        return;
    }

    $element.find('.birthday-datepicker').bootstrapDP({
        format: 'mm/dd/yyyy',
        startDate: "01/01/1900",
        startView: 2,
        maxViewMode: 2,
        orientation: "bottom left",
        autoclose: true,
    });
    $element.find('.datepicker').bootstrapDP({
        format: 'mm/dd/yyyy',
        maxViewMode: 2,
        orientation: "bottom left",
        autoclose: true,
    });
}

function inputFormDropdownClicked(e) {
    onInputFormDropdownItemSelected($(e.target));
}

function setDropdownFieldValue($dropdown, value) {
    var didFindItem = false;
    $dropdown.each(function() {
        const $this = $(this);

        const dropdownMenu = $this.hasClass('dropdown') ? $this.find('.dropdown-menu') : $this.closest('.dropdown').find('.dropdown-menu');
        const aSelector = 'a[data-unit="' + value + '"]';
        const element = dropdownMenu.find('> li > ' + aSelector);
        if (element.length === 0) {
            return;
        }

        didFindItem = true;
        onInputFormDropdownItemSelected(element);
    });

    if (!didFindItem) {
        $dropdown.find('.field-placeholder').removeClass('active');
        $dropdown.find('.unit-label').html("");
        $dropdown.find('.hidden-unit').val("");
        $dropdown.find('.hidden-unit').change();
    }
}

function setDropdownFieldValueVisibility($dropdown, value, show) {
    $dropdown.each(function() {
        const $this = $(this);

        const dropdown = $this.hasClass('dropdown') ? $this : $this.closest('.dropdown');
        const dropdownMenu = dropdown.find('.dropdown-menu');

        const aSelector = 'a[data-unit="' + value + '"]';
        const element = dropdownMenu.find('> li > ' + aSelector);
        if (element.length === 0) {
            return;
        }

        if (show) {
            element.parent().show();
        } else {
            element.parent().hide();
        }
    });

}

function setDropdownUnitValue($element, value) {
    return setDropdownValue($element, value, DistanceUnit, true);
}

function setDropdownValue($element, value, enumType, useStringValues, forceDisplayText) {
    const parent = $element.parent();
    if (parent.hasClass('dropdown')) {
        // This is old distance dropdown logic, which supports direct enum values
        // like 'mi', 'km', 'min', this is why we need to 
        const unitText = forceDisplayText || enumType.stringValue(value);
        parent.find('.unit-label').html(unitText);
        if (useStringValues) {
            $element.val(unitText);
        } else {
            $element.val(value);
        }

        $element.change();
    } else {
        $element.val(value);
    }
}

function setDropdownOptions($dropdown, idNameOptions) {
    const selectedValue = getDropdownFieldValue($dropdown);
    const menu = $dropdown.find(".dropdown-menu");
    const isInputForm = $dropdown.closest('.input-form').length > 0;

    menu.empty();

    for (let i = 0; i < idNameOptions.length; i++) {
        const item = idNameOptions[i];

        if (item.id === "dropdown-divider") {
            menu.append("<div class='dropdown-divider'></div>");
            continue;
        }

        const listItem = "<li><a tabindex='-1' data-unit='" + item.id + "'>" + item.name + "</a></li>";
        menu.append(listItem);
    }

    setDropdownFieldValue($dropdown, selectedValue);

    if (isInputForm) {
        setupInputDropdowns($dropdown);
    } else {
        setupDropdowns($dropdown.find('.dropdown-menu > li > a'));
    }

}

function getDropdownSelectedText($element) {
    if (!$element) {
        return '';
    }

    const parent = $element.parent();
    if (parent.hasClass('dropdown')) {
        return parent.find('.unit-label').text();
    } else {
        return $element.find(':selected').text();
    }
}

function validateTextField($textField, validatorFunction, markInputInvalid) {
    const value = getTextFieldValue($textField);
    var input = $textField.find('input');
    if (input.length === 0) {
        // Handle scenarios where inputId is used instead of FieldId
        input = $textField;
    }
    return validateInputFieldValue(input, value, validatorFunction, markInputInvalid);
}

function validateDatepickerField($datepicker, validatorFunction, markInputInvalid) {
    if (markInputInvalid === undefined) {
        markInputInvalid = true;
    }

    const value = getDatepickerFieldValue($datepicker);
    var input = $datepicker.find('input');
    if (input.length === 0) {
        // Handle scenarios where inputId is used instead of FieldId
        input = $datepicker;
    }

    const isValid = validateInputFieldValue(input, value, validatorFunction, markInputInvalid);
    if (markInputInvalid === false) {
        return isValid;
    }

    if (isValid) {
        setHasValidInput($datepicker);
    } else {
        setHasInvalidInput($datepicker);
    }

    return isValid;
}

function validateRadioButtonsField($element, markInputInvalid) {
    const value = getRadioButtonsFieldValue($element);
    return validateInputFieldValue($element, value, Validate.requiredText, markInputInvalid);
}

function validateCheckboxField($element, markInputInvalid) {
    const value = getCheckboxFieldValue($element);
    return validateInputFieldValue($element, value, function(input) {
        return input;
    }, markInputInvalid);
}

function validateDropdownField($element, validatorFunction, markInputInvalid) {
    const value = getDropdownFieldValue($element);
    return validateInputFieldValue($element, value, validatorFunction || Validate.requiredText, markInputInvalid);
}

function validateInputFieldValue($element, value, validatorFunction, markInputInvalid) {
    if (markInputInvalid === undefined) {
        markInputInvalid = true;
    }

    const isValid = validatorFunction(value);

    if (markInputInvalid === false) {
        return isValid;
    }

    if (isValid) {
        setHasValidInput($element);
    } else {
        setHasInvalidInput($element);
    }

    return isValid;
}

function inputValue($element) {
    const val = $element.val();
    if (!val) {
        return val;
    }

    return val.trim();
}

function getTextFieldValue($textField) {
    var input = $textField.find('input');
    if (input.length === 0) {
        // Handle scenarios where inputId is used instead of FieldId
        input = $textField;
    }

    const val = input.val();
    if (!val) {
        return val;
    }

    return val.trim();
}

function setTextFieldValue($textField, value, triggerChanged) {
    var input = $textField.find('input');
    if (input.length === 0) {
        // Handle scenarios where inputId is used instead of FieldId
        input = $textField;
    }

    input.val(value);
    if (triggerChanged) {
        input.change();

    }
}

function getDropdownFieldValue($dropdown) {
    var dropdownInput = $dropdown.find('.hidden-unit');
    if (dropdownInput.length === 0) {
        // Handle scenarios where inputId is used instead of FieldId
        dropdownInput = $dropdown;
    }

    return dropdownInput.val();
}

function getDatepickerFieldValue($datepicker) {
    var input = $datepicker.find('input');
    if (input.length === 0) {
        // Handle scenarios where inputId is used instead of FieldId
        input = $datepicker;
    }

    return getTextFieldValue(input);
}

function getRadioButtonsFieldValue($element) {
    const checkedItem = $element.find('input[type="radio"]:checked');
    return checkedItem.val();
}

function setRadioButtonsFieldValue($element, value) {
    var radio = $element.find('input[type="radio"]');
    if (radio.length === 0) {
        // Handle scenarios where CheckboxId is used instead of FieldId
        radio = $element;
    }

    radio.prop('checked', value);
}

function getCheckboxFieldValue($element) {
    var checkbox = $element.find('input[type="checkbox"]');
    if (checkbox.length === 0) {
        // Handle scenarios where CheckboxId is used instead of FieldId
        checkbox = $element;
    }
    const isChecked = checkbox.prop('checked');
    return isChecked;
}

function setCheckboxFieldValue($element, value) {
    var checkbox = $element.find('input[type="checkbox"]');
    if (checkbox.length === 0) {
        // Handle scenarios where CheckboxId is used instead of FieldId
        checkbox = $element;
    }

    checkbox.prop('checked', value);
}

function validateRaceDistanceField($raceTypeDropdown, $otherDistanceField, markInputInvalid) {
    if (markInputInvalid === undefined) {
        markInputInvalid = true;
    }

    if (!validateDropdownField($raceTypeDropdown, Validate.requiredText, markInputInvalid)) {
        return false;
    }

    const distanceValue = getDropdownFieldValue($raceTypeDropdown);
    const distance = InputParser.parseFloat(distanceValue);

    const otherDistanceTextField = $otherDistanceField.find('input.value-field');
    const otherDistanceUnitField = $otherDistanceField.find('.unit-field');

    setHasValidInput(otherDistanceTextField);
    setHasValidInput(otherDistanceUnitField);

    if (distance > 0) {
        return true;
    }

    const isValid = validateTextField(otherDistanceTextField, Validate.requiredNumber, markInputInvalid);
    if (!isValid && markInputInvalid) {
        setHasInvalidInput(otherDistanceUnitField);
    }

    return isValid;

}

function validateDistanceField($distanceField, markInputInvalid) {
    return validateValueUnitField($distanceField, markInputInvalid);
}

function validateSingleUnitTextField($singleUnitTextField, markInputInvalid) {
    return validateValueUnitField($singleUnitTextField, markInputInvalid);
}

function validateValueUnitField($valueUnitField, markInputInvalid) {
    if (markInputInvalid === undefined) {
        markInputInvalid = true;
    }

    const valueTextField = $valueUnitField.find('input.value-field');
    const unitField = $valueUnitField.find('.unit-field');

    const isValid = validateTextField(valueTextField, Validate.requiredNumber, markInputInvalid);
    if (markInputInvalid) {
        if (isValid) {
            setHasValidInput(unitField);
        } else {
            setHasInvalidInput(unitField);
        }
    }

    return isValid;
}

function getDistanceFieldValue($distanceField) {
    const textField = $distanceField.find('input.value-field');
    return getTextFieldValue(textField);
}

function getDistanceFieldUnit($distanceField) {
    const unitField = $distanceField.find('.unit-field');
    return getDropdownFieldValue(unitField);
}

function getSingleUnitFieldValue($singleUnitField) {
    const textField = $singleUnitField.find('input.value-field');
    return getTextFieldValue(textField);
}

function getRaceDistanceFieldValue($raceTypeDropdown, $otherDistanceField) {
    const distanceValue = getDropdownFieldValue($raceTypeDropdown);
    if (!distanceValue) {
        return 0;
    }

    var distance = InputParser.parseFloat(distanceValue);
    if (distance > 0) {
        return distance;
    }

    const otherDistanceTextField = $otherDistanceField.find('input.value-field');
    const otherDistanceUnitDropdown = $otherDistanceField.find('.dropdown-field');
    const otherDistance = getTextFieldValue(otherDistanceTextField);
    const otherUnit = getDropdownFieldValue(otherDistanceUnitDropdown);

    if (!Validate.isEmptyInput(otherDistance)) {
        distance = Conversion.fromDistanceUnitString(otherDistance, otherUnit, true);
    }

    return distance;
}

function setHasInvalidInput($element) {
    $element.addClass('input-error');
}

function setHasValidInput($element, withSubInputField) {
    $element.removeClass('input-error');

    if (withSubInputField) {
        var input = $element.find('input');
        if (input.length) {
            input.removeClass('input-error');
        }
    }
}

function toggleValidInput($element, hasValidInput) {
    if (hasValidInput) {
        setHasValidInput($element);
    } else {
        setHasInvalidInput($element);
    }
}

function setupSpinner(e) {
    const originalHtml = e.html();
    const newHtml = "<div class='btn-content'>" + originalHtml + "</div> <div class='loader'></div>";
    e.html(newHtml);
    e.find(".loader").hide();
    return e;
}

function isSpinnerVisible(e) {
    return e.find(".loader").is(":visible");
}

function showSpinner(e) {
    e.find(".btn-content").hide();
    e.find(".loader").fadeIn();
    return e;
}

function hideSpinner(e) {
    e.find(".loader").hide();
    e.find(".btn-content").fadeIn();
    return e;
}

function setupClipboard(selector) {
    const c = new Clipboard(selector);
}

if ($) {
    $.fn.setupSpinner = $.fn.setupSpinner || function() {
        return setupSpinner(this);
    }
    ;
    $.fn.isSpinnerVisible = $.fn.isSpinnerVisible || function() {
        return isSpinnerVisible(this);
    }
    ;
    $.fn.showSpinner = $.fn.showSpinner || function() {
        return showSpinner(this);
    }
    ;
    $.fn.hideSpinner = $.fn.hideSpinner || function() {
        return hideSpinner(this);
    }
    ;
}
function FormDistanceTextField($element) {
    this.view = $element;
    this.initialize();
}

FormDistanceTextField.prototype = {
    initialize: function() {
        this.initializeControls();
    },

    initializeControls: function() {
        this.valueField = this.view.find('input.value-field');
        this.unitField = this.view.find('.unit-field');
    },

    setHasValidInput: function() {
        setHasValidInput(this.valueField);
        setHasValidInput(this.unitField);
    },

    validateInput: function(validatorFunction) {
        if (!validatorFunction) {
            validatorFunction = Validate.requiredNumber;
        }

        var isValid = validateTextField(this.valueField, validatorFunction);
        if (!isValid) {
            setHasInvalidInput(this.unitField);
        } else {
            setHasValidInput(this.unitField);
        }

        return isValid;
    },

    getDistanceMeters: function() {
        var distance = getTextFieldValue(this.valueField);
        var unit = getDropdownFieldValue(this.unitField);

        return Conversion.fromDistanceUnitString(distance, unit, true);
    },

    getDistanceUnit: function() {
        return getDropdownFieldValue(this.unitField);
    },

    setDistanceUnit: function(unit) {
        setDropdownFieldValue(this.unitField, DistanceUnit.enumValue(unit));
    }
};

function FormRaceDistanceField($element) {
    this.view = $element;
    this.initialize();
}

FormRaceDistanceField.prototype = {
    initialize: function() {
        this.initializeControls();
        this.bindEvents();

        this.onRaceTypeChanged();
    },

    initializeControls: function() {
        this.raceTypeContainer = this.view.find('.race-type-container');
        this.raceTypeDropdown = this.view.find('.race-type-field');
        this.otherDistanceContainer = this.view.find('.race-other-distance-container');
        this.otherDistanceField = this.view.find('.race-other-distance-field');
    },

    bindEvents: function() {
        this.raceTypeDropdown.change(bind(this, this.onRaceTypeChanged));
    },

    onRaceTypeChanged: function(e) {
        var distanceValue = getDropdownFieldValue(this.raceTypeDropdown);
        if (distanceValue === "0") {
            this.otherDistanceContainer.show();
            this.raceTypeContainer.removeClass("span12");
            this.raceTypeContainer.addClass("span6");
        } else {
            this.otherDistanceContainer.hide();
            this.raceTypeContainer.removeClass("span6");
            this.raceTypeContainer.addClass("span12");
        }
    },

    setHasValidInput: function() {
        setHasValidInput(this.raceTypeDropdown);
        var otherDistanceTextField = this.otherDistanceField.find('input.value-field');
        var otherDistanceUnitField = this.otherDistanceField.find('.dropdown-field');
        setHasValidInput(otherDistanceTextField);
        setHasValidInput(otherDistanceUnitField);
    },

    validateInput: function() {
        return validateRaceDistanceField(this.raceTypeDropdown, this.otherDistanceField);
    },

    getDistance: function() {
        return getRaceDistanceFieldValue(this.raceTypeDropdown, this.otherDistanceField);
    },

    getDistanceUnit: function() {
        var distanceValue = getDropdownFieldValue(this.raceTypeDropdown);
        if (distanceValue !== "0") {
            return DistanceUnit.m;
        }
        ;var otherUnit = getDistanceFieldUnit(this.otherDistanceField);
        return otherUnit;
    }
};

var UrlUtils = {
    currentUrl: function() {
        return window.location.href;
    },

    getBaseUrl: function(url) {
        var queryIndex = url.indexOf("?");
        var baseUrl = queryIndex < 0 ? url : url.slice(0, queryIndex);
        return baseUrl;
    },

    replaceQueryString: function(url, queryString) {
        var baseUrl = this.getBaseUrl(url);
        if (!queryString) {
            return baseUrl;
        }

        return baseUrl + '?' + queryString;
    },

    addParameter: function(key, value, url) {
        if (!value) {
            return this.removeParameter(key);
        }

        if (!url) {
            url = this.currentUrl();
        }

        key = this.encode(key);
        value = this.encode(value);

        var kvp = key + "=" + value;

        var queryIndex = url.indexOf("?");
        var baseUrl = queryIndex < 0 ? url : url.slice(0, queryIndex);
        var query = queryIndex < 0 ? "" : url.slice(queryIndex + 1);

        var regex = new RegExp("(&|\\?)*" + key + "=[^\&]*");
        query = query.replace(regex, "$1" + kvp);

        var didReplace = query.indexOf(kvp) >= 0;
        if (!didReplace || query.length === 0) {
            query += (query.length > 0 ? "&" : "") + kvp;
        }
        ;
        if (query) {
            return baseUrl + "?" + trimChars(query, "&");
        }

        return baseUrl;
    },

    removeParameter: function(key, url) {
        if (!url) {
            url = this.currentUrl();
        }

        var queryIndex = url.indexOf("?");
        var baseUrl = queryIndex < 0 ? url : url.slice(0, queryIndex);
        var query = queryIndex < 0 ? "" : url.slice(queryIndex + 1);

        var regex = new RegExp("(&|\\?)*" + key + "=[^\&]*");
        query = query.replace(regex, "");

        if (query) {
            return baseUrl + "?" + trimChars(query, "&");
        }

        return baseUrl;
    },

    getParameterValue: function(name, url) {
        if (!url) {
            url = window.location.href;
        }

        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
        var results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return "";
        }

        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },

    encode: function(text) {
        return encodeURIComponent(text);
    }
}
var InputParser = {
    parseInt: function(input, defaultValue) {
        if (!defaultValue) {
            defaultValue = 0;
        }

        var value = parseInt(input);
        if (isNaN(value)) {
            return defaultValue;
        }

        return value;
    },

    parseFloat: function(input, defaultValue) {
        if (!defaultValue) {
            defaultValue = 0.0;
        }

        if (input instanceof String) {
            input = input.replace(",", ".");
        }

        var value = parseFloat(input);
        if (isNaN(value)) {
            return defaultValue;
        }

        return value;
    },

    parseTime: function(input) {
        return Conversion.fromTimeString(input);

    },

    parseBool: function(input) {
        return boolValue(input);
    },

    parseDistanceUnit: function(input) {
        const unit = DistanceUnit.enumValue(input);
        return unit;
    },

    parseDistance: function(input, unit, convertToMeters) {
        const distanceUnit = DistanceUnit.enumValue(unit);
        const isTimeInput = DistanceUnit.isTimeUnit(distanceUnit) && input.includes(":");

        if (isTimeInput) {
            const minutes = InputParser.parseTime(input);
            if (distanceUnit === DistanceUnit.sec) {
                return minutes * 60;
            }

            return minutes;
        }

        const distance = Conversion.fromDistanceUnitString(input, unit, convertToMeters);
        return distance;
    },

    parseRecoveryDistance: function(input, unit, convertToMeters) {
        const distanceUnit = RecoveryDistanceUnit.enumValue(unit);
        const isTimeInput = RecoveryDistanceUnit.isTimeUnit(distanceUnit) && input.includes(":");

        if (isTimeInput) {
            const minutes = InputParser.parseTime(input);
            if (distanceUnit === RecoveryDistanceUnit.WalkSeconds || distanceUnit === RecoveryDistanceUnit.JogSeconds) {
                return minutes * 60;
            }

            return minutes;
        }

        const distance = Conversion.fromDistanceUnitString(input, unit, convertToMeters);
        return distance;
    },

    parseDistanceObject: function(input, unit) {
        return {
            value: InputParser.parseDistance(input, unit, true),
            distanceUnit: DistanceUnit.enumValue(unit)
        }
    }

};
