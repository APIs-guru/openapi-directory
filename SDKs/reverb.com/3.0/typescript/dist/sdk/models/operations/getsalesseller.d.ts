import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSalesSellerSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetSalesSellerRequest extends SpeakeasyBase {
    security: GetSalesSellerSecurity;
}
export declare class GetSalesSellerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
