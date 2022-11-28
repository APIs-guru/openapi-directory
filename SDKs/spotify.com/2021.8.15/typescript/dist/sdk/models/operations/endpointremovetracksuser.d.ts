import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointRemoveTracksUserQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare class EndpointRemoveTracksUserHeaders extends SpeakeasyBase {
    authorization: string;
    contentType?: string;
}
export declare class EndpointRemoveTracksUserRequestBody extends SpeakeasyBase {
    ids?: string[];
}
export declare class EndpointRemoveTracksUserSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointRemoveTracksUserRequest extends SpeakeasyBase {
    queryParams: EndpointRemoveTracksUserQueryParams;
    headers: EndpointRemoveTracksUserHeaders;
    request?: EndpointRemoveTracksUserRequestBody;
    security: EndpointRemoveTracksUserSecurity;
}
export declare class EndpointRemoveTracksUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
