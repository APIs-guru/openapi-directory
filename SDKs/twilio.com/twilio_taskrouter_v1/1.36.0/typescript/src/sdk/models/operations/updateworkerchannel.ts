import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEWORKERCHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class UpdateWorkerChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkerSid" })
  workerSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class UpdateWorkerChannelUpdateWorkerChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Available;" })
  available?: boolean;

  @Metadata({ data: "form, name=Capacity;" })
  capacity?: number;
}


export class UpdateWorkerChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateWorkerChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateWorkerChannelPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateWorkerChannelUpdateWorkerChannelRequest;

  @Metadata()
  security: UpdateWorkerChannelSecurity;
}


export class UpdateWorkerChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceWorkerWorkerChannel?: shared.TaskrouterV1WorkspaceWorkerWorkerChannel;
}
