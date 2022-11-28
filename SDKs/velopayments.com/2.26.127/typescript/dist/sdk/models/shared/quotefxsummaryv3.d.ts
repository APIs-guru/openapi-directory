import { SpeakeasyBase } from "../../../internal/utils";
export declare enum QuoteFxSummaryV3FundingStatusEnum {
    Unfunded = "UNFUNDED",
    Instructed = "INSTRUCTED",
    Funded = "FUNDED"
}
export declare enum QuoteFxSummaryV3StatusEnum {
    Unquoted = "UNQUOTED",
    Quoted = "QUOTED",
    Expired = "EXPIRED",
    Executed = "EXECUTED",
    Rejected = "REJECTED"
}
export declare class QuoteFxSummaryV3 extends SpeakeasyBase {
    creationTime: Date;
    expiryTime?: Date;
    fundingStatus: QuoteFxSummaryV3FundingStatusEnum;
    invertedRate?: number;
    paymentCurrency: string;
    quoteId: string;
    rate: number;
    sourceCurrency: string;
    status: QuoteFxSummaryV3StatusEnum;
    totalPaymentAmount: number;
    totalSourceAmount: number;
}
