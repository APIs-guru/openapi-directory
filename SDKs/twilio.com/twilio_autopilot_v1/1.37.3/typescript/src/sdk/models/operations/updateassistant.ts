import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateAssistantServerList = [
	"https://autopilot.twilio.com",
] as const;


export class UpdateAssistantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateAssistantUpdateAssistantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CallbackEvents;" })
  callbackEvents?: string;

  @SpeakeasyMetadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Defaults;" })
  defaults?: any;

  @SpeakeasyMetadata({ data: "form, name=DevelopmentStage;" })
  developmentStage?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=LogQueries;" })
  logQueries?: boolean;

  @SpeakeasyMetadata({ data: "form, name=StyleSheet;" })
  styleSheet?: any;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateAssistantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateAssistantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateAssistantPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateAssistantUpdateAssistantRequest;

  @SpeakeasyMetadata()
  security: UpdateAssistantSecurity;
}


export class UpdateAssistantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  autopilotV1Assistant?: shared.AutopilotV1Assistant;
}
