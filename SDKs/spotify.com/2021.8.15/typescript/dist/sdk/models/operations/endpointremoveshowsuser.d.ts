import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointRemoveShowsUserQueryParams extends SpeakeasyBase {
    ids: string;
    market?: string;
}
export declare class EndpointRemoveShowsUserHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointRemoveShowsUserRequestBody extends SpeakeasyBase {
    ids?: string[];
}
export declare class EndpointRemoveShowsUserSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointRemoveShowsUserRequest extends SpeakeasyBase {
    queryParams: EndpointRemoveShowsUserQueryParams;
    headers: EndpointRemoveShowsUserHeaders;
    request?: EndpointRemoveShowsUserRequestBody;
    security: EndpointRemoveShowsUserSecurity;
}
export declare class EndpointRemoveShowsUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
