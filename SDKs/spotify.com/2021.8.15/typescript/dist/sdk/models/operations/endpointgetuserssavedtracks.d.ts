import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetUsersSavedTracksQueryParams extends SpeakeasyBase {
    limit?: number;
    market?: string;
    offset?: number;
}
export declare class EndpointGetUsersSavedTracksHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetUsersSavedTracksSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class EndpointGetUsersSavedTracks200ApplicationJson extends SpeakeasyBase {
    href?: string;
    items?: shared.SavedTrackObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class EndpointGetUsersSavedTracksRequest extends SpeakeasyBase {
    queryParams: EndpointGetUsersSavedTracksQueryParams;
    headers: EndpointGetUsersSavedTracksHeaders;
    security: EndpointGetUsersSavedTracksSecurity;
}
export declare class EndpointGetUsersSavedTracksResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointGetUsersSavedTracks200ApplicationJsonObject?: EndpointGetUsersSavedTracks200ApplicationJson;
}
