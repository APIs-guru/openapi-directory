import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointUnfollowArtistsUsersQueryParams extends SpeakeasyBase {
    ids: string;
    type: string;
}
export declare class EndpointUnfollowArtistsUsersHeaders extends SpeakeasyBase {
    authorization: string;
    contentType?: string;
}
export declare class EndpointUnfollowArtistsUsersRequestBody extends SpeakeasyBase {
    ids?: string[];
}
export declare class EndpointUnfollowArtistsUsersSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointUnfollowArtistsUsersRequest extends SpeakeasyBase {
    queryParams: EndpointUnfollowArtistsUsersQueryParams;
    headers: EndpointUnfollowArtistsUsersHeaders;
    request?: EndpointUnfollowArtistsUsersRequestBody;
    security: EndpointUnfollowArtistsUsersSecurity;
}
export declare class EndpointUnfollowArtistsUsersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
