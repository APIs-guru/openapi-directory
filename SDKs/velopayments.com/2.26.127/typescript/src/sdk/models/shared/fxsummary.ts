import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";


export enum FxSummaryFundingStatusEnum {
    Funded = "FUNDED",
    Instructed = "INSTRUCTED",
    Unfunded = "UNFUNDED"
}

export enum FxSummaryStatusEnum {
    Unquoted = "UNQUOTED",
    Quoted = "QUOTED",
    Expired = "EXPIRED",
    Executed = "EXECUTED"
}


export class FxSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=fundingStatus" })
  fundingStatus: FxSummaryFundingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=invertedRate" })
  invertedRate: number;

  @SpeakeasyMetadata({ data: "json, name=paymentCurrency" })
  paymentCurrency?: PaymentAuditCurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=quoteId" })
  quoteId: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate: number;

  @SpeakeasyMetadata({ data: "json, name=sourceCurrency" })
  sourceCurrency?: PaymentAuditCurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: FxSummaryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=totalCost" })
  totalCost: number;

  @SpeakeasyMetadata({ data: "json, name=totalPaymentAmount" })
  totalPaymentAmount: number;
}
