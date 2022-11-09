import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PaymentInitiationRecipientGetRequest extends SpeakeasyBase {
    request: shared.PaymentInitiationRecipientGetRequest;
}
export declare class PaymentInitiationRecipientGetResponse extends SpeakeasyBase {
    contentType: string;
    paymentInitiationRecipientGetResponse?: Map<string, any>;
    statusCode: number;
}
