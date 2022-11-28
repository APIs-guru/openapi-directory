import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointUploadCustomPlaylistCoverPathParams extends SpeakeasyBase {
    playlistId: string;
}
export declare class EndpointUploadCustomPlaylistCoverHeaders extends SpeakeasyBase {
    authorization: string;
    contentType: string;
}
export declare class EndpointUploadCustomPlaylistCoverSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointUploadCustomPlaylistCoverRequest extends SpeakeasyBase {
    pathParams: EndpointUploadCustomPlaylistCoverPathParams;
    headers: EndpointUploadCustomPlaylistCoverHeaders;
    request: string;
    security: EndpointUploadCustomPlaylistCoverSecurity;
}
export declare class EndpointUploadCustomPlaylistCoverResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
