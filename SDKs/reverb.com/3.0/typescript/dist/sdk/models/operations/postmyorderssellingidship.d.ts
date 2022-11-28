import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyOrdersSellingIdShipPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostMyOrdersSellingIdShipRequestBody extends SpeakeasyBase {
    provider: string;
    sendNotification: boolean;
    trackingNumber: string;
}
export declare class PostMyOrdersSellingIdShipSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyOrdersSellingIdShipRequest extends SpeakeasyBase {
    pathParams: PostMyOrdersSellingIdShipPathParams;
    request?: PostMyOrdersSellingIdShipRequestBody;
    security: PostMyOrdersSellingIdShipSecurity;
}
export declare class PostMyOrdersSellingIdShipResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
