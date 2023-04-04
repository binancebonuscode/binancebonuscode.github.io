!(function($, t, e, a) {
  "use strict";
  var n = $(".coupon-description"),
    o = $(".coupon-click"),
    i = $(".deal-reveal"),
    s = $(".cp-twitter-share"),
    c = $(".cp-fb-share"),
    r = $(".coupon-voting .dashicons-thumbs-up"),
    d = $(".coupon-voting .dashicons-thumbs-down");
  $("document").ready(function() {
    n.on("click", u),
      o.on("click", h),
      i.on("click", p),
      s.on("click", { shareType: "twitter" }, l),
      c.on("click", { shareType: "fb" }, l),
      r.on("click", f),
      d.on("click", v),
      $(n).each(function(t) {
        $(this).text().length < 125 && $(this).addClass("lesslength");
      });
  });
  var l = function(e) {
      e.preventDefault();
      var a = s.index(this),
        n = $(this).data("title"),
        o = $(this).data("link");
      o.indexOf("?") !== -1 ? (i = o.substring(0, o.indexOf("?"))) : (i = o);
      "twitter" === e.data.shareType
        ? t.open("https://twitter.com/share?text=" + n + "&url=" + i, "_blank")
        : "fb" === e.data.shareType &&
          t.open("https://www.facebook.com/sharer/sharer.php?u=" + i, "_blank");
    },
    u = function(t) {
      t.preventDefault(),
        $(this).text().length > 125 &&
          ($(this).hasClass("expanded")
            ? $(this).removeClass("expanded")
            : $(this).addClass("expanded"));
    },
    h = function(e) {
      e.preventDefault();
      var a = $(location).attr("href"),
        n = a.substring(0, a.indexOf("?"));
      t.open(n + "?cid=" + $(this).data("id")).location;
      t.location.href = t.location.origin + "/go/" + $(this).data("id");
      //t.open(t.location.origin + "/go/" + $(this).data("id")).location;
    },
    p = function(e) {
      e.preventDefault();
      var a = $(location).attr("href"),
        n = a.substring(0, a.indexOf("?"));
      t.open(t.location.origin + "/go/" + $(this).data("id")).location;
      t.location.href = n + "?cid=" + $(this).data("id");
      //t.open(n + "?cid=" + $(this).data("id"), "_self");
    },
    f = function(t) {
      t.preventDefault();
      var e = $(this).data("id");
      $.ajax({
        type: "POST",
        url: votemeajax.ajaxurl,
        data: {
          action: "voteme_addvote",
          ajaxNonce: votemeajax.ajax_nonce,
          postid: e
        },
        success: function(t, a, n) {
          var o = ".vote-" + e;
          $(o).html(""), $(o).append(t);
        },
        error: function(t, e, a) {
          console.log(e);
        }
      });
    },
    v = function(t) {
      t.preventDefault();
      var e = $(this).data("id");
      $.ajax({
        type: "POST",
        url: votemeajax.ajaxurl,
        data: {
          action: "voteme_minvote",
          ajaxNonce: votemeajax.ajax_nonce,
          postid: e
        },
        success: function(t, a, n) {
          var o = ".vote-" + e;
          $(o).html(""), $(o).append(t);
        },
        error: function(t, e, a) {
          console.log(e);
        }
      });
    };
})(jQuery, window, document);
