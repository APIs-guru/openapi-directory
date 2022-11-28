import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointReorderOrReplacePlaylistsTracksPathParams extends SpeakeasyBase {
    playlistId: string;
}
export declare class EndpointReorderOrReplacePlaylistsTracksQueryParams extends SpeakeasyBase {
    uris?: string;
}
export declare class EndpointReorderOrReplacePlaylistsTracksHeaders extends SpeakeasyBase {
    authorization: string;
    contentType?: string;
}
export declare class EndpointReorderOrReplacePlaylistsTracksRequestBody extends SpeakeasyBase {
    insertBefore?: number;
    rangeLength?: number;
    rangeStart?: number;
    snapshotId?: string;
    uris?: string[];
}
export declare class EndpointReorderOrReplacePlaylistsTracksSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointReorderOrReplacePlaylistsTracksRequest extends SpeakeasyBase {
    pathParams: EndpointReorderOrReplacePlaylistsTracksPathParams;
    queryParams: EndpointReorderOrReplacePlaylistsTracksQueryParams;
    headers: EndpointReorderOrReplacePlaylistsTracksHeaders;
    request?: EndpointReorderOrReplacePlaylistsTracksRequestBody;
    security: EndpointReorderOrReplacePlaylistsTracksSecurity;
}
export declare class EndpointReorderOrReplacePlaylistsTracksResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    snapshotIdObject?: shared.SnapshotIdObject;
    statusCode: number;
}
