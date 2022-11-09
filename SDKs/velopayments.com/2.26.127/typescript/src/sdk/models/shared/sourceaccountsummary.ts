import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PaymentAuditCurrencyEnum } from "./paymentauditcurrencyenum";


export class SourceAccountSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: PaymentAuditCurrencyEnum;

  @Metadata({ data: "json, name=sourceAccountId" })
  sourceAccountId: string;

  @Metadata({ data: "json, name=totalCost" })
  totalCost: number;
}
