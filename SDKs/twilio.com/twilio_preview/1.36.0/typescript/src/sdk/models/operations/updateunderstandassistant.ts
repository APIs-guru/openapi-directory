import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEUNDERSTANDASSISTANT_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateUnderstandAssistantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateUnderstandAssistantUpdateUnderstandAssistantRequest extends SpeakeasyBase {
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


export class UpdateUnderstandAssistantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUnderstandAssistantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateUnderstandAssistantPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUnderstandAssistantUpdateUnderstandAssistantRequest;

  @Metadata()
  security: UpdateUnderstandAssistantSecurity;
}


export class UpdateUnderstandAssistantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistant?: shared.PreviewUnderstandAssistant;
}
