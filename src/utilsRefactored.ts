export namespace StringUtils {
  export function removeFirstChar(content: string): string {
    return content.substring(1);
  }

  export function removeLastChar(content: string): string {
    return content.substring(0, content.length - 1);
  }

  export function startsWith(content: string, char: string): boolean {
    return content.charAt(0) === char;
  }

  export function endsWith(content: string, char: string): boolean {
    return content.charAt(content.length - 1) === char;
  }

  export function wrapWith(content: string, char: string): string {
    return `${char}${content}${char}`;
  }

  export function hasCommas(content: string): boolean {
    return content.includes(',');
  }
}
