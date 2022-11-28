import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyOrdersSellingOrderIdRefundRequestsPathParams extends SpeakeasyBase {
    orderId: string;
}
export declare class PostMyOrdersSellingOrderIdRefundRequestsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyOrdersSellingOrderIdRefundRequestsRequest extends SpeakeasyBase {
    pathParams: PostMyOrdersSellingOrderIdRefundRequestsPathParams;
    security: PostMyOrdersSellingOrderIdRefundRequestsSecurity;
}
export declare class PostMyOrdersSellingOrderIdRefundRequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
