const DOMAIN = "https://meet.jit.si/";

const CHAR_CODE_GENERATOR = "char-code-generator";
const NUMBER_CODE_GENERATOR = "number-code-generator";
const NAME_CODE_GENERATOR = "name-code-generator";

document.addEventListener('DOMContentLoaded', async function () {
  // Settings
  await loadSettings()
  document.getElementById(CHAR_CODE_GENERATOR).addEventListener("click", saveSettings);
  document.getElementById(NUMBER_CODE_GENERATOR).addEventListener("click", saveSettings);
  document.getElementById(NAME_CODE_GENERATOR).addEventListener("click", saveSettings);

  // Generator
  document.getElementById("domain-name").innerText = DOMAIN;
  document.getElementById("refresh").addEventListener("click", refresh);
  document.getElementById("copy").addEventListener("click", copy);
  document.getElementById("open").addEventListener("click", () => open(getFullLink()));
  refresh();

  loadRecent();
});

/* DOM */
function getLinkInputEl() {
  return $('#generated-link');
}

function getSelectedGenerator() {
  return $('input[name="generator-type"]:checked').val();
}

/* HELPERS */

function getFullLink() {
  return DOMAIN + getLinkInputEl().val();
}

function getGeneratorFunction() {
  let generatorType = getSelectedGenerator();
  switch (generatorType) {
    case CHAR_CODE_GENERATOR:
      return generateCharCode;
    case NUMBER_CODE_GENERATOR:
      return generateNumberCode;
    case NAME_CODE_GENERATOR:
      return generateNameCode;
    default:
      return generateCharCode;
  }
}

/* HANDLERS */
function refresh() {
  let generatorFunction = getGeneratorFunction();
  getLinkInputEl().val(generatorFunction(true))
}

function copy() {
  navigator.clipboard.writeText(getFullLink());
}

function openPopupPage() {
  chrome.tabs.create({url: chrome.runtime.getURL("popup.html")});
}

function open(link) {
  chrome.tabs.create({url: link});
}
