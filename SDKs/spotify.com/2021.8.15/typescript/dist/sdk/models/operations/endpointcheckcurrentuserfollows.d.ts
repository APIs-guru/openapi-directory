import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointCheckCurrentUserFollowsQueryParams extends SpeakeasyBase {
    ids: string;
    type: string;
}
export declare class EndpointCheckCurrentUserFollowsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointCheckCurrentUserFollowsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointCheckCurrentUserFollowsRequest extends SpeakeasyBase {
    queryParams: EndpointCheckCurrentUserFollowsQueryParams;
    headers: EndpointCheckCurrentUserFollowsHeaders;
    security: EndpointCheckCurrentUserFollowsSecurity;
}
export declare class EndpointCheckCurrentUserFollowsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointCheckCurrentUserFollows200ApplicationJsonBooleans?: boolean[];
}
