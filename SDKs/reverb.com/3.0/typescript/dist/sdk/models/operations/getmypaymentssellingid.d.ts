import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyPaymentsSellingIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetMyPaymentsSellingIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyPaymentsSellingIdRequest extends SpeakeasyBase {
    pathParams: GetMyPaymentsSellingIdPathParams;
    security: GetMyPaymentsSellingIdSecurity;
}
export declare class GetMyPaymentsSellingIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
