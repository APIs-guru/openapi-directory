import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HtmlAssetPositionEnum {
    Top = "top",
    TopRight = "topRight",
    Right = "right",
    BottomRight = "bottomRight",
    Bottom = "bottom",
    BottomLeft = "bottomLeft",
    Left = "left",
    TopLeft = "topLeft",
    Center = "center"
}


// HtmlAsset
/** 
 * The HtmlAsset clip type lets you create text based layout and formatting using HTML and CSS. You can also set the height and width of a bounding box for the HTML content to sit within. Text and elements will wrap within the bounding box.
**/
export class HtmlAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=background" })
  background?: string;

  @SpeakeasyMetadata({ data: "json, name=css" })
  css?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=html" })
  html: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: HtmlAssetPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
