import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateTaskQueueServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class UpdateTaskQueuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class UpdateTaskQueueUpdateTaskQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AssignmentActivitySid;" })
  assignmentActivitySid?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=MaxReservedWorkers;" })
  maxReservedWorkers?: number;

  @SpeakeasyMetadata({ data: "form, name=ReservationActivitySid;" })
  reservationActivitySid?: string;

  @SpeakeasyMetadata({ data: "form, name=TargetWorkers;" })
  targetWorkers?: string;

  @SpeakeasyMetadata({ data: "form, name=TaskOrder;" })
  taskOrder?: shared.TaskQueueEnumTaskOrderEnum;
}


export class UpdateTaskQueueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateTaskQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateTaskQueuePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTaskQueueUpdateTaskQueueRequest;

  @SpeakeasyMetadata()
  security: UpdateTaskQueueSecurity;
}


export class UpdateTaskQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceTaskQueue?: shared.TaskrouterV1WorkspaceTaskQueue;
}
