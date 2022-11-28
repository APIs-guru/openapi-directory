import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWebhooksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teamId" })
  teamId?: string;
}


export class GetWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWebhooksQueryParams;
}


export class GetWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhooks?: any[];
}
