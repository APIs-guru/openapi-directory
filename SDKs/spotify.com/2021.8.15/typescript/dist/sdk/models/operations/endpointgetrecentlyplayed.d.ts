import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetRecentlyPlayedQueryParams extends SpeakeasyBase {
    after?: number;
    before?: number;
    limit?: number;
}
export declare class EndpointGetRecentlyPlayedHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetRecentlyPlayedSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class EndpointGetRecentlyPlayed200ApplicationJson extends SpeakeasyBase {
    cursors?: shared.CursorObject;
    href?: string;
    items?: shared.PlayHistoryObject[];
    limit?: number;
    next?: string;
    total?: number;
}
export declare class EndpointGetRecentlyPlayedRequest extends SpeakeasyBase {
    queryParams: EndpointGetRecentlyPlayedQueryParams;
    headers: EndpointGetRecentlyPlayedHeaders;
    security: EndpointGetRecentlyPlayedSecurity;
}
export declare class EndpointGetRecentlyPlayedResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointGetRecentlyPlayed200ApplicationJsonObject?: EndpointGetRecentlyPlayed200ApplicationJson;
}
