import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



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
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.WebhookInfo })
  webhookInfos?: shared.WebhookInfo[];
}
