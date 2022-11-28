import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyOrdersBuyingUnpaidSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyOrdersBuyingUnpaidRequest extends SpeakeasyBase {
    security: GetMyOrdersBuyingUnpaidSecurity;
}
export declare class GetMyOrdersBuyingUnpaidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
