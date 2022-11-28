import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointRemoveEpisodesUserQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare class EndpointRemoveEpisodesUserHeaders extends SpeakeasyBase {
    authorization: string;
    contentType?: string;
}
export declare class EndpointRemoveEpisodesUserRequestBody extends SpeakeasyBase {
    ids?: string[];
}
export declare class EndpointRemoveEpisodesUserSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointRemoveEpisodesUserRequest extends SpeakeasyBase {
    queryParams: EndpointRemoveEpisodesUserQueryParams;
    headers: EndpointRemoveEpisodesUserHeaders;
    request?: EndpointRemoveEpisodesUserRequestBody;
    security: EndpointRemoveEpisodesUserSecurity;
}
export declare class EndpointRemoveEpisodesUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
