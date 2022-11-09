import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHSUMMARY_SERVERS = [
	"https://insights.twilio.com",
];



export class FetchSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}


export class FetchSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ProcessingState" })
  processingState?: shared.SummaryEnumProcessingStateEnum;
}


export class FetchSummarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchSummaryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchSummaryPathParams;

  @Metadata()
  queryParams: FetchSummaryQueryParams;

  @Metadata()
  security: FetchSummarySecurity;
}


export class FetchSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  insightsV1CallSummary?: shared.InsightsV1CallSummary;
}
