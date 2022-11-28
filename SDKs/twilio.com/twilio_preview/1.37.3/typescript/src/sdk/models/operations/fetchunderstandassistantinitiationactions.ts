import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchUnderstandAssistantInitiationActionsServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchUnderstandAssistantInitiationActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class FetchUnderstandAssistantInitiationActionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchUnderstandAssistantInitiationActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchUnderstandAssistantInitiationActionsPathParams;

  @SpeakeasyMetadata()
  security: FetchUnderstandAssistantInitiationActionsSecurity;
}


export class FetchUnderstandAssistantInitiationActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistantAssistantInitiationActions?: shared.PreviewUnderstandAssistantAssistantInitiationActions;
}
