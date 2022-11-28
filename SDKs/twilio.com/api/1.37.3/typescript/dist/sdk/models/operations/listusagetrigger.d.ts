import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListUsageTriggerServerList: readonly ["https://api.twilio.com"];
export declare class ListUsageTriggerPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListUsageTriggerQueryParams extends SpeakeasyBase {
    pageSize?: number;
    recurring?: shared.UsageTriggerEnumRecurringEnum;
    triggerBy?: shared.UsageTriggerEnumTriggerFieldEnum;
    usageCategory?: shared.UsageTriggerEnumUsageCategoryEnum;
}
export declare class ListUsageTriggerSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListUsageTriggerListUsageTriggerResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
    usageTriggers?: shared.ApiV2010AccountUsageUsageTrigger[];
}
export declare class ListUsageTriggerRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListUsageTriggerPathParams;
    queryParams: ListUsageTriggerQueryParams;
    security: ListUsageTriggerSecurity;
}
export declare class ListUsageTriggerResponse extends SpeakeasyBase {
    contentType: string;
    listUsageTriggerResponse?: ListUsageTriggerListUsageTriggerResponse;
    statusCode: number;
}
