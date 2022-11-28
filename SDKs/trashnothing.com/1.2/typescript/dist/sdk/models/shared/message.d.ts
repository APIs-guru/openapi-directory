import { SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";
/**
 * A message between two users.
**/
export declare class Message extends SpeakeasyBase {
    content?: string;
    date?: Date;
    emailAttachments?: string[];
    fromUserId?: string;
    messageId?: string;
    photos?: Photo[];
    subject?: string;
    toUserId?: string;
}
