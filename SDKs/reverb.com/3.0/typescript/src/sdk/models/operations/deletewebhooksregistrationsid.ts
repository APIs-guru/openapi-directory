import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWebhooksRegistrationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteWebhooksRegistrationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteWebhooksRegistrationsIdPathParams;
}


export class DeleteWebhooksRegistrationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
