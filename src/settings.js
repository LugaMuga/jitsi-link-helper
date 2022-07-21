function saveSettings() {
  const generator = getSelectedGenerator();
  chrome.storage.sync.set({
    generator: generator
  });
  refresh();
}

async function getFromStorage(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, resolve);
  })
      .then(result => {
        if (key == null) return result;
        else return result[key];
      });
}

async function loadSettings() {
  const generator = await getFromStorage("generator");
  document.getElementById(generator).checked = true;
}
