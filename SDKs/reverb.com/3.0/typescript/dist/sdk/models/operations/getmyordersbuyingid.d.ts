import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyOrdersBuyingIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetMyOrdersBuyingIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyOrdersBuyingIdRequest extends SpeakeasyBase {
    pathParams: GetMyOrdersBuyingIdPathParams;
    security: GetMyOrdersBuyingIdSecurity;
}
export declare class GetMyOrdersBuyingIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
