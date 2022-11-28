import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateUnderstandAssistantFallbackActionsServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateUnderstandAssistantFallbackActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FallbackActions;" })
  fallbackActions?: any;
}


export class UpdateUnderstandAssistantFallbackActionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUnderstandAssistantFallbackActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateUnderstandAssistantFallbackActionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest;

  @SpeakeasyMetadata()
  security: UpdateUnderstandAssistantFallbackActionsSecurity;
}


export class UpdateUnderstandAssistantFallbackActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistantAssistantFallbackActions?: shared.PreviewUnderstandAssistantAssistantFallbackActions;
}
