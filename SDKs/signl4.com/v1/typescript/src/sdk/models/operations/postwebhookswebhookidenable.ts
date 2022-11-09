import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWebhooksWebhookIdEnablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class PostWebhooksWebhookIdEnableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWebhooksWebhookIdEnablePathParams;
}


export class PostWebhooksWebhookIdEnableResponse extends SpeakeasyBase {
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
