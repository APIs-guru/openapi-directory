import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointSaveEpisodesUserQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare class EndpointSaveEpisodesUserHeaders extends SpeakeasyBase {
    authorization: string;
    contentType?: string;
}
export declare class EndpointSaveEpisodesUserRequestBody extends SpeakeasyBase {
    ids?: string[];
}
export declare class EndpointSaveEpisodesUserSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointSaveEpisodesUserRequest extends SpeakeasyBase {
    queryParams: EndpointSaveEpisodesUserQueryParams;
    headers: EndpointSaveEpisodesUserHeaders;
    request?: EndpointSaveEpisodesUserRequestBody;
    security: EndpointSaveEpisodesUserSecurity;
}
export declare class EndpointSaveEpisodesUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
