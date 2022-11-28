import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointAddToQueueQueryParams extends SpeakeasyBase {
    deviceId?: string;
    uri: string;
}
export declare class EndpointAddToQueueHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointAddToQueueSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointAddToQueueRequest extends SpeakeasyBase {
    queryParams: EndpointAddToQueueQueryParams;
    headers: EndpointAddToQueueHeaders;
    security: EndpointAddToQueueSecurity;
}
export declare class EndpointAddToQueueResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
