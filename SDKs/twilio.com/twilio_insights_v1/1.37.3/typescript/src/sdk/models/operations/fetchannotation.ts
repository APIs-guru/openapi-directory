import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchAnnotationServerList = [
	"https://insights.twilio.com",
] as const;


export class FetchAnnotationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}


export class FetchAnnotationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchAnnotationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchAnnotationPathParams;

  @SpeakeasyMetadata()
  security: FetchAnnotationSecurity;
}


export class FetchAnnotationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  insightsV1CallAnnotation?: shared.InsightsV1CallAnnotation;
}
