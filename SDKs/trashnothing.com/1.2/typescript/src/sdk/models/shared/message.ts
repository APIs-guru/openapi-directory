import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";



// Message
/** 
 * A message between two users.
**/
export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=email_attachments" })
  emailAttachments?: string[];

  @SpeakeasyMetadata({ data: "json, name=from_user_id" })
  fromUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=message_id" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=photos", elemType: Photo })
  photos?: Photo[];

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=to_user_id" })
  toUserId?: string;
}
