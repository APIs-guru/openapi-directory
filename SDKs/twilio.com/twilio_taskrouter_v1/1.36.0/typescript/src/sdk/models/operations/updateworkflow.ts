import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEWORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class UpdateWorkflowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class UpdateWorkflowUpdateWorkflowRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AssignmentCallbackUrl;" })
  assignmentCallbackUrl?: string;

  @Metadata({ data: "form, name=Configuration;" })
  configuration?: string;

  @Metadata({ data: "form, name=FallbackAssignmentCallbackUrl;" })
  fallbackAssignmentCallbackUrl?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=ReEvaluateTasks;" })
  reEvaluateTasks?: string;

  @Metadata({ data: "form, name=TaskReservationTimeout;" })
  taskReservationTimeout?: number;
}


export class UpdateWorkflowSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateWorkflowRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateWorkflowPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateWorkflowUpdateWorkflowRequest;

  @Metadata()
  security: UpdateWorkflowSecurity;
}


export class UpdateWorkflowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceWorkflow?: shared.TaskrouterV1WorkspaceWorkflow;
}
