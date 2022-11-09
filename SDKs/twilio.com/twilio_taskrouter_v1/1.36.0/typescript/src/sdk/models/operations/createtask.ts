import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATETASK_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class CreateTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class CreateTaskCreateTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @Metadata({ data: "form, name=Priority;" })
  priority?: number;

  @Metadata({ data: "form, name=TaskChannel;" })
  taskChannel?: string;

  @Metadata({ data: "form, name=Timeout;" })
  timeout?: number;

  @Metadata({ data: "form, name=WorkflowSid;" })
  workflowSid?: string;
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
  taskrouterV1WorkspaceTask?: shared.TaskrouterV1WorkspaceTask;
}
