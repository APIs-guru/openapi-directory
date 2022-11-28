import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";



export class MessagesResponseError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class MessagesResponsePagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class MessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Message })
  data?: Message[];

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: MessagesResponseError;

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: MessagesResponsePagination;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
