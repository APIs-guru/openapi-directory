import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATETASKCHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
];



export class UpdateTaskChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" })
  workspaceSid: string;
}


export class UpdateTaskChannelUpdateTaskChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ChannelOptimizedRouting;" })
  channelOptimizedRouting?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class UpdateTaskChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateTaskChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateTaskChannelPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTaskChannelUpdateTaskChannelRequest;

  @Metadata()
  security: UpdateTaskChannelSecurity;
}


export class UpdateTaskChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskrouterV1WorkspaceTaskChannel?: shared.TaskrouterV1WorkspaceTaskChannel;
}
