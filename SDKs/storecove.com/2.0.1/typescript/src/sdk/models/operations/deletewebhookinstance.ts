import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWebhookInstancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guid" })
  guid: string;
}


export class DeleteWebhookInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWebhookInstancePathParams;
}


export class DeleteWebhookInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
