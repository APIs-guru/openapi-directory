import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATETASKQUEUE_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class UpdateTaskQueuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class UpdateTaskQueueUpdateTaskQueueRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AssignmentActivitySid;" })
  assignmentActivitySid?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=MaxReservedWorkers;" })
  maxReservedWorkers?: number;

  @Metadata({ data: "form, name=ReservationActivitySid;" })
  reservationActivitySid?: string;

  @Metadata({ data: "form, name=TargetWorkers;" })
  targetWorkers?: string;

  @Metadata({ data: "form, name=TaskOrder;" })
  taskOrder?: shared.TaskQueueEnumTaskOrderEnum;
}


export class UpdateTaskQueueSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateTaskQueueRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateTaskQueuePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTaskQueueUpdateTaskQueueRequest;

  @Metadata()
  security: UpdateTaskQueueSecurity;
}


export class UpdateTaskQueueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceTaskQueue?: shared.TaskrouterV1WorkspaceTaskQueue;
}
