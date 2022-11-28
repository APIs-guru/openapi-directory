import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyRefundRequestsSellingSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyRefundRequestsSellingRequest extends SpeakeasyBase {
    security: GetMyRefundRequestsSellingSecurity;
}
export declare class GetMyRefundRequestsSellingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
