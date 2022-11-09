import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHUSAGETRIGGER_SERVERS: string[];
export declare class FetchUsageTriggerPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchUsageTriggerSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchUsageTriggerRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchUsageTriggerPathParams;
    security: FetchUsageTriggerSecurity;
}
export declare class FetchUsageTriggerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountUsageUsageTrigger?: shared.ApiV2010AccountUsageUsageTrigger;
}
