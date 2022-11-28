import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetFeaturedPlaylistsQueryParams extends SpeakeasyBase {
    country?: string;
    limit?: number;
    locale?: string;
    offset?: number;
    timestamp?: string;
}
export declare class EndpointGetFeaturedPlaylistsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetFeaturedPlaylistsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetFeaturedPlaylistsRequest extends SpeakeasyBase {
    queryParams: EndpointGetFeaturedPlaylistsQueryParams;
    headers: EndpointGetFeaturedPlaylistsHeaders;
    security: EndpointGetFeaturedPlaylistsSecurity;
}
export declare class EndpointGetFeaturedPlaylistsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    featuredPlaylistObject?: shared.FeaturedPlaylistObject;
    statusCode: number;
}
