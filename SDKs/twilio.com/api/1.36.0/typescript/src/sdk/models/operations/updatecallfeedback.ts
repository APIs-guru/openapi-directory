import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECALLFEEDBACK_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateCallFeedbackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}


export class UpdateCallFeedbackUpdateCallFeedbackRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Issue;" })
  issue?: shared.CallFeedbackEnumIssuesEnum[];

  @Metadata({ data: "form, name=QualityScore;" })
  qualityScore?: number;
}


export class UpdateCallFeedbackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateCallFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateCallFeedbackPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateCallFeedbackUpdateCallFeedbackRequest;

  @Metadata()
  security: UpdateCallFeedbackSecurity;
}


export class UpdateCallFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountCallCallFeedback?: shared.ApiV2010AccountCallCallFeedback;
}
