import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
];



export class CreateAssistantCreateAssistantRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CallbackEvents;" })
  callbackEvents?: string;

  @Metadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @Metadata({ data: "form, name=Defaults;" })
  defaults?: any;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=LogQueries;" })
  logQueries?: boolean;

  @Metadata({ data: "form, name=StyleSheet;" })
  styleSheet?: any;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateAssistantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateAssistantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateAssistantCreateAssistantRequest;

  @Metadata()
  security: CreateAssistantSecurity;
}


export class CreateAssistantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1Assistant?: shared.AutopilotV1Assistant;
}
