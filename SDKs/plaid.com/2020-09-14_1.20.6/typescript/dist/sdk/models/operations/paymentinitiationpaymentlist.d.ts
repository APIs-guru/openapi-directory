import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentInitiationPaymentListRequest extends SpeakeasyBase {
    request: shared.PaymentInitiationPaymentListRequest;
}
export declare class PaymentInitiationPaymentListResponse extends SpeakeasyBase {
    contentType: string;
    paymentInitiationPaymentListResponse?: Map<string, any>;
    statusCode: number;
}
