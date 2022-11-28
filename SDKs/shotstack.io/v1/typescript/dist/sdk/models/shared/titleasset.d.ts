import { SpeakeasyBase } from "../../../internal/utils";
import { Offset } from "./offset";
export declare enum TitleAssetPositionEnum {
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
export declare enum TitleAssetSizeEnum {
    XxSmall = "xx-small",
    XSmall = "x-small",
    Small = "small",
    Medium = "medium",
    Large = "large",
    XLarge = "x-large",
    XxLarge = "xx-large"
}
export declare enum TitleAssetStyleEnum {
    Minimal = "minimal",
    Blockbuster = "blockbuster",
    Vogue = "vogue",
    Sketchy = "sketchy",
    Skinny = "skinny",
    Chunk = "chunk",
    ChunkLight = "chunkLight",
    Marker = "marker",
    Future = "future",
    Subtitle = "subtitle"
}
/**
 * The TitleAsset clip type lets you create video titles from a text string and apply styling and positioning.
**/
export declare class TitleAsset extends SpeakeasyBase {
    background?: string;
    color?: string;
    offset?: Offset;
    position?: TitleAssetPositionEnum;
    size?: TitleAssetSizeEnum;
    style?: TitleAssetStyleEnum;
    text: string;
    type: string;
}
