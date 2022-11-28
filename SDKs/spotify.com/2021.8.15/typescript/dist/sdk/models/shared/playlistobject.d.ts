import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalUrlObject } from "./externalurlobject";
import { FollowersObject } from "./followersobject";
import { ImageObject } from "./imageobject";
import { PublicUserObject } from "./publicuserobject";
import { PlaylistTrackObject } from "./playlisttrackobject";
/**
 * Information about the tracks of the playlist. Note, a track object may be `null`. This can happen if a track is no longer available.
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class PlaylistObjectTracks extends SpeakeasyBase {
    href?: string;
    items?: PlaylistTrackObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-playlistobject - Find more info on the official Spotify Web API Reference
**/
export declare class PlaylistObject extends SpeakeasyBase {
    collaborative?: boolean;
    description?: string;
    externalUrls?: ExternalUrlObject;
    followers?: FollowersObject;
    href?: string;
    id?: string;
    images?: ImageObject[];
    name?: string;
    owner?: PublicUserObject;
    public?: boolean;
    snapshotId?: string;
    tracks?: PlaylistObjectTracks;
    type?: string;
    uri?: string;
}
