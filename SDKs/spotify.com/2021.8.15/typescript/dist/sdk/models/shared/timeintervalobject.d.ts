import { SpeakeasyBase } from "../../../internal/utils";
/**
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#time-interval-object - Find more info on the official Spotify Web API Reference
**/
export declare class TimeIntervalObject extends SpeakeasyBase {
    confidence?: number;
    duration?: number;
    start?: number;
}
