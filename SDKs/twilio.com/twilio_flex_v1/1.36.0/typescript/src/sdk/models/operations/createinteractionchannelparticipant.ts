import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEINTERACTIONCHANNELPARTICIPANT_SERVERS = [
	"https://flex-api.twilio.com",
];



export class CreateInteractionChannelParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;
}


export class CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=MediaProperties;" })
  mediaProperties: any;

  @Metadata({ data: "form, name=Type;" })
  type: shared.InteractionChannelParticipantEnumTypeEnum;
}


export class CreateInteractionChannelParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateInteractionChannelParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateInteractionChannelParticipantPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest;

  @Metadata()
  security: CreateInteractionChannelParticipantSecurity;
}


export class CreateInteractionChannelParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  flexV1InteractionInteractionChannelInteractionChannelParticipant?: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant;
}
