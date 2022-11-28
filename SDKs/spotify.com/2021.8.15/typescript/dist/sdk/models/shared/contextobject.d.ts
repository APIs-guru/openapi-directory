import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalUrlObject } from "./externalurlobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-contextobject - Find more info on the official Spotify Web API Reference
**/
export declare class ContextObject extends SpeakeasyBase {
    externalUrls?: ExternalUrlObject;
    href?: string;
    type?: string;
    uri?: string;
}
