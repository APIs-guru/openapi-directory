import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATERESTOREASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
];



export class UpdateRestoreAssistantUpdateRestoreAssistantRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Assistant;" })
  assistant: string;
}


export class UpdateRestoreAssistantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRestoreAssistantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateRestoreAssistantUpdateRestoreAssistantRequest;

  @Metadata()
  security: UpdateRestoreAssistantSecurity;
}


export class UpdateRestoreAssistantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1RestoreAssistant?: shared.AutopilotV1RestoreAssistant;
}
