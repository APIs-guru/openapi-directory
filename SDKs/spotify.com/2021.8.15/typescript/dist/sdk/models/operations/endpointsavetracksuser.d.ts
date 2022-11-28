import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointSaveTracksUserQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare class EndpointSaveTracksUserHeaders extends SpeakeasyBase {
    authorization: string;
    contentType?: string;
}
export declare class EndpointSaveTracksUserRequestBody extends SpeakeasyBase {
    ids?: string[];
}
export declare class EndpointSaveTracksUserSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointSaveTracksUserRequest extends SpeakeasyBase {
    queryParams: EndpointSaveTracksUserQueryParams;
    headers: EndpointSaveTracksUserHeaders;
    request?: EndpointSaveTracksUserRequestBody;
    security: EndpointSaveTracksUserSecurity;
}
export declare class EndpointSaveTracksUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
