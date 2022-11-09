import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWebhooksRegistrationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetWebhooksRegistrationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWebhooksRegistrationsIdPathParams;
}


export class GetWebhooksRegistrationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
