import { SpeakeasyBase } from "../../../internal/utils";
import { CursorObject } from "./cursorobject";
import { ArtistObject } from "./artistobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class FollowingArtistsObjectArtists extends SpeakeasyBase {
    cursors?: CursorObject;
    href?: string;
    items?: ArtistObject[];
    limit?: number;
    next?: string;
    total?: number;
}
export declare class FollowingArtistsObject extends SpeakeasyBase {
    artists?: FollowingArtistsObjectArtists;
}
