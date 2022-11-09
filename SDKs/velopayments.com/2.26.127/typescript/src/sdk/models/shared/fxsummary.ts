import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";

export enum FxSummaryFundingStatusEnum {
    Funded = "FUNDED"
,    Instructed = "INSTRUCTED"
,    Unfunded = "UNFUNDED"
}

export enum FxSummaryStatusEnum {
    Unquoted = "UNQUOTED"
,    Quoted = "QUOTED"
,    Expired = "EXPIRED"
,    Executed = "EXECUTED"
}


export class FxSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=fundingStatus" })
  fundingStatus: FxSummaryFundingStatusEnum;

  @Metadata({ data: "json, name=invertedRate" })
  invertedRate: number;

  @Metadata({ data: "json, name=paymentCurrency" })
  paymentCurrency?: PaymentAuditCurrencyEnum;

  @Metadata({ data: "json, name=quoteId" })
  quoteId: string;

  @Metadata({ data: "json, name=rate" })
  rate: number;

  @Metadata({ data: "json, name=sourceCurrency" })
  sourceCurrency?: PaymentAuditCurrencyEnum;

  @Metadata({ data: "json, name=status" })
  status: FxSummaryStatusEnum;

  @Metadata({ data: "json, name=totalCost" })
  totalCost: number;

  @Metadata({ data: "json, name=totalPaymentAmount" })
  totalPaymentAmount: number;
}
