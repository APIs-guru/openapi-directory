import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
import { User } from "./user";



// Conversation
/** 
 * A conversation between the current user and another user.
**/
export class Conversation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=blocked" })
  blocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=conversation_id" })
  conversationId?: string;

  @SpeakeasyMetadata({ data: "json, name=last_message_date" })
  lastMessageDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: Message })
  messages?: Message[];

  @SpeakeasyMetadata({ data: "json, name=num_unread_messages" })
  numUnreadMessages?: number;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;
}
