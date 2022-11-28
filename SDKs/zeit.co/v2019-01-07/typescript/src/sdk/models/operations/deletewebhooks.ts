import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWebhooksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teamId" })
  teamId?: string;
}


export class DeleteWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteWebhooksQueryParams;
}


export class DeleteWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
