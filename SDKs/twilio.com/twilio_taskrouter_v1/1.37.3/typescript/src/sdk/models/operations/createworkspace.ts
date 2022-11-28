import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateWorkspaceServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class CreateWorkspaceCreateWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=EventCallbackUrl;" })
  eventCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=EventsFilter;" })
  eventsFilter?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=MultiTaskEnabled;" })
  multiTaskEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=PrioritizeQueueOrder;" })
  prioritizeQueueOrder?: shared.WorkspaceEnumQueueOrderEnum;

  @SpeakeasyMetadata({ data: "form, name=Template;" })
  template?: string;
}


export class CreateWorkspaceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateWorkspaceCreateWorkspaceRequest;

  @SpeakeasyMetadata()
  security: CreateWorkspaceSecurity;
}


export class CreateWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1Workspace?: shared.TaskrouterV1Workspace;
}
