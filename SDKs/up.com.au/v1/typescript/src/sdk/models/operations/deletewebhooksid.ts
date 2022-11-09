import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWebhooksIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteWebhooksIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteWebhooksIdPathParams;
}


export class DeleteWebhooksIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
