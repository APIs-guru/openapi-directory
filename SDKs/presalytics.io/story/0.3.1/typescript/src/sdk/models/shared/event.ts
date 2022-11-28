import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Event
/** 
 * An Story Event object
**/
export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "json, name=chat_prompt" })
  chatPrompt?: string;

  @SpeakeasyMetadata({ data: "json, name=conversation_id" })
  conversationId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=dom_selectors" })
  domSelectors?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_chat_hidden" })
  isChatHidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_notify_enabled" })
  isNotifyEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
