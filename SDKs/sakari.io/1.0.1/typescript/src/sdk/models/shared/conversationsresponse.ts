import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Conversation } from "./conversation";


export class ConversationsResponseError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ConversationsResponsePagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class ConversationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Conversation })
  data?: Conversation[];

  @Metadata({ data: "json, name=error" })
  error?: ConversationsResponseError;

  @Metadata({ data: "json, name=pagination" })
  pagination?: ConversationsResponsePagination;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
