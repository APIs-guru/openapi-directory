import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEWORKFLOW_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class CreateWorkflowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class CreateWorkflowCreateWorkflowRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AssignmentCallbackUrl;" })
  assignmentCallbackUrl?: string;

  @Metadata({ data: "form, name=Configuration;" })
  configuration: string;

  @Metadata({ data: "form, name=FallbackAssignmentCallbackUrl;" })
  fallbackAssignmentCallbackUrl?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=TaskReservationTimeout;" })
  taskReservationTimeout?: number;
}


export class CreateWorkflowSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateWorkflowRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateWorkflowPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateWorkflowCreateWorkflowRequest;

  @Metadata()
  security: CreateWorkflowSecurity;
}


export class CreateWorkflowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceWorkflow?: shared.TaskrouterV1WorkspaceWorkflow;
}
