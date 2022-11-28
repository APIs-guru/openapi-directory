import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateUsageTriggerServerList: readonly ["https://api.twilio.com"];
export declare class CreateUsageTriggerPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare enum CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateUsageTriggerCreateUsageTriggerRequest extends SpeakeasyBase {
    callbackMethod?: CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum;
    callbackUrl: string;
    friendlyName?: string;
    recurring?: shared.UsageTriggerEnumRecurringEnum;
    triggerBy?: shared.UsageTriggerEnumTriggerFieldEnum;
    triggerValue: string;
    usageCategory: shared.UsageTriggerEnumUsageCategoryEnum;
}
export declare class CreateUsageTriggerSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateUsageTriggerRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateUsageTriggerPathParams;
    request?: CreateUsageTriggerCreateUsageTriggerRequest;
    security: CreateUsageTriggerSecurity;
}
export declare class CreateUsageTriggerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountUsageUsageTrigger?: shared.ApiV2010AccountUsageUsageTrigger;
}
