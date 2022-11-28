import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentsForPayoutPaV3PathParams extends SpeakeasyBase {
    payoutId: string;
}
export declare enum GetPaymentsForPayoutPaV3StatusEnum {
    Accepted = "ACCEPTED",
    AwaitingFunds = "AWAITING_FUNDS",
    Funded = "FUNDED",
    Unfunded = "UNFUNDED",
    BankPaymentRequested = "BANK_PAYMENT_REQUESTED",
    Rejected = "REJECTED",
    AcceptedByRails = "ACCEPTED_BY_RAILS",
    Confirmed = "CONFIRMED",
    Failed = "FAILED",
    Returned = "RETURNED",
    Withdrawn = "WITHDRAWN"
}
export declare class GetPaymentsForPayoutPaV3QueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    paymentAmountFrom?: number;
    paymentAmountTo?: number;
    remoteId?: string;
    sensitive?: boolean;
    sort?: string;
    sourceAmountFrom?: number;
    sourceAmountTo?: number;
    status?: GetPaymentsForPayoutPaV3StatusEnum;
    submittedDateFrom?: Date;
    submittedDateTo?: Date;
}
export declare class GetPaymentsForPayoutPaV3Request extends SpeakeasyBase {
    pathParams: GetPaymentsForPayoutPaV3PathParams;
    queryParams: GetPaymentsForPayoutPaV3QueryParams;
}
export declare class GetPaymentsForPayoutPaV3Response extends SpeakeasyBase {
    contentType: string;
    getPaymentsForPayoutResponseV3?: shared.GetPaymentsForPayoutResponseV3;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
