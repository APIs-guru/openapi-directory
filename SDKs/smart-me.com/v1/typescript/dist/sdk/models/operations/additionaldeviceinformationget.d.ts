import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdditionalDeviceInformationGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AdditionalDeviceInformationGetRequest extends SpeakeasyBase {
    pathParams: AdditionalDeviceInformationGetPathParams;
}
export declare class AdditionalDeviceInformationGetResponse extends SpeakeasyBase {
    additionalDeviceInformation?: shared.AdditionalDeviceInformation;
    contentType: string;
    statusCode: number;
}
