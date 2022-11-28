import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetFollowedQueryParams extends SpeakeasyBase {
    after?: string;
    limit?: number;
    type: string;
}
export declare class EndpointGetFollowedHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetFollowedSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetFollowedRequest extends SpeakeasyBase {
    queryParams: EndpointGetFollowedQueryParams;
    headers: EndpointGetFollowedHeaders;
    security: EndpointGetFollowedSecurity;
}
export declare class EndpointGetFollowedResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    followingArtistsObject?: shared.FollowingArtistsObject;
    statusCode: number;
}
