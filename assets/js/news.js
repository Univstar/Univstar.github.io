(function () {
  'use strict';

  var toggle = document.querySelector('.news-toggle');
  var list = document.getElementById('news-list');

  function setExpanded(expanded) {
    list.classList.toggle('news-expanded', expanded);
    list.classList.toggle('news-collapsed', !expanded);
    if (expanded) {
      list.tabIndex = 0;
    } else {
      list.removeAttribute('tabindex');
      list.scrollTop = 0;
    }
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.textContent = expanded ? 'Show less' : 'Show more';
  }

  setExpanded(false);
  toggle.hidden = false;
  toggle.addEventListener('click', function () {
    setExpanded(toggle.getAttribute('aria-expanded') === 'false');
  });
}());
