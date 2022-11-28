import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetUsersTopArtistsAndTracksPathParams extends SpeakeasyBase {
    type: string;
}
export declare class EndpointGetUsersTopArtistsAndTracksQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    timeRange?: string;
}
export declare class EndpointGetUsersTopArtistsAndTracksHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetUsersTopArtistsAndTracksSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class EndpointGetUsersTopArtistsAndTracks200ApplicationJson extends SpeakeasyBase {
    href?: string;
    items?: any[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class EndpointGetUsersTopArtistsAndTracksRequest extends SpeakeasyBase {
    pathParams: EndpointGetUsersTopArtistsAndTracksPathParams;
    queryParams: EndpointGetUsersTopArtistsAndTracksQueryParams;
    headers: EndpointGetUsersTopArtistsAndTracksHeaders;
    security: EndpointGetUsersTopArtistsAndTracksSecurity;
}
export declare class EndpointGetUsersTopArtistsAndTracksResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointGetUsersTopArtistsAndTracks200ApplicationJsonObject?: EndpointGetUsersTopArtistsAndTracks200ApplicationJson;
}
