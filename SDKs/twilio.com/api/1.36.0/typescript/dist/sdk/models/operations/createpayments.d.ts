import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEPAYMENTS_SERVERS: string[];
export declare class CreatePaymentsPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
}
export declare class CreatePaymentsCreatePaymentsRequest extends SpeakeasyBase {
    bankAccountType?: shared.PaymentsEnumBankAccountTypeEnum;
    chargeAmount?: number;
    currency?: string;
    description?: string;
    idempotencyKey: string;
    input?: string;
    minPostalCodeLength?: number;
    parameter?: any;
    paymentConnector?: string;
    paymentMethod?: shared.PaymentsEnumPaymentMethodEnum;
    postalCode?: boolean;
    securityCode?: boolean;
    statusCallback: string;
    timeout?: number;
    tokenType?: shared.PaymentsEnumTokenTypeEnum;
    validCardTypes?: string;
}
export declare class CreatePaymentsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreatePaymentsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreatePaymentsPathParams;
    request?: CreatePaymentsCreatePaymentsRequest;
    security: CreatePaymentsSecurity;
}
export declare class CreatePaymentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCallPayments?: shared.ApiV2010AccountCallPayments;
}
