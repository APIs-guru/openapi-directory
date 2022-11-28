import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWebhooksWebhookIdPingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class PostWebhooksWebhookIdPingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostWebhooksWebhookIdPingPathParams;
}


export class PostWebhooksWebhookIdPingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhookEventCallback?: shared.WebhookEventCallback;
}
