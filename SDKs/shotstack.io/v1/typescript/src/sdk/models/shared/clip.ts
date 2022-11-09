import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideoAsset } from "./videoasset";
import { ImageAsset } from "./imageasset";
import { TitleAsset } from "./titleasset";
import { HtmlAsset } from "./htmlasset";
import { AudioAsset } from "./audioasset";
import { LumaAsset } from "./lumaasset";
import { Offset } from "./offset";
import { Transition } from "./transition";

export enum ClipEffectEnum {
    ZoomIn = "zoomIn"
,    ZoomOut = "zoomOut"
,    SlideLeft = "slideLeft"
,    SlideRight = "slideRight"
,    SlideUp = "slideUp"
,    SlideDown = "slideDown"
}

export enum ClipFilterEnum {
    Boost = "boost"
,    Contrast = "contrast"
,    Darken = "darken"
,    Greyscale = "greyscale"
,    Lighten = "lighten"
,    Muted = "muted"
,    Negative = "negative"
}

export enum ClipFitEnum {
    Cover = "cover"
,    Contain = "contain"
,    Crop = "crop"
,    None = "none"
}

export enum ClipPositionEnum {
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


// Clip
/** 
 * A clip is a container for a specific type of asset, i.e. a title, image, video, audio or html. You use a Clip to define when an asset will display on the timeline, how long it will play for and transitions, filters and effects to apply to it.
**/
export class Clip extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset" })
  asset: any;

  @Metadata({ data: "json, name=effect" })
  effect?: ClipEffectEnum;

  @Metadata({ data: "json, name=filter" })
  filter?: ClipFilterEnum;

  @Metadata({ data: "json, name=fit" })
  fit?: ClipFitEnum;

  @Metadata({ data: "json, name=length" })
  length: number;

  @Metadata({ data: "json, name=offset" })
  offset?: Offset;

  @Metadata({ data: "json, name=opacity" })
  opacity?: number;

  @Metadata({ data: "json, name=position" })
  position?: ClipPositionEnum;

  @Metadata({ data: "json, name=scale" })
  scale?: number;

  @Metadata({ data: "json, name=start" })
  start: number;

  @Metadata({ data: "json, name=transition" })
  transition?: Transition;
}
