import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEFIELDTYPE_SERVERS = [
	"https://autopilot.twilio.com",
];



export class UpdateFieldTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateFieldTypeUpdateFieldTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateFieldTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateFieldTypeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateFieldTypePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateFieldTypeUpdateFieldTypeRequest;

  @Metadata()
  security: UpdateFieldTypeSecurity;
}


export class UpdateFieldTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1AssistantFieldType?: shared.AutopilotV1AssistantFieldType;
}
