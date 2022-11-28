import { SpeakeasyBase } from "../../../internal/utils";
import { Offset } from "./offset";
import { Transition } from "./transition";
export declare enum ClipEffectEnum {
    ZoomIn = "zoomIn",
    ZoomOut = "zoomOut",
    SlideLeft = "slideLeft",
    SlideRight = "slideRight",
    SlideUp = "slideUp",
    SlideDown = "slideDown"
}
export declare enum ClipFilterEnum {
    Boost = "boost",
    Contrast = "contrast",
    Darken = "darken",
    Greyscale = "greyscale",
    Lighten = "lighten",
    Muted = "muted",
    Negative = "negative"
}
export declare enum ClipFitEnum {
    Cover = "cover",
    Contain = "contain",
    Crop = "crop",
    None = "none"
}
export declare enum ClipPositionEnum {
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
 * A clip is a container for a specific type of asset, i.e. a title, image, video, audio or html. You use a Clip to define when an asset will display on the timeline, how long it will play for and transitions, filters and effects to apply to it.
**/
export declare class Clip extends SpeakeasyBase {
    asset: any;
    effect?: ClipEffectEnum;
    filter?: ClipFilterEnum;
    fit?: ClipFitEnum;
    length: number;
    offset?: Offset;
    opacity?: number;
    position?: ClipPositionEnum;
    scale?: number;
    start: number;
    transition?: Transition;
}
