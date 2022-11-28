import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateWirelessRatePlanServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateWirelessRatePlanPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateWirelessRatePlanUpdateWirelessRatePlanRequest extends SpeakeasyBase {
    friendlyName?: string;
    uniqueName?: string;
}
export declare class UpdateWirelessRatePlanSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateWirelessRatePlanRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateWirelessRatePlanPathParams;
    request?: UpdateWirelessRatePlanUpdateWirelessRatePlanRequest;
    security: UpdateWirelessRatePlanSecurity;
}
export declare class UpdateWirelessRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewWirelessRatePlan?: shared.PreviewWirelessRatePlan;
}
