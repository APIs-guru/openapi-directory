import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointAddTracksToPlaylistPathParams extends SpeakeasyBase {
    playlistId: string;
}
export declare class EndpointAddTracksToPlaylistQueryParams extends SpeakeasyBase {
    position?: number;
    uris?: string;
}
export declare class EndpointAddTracksToPlaylistHeaders extends SpeakeasyBase {
    authorization: string;
    contentType: string;
}
export declare class EndpointAddTracksToPlaylistRequestBody extends SpeakeasyBase {
    position?: number;
    uris?: string[];
}
export declare class EndpointAddTracksToPlaylistSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointAddTracksToPlaylistRequest extends SpeakeasyBase {
    pathParams: EndpointAddTracksToPlaylistPathParams;
    queryParams: EndpointAddTracksToPlaylistQueryParams;
    headers: EndpointAddTracksToPlaylistHeaders;
    request?: EndpointAddTracksToPlaylistRequestBody;
    security: EndpointAddTracksToPlaylistSecurity;
}
export declare class EndpointAddTracksToPlaylistResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    snapshotIdObject?: shared.SnapshotIdObject;
    statusCode: number;
}
