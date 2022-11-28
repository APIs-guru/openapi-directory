import { SpeakeasyBase } from "../../../internal/utils";
import { ContextObject } from "./contextobject";
import { SimplifiedTrackObject } from "./simplifiedtrackobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-playhistoryobject - Find more info on the official Spotify Web API Reference
**/
export declare class PlayHistoryObject extends SpeakeasyBase {
    context?: ContextObject;
    playedAt?: Date;
    track?: SimplifiedTrackObject;
}
