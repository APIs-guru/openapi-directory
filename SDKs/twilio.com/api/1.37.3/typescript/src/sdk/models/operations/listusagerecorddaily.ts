import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListUsageRecordDailyServerList = [
	"https://api.twilio.com",
] as const;


export class ListUsageRecordDailyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListUsageRecordDailyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Category" })
  category?: shared.UsageRecordDailyEnumCategoryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncludeSubaccounts" })
  includeSubaccounts?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;
}


export class ListUsageRecordDailySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUsageRecordDailyListUsageRecordDailyResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=usage_records", elemType: shared.ApiV2010AccountUsageUsageRecordUsageRecordDaily })
  usageRecords?: shared.ApiV2010AccountUsageUsageRecordUsageRecordDaily[];
}


export class ListUsageRecordDailyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListUsageRecordDailyPathParams;

  @SpeakeasyMetadata()
  queryParams: ListUsageRecordDailyQueryParams;

  @SpeakeasyMetadata()
  security: ListUsageRecordDailySecurity;
}


export class ListUsageRecordDailyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listUsageRecordDailyResponse?: ListUsageRecordDailyListUsageRecordDailyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
