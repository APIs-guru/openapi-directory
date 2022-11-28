import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOrdersOrderIdFeedbackSellerPathParams extends SpeakeasyBase {
    orderId: string;
}
export declare class PostOrdersOrderIdFeedbackSellerSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostOrdersOrderIdFeedbackSellerRequest extends SpeakeasyBase {
    pathParams: PostOrdersOrderIdFeedbackSellerPathParams;
    security: PostOrdersOrderIdFeedbackSellerSecurity;
}
export declare class PostOrdersOrderIdFeedbackSellerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
