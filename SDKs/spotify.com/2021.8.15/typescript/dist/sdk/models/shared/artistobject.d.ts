import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalUrlObject } from "./externalurlobject";
import { FollowersObject } from "./followersobject";
import { ImageObject } from "./imageobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-artistobject - Find more info on the official Spotify Web API Reference
**/
export declare class ArtistObject extends SpeakeasyBase {
    externalUrls?: ExternalUrlObject;
    followers?: FollowersObject;
    genres?: string[];
    href?: string;
    id?: string;
    images?: ImageObject[];
    name?: string;
    popularity?: number;
    type?: string;
    uri?: string;
}
