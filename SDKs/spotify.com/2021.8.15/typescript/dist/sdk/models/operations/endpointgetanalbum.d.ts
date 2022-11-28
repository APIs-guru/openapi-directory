import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetAnAlbumPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EndpointGetAnAlbumQueryParams extends SpeakeasyBase {
    market?: string;
}
export declare class EndpointGetAnAlbumHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetAnAlbumSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetAnAlbumRequest extends SpeakeasyBase {
    pathParams: EndpointGetAnAlbumPathParams;
    queryParams: EndpointGetAnAlbumQueryParams;
    headers: EndpointGetAnAlbumHeaders;
    security: EndpointGetAnAlbumSecurity;
}
export declare class EndpointGetAnAlbumResponse extends SpeakeasyBase {
    albumObject?: shared.AlbumObject;
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
