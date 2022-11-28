import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostWebhooksRegistrationsRequestBodyTopicEnum {
    ListingsUpdate = "listings/update",
    ListingsPublish = "listings/publish",
    ListingsBumpsRanOut = "listings/bumps-ran-out",
    OrdersCreate = "orders/create",
    OrdersUpdate = "orders/update",
    PaymentsCreate = "payments/create",
    PaymentsUpdate = "payments/update",
    AppUninstalled = "app/uninstalled"
}
export declare class PostWebhooksRegistrationsRequestBody extends SpeakeasyBase {
    topic: PostWebhooksRegistrationsRequestBodyTopicEnum;
    url: string;
}
export declare class PostWebhooksRegistrationsRequest extends SpeakeasyBase {
    request?: PostWebhooksRegistrationsRequestBody;
}
export declare class PostWebhooksRegistrationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
