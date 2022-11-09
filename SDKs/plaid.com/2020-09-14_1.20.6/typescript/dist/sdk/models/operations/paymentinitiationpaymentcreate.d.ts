import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PaymentInitiationPaymentCreateRequest extends SpeakeasyBase {
    request: shared.PaymentInitiationPaymentCreateRequest;
}
export declare class PaymentInitiationPaymentCreateResponse extends SpeakeasyBase {
    contentType: string;
    paymentInitiationPaymentCreateResponse?: Map<string, any>;
    statusCode: number;
}
