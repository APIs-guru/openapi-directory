import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListCallSummariesServerList = [
	"https://insights.twilio.com",
] as const;


export class ListCallSummariesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AbnormalSession" })
  abnormalSession?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Branded" })
  branded?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CallState" })
  callState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CallType" })
  callType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=From" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FromCarrier" })
  fromCarrier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FromCountryCode" })
  fromCountryCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HasTag" })
  hasTag?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ProcessingState" })
  processingState?: shared.CallSummariesEnumProcessingStateRequestEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SortBy" })
  sortBy?: shared.CallSummariesEnumSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Subaccount" })
  subaccount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=To" })
  to?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ToCarrier" })
  toCarrier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ToCountryCode" })
  toCountryCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VerifiedCaller" })
  verifiedCaller?: boolean;
}


export class ListCallSummariesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCallSummariesListCallSummariesResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListCallSummariesListCallSummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_summaries", elemType: shared.InsightsV1CallSummaries })
  callSummaries?: shared.InsightsV1CallSummaries[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListCallSummariesListCallSummariesResponseMeta;
}


export class ListCallSummariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListCallSummariesQueryParams;

  @SpeakeasyMetadata()
  security: ListCallSummariesSecurity;
}


export class ListCallSummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCallSummariesResponse?: ListCallSummariesListCallSummariesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
