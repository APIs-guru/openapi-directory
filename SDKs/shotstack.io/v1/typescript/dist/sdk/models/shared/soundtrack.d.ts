import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum SoundtrackEffectEnum {
    FadeIn = "fadeIn",
    FadeOut = "fadeOut",
    FadeInFadeOut = "fadeInFadeOut"
}
/**
 * A music or audio file in mp3 format that plays for the duration of the rendered video or the length of the audio file, which ever is shortest.
**/
export declare class Soundtrack extends SpeakeasyBase {
    effect?: SoundtrackEffectEnum;
    src: string;
    volume?: number;
}
