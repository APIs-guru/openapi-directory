import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InteractionChannelParticipantEnumTypeEnum } from "./interactionchannelparticipantenumtypeenum";



export class FlexV1InteractionInteractionChannelInteractionChannelParticipant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel_sid" })
  channelSid?: string;

  @SpeakeasyMetadata({ data: "json, name=interaction_sid" })
  interactionSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InteractionChannelParticipantEnumTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
