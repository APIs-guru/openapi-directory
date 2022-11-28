import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";



export class WebhooksResponseError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class WebhooksResponsePagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class WebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Webhook })
  data?: Webhook[];

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: WebhooksResponseError;

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: WebhooksResponsePagination;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
