import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointCheckUsersSavedAlbumsQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare class EndpointCheckUsersSavedAlbumsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointCheckUsersSavedAlbumsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointCheckUsersSavedAlbumsRequest extends SpeakeasyBase {
    queryParams: EndpointCheckUsersSavedAlbumsQueryParams;
    headers: EndpointCheckUsersSavedAlbumsHeaders;
    security: EndpointCheckUsersSavedAlbumsSecurity;
}
export declare class EndpointCheckUsersSavedAlbumsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointCheckUsersSavedAlbums200ApplicationJsonBooleans?: boolean[];
}
