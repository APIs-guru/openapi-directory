import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListUsageRecordMonthlyServerList = [
	"https://api.twilio.com",
] as const;


export class ListUsageRecordMonthlyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListUsageRecordMonthlyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Category" })
  category?: shared.UsageRecordMonthlyEnumCategoryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IncludeSubaccounts" })
  includeSubaccounts?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;
}


export class ListUsageRecordMonthlySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUsageRecordMonthlyListUsageRecordMonthlyResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=usage_records", elemType: shared.ApiV2010AccountUsageUsageRecordUsageRecordMonthly })
  usageRecords?: shared.ApiV2010AccountUsageUsageRecordUsageRecordMonthly[];
}


export class ListUsageRecordMonthlyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListUsageRecordMonthlyPathParams;

  @SpeakeasyMetadata()
  queryParams: ListUsageRecordMonthlyQueryParams;

  @SpeakeasyMetadata()
  security: ListUsageRecordMonthlySecurity;
}


export class ListUsageRecordMonthlyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listUsageRecordMonthlyResponse?: ListUsageRecordMonthlyListUsageRecordMonthlyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
