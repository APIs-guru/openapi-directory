import { SpeakeasyBase } from "../../../internal/utils";
import { InteractionEnumResourceStatusEnum } from "./interactionenumresourcestatusenum";
import { InteractionEnumTypeEnum } from "./interactionenumtypeenum";
export declare class ProxyV1ServiceSessionInteraction extends SpeakeasyBase {
    accountSid?: string;
    data?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    inboundParticipantSid?: string;
    inboundResourceSid?: string;
    inboundResourceStatus?: InteractionEnumResourceStatusEnum;
    inboundResourceType?: string;
    inboundResourceUrl?: string;
    outboundParticipantSid?: string;
    outboundResourceSid?: string;
    outboundResourceStatus?: InteractionEnumResourceStatusEnum;
    outboundResourceType?: string;
    outboundResourceUrl?: string;
    serviceSid?: string;
    sessionSid?: string;
    sid?: string;
    type?: InteractionEnumTypeEnum;
    url?: string;
}
