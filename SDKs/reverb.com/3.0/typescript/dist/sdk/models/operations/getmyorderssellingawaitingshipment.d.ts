import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyOrdersSellingAwaitingShipmentSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyOrdersSellingAwaitingShipmentRequest extends SpeakeasyBase {
    security: GetMyOrdersSellingAwaitingShipmentSecurity;
}
export declare class GetMyOrdersSellingAwaitingShipmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
