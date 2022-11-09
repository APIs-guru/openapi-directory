import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEWIRELESSRATEPLAN_SERVERS: string[];
export declare class CreateWirelessRatePlanCreateWirelessRatePlanRequest extends SpeakeasyBase {
    commandsEnabled?: boolean;
    dataEnabled?: boolean;
    dataLimit?: number;
    dataMetering?: string;
    friendlyName?: string;
    internationalRoaming?: string[];
    messagingEnabled?: boolean;
    nationalRoamingEnabled?: boolean;
    uniqueName?: string;
    voiceEnabled?: boolean;
}
export declare class CreateWirelessRatePlanSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateWirelessRatePlanRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateWirelessRatePlanCreateWirelessRatePlanRequest;
    security: CreateWirelessRatePlanSecurity;
}
export declare class CreateWirelessRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewWirelessRatePlan?: shared.PreviewWirelessRatePlan;
}
