import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHWIRELESSRATEPLAN_SERVERS: string[];
export declare class FetchWirelessRatePlanPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchWirelessRatePlanSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWirelessRatePlanRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWirelessRatePlanPathParams;
    security: FetchWirelessRatePlanSecurity;
}
export declare class FetchWirelessRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewWirelessRatePlan?: shared.PreviewWirelessRatePlan;
}
