import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWebhooksWebhookIdEnablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class PostWebhooksWebhookIdEnableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostWebhooksWebhookIdEnablePathParams;
}


export class PostWebhooksWebhookIdEnableResponse extends SpeakeasyBase {
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
