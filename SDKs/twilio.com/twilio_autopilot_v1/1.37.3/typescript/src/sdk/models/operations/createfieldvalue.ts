import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateFieldValueServerList = [
	"https://autopilot.twilio.com",
] as const;


export class CreateFieldValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" })
  fieldTypeSid: string;
}


export class CreateFieldValueCreateFieldValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Language;" })
  language: string;

  @SpeakeasyMetadata({ data: "form, name=SynonymOf;" })
  synonymOf?: string;

  @SpeakeasyMetadata({ data: "form, name=Value;" })
  value: string;
}


export class CreateFieldValueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateFieldValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateFieldValuePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateFieldValueCreateFieldValueRequest;

  @SpeakeasyMetadata()
  security: CreateFieldValueSecurity;
}


export class CreateFieldValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  autopilotV1AssistantFieldTypeFieldValue?: shared.AutopilotV1AssistantFieldTypeFieldValue;
}
