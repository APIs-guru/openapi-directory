import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESTYLESHEET_SERVERS = [
	"https://autopilot.twilio.com",
];



export class UpdateStyleSheetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class UpdateStyleSheetUpdateStyleSheetRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=StyleSheet;" })
  styleSheet?: any;
}


export class UpdateStyleSheetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateStyleSheetRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateStyleSheetPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateStyleSheetUpdateStyleSheetRequest;

  @Metadata()
  security: UpdateStyleSheetSecurity;
}


export class UpdateStyleSheetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1AssistantStyleSheet?: shared.AutopilotV1AssistantStyleSheet;
}
