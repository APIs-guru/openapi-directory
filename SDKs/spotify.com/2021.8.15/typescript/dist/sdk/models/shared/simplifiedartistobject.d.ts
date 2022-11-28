import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalUrlObject } from "./externalurlobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedartistobject - Find more info on the official Spotify Web API Reference
**/
export declare class SimplifiedArtistObject extends SpeakeasyBase {
    externalUrls?: ExternalUrlObject;
    href?: string;
    id?: string;
    name?: string;
    type?: string;
    uri?: string;
}
