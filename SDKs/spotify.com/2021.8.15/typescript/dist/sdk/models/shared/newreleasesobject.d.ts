import { SpeakeasyBase } from "../../../internal/utils";
import { SimplifiedAlbumObject } from "./simplifiedalbumobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class NewReleasesObjectAlbums extends SpeakeasyBase {
    href?: string;
    items?: SimplifiedAlbumObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class NewReleasesObject extends SpeakeasyBase {
    albums?: NewReleasesObjectAlbums;
}
