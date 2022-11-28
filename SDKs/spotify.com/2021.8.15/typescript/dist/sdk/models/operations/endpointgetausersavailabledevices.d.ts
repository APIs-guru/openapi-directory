import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetAUsersAvailableDevicesHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetAUsersAvailableDevicesSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetAUsersAvailableDevicesRequest extends SpeakeasyBase {
    headers: EndpointGetAUsersAvailableDevicesHeaders;
    security: EndpointGetAUsersAvailableDevicesSecurity;
}
export declare class EndpointGetAUsersAvailableDevicesResponse extends SpeakeasyBase {
    contentType: string;
    devicesObject?: shared.DevicesObject;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
