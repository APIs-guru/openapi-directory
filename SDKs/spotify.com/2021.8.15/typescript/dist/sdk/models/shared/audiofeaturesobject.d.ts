import { SpeakeasyBase } from "../../../internal/utils";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject - Find more info on the official Spotify Web API Reference
**/
export declare class AudioFeaturesObject extends SpeakeasyBase {
    acousticness?: number;
    analysisUrl?: string;
    danceability?: number;
    durationMs?: number;
    energy?: number;
    id?: string;
    instrumentalness?: number;
    key?: number;
    liveness?: number;
    loudness?: number;
    mode?: number;
    speechiness?: number;
    tempo?: number;
    timeSignature?: number;
    trackHref?: string;
    type?: string;
    uri?: string;
    valence?: number;
}
