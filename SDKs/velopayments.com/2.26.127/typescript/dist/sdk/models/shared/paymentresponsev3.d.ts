import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentEventResponseV3 } from "./paymenteventresponsev3";
import { PaymentAuditCurrencyV3Enum } from "./paymentauditcurrencyv3enum";
export declare enum PaymentResponseV3FundingStatusEnum {
    Funded = "FUNDED",
    Instructed = "INSTRUCTED",
    Unfunded = "UNFUNDED"
}
export declare enum PaymentResponseV3StatusEnum {
    Accepted = "ACCEPTED",
    AwaitingFunds = "AWAITING_FUNDS",
    Funded = "FUNDED",
    Unfunded = "UNFUNDED",
    BankPaymentRequested = "BANK_PAYMENT_REQUESTED",
    Rejected = "REJECTED",
    AcceptedByRails = "ACCEPTED_BY_RAILS",
    Confirmed = "CONFIRMED",
    Failed = "FAILED",
    Withdrawn = "WITHDRAWN"
}
export declare class PaymentResponseV3 extends SpeakeasyBase {
    accountName?: string;
    accountNumber?: string;
    countryCode?: string;
    events: PaymentEventResponseV3[];
    filenameReference?: string;
    fundingStatus: PaymentResponseV3FundingStatusEnum;
    iban?: string;
    individualIdentificationNumber?: string;
    invertedRate?: number;
    payeeId: string;
    paymentAmount: number;
    paymentChannelId?: string;
    paymentChannelName?: string;
    paymentCurrency?: PaymentAuditCurrencyV3Enum;
    paymentId: string;
    paymentMemo?: string;
    payorId: string;
    payorName?: string;
    payorPaymentId?: string;
    quoteId: string;
    railsBatchId?: string;
    railsId: string;
    railsPaymentId?: string;
    rate?: number;
    rejectionReason?: string;
    remoteId?: string;
    returnCost?: number;
    returnReason?: string;
    routingNumber?: string;
    sourceAccountId: string;
    sourceAccountName?: string;
    sourceAmount?: number;
    sourceCurrency?: PaymentAuditCurrencyV3Enum;
    status: PaymentResponseV3StatusEnum;
    submittedDateTime: Date;
    traceNumber?: string;
}
