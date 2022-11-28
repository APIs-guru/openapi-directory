import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentEventResponse } from "./paymenteventresponse";
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";
export declare enum PaymentResponseV4FundingStatusEnum {
    Funded = "FUNDED",
    Instructed = "INSTRUCTED",
    Unfunded = "UNFUNDED"
}
export declare enum PaymentResponseV4StatusEnum {
    Accepted = "ACCEPTED",
    AwaitingFunds = "AWAITING_FUNDS",
    Funded = "FUNDED",
    Unfunded = "UNFUNDED",
    BankPaymentRequested = "BANK_PAYMENT_REQUESTED",
    Rejected = "REJECTED",
    AcceptedByRails = "ACCEPTED_BY_RAILS",
    Confirmed = "CONFIRMED",
    Returned = "RETURNED",
    Withdrawn = "WITHDRAWN"
}
export declare class PaymentResponseV4 extends SpeakeasyBase {
    accountName?: string;
    accountNumber?: string;
    countryCode?: string;
    events: PaymentEventResponse[];
    filenameReference?: string;
    fundingStatus: PaymentResponseV4FundingStatusEnum;
    iban?: string;
    individualIdentificationNumber?: string;
    invertedRate?: number;
    isPaymentCcyBaseCcy?: boolean;
    payeeId: string;
    paymentAmount: number;
    paymentChannelId?: string;
    paymentChannelName?: string;
    paymentCurrency?: PaymentAuditCurrencyEnum;
    paymentId: string;
    paymentMemo?: string;
    paymentMetadata?: string;
    paymentTrackingReference?: string;
    payorId: string;
    payorName?: string;
    payorPaymentId?: string;
    payout?: any;
    quoteId: string;
    railsBatchId?: string;
    railsId: string;
    railsPaymentId?: string;
    rate?: number;
    rejectionReason?: string;
    remoteId?: string;
    remoteSystemId?: string;
    remoteSystemPaymentId?: string;
    returnCost?: number;
    returnReason?: string;
    routingNumber?: string;
    sourceAccountId: string;
    sourceAccountName?: string;
    sourceAmount?: number;
    sourceCurrency?: PaymentAuditCurrencyEnum;
    status: PaymentResponseV4StatusEnum;
    submittedDateTime: Date;
    traceNumber?: string;
    transmissionType?: string;
    withdrawable?: boolean;
    withdrawnReason?: string;
}
