import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalUrlObject } from "./externalurlobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-linkedtrackobject - Find more info on the official Spotify Web API Reference
**/
export declare class LinkedTrackObject extends SpeakeasyBase {
    externalUrls?: ExternalUrlObject;
    href?: string;
    id?: string;
    type?: string;
    uri?: string;
}
