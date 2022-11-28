import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWebhooksWebhookIdLogsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class GetWebhooksWebhookIdLogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
  pageSize?: number;
}


export class GetWebhooksWebhookIdLogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWebhooksWebhookIdLogsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetWebhooksWebhookIdLogsQueryParams;
}


export class GetWebhooksWebhookIdLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listWebhookDeliveryLogsResponse?: shared.ListWebhookDeliveryLogsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
