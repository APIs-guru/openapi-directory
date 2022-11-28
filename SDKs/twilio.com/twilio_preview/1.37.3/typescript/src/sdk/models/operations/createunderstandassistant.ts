import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateUnderstandAssistantServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateUnderstandAssistantCreateUnderstandAssistantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CallbackEvents;" })
  callbackEvents?: string;

  @SpeakeasyMetadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=FallbackActions;" })
  fallbackActions?: any;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=InitiationActions;" })
  initiationActions?: any;

  @SpeakeasyMetadata({ data: "form, name=LogQueries;" })
  logQueries?: boolean;

  @SpeakeasyMetadata({ data: "form, name=StyleSheet;" })
  styleSheet?: any;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateUnderstandAssistantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUnderstandAssistantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUnderstandAssistantCreateUnderstandAssistantRequest;

  @SpeakeasyMetadata()
  security: CreateUnderstandAssistantSecurity;
}


export class CreateUnderstandAssistantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistant?: shared.PreviewUnderstandAssistant;
}
