import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateRatePlanServerList: readonly ["https://wireless.twilio.com"];
export declare class CreateRatePlanCreateRatePlanRequest extends SpeakeasyBase {
    dataEnabled?: boolean;
    dataLimit?: number;
    dataMetering?: string;
    friendlyName?: string;
    internationalRoaming?: string[];
    internationalRoamingDataLimit?: number;
    messagingEnabled?: boolean;
    nationalRoamingDataLimit?: number;
    nationalRoamingEnabled?: boolean;
    uniqueName?: string;
    voiceEnabled?: boolean;
}
export declare class CreateRatePlanSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateRatePlanRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateRatePlanCreateRatePlanRequest;
    security: CreateRatePlanSecurity;
}
export declare class CreateRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wirelessV1RatePlan?: shared.WirelessV1RatePlan;
}
