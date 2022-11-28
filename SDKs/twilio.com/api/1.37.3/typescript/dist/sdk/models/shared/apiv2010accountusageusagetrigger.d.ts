import { SpeakeasyBase } from "../../../internal/utils";
import { UsageTriggerEnumRecurringEnum } from "./usagetriggerenumrecurringenum";
import { UsageTriggerEnumTriggerFieldEnum } from "./usagetriggerenumtriggerfieldenum";
import { UsageTriggerEnumUsageCategoryEnum } from "./usagetriggerenumusagecategoryenum";
export declare enum ApiV2010AccountUsageUsageTriggerCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class ApiV2010AccountUsageUsageTrigger extends SpeakeasyBase {
    accountSid?: string;
    apiVersion?: string;
    callbackMethod?: ApiV2010AccountUsageUsageTriggerCallbackMethodEnum;
    callbackUrl?: string;
    currentValue?: string;
    dateCreated?: string;
    dateFired?: string;
    dateUpdated?: string;
    friendlyName?: string;
    recurring?: UsageTriggerEnumRecurringEnum;
    sid?: string;
    triggerBy?: UsageTriggerEnumTriggerFieldEnum;
    triggerValue?: string;
    uri?: string;
    usageCategory?: UsageTriggerEnumUsageCategoryEnum;
    usageRecordUri?: string;
}
