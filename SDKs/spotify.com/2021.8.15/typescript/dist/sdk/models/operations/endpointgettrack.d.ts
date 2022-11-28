import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetTrackPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EndpointGetTrackQueryParams extends SpeakeasyBase {
    market?: string;
}
export declare class EndpointGetTrackHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetTrackSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetTrackRequest extends SpeakeasyBase {
    pathParams: EndpointGetTrackPathParams;
    queryParams: EndpointGetTrackQueryParams;
    headers: EndpointGetTrackHeaders;
    security: EndpointGetTrackSecurity;
}
export declare class EndpointGetTrackResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    trackObject?: shared.TrackObject;
}
