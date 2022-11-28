import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalUrlObject } from "./externalurlobject";
import { ImageObject } from "./imageobject";
import { PublicUserObject } from "./publicuserobject";
import { PlaylistTracksRefObject } from "./playlisttracksrefobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedplaylistobject - Find more info on the official Spotify Web API Reference
**/
export declare class SimplifiedPlaylistObject extends SpeakeasyBase {
    collaborative?: boolean;
    description?: string;
    externalUrls?: ExternalUrlObject;
    href?: string;
    id?: string;
    images?: ImageObject[];
    name?: string;
    owner?: PublicUserObject;
    public?: boolean;
    snapshotId?: string;
    tracks?: PlaylistTracksRefObject;
    type?: string;
    uri?: string;
}
