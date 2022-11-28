import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AudioAssetEffectEnum {
    FadeIn = "fadeIn",
    FadeOut = "fadeOut",
    FadeInFadeOut = "fadeInFadeOut"
}


// AudioAsset
/** 
 * The AudioAsset is used to add sound effects and audio at specific intervals on the timeline. The src must be a publicly accessible URL to an audio resource such  as an mp3 file.
**/
export class AudioAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effect" })
  effect?: AudioAssetEffectEnum;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src: string;

  @SpeakeasyMetadata({ data: "json, name=trim" })
  trim?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume?: number;
}
