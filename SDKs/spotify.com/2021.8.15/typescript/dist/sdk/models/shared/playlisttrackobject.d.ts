import { SpeakeasyBase } from "../../../internal/utils";
import { PublicUserObject } from "./publicuserobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-playlisttrackobject - Find more info on the official Spotify Web API Reference
**/
export declare class PlaylistTrackObject extends SpeakeasyBase {
    addedAt?: Date;
    addedBy?: PublicUserObject;
    isLocal?: boolean;
    track?: any;
}
