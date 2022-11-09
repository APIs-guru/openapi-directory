import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Message } from "./message";


export class MessageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Message;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
