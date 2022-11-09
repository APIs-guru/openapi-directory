import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCALLSUMMARIES_SERVERS = [
	"https://insights.twilio.com",
];



export class ListCallSummariesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=AbnormalSession" })
  abnormalSession?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Branded" })
  branded?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CallState" })
  callState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CallType" })
  callType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Direction" })
  direction?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=From" })
  from?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FromCarrier" })
  fromCarrier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=FromCountryCode" })
  fromCountryCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HasTag" })
  hasTag?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ProcessingState" })
  processingState?: shared.CallSummariesEnumProcessingStateRequestEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SortBy" })
  sortBy?: shared.CallSummariesEnumSortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Subaccount" })
  subaccount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=To" })
  to?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ToCarrier" })
  toCarrier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ToCountryCode" })
  toCountryCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VerifiedCaller" })
  verifiedCaller?: boolean;
}


export class ListCallSummariesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCallSummariesRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListCallSummariesQueryParams;

  @Metadata()
  security: ListCallSummariesSecurity;
}


export class ListCallSummariesListCallSummariesResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListCallSummariesListCallSummariesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=call_summaries", elemType: shared.InsightsV1CallSummaries })
  callSummaries?: shared.InsightsV1CallSummaries[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListCallSummariesListCallSummariesResponseMeta;
}


export class ListCallSummariesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCallSummariesResponse?: ListCallSummariesListCallSummariesResponse;

  @Metadata()
  statusCode: number;
}
