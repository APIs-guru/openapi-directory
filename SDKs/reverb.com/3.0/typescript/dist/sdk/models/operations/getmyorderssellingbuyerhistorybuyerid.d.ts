import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyOrdersSellingBuyerHistoryBuyerIdPathParams extends SpeakeasyBase {
    buyerId: string;
}
export declare class GetMyOrdersSellingBuyerHistoryBuyerIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyOrdersSellingBuyerHistoryBuyerIdRequest extends SpeakeasyBase {
    pathParams: GetMyOrdersSellingBuyerHistoryBuyerIdPathParams;
    security: GetMyOrdersSellingBuyerHistoryBuyerIdSecurity;
}
export declare class GetMyOrdersSellingBuyerHistoryBuyerIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
