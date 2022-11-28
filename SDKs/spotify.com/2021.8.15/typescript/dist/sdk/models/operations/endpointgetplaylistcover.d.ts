import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetPlaylistCoverPathParams extends SpeakeasyBase {
    playlistId: string;
}
export declare class EndpointGetPlaylistCoverHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetPlaylistCoverSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetPlaylistCoverRequest extends SpeakeasyBase {
    pathParams: EndpointGetPlaylistCoverPathParams;
    headers: EndpointGetPlaylistCoverHeaders;
    security: EndpointGetPlaylistCoverSecurity;
}
export declare class EndpointGetPlaylistCoverResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    imageObjects?: shared.ImageObject[];
    statusCode: number;
}
