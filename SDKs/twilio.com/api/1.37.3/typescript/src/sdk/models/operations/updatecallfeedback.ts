import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateCallFeedbackServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateCallFeedbackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" })
  callSid: string;
}


export class UpdateCallFeedbackUpdateCallFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Issue;" })
  issue?: shared.CallFeedbackEnumIssuesEnum[];

  @SpeakeasyMetadata({ data: "form, name=QualityScore;" })
  qualityScore?: number;
}


export class UpdateCallFeedbackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateCallFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateCallFeedbackPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateCallFeedbackUpdateCallFeedbackRequest;

  @SpeakeasyMetadata()
  security: UpdateCallFeedbackSecurity;
}


export class UpdateCallFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountCallCallFeedback?: shared.ApiV2010AccountCallCallFeedback;
}
