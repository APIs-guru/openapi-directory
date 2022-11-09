import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutWebhooksWebhookIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class PutWebhooksWebhookIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  webhookBaseInfo?: shared.WebhookBaseInfo;

  @Metadata({ data: "request, media_type=application/json" })
  webhookBaseInfo1?: shared.WebhookBaseInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  webhookBaseInfo2?: shared.WebhookBaseInfo;

  @Metadata({ data: "request, media_type=text/json" })
  webhookBaseInfo3?: shared.WebhookBaseInfo;
}


export class PutWebhooksWebhookIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutWebhooksWebhookIdPathParams;

  @Metadata()
  request?: PutWebhooksWebhookIdRequests;
}


export class PutWebhooksWebhookIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhookInfo?: shared.WebhookInfo;
}
