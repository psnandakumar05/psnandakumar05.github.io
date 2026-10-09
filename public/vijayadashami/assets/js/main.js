/* Bamboo Melody Weavers — small progressive enhancements.
   The page is fully readable and every link works without this file. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     Sticky registration bar: shown once the hero has scrolled away.
     The page reserves room for it, so it never sits on top of content.
     ------------------------------------------------------------------ */
  var bar = document.querySelector('[data-sticky]');
  var hero = document.getElementById('hero');

  if (bar && hero && 'IntersectionObserver' in window) {
    bar.hidden = false;

    var reserve = function () {
      document.documentElement.style.setProperty('--sticky-h', bar.offsetHeight + 'px');
    };
    reserve();
    if ('ResizeObserver' in window) {
      new ResizeObserver(reserve).observe(bar);
    } else {
      window.addEventListener('resize', reserve);
    }

    new IntersectionObserver(function (entries) {
      var heroVisible = entries[0].isIntersecting;
      bar.classList.toggle('is-visible', !heroVisible);
      // Keep its button out of the tab order while it is off screen.
      bar.inert = heroVisible;
    }, { threshold: 0 }).observe(hero);
  }

  /* ------------------------------------------------------------------
     Watch Video: opens the approved video in a dialog. The player is
     only requested on demand and is removed again on close. No autoplay.
     Without dialog support the link simply opens the video on YouTube.
     ------------------------------------------------------------------ */
  var dialog = document.querySelector('[data-video-dialog]');
  var frame = dialog && dialog.querySelector('[data-video-frame]');

  if (dialog && frame && typeof dialog.showModal === 'function') {
    document.querySelectorAll('[data-video-open]').forEach(function (trigger) {
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        var player = document.createElement('iframe');
        player.src = frame.getAttribute('data-src');
        player.title = frame.getAttribute('data-title');
        player.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        player.allowFullscreen = true;
        player.referrerPolicy = 'strict-origin-when-cross-origin';
        frame.replaceChildren(player);
        dialog.showModal();
      });
    });

    dialog.querySelector('[data-video-close]').addEventListener('click', function () {
      dialog.close();
    });
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) { dialog.close(); }   // click on the backdrop
    });
    dialog.addEventListener('close', function () {
      frame.replaceChildren();                            // stops playback
    });
  }

  /* ------------------------------------------------------------------
     Testimonials: previous / next buttons for the scrolling row.
     The row is also swipeable and keyboard-scrollable on its own.
     ------------------------------------------------------------------ */
  var track = document.getElementById('quotes-track');
  var nav = document.querySelector('[data-quotes-nav]');

  if (track && nav) {
    var prev = nav.querySelector('[data-quotes-prev]');
    var next = nav.querySelector('[data-quotes-next]');

    var update = function () {
      var max = track.scrollWidth - track.clientWidth;
      nav.hidden = max <= 4;
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft >= max - 4;
    };

    var move = function (direction) {
      track.scrollBy({
        left: direction * track.clientWidth,
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
    };

    prev.addEventListener('click', function () { move(-1); });
    next.addEventListener('click', function () { move(1); });
    track.addEventListener('scroll', function () { window.requestAnimationFrame(update); }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }
})();
