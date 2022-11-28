import { SpeakeasyBase } from "../../../internal/utils";
import { SimplifiedAlbumObject } from "./simplifiedalbumobject";
import { ArtistObject } from "./artistobject";
import { SimplifiedEpisodeObject } from "./simplifiedepisodeobject";
import { SimplifiedPlaylistObject } from "./simplifiedplaylistobject";
import { SimplifiedShowObject } from "./simplifiedshowobject";
import { TrackObject } from "./trackobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class SearchResponseObjectAlbums extends SpeakeasyBase {
    href?: string;
    items?: SimplifiedAlbumObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class SearchResponseObjectArtists extends SpeakeasyBase {
    href?: string;
    items?: ArtistObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class SearchResponseObjectEpisodes extends SpeakeasyBase {
    href?: string;
    items?: SimplifiedEpisodeObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class SearchResponseObjectPlaylists extends SpeakeasyBase {
    href?: string;
    items?: SimplifiedPlaylistObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class SearchResponseObjectShows extends SpeakeasyBase {
    href?: string;
    items?: SimplifiedShowObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class SearchResponseObjectTracks extends SpeakeasyBase {
    href?: string;
    items?: TrackObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class SearchResponseObject extends SpeakeasyBase {
    albums?: SearchResponseObjectAlbums;
    artists?: SearchResponseObjectArtists;
    episodes?: SearchResponseObjectEpisodes;
    playlists?: SearchResponseObjectPlaylists;
    shows?: SearchResponseObjectShows;
    tracks?: SearchResponseObjectTracks;
}
