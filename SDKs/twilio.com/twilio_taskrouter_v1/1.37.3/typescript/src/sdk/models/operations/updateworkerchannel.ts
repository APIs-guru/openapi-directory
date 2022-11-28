import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateWorkerChannelServerList = [
	"https://taskrouter.twilio.com",
] as const;


export class UpdateWorkerChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkerSid" })
  workerSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class UpdateWorkerChannelUpdateWorkerChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Available;" })
  available?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Capacity;" })
  capacity?: number;
}


export class UpdateWorkerChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateWorkerChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateWorkerChannelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateWorkerChannelUpdateWorkerChannelRequest;

  @SpeakeasyMetadata()
  security: UpdateWorkerChannelSecurity;
}


export class UpdateWorkerChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskrouterV1WorkspaceWorkerWorkerChannel?: shared.TaskrouterV1WorkspaceWorkerWorkerChannel;
}
