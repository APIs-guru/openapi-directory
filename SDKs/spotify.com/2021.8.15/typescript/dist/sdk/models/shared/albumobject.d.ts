import { SpeakeasyBase } from "../../../internal/utils";
import { ArtistObject } from "./artistobject";
import { CopyrightObject } from "./copyrightobject";
import { ExternalIdObject } from "./externalidobject";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";
import { AlbumRestrictionObject } from "./albumrestrictionobject";
import { SimplifiedTrackObject } from "./simplifiedtrackobject";
/**
 * The tracks of the album.
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class AlbumObjectTracks extends SpeakeasyBase {
    href?: string;
    items?: SimplifiedTrackObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-albumobject - Find more info on the official Spotify Web API Reference
**/
export declare class AlbumObject extends SpeakeasyBase {
    albumType?: string;
    artists?: ArtistObject[];
    availableMarkets?: string[];
    copyrights?: CopyrightObject[];
    externalIds?: ExternalIdObject;
    externalUrls?: ExternalUrlObject;
    genres?: string[];
    href?: string;
    id?: string;
    images?: ImageObject[];
    label?: string;
    name?: string;
    popularity?: number;
    releaseDate?: string;
    releaseDatePrecision?: string;
    restrictions?: AlbumRestrictionObject;
    totalTracks?: number;
    tracks?: AlbumObjectTracks;
    type?: string;
    uri?: string;
}
