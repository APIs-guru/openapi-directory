import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchUnderstandAssistantFallbackActionsServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchUnderstandAssistantFallbackActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class FetchUnderstandAssistantFallbackActionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchUnderstandAssistantFallbackActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchUnderstandAssistantFallbackActionsPathParams;

  @SpeakeasyMetadata()
  security: FetchUnderstandAssistantFallbackActionsSecurity;
}


export class FetchUnderstandAssistantFallbackActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistantAssistantFallbackActions?: shared.PreviewUnderstandAssistantAssistantFallbackActions;
}
