import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyOrdersSellingIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetMyOrdersSellingIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyOrdersSellingIdRequest extends SpeakeasyBase {
    pathParams: GetMyOrdersSellingIdPathParams;
    security: GetMyOrdersSellingIdSecurity;
}
export declare class GetMyOrdersSellingIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
