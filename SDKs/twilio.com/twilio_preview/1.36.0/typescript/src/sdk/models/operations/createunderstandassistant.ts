import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEUNDERSTANDASSISTANT_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateUnderstandAssistantCreateUnderstandAssistantRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CallbackEvents;" })
  callbackEvents?: string;

  @Metadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @Metadata({ data: "form, name=FallbackActions;" })
  fallbackActions?: any;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=InitiationActions;" })
  initiationActions?: any;

  @Metadata({ data: "form, name=LogQueries;" })
  logQueries?: boolean;

  @Metadata({ data: "form, name=StyleSheet;" })
  styleSheet?: any;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateUnderstandAssistantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUnderstandAssistantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUnderstandAssistantCreateUnderstandAssistantRequest;

  @Metadata()
  security: CreateUnderstandAssistantSecurity;
}


export class CreateUnderstandAssistantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistant?: shared.PreviewUnderstandAssistant;
}
