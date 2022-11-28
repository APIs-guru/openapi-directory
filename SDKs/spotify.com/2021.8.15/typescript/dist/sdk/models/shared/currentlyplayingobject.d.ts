import { SpeakeasyBase } from "../../../internal/utils";
import { ContextObject } from "./contextobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-currentlyplayingobject - Find more info on the official Spotify Web API Reference
**/
export declare class CurrentlyPlayingObject extends SpeakeasyBase {
    context?: ContextObject;
    currentlyPlayingType?: string;
    isPlaying?: boolean;
    item?: any;
    progressMs?: number;
    timestamp?: number;
}
