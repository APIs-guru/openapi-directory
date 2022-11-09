import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PaymentInitiationRecipientListRequest extends SpeakeasyBase {
    request: shared.PaymentInitiationRecipientListRequest;
}
export declare class PaymentInitiationRecipientListResponse extends SpeakeasyBase {
    contentType: string;
    paymentInitiationRecipientListResponse?: Map<string, any>;
    statusCode: number;
}
