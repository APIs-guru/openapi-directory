import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePaymentTokenRequest extends SpeakeasyBase {
    request: shared.PaymentInitiationPaymentTokenCreateRequest;
}
export declare class CreatePaymentTokenResponse extends SpeakeasyBase {
    contentType: string;
    paymentInitiationPaymentTokenCreateResponse?: Map<string, any>;
    statusCode: number;
}
