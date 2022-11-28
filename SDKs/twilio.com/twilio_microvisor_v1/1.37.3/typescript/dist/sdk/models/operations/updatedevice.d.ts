import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateDeviceServerList: readonly ["https://microvisor.twilio.com"];
export declare class UpdateDevicePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateDeviceUpdateDeviceRequest extends SpeakeasyBase {
    loggingEnabled?: boolean;
    targetApp?: string;
    uniqueName?: string;
}
export declare class UpdateDeviceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateDeviceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateDevicePathParams;
    request?: UpdateDeviceUpdateDeviceRequest;
    security: UpdateDeviceSecurity;
}
export declare class UpdateDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    microvisorV1Device?: shared.MicrovisorV1Device;
}
