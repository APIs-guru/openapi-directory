import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWebhooksWebhookIdPingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class PostWebhooksWebhookIdPingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWebhooksWebhookIdPingPathParams;
}


export class PostWebhooksWebhookIdPingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhookEventCallback?: shared.WebhookEventCallback;
}
