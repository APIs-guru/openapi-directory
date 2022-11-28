import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentAuditCurrencyV3Enum } from "./paymentauditcurrencyv3enum";
export declare enum FxSummaryV3FundingStatusEnum {
    Funded = "FUNDED",
    Instructed = "INSTRUCTED",
    Unfunded = "UNFUNDED"
}
export declare enum FxSummaryV3StatusEnum {
    Unquoted = "UNQUOTED",
    Quoted = "QUOTED",
    Expired = "EXPIRED",
    Executed = "EXECUTED"
}
export declare class FxSummaryV3 extends SpeakeasyBase {
    creationDateTime: Date;
    fundingStatus: FxSummaryV3FundingStatusEnum;
    invertedRate: number;
    paymentCurrency?: PaymentAuditCurrencyV3Enum;
    quoteId: string;
    rate: number;
    sourceCurrency?: PaymentAuditCurrencyV3Enum;
    status: FxSummaryV3StatusEnum;
    totalCost: number;
    totalPaymentAmount: number;
}
