import { SpeakeasyBase } from "../../../internal/utils";
import { SimplifiedPlaylistObject } from "./simplifiedplaylistobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class FeaturedPlaylistObjectPlaylists extends SpeakeasyBase {
    href?: string;
    items?: SimplifiedPlaylistObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class FeaturedPlaylistObject extends SpeakeasyBase {
    message?: string;
    playlists?: FeaturedPlaylistObjectPlaylists;
}
