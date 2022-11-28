import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



export class MessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Message;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
