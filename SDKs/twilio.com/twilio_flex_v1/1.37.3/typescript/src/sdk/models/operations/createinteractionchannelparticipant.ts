import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateInteractionChannelParticipantServerList = [
	"https://flex-api.twilio.com",
] as const;


export class CreateInteractionChannelParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;
}


export class CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=MediaProperties;" })
  mediaProperties: any;

  @SpeakeasyMetadata({ data: "form, name=Type;" })
  type: shared.InteractionChannelParticipantEnumTypeEnum;
}


export class CreateInteractionChannelParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateInteractionChannelParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateInteractionChannelParticipantPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest;

  @SpeakeasyMetadata()
  security: CreateInteractionChannelParticipantSecurity;
}


export class CreateInteractionChannelParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  flexV1InteractionInteractionChannelInteractionChannelParticipant?: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant;
}
