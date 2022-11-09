import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


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
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.WebhookInfo })
  webhookInfos?: shared.WebhookInfo[];
}
