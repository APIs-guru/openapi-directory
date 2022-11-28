import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWebhooksIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetWebhooksIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWebhooksIdPathParams;
}


export class GetWebhooksIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getWebhookResponse?: shared.GetWebhookResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
