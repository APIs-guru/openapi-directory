import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOrdersOrderIdFeedbackBuyerPathParams extends SpeakeasyBase {
    orderId: string;
}
export declare class PostOrdersOrderIdFeedbackBuyerSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostOrdersOrderIdFeedbackBuyerRequest extends SpeakeasyBase {
    pathParams: PostOrdersOrderIdFeedbackBuyerPathParams;
    security: PostOrdersOrderIdFeedbackBuyerSecurity;
}
export declare class PostOrdersOrderIdFeedbackBuyerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
