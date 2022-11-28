import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";
export declare enum FxSummaryFundingStatusEnum {
    Funded = "FUNDED",
    Instructed = "INSTRUCTED",
    Unfunded = "UNFUNDED"
}
export declare enum FxSummaryStatusEnum {
    Unquoted = "UNQUOTED",
    Quoted = "QUOTED",
    Expired = "EXPIRED",
    Executed = "EXECUTED"
}
export declare class FxSummary extends SpeakeasyBase {
    creationDateTime: Date;
    fundingStatus: FxSummaryFundingStatusEnum;
    invertedRate: number;
    paymentCurrency?: PaymentAuditCurrencyEnum;
    quoteId: string;
    rate: number;
    sourceCurrency?: PaymentAuditCurrencyEnum;
    status: FxSummaryStatusEnum;
    totalCost: number;
    totalPaymentAmount: number;
}
