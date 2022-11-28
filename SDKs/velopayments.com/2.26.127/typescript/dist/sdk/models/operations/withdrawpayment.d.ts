import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WithdrawPaymentPathParams extends SpeakeasyBase {
    paymentId: string;
}
export declare class WithdrawPaymentRequest extends SpeakeasyBase {
    pathParams: WithdrawPaymentPathParams;
    request: shared.WithdrawPaymentRequest;
}
export declare class WithdrawPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
