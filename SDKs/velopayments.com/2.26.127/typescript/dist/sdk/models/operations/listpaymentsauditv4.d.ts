import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListPaymentsAuditV4StatusEnum {
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
export declare enum ListPaymentsAuditV4TransmissionTypeEnum {
    Ach = "ACH",
    SameDayAch = "SAME_DAY_ACH",
    Wire = "WIRE"
}
export declare class ListPaymentsAuditV4QueryParams extends SpeakeasyBase {
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
    remoteSystemId?: string;
    sensitive?: boolean;
    sort?: string;
    sourceAccountName?: string;
    sourceAmountFrom?: number;
    sourceAmountTo?: number;
    sourceCurrency?: string;
    status?: ListPaymentsAuditV4StatusEnum;
    submittedDateFrom?: Date;
    submittedDateTo?: Date;
    transmissionType?: ListPaymentsAuditV4TransmissionTypeEnum;
}
export declare class ListPaymentsAuditV4Request extends SpeakeasyBase {
    queryParams: ListPaymentsAuditV4QueryParams;
}
export declare class ListPaymentsAuditV4Response extends SpeakeasyBase {
    contentType: string;
    listPaymentsResponseV4?: shared.ListPaymentsResponseV4;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
