import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUSAGERECORDMONTHLY_SERVERS = [
	"https://api.twilio.com",
];



export class ListUsageRecordMonthlyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListUsageRecordMonthlyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Category" })
  category?: shared.UsageRecordMonthlyEnumCategoryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IncludeSubaccounts" })
  includeSubaccounts?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;
}


export class ListUsageRecordMonthlySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUsageRecordMonthlyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUsageRecordMonthlyPathParams;

  @Metadata()
  queryParams: ListUsageRecordMonthlyQueryParams;

  @Metadata()
  security: ListUsageRecordMonthlySecurity;
}


export class ListUsageRecordMonthlyListUsageRecordMonthlyResponse extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=usage_records", elemType: shared.ApiV2010AccountUsageUsageRecordUsageRecordMonthly })
  usageRecords?: shared.ApiV2010AccountUsageUsageRecordUsageRecordMonthly[];
}


export class ListUsageRecordMonthlyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUsageRecordMonthlyResponse?: ListUsageRecordMonthlyListUsageRecordMonthlyResponse;

  @Metadata()
  statusCode: number;
}
