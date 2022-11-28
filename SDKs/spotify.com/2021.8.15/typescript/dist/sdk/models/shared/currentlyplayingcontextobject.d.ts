import { SpeakeasyBase } from "../../../internal/utils";
import { DisallowsObject } from "./disallowsobject";
import { ContextObject } from "./contextobject";
import { DeviceObject } from "./deviceobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-currentlyplayingcontextobject - Find more info on the official Spotify Web API Reference
**/
export declare class CurrentlyPlayingContextObject extends SpeakeasyBase {
    actions?: DisallowsObject;
    context?: ContextObject;
    currentlyPlayingType?: string;
    device?: DeviceObject;
    isPlaying?: boolean;
    item?: any;
    progressMs?: number;
    repeatState?: string;
    shuffleState?: string;
    timestamp?: number;
}
