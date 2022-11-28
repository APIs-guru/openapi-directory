import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateWorkspaceServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class UpdateWorkspacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateWorkspaceUpdateWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=DefaultActivitySid;" })
  defaultActivitySid?: string;

  @SpeakeasyMetadata({ data: "form, name=EventCallbackUrl;" })
  eventCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=EventsFilter;" })
  eventsFilter?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=MultiTaskEnabled;" })
  multiTaskEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=PrioritizeQueueOrder;" })
  prioritizeQueueOrder?: shared.WorkspaceEnumQueueOrderEnum;

  @SpeakeasyMetadata({ data: "form, name=TimeoutActivitySid;" })
  timeoutActivitySid?: string;
}


export class UpdateWorkspaceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateWorkspacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateWorkspaceUpdateWorkspaceRequest;

  @SpeakeasyMetadata()
  security: UpdateWorkspaceSecurity;
}


export class UpdateWorkspaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1Workspace?: shared.TaskrouterV1Workspace;
}
