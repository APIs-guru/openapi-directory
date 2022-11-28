import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointSaveAlbumsUserQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare class EndpointSaveAlbumsUserHeaders extends SpeakeasyBase {
    authorization: string;
    contentType?: string;
}
export declare class EndpointSaveAlbumsUserRequestBody extends SpeakeasyBase {
    ids?: string[];
}
export declare class EndpointSaveAlbumsUserSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointSaveAlbumsUserRequest extends SpeakeasyBase {
    queryParams: EndpointSaveAlbumsUserQueryParams;
    headers: EndpointSaveAlbumsUserHeaders;
    request?: EndpointSaveAlbumsUserRequestBody;
    security: EndpointSaveAlbumsUserSecurity;
}
export declare class EndpointSaveAlbumsUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
