import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HtmlAssetPositionEnum {
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
/**
 * The HtmlAsset clip type lets you create text based layout and formatting using HTML and CSS. You can also set the height and width of a bounding box for the HTML content to sit within. Text and elements will wrap within the bounding box.
**/
export declare class HtmlAsset extends SpeakeasyBase {
    background?: string;
    css?: string;
    height?: number;
    html: string;
    position?: HtmlAssetPositionEnum;
    type: string;
    width?: number;
}
