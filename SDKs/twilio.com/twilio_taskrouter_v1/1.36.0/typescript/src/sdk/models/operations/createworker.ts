import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEWORKER_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class CreateWorkerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class CreateWorkerCreateWorkerRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ActivitySid;" })
  activitySid?: string;

  @Metadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;
}


export class CreateWorkerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateWorkerRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateWorkerPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateWorkerCreateWorkerRequest;

  @Metadata()
  security: CreateWorkerSecurity;
}


export class CreateWorkerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceWorker?: shared.TaskrouterV1WorkspaceWorker;
}
