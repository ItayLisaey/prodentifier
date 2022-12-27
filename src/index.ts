const defaultContent = {
  'Build Version': '1.0.0',
  'Build Date': '2021-09-01T12:00:00.000Z',
  'Commit ID': 'N/A',
  'Build ID': 'N/A',
  'Source Branch': 'N/A',
};

const defaultHeader = {
  text: '%cℹ️ Prodentifier',
  style: 'color: #0070a0; font-weight: bold; font-size: 1.1em;',
};

type Content = Record<keyof typeof defaultContent | string, string>;

export class Prodentifier {
  private content: Content;
  private header: {
    text: string;
    style?: string;
  };

  /**
   * @param content - The content to be disclosed.
   * @example
   * 'Build Version': '1.0.0',
   * 'Build Date': '2021-09-01T12:00:00.000Z',
   * 'Commit ID': 'N/A',
   * 'Build ID': 'N/A',
   * 'Source Branch': 'N/A',
   *
   * @param header - The header of the console message.
   * @example
   *   text: '%cℹ️ Prodentifier',
   *   style: 'color: #0070a0; font-weight: bold; font-size: 1.1em;',
   */
  constructor(content: Content = defaultContent, header = defaultHeader) {
    this.content = content;
    this.header = header;
  }

  disclose() {
    console.groupCollapsed(...Object.values(this.header));
    const style = 'color: #3c3c3c; ';
    const keys = Object.keys(this.content);
    for (const key of keys) {
      console.log(`%c${key}: ${this.content[key]}`, style);
    }
    console.groupEnd();
  }
}
