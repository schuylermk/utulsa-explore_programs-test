function searchDegrees() {
    var e, t, l;
    for (e = document.getElementById("degreeSearchInput").value.toUpperCase(), t = document.getElementById("grid").getElementsByTagName("li"), l = 0; l < t.length; l++) t[l].getElementsByClassName("card--title")[0].innerHTML.toUpperCase().indexOf(e) > -1 ? t[l].style.display = "" : t[l].style.display = "none"
}
$(function() {
    var e = document.querySelector(".grid"),
        t = ".mix",
        l = 15,
        n = 5,
        o = !0,
        i = 50,
        r = "all",
        a = window.location.hash.replace(/^#/g, ""),
        c = a.split("=");

    function s(e) {
        return e.replace(/^./, "")
    }

    function d(e) {
        return "." + e
    }
    a && (r = "." + c[1]);
    var p, u, g = (p = window.location.hash.replace(/^#/g, ""), u = null, p ? (u = {}, p.split("&").forEach(function(e) {
        var t = e.split("="),
            l = t[0];
        u[l] = t[1].split(",")
    }), u) : u);

    function m() {
        !F.isMixing() && o && ((window.scrollY || window.pageYOffset || document.documentElement.scrollTop) + window.innerHeight >= e.offsetHeight - i && (l += n, F.paginate({
            limit: l
        })))
    }
    var f, w, h, v, y, x, E, S, F = mixitup(e, {
        load: {
            filter: r
        },
        selectors: {
            control: "[data-mixitup-control]"
        },
        multifilter: {
            enable: !0
        },
        animation: {
            effects: "fade translateZ(-100px)"
        },
        pagination: {
            limit: l
        },
        callbacks: {
            onMixEnd: function(e) {
                var l = e.activeFilter.selector,
                    n = "#" + function(e) {
                        var t = "";
                        for (var l in e) {
                            var n = e[l];
                            n.length && (t += l + "=", t += n.join(","), t += "&")
                        }
                        return t = t.replace(/&$/g, "")
                    }({
                        degrees: F.getFilterGroupSelectors("degrees").map(s),
                        colleges: F.getFilterGroupSelectors("colleges").map(s)
                    });
                l === t && window.location.href.indexOf("#") > -1 ? ("", history.replaceState(null, document.title, window.location.pathname)) : n !== window.location.hash && l !== t && (n, history.replaceState(null, document.title, window.location.pathname + n))
            }
        }
    });
    window.addEventListener("scroll", (f = m, w = 50, h = -1, v = -1, function() {
        var e = this,
            t = arguments,
            l = Date.now(),
            n = v ? l - v : 1 / 0,
            o = function() {
                v = l, f.apply(e, t)
            };
        !v || n >= w ? o() : (clearTimeout(h), h = setTimeout(o, w - n))
    })), g && (E = (y = g) && y.degrees ? y.degrees : [], S = y && y.colleges ? y.colleges : [], F.setFilterGroupSelectors("degrees", E.map(d)), F.setFilterGroupSelectors("colleges", S.map(d)), F.parseFilterGroups(!!x))
});