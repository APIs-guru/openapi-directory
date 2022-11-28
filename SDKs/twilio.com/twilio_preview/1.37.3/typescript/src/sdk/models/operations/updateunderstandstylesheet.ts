import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateUnderstandStyleSheetServerList = [
	"https://preview.twilio.com",
] as const;


export class UpdateUnderstandStyleSheetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=StyleSheet;" })
  styleSheet?: any;
}


export class UpdateUnderstandStyleSheetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUnderstandStyleSheetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateUnderstandStyleSheetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest;

  @SpeakeasyMetadata()
  security: UpdateUnderstandStyleSheetSecurity;
}


export class UpdateUnderstandStyleSheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistantStyleSheet?: shared.PreviewUnderstandAssistantStyleSheet;
}
