import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HtmlAssetPositionEnum {
    Top = "top"
,    TopRight = "topRight"
,    Right = "right"
,    BottomRight = "bottomRight"
,    Bottom = "bottom"
,    BottomLeft = "bottomLeft"
,    Left = "left"
,    TopLeft = "topLeft"
,    Center = "center"
}


// HtmlAsset
/** 
 * The HtmlAsset clip type lets you create text based layout and formatting using HTML and CSS. You can also set the height and width of a bounding box for the HTML content to sit within. Text and elements will wrap within the bounding box.
**/
export class HtmlAsset extends SpeakeasyBase {
  @Metadata({ data: "json, name=background" })
  background?: string;

  @Metadata({ data: "json, name=css" })
  css?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=html" })
  html: string;

  @Metadata({ data: "json, name=position" })
  position?: HtmlAssetPositionEnum;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
