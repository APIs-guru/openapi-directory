import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InteractionChannelEnumChannelStatusEnum } from "./interactionchannelenumchannelstatusenum";
import { InteractionChannelEnumTypeEnum } from "./interactionchannelenumtypeenum";



export class FlexV1InteractionInteractionChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=interaction_sid" })
  interactionSid?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: InteractionChannelEnumChannelStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InteractionChannelEnumTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
