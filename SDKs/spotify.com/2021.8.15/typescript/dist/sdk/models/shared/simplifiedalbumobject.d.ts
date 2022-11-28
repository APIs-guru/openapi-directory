import { SpeakeasyBase } from "../../../internal/utils";
import { SimplifiedArtistObject } from "./simplifiedartistobject";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";
import { AlbumRestrictionObject } from "./albumrestrictionobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedalbumobject - Find more info on the official Spotify Web API Reference
**/
export declare class SimplifiedAlbumObject extends SpeakeasyBase {
    albumGroup?: string;
    albumType?: string;
    artists?: SimplifiedArtistObject[];
    availableMarkets?: string[];
    externalUrls?: ExternalUrlObject;
    href?: string;
    id?: string;
    images?: ImageObject[];
    name?: string;
    releaseDate?: string;
    releaseDatePrecision?: string;
    restrictions?: AlbumRestrictionObject;
    totalTracks?: number;
    type?: string;
    uri?: string;
}
