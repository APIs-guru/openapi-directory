import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointSaveShowsUserQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare class EndpointSaveShowsUserHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointSaveShowsUserRequestBody extends SpeakeasyBase {
    ids?: string[];
}
export declare class EndpointSaveShowsUserSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointSaveShowsUserRequest extends SpeakeasyBase {
    queryParams: EndpointSaveShowsUserQueryParams;
    headers: EndpointSaveShowsUserHeaders;
    request?: EndpointSaveShowsUserRequestBody;
    security: EndpointSaveShowsUserSecurity;
}
export declare class EndpointSaveShowsUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
