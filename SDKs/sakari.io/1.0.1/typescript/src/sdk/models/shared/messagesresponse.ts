import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Message } from "./message";


export class MessagesResponseError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class MessagesResponsePagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class MessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Message })
  data?: Message[];

  @Metadata({ data: "json, name=error" })
  error?: MessagesResponseError;

  @Metadata({ data: "json, name=pagination" })
  pagination?: MessagesResponsePagination;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
