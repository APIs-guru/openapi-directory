import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointRemoveAlbumsUserQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare class EndpointRemoveAlbumsUserHeaders extends SpeakeasyBase {
    authorization: string;
    contentType?: string;
}
export declare class EndpointRemoveAlbumsUserRequestBody extends SpeakeasyBase {
    ids?: string[];
}
export declare class EndpointRemoveAlbumsUserSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointRemoveAlbumsUserRequest extends SpeakeasyBase {
    queryParams: EndpointRemoveAlbumsUserQueryParams;
    headers: EndpointRemoveAlbumsUserHeaders;
    request?: EndpointRemoveAlbumsUserRequestBody;
    security: EndpointRemoveAlbumsUserSecurity;
}
export declare class EndpointRemoveAlbumsUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
