import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteWebhooksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=teamId" })
  teamId?: string;
}


export class DeleteWebhooksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteWebhooksQueryParams;
}


export class DeleteWebhooksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
