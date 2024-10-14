export const decodeHtmlEntities = (encodedString: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(encodedString, "text/html");
  return doc.documentElement.textContent;
};
