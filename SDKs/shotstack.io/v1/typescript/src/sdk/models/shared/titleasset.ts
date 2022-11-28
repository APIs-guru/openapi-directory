import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Offset } from "./offset";


export enum TitleAssetPositionEnum {
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

export enum TitleAssetSizeEnum {
    XxSmall = "xx-small",
    XSmall = "x-small",
    Small = "small",
    Medium = "medium",
    Large = "large",
    XLarge = "x-large",
    XxLarge = "xx-large"
}

export enum TitleAssetStyleEnum {
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


// TitleAsset
/** 
 * The TitleAsset clip type lets you create video titles from a text string and apply styling and positioning.
**/
export class TitleAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=background" })
  background?: string;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: Offset;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: TitleAssetPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: TitleAssetSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=style" })
  style?: TitleAssetStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
