import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListPaymentsAuditV3StatusEnum {
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
export declare class ListPaymentsAuditV3QueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    payeeId?: string;
    paymentAmountFrom?: number;
    paymentAmountTo?: number;
    paymentCurrency?: string;
    paymentMemo?: string;
    payorId?: string;
    payorName?: string;
    remoteId?: string;
    sensitive?: boolean;
    sort?: string;
    sourceAccountName?: string;
    sourceAmountFrom?: number;
    sourceAmountTo?: number;
    sourceCurrency?: string;
    status?: ListPaymentsAuditV3StatusEnum;
    submittedDateFrom?: Date;
    submittedDateTo?: Date;
}
export declare class ListPaymentsAuditV3Request extends SpeakeasyBase {
    queryParams: ListPaymentsAuditV3QueryParams;
}
export declare class ListPaymentsAuditV3Response extends SpeakeasyBase {
    contentType: string;
    listPaymentsResponseV3?: shared.ListPaymentsResponseV3;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
