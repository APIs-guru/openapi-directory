import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyOrdersSellingAllSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyOrdersSellingAllRequest extends SpeakeasyBase {
    security: GetMyOrdersSellingAllSecurity;
}
export declare class GetMyOrdersSellingAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
