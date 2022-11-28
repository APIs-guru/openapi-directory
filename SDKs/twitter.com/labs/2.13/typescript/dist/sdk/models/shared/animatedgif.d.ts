import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AnimatedGifTypeEnum {
    AnimatedGif = "animated_gif"
}
export declare class AnimatedGif extends SpeakeasyBase {
    height?: number;
    mediaKey?: string;
    previewImageUrl?: string;
    type?: AnimatedGifTypeEnum;
    width?: number;
}
