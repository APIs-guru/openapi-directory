import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWebhookByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class GetWebhookByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWebhookByIdPathParams;
}


export class GetWebhookByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  getWebhookById200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  getWebhookById200TextJsonString?: string;

  @SpeakeasyMetadata()
  getWebhookById200TextPlainString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
