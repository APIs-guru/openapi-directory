import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutWebhooksWebhookIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class PutWebhooksWebhookIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  webhookBaseInfo?: shared.WebhookBaseInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  webhookBaseInfo1?: shared.WebhookBaseInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  webhookBaseInfo2?: shared.WebhookBaseInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  webhookBaseInfo3?: shared.WebhookBaseInfo;
}


export class PutWebhooksWebhookIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutWebhooksWebhookIdPathParams;

  @SpeakeasyMetadata()
  request?: PutWebhooksWebhookIdRequests;
}


export class PutWebhooksWebhookIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhookInfo?: shared.WebhookInfo;
}
