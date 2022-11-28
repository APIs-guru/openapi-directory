import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetACategoriesPlaylistsPathParams extends SpeakeasyBase {
    categoryId: string;
}
export declare class EndpointGetACategoriesPlaylistsQueryParams extends SpeakeasyBase {
    country?: string;
    limit?: number;
    offset?: number;
}
export declare class EndpointGetACategoriesPlaylistsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetACategoriesPlaylistsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetACategoriesPlaylistsRequest extends SpeakeasyBase {
    pathParams: EndpointGetACategoriesPlaylistsPathParams;
    queryParams: EndpointGetACategoriesPlaylistsQueryParams;
    headers: EndpointGetACategoriesPlaylistsHeaders;
    security: EndpointGetACategoriesPlaylistsSecurity;
}
export declare class EndpointGetACategoriesPlaylistsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    playlistPagingObject?: shared.PlaylistPagingObject;
    statusCode: number;
}
