import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PaymentInitiationPaymentGetRequest extends SpeakeasyBase {
    request: shared.PaymentInitiationPaymentGetRequest;
}
export declare class PaymentInitiationPaymentGetResponse extends SpeakeasyBase {
    contentType: string;
    paymentInitiationPaymentGetResponse?: Map<string, any>;
    statusCode: number;
}
