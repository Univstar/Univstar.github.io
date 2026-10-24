<div class="publications">
<div class="publication-toolbar">
<div class="publication-filters" hidden>
  <label class="publication-year" for="publication-year">Year
    <select id="publication-year" aria-controls="publication-list">
      <option value="all">All years</option>
      {% capture publication_years %}{% for publication in site.data.publications.main %}{{ publication.date | date: '%Y' }} {% endfor %}{% endcapture %}
      {% assign publication_years = publication_years | split: ' ' | uniq | sort | reverse %}
      {% for year in publication_years %}
      <option value="{{ year }}">{{ year }}</option>
      {% endfor %}
    </select>
  </label>
  <label class="publication-selected" for="publication-selected">
    <input type="checkbox" id="publication-selected" aria-controls="publication-list"> Selected
  </label>
</div>
<em class="publication-author-note">(*: joint 1st authors, †: corresponding authors)</em>
</div>
<p class="publication-empty" role="status" hidden>No publications match these filters.</p>
<ol class="bibliography" id="publication-list">

{% for link in site.data.publications.main %}

<li data-year="{{ link.date | date: '%Y' }}" data-selected="{% if link.selected %}true{% else %}false{% endif %}">
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %} 
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width=100;height=40%">
    {% endif %}
    {% if link.conference %} 
    <abbr class="badge">{{ link.conference }}</abbr>
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      {% if link.page %}
      <div class="title"><a href="{{ link.page }}">{{ link.title }}</a></div>
      {% else %}
      <div class="title"><a href="{{ link.doi }}">{{ link.title }}</a></div>
      {% endif %}
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.journal }}{% if link.date %} {{ link.date | date: '%B %Y' }}.{% endif %}</em>
      </div>
    <div class="links">
      {% if link.doi %} 
      <a href="{{ link.doi }}" class="pbtn z-depth-0" role="button" target="_blank" style="font-size:12px;">DOI</a>
      {% endif %}
      {% if link.pdf %} 
      <a href="{{ link.pdf }}" class="pbtn z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
      {% endif %}
      {% if link.code %} 
      <a href="{{ link.code }}" class="pbtn z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %} 
      <a href="{{ link.page }}" class="pbtn z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.bibtex %} 
      <a href="{{ link.bibtex }}" class="pbtn z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.youtube %} 
      <a href="{{ link.youtube }}" class="pbtn z-depth-0" role="button" target="_blank" style="font-size:12px;">YouTube</a>
      {% endif %}
      {% if link.bilibili %} 
      <a href="{{ link.bilibili }}" class="pbtn z-depth-0" role="button" target="_blank" style="font-size:12px;">bilibili</a>
      {% endif %}
      {% if link.notes %} 
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %} 
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>

{% endfor %}

</ol>
</div>

