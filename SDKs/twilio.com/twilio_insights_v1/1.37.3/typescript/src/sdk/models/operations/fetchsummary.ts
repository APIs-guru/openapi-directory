import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchSummaryServerList = [
	"https://insights.twilio.com",
] as const;


export class FetchSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}


export class FetchSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ProcessingState" })
  processingState?: shared.SummaryEnumProcessingStateEnum;
}


export class FetchSummarySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchSummaryPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchSummaryQueryParams;

  @SpeakeasyMetadata()
  security: FetchSummarySecurity;
}


export class FetchSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  insightsV1CallSummary?: shared.InsightsV1CallSummary;
}
