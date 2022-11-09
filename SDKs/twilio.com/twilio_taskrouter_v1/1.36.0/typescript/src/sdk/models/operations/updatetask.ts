import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATETASK_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class UpdateTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class UpdateTaskHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class UpdateTaskUpdateTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AssignmentStatus;" })
  assignmentStatus?: shared.TaskEnumStatusEnum;

  @Metadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @Metadata({ data: "form, name=Priority;" })
  priority?: number;

  @Metadata({ data: "form, name=Reason;" })
  reason?: string;

  @Metadata({ data: "form, name=TaskChannel;" })
  taskChannel?: string;
}


export class UpdateTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateTaskRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateTaskPathParams;

  @Metadata()
  headers: UpdateTaskHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTaskUpdateTaskRequest;

  @Metadata()
  security: UpdateTaskSecurity;
}


export class UpdateTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceTask?: shared.TaskrouterV1WorkspaceTask;
}
