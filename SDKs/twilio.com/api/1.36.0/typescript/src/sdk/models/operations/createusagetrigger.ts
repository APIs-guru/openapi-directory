import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEUSAGETRIGGER_SERVERS = [
	"https://api.twilio.com",
];



export class CreateUsageTriggerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateUsageTriggerCreateUsageTriggerRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum;

  @Metadata({ data: "form, name=CallbackUrl;" })
  callbackUrl: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=Recurring;" })
  recurring?: shared.UsageTriggerEnumRecurringEnum;

  @Metadata({ data: "form, name=TriggerBy;" })
  triggerBy?: shared.UsageTriggerEnumTriggerFieldEnum;

  @Metadata({ data: "form, name=TriggerValue;" })
  triggerValue: string;

  @Metadata({ data: "form, name=UsageCategory;" })
  usageCategory: shared.UsageTriggerEnumUsageCategoryEnum;
}


export class CreateUsageTriggerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUsageTriggerRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateUsageTriggerPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUsageTriggerCreateUsageTriggerRequest;

  @Metadata()
  security: CreateUsageTriggerSecurity;
}


export class CreateUsageTriggerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountUsageUsageTrigger?: shared.ApiV2010AccountUsageUsageTrigger;
}
