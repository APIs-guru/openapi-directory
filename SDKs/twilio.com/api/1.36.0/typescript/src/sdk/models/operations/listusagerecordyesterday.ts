import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUSAGERECORDYESTERDAY_SERVERS = [
	"https://api.twilio.com",
];



export class ListUsageRecordYesterdayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListUsageRecordYesterdayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Category" })
  category?: shared.UsageRecordYesterdayEnumCategoryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IncludeSubaccounts" })
  includeSubaccounts?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartDate" })
  startDate?: Date;
}


export class ListUsageRecordYesterdaySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUsageRecordYesterdayRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUsageRecordYesterdayPathParams;

  @Metadata()
  queryParams: ListUsageRecordYesterdayQueryParams;

  @Metadata()
  security: ListUsageRecordYesterdaySecurity;
}


export class ListUsageRecordYesterdayListUsageRecordYesterdayResponse extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=usage_records", elemType: shared.ApiV2010AccountUsageUsageRecordUsageRecordYesterday })
  usageRecords?: shared.ApiV2010AccountUsageUsageRecordUsageRecordYesterday[];
}


export class ListUsageRecordYesterdayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUsageRecordYesterdayResponse?: ListUsageRecordYesterdayListUsageRecordYesterdayResponse;

  @Metadata()
  statusCode: number;
}
