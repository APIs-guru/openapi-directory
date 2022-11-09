import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWebhooksWebhookIdLogsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class GetWebhooksWebhookIdLogsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
  pageSize?: number;
}


export class GetWebhooksWebhookIdLogsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWebhooksWebhookIdLogsPathParams;

  @Metadata()
  queryParams: GetWebhooksWebhookIdLogsQueryParams;
}


export class GetWebhooksWebhookIdLogsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWebhookDeliveryLogsResponse?: shared.ListWebhookDeliveryLogsResponse;

  @Metadata()
  statusCode: number;
}
