import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PaymentAuditCurrencyV3Enum } from "./paymentauditcurrencyv3enum";
import { PaymentAuditCurrencyV3Enum } from "./paymentauditcurrencyv3enum";

export enum FxSummaryV3FundingStatusEnum {
    Funded = "FUNDED"
,    Instructed = "INSTRUCTED"
,    Unfunded = "UNFUNDED"
}

export enum FxSummaryV3StatusEnum {
    Unquoted = "UNQUOTED"
,    Quoted = "QUOTED"
,    Expired = "EXPIRED"
,    Executed = "EXECUTED"
}


export class FxSummaryV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=fundingStatus" })
  fundingStatus: FxSummaryV3FundingStatusEnum;

  @Metadata({ data: "json, name=invertedRate" })
  invertedRate: number;

  @Metadata({ data: "json, name=paymentCurrency" })
  paymentCurrency?: PaymentAuditCurrencyV3Enum;

  @Metadata({ data: "json, name=quoteId" })
  quoteId: string;

  @Metadata({ data: "json, name=rate" })
  rate: number;

  @Metadata({ data: "json, name=sourceCurrency" })
  sourceCurrency?: PaymentAuditCurrencyV3Enum;

  @Metadata({ data: "json, name=status" })
  status: FxSummaryV3StatusEnum;

  @Metadata({ data: "json, name=totalCost" })
  totalCost: number;

  @Metadata({ data: "json, name=totalPaymentAmount" })
  totalPaymentAmount: number;
}
