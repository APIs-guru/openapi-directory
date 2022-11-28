import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetSeveralTracksQueryParams extends SpeakeasyBase {
    ids: string;
    market?: string;
}
export declare class EndpointGetSeveralTracksHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetSeveralTracksSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetSeveralTracksRequest extends SpeakeasyBase {
    queryParams: EndpointGetSeveralTracksQueryParams;
    headers: EndpointGetSeveralTracksHeaders;
    security: EndpointGetSeveralTracksSecurity;
}
export declare class EndpointGetSeveralTracksResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    tracksObject?: shared.TracksObject;
}
