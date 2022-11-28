import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointFollowArtistsUsersQueryParams extends SpeakeasyBase {
    ids: string;
    type: string;
}
export declare class EndpointFollowArtistsUsersHeaders extends SpeakeasyBase {
    authorization: string;
    contentType?: string;
}
export declare class EndpointFollowArtistsUsersRequestBody extends SpeakeasyBase {
    ids: string[];
}
export declare class EndpointFollowArtistsUsersSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointFollowArtistsUsersRequest extends SpeakeasyBase {
    queryParams: EndpointFollowArtistsUsersQueryParams;
    headers: EndpointFollowArtistsUsersHeaders;
    request: EndpointFollowArtistsUsersRequestBody;
    security: EndpointFollowArtistsUsersSecurity;
}
export declare class EndpointFollowArtistsUsersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
