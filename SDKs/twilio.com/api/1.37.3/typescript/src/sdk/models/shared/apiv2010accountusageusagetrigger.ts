import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageTriggerEnumRecurringEnum } from "./usagetriggerenumrecurringenum";
import { UsageTriggerEnumTriggerFieldEnum } from "./usagetriggerenumtriggerfieldenum";
import { UsageTriggerEnumUsageCategoryEnum } from "./usagetriggerenumusagecategoryenum";


export enum ApiV2010AccountUsageUsageTriggerCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class ApiV2010AccountUsageUsageTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=callback_method" })
  callbackMethod?: ApiV2010AccountUsageUsageTriggerCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=current_value" })
  currentValue?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_fired" })
  dateFired?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=recurring" })
  recurring?: UsageTriggerEnumRecurringEnum;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger_by" })
  triggerBy?: UsageTriggerEnumTriggerFieldEnum;

  @SpeakeasyMetadata({ data: "json, name=trigger_value" })
  triggerValue?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=usage_category" })
  usageCategory?: UsageTriggerEnumUsageCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=usage_record_uri" })
  usageRecordUri?: string;
}
