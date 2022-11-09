import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ParticipantConversationEnumStateEnum } from "./participantconversationenumstateenum";
export declare class ConversationsV1ParticipantConversation extends SpeakeasyBase {
    accountSid?: string;
    chatServiceSid?: string;
    conversationAttributes?: string;
    conversationCreatedBy?: string;
    conversationDateCreated?: Date;
    conversationDateUpdated?: Date;
    conversationFriendlyName?: string;
    conversationSid?: string;
    conversationState?: ParticipantConversationEnumStateEnum;
    conversationTimers?: any;
    conversationUniqueName?: string;
    links?: Map<string, any>;
    participantIdentity?: string;
    participantMessagingBinding?: any;
    participantSid?: string;
    participantUserSid?: string;
}
