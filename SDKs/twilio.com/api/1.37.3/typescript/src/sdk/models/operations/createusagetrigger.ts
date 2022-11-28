import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateUsageTriggerServerList = [
	"https://api.twilio.com",
] as const;


export class CreateUsageTriggerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateUsageTriggerCreateUsageTriggerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=CallbackUrl;" })
  callbackUrl: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Recurring;" })
  recurring?: shared.UsageTriggerEnumRecurringEnum;

  @SpeakeasyMetadata({ data: "form, name=TriggerBy;" })
  triggerBy?: shared.UsageTriggerEnumTriggerFieldEnum;

  @SpeakeasyMetadata({ data: "form, name=TriggerValue;" })
  triggerValue: string;

  @SpeakeasyMetadata({ data: "form, name=UsageCategory;" })
  usageCategory: shared.UsageTriggerEnumUsageCategoryEnum;
}


export class CreateUsageTriggerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUsageTriggerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateUsageTriggerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUsageTriggerCreateUsageTriggerRequest;

  @SpeakeasyMetadata()
  security: CreateUsageTriggerSecurity;
}


export class CreateUsageTriggerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountUsageUsageTrigger?: shared.ApiV2010AccountUsageUsageTrigger;
}
