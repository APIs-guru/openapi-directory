import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceParticipantConversationEnumStateEnum } from "./serviceparticipantconversationenumstateenum";
export declare class ConversationsV1ServiceServiceParticipantConversation extends SpeakeasyBase {
    accountSid?: string;
    chatServiceSid?: string;
    conversationAttributes?: string;
    conversationCreatedBy?: string;
    conversationDateCreated?: Date;
    conversationDateUpdated?: Date;
    conversationFriendlyName?: string;
    conversationSid?: string;
    conversationState?: ServiceParticipantConversationEnumStateEnum;
    conversationTimers?: any;
    conversationUniqueName?: string;
    links?: Map<string, any>;
    participantIdentity?: string;
    participantMessagingBinding?: any;
    participantSid?: string;
    participantUserSid?: string;
}
