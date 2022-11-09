import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum QuoteFxSummaryV3FundingStatusEnum {
    Unfunded = "UNFUNDED"
,    Instructed = "INSTRUCTED"
,    Funded = "FUNDED"
}

export enum QuoteFxSummaryV3StatusEnum {
    Unquoted = "UNQUOTED"
,    Quoted = "QUOTED"
,    Expired = "EXPIRED"
,    Executed = "EXECUTED"
,    Rejected = "REJECTED"
}


export class QuoteFxSummaryV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=expiryTime" })
  expiryTime?: Date;

  @Metadata({ data: "json, name=fundingStatus" })
  fundingStatus: QuoteFxSummaryV3FundingStatusEnum;

  @Metadata({ data: "json, name=invertedRate" })
  invertedRate?: number;

  @Metadata({ data: "json, name=paymentCurrency" })
  paymentCurrency: string;

  @Metadata({ data: "json, name=quoteId" })
  quoteId: string;

  @Metadata({ data: "json, name=rate" })
  rate: number;

  @Metadata({ data: "json, name=sourceCurrency" })
  sourceCurrency: string;

  @Metadata({ data: "json, name=status" })
  status: QuoteFxSummaryV3StatusEnum;

  @Metadata({ data: "json, name=totalPaymentAmount" })
  totalPaymentAmount: number;

  @Metadata({ data: "json, name=totalSourceAmount" })
  totalSourceAmount: number;
}
