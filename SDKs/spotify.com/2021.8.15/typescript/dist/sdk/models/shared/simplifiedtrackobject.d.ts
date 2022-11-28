import { SpeakeasyBase } from "../../../internal/utils";
import { SimplifiedArtistObject } from "./simplifiedartistobject";
import { ExternalUrlObject } from "./externalurlobject";
import { LinkedTrackObject } from "./linkedtrackobject";
import { TrackRestrictionObject } from "./trackrestrictionobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedtrackobject - Find more info on the official Spotify Web API Reference
**/
export declare class SimplifiedTrackObject extends SpeakeasyBase {
    artists?: SimplifiedArtistObject[];
    availableMarkets?: string[];
    discNumber?: number;
    durationMs?: number;
    explicit?: boolean;
    externalUrls?: ExternalUrlObject;
    href?: string;
    id?: string;
    isLocal?: boolean;
    isPlayable?: boolean;
    linkedFrom?: LinkedTrackObject;
    name?: string;
    previewUrl?: string;
    restrictions?: TrackRestrictionObject;
    trackNumber?: number;
    type?: string;
    uri?: string;
}
