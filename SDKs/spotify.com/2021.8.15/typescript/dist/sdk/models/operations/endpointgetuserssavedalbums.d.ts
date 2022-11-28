import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetUsersSavedAlbumsQueryParams extends SpeakeasyBase {
    limit?: number;
    market?: string;
    offset?: number;
}
export declare class EndpointGetUsersSavedAlbumsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetUsersSavedAlbumsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class EndpointGetUsersSavedAlbums200ApplicationJson extends SpeakeasyBase {
    href?: string;
    items?: shared.SavedAlbumObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class EndpointGetUsersSavedAlbumsRequest extends SpeakeasyBase {
    queryParams: EndpointGetUsersSavedAlbumsQueryParams;
    headers: EndpointGetUsersSavedAlbumsHeaders;
    security: EndpointGetUsersSavedAlbumsSecurity;
}
export declare class EndpointGetUsersSavedAlbumsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointGetUsersSavedAlbums200ApplicationJsonObject?: EndpointGetUsersSavedAlbums200ApplicationJson;
}
