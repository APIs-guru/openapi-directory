import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateWorkflowServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class CreateWorkflowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class CreateWorkflowCreateWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AssignmentCallbackUrl;" })
  assignmentCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Configuration;" })
  configuration: string;

  @SpeakeasyMetadata({ data: "form, name=FallbackAssignmentCallbackUrl;" })
  fallbackAssignmentCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=TaskReservationTimeout;" })
  taskReservationTimeout?: number;
}


export class CreateWorkflowSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateWorkflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateWorkflowPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateWorkflowCreateWorkflowRequest;

  @SpeakeasyMetadata()
  security: CreateWorkflowSecurity;
}


export class CreateWorkflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceWorkflow?: shared.TaskrouterV1WorkspaceWorkflow;
}
