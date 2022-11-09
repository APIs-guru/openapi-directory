import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Event
/** 
 * An Story Event object
**/
export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: string;

  @Metadata({ data: "json, name=chat_prompt" })
  chatPrompt?: string;

  @Metadata({ data: "json, name=conversation_id" })
  conversationId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=dom_selectors" })
  domSelectors?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_chat_hidden" })
  isChatHidden?: boolean;

  @Metadata({ data: "json, name=is_notify_enabled" })
  isNotifyEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
