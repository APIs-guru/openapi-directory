import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWebhooksRegistrationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetWebhooksRegistrationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWebhooksRegistrationsIdPathParams;
}


export class GetWebhooksRegistrationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
