import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyOrdersBuyingAllSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyOrdersBuyingAllRequest extends SpeakeasyBase {
    security: GetMyOrdersBuyingAllSecurity;
}
export declare class GetMyOrdersBuyingAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
