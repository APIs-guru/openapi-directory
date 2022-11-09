import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UsageTriggerEnumRecurringEnum } from "./usagetriggerenumrecurringenum";
import { UsageTriggerEnumTriggerFieldEnum } from "./usagetriggerenumtriggerfieldenum";
import { UsageTriggerEnumUsageCategoryEnum } from "./usagetriggerenumusagecategoryenum";

export enum ApiV2010AccountUsageUsageTriggerCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class ApiV2010AccountUsageUsageTrigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=callback_method" })
  callbackMethod?: ApiV2010AccountUsageUsageTriggerCallbackMethodEnum;

  @Metadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @Metadata({ data: "json, name=current_value" })
  currentValue?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_fired" })
  dateFired?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=recurring" })
  recurring?: UsageTriggerEnumRecurringEnum;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=trigger_by" })
  triggerBy?: UsageTriggerEnumTriggerFieldEnum;

  @Metadata({ data: "json, name=trigger_value" })
  triggerValue?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=usage_category" })
  usageCategory?: UsageTriggerEnumUsageCategoryEnum;

  @Metadata({ data: "json, name=usage_record_uri" })
  usageRecordUri?: string;
}
