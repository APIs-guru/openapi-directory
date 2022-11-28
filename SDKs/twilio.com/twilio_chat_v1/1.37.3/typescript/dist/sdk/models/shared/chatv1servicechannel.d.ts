import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelEnumChannelTypeEnum } from "./channelenumchanneltypeenum";
export declare class ChatV1ServiceChannel extends SpeakeasyBase {
    accountSid?: string;
    attributes?: string;
    createdBy?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    links?: Map<string, any>;
    membersCount?: number;
    messagesCount?: number;
    serviceSid?: string;
    sid?: string;
    type?: ChannelEnumChannelTypeEnum;
    uniqueName?: string;
    url?: string;
}
