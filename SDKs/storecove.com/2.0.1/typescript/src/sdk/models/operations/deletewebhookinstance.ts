import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWebhookInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=guid" })
  guid: string;
}


export class DeleteWebhookInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteWebhookInstancePathParams;
}


export class DeleteWebhookInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
