import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FlexV1InteractionInteractionChannelInteractionChannelInvite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel_sid" })
  channelSid?: string;

  @SpeakeasyMetadata({ data: "json, name=interaction_sid" })
  interactionSid?: string;

  @SpeakeasyMetadata({ data: "json, name=routing" })
  routing?: any;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
