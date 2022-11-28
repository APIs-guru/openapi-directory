import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
import { User } from "./user";
/**
 * A conversation between the current user and another user.
**/
export declare class Conversation extends SpeakeasyBase {
    archived?: boolean;
    blocked?: boolean;
    conversationId?: string;
    lastMessageDate?: Date;
    messages?: Message[];
    numUnreadMessages?: number;
    user?: User;
}
