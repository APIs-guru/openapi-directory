import { SpeakeasyBase } from "../../../internal/utils";
import { TrackObject } from "./trackobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-savedtrackobject - Find more info on the official Spotify Web API Reference
**/
export declare class SavedTrackObject extends SpeakeasyBase {
    addedAt?: Date;
    track?: TrackObject;
}
