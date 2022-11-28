import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointCheckUsersSavedTracksQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare class EndpointCheckUsersSavedTracksHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointCheckUsersSavedTracksSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointCheckUsersSavedTracksRequest extends SpeakeasyBase {
    queryParams: EndpointCheckUsersSavedTracksQueryParams;
    headers: EndpointCheckUsersSavedTracksHeaders;
    security: EndpointCheckUsersSavedTracksSecurity;
}
export declare class EndpointCheckUsersSavedTracksResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointCheckUsersSavedTracks200ApplicationJsonBooleans?: boolean[];
}
