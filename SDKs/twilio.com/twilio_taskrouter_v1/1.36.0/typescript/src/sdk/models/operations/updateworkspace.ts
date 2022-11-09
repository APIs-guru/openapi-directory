import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEWORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class UpdateWorkspacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateWorkspaceUpdateWorkspaceRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=DefaultActivitySid;" })
  defaultActivitySid?: string;

  @Metadata({ data: "form, name=EventCallbackUrl;" })
  eventCallbackUrl?: string;

  @Metadata({ data: "form, name=EventsFilter;" })
  eventsFilter?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=MultiTaskEnabled;" })
  multiTaskEnabled?: boolean;

  @Metadata({ data: "form, name=PrioritizeQueueOrder;" })
  prioritizeQueueOrder?: shared.WorkspaceEnumQueueOrderEnum;

  @Metadata({ data: "form, name=TimeoutActivitySid;" })
  timeoutActivitySid?: string;
}


export class UpdateWorkspaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateWorkspacePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateWorkspaceUpdateWorkspaceRequest;

  @Metadata()
  security: UpdateWorkspaceSecurity;
}


export class UpdateWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1Workspace?: shared.TaskrouterV1Workspace;
}
