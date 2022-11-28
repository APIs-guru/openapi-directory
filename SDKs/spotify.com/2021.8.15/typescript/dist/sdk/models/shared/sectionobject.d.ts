import { SpeakeasyBase } from "../../../internal/utils";
/**
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#section-object - Find more info on the official Spotify Web API Reference
**/
export declare class SectionObject extends SpeakeasyBase {
    confidence?: number;
    duration?: number;
    key?: number;
    keyConfidence?: number;
    loudness?: number;
    mode?: number;
    modeConfidence?: number;
    start?: number;
    tempo?: number;
    tempoConfidence?: number;
    timeSignature?: number;
    timeSignatureConfidence?: number;
}
