import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEUNDERSTANDFIELD_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateUnderstandFieldPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class CreateUnderstandFieldCreateUnderstandFieldRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FieldType;" })
  fieldType: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName: string;
}


export class CreateUnderstandFieldSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUnderstandFieldRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateUnderstandFieldPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUnderstandFieldCreateUnderstandFieldRequest;

  @Metadata()
  security: CreateUnderstandFieldSecurity;
}


export class CreateUnderstandFieldResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistantTaskField?: shared.PreviewUnderstandAssistantTaskField;
}
