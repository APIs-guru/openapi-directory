import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateUnderstandFieldServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateUnderstandFieldPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class CreateUnderstandFieldCreateUnderstandFieldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FieldType;" })
  fieldType: string;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName: string;
}


export class CreateUnderstandFieldSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUnderstandFieldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateUnderstandFieldPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUnderstandFieldCreateUnderstandFieldRequest;

  @SpeakeasyMetadata()
  security: CreateUnderstandFieldSecurity;
}


export class CreateUnderstandFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewUnderstandAssistantTaskField?: shared.PreviewUnderstandAssistantTaskField;
}
