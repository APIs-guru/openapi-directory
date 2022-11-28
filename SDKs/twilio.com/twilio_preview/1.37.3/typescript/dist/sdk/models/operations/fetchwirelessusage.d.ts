import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchWirelessUsageServerList: readonly ["https://preview.twilio.com"];
export declare class FetchWirelessUsagePathParams extends SpeakeasyBase {
    simSid: string;
}
export declare class FetchWirelessUsageQueryParams extends SpeakeasyBase {
    end?: string;
    start?: string;
}
export declare class FetchWirelessUsageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWirelessUsageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWirelessUsagePathParams;
    queryParams: FetchWirelessUsageQueryParams;
    security: FetchWirelessUsageSecurity;
}
export declare class FetchWirelessUsageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewWirelessSimUsage?: shared.PreviewWirelessSimUsage;
}
