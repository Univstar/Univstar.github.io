(function () {
  'use strict';

  document.querySelectorAll('.publications').forEach(function (publications) {
    var filters = publications.querySelector('.publication-filters');
    if (!filters) return;

    var yearSelect = filters.querySelector('select');
    var selectedCheckbox = filters.querySelector('input[type="checkbox"]');
    var papers = publications.querySelectorAll('.bibliography > li');
    var empty = publications.querySelector('.publication-empty');

    function update() {
      var visible = 0;
      papers.forEach(function (paper) {
        var matchesYear = yearSelect.value === 'all' || paper.dataset.year === yearSelect.value;
        var matchesView = !selectedCheckbox.checked || paper.dataset.selected === 'true';
        paper.hidden = !(matchesYear && matchesView);
        if (!paper.hidden) visible += 1;
      });

      empty.hidden = visible !== 0;
    }

    selectedCheckbox.addEventListener('change', update);
    yearSelect.addEventListener('change', update);

    // Show the controls only when filtering is ready; without JS all papers remain visible.
    yearSelect.value = 'all';
    selectedCheckbox.checked = false;
    update();
    filters.hidden = false;
  });
}());
