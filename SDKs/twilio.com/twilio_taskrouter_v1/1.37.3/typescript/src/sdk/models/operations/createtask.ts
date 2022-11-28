import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateTaskServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class CreateTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class CreateTaskCreateTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "form, name=Priority;" })
  priority?: number;

  @SpeakeasyMetadata({ data: "form, name=TaskChannel;" })
  taskChannel?: string;

  @SpeakeasyMetadata({ data: "form, name=Timeout;" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "form, name=WorkflowSid;" })
  workflowSid?: string;
}


export class CreateTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateTaskPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTaskCreateTaskRequest;

  @SpeakeasyMetadata()
  security: CreateTaskSecurity;
}


export class CreateTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceTask?: shared.TaskrouterV1WorkspaceTask;
}
