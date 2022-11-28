import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchUnderstandTaskStatisticsServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchUnderstandTaskStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class FetchUnderstandTaskStatisticsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchUnderstandTaskStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchUnderstandTaskStatisticsPathParams;

  @SpeakeasyMetadata()
  security: FetchUnderstandTaskStatisticsSecurity;
}


export class FetchUnderstandTaskStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistantTaskTaskStatistics?: shared.PreviewUnderstandAssistantTaskTaskStatistics;
}
