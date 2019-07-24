! function(a) {
    "use strict";
    var t = function(a) {
        var i = a.h;
        if (!a.CORE_VERSION || !i.compareVersions(t.REQUIRE_CORE_VERSION, a.CORE_VERSION)) throw new Error("[MixItUp Pagination] MixItUp Pagination " + t.EXTENSION_VERSION + " requires at least MixItUp " + t.REQUIRE_CORE_VERSION);
        a.ConfigCallbacks.registerAction("afterConstruct", "pagination", function() {
            this.onPaginateStart = null, this.onPaginateEnd = null
        }), a.ConfigClassNames.registerAction("afterConstruct", "pagination", function() {
            this.elementPager = "control", this.elementPageList = "page-list", this.elementPageStats = "page-stats", this.modifierFirst = "first", this.modifierLast = "last", this.modifierPrev = "prev", this.modifierNext = "next", this.modifierTruncationMarker = "truncation-marker"
        }), a.ConfigLoad.registerAction("afterConstruct", "pagination", function() {
            this.page = 1
        }), a.ConfigPagination = function() {
            this.generatePageList = !0, this.generatePageStats = !0, this.maintainActivePage = !0, this.loop = !1, this.hidePageListIfSinglePage = !1, this.hidePageStatsIfSinglePage = !1, this.limit = -1, this.maxPagers = 5, i.seal(this)
        }, a.ConfigRender.registerAction("afterConstruct", "pagination", function() {
            this.pager = null, this.pageStats = null
        }), a.ConfigSelectors.registerAction("afterConstruct", "pagination", function() {
            this.pageList = ".mixitup-page-list", this.pageStats = ".mixitup-page-stats"
        }), a.ConfigTemplates.registerAction("afterConstruct", "pagination", function() {
            this.pager = '<button type="button" class="${classNames}" data-page="${pageNumber}">${pageNumber}</button>', this.pagerPrev = '<button type="button" class="${classNames}" data-page="prev">&laquo;</button>', this.pagerNext = '<button type="button" class="${classNames}" data-page="next">&raquo;</button>', this.pagerTruncationMarker = '<span class="${classNames}">&hellip;</span>', this.pageStats = "${startPageAt} to ${endPageAt} of ${totalTargets}", this.pageStatsSingle = "${startPageAt} of ${totalTargets}", this.pageStatsFail = "None found"
        }), a.Config.registerAction("beforeConstruct", "pagination", function() {
            this.pagination = new a.ConfigPagination
        }), a.ModelPager = function() {
            this.pageNumber = -1, this.classNames = "", this.classList = [], this.isDisabled = !1, this.isPrev = !1, this.isNext = !1, this.isPageLink = !1, this.isTruncationMarker = !1, i.seal(this)
        }, a.ModelPageStats = function() {
            this.startPageAt = -1, this.endPageAt = -1, this.totalTargets = -1, i.seal(this)
        }, a.UiClassNames.registerAction("afterConstruct", "pagination", function() {
            this.first = "", this.last = "", this.prev = "", this.next = "", this.first = "", this.last = "", this.truncated = "", this.truncationMarker = ""
        }), a.controlDefinitions.push(new a.ControlDefinition("pager", "[data-page]", !0, "pageListEls")), a.Control.registerFilter("commandsHandleClick", "pagination", function(a, t) {
            var e = this,
                n = {},
                s = "",
                o = null,
                g = null,
                r = -1;
            if (!e.selector || "[data-page]" !== e.selector) return a;
            for (g = i.closestParent(t.target, e.selector, !0, e.bound[0].dom.document), r = 0; o = e.bound[r]; r++) n = a[r], !o.config.pagination || o.config.pagination.limit < 0 || o.config.pagination.limit === 1 / 0 ? a[r] = null : !g || i.hasClass(g, o.classNamesPager.active) || i.hasClass(g, o.classNamesPager.disabled) ? a[r] = null : (s = g.getAttribute("data-page"), n.paginate = "prev" === s ? "prev" : "next" === s ? "next" : parseInt(s), o.lastClicked && (o.lastClicked = g));
            return a
        }), a.CommandMultimix.registerAction("afterConstruct", "pagination", function() {
            this.paginate = null
        }), a.CommandPaginate = function() {
            this.page = -1, this.limit = -1, this.action = "", this.anchor = null, i.seal(this)
        }, a.Events.registerAction("afterConstruct", "pagination", function() {
            this.paginateStart = null, this.paginateEnd = null
        }), a.events = new a.Events, a.Operation.registerAction("afterConstruct", "pagination", function() {
            this.startPagination = null, this.newPagination = null, this.startTotalPages = -1, this.newTotalPages = -1
        }), a.State.registerAction("afterConstruct", "pagination", function() {
            this.activePagination = null, this.totalPages = -1
        }), a.MixerDom.registerAction("afterConstruct", "pagination", function() {
            this.pageListEls = [], this.pageStatsEls = []
        }), a.Mixer.registerAction("afterConstruct", "pagination", function() {
            this.classNamesPager = new a.UiClassNames, this.classNamesPageList = new a.UiClassNames, this.classNamesPageStats = new a.UiClassNames
        }), a.Mixer.registerAction("afterAttach", "pagination", function() {
            var a = this,
                t = null,
                e = -1;
            if (!(a.config.pagination.limit < 0)) {
                if (a.classNamesPager.base = i.getClassname(a.config.classNames, "pager"), a.classNamesPager.active = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierActive), a.classNamesPager.disabled = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierDisabled), a.classNamesPager.first = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierFirst), a.classNamesPager.last = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierLast), a.classNamesPager.prev = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierPrev), a.classNamesPager.next = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierNext), a.classNamesPager.truncationMarker = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierTruncationMarker), a.classNamesPageList.base = i.getClassname(a.config.classNames, "page-list"), a.classNamesPageList.disabled = i.getClassname(a.config.classNames, "page-list", a.config.classNames.modifierDisabled), a.classNamesPageStats.base = i.getClassname(a.config.classNames, "page-stats"), a.classNamesPageStats.disabled = i.getClassname(a.config.classNames, "page-stats", a.config.classNames.modifierDisabled), a.config.pagination.generatePageList && a.dom.pageListEls.length > 0)
                    for (e = 0; t = a.dom.pageListEls[e]; e++) a.renderPageListEl(t, a.lastOperation);
                if (a.config.pagination.generatePageStats && a.dom.pageStatsEls.length > 0)
                    for (e = 0; t = a.dom.pageStatsEls[e]; e++) a.renderPageStatsEl(t, a.lastOperation)
            }
        }), a.Mixer.registerAction("afterSanitizeConfig", "pagination", function() {
            var t = this,
                i = t.config.callbacks.onMixStart,
                e = t.config.callbacks.onMixEnd,
                n = t.config.callbacks.onPaginateStart,
                s = t.config.callbacks.onPaginateEnd,
                o = !1;
            t.config.pagination.limit < 0 || (t.classNamesPager = new a.UiClassNames, t.classNamesPageList = new a.UiClassNames, t.classNamesPageStats = new a.UiClassNames, t.config.callbacks.onMixStart = function(e, s) {
                e.activePagination.limit === s.activePagination.limit && e.activePagination.page === s.activePagination.page || (o = !0), "function" == typeof i && i.apply(t.dom.container, arguments), o && (a.events.fire("paginateStart", t.dom.container, {
                    state: e,
                    futureState: s,
                    instance: t
                }, t.dom.document), "function" == typeof n && n.apply(t.dom.container, arguments))
            }, t.config.callbacks.onMixEnd = function(i) {
                "function" == typeof e && e.apply(t.dom.container, arguments), o && (o = !1, a.events.fire("paginateEnd", t.dom.container, {
                    state: i,
                    instance: t
                }, t.dom.document), "function" == typeof s && s.apply(t.dom.container, arguments))
            })
        }), a.Mixer.registerFilter("operationGetInitialState", "pagination", function(a, t) {
            return this.config.pagination.limit < 0 ? a : (a.newPagination = t.activePagination, a)
        }), a.Mixer.registerFilter("stateGetInitialState", "pagination", function(t) {
            var i = this;
            return i.config.pagination.limit < 0 ? t : (t.activePagination = new a.CommandPaginate, t.activePagination.page = i.config.load.page, t.activePagination.limit = i.config.pagination.limit, t)
        }), a.Mixer.registerAction("afterGetFinalMixData", "pagination", function() {
            var a = this;
            a.config.pagination.limit < 0 || "number" == typeof a.config.pagination.maxPagers && (a.config.pagination.maxPagers = Math.max(5, a.config.pagination.maxPagers))
        }), a.Mixer.registerAction("afterCacheDom", "pagination", function() {
            var t = this,
                i = null;
            if (!(t.config.pagination.limit < 0) && t.config.pagination.generatePageList) {
                switch (t.config.controls.scope) {
                    case "local":
                        i = t.dom.container;
                        break;
                    case "global":
                        i = t.dom.document;
                        break;
                    default:
                        throw new Error(a.messages.ERROR_CONFIG_INVALID_CONTROLS_SCOPE)
                }
                t.dom.pageListEls = i.querySelectorAll(t.config.selectors.pageList), t.dom.pageStatsEls = i.querySelectorAll(t.config.selectors.pageStats)
            }
        }), a.Mixer.registerFilter("stateBuildState", "pagination", function(a, t) {
            return this.config.pagination.limit < 0 ? a : (a.activePagination = t.newPagination, a.totalPages = t.newTotalPages, a)
        }), a.Mixer.registerFilter("instructionParseMultimixArgs", "pagination", function(t) {
            return this.config.pagination.limit < 0 ? t : (!t.command.paginate || t.command.paginate instanceof a.CommandPaginate || (t.command.paginate = this.parsePaginateArgs([t.command.paginate]).command), t)
        }), a.Mixer.registerAction("afterFilterOperation", "pagination", function(a) {
            var t = this,
                i = -1,
                e = -1,
                n = [],
                s = [],
                o = null,
                g = -1,
                r = -1;
            if (!(t.config.pagination.limit < 0)) {
                if (a.newTotalPages = a.newPagination.limit ? Math.max(Math.ceil(a.matching.length / a.newPagination.limit), 1) : 1, t.config.pagination.maintainActivePage && (a.newPagination.page = a.newPagination.page > a.newTotalPages ? a.newTotalPages : a.newPagination.page), t.config.pagination.limit = a.newPagination.limit, a.newPagination.anchor) {
                    for (r = 0;
                        (o = a.matching[r]) && o.dom.el !== a.newPagination.anchor; r++);
                    i = r, e = r + a.newPagination.limit - 1
                } else i = a.newPagination.limit * (a.newPagination.page - 1), e = a.newPagination.limit * a.newPagination.page - 1, isNaN(i) && (i = 0);
                if (!(a.newPagination.limit < 0)) {
                    for (r = 0; o = a.show[r]; r++) r >= i && r <= e ? n.push(o) : s.push(o);
                    for (a.show = n, r = 0; o = a.toHide[r]; r++) o.isShown || (a.toHide.splice(r, 1), o.isShown = !1, r--);
                    for (r = 0; o = s[r]; r++) a.hide.push(o), (g = a.toShow.indexOf(o)) > -1 && a.toShow.splice(g, 1), o.isShown && a.toHide.push(o)
                }
            }
        }), a.Mixer.registerFilter("operationUnmappedGetOperation", "pagination", function(t, e) {
            var n = this;
            return n.config.pagination.limit < 0 ? t : (t.startState = n.state, t.startPagination = n.state.activePagination, t.startTotalPages = n.state.totalPages, t.newPagination = new a.CommandPaginate, t.newPagination.limit = t.startPagination.limit, t.newPagination.page = t.startPagination.page, e.paginate ? n.parsePaginateCommand(e.paginate, t) : (e.filter || e.sort) && (i.extend(t.newPagination, t.startPagination), n.config.pagination.maintainActivePage ? t.newPagination.page = n.state.activePagination.page : t.newPagination.page = 1), t)
        }), a.Mixer.registerFilter("operationMappedGetOperation", "pagination", function(a, t, i) {
            var e = this,
                n = null,
                s = -1;
            if (e.config.pagination.limit < 0) return a;
            if (i) return a;
            if (e.config.pagination.generatePageList && e.dom.pageListEls.length > 0)
                for (s = 0; n = e.dom.pageListEls[s]; s++) e.renderPageListEl(n, a);
            if (e.config.pagination.generatePageStats && e.dom.pageStatsEls.length > 0)
                for (s = 0; n = e.dom.pageStatsEls[s]; s++) e.renderPageStatsEl(n, a);
            return a
        }), a.Mixer.extend({
            parsePaginateCommand: function(t, i) {
                if (t.page > -1) {
                    if (0 === t.page) throw new Error(a.messages.ERROR_PAGINATE_INDEX_RANGE);
                    i.newPagination.page = Math.max(1, Math.min(1 / 0, t.page))
                } else "next" === t.action ? i.newPagination.page = this.getNextPage() : "prev" === t.action ? i.newPagination.page = this.getPrevPage() : t.anchor && (i.newPagination.anchor = t.anchor);
                t.limit > -1 && (i.newPagination.limit = t.limit), i.newPagination.limit !== i.startPagination.limit && (i.newTotalPages = i.newPagination.limit ? Math.max(Math.ceil(i.startState.matching.length / i.newPagination.limit), 1) : 1), (i.newPagination.limit <= 0 || i.newPagination.limit === 1 / 0) && (i.newPagination.page = 1)
            },
            getNextPage: function() {
                var a = -1;
                return (a = this.state.activePagination.page + 1) > this.state.totalPages && (a = this.config.pagination.loop ? 1 : this.state.activePagination.page), a
            },
            getPrevPage: function() {
                var a = -1;
                return (a = this.state.activePagination.page - 1) < 1 && (a = this.config.pagination.loop ? this.state.totalPages : this.state.activePagination.page), a
            },
            renderPageListEl: function(t, e) {
                var n, s, o, g = this,
                    r = "",
                    l = [],
                    c = null,
                    p = null,
                    m = [],
                    f = !1,
                    P = !1,
                    u = null,
                    d = -1;
                if (e.newPagination.limit < 0 || e.newPagination.limit === 1 / 0 || e.newTotalPages < 2 && g.config.pagination.hidePageListIfSinglePage) return t.innerHTML = "", void i.addClass(t, g.classNamesPageList.disabled);
                for (n = e.newPagination.page - 1, p = "function" == typeof(p = g.config.render.pager) ? p : null, g.config.pagination.maxPagers < 1 / 0 && e.newTotalPages > g.config.pagination.maxPagers && (m = g.getAllowedIndices(e)), (c = new a.ModelPager).isPrev = !0, c.classList.push(g.classNamesPager.base, g.classNamesPager.prev), 1 !== e.newPagination.page || g.config.pagination.loop || (c.classList.push(g.classNamesPager.disabled), c.isDisabled = !0), c.classNames = c.classList.join(" "), r = p ? p(c) : i.template(g.config.templates.pagerPrev)(c), l.push(r), d = 0; d < e.newTotalPages; d++)(r = g.renderPager(d, e, m)) || d < n && f || d > n && P ? r && l.push(r) : ((c = new a.ModelPager).isTruncationMarker = !0, c.classList.push(g.classNamesPager.base, g.classNamesPager.truncationMarker), c.classNames = c.classList.join(" "), r = p ? p(c) : i.template(g.config.templates.pagerTruncationMarker)(c), l.push(r), d < n && (f = !0), d > n && (P = !0));
                for ((c = new a.ModelPager).isNext = !0, c.classList.push(g.classNamesPager.base, g.classNamesPager.next), e.newPagination.page !== e.newTotalPages || g.config.pagination.loop || c.classList.push(g.classNamesPager.disabled), c.classNames = c.classList.join(" "), r = p ? p(c) : i.template(g.config.templates.pagerNext)(c), l.push(r), o = l.join(" "), t.innerHTML = o, s = t.querySelectorAll("." + g.classNamesPager.disabled), d = 0; u = s[d]; d++) "boolean" == typeof u.disabled && (u.disabled = !0);
                f || P ? i.addClass(t, g.classNamesPageList.truncated) : i.removeClass(t, g.classNamesPageList.truncated), e.newTotalPages > 1 ? i.removeClass(t, g.classNamesPageList.disabled) : i.addClass(t, g.classNamesPageList.disabled)
            },
            getAllowedIndices: function(a) {
                var t, i, e, n = a.newPagination.page - 1,
                    s = a.newTotalPages - 1,
                    o = [],
                    g = -1,
                    r = -1,
                    l = -1;
                for (o.push(0), g = this.config.pagination.maxPagers - 2, t = Math.ceil((g - 1) / 2), e = n + Math.floor((g - 1) / 2), r = 0, (i = n - t) < 1 && (r = 1 - i), e > s - 1 && (r = s - 1 - e), l = i + r; g;) o.push(l), l++, g--;
                return o.push(s), o
            },
            renderPager: function(t, e, n) {
                var s = this,
                    o = null,
                    g = e.newPagination.page - 1,
                    r = new a.ModelPager;
                return s.config.pagination.maxPagers < 1 / 0 && n.length && n.indexOf(t) < 0 ? "" : (o = "function" == typeof(o = s.config.render.pager) ? o : null, r.isPageLink = !0, r.classList.push(s.classNamesPager.base), 0 === t && r.classList.push(s.classNamesPager.first), t === e.newTotalPages - 1 && r.classList.push(s.classNamesPager.last), t === g && r.classList.push(s.classNamesPager.active), r.classNames = r.classList.join(" "), r.pageNumber = t + 1, o ? o(r) : i.template(s.config.templates.pager)(r))
            },
            renderPageStatsEl: function(t, e) {
                var n = this,
                    s = new a.ModelPageStats,
                    o = null,
                    g = "",
                    r = "";
                if (e.newPagination.limit < 0 || e.newPagination.limit === 1 / 0 || e.newTotalPages < 2 && n.config.pagination.hidePageStatsIfSinglePage) return t.innerHTML = "", void i.addClass(t, n.classNamesPageStats.disabled);
                o = "function" == typeof(o = n.config.render.pageStats) ? o : null, s.totalTargets = e.matching.length, r = s.totalTargets ? 1 === e.newPagination.limit ? n.config.templates.pageStatsSingle : n.config.templates.pageStats : n.config.templates.pageStatsFail, s.totalTargets && e.newPagination.limit > 0 ? (s.startPageAt = (e.newPagination.page - 1) * e.newPagination.limit + 1, s.endPageAt = Math.min(s.startPageAt + e.newPagination.limit - 1, s.totalTargets)) : s.startPageAt = s.endPageAt = 0, g = o ? o(s) : i.template(r)(s), t.innerHTML = g, s.totalTargets ? i.removeClass(t, n.classNamesPageStats.disabled) : i.addClass(t, n.classNamesPageStats.disabled)
            },
            parsePaginateArgs: function(t) {
                var e = new a.UserInstruction,
                    n = null,
                    s = -1;
                for (e.animate = this.config.animation.enable, e.command = new a.CommandPaginate, s = 0; s < t.length; s++) null !== (n = t[s]) && ("object" == typeof n && i.isElement(n, this.dom.document) ? e.command.anchor = n : n instanceof a.CommandPaginate || "object" == typeof n ? i.extend(e.command, n) : "number" == typeof n ? e.command.page = n : "string" != typeof n || isNaN(parseInt(n)) ? "string" == typeof n ? e.command.action = n : "boolean" == typeof n ? e.animate = n : "function" == typeof n && (e.callback = n) : e.command.page = parseInt(n));
                return i.freeze(e), e
            },
            paginate: function() {
                var a = this.parsePaginateArgs(arguments);
                return this.multimix({
                    paginate: a.command
                }, a.animate, a.callback)
            },
            nextPage: function() {
                var a = this.parsePaginateArgs(arguments);
                return this.multimix({
                    paginate: {
                        action: "next"
                    }
                }, a.animate, a.callback)
            },
            prevPage: function() {
                var a = this.parsePaginateArgs(arguments);
                return this.multimix({
                    paginate: {
                        action: "prev"
                    }
                }, a.animate, a.callback)
            }
        }), a.Facade.registerAction("afterConstruct", "pagination", function(a) {
            this.paginate = a.paginate.bind(a), this.nextPage = a.nextPage.bind(a), this.prevPage = a.prevPage.bind(a)
        })
    };
    if (t.TYPE = "mixitup-extension", t.NAME = "mixitup-pagination", t.EXTENSION_VERSION = "3.3.0", t.REQUIRE_CORE_VERSION = "^3.1.8", "object" == typeof exports && "object" == typeof module) module.exports = t;
    else if ("function" == typeof define && define.amd) define(function() {
        return t
    });
    else {
        if (!a.mixitup || "function" != typeof a.mixitup) throw new Error("[MixItUp Pagination] MixItUp core not found");
        t(a.mixitup)
    }
}(window);