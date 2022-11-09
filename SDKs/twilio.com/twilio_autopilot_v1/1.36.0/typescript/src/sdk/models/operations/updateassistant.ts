import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
];



export class UpdateAssistantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateAssistantUpdateAssistantRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CallbackEvents;" })
  callbackEvents?: string;

  @Metadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @Metadata({ data: "form, name=Defaults;" })
  defaults?: any;

  @Metadata({ data: "form, name=DevelopmentStage;" })
  developmentStage?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=LogQueries;" })
  logQueries?: boolean;

  @Metadata({ data: "form, name=StyleSheet;" })
  styleSheet?: any;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateAssistantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateAssistantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateAssistantPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateAssistantUpdateAssistantRequest;

  @Metadata()
  security: UpdateAssistantSecurity;
}


export class UpdateAssistantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1Assistant?: shared.AutopilotV1Assistant;
}
