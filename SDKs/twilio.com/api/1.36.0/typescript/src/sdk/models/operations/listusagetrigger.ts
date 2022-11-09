import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUSAGETRIGGER_SERVERS = [
	"https://api.twilio.com",
];



export class ListUsageTriggerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListUsageTriggerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Recurring" })
  recurring?: shared.UsageTriggerEnumRecurringEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TriggerBy" })
  triggerBy?: shared.UsageTriggerEnumTriggerFieldEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=UsageCategory" })
  usageCategory?: shared.UsageTriggerEnumUsageCategoryEnum;
}


export class ListUsageTriggerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUsageTriggerRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUsageTriggerPathParams;

  @Metadata()
  queryParams: ListUsageTriggerQueryParams;

  @Metadata()
  security: ListUsageTriggerSecurity;
}


export class ListUsageTriggerListUsageTriggerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @Metadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=usage_triggers", elemType: shared.ApiV2010AccountUsageUsageTrigger })
  usageTriggers?: shared.ApiV2010AccountUsageUsageTrigger[];
}


export class ListUsageTriggerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUsageTriggerResponse?: ListUsageTriggerListUsageTriggerResponse;

  @Metadata()
  statusCode: number;
}
