import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateUnderstandAssistantInitiationActionsServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateUnderstandAssistantInitiationActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=InitiationActions;" })
  initiationActions?: any;
}


export class UpdateUnderstandAssistantInitiationActionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUnderstandAssistantInitiationActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateUnderstandAssistantInitiationActionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest;

  @SpeakeasyMetadata()
  security: UpdateUnderstandAssistantInitiationActionsSecurity;
}


export class UpdateUnderstandAssistantInitiationActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistantAssistantInitiationActions?: shared.PreviewUnderstandAssistantAssistantInitiationActions;
}
