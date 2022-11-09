import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEUNDERSTANDTASK_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateUnderstandTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class CreateUnderstandTaskCreateUnderstandTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Actions;" })
  actions?: any;

  @Metadata({ data: "form, name=ActionsUrl;" })
  actionsUrl?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName: string;
}


export class CreateUnderstandTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateUnderstandTaskRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateUnderstandTaskPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateUnderstandTaskCreateUnderstandTaskRequest;

  @Metadata()
  security: CreateUnderstandTaskSecurity;
}


export class CreateUnderstandTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewUnderstandAssistantTask?: shared.PreviewUnderstandAssistantTask;
}
