import { SpeakeasyBase } from "../../../internal/utils";
import { InteractionChannelEnumChannelStatusEnum } from "./interactionchannelenumchannelstatusenum";
import { InteractionChannelEnumTypeEnum } from "./interactionchannelenumtypeenum";
export declare class FlexV1InteractionInteractionChannel extends SpeakeasyBase {
    errorCode?: number;
    errorMessage?: string;
    interactionSid?: string;
    links?: Map<string, any>;
    sid?: string;
    status?: InteractionChannelEnumChannelStatusEnum;
    type?: InteractionChannelEnumTypeEnum;
    url?: string;
}
