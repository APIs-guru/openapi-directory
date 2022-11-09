import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InteractionChannelParticipantEnumTypeEnum } from "./interactionchannelparticipantenumtypeenum";


export class FlexV1InteractionInteractionChannelInteractionChannelParticipant extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel_sid" })
  channelSid?: string;

  @Metadata({ data: "json, name=interaction_sid" })
  interactionSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=type" })
  type?: InteractionChannelParticipantEnumTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
