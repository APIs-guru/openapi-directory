import { SpeakeasyBase } from "../../../internal/utils";
import { MessageInteractionEnumResourceStatusEnum } from "./messageinteractionenumresourcestatusenum";
import { MessageInteractionEnumTypeEnum } from "./messageinteractionenumtypeenum";
export declare class ProxyV1ServiceSessionParticipantMessageInteraction extends SpeakeasyBase {
    accountSid?: string;
    data?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    inboundParticipantSid?: string;
    inboundResourceSid?: string;
    inboundResourceStatus?: MessageInteractionEnumResourceStatusEnum;
    inboundResourceType?: string;
    inboundResourceUrl?: string;
    outboundParticipantSid?: string;
    outboundResourceSid?: string;
    outboundResourceStatus?: MessageInteractionEnumResourceStatusEnum;
    outboundResourceType?: string;
    outboundResourceUrl?: string;
    participantSid?: string;
    serviceSid?: string;
    sessionSid?: string;
    sid?: string;
    type?: MessageInteractionEnumTypeEnum;
    url?: string;
}
