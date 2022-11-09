import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEMESSAGEFEEDBACK_SERVERS = [
	"https://api.twilio.com",
];



export class CreateMessageFeedbackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=MessageSid" })
  messageSid: string;
}


export class CreateMessageFeedbackCreateMessageFeedbackRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Outcome;" })
  outcome?: shared.MessageFeedbackEnumOutcomeEnum;
}


export class CreateMessageFeedbackSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateMessageFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateMessageFeedbackPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateMessageFeedbackCreateMessageFeedbackRequest;

  @Metadata()
  security: CreateMessageFeedbackSecurity;
}


export class CreateMessageFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountMessageMessageFeedback?: shared.ApiV2010AccountMessageMessageFeedback;
}
