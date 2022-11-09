import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEWORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class CreateWorkspaceCreateWorkspaceRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=EventCallbackUrl;" })
  eventCallbackUrl?: string;

  @Metadata({ data: "form, name=EventsFilter;" })
  eventsFilter?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=MultiTaskEnabled;" })
  multiTaskEnabled?: boolean;

  @Metadata({ data: "form, name=PrioritizeQueueOrder;" })
  prioritizeQueueOrder?: shared.WorkspaceEnumQueueOrderEnum;

  @Metadata({ data: "form, name=Template;" })
  template?: string;
}


export class CreateWorkspaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateWorkspaceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateWorkspaceCreateWorkspaceRequest;

  @Metadata()
  security: CreateWorkspaceSecurity;
}


export class CreateWorkspaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1Workspace?: shared.TaskrouterV1Workspace;
}
