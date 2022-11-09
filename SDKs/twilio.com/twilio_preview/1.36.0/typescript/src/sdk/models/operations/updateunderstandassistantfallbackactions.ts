import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEUNDERSTANDASSISTANTFALLBACKACTIONS_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateUnderstandAssistantFallbackActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FallbackActions;" })
  fallbackActions?: any;
}


export class UpdateUnderstandAssistantFallbackActionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUnderstandAssistantFallbackActionsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateUnderstandAssistantFallbackActionsPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest;

  @Metadata()
  security: UpdateUnderstandAssistantFallbackActionsSecurity;
}


export class UpdateUnderstandAssistantFallbackActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistantAssistantFallbackActions?: shared.PreviewUnderstandAssistantAssistantFallbackActions;
}
