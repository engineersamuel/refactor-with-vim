// Embed these utility functions into a namespace and convert arrow functions to regular exported functions with a return type
const removeFirstChar = (content: string) => {
  return content.substring(1);
}

const removeLastChar = (content: string) => {
  return content.substring(0, content.length - 1);
}

const startsWith = (content: string, char: string) => {
  return content.charAt(0) === char;
}

const endsWith = (content: string, char: string) => {
  return content.charAt(content.length - 1) === char;
}

const wrapWith = (content: string, char: string) => {
  return `${char}${content}${char}`;
}

const hasCommas = (content: string) => {
  return content.includes(',');
}
