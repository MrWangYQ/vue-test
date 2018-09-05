const languageArea = window.navigator.language || 'en-US';
let language = languageArea.split('-')[0];
if (languageArea === 'zh-HK') {
  language = 'zh-HK';
}
export {
  language,
  languageArea,
};