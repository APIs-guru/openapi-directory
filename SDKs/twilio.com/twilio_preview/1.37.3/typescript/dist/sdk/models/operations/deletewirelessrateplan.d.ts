import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteWirelessRatePlanServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteWirelessRatePlanPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteWirelessRatePlanSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteWirelessRatePlanRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteWirelessRatePlanPathParams;
    security: DeleteWirelessRatePlanSecurity;
}
export declare class DeleteWirelessRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
