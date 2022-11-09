import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHDEVICE_SERVERS: string[];
export declare class FetchDevicePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchDeviceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchDeviceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchDevicePathParams;
    security: FetchDeviceSecurity;
}
export declare class FetchDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    microvisorV1Device?: shared.MicrovisorV1Device;
}
