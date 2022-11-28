import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointRemoveTracksPlaylistPathParams extends SpeakeasyBase {
    playlistId: string;
}
export declare class EndpointRemoveTracksPlaylistHeaders extends SpeakeasyBase {
    authorization: string;
    contentType: string;
}
export declare class EndpointRemoveTracksPlaylistRequestBody extends SpeakeasyBase {
    snapshotId?: string;
    tracks: string[];
}
export declare class EndpointRemoveTracksPlaylistSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointRemoveTracksPlaylistRequest extends SpeakeasyBase {
    pathParams: EndpointRemoveTracksPlaylistPathParams;
    headers: EndpointRemoveTracksPlaylistHeaders;
    request: EndpointRemoveTracksPlaylistRequestBody;
    security: EndpointRemoveTracksPlaylistSecurity;
}
export declare class EndpointRemoveTracksPlaylistResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    snapshotIdObject?: shared.SnapshotIdObject;
    statusCode: number;
}
