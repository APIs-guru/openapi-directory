import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWebhooksRegistrationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteWebhooksRegistrationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWebhooksRegistrationsIdPathParams;
}


export class DeleteWebhooksRegistrationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
