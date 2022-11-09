import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATETASK_SERVERS = [
	"https://autopilot.twilio.com",
];



export class CreateTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class CreateTaskCreateTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Actions;" })
  actions?: any;

  @Metadata({ data: "form, name=ActionsUrl;" })
  actionsUrl?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName: string;
}


export class CreateTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTaskRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateTaskPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTaskCreateTaskRequest;

  @Metadata()
  security: CreateTaskSecurity;
}


export class CreateTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1AssistantTask?: shared.AutopilotV1AssistantTask;
}
