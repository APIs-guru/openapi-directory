import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWebhooksRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  webhookBaseInfo?: shared.WebhookBaseInfo;

  @Metadata({ data: "request, media_type=application/json" })
  webhookBaseInfo1?: shared.WebhookBaseInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  webhookBaseInfo2?: shared.WebhookBaseInfo;

  @Metadata({ data: "request, media_type=text/json" })
  webhookBaseInfo3?: shared.WebhookBaseInfo;
}


export class PostWebhooksRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostWebhooksRequests;
}


export class PostWebhooksResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  postWebhooks201ApplicationJsonString?: string;

  @Metadata()
  postWebhooks201TextJsonString?: string;

  @Metadata()
  postWebhooks201TextPlainString?: string;

  @Metadata()
  statusCode: number;
}
