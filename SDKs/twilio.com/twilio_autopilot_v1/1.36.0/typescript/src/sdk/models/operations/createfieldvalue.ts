import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEFIELDVALUE_SERVERS = [
	"https://autopilot.twilio.com",
];



export class CreateFieldValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" })
  fieldTypeSid: string;
}


export class CreateFieldValueCreateFieldValueRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Language;" })
  language: string;

  @Metadata({ data: "form, name=SynonymOf;" })
  synonymOf?: string;

  @Metadata({ data: "form, name=Value;" })
  value: string;
}


export class CreateFieldValueSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateFieldValueRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateFieldValuePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateFieldValueCreateFieldValueRequest;

  @Metadata()
  security: CreateFieldValueSecurity;
}


export class CreateFieldValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1AssistantFieldTypeFieldValue?: shared.AutopilotV1AssistantFieldTypeFieldValue;
}
