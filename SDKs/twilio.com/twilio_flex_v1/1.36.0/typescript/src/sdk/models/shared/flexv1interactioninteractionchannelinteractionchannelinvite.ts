import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FlexV1InteractionInteractionChannelInteractionChannelInvite extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel_sid" })
  channelSid?: string;

  @Metadata({ data: "json, name=interaction_sid" })
  interactionSid?: string;

  @Metadata({ data: "json, name=routing" })
  routing?: any;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
