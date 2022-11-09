import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEINTERACTIONCHANNELINVITE_SERVERS = [
	"https://flex-api.twilio.com",
];



export class CreateInteractionChannelInvitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;
}


export class CreateInteractionChannelInviteCreateInteractionChannelInviteRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Routing;" })
  routing: any;
}


export class CreateInteractionChannelInviteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateInteractionChannelInviteRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateInteractionChannelInvitePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateInteractionChannelInviteCreateInteractionChannelInviteRequest;

  @Metadata()
  security: CreateInteractionChannelInviteSecurity;
}


export class CreateInteractionChannelInviteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  flexV1InteractionInteractionChannelInteractionChannelInvite?: shared.FlexV1InteractionInteractionChannelInteractionChannelInvite;
}
