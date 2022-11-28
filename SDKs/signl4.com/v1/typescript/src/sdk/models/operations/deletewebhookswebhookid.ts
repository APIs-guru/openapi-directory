import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteWebhooksWebhookIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class DeleteWebhooksWebhookIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWebhooksWebhookIdPathParams;
}


export class DeleteWebhooksWebhookIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
