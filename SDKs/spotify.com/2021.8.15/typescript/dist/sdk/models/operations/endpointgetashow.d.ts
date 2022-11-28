import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetAShowPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EndpointGetAShowQueryParams extends SpeakeasyBase {
    market?: string;
}
export declare class EndpointGetAShowHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetAShowSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetAShowRequest extends SpeakeasyBase {
    pathParams: EndpointGetAShowPathParams;
    queryParams: EndpointGetAShowQueryParams;
    headers: EndpointGetAShowHeaders;
    security: EndpointGetAShowSecurity;
}
export declare class EndpointGetAShowResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    showObject?: shared.ShowObject;
    statusCode: number;
}
