import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Offset } from "./offset";

export enum TitleAssetPositionEnum {
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

export enum TitleAssetSizeEnum {
    XxSmall = "xx-small"
,    XSmall = "x-small"
,    Small = "small"
,    Medium = "medium"
,    Large = "large"
,    XLarge = "x-large"
,    XxLarge = "xx-large"
}

export enum TitleAssetStyleEnum {
    Minimal = "minimal"
,    Blockbuster = "blockbuster"
,    Vogue = "vogue"
,    Sketchy = "sketchy"
,    Skinny = "skinny"
,    Chunk = "chunk"
,    ChunkLight = "chunkLight"
,    Marker = "marker"
,    Future = "future"
,    Subtitle = "subtitle"
}


// TitleAsset
/** 
 * The TitleAsset clip type lets you create video titles from a text string and apply styling and positioning.
**/
export class TitleAsset extends SpeakeasyBase {
  @Metadata({ data: "json, name=background" })
  background?: string;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: Offset;

  @Metadata({ data: "json, name=position" })
  position?: TitleAssetPositionEnum;

  @Metadata({ data: "json, name=size" })
  size?: TitleAssetSizeEnum;

  @Metadata({ data: "json, name=style" })
  style?: TitleAssetStyleEnum;

  @Metadata({ data: "json, name=text" })
  text: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
