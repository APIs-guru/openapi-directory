import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateInteractionChannelInviteServerList = [
	"https://flex-api.twilio.com",
] as const;


export class CreateInteractionChannelInvitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;
}


export class CreateInteractionChannelInviteCreateInteractionChannelInviteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Routing;" })
  routing: any;
}


export class CreateInteractionChannelInviteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateInteractionChannelInviteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateInteractionChannelInvitePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateInteractionChannelInviteCreateInteractionChannelInviteRequest;

  @SpeakeasyMetadata()
  security: CreateInteractionChannelInviteSecurity;
}


export class CreateInteractionChannelInviteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  flexV1InteractionInteractionChannelInteractionChannelInvite?: shared.FlexV1InteractionInteractionChannelInteractionChannelInvite;
}
