import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATETASKCHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class CreateTaskChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class CreateTaskChannelCreateTaskChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ChannelOptimizedRouting;" })
  channelOptimizedRouting?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName: string;
}


export class CreateTaskChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTaskChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateTaskChannelPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTaskChannelCreateTaskChannelRequest;

  @Metadata()
  security: CreateTaskChannelSecurity;
}


export class CreateTaskChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceTaskChannel?: shared.TaskrouterV1WorkspaceTaskChannel;
}
