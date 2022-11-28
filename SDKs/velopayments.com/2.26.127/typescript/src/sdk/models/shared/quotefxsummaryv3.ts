import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum QuoteFxSummaryV3FundingStatusEnum {
    Unfunded = "UNFUNDED",
    Instructed = "INSTRUCTED",
    Funded = "FUNDED"
}

export enum QuoteFxSummaryV3StatusEnum {
    Unquoted = "UNQUOTED",
    Quoted = "QUOTED",
    Expired = "EXPIRED",
    Executed = "EXECUTED",
    Rejected = "REJECTED"
}


export class QuoteFxSummaryV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=expiryTime" })
  expiryTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=fundingStatus" })
  fundingStatus: QuoteFxSummaryV3FundingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=invertedRate" })
  invertedRate?: number;

  @SpeakeasyMetadata({ data: "json, name=paymentCurrency" })
  paymentCurrency: string;

  @SpeakeasyMetadata({ data: "json, name=quoteId" })
  quoteId: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate: number;

  @SpeakeasyMetadata({ data: "json, name=sourceCurrency" })
  sourceCurrency: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: QuoteFxSummaryV3StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=totalPaymentAmount" })
  totalPaymentAmount: number;

  @SpeakeasyMetadata({ data: "json, name=totalSourceAmount" })
  totalSourceAmount: number;
}
