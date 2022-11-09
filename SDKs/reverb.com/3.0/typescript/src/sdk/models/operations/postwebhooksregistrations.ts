import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostWebhooksRegistrationsRequestBodyTopicEnum {
    ListingsUpdate = "listings/update"
,    ListingsPublish = "listings/publish"
,    ListingsBumpsRanOut = "listings/bumps-ran-out"
,    OrdersCreate = "orders/create"
,    OrdersUpdate = "orders/update"
,    PaymentsCreate = "payments/create"
,    PaymentsUpdate = "payments/update"
,    AppUninstalled = "app/uninstalled"
}


export class PostWebhooksRegistrationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=topic" })
  topic: PostWebhooksRegistrationsRequestBodyTopicEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class PostWebhooksRegistrationsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostWebhooksRegistrationsRequestBody;
}


export class PostWebhooksRegistrationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
