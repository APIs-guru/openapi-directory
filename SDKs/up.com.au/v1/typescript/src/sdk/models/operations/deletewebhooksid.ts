import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWebhooksIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteWebhooksIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWebhooksIdPathParams;
}


export class DeleteWebhooksIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
