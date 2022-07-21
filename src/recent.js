function getRecentContainer() {
  return $('#recent-container');
}

function loadRecent() {
  chrome.history.search({text: DOMAIN, maxResults: 11}, function (data) {
    data
        .filter(page => !page.url.includes('/static/close3.html'))
        .slice(0, 10)
        .forEach(function (page, index) {
          const id = 'recent-link-' + index;
          getRecentContainer().append('<span id="' + id + '" class="recent-link"><a href="' + page.url + '">' + page.url + '</a></span>');
          document.getElementById(id).addEventListener("click", () => open(page.url));
        });
  });
}
