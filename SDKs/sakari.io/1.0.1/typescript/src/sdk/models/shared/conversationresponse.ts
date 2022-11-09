import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Conversation } from "./conversation";


export class ConversationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Conversation;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
