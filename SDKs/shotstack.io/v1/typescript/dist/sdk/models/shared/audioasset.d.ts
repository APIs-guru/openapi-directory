import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AudioAssetEffectEnum {
    FadeIn = "fadeIn",
    FadeOut = "fadeOut",
    FadeInFadeOut = "fadeInFadeOut"
}
/**
 * The AudioAsset is used to add sound effects and audio at specific intervals on the timeline. The src must be a publicly accessible URL to an audio resource such  as an mp3 file.
**/
export declare class AudioAsset extends SpeakeasyBase {
    effect?: AudioAssetEffectEnum;
    src: string;
    trim?: number;
    type: string;
    volume?: number;
}
