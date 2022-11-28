import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateStyleSheetServerList = [
	"https://autopilot.twilio.com",
] as const;


export class UpdateStyleSheetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class UpdateStyleSheetUpdateStyleSheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=StyleSheet;" })
  styleSheet?: any;
}


export class UpdateStyleSheetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateStyleSheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateStyleSheetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateStyleSheetUpdateStyleSheetRequest;

  @SpeakeasyMetadata()
  security: UpdateStyleSheetSecurity;
}


export class UpdateStyleSheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  autopilotV1AssistantStyleSheet?: shared.AutopilotV1AssistantStyleSheet;
}
