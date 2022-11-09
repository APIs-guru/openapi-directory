import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Photo } from "./photo";


// Message
/** 
 * A message between two users.
**/
export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=email_attachments" })
  emailAttachments?: string[];

  @Metadata({ data: "json, name=from_user_id" })
  fromUserId?: string;

  @Metadata({ data: "json, name=message_id" })
  messageId?: string;

  @Metadata({ data: "json, name=photos", elemType: shared.Photo })
  photos?: Photo[];

  @Metadata({ data: "json, name=subject" })
  subject?: string;

  @Metadata({ data: "json, name=to_user_id" })
  toUserId?: string;
}
