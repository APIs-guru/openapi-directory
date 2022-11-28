import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWebhooksRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  webhookBaseInfo?: shared.WebhookBaseInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  webhookBaseInfo1?: shared.WebhookBaseInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  webhookBaseInfo2?: shared.WebhookBaseInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  webhookBaseInfo3?: shared.WebhookBaseInfo;
}


export class PostWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostWebhooksRequests;
}


export class PostWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  postWebhooks201ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  postWebhooks201TextJsonString?: string;

  @SpeakeasyMetadata()
  postWebhooks201TextPlainString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
