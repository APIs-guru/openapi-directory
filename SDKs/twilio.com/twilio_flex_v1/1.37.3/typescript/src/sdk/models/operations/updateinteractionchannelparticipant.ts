import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateInteractionChannelParticipantServerList = [
	"https://flex-api.twilio.com",
] as const;


export class UpdateInteractionChannelParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=InteractionSid" })
  interactionSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status: shared.InteractionChannelParticipantEnumStatusEnum;
}


export class UpdateInteractionChannelParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateInteractionChannelParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateInteractionChannelParticipantPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest;

  @SpeakeasyMetadata()
  security: UpdateInteractionChannelParticipantSecurity;
}


export class UpdateInteractionChannelParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  flexV1InteractionInteractionChannelInteractionChannelParticipant?: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant;
}
