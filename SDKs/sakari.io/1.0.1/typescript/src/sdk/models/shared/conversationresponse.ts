import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Conversation } from "./conversation";



export class ConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Conversation;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
