import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelEnumChannelTypeEnum } from "./channelenumchanneltypeenum";
export declare class ChatV3Channel extends SpeakeasyBase {
    accountSid?: string;
    attributes?: string;
    createdBy?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    membersCount?: number;
    messagesCount?: number;
    messagingServiceSid?: string;
    serviceSid?: string;
    sid?: string;
    type?: ChannelEnumChannelTypeEnum;
    uniqueName?: string;
    url?: string;
}
