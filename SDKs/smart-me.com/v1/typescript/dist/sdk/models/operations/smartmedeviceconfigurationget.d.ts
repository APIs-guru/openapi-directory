import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SmartMeDeviceConfigurationGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class SmartMeDeviceConfigurationGetRequest extends SpeakeasyBase {
    pathParams: SmartMeDeviceConfigurationGetPathParams;
}
export declare class SmartMeDeviceConfigurationGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    smartMeDeviceConfigurationContainer?: shared.SmartMeDeviceConfigurationContainer;
    statusCode: number;
}
