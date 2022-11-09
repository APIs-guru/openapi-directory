import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHCALLFEEDBACK_SERVERS = [
	"https://api.twilio.com",
];



export class FetchCallFeedbackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}


export class FetchCallFeedbackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchCallFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchCallFeedbackPathParams;

  @Metadata()
  security: FetchCallFeedbackSecurity;
}


export class FetchCallFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountCallCallFeedback?: shared.ApiV2010AccountCallCallFeedback;
}
