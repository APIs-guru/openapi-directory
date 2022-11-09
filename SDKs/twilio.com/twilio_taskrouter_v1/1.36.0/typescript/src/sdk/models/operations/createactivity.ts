import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEACTIVITY_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class CreateActivityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class CreateActivityCreateActivityRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Available;" })
  available?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;
}


export class CreateActivitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateActivityRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateActivityPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateActivityCreateActivityRequest;

  @Metadata()
  security: CreateActivitySecurity;
}


export class CreateActivityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceActivity?: shared.TaskrouterV1WorkspaceActivity;
}
