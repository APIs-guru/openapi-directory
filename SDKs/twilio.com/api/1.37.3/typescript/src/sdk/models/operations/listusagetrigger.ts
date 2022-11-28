import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListUsageTriggerServerList = [
	"https://api.twilio.com",
] as const;


export class ListUsageTriggerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListUsageTriggerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Recurring" })
  recurring?: shared.UsageTriggerEnumRecurringEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TriggerBy" })
  triggerBy?: shared.UsageTriggerEnumTriggerFieldEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=UsageCategory" })
  usageCategory?: shared.UsageTriggerEnumUsageCategoryEnum;
}


export class ListUsageTriggerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUsageTriggerListUsageTriggerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=usage_triggers", elemType: shared.ApiV2010AccountUsageUsageTrigger })
  usageTriggers?: shared.ApiV2010AccountUsageUsageTrigger[];
}


export class ListUsageTriggerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListUsageTriggerPathParams;

  @SpeakeasyMetadata()
  queryParams: ListUsageTriggerQueryParams;

  @SpeakeasyMetadata()
  security: ListUsageTriggerSecurity;
}


export class ListUsageTriggerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listUsageTriggerResponse?: ListUsageTriggerListUsageTriggerResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
