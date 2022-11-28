import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateRestoreAssistantServerList = [
	"https://autopilot.twilio.com",
] as const;


export class UpdateRestoreAssistantUpdateRestoreAssistantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Assistant;" })
  assistant: string;
}


export class UpdateRestoreAssistantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRestoreAssistantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateRestoreAssistantUpdateRestoreAssistantRequest;

  @SpeakeasyMetadata()
  security: UpdateRestoreAssistantSecurity;
}


export class UpdateRestoreAssistantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  autopilotV1RestoreAssistant?: shared.AutopilotV1RestoreAssistant;
}
