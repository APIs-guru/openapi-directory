import { SpeakeasyBase } from "../../../internal/utils";
import { ExplicitContentSettingsObject } from "./explicitcontentsettingsobject";
import { ExternalUrlObject } from "./externalurlobject";
import { FollowersObject } from "./followersobject";
import { ImageObject } from "./imageobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-privateuserobject - Find more info on the official Spotify Web API Reference
**/
export declare class PrivateUserObject extends SpeakeasyBase {
    country?: string;
    displayName?: string;
    email?: string;
    explicitContent?: ExplicitContentSettingsObject;
    externalUrls?: ExternalUrlObject;
    followers?: FollowersObject;
    href?: string;
    id?: string;
    images?: ImageObject[];
    product?: string;
    type?: string;
    uri?: string;
}
