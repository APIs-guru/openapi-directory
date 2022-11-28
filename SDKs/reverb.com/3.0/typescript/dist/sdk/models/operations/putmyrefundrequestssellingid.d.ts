import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutMyRefundRequestsSellingIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutMyRefundRequestsSellingIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PutMyRefundRequestsSellingIdRequest extends SpeakeasyBase {
    pathParams: PutMyRefundRequestsSellingIdPathParams;
    security: PutMyRefundRequestsSellingIdSecurity;
}
export declare class PutMyRefundRequestsSellingIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
