import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyOrdersSellingUnpaidSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyOrdersSellingUnpaidRequest extends SpeakeasyBase {
    security: GetMyOrdersSellingUnpaidSecurity;
}
export declare class GetMyOrdersSellingUnpaidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
