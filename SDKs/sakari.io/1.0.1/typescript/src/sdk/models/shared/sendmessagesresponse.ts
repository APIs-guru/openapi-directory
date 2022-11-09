import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Message } from "./message";


export class SendMessagesResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=estimatedPrice" })
  estimatedPrice?: number;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: Message[];

  @Metadata({ data: "json, name=queued" })
  queued?: number;
}


export class SendMessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: SendMessagesResponseData;
}
