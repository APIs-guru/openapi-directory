import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Conversation } from "./conversation";



export class ConversationsResponseError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ConversationsResponsePagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class ConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Conversation })
  data?: Conversation[];

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ConversationsResponseError;

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: ConversationsResponsePagination;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
