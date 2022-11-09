import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Message } from "./message";
import { User } from "./user";


// Conversation
/** 
 * A conversation between the current user and another user.
**/
export class Conversation extends SpeakeasyBase {
  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=blocked" })
  blocked?: boolean;

  @Metadata({ data: "json, name=conversation_id" })
  conversationId?: string;

  @Metadata({ data: "json, name=last_message_date" })
  lastMessageDate?: Date;

  @Metadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: Message[];

  @Metadata({ data: "json, name=num_unread_messages" })
  numUnreadMessages?: number;

  @Metadata({ data: "json, name=user" })
  user?: User;
}
