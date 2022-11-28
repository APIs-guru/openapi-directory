import { SpeakeasyBase } from "../../../internal/utils";
/**
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#segment-object - Find more info on the official Spotify Web API Reference
**/
export declare class SegmentObject extends SpeakeasyBase {
    confidence?: number;
    duration?: number;
    loudnessEnd?: number;
    loudnessMax?: number;
    loudnessMaxTime?: number;
    loudnessStart?: number;
    pitches?: number[];
    start?: number;
    timbre?: number[];
}
