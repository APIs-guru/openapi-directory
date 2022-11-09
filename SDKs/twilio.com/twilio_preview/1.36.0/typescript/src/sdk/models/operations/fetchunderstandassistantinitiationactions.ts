import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHUNDERSTANDASSISTANTINITIATIONACTIONS_SERVERS = [
	"https://preview.twilio.com",
];



export class FetchUnderstandAssistantInitiationActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class FetchUnderstandAssistantInitiationActionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchUnderstandAssistantInitiationActionsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchUnderstandAssistantInitiationActionsPathParams;

  @Metadata()
  security: FetchUnderstandAssistantInitiationActionsSecurity;
}


export class FetchUnderstandAssistantInitiationActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistantAssistantInitiationActions?: shared.PreviewUnderstandAssistantAssistantInitiationActions;
}
