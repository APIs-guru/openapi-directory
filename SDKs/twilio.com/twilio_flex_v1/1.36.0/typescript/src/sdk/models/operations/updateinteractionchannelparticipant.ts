import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEINTERACTIONCHANNELPARTICIPANT_SERVERS = [
	"https://flex-api.twilio.com",
];



export class UpdateInteractionChannelParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Status;" })
  status: shared.InteractionChannelParticipantEnumStatusEnum;
}


export class UpdateInteractionChannelParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateInteractionChannelParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateInteractionChannelParticipantPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest;

  @Metadata()
  security: UpdateInteractionChannelParticipantSecurity;
}


export class UpdateInteractionChannelParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  flexV1InteractionInteractionChannelInteractionChannelParticipant?: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant;
}
