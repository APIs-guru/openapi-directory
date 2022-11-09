import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWebhooksWebhookIdDisablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class PostWebhooksWebhookIdDisableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWebhooksWebhookIdDisablePathParams;
}


export class PostWebhooksWebhookIdDisableResponse extends SpeakeasyBase {
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
