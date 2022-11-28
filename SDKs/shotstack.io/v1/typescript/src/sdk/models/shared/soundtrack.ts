import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SoundtrackEffectEnum {
    FadeIn = "fadeIn",
    FadeOut = "fadeOut",
    FadeInFadeOut = "fadeInFadeOut"
}


// Soundtrack
/** 
 * A music or audio file in mp3 format that plays for the duration of the rendered video or the length of the audio file, which ever is shortest.
**/
export class Soundtrack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effect" })
  effect?: SoundtrackEffectEnum;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src: string;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume?: number;
}
