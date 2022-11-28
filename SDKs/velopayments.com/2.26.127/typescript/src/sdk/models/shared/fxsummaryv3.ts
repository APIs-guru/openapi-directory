import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentAuditCurrencyV3Enum } from "./paymentauditcurrencyv3enum";


export enum FxSummaryV3FundingStatusEnum {
    Funded = "FUNDED",
    Instructed = "INSTRUCTED",
    Unfunded = "UNFUNDED"
}

export enum FxSummaryV3StatusEnum {
    Unquoted = "UNQUOTED",
    Quoted = "QUOTED",
    Expired = "EXPIRED",
    Executed = "EXECUTED"
}


export class FxSummaryV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=fundingStatus" })
  fundingStatus: FxSummaryV3FundingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=invertedRate" })
  invertedRate: number;

  @SpeakeasyMetadata({ data: "json, name=paymentCurrency" })
  paymentCurrency?: PaymentAuditCurrencyV3Enum;

  @SpeakeasyMetadata({ data: "json, name=quoteId" })
  quoteId: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate: number;

  @SpeakeasyMetadata({ data: "json, name=sourceCurrency" })
  sourceCurrency?: PaymentAuditCurrencyV3Enum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: FxSummaryV3StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=totalCost" })
  totalCost: number;

  @SpeakeasyMetadata({ data: "json, name=totalPaymentAmount" })
  totalPaymentAmount: number;
}
