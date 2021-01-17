import { MdaColor, mdaColorNames, MdaColorNames, mdaColors, MdaColorScheme } from './colors';

export class MdaTemplate {
  public colors: MdaColorScheme;

  private readonly _colorFlatArray: Array<MdaColor> = [];
  private readonly _colorNames: MdaColorNames;
  private readonly _colorNamesArray: Array<string>;

  constructor() {
    this.colors = mdaColors;

    for (const group of Object.keys(this.colors)) {
      this._colorFlatArray = [...this._colorFlatArray, ...this.colors[group]];
    }
    this._colorNames = mdaColorNames;
    this._colorNamesArray = Object.keys(this._colorNames);
  }

  public getColorByName(colorName: string): MdaColor {
    return this._colorNamesArray.includes(colorName) ?
      this._colorFlatArray.find((e: MdaColor) => e.name === colorName) : null;
  }
}

export const mdaTemplate = new MdaTemplate();
