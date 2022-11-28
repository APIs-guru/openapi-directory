import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetMultipleAlbumsQueryParams extends SpeakeasyBase {
    ids: string;
    market?: string;
}
export declare class EndpointGetMultipleAlbumsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetMultipleAlbumsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetMultipleAlbumsRequest extends SpeakeasyBase {
    queryParams: EndpointGetMultipleAlbumsQueryParams;
    headers: EndpointGetMultipleAlbumsHeaders;
    security: EndpointGetMultipleAlbumsSecurity;
}
export declare class EndpointGetMultipleAlbumsResponse extends SpeakeasyBase {
    albumsObject?: shared.AlbumsObject;
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
