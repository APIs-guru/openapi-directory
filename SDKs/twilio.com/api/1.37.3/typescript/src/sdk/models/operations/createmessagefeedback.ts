import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateMessageFeedbackServerList = [
	"https://api.twilio.com",
] as const;


export class CreateMessageFeedbackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MessageSid" })
  messageSid: string;
}


export class CreateMessageFeedbackCreateMessageFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Outcome;" })
  outcome?: shared.MessageFeedbackEnumOutcomeEnum;
}


export class CreateMessageFeedbackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateMessageFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateMessageFeedbackPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateMessageFeedbackCreateMessageFeedbackRequest;

  @SpeakeasyMetadata()
  security: CreateMessageFeedbackSecurity;
}


export class CreateMessageFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountMessageMessageFeedback?: shared.ApiV2010AccountMessageMessageFeedback;
}
