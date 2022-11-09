import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Webhook } from "./webhook";


export class WebhooksResponseError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class WebhooksResponsePagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class WebhooksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Webhook })
  data?: Webhook[];

  @Metadata({ data: "json, name=error" })
  error?: WebhooksResponseError;

  @Metadata({ data: "json, name=pagination" })
  pagination?: WebhooksResponsePagination;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
