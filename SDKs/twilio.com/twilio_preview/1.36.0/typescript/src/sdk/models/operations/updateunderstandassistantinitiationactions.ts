import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEUNDERSTANDASSISTANTINITIATIONACTIONS_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateUnderstandAssistantInitiationActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=InitiationActions;" })
  initiationActions?: any;
}


export class UpdateUnderstandAssistantInitiationActionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUnderstandAssistantInitiationActionsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateUnderstandAssistantInitiationActionsPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest;

  @Metadata()
  security: UpdateUnderstandAssistantInitiationActionsSecurity;
}


export class UpdateUnderstandAssistantInitiationActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistantAssistantInitiationActions?: shared.PreviewUnderstandAssistantAssistantInitiationActions;
}
