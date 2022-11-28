import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateTaskQueueServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class CreateTaskQueuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class CreateTaskQueueCreateTaskQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AssignmentActivitySid;" })
  assignmentActivitySid?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=MaxReservedWorkers;" })
  maxReservedWorkers?: number;

  @SpeakeasyMetadata({ data: "form, name=ReservationActivitySid;" })
  reservationActivitySid?: string;

  @SpeakeasyMetadata({ data: "form, name=TargetWorkers;" })
  targetWorkers?: string;

  @SpeakeasyMetadata({ data: "form, name=TaskOrder;" })
  taskOrder?: shared.TaskQueueEnumTaskOrderEnum;
}


export class CreateTaskQueueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTaskQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateTaskQueuePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTaskQueueCreateTaskQueueRequest;

  @SpeakeasyMetadata()
  security: CreateTaskQueueSecurity;
}


export class CreateTaskQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceTaskQueue?: shared.TaskrouterV1WorkspaceTaskQueue;
}
