import { SpeakeasyBase } from "../../../internal/utils";
import { SimplifiedAlbumObject } from "./simplifiedalbumobject";
import { ArtistObject } from "./artistobject";
import { ExternalIdObject } from "./externalidobject";
import { ExternalUrlObject } from "./externalurlobject";
import { LinkedTrackObject } from "./linkedtrackobject";
import { TrackRestrictionObject } from "./trackrestrictionobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-trackobject - Find more info on the official Spotify Web API Reference
**/
export declare class TrackObject extends SpeakeasyBase {
    album?: SimplifiedAlbumObject;
    artists?: ArtistObject[];
    availableMarkets?: string[];
    discNumber?: number;
    durationMs?: number;
    explicit?: boolean;
    externalIds?: ExternalIdObject;
    externalUrls?: ExternalUrlObject;
    href?: string;
    id?: string;
    isLocal?: boolean;
    isPlayable?: boolean;
    linkedFrom?: LinkedTrackObject;
    name?: string;
    popularity?: number;
    previewUrl?: string;
    restrictions?: TrackRestrictionObject;
    trackNumber?: number;
    type?: string;
    uri?: string;
}
