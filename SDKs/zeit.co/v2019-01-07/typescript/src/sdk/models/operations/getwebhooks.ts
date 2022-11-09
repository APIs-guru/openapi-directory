import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWebhooksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=teamId" })
  teamId?: string;
}


export class GetWebhooksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWebhooksQueryParams;
}


export class GetWebhooksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhooks?: any[];
}
