import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEUNDERSTANDSTYLESHEET_SERVERS = [
	"https://preview.twilio.com",
];



export class UpdateUnderstandStyleSheetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=StyleSheet;" })
  styleSheet?: any;
}


export class UpdateUnderstandStyleSheetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUnderstandStyleSheetRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateUnderstandStyleSheetPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest;

  @Metadata()
  security: UpdateUnderstandStyleSheetSecurity;
}


export class UpdateUnderstandStyleSheetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistantStyleSheet?: shared.PreviewUnderstandAssistantStyleSheet;
}
