import { SpeakeasyBase } from "../../../internal/utils";
import { CopyrightObject } from "./copyrightobject";
import { SimplifiedEpisodeObject } from "./simplifiedepisodeobject";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";
/**
 * A list of the show's episodes.
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class ShowObjectEpisodes extends SpeakeasyBase {
    href?: string;
    items?: SimplifiedEpisodeObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-showobject - Find more info on the official Spotify Web API Reference
**/
export declare class ShowObject extends SpeakeasyBase {
    availableMarkets?: string[];
    copyrights?: CopyrightObject[];
    description?: string;
    episodes?: ShowObjectEpisodes;
    explicit?: boolean;
    externalUrls?: ExternalUrlObject;
    href?: string;
    htmlDescription?: string;
    id?: string;
    images?: ImageObject[];
    isExternallyHosted?: boolean;
    languages?: string[];
    mediaType?: string;
    name?: string;
    publisher?: string;
    type?: string;
    uri?: string;
}
