import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



export class SendMessagesResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=estimatedPrice" })
  estimatedPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: Message })
  messages?: Message[];

  @SpeakeasyMetadata({ data: "json, name=queued" })
  queued?: number;
}


export class SendMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: SendMessagesResponseData;
}
