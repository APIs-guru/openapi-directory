import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWebhookByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class GetWebhookByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWebhookByIdPathParams;
}


export class GetWebhookByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  getWebhookById200ApplicationJsonString?: string;

  @Metadata()
  getWebhookById200TextJsonString?: string;

  @Metadata()
  getWebhookById200TextPlainString?: string;

  @Metadata()
  statusCode: number;
}
