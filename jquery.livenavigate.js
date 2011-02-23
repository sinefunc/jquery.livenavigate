;(function ($) {
  if (window.history.pushState) {
    $.navigate = function (href) {
      window.history.pushState({ href: href }, "", href);
      $(window).trigger('navigate', href);
    };

    window.onpopstate = function (e, state) {
      $(window).trigger('navigate', window.location.pathname);
    };
  }

  else {
    $.navigate = function (href) {
      if (window.location.hash == '#!'+href) { return; }
      window.location.hash = "#!" + href;
    };

    $.hashListen('!(.*)', function (href) {
      $(window).trigger('navigate', href);
    });
  };
})(jQuery);
