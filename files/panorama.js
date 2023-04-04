var lotameIsCompatible = function() {
  return (typeof Object.keys !== 'undefined' && typeof window.postMessage !== 'undefined' && typeof XMLHttpRequest !== 'undefined' && typeof (new XMLHttpRequest().withCredentials) !== 'undefined' && typeof console !== 'undefined' && typeof console.log !== 'undefined' && typeof document.createElement !== 'undefined');
};
if (!lotameIsCompatible()) {
  if (console && console.error) {
      console.error('Lotame: This browser does not meet the minimum requirements.');
  }
} else {
  function sync16621_a(a) {
      var b = 0;
      return function() {
          return b < a.length ? {
              done: !1,
              value: a[b++]
          } : {
              done: !0
          }
      }
  }
  function sync16621_b(a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : {
          next: sync16621_a(a)
      }
  }
  var sync16621_c = "function" == typeof Object.create ? Object.create : function(a) {
      function b() {}
      b.prototype = a;
      return new b
  }
  , sync16621_d;
  if ("function" == typeof Object.setPrototypeOf)
      sync16621_d = Object.setPrototypeOf;
  else {
      var sync16621_e;
      a: {
          var sync16621_f = {
              Fa: !0
          }
            , sync16621_g = {};
          try {
              sync16621_g.__proto__ = sync16621_f;
              sync16621_e = sync16621_g.Fa;
              break a
          } catch (a) {}
          sync16621_e = !1
      }
      sync16621_d = sync16621_e ? function(a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b)
              throw new TypeError(a + " is not extensible");
          return a
      }
      : null
  }
  var sync16621_h = sync16621_d;
  function sync16621_i(a, b) {
      a.prototype = sync16621_c(b.prototype);
      a.prototype.constructor = a;
      if (sync16621_h)
          sync16621_h(a, b);
      else
          for (var c in b)
              if ("prototype" != c)
                  if (Object.defineProperties) {
                      var d = Object.getOwnPropertyDescriptor(b, c);
                      d && Object.defineProperty(a, c, d)
                  } else
                      a[c] = b[c];
      a.Sa = b.prototype
  }
  var sync16621_j = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this
    , sync16621_k = "function" == typeof Object.assign ? Object.assign : function(a, b) {
      for (var c = 1; c < arguments.length; c++) {
          var d = arguments[c];
          if (d)
              for (var f in d)
                  Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f])
      }
      return a
  }
    , sync16621_l = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
      a != Array.prototype && a != Object.prototype && (a[b] = c.value)
  }
  ;
  function sync16621_m(a, b) {
      if (b) {
          var c = sync16621_j;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
              var f = a[d];
              f in c || (c[f] = {});
              c = c[f]
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d && null != b && sync16621_l(c, a, {
              configurable: !0,
              writable: !0,
              value: b
          })
      }
  }
  sync16621_m("Object.assign", function(a) {
      return a || sync16621_k
  });
  sync16621_m("Object.is", function(a) {
      return a ? a : function(b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
      }
  });
  sync16621_m("Array.prototype.includes", function(a) {
      return a ? a : function(b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var f = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + f, 0)); c < f; c++) {
              var g = d[c];
              if (g === b || Object.is(g, b))
                  return !0
          }
          return !1
      }
  });
  sync16621_m("Object.entries", function(a) {
      return a ? a : function(b) {
          var c = [], d;
          for (d in b)
              Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
          return c
      }
  });
  sync16621_m("Array.prototype.find", function(a) {
      return a ? a : function(b, c) {
          a: {
              var d = this;
              d instanceof String && (d = String(d));
              for (var f = d.length, g = 0; g < f; g++) {
                  var e = d[g];
                  if (b.call(c, e, g, d)) {
                      b = e;
                      break a
                  }
              }
              b = void 0
          }
          return b
      }
  });
  sync16621_m("Promise", function(a) {
      function b(e) {
          this.M = 0;
          this.fa = void 0;
          this.D = [];
          var h = this.ca();
          try {
              e(h.resolve, h.reject)
          } catch (k) {
              h.reject(k)
          }
      }
      function c() {
          this.l = null
      }
      function d(e) {
          return e instanceof b ? e : new b(function(h) {
              h(e)
          }
          )
      }
      if (a)
          return a;
      c.prototype.pa = function(e) {
          if (null == this.l) {
              this.l = [];
              var h = this;
              this.qa(function() {
                  h.Ka()
              })
          }
          this.l.push(e)
      }
      ;
      var f = sync16621_j.setTimeout;
      c.prototype.qa = function(e) {
          f(e, 0)
      }
      ;
      c.prototype.Ka = function() {
          for (; this.l && this.l.length; ) {
              var e = this.l;
              this.l = [];
              for (var h = 0; h < e.length; ++h) {
                  var k = e[h];
                  e[h] = null;
                  try {
                      k()
                  } catch (l) {
                      this.Ga(l)
                  }
              }
          }
          this.l = null
      }
      ;
      c.prototype.Ga = function(e) {
          this.qa(function() {
              throw e;
          })
      }
      ;
      b.prototype.ca = function() {
          function e(l) {
              return function(m) {
                  k || (k = !0,
                  l.call(h, m))
              }
          }
          var h = this
            , k = !1;
          return {
              resolve: e(this.Oa),
              reject: e(this.ea)
          }
      }
      ;
      b.prototype.Oa = function(e) {
          if (e === this)
              this.ea(new TypeError("A Promise cannot resolve to itself"));
          else if (e instanceof b)
              this.Pa(e);
          else {
              a: switch (typeof e) {
              case "object":
                  var h = null != e;
                  break a;
              case "function":
                  h = !0;
                  break a;
              default:
                  h = !1
              }
              h ? this.Na(e) : this.ua(e)
          }
      }
      ;
      b.prototype.Na = function(e) {
          var h = void 0;
          try {
              h = e.then
          } catch (k) {
              this.ea(k);
              return
          }
          "function" == typeof h ? this.Qa(h, e) : this.ua(e)
      }
      ;
      b.prototype.ea = function(e) {
          this.wa(2, e)
      }
      ;
      b.prototype.ua = function(e) {
          this.wa(1, e)
      }
      ;
      b.prototype.wa = function(e, h) {
          if (0 != this.M)
              throw Error("Cannot settle(" + e + ", " + h + "): Promise already settled in state" + this.M);
          this.M = e;
          this.fa = h;
          this.La()
      }
      ;
      b.prototype.La = function() {
          if (null != this.D) {
              for (var e = 0; e < this.D.length; ++e)
                  g.pa(this.D[e]);
              this.D = null
          }
      }
      ;
      var g = new c;
      b.prototype.Pa = function(e) {
          var h = this.ca();
          e.N(h.resolve, h.reject)
      }
      ;
      b.prototype.Qa = function(e, h) {
          var k = this.ca();
          try {
              e.call(h, k.resolve, k.reject)
          } catch (l) {
              k.reject(l)
          }
      }
      ;
      b.prototype.then = function(e, h) {
          function k(n, p) {
              return "function" == typeof n ? function(q) {
                  try {
                      l(n(q))
                  } catch (r) {
                      m(r)
                  }
              }
              : p
          }
          var l, m, t = new b(function(n, p) {
              l = n;
              m = p
          }
          );
          this.N(k(e, l), k(h, m));
          return t
      }
      ;
      b.prototype.catch = function(e) {
          return this.then(void 0, e)
      }
      ;
      b.prototype.N = function(e, h) {
          function k() {
              switch (l.M) {
              case 1:
                  e(l.fa);
                  break;
              case 2:
                  h(l.fa);
                  break;
              default:
                  throw Error("Unexpected state: " + l.M);
              }
          }
          var l = this;
          null == this.D ? g.pa(k) : this.D.push(k)
      }
      ;
      b.resolve = d;
      b.reject = function(e) {
          return new b(function(h, k) {
              k(e)
          }
          )
      }
      ;
      b.race = function(e) {
          return new b(function(h, k) {
              for (var l = sync16621_b(e), m = l.next(); !m.done; m = l.next())
                  d(m.value).N(h, k)
          }
          )
      }
      ;
      b.all = function(e) {
          var h = sync16621_b(e)
            , k = h.next();
          return k.done ? d([]) : new b(function(l, m) {
              function t(q) {
                  return function(r) {
                      n[q] = r;
                      p--;
                      0 == p && l(n)
                  }
              }
              var n = []
                , p = 0;
              do
                  n.push(void 0),
                  p++,
                  d(k.value).N(t(n.length - 1), m),
                  k = h.next();
              while (!k.done)
          }
          )
      }
      ;
      return b
  });
  function sync16621_n() {
      this.ta = -1 !== window.location.href.indexOf("lotameDebug\x3dtrue");
      this.name = "LT.JS"
  }
  sync16621_n.prototype.debug = function(a, b) {
      this.ta && a && "undefined" !== typeof console && "undefined" !== typeof console.log && (b ? console.log(this.name + ": " + a, b) : console.log(this.name + ": " + a))
  }
  ;
  sync16621_n.prototype.error = function(a, b) {
      a && "undefined" !== typeof console && "undefined" !== typeof console.error && (null != b ? console.error(this.name + ": " + a, b) : console.error(this.name + ": " + a))
  }
  ;
  var sync16621_ = new sync16621_n;
  function sync16621_o() {
      this.S = 23328E3
  }
  sync16621_o.prototype.H = function(a, b, c, d) {
      d = void 0 === d ? this.S : d;
      document.cookie = a + "\x3d" + b + "; Domain\x3d" + c + "; path\x3d/; SameSite\x3dLax; expires\x3d" + (new Date(Date.now() + 1E3 * d)).toUTCString()
  }
  ;
  sync16621_o.prototype.u = function(a) {
      var b = null
        , c = "" + document.cookie;
      0 !== c.length && (a = c.match(a + "\x3d([^;]*)"),
      "undefined" !== typeof a && null !== a && (b = a[1]));
      return b
  }
  ;
  function sync16621_p(a, b, c) {
      a = void 0 === a ? {} : a;
      b = void 0 === b ? {} : b;
      var d = window.location.href
        , f = d.indexOf("?");
      -1 !== f && (d = d.substring(0, f));
      this.f = Object.assign({}, {
          bcpClient: 16621,
          audienceExtractionEnabled: !1,
          consentClientIds: [16621],
          panoramaIdEnabled: !0,
          enableAudienceMatching: !0,
          usPrivacyEnabled: !1,
          googleEspEnabled: !1,
          windowLocation: d,
          namespace: window[(void 0 === c ? "lotame_" : c) + "16621"],
          cookieDomain: sync16621_q(),
          protocol: "https",
          tagsDomain: "tags.crwdcntrl.net",
          privacyDomain: "privacy.crwdcntrl.net",
          bcpVersion: "6",
          sharedS3Path: "lt/shared/2",
          cookieNames: ["_cc_id", "_cc_aud", "_cc_cc"],
          profileIdCookieName: "_cc_id",
          panoramaIdName: "panoramaId",
          cmpWaitMillis: 250
      }, a);
      a = this.f.namespace;
      if (!a)
          throw "Configuration Error! Please verify that your code and configuration match the specs and check for syntax errors in the console.";
      b = Object.assign({}, {
          onProfileReady: null,
          bcpPrefix: "bcp"
      }, b);
      this.Ha = sync16621_r(a, b);
      Object.assign(this.f, this.Ha);
      this.f.iframeOrigin = this.f.protocol + "://tags.crwdcntrl.net";
      this.f.bcpDomain = this.f.bcpPrefix + ".crwdcntrl.net"
  }
  function sync16621_r(a, b) {
      var c = {}
        , d = Object.keys(b)
        , f = a.config;
      f && (Object.keys(f).filter(function(g) {
          return !d.includes(g)
      }).forEach(function(g) {
          return sync16621_.error("'" + g + "' is an unsupported config option.")
      }),
      c = Object.keys(f).filter(function(g) {
          return d.includes(g)
      }).reduce(function(g, e) {
          switch (e) {
          case "audienceLocalStorage":
              "boolean" === typeof f[e] ? g[e] = f[e] ? "lotame_16621_auds" : !1 : "string" === typeof f[e] ? g[e] = f[e] : sync16621_.error("The audienceLocalStorage config option is being ignored as it is neither a boolean nor a string. The default value of false will be used instead.");
              break;
          case "onTagReady":
              "function" !== typeof f[e] ? sync16621_.error("The onTagReady config option is being ignored as it is not a function.") : g[e] = f[e];
              break;
          case "onProfileReady":
              "function" !== typeof f[e] ? sync16621_.error("The onProfileReady config option is being ignored as it is not a function.") : g[e] = f[e];
              break;
          case "autoRun":
              "boolean" !== typeof f[e] ? sync16621_.error("The autoRun config option is being ignored as it is not a boolean. The default value of true will be used instead.") : g[e] = f[e];
              break;
          case "bcpPrefix":
              -1 === ["bcp", "cn"].indexOf(f[e]) ? sync16621_.error("The bcpPrefix config option is being ignored as it is not valid. The default value of bcp will be used instead.") : g[e] = f[e];
              break;
          case "clientId":
              sync16621_.debug("The clientId config option is not needed anymore");
              break;
          default:
              sync16621_.error("'" + e + "' is an unsupported config option.")
          }
          return g
      }, {}));
      return Object.assign({}, b, c)
  }
  function sync16621_q() {
      var a = String(document.domain).toLowerCase()
        , b = new sync16621_o
        , c = a.split(".");
      if (2 == c.length)
          return a;
      var d = -2;
      do {
          var f = a = c.slice(d).join(".");
          b.H("lotame_domain_check", f, a, 10);
          b.u("lotame_domain_check") === f ? f = !1 : (d += -1,
          f = Math.abs(d) <= c.length)
      } while (f);
      return a
  }
  sync16621_p.prototype.B = function() {
      return JSON.parse(JSON.stringify(this.f))
  }
  ;
  function sync16621_s() {
      sync16621_p.call(this, {
          lastProfileUpdateMillisKey: "_cc_id_update_ts",
          profileRefreshMillis: 6048E5,
          autoRunSyncJs: !1
      }, {}, "lotame_sync_")
  }
  sync16621_i(sync16621_s, sync16621_p);
  function sync16621_t(a) {
      a = void 0 === a ? {} : a;
      this.j = null;
      if (a = a.thirdParty) {
          var b = !0;
          "object" != typeof a && (b = !1,
          sync16621_.error("tagInput.data.thirdParty should be an object"));
          a.namespace || (b = !1,
          sync16621_.error("tagInput.data.thirdParty.namespace is not defined"));
          a.value || (b = !1,
          sync16621_.error("tagInput.data.thirdParty.value is not defined"));
          a.namespace && "string" != typeof a.namespace && (b = !1,
          sync16621_.error("tagInput.data.thirdParty.namespace should be defined and have a string as its value"));
          a.value && "string" != typeof a.value && (b = !1,
          sync16621_.error("tagInput.data.thirdParty.value should be defined and have a string as its value"));
          b && (this.j = {},
          this.j[a.namespace] = a.value)
      }
  }
  function sync16621_u(a) {
      return !!(a.j && 0 < Object.keys(a.j).length)
  }
  sync16621_t.prototype.O = function() {
      return {
          tp: sync16621_u(this) ? this.j : void 0
      }
  }
  ;
  sync16621_t.prototype.o = function() {
      return !sync16621_u(this)
  }
  ;
  sync16621_t.prototype.B = function() {
      if (sync16621_u(this)) {
          var a = null;
          if (this.j) {
              a = {};
              var b = Object.keys(this.j);
              a.namespace = b[0];
              a.value = this.j[b[0]]
          }
      } else
          a = void 0;
      return {
          Ta: a
      }
  }
  ;
  function sync16621_v(a) {
      a = void 0 === a ? {} : a;
      sync16621_t.call(this, a);
      this.J = this.I = this.g = null;
      sync16621_w(this, a.behaviorIds);
      sync16621_x(this, a.behaviors);
      sync16621_y(this, a.ruleBuilder)
  }
  sync16621_i(sync16621_v, sync16621_t);
  function sync16621_w(a, b) {
      b && (Array.isArray(b) && b.every(function(c) {
          return "number" === typeof c
      }) ? a.g = b : sync16621_.error("tagInput.data.behaviorIds should be an array of numbers"))
  }
  function sync16621_x(a, b) {
      if (b) {
          var c = !0;
          "object" != typeof b && sync16621_.error("tagInput.data.behaviors should be an object");
          for (var d = sync16621_b(Object.entries(b)), f = d.next(); !f.done; f = d.next()) {
              var g = sync16621_b(f.value);
              f = g.next().value;
              g = g.next().value;
              if (!Array.isArray(g) || !g.every(function(e) {
                  return "string" === typeof e
              })) {
                  sync16621_.error("tagInput.data.behaviors." + f + " should be an array of strings");
                  c = !1;
                  break
              }
          }
          c && (a.I = b)
      }
  }
  function sync16621_z(a) {
      return !!(a.I && 0 < Object.keys(a.I).length)
  }
  function sync16621_y(a, b) {
      if (b) {
          for (var c = !0, d = sync16621_b(Object.entries(b)), f = d.next(); !f.done; f = d.next()) {
              var g = sync16621_b(f.value);
              f = g.next().value;
              g = g.next().value;
              if (!Array.isArray(g) || !g.every(function(e) {
                  return "string" === typeof e
              })) {
                  sync16621_.error("tagInput.data.ruleBuilder." + f + " should be an array of strings");
                  c = !1;
                  break
              }
          }
          c && (a.J = b)
      }
  }
  function sync16621_A(a) {
      return !!(a.J && 0 < Object.keys(a.J).length)
  }
  sync16621_v.prototype.O = function() {
      return Object.assign({}, {
          b: this.g && 0 < this.g.length ? this.g : void 0,
          bt: sync16621_z(this) ? this.I : void 0,
          db: sync16621_A(this) ? this.J : void 0
      }, sync16621_t.prototype.O.call(this))
  }
  ;
  sync16621_v.prototype.o = function() {
      return !(this.g && 0 < this.g.length) && !sync16621_z(this) && !sync16621_A(this) && sync16621_t.prototype.o.call(this)
  }
  ;
  sync16621_v.prototype.B = function() {
      return Object.assign({}, {
          behaviorIds: this.g && 0 < this.g.length ? this.g : void 0,
          behaviors: sync16621_z(this) ? this.I : void 0,
          ruleBuilder: sync16621_A(this) ? this.J : void 0
      }, sync16621_t.prototype.B.call(this))
  }
  ;
  function sync16621_B(a) {
      return "[object Object]" === Object.prototype.toString.call(a)
  }
  function sync16621_C(a) {
      return 0 === Object.keys(a).length && a.constructor === Object
  }
  function sync16621_aa(a, b) {
      var c = void 0 === c ? !0 : c;
      b = b || {};
      var d = Object.assign({
          method: "GET",
          xa: sync16621_D,
          error: sync16621_D,
          complete: sync16621_D
      }, b)
        , f = new XMLHttpRequest;
      f.onreadystatechange = function() {
          if (4 == f.readyState) {
              var g = {};
              if (200 == f.status) {
                  var e = {};
                  try {
                      e = JSON.parse(f.response)
                  } catch (h) {
                      sync16621_.error("Could not parse the following response from Lotame's servers: " + f.response)
                  }
                  d.xa(e, f.statusText, g);
                  d.complete(e, f.statusText, g)
              } else
                  d.error(g, f.statusText, f.response),
                  d.complete(g, f.statusText, f.response)
          }
      }
      ;
      b = "undefined" === typeof d.data ? "" : JSON.stringify(d.data);
      f.open(d.method, a, !0);
      f.setRequestHeader("Content-Type", "text/plain;charset\x3dUTF-8");
      c && (f.withCredentials = !0);
      f.send(b)
  }
  function sync16621_D() {}
  function sync16621_E() {
      this.s = []
  }
  sync16621_E.prototype.enqueue = function(a) {
      this.s.push(a)
  }
  ;
  sync16621_E.prototype.o = function() {
      return 0 === this.s.length
  }
  ;
  function sync16621_F() {
      this.na = new sync16621_E
  }
  sync16621_F.prototype.enqueue = function(a) {
      sync16621_B(a) && this.na.enqueue(new sync16621_v(a))
  }
  ;
  sync16621_F.prototype.o = function() {
      return this.na.o()
  }
  ;
  function sync16621_G(a) {
      this.la = this.Da = this.Ea = !1;
      this.ya = "unknown";
      this.Aa = new sync16621_F;
      this.Ba = !1;
      this.za = a
  }
  sync16621_G.prototype.B = function() {
      return JSON.parse(JSON.stringify({
          running: this.Ea,
          runRequested: this.Da,
          pageLoaded: this.la,
          dataCollectionEnvironment: this.ya,
          internalDataQueue: this.Aa,
          internalDataQueueBeingProcessed: this.Ba,
          dataCollectionOnlyUseCase: this.za
      }))
  }
  ;
  function sync16621_H(a) {
      this.a = a;
      this.sa = new sync16621_o;
      this.Ma = this.a.f.profileIdCookieName;
      try {
          var b = window.localStorage;
          b.setItem("__storage_test__", "__storage_test__");
          b.removeItem("__storage_test__");
          var c = !0
      } catch (d) {
          c = d instanceof DOMException && (22 === d.code || 1014 === d.code || "QuotaExceededError" === d.name || "NS_ERROR_DOM_QUOTA_REACHED" === d.name) && b && 0 !== b.length
      }
      this.da = c;
      this.Ra = this.a.f.cookieNames;
      this.S = 23328E3;
      this.R = "_exp"
  }
  function sync16621_I(a) {
      return sync16621_J(a, a.Ma)
  }
  function sync16621_J(a, b) {
      var c = a.u(b);
      if (!c)
          a: {
              if (a.da && (a = window.localStorage.getItem(b + a.R),
              !a || "" === a || (new Date(a)).getTime() > Date.now())) {
                  c = window.localStorage.getItem(b);
                  break a
              }
              c = null
          }
      return c
  }
  function sync16621_K(a, b, c, d) {
      a.H(b, c, void 0 === d ? a.S : Math.ceil((d - (new Date).getTime()) / 1E3));
      sync16621_L(a, b, c, d)
  }
  sync16621_H.prototype.H = function(a, b, c) {
      this.sa.H(a, b, this.a.f.cookieDomain, c)
  }
  ;
  function sync16621_L(a, b, c, d) {
      a.da && (window.localStorage.setItem(b, c || ""),
      void 0 !== d && window.localStorage.setItem(b + a.R, String(d)))
  }
  function sync16621_M(a, b) {
      a.da && (window.localStorage.removeItem(b),
      window.localStorage.removeItem(b + a.R))
  }
  sync16621_H.prototype.u = function(a) {
      return this.sa.u(a)
  }
  ;
  function sync16621_ba(a, b) {
      b && b.forEach(function(c) {
          var d = c.k
            , f = c.v;
          c = c.e;
          a.H(d, f, c);
          0 < c ? sync16621_L(a, d, f) : sync16621_M(a, d)
      })
  }
  sync16621_H.prototype.L = function() {
      var a = this
        , b = [];
      a.Ra.forEach(function(c) {
          var d = sync16621_J(a, c);
          d && b.push({
              k: c,
              v: d
          })
      });
      return b
  }
  ;
  sync16621_H.prototype.C = function() {
      return this.a.f.panoramaIdEnabled ? sync16621_J(this, this.a.f.panoramaIdName) : null
  }
  ;
  function sync16621_N(a, b) {
      this.a = a;
      this.storage = b;
      this.ra = 250;
      this.P = 0
  }
  sync16621_N.prototype.F = function() {
      console.error("Class extending BaseConsentHandler must implement pollForConsent()")
  }
  ;
  sync16621_j.Object.defineProperties(sync16621_N, {
      ha: {
          configurable: !0,
          enumerable: !0,
          get: function() {
              return 60
          }
      }
  });
  function sync16621_O(a, b) {
      a = a || {};
      this.a = b || {};
      this.V = this.w = this.ka = this.Z = this.ma = this.T = null;
      if (b = a.aud)
          Array.isArray(b) ? this.T = b : sync16621_.error("profileData.audienceIds should be an array");
      if (b = a.pid)
          "string" !== typeof b ? sync16621_.error("if defined, profileData.profileId should be a string") : this.ma = b;
      if (b = a.tc)
          Array.isArray(b) ? this.Z = b : sync16621_.error("profileData.targetingCodes should be an array");
      (b = a.spx) && !Array.isArray(b) && sync16621_.error("profileData.syncPixels should be an array");
      if (b = a.e)
          Array.isArray(b) ? (this.ka = b,
          Array.isArray(b) && b.forEach(this.Ca)) : sync16621_.error("profileData.errorCodes should be an array");
      (b = a.exb) && !Array.isArray(b) && sync16621_.error("profileData.exportBeaconIds should be an array");
      sync16621_ca(this, a.c);
      sync16621_da(this, a.ids)
  }
  function sync16621_ca(a, b) {
      if (b)
          if (Array.isArray(b)) {
              var c = [];
              b.forEach(function(d) {
                  var f = !0
                    , g = d.k
                    , e = d.v
                    , h = d.e;
                  "string" !== typeof g && (sync16621_.error("profileData.cookies key attribute should be a string but was " + g),
                  f = !1);
                  "string" !== typeof e && (sync16621_.error("profileData.cookies value attribute should be a string but was " + e),
                  f = !1);
                  "number" !== typeof h && (sync16621_.error("profileData.cookies expiration attribute should be a number but was " + h),
                  f = !1);
                  f && c.push(d)
              });
              a.w = c
          } else
              sync16621_.error("profileData.cookies (" + b + ") should be an array")
  }
  function sync16621_da(a, b) {
      if (b)
          if (Array.isArray(b)) {
              var c = [];
              b.forEach(function(d) {
                  var f = !0
                    , g = d.c
                    , e = d.i
                    , h = d.t
                    , k = d.e;
                  "string" !== typeof g && (sync16621_.error("profileData.ids category attribute should be a string but was " + g),
                  f = !1);
                  "string" !== typeof e && "core" !== g && (sync16621_.error("profileData.ids id attribute should be a string but was " + e),
                  f = !1);
                  -1 == ["undefined", "string"].indexOf(typeof h) && (sync16621_.error("if set, profileData.ids type attribute should be a string but was " + h),
                  f = !1);
                  -1 == ["undefined", "string"].indexOf(typeof k) && (sync16621_.error("if set, profileData.ids expiry attribute should be a string but was " + h),
                  f = !1);
                  f && c.push(d)
              });
              a.V = c
          } else
              sync16621_.error("profileData.ids (" + b + ") should be an array")
  }
  function sync16621_P(a, b) {
      var c = [];
      a.Z ? c = a.Z : a.T && (c = a.T.join(",").split(","));
      return "number" === typeof b && 0 < b ? c.slice(0, b) : c
  }
  function sync16621_Q(a) {
      return (a.V || []).find(function(b) {
          return "core" == b.c
      })
  }
  sync16621_O.prototype.C = function() {
      var a = sync16621_Q(this);
      return a ? a.i : null
  }
  ;
  sync16621_O.prototype.L = function() {
      return this.w
  }
  ;
  function sync16621_ea(a, b) {
      return (a = (a.V || []).find(function(c) {
          return b == c.t && "sync" == c.c
      })) ? a.i : null
  }
  function sync16621_fa(a) {
      var b = {};
      return b.getProfileId = function() {
          return a.ma
      }
      ,
      b.getAudienceString = function(c, d) {
          return (d = sync16621_P(a, d)) && d !== [] ? d.join(void 0 === c ? "," : c) : null
      }
      ,
      b.getAudiences = function(c) {
          return sync16621_P(a, c)
      }
      ,
      b.getErrorCodes = function() {
          return a.ka
      }
      ,
      b.getThirdParty = function(c) {
          return sync16621_ea(a, c)
      }
      ,
      b.getPanoramaId = function() {
          return a.C()
      }
      ,
      b
  }
  sync16621_O.prototype.Ca = function(a) {
      switch (a) {
      case 100:
          a = "Audience extraction calls are not enabled.";
          break;
      case 101:
          a = "Appropriate consent for audience extraction is not present.";
          break;
      case 102:
          a = "Data collection is not enabled.";
          break;
      case 103:
          a = "Id syncing is not enabled.";
          break;
      case 104:
          a = "Data collection client id validation failed.";
          break;
      case 105:
          a = "Audience extraction client id validation failed.";
          break;
      case 106:
          a = "Linked parent id for audience extraction is invalid.";
          break;
      case 107:
          a = "Aborting because third party cookies are disabled and domain is not configured to use first party storage.";
          break;
      case 111:
          a = "Aborting because no consent was present on the request or stored server-side";
          break;
      default:
          a = "Unhandled error code " + a + " was received from the data collection call."
      }
      sync16621_.error(a)
  }
  ;
  function sync16621_R() {
      this.W = this.U = void 0;
      this.ia = this.X = this.oa = !1;
      this.Y = !0;
      this.w = this.s = void 0;
      this.aa = !1;
      this.$ = this.A = this.h = void 0
  }
  function sync16621_S() {
      var a = new sync16621_R;
      a.oa = !1;
      return a
  }
  function sync16621_T(a, b) {
      a.ia = b;
      return a
  }
  function sync16621_U(a, b) {
      a.U = b;
      return a
  }
  function sync16621_V(a, b) {
      a.X = b;
      return a
  }
  function sync16621_W(a, b) {
      a.w = b;
      return a
  }
  function sync16621_X(a, b) {
      "undefined" !== typeof b && (a.A = b);
      return a
  }
  function sync16621_Y(a, b) {
      "undefined" !== typeof b && (a.h = b);
      return a
  }
  function sync16621_Z(a, b) {
      "undefined" !== typeof b && (a.$ = b);
      return a
  }
  function sync16621__(a) {
      return Object.assign({
          r: {
              rpr: a.oa,
              rpx: a.Y,
              rid: a.X
          },
          m: {
              ref: a.W,
              pv: a.ia,
              dcc: a.U,
              co: a.aa
          },
          d: a.s,
          c: a.w
      }, sync16621_0(a))
  }
  function sync16621_0(a) {
      var b = "boolean" === typeof a.h
        , c = "string" === typeof a.A
        , d = "string" === typeof a.$;
      return b || c ? {
          consent: {
              gdpr_applies: b ? a.h : null,
              gdpr_consent: c ? a.A : null
          }
      } : d ? {
          consent: {
              us_privacy: d ? a.$ : null
          }
      } : {}
  }
  ;function sync16621_1(a, b) {
      sync16621_N.call(this, a, b);
      this.A = this.h = null;
      this.F()
  }
  sync16621_i(sync16621_1, sync16621_N);
  function sync16621_2(a) {
      var b = a.A;
      b || (b = a.storage.u("eupubconsent-v2"));
      b || (b = a.storage.u("euconsent-v2"));
      return b
  }
  sync16621_1.prototype.F = function() {
      var a = this;
      if ("undefined" !== typeof window.__tcfapi) {
          var b = function(c, d) {
              d && c && "tcloaded" === c.eventStatus && (c.tcString && "string" == typeof c.tcString && (a.A = c.tcString),
              c.gdprApplies && "boolean" == typeof c.gdprApplies && (a.h = c.gdprApplies))
          };
          window.__tcfapi("getTCData", 2, b);
          window.__tcfapi("addEventListener", 2, b)
      } else
          this.P < sync16621_1.ha && setTimeout(function() {
              a.F();
              a.P++
          }, this.ra)
  }
  ;
  function sync16621_3(a, b, c) {
      sync16621_N.call(this, a, b);
      this.Ia = c;
      this.ba = null;
      (this.ja = a.f.usPrivacyEnabled) && this.F()
  }
  sync16621_i(sync16621_3, sync16621_N);
  function sync16621_4(a) {
      var b = a.ba;
      !b && a.ja && (b = a.storage.u("usprivacy"));
      return b
  }
  sync16621_3.prototype.F = function() {
      var a = this;
      "undefined" !== typeof window.__uspapi ? (window.__uspapi("registerDeletion", 1, function(b) {
          sync16621_.debug("Received a deletion request " + JSON.stringify(b));
          a.ba = "1YYY";
          b = a.Ia;
          var c = void 0 === c ? sync16621_D : c;
          var d = sync16621_S();
          d.W = b.a.f.windowLocation;
          d = sync16621_U(sync16621_V(sync16621_T(d, !0), !1), b.a.f.bcpClient);
          d.aa = b.a.f.cookieDomain ? !1 : !0;
          d.Y = !1;
          d = sync16621_W(sync16621_Z(sync16621_X(sync16621_Y(d, b.G.h), sync16621_2(b.G)), sync16621_4(b.ga)), b.storage.L());
          sync16621_5(b, sync16621__(d), c)
      }),
      window.__uspapi("getUSPData", 1, function(b, c) {
          c && b && b.uspString && "string" == typeof b.uspString && (a.ba = b.uspString)
      })) : this.P < sync16621_3.ha && setTimeout(function() {
          a.F();
          a.P++
      }, this.ra)
  }
  ;
  function sync16621_6(a, b, c) {
      this.a = a || {};
      this.storage = b || {};
      this.state = c;
      this.G = new sync16621_1(this.a,this.storage);
      this.ga = new sync16621_3(this.a,this.storage,this);
      this.va = null
  }
  function sync16621_ga(a, b, c) {
      c = void 0 === c ? sync16621_D : c;
      var d = sync16621_Z(sync16621_X(sync16621_Y(sync16621_W(sync16621_T(sync16621_V(sync16621_U(new sync16621_R, a.a.f.bcpClient), !0), !1), a.storage.L()), a.G.h), sync16621_2(a.G)), sync16621_4(a.ga));
      b && (b = b.O(),
      sync16621_C(b) || (d.s = b));
      sync16621_5(a, Object.assign({
          r: {
              rid: d.X
          },
          m: {
              dcc: d.U
          },
          d: d.s,
          c: d.w
      }, sync16621_0(d)), c, "map")
  }
  function sync16621_5(a, b, c, d) {
      sync16621_aa(sync16621_7(a, void 0 === d ? "data" : d), {
          method: "POST",
          data: b,
          xa: function(f) {
              a.va = new sync16621_O(f,a.a);
              c(a.va)
          },
          error: function(f, g) {
              sync16621_.error("Aborting due to error contacting Lotame's servers. Error reason was '" + (void 0 === g ? " not provided" : g) + "'.")
          }
      })
  }
  sync16621_6.prototype.ping = function(a) {
      if (a && sync16621_B(a) && !sync16621_C(a) && !a.o()) {
          var b = !1;
          if (window.navigator && window.navigator.sendBeacon) {
              b = sync16621_8(this, a);
              var c = sync16621_7(this, "data");
              sync16621_.debug("Using navigator.sendBeacon() to send the following data on page exit", a);
              b = navigator.sendBeacon(c, JSON.stringify(sync16621__(b)))
          }
          if (!b) {
              sync16621_.debug("Falling back to ajax to send the following data on page exit", a);
              var d = void 0 === d ? sync16621_D : d;
              a && sync16621_B(a) && !sync16621_C(a) && !a.o() && (a = sync16621_8(this, a),
              sync16621_5(this, sync16621__(a), d))
          }
      }
  }
  ;
  function sync16621_8(a, b) {
      var c = sync16621_S();
      c.W = a.a.f.windowLocation;
      c = sync16621_V(sync16621_U(sync16621_T(c, !1), a.a.f.bcpClient), !1);
      c.Y = !1;
      b = b.O();
      c.s = b;
      c.aa = a.a.f.cookieDomain ? !1 : !0;
      return sync16621_Z(sync16621_X(sync16621_Y(sync16621_W(c, a.storage.L()), a.G.h), sync16621_2(a.G)), sync16621_4(a.ga))
  }
  function sync16621_7(a, b) {
      return a.a.f.protocol + "://" + a.a.f.bcpDomain + "/" + a.a.f.bcpVersion + "/" + b
  }
  ;function sync16621_ha(a, b) {
      this.enabled = !0 === a.f.googleEspEnabled && !0 === a.f.panoramaIdEnabled && !0;
      this.storage = b;
      sync16621_.ta && sync16621_.debug("Google Esp Module Enabled: " + this.enabled);
      !0 === this.enabled && (window.googletag = window.googletag || {
          cmd: []
      },
      window.googletag.encryptedSignalProviders = window.googletag.encryptedSignalProviders || [],
      sync16621_ia(this.storage))
  }
  function sync16621_ia(a) {
      window.googletag.encryptedSignalProviders.push({
          id: "crwdcntrl.net",
          collectorFunction: function() {
              var b = a.C() || "";
              sync16621_.debug("panoramaId provided to googleEsp: " + b);
              return Promise.resolve(b)
          }
      })
  }
  ;function sync16621_ja(a, b) {
      this.a = a;
      this.storage = b
  }
  function sync16621_9(a, b) {
      if ("function" === typeof a.a.f.onProfileReady)
          try {
              (0,
              a.a.f.onProfileReady)(sync16621_fa(b))
          } catch (c) {
              c && sync16621_.error("The following error occurred in the onProfileReady callback: " + c)
          }
  }
  function sync16621_ka(a) {
      var b = a.a.f.namespace;
      Array.isArray(b.cmd) ? b.cmd.forEach(function(c) {
          if ("function" === typeof c)
              try {
                  c.apply(a)
              } catch (d) {
                  d && sync16621_.error("The following error occurred when executing queued commands: " + d)
              }
      }) : b.cmd = [];
      b.cmd.push = function(c) {
          if ("function" === typeof c)
              try {
                  c.apply(a)
              } catch (d) {
                  d && sync16621_.error("The following error occurred when executing a command: " + d)
              }
      }
  }
  ;function sync16621_$() {
      var a = this.a = new sync16621_s;
      this.state = new sync16621_G(!(a.f.audienceExtractionEnabled && a.f.enableAudienceMatching && (null !== a.f.onProfileReady || !1 !== a.f.audienceLocalStorage)));
      this.storage = new sync16621_H(this.a);
      this.Ja = new sync16621_6(this.a,this.storage,this.state);
      this.K = new sync16621_ja(this.a,this.storage);
      new sync16621_ha(this.a,this.storage);
      "complete" === document.readyState && (this.state.la = !0);
      sync16621_la(this);
      sync16621_ka(this.K);
      !0 === this.a.f.autoRunSyncJs && this.sync({})
  }
  function sync16621_la(a) {
      var b = a.a.f.namespace;
      b.getProfileId = function() {
          return sync16621_I(a.storage)
      }
      ;
      b.getPanoramaId = function() {
          return a.storage.C()
      }
      ;
      b.sync = function(c) {
          return a.sync(c)
      }
      ;
      b.getInternalState = function() {
          return a.state.B()
      }
      ;
      b.getInternalConfigs = function() {
          return a.a.B()
      }
  }
  sync16621_$.prototype.sync = function(a) {
      var b = this
        , c = !0
        , d = void 0;
      d = sync16621_B(a) && !sync16621_C(a) ? new sync16621_t(a) : new sync16621_t;
      if (d.o())
          if (this.a.f.panoramaIdEnabled) {
              if (a = sync16621_J(this.storage, this.a.f.panoramaIdName + "_expiry"),
              (parseInt(a, 10) || 0) > Date.now()) {
                  c = {};
                  c.pid = sync16621_I(this.storage);
                  var f = {
                      c: "core"
                  };
                  f.i = this.storage.C();
                  f.t = "sync";
                  f.e = a;
                  c.ids = [f];
                  sync16621_9(this.K, new sync16621_O(c,this.a));
                  c = !1
              }
          } else
              a = sync16621_I(this.storage),
              f = sync16621_J(this.storage, this.a.f.lastProfileUpdateMillisKey),
              a && f && Date.now() - this.a.f.profileRefreshMillis < f && (sync16621_9(this.K, new sync16621_O({
                  pid: a
              },this.a)),
              c = !1);
      c && sync16621_ga(this.Ja, d, function(g) {
          sync16621_L(b.storage, b.a.f.lastProfileUpdateMillisKey, String(Date.now()));
          var e = b.K
            , h = g.L();
          h && sync16621_ba(e.storage, h);
          var k = g.C();
          h = e.a.f.panoramaIdName;
          var l;
          if (l = (l = sync16621_Q(g)) ? l.e : null) {
              var m = parseInt(l, 10);
              sync16621_K(e.storage, h + "_expiry", l, m);
              "string" === typeof k && k ? sync16621_K(e.storage, h, k, m) : (e = e.storage,
              e.H(h, "", 0),
              sync16621_M(e, h))
          }
          sync16621_9(b.K, g)
      })
  }
  ;
  sync16621_.name = "SYNC.JS";
  try {
      new sync16621_$
  } catch (a) {
      sync16621_.error(a)
  }
  ;
}
