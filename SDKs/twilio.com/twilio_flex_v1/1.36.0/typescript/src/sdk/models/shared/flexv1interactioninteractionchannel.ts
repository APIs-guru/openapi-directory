import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InteractionChannelEnumChannelStatusEnum } from "./interactionchannelenumchannelstatusenum";
import { InteractionChannelEnumTypeEnum } from "./interactionchannelenumtypeenum";


export class FlexV1InteractionInteractionChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=error_code" })
  errorCode?: number;

  @Metadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @Metadata({ data: "json, name=interaction_sid" })
  interactionSid?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: InteractionChannelEnumChannelStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: InteractionChannelEnumTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
