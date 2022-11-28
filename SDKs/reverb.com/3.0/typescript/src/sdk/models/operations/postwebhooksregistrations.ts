import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostWebhooksRegistrationsRequestBodyTopicEnum {
    ListingsUpdate = "listings/update",
    ListingsPublish = "listings/publish",
    ListingsBumpsRanOut = "listings/bumps-ran-out",
    OrdersCreate = "orders/create",
    OrdersUpdate = "orders/update",
    PaymentsCreate = "payments/create",
    PaymentsUpdate = "payments/update",
    AppUninstalled = "app/uninstalled"
}


export class PostWebhooksRegistrationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic: PostWebhooksRegistrationsRequestBodyTopicEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class PostWebhooksRegistrationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostWebhooksRegistrationsRequestBody;
}


export class PostWebhooksRegistrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
