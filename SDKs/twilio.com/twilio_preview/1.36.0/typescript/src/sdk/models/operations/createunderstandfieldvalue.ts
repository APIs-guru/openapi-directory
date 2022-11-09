import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEUNDERSTANDFIELDVALUE_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateUnderstandFieldValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" })
  fieldTypeSid: string;
}


export class CreateUnderstandFieldValueCreateUnderstandFieldValueRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Language;" })
  language: string;

  @Metadata({ data: "form, name=SynonymOf;" })
  synonymOf?: string;

  @Metadata({ data: "form, name=Value;" })
  value: string;
}


export class CreateUnderstandFieldValueSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUnderstandFieldValueRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateUnderstandFieldValuePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUnderstandFieldValueCreateUnderstandFieldValueRequest;

  @Metadata()
  security: CreateUnderstandFieldValueSecurity;
}


export class CreateUnderstandFieldValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistantFieldTypeFieldValue?: shared.PreviewUnderstandAssistantFieldTypeFieldValue;
}
