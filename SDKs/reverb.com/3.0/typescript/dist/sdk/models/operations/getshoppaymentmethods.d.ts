import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShopPaymentMethodsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetShopPaymentMethodsRequest extends SpeakeasyBase {
    security: GetShopPaymentMethodsSecurity;
}
export declare class GetShopPaymentMethodsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
