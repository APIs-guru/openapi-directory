import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPaymentChannelRulesV1Response extends SpeakeasyBase {
    contentType: string;
    paymentChannelRulesResponse?: shared.PaymentChannelRulesResponse;
    statusCode: number;
    inlineResponse401?: any;
}
