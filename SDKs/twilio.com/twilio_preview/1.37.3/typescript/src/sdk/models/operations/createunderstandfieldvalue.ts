import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateUnderstandFieldValueServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateUnderstandFieldValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" })
  fieldTypeSid: string;
}


export class CreateUnderstandFieldValueCreateUnderstandFieldValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Language;" })
  language: string;

  @SpeakeasyMetadata({ data: "form, name=SynonymOf;" })
  synonymOf?: string;

  @SpeakeasyMetadata({ data: "form, name=Value;" })
  value: string;
}


export class CreateUnderstandFieldValueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUnderstandFieldValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateUnderstandFieldValuePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUnderstandFieldValueCreateUnderstandFieldValueRequest;

  @SpeakeasyMetadata()
  security: CreateUnderstandFieldValueSecurity;
}


export class CreateUnderstandFieldValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistantFieldTypeFieldValue?: shared.PreviewUnderstandAssistantFieldTypeFieldValue;
}
