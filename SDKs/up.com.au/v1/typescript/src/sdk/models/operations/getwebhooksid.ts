import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWebhooksIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetWebhooksIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWebhooksIdPathParams;
}


export class GetWebhooksIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getWebhookResponse?: shared.GetWebhookResponse;

  @Metadata()
  statusCode: number;
}
