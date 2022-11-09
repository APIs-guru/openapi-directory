import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UserChannelEnumNotificationLevelEnum } from "./userchannelenumnotificationlevelenum";
import { UserChannelEnumChannelStatusEnum } from "./userchannelenumchannelstatusenum";
export declare class IpMessagingV2ServiceUserUserChannel extends SpeakeasyBase {
    accountSid?: string;
    channelSid?: string;
    lastConsumedMessageIndex?: number;
    links?: Map<string, any>;
    memberSid?: string;
    notificationLevel?: UserChannelEnumNotificationLevelEnum;
    serviceSid?: string;
    status?: UserChannelEnumChannelStatusEnum;
    unreadMessagesCount?: number;
    url?: string;
    userSid?: string;
}
