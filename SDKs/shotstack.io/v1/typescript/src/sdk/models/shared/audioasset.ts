import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AudioAssetEffectEnum {
    FadeIn = "fadeIn"
,    FadeOut = "fadeOut"
,    FadeInFadeOut = "fadeInFadeOut"
}


// AudioAsset
/** 
 * The AudioAsset is used to add sound effects and audio at specific intervals on the timeline. The src must be a publicly accessible URL to an audio resource such  as an mp3 file.
**/
export class AudioAsset extends SpeakeasyBase {
  @Metadata({ data: "json, name=effect" })
  effect?: AudioAssetEffectEnum;

  @Metadata({ data: "json, name=src" })
  src: string;

  @Metadata({ data: "json, name=trim" })
  trim?: number;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=volume" })
  volume?: number;
}
