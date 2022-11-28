import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentsForPayoutV4PathParams extends SpeakeasyBase {
    payoutId: string;
}
export declare enum GetPaymentsForPayoutV4StatusEnum {
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
export declare enum GetPaymentsForPayoutV4TransmissionTypeEnum {
    Ach = "ACH",
    SameDayAch = "SAME_DAY_ACH",
    Wire = "WIRE"
}
export declare class GetPaymentsForPayoutV4QueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    paymentAmountFrom?: number;
    paymentAmountTo?: number;
    remoteId?: string;
    remoteSystemId?: string;
    sensitive?: boolean;
    sort?: string;
    sourceAmountFrom?: number;
    sourceAmountTo?: number;
    status?: GetPaymentsForPayoutV4StatusEnum;
    submittedDateFrom?: Date;
    submittedDateTo?: Date;
    transmissionType?: GetPaymentsForPayoutV4TransmissionTypeEnum;
}
export declare class GetPaymentsForPayoutV4Request extends SpeakeasyBase {
    pathParams: GetPaymentsForPayoutV4PathParams;
    queryParams: GetPaymentsForPayoutV4QueryParams;
}
export declare class GetPaymentsForPayoutV4Response extends SpeakeasyBase {
    contentType: string;
    getPaymentsForPayoutResponseV4?: shared.GetPaymentsForPayoutResponseV4;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
