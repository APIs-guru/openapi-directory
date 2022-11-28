import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateTaskServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class UpdateTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class UpdateTaskHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class UpdateTaskUpdateTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AssignmentStatus;" })
  assignmentStatus?: shared.TaskEnumStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "form, name=Priority;" })
  priority?: number;

  @SpeakeasyMetadata({ data: "form, name=Reason;" })
  reason?: string;

  @SpeakeasyMetadata({ data: "form, name=TaskChannel;" })
  taskChannel?: string;
}


export class UpdateTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateTaskPathParams;

  @SpeakeasyMetadata()
  headers: UpdateTaskHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTaskUpdateTaskRequest;

  @SpeakeasyMetadata()
  security: UpdateTaskSecurity;
}


export class UpdateTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceTask?: shared.TaskrouterV1WorkspaceTask;
}
