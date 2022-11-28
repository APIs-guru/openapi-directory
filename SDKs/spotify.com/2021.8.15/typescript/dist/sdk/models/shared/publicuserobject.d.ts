import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalUrlObject } from "./externalurlobject";
import { FollowersObject } from "./followersobject";
import { ImageObject } from "./imageobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-publicuserobject - Find more info on the official Spotify Web API Reference
**/
export declare class PublicUserObject extends SpeakeasyBase {
    displayName?: string;
    externalUrls?: ExternalUrlObject;
    followers?: FollowersObject;
    href?: string;
    id?: string;
    images?: ImageObject[];
    type?: string;
    uri?: string;
}
